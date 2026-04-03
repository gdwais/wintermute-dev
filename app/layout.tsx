import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import "@/styles/index.css";

export const metadata: Metadata = {
  title: {
    default: "WintermuteDev — AI Systems & Automation Engineering",
    template: "%s | WintermuteDev",
  },
  description:
    "We build AI-powered systems, automation infrastructure, and intelligent agent deployments for businesses ready to operate differently.",
  metadataBase: new URL("https://wintermutedev.com"),
  openGraph: {
    title: "WintermuteDev — AI Systems & Automation Engineering",
    description:
      "We build AI-powered systems, automation infrastructure, and intelligent agent deployments for businesses ready to operate differently.",
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
