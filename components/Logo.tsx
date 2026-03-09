import Link from "next/link";

export default function Logo({ className = "" }: { className?: string }) {
  return (
    <Link href="/" className={`flex items-center gap-0 shrink-0 ${className}`}>
      {/* Terminal prompt */}
      <span
        className="text-cyan font-bold"
        style={{ fontSize: "1.5rem", fontFamily: "'Courier New', monospace", marginRight: "6px" }}
      >
        &#x203A;
      </span>
      {/* Wintermute */}
      <span
        className="text-text-main font-semibold tracking-tight"
        style={{ fontSize: "1.3rem" }}
      >
        Wintermute
      </span>
      {/* Dev */}
      <span
        className="text-cyan font-semibold tracking-tight"
        style={{ fontSize: "1.3rem" }}
      >
        Dev
      </span>
      {/* Cursor */}
      <span
        className="text-cyan font-bold animate-blink"
        style={{ fontSize: "1.3rem", fontFamily: "'Courier New', monospace", marginLeft: "1px" }}
      >
        _
      </span>
    </Link>
  );
}
