import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Inter } from "next/font/google";
import "./globals.css";

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-plus-jakarta-sans",
});
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "FINDABLE.NG | The Authority in Nigerian SEO",
  description:
    "Turn people who find you on Google Search and Maps into new customers. We build, verify, and manage your Google Business Profile.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap" rel="stylesheet" />
      </head>
      <body
        className={`${inter.variable} ${plusJakartaSans.variable} bg-surface text-on-background selection:bg-primary-fixed selection:text-on-primary-fixed font-body antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
