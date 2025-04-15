import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import {
  ClerkProvider,
  SignInButton,
  SignUpButton,
  SignedIn,
  SignedOut,
  UserButton,
} from '@clerk/nextjs'
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Palanca - Transform Letters into Beautiful Books",
  description: "Create meaningful collections of letters from loved ones, beautifully bound into lasting keepsakes.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en" className="h-full">
        <body className={`${inter.className} h-full`}>
          <header className="flex justify-end items-center p-4 gap-4 h-16 bg-white shadow-sm">
            <SignedOut>
              <SignInButton mode="modal">
                <button className="px-4 py-2 text-sm font-medium text-gray-700 hover:text-gray-900">
                  Sign In
                </button>
              </SignInButton>
              <SignUpButton mode="modal">
                <button className="px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-md hover:bg-blue-700">
                  Sign Up
                </button>
              </SignUpButton>
            </SignedOut>
            <SignedIn>
              <UserButton afterSignOutUrl="/" />
            </SignedIn>
          </header>
          <main className="flex-1">
            {children}
          </main>
          <Analytics />
        </body>
      </html>
    </ClerkProvider>
  );
}
