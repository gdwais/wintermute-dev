import Link from "next/link";

export default function Footer() {
  return (
    <footer
      className="text-center py-12 px-8"
      style={{ borderTop: "1px solid rgba(0,240,255,.08)" }}
    >
      <div className="text-text-main font-semibold">WintermuteDev</div>
      <p className="text-body-color text-sm mt-1">
        wintermutedev.com — AI agent teams, deployed and managed.
      </p>
    </footer>
  );
}
