import "./globals.css";
import type React from "react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ThemeProvider } from "../components/theme-provider";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import { Analytics } from "@vercel/analytics/next";
import { Suspense } from "react";

const inter = Inter({
  subsets: ["latin"],
  display: "swap", // Optional: for better font rendering
});
export const metadata: Metadata = {
  title: "Sarvesh Vithal Sawant ,Freelancer | Developer",
  description:
    "Professional portfolio of a Full Stack Developer specialized in Flutter, C, SQL, and Node.js",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`font-sans ${GeistSans.variable} ${GeistMono.variable}`}>
        <Suspense fallback={null}>
          <ThemeProvider>
            <>
              {children}
              <Analytics />
            </>
          </ThemeProvider>
        </Suspense>
      </body>
    </html>
  );
}
