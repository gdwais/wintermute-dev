"use client";

import { useState, useEffect, useRef } from "react";

interface CronJob {
  name: string;
  time: string;
}

const cronJobs: CronJob[] = [
  { name: "pre-market-report", time: "5:30 AM" },
  { name: "portfolio-rebalance-check", time: "6:00 AM" },
  { name: "trade-validation", time: "6:15 AM" },
  { name: "competitor-intel-scan", time: "7:00 AM" },
  { name: "compliance-audit", time: "7:30 AM" },
  { name: "client-outreach-gen", time: "8:00 AM" },
  { name: "earnings-digest", time: "8:30 AM" },
  { name: "risk-exposure-report", time: "9:00 AM" },
  { name: "eod-trading-summary", time: "4:30 PM" },
  { name: "weekly-performance", time: "5:00 PM" },
];

// Pre-generate random-ish stagger offsets per job (deterministic so no hydration mismatch)
const staggerOffsets = [0, 3, 1, 5, 2, 7, 4, 6, 3, 8];
const transitionSpeeds = [2, 3, 2, 4, 3, 2, 5, 3, 4, 2]; // ticks to advance per status

type JobStatus = "idle" | "started" | "running" | "complete";

const statusColors: Record<JobStatus, string> = {
  idle: "#8888aa",
  started: "#febc2e",
  running: "#3E78B2",
  complete: "#28c840",
};

const statusIcons: Record<JobStatus, string> = {
  idle: "○",
  started: "◐",
  running: "●",
  complete: "✓",
};

function padName(name: string, width: number = 28): string {
  return name.padEnd(width, "\u00A0");
}

export default function AnimatedTerminal() {
  const [typedCommand, setTypedCommand] = useState("");
  const [showJobs, setShowJobs] = useState(false);
  const [visibleJobs, setVisibleJobs] = useState(0);
  const [jobStatuses, setJobStatuses] = useState<JobStatus[]>(
    cronJobs.map(() => "idle")
  );
  const [tick, setTick] = useState(0);
  const hasStarted = useRef(false);
  const commandText = "openclaw run --all";

  // Phase 1: Type out the command
  useEffect(() => {
    if (hasStarted.current) return;
    hasStarted.current = true;

    let i = 0;
    const typeInterval = setInterval(() => {
      i++;
      setTypedCommand(commandText.slice(0, i));
      if (i >= commandText.length) {
        clearInterval(typeInterval);
        setTimeout(() => setShowJobs(true), 600);
      }
    }, 90);

    return () => clearInterval(typeInterval);
  }, []);

  // Phase 2: Reveal jobs one by one with variable timing
  useEffect(() => {
    if (!showJobs || visibleJobs >= cronJobs.length) return;

    // Vary reveal speed: 80-200ms per job
    const delays = [150, 210, 120, 240, 180, 135, 270, 165, 225, 195];
    const timer = setTimeout(() => {
      setVisibleJobs((v) => v + 1);
    }, delays[visibleJobs] || 120);

    return () => clearTimeout(timer);
  }, [showJobs, visibleJobs]);

  // Phase 3: Tick forward once all jobs visible
  useEffect(() => {
    if (visibleJobs < cronJobs.length) return;

    const allComplete = jobStatuses.every((s) => s === "complete");
    if (allComplete) return;

    // Vary tick speed: 200-400ms
    const tickSpeed = 375 + Math.sin(tick * 1.7) * 150;
    const timer = setTimeout(() => {
      setTick((prev) => prev + 1);
    }, tickSpeed);

    return () => clearTimeout(timer);
  }, [visibleJobs, tick, jobStatuses]);

  // Update job statuses based on tick with per-job stagger
  useEffect(() => {
    if (tick === 0) return;

    setJobStatuses(() => {
      const next: JobStatus[] = [];
      for (let j = 0; j < cronJobs.length; j++) {
        const adjustedTick = tick - staggerOffsets[j];
        const speed = transitionSpeeds[j];

        if (adjustedTick <= 0) {
          next.push("idle");
        } else if (adjustedTick < speed) {
          next.push("started");
        } else if (adjustedTick < speed * 2) {
          next.push("running");
        } else {
          next.push("complete");
        }
      }
      return next;
    });
  }, [tick]);

  return (
    <div
      className="glass-card w-full p-6 font-mono text-sm"
      style={{ background: "rgba(10,10,18,.9)" }}
    >
      <div
        className="flex items-center gap-2 mb-4 pb-3"
        style={{ borderBottom: "1px solid rgba(62, 120, 178,.15)" }}
      >
        <span className="w-3 h-3 rounded-full" style={{ background: "#ff5f57" }} />
        <span className="w-3 h-3 rounded-full" style={{ background: "#febc2e" }} />
        <span className="w-3 h-3 rounded-full" style={{ background: "#28c840" }} />
        <span className="text-body-color text-xs ml-2">terminal</span>
      </div>

      <div className="space-y-1 text-body-color" style={{ minHeight: "280px" }}>
        <p>
          <span className="text-cyan">$</span> {typedCommand}
          {!showJobs && <span className="animate-blink">▌</span>}
        </p>

        {showJobs && (
          <>
            {cronJobs.slice(0, visibleJobs).map((job, i) => {
              const status = jobStatuses[i];
              return (
                <p key={job.name} className="transition-all duration-200">
                  <span style={{ color: statusColors[status] }}>
                    {statusIcons[status]}
                  </span>{" "}
                  <span className="text-text-main">{padName(job.name)}</span>
                  <span className="text-body-color">{job.time.padEnd(12, "\u00A0")}</span>
                  <span style={{ color: statusColors[status] }} className="transition-colors duration-300">
                    {status}
                  </span>
                </p>
              );
            })}
            {visibleJobs >= cronJobs.length && (
              <p className="mt-2">
                <span className="text-cyan">$</span>{" "}
                <span className="animate-blink">▌</span>
              </p>
            )}
          </>
        )}
      </div>
    </div>
  );
}
