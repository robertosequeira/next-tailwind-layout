import type { Metadata } from "next";
import "./globals.css";
export const metadata: Metadata = {
  title: "Next.js + Tailwind CSS",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full bg-white">
      <body
        className="h-full antialiased"
      >
        {children}
      </body>
    </html>
  );
}
