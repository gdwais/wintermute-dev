import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import "@/styles/index.css";

export const metadata: Metadata = {
  title: {
    default: "WintermuteDev — AI Digital Workers for Startups",
    template: "%s | WintermuteDev",
  },
  description:
    "We deploy and manage teams of AI agents that handle research, content, development, and operations for small SaaS startups.",
  metadataBase: new URL("https://wintermutedev.com"),
  openGraph: {
    title: "WintermuteDev — AI Digital Workers for Startups",
    description:
      "We deploy and manage teams of AI agents that handle research, content, development, and operations for small SaaS startups.",
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
