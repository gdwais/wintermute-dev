# Autonomous Closed-Loop Multi-Agent System — Research & Architecture

## The Core Question
How do we build a fully autonomous, closed-loop system where a team of AI agents runs a company's operations with minimal human intervention — using Notion as the visibility/dashboard layer, not the coordination layer?

---

## 1. What "Closed Loop" Actually Means

A closed-loop agent system has these properties:
- **Self-triggering**: Agents don't wait for human prompts — they react to events, schedules, and each other
- **Feedback integration**: Output from one agent becomes input for another (or loops back to the same agent for refinement)
- **Human-in-the-loop by exception**: Humans only intervene at defined review gates, not at every step
- **Self-monitoring**: The system detects failures, stale tasks, and quality issues without being told

```
┌──────────────────────────────────────────────────┐
│                  EVENT SOURCES                    │
│  (schedules, webhooks, heartbeats, agent output)  │
└───────────────────┬──────────────────────────────┘
                    │
           ┌────────▼────────┐
           │    Executive     │  ← orchestrator / router
           │   (hub agent)    │
           └─┬───┬───┬───┬──┘
             │   │   │   │
     ┌───────▼┐┌─▼──┐┌──▼────┐┌──▼───┐
     │Research ││Dev ││Content ││ ...  │  ← specialist agents
     └───┬────┘└─┬──┘└──┬────┘└──┬───┘
         │       │      │        │
         └───────┴──────┴────────┘
                    │
           ┌────────▼────────┐
           │  Shared State    │  ← blackboard / event bus
           │  (files, Notion) │
           └────────┬────────┘
                    │
           ┌────────▼────────┐
           │  Human Review    │  ← approval gates (async)
           │  (Notion board)  │
           └─────────────────┘
```

---

## 2. Async Considerations — The Hard Problems

### 2.1 Race Conditions & Shared State
**The problem**: Two agents read the same state, both modify it, one overwrites the other.

**Current discourse** (Network-AI framework, Tacnode patterns):
- **Blackboard pattern**: Shared markdown/JSON file with atomic read-write locks
- **Event-driven handoffs**: Agents emit domain events (e.g., `research_complete`), others subscribe — loose coupling, clear audit trail
- **File-system mutexes**: For local deployments, file locks prevent concurrent writes

**For our architecture**:
- OpenClaw agents are inherently async (each has its own session, no shared runtime)
- Coordination happens via `sessions_send` (message passing) or shared files in workspace
- Notion is read-after-write — use it for visibility, not as the coordination primitive
- **Recommendation**: Use a `coordination/` folder with JSON task files as the source of truth. Agents read/write task files. Notion syncs from these files for human visibility.

### 2.2 Task Lifecycle & Handoffs
**The problem**: Agent A finishes work and needs Agent B to pick it up. How does B know? What if B is busy? What if B fails?

**Patterns emerging in 2026**:
1. **Direct delegation** (`sessions_send`): Executive tells Researcher to do something. Simple but creates a bottleneck at Executive.
2. **Event queue**: Tasks go into a queue (file-based or Notion DB). Agents poll on heartbeats and claim unclaimed tasks.
3. **Pub/sub via files**: Agent writes to `coordination/events/research-complete-{id}.json`. Other agents check for new events on heartbeat.

**For our architecture**:
- **Hybrid**: Executive delegates high-level tasks via `sessions_send`. Agents write completion events to shared files. Executive picks up on heartbeat and routes next step.
- **Fallback**: If an agent doesn't respond within N heartbeats, Executive escalates or reassigns.

### 2.3 Human Review Gates (HITL)
**The problem**: You want agents to run autonomously, but certain actions need human approval before proceeding.

**Microsoft's pattern** (Azure Architecture Center):
- Mandatory gates make orchestration synchronous at that step
- Persist state at checkpoints to allow resumption without replaying prior work
- Scope gates to specific operations (not all agent output) — approve only sensitive/external actions

**For our architecture**:
- Notion board statuses: `In Progress` → `Review` → `Done`
- Agent moves task to `Review` and halts that task chain
- Human moves to `Done` (or rejects back to `In Progress` with notes)
- Agent polls Notion on heartbeat, sees status change, resumes
- **Key insight**: Only gate external-facing actions (publishing, sending emails, deploying). Internal work (research, drafts, analysis) can run autonomously.

### 2.4 Context Drift & Memory
**The problem**: Long-running tasks lose coherence. Agent forgets decisions made 10 steps ago.

**Current approaches**:
- **Per-task context files**: Each task has a `context.md` with accumulated decisions, not just final output
- **Memory summaries**: Agents write daily summaries; long-term decisions go to `MEMORY.md`
- **Shared knowledge base**: Common facts/decisions in a shared workspace file all agents can read

**For our architecture**:
- Each agent has its own `memory/` dir (OpenClaw native)
- Shared `knowledge/` folder in a common location for cross-agent facts
- Task context travels with the task (embedded in the task file or a linked context doc)

### 2.5 Infinite Loops & Runaway Agents
**The problem**: Agent A delegates to B, B delegates back to A, forever. Or agent keeps retrying a failed action.

**Safeguards**:
- **Iteration limits**: Max N loops per task (e.g., max 3 revision cycles)
- **Budget ceilings**: Token/cost cap per task and per day
- **Deadlines**: Tasks expire if not completed within time window
- **Governance agent**: A meta-agent that monitors system health, detects loops, kills stuck tasks

### 2.6 Ordering & Idempotency
**The problem**: Messages arrive out of order. An agent processes a "task cancelled" message after already completing the task.

**Patterns**:
- **Timestamps on all events**: Agents check event freshness before acting
- **Idempotent operations**: Processing the same event twice produces the same result
- **State machines**: Tasks have explicit states with valid transitions (can't go from `Done` back to `In Progress` without explicit rejection)

---

## 3. Architecture for WintermuteDev Deployments

### 3.1 Coordination Layer (NOT Notion)
```
~/.openclaw/shared/
├── tasks/
│   ├── task-001.json          ← { id, title, status, assignee, context, created, updated }
│   ├── task-002.json
│   └── ...
├── events/
│   ├── 2026-02-16T19-00-research-complete-001.json
│   └── ...
├── knowledge/
│   ├── company-profile.json
│   ├── brand-guidelines.md
│   └── decisions-log.md
└── config/
    └── workflow-rules.json    ← state machine definitions, review gates, limits
```

- **Tasks are JSON files** with explicit state machines
- **Events are append-only** — never modified, only created
- **Knowledge is shared read** — any agent can read, only specific agents write specific files
- Agents interact via file reads + `sessions_send` for urgent messages

### 3.2 Notion as Visibility Layer
```
Notion Board (synced, not source of truth)
┌──────────┬─────────────┬────────┬──────┬─────────┐
│  Inbox   │ In Progress │ Review │ Done │ Blocked │
└──────────┴─────────────┴────────┴──────┴─────────┘
```

- **Sync direction**: Task files → Notion (one-way for status updates)
- **Human input direction**: Notion → Task files (for review decisions, priority changes)
- Sync runs on Executive's heartbeat or a dedicated sync cron
- Properties: Name, Status, Priority, Type, Owner, Due, Agent Log, Context Link

**Why not Notion as coordination?**
- API rate limits (3 requests/sec)
- Latency (~200-500ms per call)
- No real-time push (agents would need to poll)
- Data model changes require API version awareness
- **Notion is great for humans to see what's happening — terrible for agents to coordinate through**

### 3.3 The Loop

```
TRIGGER (heartbeat / cron / event / human message)
    │
    ▼
EXECUTIVE checks:
    ├── New human messages? → Parse intent, create task
    ├── New events in events/? → Route to next agent
    ├── Tasks in Review with human decision? → Resume or reassign
    ├── Stale tasks (no update in N hours)? → Escalate or retry
    ├── Scheduled tasks due? → Kick off
    └── Nothing? → HEARTBEAT_OK
    │
    ▼
DELEGATE to specialist agent via sessions_send
    │
    ▼
SPECIALIST works (may take multiple turns)
    ├── Updates task file with progress
    ├── Writes output artifacts
    ├── If needs review → moves task to Review status
    ├── If complete → writes completion event
    └── If blocked → writes blocked event with reason
    │
    ▼
EXECUTIVE picks up on next heartbeat
    ├── Routes to next step in workflow
    ├── Syncs to Notion for human visibility
    └── Loop continues...
```

### 3.4 Heartbeat Cadence
- **Executive**: Every 5-15 minutes (the orchestrator, needs to be responsive)
- **Specialists**: Every 15-30 minutes (check for new tasks, continue work)
- **Sync agent** (optional): Every 10 minutes (Notion ↔ task files)

---

## 4. What People Are Talking About Now (Feb 2026)

### Industry Patterns
- **"Bounded autonomy"** (MLM): Clear operational limits + escalation paths + audit trails. Not full autonomy — autonomy within guardrails.
- **"Governance agents"** monitoring other agents for policy violations (Deloitte TMT Predictions 2026)
- **Event-driven coordination** over direct agent-to-agent calls (Tacnode, AWS Prescriptive Guidance)
- **"Agent bosses"** — humans managing agent teams the way they'd manage human teams (MIT Sloan)
- **Protocol convergence**: A2A (Google), MCP (Anthropic), AGNTCY (Cisco) competing — expected to consolidate to 2-3 standards by 2027

### Frameworks People Are Using
- **Network-AI**: Multi-framework orchestrator with blackboard pattern, race condition protection, token budgets
- **LangGraph**: Graph-based agent workflows with checkpointing
- **CrewAI**: Role-based agent teams (closest to what we're building)
- **OpenClaw native**: `sessions_send` + `sessions_spawn` + heartbeats + cron — lightweight, file-based, already handles persistence
- **n8n / Zapier**: For webhook-triggered agent workflows (less autonomous, more event-reactive)

### Key Insight from the Discourse
> "The shift in 2026 is from viewing governance as compliance overhead to recognizing it as an enabler." — MLM

> "Traditional managerial spans of control increase and the number of hierarchical layers decreases." — MIT Sloan

> "Instead of agents calling each other directly, they communicate primarily through domain events." — Tacnode

> "Mandatory gates make the orchestration synchronous at that step — persist state at checkpoints to allow resumption without replaying prior agent work." — Microsoft Azure Architecture Center

---

## 5. What We Need to Build

### Phase 1: Task File System + Executive Loop
- JSON task schema with state machine
- Executive heartbeat loop that checks tasks, events, and human input
- `sessions_send` delegation to specialists
- Basic event files for completion/blocked signals

### Phase 2: Notion Sync
- One-way sync: task files → Notion board
- Two-way for human review: Notion status changes → task file updates
- Executive handles sync on heartbeat

### Phase 3: Advanced Coordination
- Workflow rules engine (if task type X completes → auto-create task type Y)
- Budget tracking per task and per day
- Governance/monitoring agent
- Retry and escalation logic
- Quality gates (Brand Manager reviews Content Creator output before publish)

### Phase 4: Self-Improvement
- Agents log what worked and what didn't
- Executive reviews weekly performance and adjusts workflow rules
- Template refinement based on actual usage patterns

---

## 6. Open Questions for Dalton

1. **Review gate scope**: Which actions require human approval? (publishing, external comms, spending?) Everything else autonomous?
2. **Heartbeat frequency**: How responsive does the system need to be? 5-min loops? 15-min?
3. **Budget controls**: Per-task token limits? Daily spend caps?
4. **First client workflow**: What's the first end-to-end loop to build? (e.g., "research topic → draft content → brand review → publish")
5. **Notion vs. other dashboards**: Committed to Notion, or open to a simpler file-based dashboard initially?
