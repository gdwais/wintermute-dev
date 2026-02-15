// Pixel-style SVG icons for various sections

interface IconProps {
  size?: number;
  color?: string;
  className?: string;
}

export function PixelSearchIcon({ size = 32, color = "#00f0ff", className = "" }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 32 32" className={className} style={{ imageRendering: "pixelated" }}>
      <rect x="8" y="4" width="12" height="4" fill={color} />
      <rect x="4" y="8" width="4" height="4" fill={color} />
      <rect x="20" y="8" width="4" height="4" fill={color} />
      <rect x="4" y="12" width="4" height="4" fill={color} />
      <rect x="20" y="12" width="4" height="4" fill={color} />
      <rect x="8" y="16" width="12" height="4" fill={color} />
      <rect x="20" y="20" width="4" height="4" fill={color} />
      <rect x="24" y="24" width="4" height="4" fill={color} />
    </svg>
  );
}

export function PixelDocIcon({ size = 32, color = "#9b59ff", className = "" }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 32 32" className={className} style={{ imageRendering: "pixelated" }}>
      <rect x="4" y="2" width="20" height="28" fill={color} opacity="0.3" />
      <rect x="4" y="2" width="20" height="4" fill={color} />
      <rect x="8" y="10" width="12" height="2" fill={color} opacity="0.7" />
      <rect x="8" y="14" width="12" height="2" fill={color} opacity="0.7" />
      <rect x="8" y="18" width="8" height="2" fill={color} opacity="0.7" />
      <rect x="8" y="22" width="12" height="2" fill={color} opacity="0.7" />
    </svg>
  );
}

export function PixelBrainIcon({ size = 32, color = "#ff00aa", className = "" }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 32 32" className={className} style={{ imageRendering: "pixelated" }}>
      <rect x="8" y="4" width="16" height="4" fill={color} />
      <rect x="4" y="8" width="8" height="4" fill={color} />
      <rect x="20" y="8" width="8" height="4" fill={color} />
      <rect x="4" y="12" width="24" height="4" fill={color} opacity="0.8" />
      <rect x="8" y="16" width="16" height="4" fill={color} opacity="0.6" />
      <rect x="12" y="20" width="8" height="4" fill={color} opacity="0.4" />
      <rect x="12" y="24" width="4" height="4" fill={color} opacity="0.3" />
    </svg>
  );
}

export function PixelTaskIcon({ size = 32, color = "#39ff14", className = "" }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 32 32" className={className} style={{ imageRendering: "pixelated" }}>
      <rect x="4" y="4" width="24" height="24" fill={color} opacity="0.15" />
      <rect x="4" y="4" width="24" height="4" fill={color} opacity="0.4" />
      <rect x="8" y="12" width="4" height="4" fill={color} />
      <rect x="16" y="12" width="8" height="2" fill={color} opacity="0.6" />
      <rect x="8" y="18" width="4" height="4" fill={color} opacity="0.5" />
      <rect x="16" y="18" width="8" height="2" fill={color} opacity="0.4" />
      <rect x="8" y="24" width="4" height="4" fill={color} opacity="0.3" />
      <rect x="16" y="24" width="8" height="2" fill={color} opacity="0.3" />
    </svg>
  );
}

// Step icons for How It Works
export function PixelDiscoveryIcon({ size = 48, color = "#00f0ff", className = "" }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 48 48" className={className} style={{ imageRendering: "pixelated" }}>
      {/* Magnifying glass + lightbulb hybrid */}
      <rect x="16" y="8" width="16" height="4" fill={color} />
      <rect x="12" y="12" width="4" height="4" fill={color} />
      <rect x="32" y="12" width="4" height="4" fill={color} />
      <rect x="12" y="16" width="4" height="8" fill={color} />
      <rect x="32" y="16" width="4" height="8" fill={color} />
      <rect x="16" y="24" width="16" height="4" fill={color} />
      <rect x="20" y="28" width="8" height="4" fill={color} opacity="0.7" />
      <rect x="20" y="32" width="8" height="4" fill={color} opacity="0.5" />
      {/* Light rays */}
      <rect x="22" y="4" width="4" height="4" fill={color} opacity="0.4" />
      <rect x="8" y="16" width="4" height="4" fill={color} opacity="0.3" />
      <rect x="36" y="16" width="4" height="4" fill={color} opacity="0.3" />
    </svg>
  );
}

export function PixelDeployIcon({ size = 48, color = "#ff00aa", className = "" }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 48 48" className={className} style={{ imageRendering: "pixelated" }}>
      {/* Rocket / deploy */}
      <rect x="20" y="4" width="8" height="4" fill={color} />
      <rect x="16" y="8" width="16" height="4" fill={color} />
      <rect x="16" y="12" width="16" height="12" fill={color} opacity="0.8" />
      <rect x="12" y="20" width="4" height="8" fill={color} opacity="0.6" />
      <rect x="32" y="20" width="4" height="8" fill={color} opacity="0.6" />
      <rect x="16" y="24" width="16" height="4" fill={color} />
      {/* Exhaust */}
      <rect x="20" y="28" width="8" height="4" fill={color} opacity="0.5" />
      <rect x="18" y="32" width="4" height="4" fill={color} opacity="0.3" />
      <rect x="26" y="32" width="4" height="4" fill={color} opacity="0.3" />
      <rect x="22" y="36" width="4" height="4" fill={color} opacity="0.15" />
    </svg>
  );
}

export function PixelManageIcon({ size = 48, color = "#9b59ff", className = "" }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 48 48" className={className} style={{ imageRendering: "pixelated" }}>
      {/* Dashboard / monitoring */}
      <rect x="4" y="8" width="40" height="4" fill={color} />
      <rect x="4" y="12" width="40" height="24" fill={color} opacity="0.2" />
      {/* Graph bars */}
      <rect x="10" y="28" width="4" height="8" fill={color} opacity="0.6" />
      <rect x="18" y="22" width="4" height="14" fill={color} opacity="0.7" />
      <rect x="26" y="18" width="4" height="18" fill={color} opacity="0.8" />
      <rect x="34" y="14" width="4" height="22" fill={color} />
      {/* Base */}
      <rect x="8" y="36" width="32" height="4" fill={color} opacity="0.5" />
    </svg>
  );
}

// Service icons
export function PixelSetupIcon({ size = 48, color = "#00f0ff", className = "" }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 48 48" className={className} style={{ imageRendering: "pixelated" }}>
      {/* Wrench / assembly */}
      <rect x="20" y="4" width="8" height="4" fill={color} />
      <rect x="16" y="8" width="16" height="4" fill={color} />
      <rect x="20" y="12" width="8" height="8" fill={color} opacity="0.7" />
      <rect x="16" y="20" width="16" height="4" fill={color} />
      <rect x="20" y="24" width="8" height="4" fill={color} opacity="0.7" />
      <rect x="12" y="28" width="24" height="4" fill={color} opacity="0.5" />
      <rect x="8" y="32" width="32" height="4" fill={color} opacity="0.3" />
      <rect x="20" y="36" width="8" height="4" fill={color} opacity="0.4" />
    </svg>
  );
}

export function PixelServerIcon({ size = 48, color = "#39ff14", className = "" }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 48 48" className={className} style={{ imageRendering: "pixelated" }}>
      {/* Server rack */}
      <rect x="8" y="4" width="32" height="12" fill={color} opacity="0.3" />
      <rect x="8" y="4" width="32" height="4" fill={color} opacity="0.6" />
      <rect x="12" y="8" width="4" height="4" fill={color}>
        <animate attributeName="opacity" values="1;0.3;1" dur="2s" repeatCount="indefinite" />
      </rect>
      <rect x="8" y="18" width="32" height="12" fill={color} opacity="0.3" />
      <rect x="8" y="18" width="32" height="4" fill={color} opacity="0.6" />
      <rect x="12" y="22" width="4" height="4" fill={color}>
        <animate attributeName="opacity" values="1;0.3;1" dur="1.5s" repeatCount="indefinite" />
      </rect>
      <rect x="8" y="32" width="32" height="12" fill={color} opacity="0.3" />
      <rect x="8" y="32" width="32" height="4" fill={color} opacity="0.6" />
      <rect x="12" y="36" width="4" height="4" fill={color}>
        <animate attributeName="opacity" values="1;0.3;1" dur="1.8s" repeatCount="indefinite" />
      </rect>
    </svg>
  );
}

export function PixelHandoffIcon({ size = 48, color = "#ffe600", className = "" }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 48 48" className={className} style={{ imageRendering: "pixelated" }}>
      {/* Folder handoff */}
      <rect x="4" y="12" width="16" height="4" fill={color} />
      <rect x="4" y="16" width="24" height="16" fill={color} opacity="0.3" />
      <rect x="4" y="16" width="24" height="4" fill={color} opacity="0.6" />
      {/* Arrow */}
      <rect x="28" y="20" width="8" height="4" fill={color} opacity="0.8" />
      <rect x="36" y="16" width="4" height="4" fill={color} opacity="0.6" />
      <rect x="36" y="24" width="4" height="4" fill={color} opacity="0.6" />
      <rect x="40" y="20" width="4" height="4" fill={color} />
    </svg>
  );
}
