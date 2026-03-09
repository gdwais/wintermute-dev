import Link from "next/link";

export default function Footer() {
  return (
    <footer
      className="text-center py-12 px-8"
      style={{ borderTop: "1px solid rgba(62, 120, 178,.08)" }}
    >
      <div className="text-text-main font-semibold">WintermuteDev</div>
      <p className="text-body-color text-sm mt-1">
        wintermutedev.com — AI automation systems, built and deployed.
      </p>
    </footer>
  );
}
