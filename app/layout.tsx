import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import "@/styles/index.css";

export const metadata: Metadata = {
  title: {
    default: "WintermuteDev — AI Automation & Workflow Engineering",
    template: "%s | WintermuteDev",
  },
  description:
    "We build AI-powered automation systems, deploy OpenClaw agents, and engineer custom workflows for businesses ready to operate differently.",
  metadataBase: new URL("https://wintermutedev.com"),
  openGraph: {
    title: "WintermuteDev — AI Automation & Workflow Engineering",
    description:
      "We build AI-powered automation systems, deploy OpenClaw agents, and engineer custom workflows for businesses ready to operate differently.",
    siteName: "WintermuteDev",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <body className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1 pt-16 lg:pt-20">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
