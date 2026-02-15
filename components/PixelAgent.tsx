// SVG Pixel Art Agent Characters — 32x32 effective resolution (2px grid in 64x64 viewBox)
// Each agent has a unique pixel art body with distinguishing visual features

type AgentType =
  | "executive"
  | "researcher"
  | "developer"
  | "content-creator"
  | "brand-manager"
  | "social-media"
  | "project-manager"
  | "qa-engineer";

interface PixelAgentProps {
  type: AgentType;
  size?: number;
  className?: string;
}

const agentColors: Record<AgentType, { primary: string; secondary: string; accent: string }> = {
  executive: { primary: "#00f0ff", secondary: "#0a4a4f", accent: "#00a8b3" },
  researcher: { primary: "#9b59ff", secondary: "#3a1f5f", accent: "#6b2fb3" },
  developer: { primary: "#ff6b00", secondary: "#4f2800", accent: "#b34a00" },
  "content-creator": { primary: "#39ff14", secondary: "#0f4f08", accent: "#28b30e" },
  "brand-manager": { primary: "#ff00aa", secondary: "#4f0035", accent: "#b30077" },
  "social-media": { primary: "#ffe600", secondary: "#4f4700", accent: "#b3a100" },
  "project-manager": { primary: "#00bfa5", secondary: "#003f36", accent: "#008573" },
  "qa-engineer": { primary: "#ff1744", secondary: "#4f0815", accent: "#b3102f" },
};

const SKIN = "#e8d5b8";
const SKIN_HI = "#f0dfc8";
const SKIN_SH = "#c4a882";

// Pixel grid helper — 2px grid (32x32 effective in 64x64 viewBox)
function p(x: number, y: number, w: number, h: number, fill: string) {
  return <rect key={`${x}-${y}-${w}-${h}-${fill}`} x={x * 2} y={y * 2} width={w * 2} height={h * 2} fill={fill} />;
}

// ─── EXECUTIVE ────────────────────────────────────────────
function ExecutiveBody({ colors }: { colors: { primary: string; secondary: string; accent: string } }) {
  return (
    <g>
      {/* Hair - neat parted style with highlight */}
      {p(10, 2, 12, 1, colors.secondary)}
      {p(9, 3, 14, 2, colors.secondary)}
      {p(9, 5, 2, 1, colors.secondary)}
      {p(21, 5, 2, 1, colors.secondary)}
      {/* Hair highlight - part line */}
      {p(13, 3, 1, 2, "#1a6a70")}
      {/* Head - with skin shading */}
      {p(11, 5, 10, 1, SKIN_HI)}
      {p(10, 6, 12, 2, SKIN_HI)}
      {p(10, 8, 12, 3, SKIN)}
      {p(10, 11, 12, 2, SKIN_SH)}
      {/* Eyebrows */}
      {p(11, 7, 3, 1, colors.secondary)}
      {p(18, 7, 3, 1, colors.secondary)}
      {/* Eyes - confident narrow */}
      {p(11, 8, 3, 2, "#ffffff")}
      {p(18, 8, 3, 2, "#ffffff")}
      {p(12, 8, 2, 2, colors.secondary)}
      {p(19, 8, 2, 2, colors.secondary)}
      {/* Nose */}
      {p(15, 9, 2, 2, SKIN_SH)}
      {/* Smirk */}
      {p(13, 12, 6, 1, SKIN_SH)}
      {p(14, 12, 4, 1, "#c4a090")}
      {/* Earpiece - right side */}
      {p(22, 7, 2, 1, "#444444")}
      {p(23, 8, 1, 3, "#444444")}
      {p(23, 8, 1, 1, colors.accent)}
      {/* Neck */}
      {p(13, 13, 6, 2, SKIN)}
      {p(13, 13, 6, 1, SKIN_SH)}
      {/* Shirt collar showing */}
      {p(12, 15, 2, 2, "#ffffff")}
      {p(18, 15, 2, 2, "#ffffff")}
      {p(14, 15, 4, 1, "#ffffff")}
      {/* Tie */}
      {p(15, 15, 2, 1, colors.primary)}
      {p(15, 16, 2, 1, colors.primary)}
      {p(15, 17, 2, 4, colors.primary)}
      {p(15, 21, 2, 1, colors.accent)}
      {p(16, 22, 1, 1, colors.primary)}
      {/* Suit jacket */}
      {p(7, 17, 5, 1, colors.secondary)}
      {p(20, 17, 5, 1, colors.secondary)}
      {p(6, 18, 6, 8, colors.secondary)}
      {p(20, 18, 6, 8, colors.secondary)}
      {p(12, 17, 8, 9, colors.secondary)}
      {/* Lapel lines */}
      {p(12, 17, 2, 5, colors.accent)}
      {p(18, 17, 2, 5, colors.accent)}
      {p(13, 17, 1, 4, "#0c5c62")}
      {p(18, 17, 1, 4, "#0c5c62")}
      {/* Pocket square */}
      {p(8, 19, 2, 2, "#ffffff")}
      {p(8, 19, 2, 1, colors.primary)}
      {/* Suit button */}
      {p(16, 21, 1, 1, "#333333")}
      {/* Arms in suit */}
      {p(3, 18, 3, 6, colors.secondary)}
      {p(26, 18, 3, 6, colors.secondary)}
      {/* Hands */}
      {p(2, 24, 3, 2, SKIN)}
      {p(27, 24, 3, 2, SKIN)}
      {/* Dress pants */}
      {p(7, 26, 7, 4, "#1a1a2e")}
      {p(18, 26, 7, 4, "#1a1a2e")}
      {p(7, 26, 7, 1, "#222240")}
      {p(18, 26, 7, 1, "#222240")}
      {/* Shoes */}
      {p(6, 30, 8, 2, "#111111")}
      {p(18, 30, 8, 2, "#111111")}
    </g>
  );
}

// ─── RESEARCHER ───────────────────────────────────────────
function ResearcherBody({ colors }: { colors: { primary: string; secondary: string; accent: string } }) {
  return (
    <g>
      {/* Messy tousled hair - multiple layers */}
      {p(11, 1, 10, 1, colors.secondary)}
      {p(9, 2, 14, 1, colors.secondary)}
      {p(8, 3, 16, 2, colors.secondary)}
      {p(8, 5, 3, 2, colors.secondary)}
      {p(22, 5, 2, 2, colors.secondary)}
      {/* Hair highlights/layers */}
      {p(12, 2, 2, 1, "#5a2f7f")}
      {p(17, 3, 2, 1, "#5a2f7f")}
      {p(9, 4, 1, 1, "#5a2f7f")}
      {/* Head */}
      {p(11, 5, 10, 1, SKIN_HI)}
      {p(10, 6, 12, 2, SKIN_HI)}
      {p(10, 8, 12, 2, SKIN)}
      {p(10, 10, 12, 2, SKIN)}
      {p(10, 12, 12, 1, SKIN_SH)}
      {/* Round glasses - detailed frames */}
      {p(10, 7, 5, 4, colors.primary)}
      {p(11, 8, 3, 2, "#ffffff")}
      {p(17, 7, 5, 4, colors.primary)}
      {p(18, 8, 3, 2, "#ffffff")}
      {/* Bridge */}
      {p(15, 8, 2, 1, colors.primary)}
      {/* Temple arms */}
      {p(8, 8, 2, 1, colors.primary)}
      {p(22, 8, 2, 1, colors.primary)}
      {/* Pupils */}
      {p(12, 8, 2, 2, colors.secondary)}
      {p(19, 8, 2, 2, colors.secondary)}
      {/* Eyebrows above glasses */}
      {p(11, 6, 3, 1, colors.secondary)}
      {p(18, 6, 3, 1, colors.secondary)}
      {/* Nose */}
      {p(15, 10, 2, 1, SKIN_SH)}
      {/* Mouth - focused */}
      {p(14, 12, 4, 1, SKIN_SH)}
      {/* Neck */}
      {p(13, 13, 6, 2, SKIN)}
      {/* Lab coat - open front */}
      {p(6, 15, 20, 1, "#e8e8f0")}
      {p(5, 16, 7, 10, "#e8e8f0")}
      {p(20, 16, 7, 10, "#e8e8f0")}
      {/* Lab coat lapels */}
      {p(11, 16, 1, 4, "#d0d0e0")}
      {p(20, 16, 1, 4, "#d0d0e0")}
      {/* Shirt underneath */}
      {p(12, 16, 8, 10, colors.accent)}
      {p(14, 16, 4, 1, colors.secondary)}
      {/* Lab coat pocket */}
      {p(6, 20, 4, 3, "#d0d0e0")}
      {p(7, 21, 2, 1, colors.primary)}
      {/* Arms in lab coat */}
      {p(2, 17, 3, 7, "#e8e8f0")}
      {p(27, 17, 3, 5, "#e8e8f0")}
      {/* Left hand */}
      {p(1, 24, 3, 2, SKIN)}
      {/* Right hand holding book */}
      {p(27, 22, 2, 1, SKIN)}
      {p(28, 20, 3, 5, colors.primary)}
      {p(29, 20, 2, 5, colors.accent)}
      {/* Book pages */}
      {p(29, 21, 1, 3, "#ffffff")}
      {/* Pants */}
      {p(7, 26, 6, 4, colors.secondary)}
      {p(19, 26, 6, 4, colors.secondary)}
      {/* Shoes */}
      {p(6, 30, 7, 2, "#2a1a3f")}
      {p(19, 30, 7, 2, "#2a1a3f")}
    </g>
  );
}

// ─── DEVELOPER ────────────────────────────────────────────
function DeveloperBody({ colors }: { colors: { primary: string; secondary: string; accent: string } }) {
  return (
    <g>
      {/* Headphone headband */}
      {p(8, 1, 16, 1, "#444444")}
      {p(7, 2, 1, 1, "#444444")}
      {p(24, 2, 1, 1, "#444444")}
      {p(7, 3, 1, 2, "#444444")}
      {p(24, 3, 1, 2, "#444444")}
      {/* Headband highlight */}
      {p(12, 1, 8, 1, "#555555")}
      {/* Hair under headphones */}
      {p(9, 2, 14, 1, colors.secondary)}
      {p(8, 3, 16, 2, colors.secondary)}
      {/* Headphone ear cups - detailed */}
      {p(5, 4, 3, 5, "#555555")}
      {p(6, 4, 1, 5, "#666666")}
      {p(24, 4, 3, 5, "#555555")}
      {p(25, 4, 1, 5, "#666666")}
      {/* Cup inner detail */}
      {p(6, 5, 1, 3, "#777777")}
      {p(25, 5, 1, 3, "#777777")}
      {/* Head */}
      {p(10, 5, 12, 1, SKIN_HI)}
      {p(9, 6, 14, 2, SKIN_HI)}
      {p(9, 8, 14, 2, SKIN)}
      {p(9, 10, 14, 2, SKIN)}
      {p(10, 12, 12, 1, SKIN_SH)}
      {/* Eyebrows - relaxed */}
      {p(11, 7, 3, 1, colors.secondary)}
      {p(18, 7, 3, 1, colors.secondary)}
      {/* Eyes - half-lidded coder look */}
      {p(11, 8, 4, 1, "#ffffff")}
      {p(18, 8, 4, 1, "#ffffff")}
      {p(13, 8, 2, 1, colors.secondary)}
      {p(20, 8, 2, 1, colors.secondary)}
      {p(11, 9, 4, 1, SKIN_SH)}
      {p(18, 9, 4, 1, SKIN_SH)}
      {/* Nose */}
      {p(15, 9, 2, 2, SKIN_SH)}
      {/* Mouth */}
      {p(14, 12, 4, 1, SKIN_SH)}
      {/* Neck */}
      {p(13, 13, 6, 1, SKIN)}
      {/* Hood bunched at back of neck */}
      {p(10, 13, 3, 2, colors.accent)}
      {p(19, 13, 3, 2, colors.accent)}
      {p(11, 12, 2, 1, colors.accent)}
      {p(19, 12, 2, 1, colors.accent)}
      {/* Hoodie body */}
      {p(6, 15, 20, 1, colors.primary)}
      {p(5, 16, 22, 10, colors.primary)}
      {/* Drawstrings */}
      {p(12, 15, 1, 3, "#ffffff")}
      {p(19, 15, 1, 3, "#ffffff")}
      {p(12, 18, 1, 1, "#dddddd")}
      {p(19, 18, 1, 1, "#dddddd")}
      {/* Kangaroo pocket */}
      {p(10, 21, 12, 4, colors.accent)}
      {p(11, 21, 10, 1, colors.primary)}
      {/* Pocket opening */}
      {p(11, 22, 10, 1, "#c44800")}
      {/* Hoodie front zipper line */}
      {p(16, 15, 1, 6, colors.accent)}
      {/* Arms in hoodie */}
      {p(2, 17, 3, 6, colors.primary)}
      {p(27, 17, 3, 6, colors.primary)}
      {/* Hands */}
      {p(1, 23, 3, 2, SKIN)}
      {p(28, 23, 3, 2, SKIN)}
      {/* Jeans */}
      {p(7, 26, 7, 4, "#2a4a7f")}
      {p(18, 26, 7, 4, "#2a4a7f")}
      {/* Jean seam */}
      {p(10, 26, 1, 4, "#234070")}
      {p(21, 26, 1, 4, "#234070")}
      {/* Sneakers */}
      {p(6, 30, 8, 2, "#333333")}
      {p(18, 30, 8, 2, "#333333")}
      {p(6, 30, 3, 1, "#ffffff")}
      {p(18, 30, 3, 1, "#ffffff")}
    </g>
  );
}

// ─── CONTENT CREATOR ──────────────────────────────────────
function ContentCreatorBody({ colors }: { colors: { primary: string; secondary: string; accent: string } }) {
  return (
    <g>
      {/* Beret - round shape with stem */}
      {p(13, 0, 2, 1, colors.primary)}
      {p(9, 1, 12, 1, colors.primary)}
      {p(7, 2, 16, 2, colors.primary)}
      {p(8, 4, 3, 1, colors.primary)}
      {/* Beret highlight */}
      {p(12, 2, 4, 1, "#4aff2a")}
      {/* Hair under beret */}
      {p(11, 4, 12, 1, colors.secondary)}
      {p(10, 5, 12, 1, colors.secondary)}
      {p(22, 5, 2, 2, colors.secondary)}
      {/* Head */}
      {p(11, 5, 10, 1, SKIN_HI)}
      {p(10, 6, 12, 2, SKIN_HI)}
      {p(10, 8, 12, 2, SKIN)}
      {p(10, 10, 12, 2, SKIN)}
      {p(10, 12, 12, 1, SKIN_SH)}
      {/* Eyebrows - raised, expressive */}
      {p(11, 6, 3, 1, colors.secondary)}
      {p(18, 6, 3, 1, colors.secondary)}
      {/* Eyes - wide, creative */}
      {p(11, 8, 3, 2, "#ffffff")}
      {p(18, 8, 3, 2, "#ffffff")}
      {p(12, 8, 2, 2, colors.secondary)}
      {p(19, 8, 2, 2, colors.secondary)}
      {p(12, 8, 1, 1, "#111111")}
      {p(19, 8, 1, 1, "#111111")}
      {/* Nose */}
      {p(15, 10, 2, 1, SKIN_SH)}
      {/* Smile */}
      {p(13, 12, 6, 1, SKIN_SH)}
      {p(14, 12, 4, 1, "#c4a090")}
      {/* Neck */}
      {p(13, 13, 6, 2, SKIN)}
      {/* Turtleneck */}
      {p(12, 14, 8, 2, colors.accent)}
      {p(12, 14, 8, 1, "#30c010")}
      {/* Ribbing on turtleneck */}
      {p(13, 14, 1, 2, "#22a00a")}
      {p(15, 14, 1, 2, "#22a00a")}
      {p(17, 14, 1, 2, "#22a00a")}
      {p(19, 14, 1, 2, "#22a00a")}
      {/* Body - turtleneck sweater */}
      {p(6, 16, 20, 10, colors.accent)}
      {/* Sweater texture */}
      {p(8, 18, 1, 1, "#22a00a")}
      {p(12, 20, 1, 1, "#22a00a")}
      {p(20, 18, 1, 1, "#22a00a")}
      {p(16, 22, 1, 1, "#22a00a")}
      {/* Arms */}
      {p(3, 17, 3, 6, colors.accent)}
      {p(26, 17, 3, 5, colors.accent)}
      {/* Left hand */}
      {p(2, 23, 3, 2, SKIN)}
      {/* Right hand holding pen at angle */}
      {p(27, 22, 2, 1, SKIN)}
      {p(28, 21, 1, 1, SKIN)}
      {p(29, 18, 1, 3, colors.primary)}
      {p(30, 16, 1, 2, colors.primary)}
      {p(30, 15, 1, 1, "#ffffff")}
      {/* Small notebook in left hand */}
      {p(0, 22, 3, 3, "#ffffff")}
      {p(1, 22, 1, 3, colors.secondary)}
      {p(0, 23, 3, 1, "#dddddd")}
      {/* Pants */}
      {p(7, 26, 7, 4, colors.secondary)}
      {p(18, 26, 7, 4, colors.secondary)}
      {/* Shoes */}
      {p(6, 30, 8, 2, "#0a3f05")}
      {p(18, 30, 8, 2, "#0a3f05")}
    </g>
  );
}

// ─── BRAND MANAGER ────────────────────────────────────────
function BrandManagerBody({ colors }: { colors: { primary: string; secondary: string; accent: string } }) {
  return (
    <g>
      {/* Asymmetric styled hair with highlight */}
      {p(8, 1, 6, 1, colors.secondary)}
      {p(7, 2, 16, 1, colors.secondary)}
      {p(7, 3, 17, 2, colors.secondary)}
      {p(6, 4, 3, 3, colors.secondary)}
      {p(7, 5, 2, 3, colors.secondary)}
      {/* Hair highlight streak */}
      {p(9, 2, 2, 2, "#7a0060")}
      {p(10, 4, 1, 1, "#7a0060")}
      {/* Head */}
      {p(11, 5, 10, 1, SKIN_HI)}
      {p(10, 6, 12, 2, SKIN_HI)}
      {p(10, 8, 12, 2, SKIN)}
      {p(10, 10, 12, 2, SKIN)}
      {p(10, 12, 12, 1, SKIN_SH)}
      {/* Styled eyebrows */}
      {p(11, 7, 3, 1, colors.secondary)}
      {p(18, 7, 3, 1, colors.secondary)}
      {/* Eyes */}
      {p(11, 8, 3, 2, "#ffffff")}
      {p(18, 8, 3, 2, "#ffffff")}
      {p(12, 8, 2, 2, colors.secondary)}
      {p(19, 8, 2, 2, colors.secondary)}
      {/* Lashes */}
      {p(11, 8, 1, 1, colors.secondary)}
      {p(20, 8, 1, 1, colors.secondary)}
      {/* Nose */}
      {p(15, 10, 2, 1, SKIN_SH)}
      {/* Mouth - confident */}
      {p(13, 12, 6, 1, SKIN_SH)}
      {/* Neck */}
      {p(13, 13, 6, 2, SKIN)}
      {/* Popped collar */}
      {p(10, 14, 3, 2, colors.primary)}
      {p(19, 14, 3, 2, colors.primary)}
      {/* Blazer */}
      {p(6, 16, 20, 10, colors.secondary)}
      {p(6, 16, 20, 1, "#5c003f")}
      {/* Blazer lapels */}
      {p(11, 16, 2, 5, colors.primary)}
      {p(19, 16, 2, 5, colors.primary)}
      {/* Inner blouse */}
      {p(13, 16, 6, 8, colors.accent)}
      {p(14, 16, 4, 2, "#d000a0")}
      {/* Blazer button */}
      {p(16, 22, 1, 1, "#333333")}
      {/* Arms in blazer */}
      {p(3, 17, 3, 6, colors.secondary)}
      {p(26, 17, 3, 5, colors.secondary)}
      {/* Left hand */}
      {p(2, 23, 3, 2, SKIN)}
      {/* Right hand holding color swatches */}
      {p(27, 22, 2, 1, SKIN)}
      {p(28, 18, 3, 4, "#ffffff")}
      {p(28, 18, 3, 1, colors.primary)}
      {p(28, 19, 3, 1, colors.accent)}
      {p(28, 20, 3, 1, "#ffe600")}
      {p(28, 21, 3, 1, "#39ff14")}
      {/* Pants */}
      {p(7, 26, 7, 4, "#1a1a2e")}
      {p(18, 26, 7, 4, "#1a1a2e")}
      {/* Shoes */}
      {p(6, 30, 8, 2, "#111111")}
      {p(18, 30, 8, 2, "#111111")}
      {p(6, 30, 2, 1, "#333333")}
      {p(18, 30, 2, 1, "#333333")}
    </g>
  );
}

// ─── SOCIAL MEDIA MANAGER ─────────────────────────────────
function SocialMediaBody({ colors }: { colors: { primary: string; secondary: string; accent: string } }) {
  return (
    <g>
      {/* Snapback cap - flat brim */}
      {p(14, 0, 4, 1, colors.accent)}
      {p(9, 1, 14, 1, colors.primary)}
      {p(8, 2, 16, 2, colors.primary)}
      {/* Cap brim - flat */}
      {p(5, 4, 10, 2, colors.primary)}
      {p(5, 4, 10, 1, colors.accent)}
      {/* Cap panel detail */}
      {p(13, 2, 1, 2, colors.accent)}
      {/* Hair peeking out */}
      {p(15, 4, 7, 2, colors.secondary)}
      {p(22, 5, 2, 2, colors.secondary)}
      {/* Head */}
      {p(10, 6, 12, 2, SKIN_HI)}
      {p(10, 8, 12, 2, SKIN)}
      {p(10, 10, 12, 2, SKIN)}
      {p(10, 12, 12, 1, SKIN_SH)}
      {/* Eyebrows */}
      {p(11, 7, 3, 1, colors.secondary)}
      {p(18, 7, 3, 1, colors.secondary)}
      {/* Eyes - bright, energetic */}
      {p(11, 8, 3, 2, "#ffffff")}
      {p(18, 8, 3, 2, "#ffffff")}
      {p(12, 8, 2, 2, "#222222")}
      {p(19, 8, 2, 2, "#222222")}
      {p(12, 8, 1, 1, "#ffffff")}
      {p(19, 8, 1, 1, "#ffffff")}
      {/* Nose */}
      {p(15, 10, 2, 1, SKIN_SH)}
      {/* Big smile with teeth */}
      {p(13, 11, 6, 1, SKIN_SH)}
      {p(14, 12, 4, 1, "#ffffff")}
      {/* Neck */}
      {p(13, 13, 6, 2, SKIN)}
      {/* Graphic tee */}
      {p(6, 15, 20, 1, colors.primary)}
      {p(5, 16, 22, 10, colors.primary)}
      {/* T-shirt collar */}
      {p(13, 15, 6, 1, colors.accent)}
      {/* Graphic on tee - simple star/bolt */}
      {p(13, 19, 6, 4, colors.accent)}
      {p(15, 18, 2, 1, colors.accent)}
      {p(15, 23, 2, 1, colors.accent)}
      {p(14, 20, 1, 2, "#ffffff")}
      {p(17, 20, 1, 2, "#ffffff")}
      {/* Arms */}
      {p(2, 17, 3, 5, colors.primary)}
      {p(27, 17, 3, 5, colors.primary)}
      {/* Left hand */}
      {p(1, 22, 3, 2, SKIN)}
      {/* Right hand holding phone */}
      {p(27, 22, 2, 1, SKIN)}
      {p(28, 19, 2, 4, "#333333")}
      {p(28, 20, 2, 2, "#66ccff")}
      {/* Phone screen glow */}
      {p(28, 20, 2, 2, "#66ccff")}
      {/* Shorts */}
      {p(7, 26, 7, 3, colors.secondary)}
      {p(18, 26, 7, 3, colors.secondary)}
      {/* Sneakers - detailed */}
      {p(6, 29, 8, 3, "#ffffff")}
      {p(18, 29, 8, 3, "#ffffff")}
      {p(6, 30, 8, 1, colors.primary)}
      {p(18, 30, 8, 1, colors.primary)}
      {p(6, 31, 8, 1, "#dddddd")}
      {p(18, 31, 8, 1, "#dddddd")}
    </g>
  );
}

// ─── PROJECT MANAGER ──────────────────────────────────────
function ProjectManagerBody({ colors }: { colors: { primary: string; secondary: string; accent: string } }) {
  return (
    <g>
      {/* Neat hair */}
      {p(10, 2, 12, 1, colors.secondary)}
      {p(9, 3, 14, 2, colors.secondary)}
      {/* Headset band */}
      {p(7, 2, 2, 1, "#555555")}
      {p(23, 2, 2, 1, "#555555")}
      {p(7, 3, 1, 3, "#555555")}
      {p(24, 3, 1, 3, "#555555")}
      {/* Head */}
      {p(11, 5, 10, 1, SKIN_HI)}
      {p(10, 6, 12, 2, SKIN_HI)}
      {p(10, 8, 12, 2, SKIN)}
      {p(10, 10, 12, 2, SKIN)}
      {p(10, 12, 12, 1, SKIN_SH)}
      {/* Headset ear cups */}
      {p(6, 5, 2, 4, "#555555")}
      {p(7, 5, 1, 4, "#666666")}
      {p(24, 5, 2, 4, "#555555")}
      {p(24, 5, 1, 4, "#666666")}
      {/* Mic boom from left cup */}
      {p(5, 8, 1, 1, "#555555")}
      {p(4, 9, 1, 2, "#555555")}
      {p(5, 11, 1, 1, "#555555")}
      {p(6, 11, 2, 1, "#555555")}
      {p(8, 12, 2, 1, "#777777")}
      {/* Mic tip */}
      {p(9, 12, 2, 1, "#999999")}
      {/* Eyebrows */}
      {p(11, 7, 3, 1, colors.secondary)}
      {p(18, 7, 3, 1, colors.secondary)}
      {/* Eyes */}
      {p(11, 8, 3, 2, "#ffffff")}
      {p(18, 8, 3, 2, "#ffffff")}
      {p(12, 8, 2, 2, colors.secondary)}
      {p(19, 8, 2, 2, colors.secondary)}
      {/* Nose */}
      {p(15, 10, 2, 1, SKIN_SH)}
      {/* Mouth */}
      {p(14, 12, 4, 1, SKIN_SH)}
      {/* Neck */}
      {p(13, 13, 6, 2, SKIN)}
      {/* Button-up shirt */}
      {p(6, 15, 20, 1, colors.primary)}
      {p(5, 16, 22, 10, colors.primary)}
      {/* Collar */}
      {p(11, 15, 3, 1, "#ffffff")}
      {p(18, 15, 3, 1, "#ffffff")}
      {p(11, 16, 2, 1, "#ffffff")}
      {p(19, 16, 2, 1, "#ffffff")}
      {/* Button line */}
      {p(16, 16, 1, 9, "#ffffff")}
      {p(16, 17, 1, 1, "#dddddd")}
      {p(16, 19, 1, 1, "#dddddd")}
      {p(16, 21, 1, 1, "#dddddd")}
      {p(16, 23, 1, 1, "#dddddd")}
      {/* Arms */}
      {p(2, 17, 3, 5, colors.primary)}
      {p(27, 17, 3, 5, colors.primary)}
      {/* Left hand */}
      {p(1, 22, 3, 2, SKIN)}
      {/* Right hand holding clipboard */}
      {p(27, 22, 2, 1, SKIN)}
      {p(28, 18, 3, 6, colors.accent)}
      {p(28, 18, 3, 1, "#ffffff")}
      {/* Clipboard text lines */}
      {p(29, 19, 2, 1, "#ffffff")}
      {p(29, 20, 1, 1, "#ffffff")}
      {p(29, 21, 2, 1, "#ffffff")}
      {p(29, 22, 1, 1, "#ffffff")}
      {/* Pants */}
      {p(7, 26, 7, 4, "#2a3a4f")}
      {p(18, 26, 7, 4, "#2a3a4f")}
      {/* Shoes */}
      {p(6, 30, 8, 2, "#1a1a2e")}
      {p(18, 30, 8, 2, "#1a1a2e")}
    </g>
  );
}

// ─── QA ENGINEER ──────────────────────────────────────────
function QAEngineerBody({ colors }: { colors: { primary: string; secondary: string; accent: string } }) {
  return (
    <g>
      {/* Hair */}
      {p(10, 2, 12, 1, colors.secondary)}
      {p(9, 3, 14, 2, colors.secondary)}
      {/* Goggles pushed up on forehead */}
      {p(9, 3, 5, 3, colors.primary)}
      {p(17, 3, 5, 3, colors.primary)}
      {p(14, 4, 3, 2, colors.accent)}
      {/* Goggle lenses - reflective */}
      {p(10, 4, 3, 2, "#ffffff")}
      {p(10, 4, 1, 1, "#aaeeff")}
      {p(18, 4, 3, 2, "#ffffff")}
      {p(18, 4, 1, 1, "#aaeeff")}
      {/* Goggle strap */}
      {p(7, 4, 2, 1, colors.accent)}
      {p(23, 4, 2, 1, colors.accent)}
      {/* Head */}
      {p(11, 5, 10, 1, SKIN_HI)}
      {p(10, 6, 12, 2, SKIN_HI)}
      {p(10, 8, 12, 2, SKIN)}
      {p(10, 10, 12, 2, SKIN)}
      {p(10, 12, 12, 1, SKIN_SH)}
      {/* Eyebrows */}
      {p(11, 7, 3, 1, colors.secondary)}
      {p(18, 7, 3, 1, colors.secondary)}
      {/* Eyes - alert, inspecting */}
      {p(11, 8, 3, 2, "#ffffff")}
      {p(18, 8, 3, 2, "#ffffff")}
      {p(12, 8, 2, 2, colors.secondary)}
      {p(19, 8, 2, 2, colors.secondary)}
      {/* Nose */}
      {p(15, 10, 2, 1, SKIN_SH)}
      {/* Mouth - determined */}
      {p(14, 12, 4, 1, SKIN_SH)}
      {/* Neck */}
      {p(13, 13, 6, 2, SKIN)}
      {/* Utility vest */}
      {p(6, 15, 20, 1, "#555555")}
      {p(5, 16, 22, 10, "#555555")}
      {/* Vest front - zipper */}
      {p(16, 15, 1, 11, "#777777")}
      {/* Shirt showing at collar */}
      {p(13, 15, 6, 1, colors.accent)}
      {/* Vest pockets - multiple */}
      {p(7, 17, 4, 3, "#666666")}
      {p(7, 17, 4, 1, "#777777")}
      {p(21, 17, 4, 3, "#666666")}
      {p(21, 17, 4, 1, "#777777")}
      {p(8, 22, 3, 2, "#666666")}
      {p(21, 22, 3, 2, "#666666")}
      {/* Pocket flap detail */}
      {p(8, 17, 2, 1, "#888888")}
      {p(22, 17, 2, 1, "#888888")}
      {/* Shirt underneath through zipper */}
      {p(13, 16, 3, 8, colors.accent)}
      {p(17, 16, 3, 8, colors.accent)}
      {/* Tool belt */}
      {p(5, 25, 22, 1, colors.secondary)}
      {p(8, 25, 2, 1, "#ffcc00")}
      {p(14, 25, 2, 1, "#ffcc00")}
      {p(22, 25, 2, 1, "#ffcc00")}
      {/* Arms */}
      {p(2, 17, 3, 5, "#555555")}
      {p(27, 17, 3, 5, "#555555")}
      {/* Left hand */}
      {p(1, 22, 3, 2, SKIN)}
      {/* Right hand holding checklist */}
      {p(27, 22, 2, 1, SKIN)}
      {p(28, 18, 3, 6, "#ffffff")}
      {/* Clipboard clip */}
      {p(29, 18, 1, 1, "#888888")}
      {/* Check marks and x */}
      {p(29, 19, 1, 1, "#39ff14")}
      {p(29, 20, 1, 1, "#39ff14")}
      {p(29, 21, 1, 1, colors.primary)}
      {p(29, 22, 1, 1, "#39ff14")}
      {/* Text lines on checklist */}
      {p(30, 19, 1, 1, "#aaaaaa")}
      {p(30, 20, 1, 1, "#aaaaaa")}
      {p(30, 21, 1, 1, "#aaaaaa")}
      {p(30, 22, 1, 1, "#aaaaaa")}
      {/* Cargo pants */}
      {p(7, 26, 7, 4, "#3a3a3a")}
      {p(18, 26, 7, 4, "#3a3a3a")}
      {/* Cargo pocket */}
      {p(9, 27, 3, 2, "#444444")}
      {p(20, 27, 3, 2, "#444444")}
      {/* Work boots */}
      {p(6, 30, 8, 2, "#4a3020")}
      {p(18, 30, 8, 2, "#4a3020")}
      {p(6, 30, 8, 1, "#5a4030")}
      {p(18, 30, 8, 1, "#5a4030")}
    </g>
  );
}

// Body selector
function AgentBody({ type, colors }: { type: AgentType; colors: { primary: string; secondary: string; accent: string } }) {
  switch (type) {
    case "executive": return <ExecutiveBody colors={colors} />;
    case "researcher": return <ResearcherBody colors={colors} />;
    case "developer": return <DeveloperBody colors={colors} />;
    case "content-creator": return <ContentCreatorBody colors={colors} />;
    case "brand-manager": return <BrandManagerBody colors={colors} />;
    case "social-media": return <SocialMediaBody colors={colors} />;
    case "project-manager": return <ProjectManagerBody colors={colors} />;
    case "qa-engineer": return <QAEngineerBody colors={colors} />;
  }
}

// Desk item customizations per agent type
function DeskItems({ type, colors }: { type: AgentType; colors: { primary: string; secondary: string; accent: string } }) {
  switch (type) {
    case "developer":
      return (
        <g>
          {/* Dual monitors */}
          <rect x="16" y="52" width="28" height="18" fill={colors.secondary} />
          <rect x="18" y="54" width="24" height="14" fill="#111118" />
          <rect x="52" y="52" width="28" height="18" fill={colors.secondary} />
          <rect x="54" y="54" width="24" height="14" fill="#111118" />
          {/* Stands */}
          <rect x="26" y="70" width="8" height="4" fill={colors.accent} />
          <rect x="62" y="70" width="8" height="4" fill={colors.accent} />
          {/* Code on left monitor */}
          <rect x="20" y="56" width="10" height="2" fill={colors.primary} opacity="0.5" />
          <rect x="22" y="59" width="14" height="2" fill={colors.primary} opacity="0.3" />
          <rect x="22" y="62" width="8" height="2" fill={colors.primary} opacity="0.4" />
          {/* Cursor on left */}
          <rect x="20" y="65" width="4" height="2" fill={colors.primary} opacity="0.8">
            <animate attributeName="opacity" values="0.8;0.2;0.8" dur="1.5s" repeatCount="indefinite" />
          </rect>
          {/* Code on right monitor */}
          <rect x="56" y="56" width="14" height="2" fill="#39ff14" opacity="0.4" />
          <rect x="58" y="59" width="10" height="2" fill="#39ff14" opacity="0.3" />
          <rect x="56" y="62" width="16" height="2" fill={colors.primary} opacity="0.3" />
          <rect x="58" y="65" width="8" height="2" fill="#39ff14" opacity="0.2" />
          {/* Keyboard */}
          <rect x="30" y="76" width="20" height="6" fill="#333333" />
          <rect x="32" y="77" width="2" height="1" fill="#555555" />
          <rect x="35" y="77" width="2" height="1" fill="#555555" />
          <rect x="38" y="77" width="2" height="1" fill="#555555" />
          <rect x="41" y="77" width="2" height="1" fill="#555555" />
          <rect x="44" y="77" width="2" height="1" fill="#555555" />
          <rect x="34" y="79" width="12" height="1" fill="#555555" />
          {/* Mouse */}
          <rect x="54" y="78" width="4" height="4" fill="#333333" rx="1" />
          {/* Coffee mug */}
          <rect x="10" y="76" width="6" height="6" fill="#ffffff" />
          <rect x="11" y="77" width="4" height="3" fill="#8B4513" />
          <rect x="16" y="77" width="2" height="4" fill="#ffffff" />
        </g>
      );
    case "researcher":
      return (
        <g>
          {/* Monitor */}
          <rect x="36" y="52" width="32" height="20" fill={colors.secondary} />
          <rect x="38" y="54" width="28" height="16" fill="#111118" />
          <rect x="48" y="72" width="8" height="4" fill={colors.accent} />
          {/* Data on screen */}
          <rect x="40" y="56" width="16" height="2" fill={colors.primary} opacity="0.4" />
          <rect x="40" y="59" width="12" height="2" fill={colors.primary} opacity="0.3" />
          <rect x="40" y="62" width="20" height="2" fill={colors.primary} opacity="0.3" />
          {/* Cursor */}
          <rect x="40" y="65" width="4" height="2" fill={colors.primary} opacity="0.8">
            <animate attributeName="opacity" values="0.8;0.2;0.8" dur="1.5s" repeatCount="indefinite" />
          </rect>
          {/* Stack of books */}
          <rect x="12" y="66" width="14" height="4" fill={colors.accent} />
          <rect x="13" y="62" width="12" height="4" fill={colors.primary} />
          <rect x="14" y="58" width="10" height="4" fill={colors.secondary} />
          {/* Book spines detail */}
          <rect x="15" y="62" width="1" height="4" fill="#ffffff" opacity="0.3" />
          <rect x="19" y="66" width="1" height="4" fill="#ffffff" opacity="0.3" />
          {/* Keyboard */}
          <rect x="36" y="76" width="18" height="5" fill="#333333" />
          <rect x="38" y="77" width="2" height="1" fill="#555555" />
          <rect x="41" y="77" width="2" height="1" fill="#555555" />
          <rect x="44" y="77" width="2" height="1" fill="#555555" />
          {/* Notes/papers */}
          <rect x="72" y="74" width="10" height="8" fill="#ffffff" />
          <rect x="73" y="75" width="6" height="1" fill="#aaaaaa" />
          <rect x="73" y="77" width="8" height="1" fill="#aaaaaa" />
        </g>
      );
    case "content-creator":
      return (
        <g>
          {/* Monitor */}
          <rect x="32" y="52" width="32" height="20" fill={colors.secondary} />
          <rect x="34" y="54" width="28" height="16" fill="#111118" />
          <rect x="44" y="72" width="8" height="4" fill={colors.accent} />
          {/* Design on screen */}
          <rect x="38" y="58" width="12" height="8" fill={colors.primary} opacity="0.2" />
          <rect x="40" y="60" width="8" height="4" fill={colors.accent} opacity="0.3" />
          {/* Cursor */}
          <rect x="52" y="62" width="4" height="2" fill={colors.primary} opacity="0.8">
            <animate attributeName="opacity" values="0.8;0.2;0.8" dur="1.5s" repeatCount="indefinite" />
          </rect>
          {/* Drawing tablet */}
          <rect x="10" y="68" width="18" height="12" fill="#333333" />
          <rect x="11" y="69" width="16" height="10" fill="#222222" />
          <rect x="14" y="72" width="10" height="4" fill={colors.accent} opacity="0.3" />
          {/* Stylus on tablet */}
          <rect x="22" y="66" width="2" height="8" fill={colors.primary} />
          <rect x="22" y="66" width="2" height="2" fill="#ffffff" />
          {/* Keyboard */}
          <rect x="34" y="76" width="16" height="5" fill="#333333" />
          {/* Color pencils/pens */}
          <rect x="70" y="74" width="2" height="8" fill={colors.primary} />
          <rect x="73" y="74" width="2" height="8" fill={colors.accent} />
          <rect x="76" y="74" width="2" height="8" fill="#ff6b00" />
        </g>
      );
    case "social-media":
      return (
        <g>
          {/* Monitor */}
          <rect x="32" y="52" width="32" height="20" fill={colors.secondary} />
          <rect x="34" y="54" width="28" height="16" fill="#111118" />
          <rect x="44" y="72" width="8" height="4" fill={colors.accent} />
          {/* Social feed on screen */}
          <rect x="36" y="56" width="24" height="4" fill={colors.primary} opacity="0.2" />
          <rect x="36" y="61" width="24" height="4" fill={colors.primary} opacity="0.15" />
          <rect x="36" y="66" width="24" height="2" fill={colors.primary} opacity="0.1" />
          {/* Cursor */}
          <rect x="38" y="58" width="4" height="2" fill={colors.primary} opacity="0.8">
            <animate attributeName="opacity" values="0.8;0.2;0.8" dur="1.5s" repeatCount="indefinite" />
          </rect>
          {/* Phone on desk */}
          <rect x="14" y="70" width="10" height="10" fill="#333333" />
          <rect x="15" y="71" width="8" height="7" fill="#66ccff" />
          <rect x="18" y="79" width="2" height="1" fill="#555555" />
          {/* Keyboard */}
          <rect x="34" y="76" width="16" height="5" fill="#333333" />
          {/* Coffee cup */}
          <rect x="72" y="74" width="8" height="8" fill="#ffffff" />
          <rect x="73" y="75" width="6" height="4" fill="#8B4513" />
          <rect x="80" y="75" width="2" height="4" fill="#ffffff" />
          {/* Ring light / small lamp */}
          <rect x="80" y="52" width="6" height="6" fill="#ffe600" opacity="0.3" />
          <rect x="81" y="53" width="4" height="4" fill="#111111" />
          <rect x="82" y="58" width="2" height="14" fill="#555555" />
        </g>
      );
    case "qa-engineer":
      return (
        <g>
          {/* Monitor */}
          <rect x="32" y="52" width="32" height="20" fill={colors.secondary} />
          <rect x="34" y="54" width="28" height="16" fill="#111118" />
          <rect x="44" y="72" width="8" height="4" fill={colors.accent} />
          {/* Test results on screen */}
          <rect x="36" y="56" width="4" height="2" fill="#39ff14" />
          <rect x="41" y="56" width="10" height="2" fill="#555555" />
          <rect x="36" y="59" width="4" height="2" fill="#39ff14" />
          <rect x="41" y="59" width="8" height="2" fill="#555555" />
          <rect x="36" y="62" width="4" height="2" fill={colors.primary} />
          <rect x="41" y="62" width="12" height="2" fill="#555555" />
          <rect x="36" y="65" width="4" height="2" fill="#39ff14" />
          <rect x="41" y="65" width="6" height="2" fill="#555555" />
          {/* Cursor */}
          <rect x="54" y="65" width="4" height="2" fill={colors.primary} opacity="0.8">
            <animate attributeName="opacity" values="0.8;0.2;0.8" dur="1.5s" repeatCount="indefinite" />
          </rect>
          {/* Keyboard */}
          <rect x="34" y="76" width="16" height="5" fill="#333333" />
          {/* Bug figurine */}
          <rect x="14" y="72" width="8" height="6" fill={colors.accent} />
          <rect x="15" y="71" width="6" height="1" fill={colors.primary} />
          <rect x="13" y="74" width="2" height="2" fill={colors.secondary} />
          <rect x="23" y="74" width="2" height="2" fill={colors.secondary} />
          {/* Multimeter/tool */}
          <rect x="72" y="74" width="8" height="6" fill="#333333" />
          <rect x="73" y="75" width="6" height="4" fill="#222222" />
          <rect x="75" y="76" width="2" height="2" fill="#39ff14" />
        </g>
      );
    case "executive":
      return (
        <g>
          {/* Wide monitor */}
          <rect x="28" y="52" width="36" height="20" fill={colors.secondary} />
          <rect x="30" y="54" width="32" height="16" fill="#111118" />
          <rect x="42" y="72" width="8" height="4" fill={colors.accent} />
          {/* Dashboard/charts on screen */}
          <rect x="32" y="56" width="8" height="8" fill={colors.primary} opacity="0.2" />
          <rect x="42" y="60" width="4" height="4" fill={colors.accent} opacity="0.3" />
          <rect x="48" y="58" width="4" height="6" fill={colors.primary} opacity="0.25" />
          <rect x="54" y="56" width="4" height="8" fill={colors.accent} opacity="0.3" />
          {/* Cursor */}
          <rect x="34" y="66" width="4" height="2" fill={colors.primary} opacity="0.8">
            <animate attributeName="opacity" values="0.8;0.2;0.8" dur="1.5s" repeatCount="indefinite" />
          </rect>
          {/* Keyboard */}
          <rect x="34" y="76" width="20" height="5" fill="#333333" />
          {/* Pen holder */}
          <rect x="70" y="70" width="6" height="10" fill="#222222" />
          <rect x="71" y="66" width="1" height="4" fill={colors.primary} />
          <rect x="73" y="67" width="1" height="3" fill="#333333" />
          {/* Nameplate */}
          <rect x="12" y="76" width="16" height="4" fill={colors.accent} />
          <rect x="13" y="77" width="14" height="2" fill={colors.primary} opacity="0.5" />
        </g>
      );
    case "brand-manager":
      return (
        <g>
          {/* Monitor */}
          <rect x="32" y="52" width="32" height="20" fill={colors.secondary} />
          <rect x="34" y="54" width="28" height="16" fill="#111118" />
          <rect x="44" y="72" width="8" height="4" fill={colors.accent} />
          {/* Design/brand on screen */}
          <rect x="40" y="58" width="16" height="8" fill={colors.primary} opacity="0.2" />
          <rect x="44" y="60" width="8" height="4" fill={colors.accent} opacity="0.3" />
          {/* Cursor */}
          <rect x="38" y="62" width="4" height="2" fill={colors.primary} opacity="0.8">
            <animate attributeName="opacity" values="0.8;0.2;0.8" dur="1.5s" repeatCount="indefinite" />
          </rect>
          {/* Keyboard */}
          <rect x="34" y="76" width="16" height="5" fill="#333333" />
          {/* Color swatches on desk */}
          <rect x="10" y="74" width="6" height="6" fill={colors.primary} />
          <rect x="16" y="74" width="6" height="6" fill={colors.accent} />
          <rect x="10" y="80" width="6" height="6" fill="#ffe600" />
          <rect x="16" y="80" width="6" height="6" fill="#39ff14" />
          {/* Mood board */}
          <rect x="72" y="68" width="12" height="14" fill="#ffffff" />
          <rect x="73" y="69" width="4" height="4" fill={colors.primary} opacity="0.5" />
          <rect x="78" y="69" width="4" height="4" fill={colors.accent} opacity="0.5" />
          <rect x="73" y="74" width="10" height="1" fill="#aaaaaa" />
          <rect x="73" y="76" width="8" height="1" fill="#aaaaaa" />
        </g>
      );
    case "project-manager":
      return (
        <g>
          {/* Monitor */}
          <rect x="32" y="52" width="32" height="20" fill={colors.secondary} />
          <rect x="34" y="54" width="28" height="16" fill="#111118" />
          <rect x="44" y="72" width="8" height="4" fill={colors.accent} />
          {/* Gantt chart on screen */}
          <rect x="36" y="56" width="20" height="2" fill={colors.primary} opacity="0.4" />
          <rect x="36" y="59" width="14" height="2" fill={colors.accent} opacity="0.3" />
          <rect x="36" y="62" width="18" height="2" fill={colors.primary} opacity="0.3" />
          <rect x="36" y="65" width="10" height="2" fill={colors.accent} opacity="0.4" />
          {/* Cursor */}
          <rect x="50" y="65" width="4" height="2" fill={colors.primary} opacity="0.8">
            <animate attributeName="opacity" values="0.8;0.2;0.8" dur="1.5s" repeatCount="indefinite" />
          </rect>
          {/* Keyboard */}
          <rect x="34" y="76" width="16" height="5" fill="#333333" />
          {/* Sticky notes */}
          <rect x="10" y="72" width="8" height="8" fill="#ffe600" />
          <rect x="11" y="73" width="6" height="1" fill="#ccb800" />
          <rect x="11" y="75" width="4" height="1" fill="#ccb800" />
          <rect x="19" y="72" width="8" height="8" fill="#ff6b6b" />
          <rect x="20" y="73" width="6" height="1" fill="#cc5555" />
          {/* Planner/notebook */}
          <rect x="72" y="74" width="12" height="8" fill={colors.accent} />
          <rect x="73" y="75" width="10" height="6" fill="#ffffff" />
          <rect x="74" y="76" width="8" height="1" fill="#aaaaaa" />
          <rect x="74" y="78" width="6" height="1" fill="#aaaaaa" />
        </g>
      );
    default:
      return (
        <g>
          <rect x="32" y="52" width="32" height="20" fill={colors.secondary} />
          <rect x="34" y="54" width="28" height="16" fill="#111118" />
          <rect x="44" y="72" width="8" height="4" fill={colors.accent} />
          <rect x="38" y="62" width="4" height="4" fill={colors.primary} opacity="0.8">
            <animate attributeName="opacity" values="0.8;0.2;0.8" dur="1.5s" repeatCount="indefinite" />
          </rect>
          <rect x="34" y="76" width="16" height="5" fill="#333333" />
        </g>
      );
  }
}

export default function PixelAgent({ type, size = 64, className = "" }: PixelAgentProps) {
  const colors = agentColors[type];

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 64 64"
      className={className}
      style={{ imageRendering: "pixelated" }}
    >
      <AgentBody type={type} colors={colors} />
    </svg>
  );
}

// Desk + Agent scene for hero and cards
export function PixelAgentAtDesk({ type, size = 96, className = "" }: PixelAgentProps) {
  const colors = agentColors[type];

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 96 96"
      className={className}
      style={{ imageRendering: "pixelated" }}
    >
      <g transform="translate(16, 4)">
        <AgentBody type={type} colors={colors} />
      </g>
      {/* Desk */}
      <rect x="8" y="72" width="80" height="4" fill={colors.primary} opacity="0.6" />
      <rect x="12" y="76" width="4" height="16" fill={colors.primary} opacity="0.4" />
      <rect x="80" y="76" width="4" height="16" fill={colors.primary} opacity="0.4" />
      {/* Agent-specific desk items */}
      <DeskItems type={type} colors={colors} />
    </svg>
  );
}

export { agentColors };
export type { AgentType };
