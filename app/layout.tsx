import type { Metadata } from "next";
import { Space_Grotesk } from "next/font/google";
import "./globals.css";
import AuthProvider from "@/components/AuthProvider";

const space = Space_Grotesk({ weight: ["400", "700"], subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Preserve Today Discover Tomorrow | Trezor",
  description:
    "Trezor is a platform for preserving your beautiful memories and unlock them later in the future.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={space.className}>
        <AuthProvider>{children}</AuthProvider>
      </body>
    </html>
  );
}
