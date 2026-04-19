import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Bebas_Neue } from "next/font/google";
import "./globals.css";

const plusJakartaSans = Plus_Jakarta_Sans({ subsets: ["latin"], variable: "--font-plus-jakarta-sans" });
const bebasNeue = Bebas_Neue({
  subsets: ["latin"],
  weight: "400", // Required for non-variable fonts!
  variable: "--font-bebas-neue",
});

export const metadata: Metadata = {
  title: "Findable.ng | Local SEO Agency for Nigerian Businesses",
  description: "Turn people who find you on Google Search and Maps into new customers. We build, verify, and manage your Google Business Profile.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${plusJakartaSans.className} ${bebasNeue.variable} bg-background font-sans text-foreground antialiased`}>
        {children}
      </body>
    </html>
  );
}
