import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Design Sandbox",
  description: "A shared prototyping environment for your design system.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
