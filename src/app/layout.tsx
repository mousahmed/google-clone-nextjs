import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Google Clone",
  description: "Google Clone built by Nextjs",
  icons: "/favicon.svg"
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
