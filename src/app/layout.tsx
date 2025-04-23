import type { Metadata } from "next";
import { Inter, Caveat } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import {
  ClerkProvider,
  SignInButton,
  SignUpButton,
  SignedIn,
  SignedOut,
  UserButton,
} from '@clerk/nextjs'
import Link from "next/link";
import Image from "next/image";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: '--font-inter' });
const caveat = Caveat({ subsets: ["latin"], variable: '--font-caveat' });

export const metadata: Metadata = {
  title: "Palanca - Transform Letters into Beautiful Books",
  description: "Create meaningful collections of letters from loved ones, beautifully bound into lasting keepsakes.",
  keywords: "palanca, letters, keepsakes, meaningful gifts, bound books, personal messages, memorial books, wedding gifts, graduation gifts",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en" className={`h-full ${inter.variable} ${caveat.variable}`}>
        <body className={`${inter.className} h-full flex flex-col`}>
          <header className="sticky top-0 z-50 flex justify-between items-center px-6 py-4 bg-white border-b border-neutral-200">
            <div className="flex items-center gap-2">
              <div className="relative w-10 h-14">
                <Image 
                  src="/logo.png" 
                  alt="Palanca Logo" 
                  fill 
                  className="object-contain" 
                  priority
                />
              </div>
              <Link href="/" className="text-xl font-bold text-slate-800 hover:text-slate-900 transition-colors">
                Palanca
              </Link>
            </div>
            
            <div className="flex items-center gap-4">
              <SignedOut>
                <SignInButton mode="modal">
                  <button className="px-4 py-2 text-sm font-medium text-slate-700 hover:text-blue-600 transition-colors">
                    Sign In
                  </button>
                </SignInButton>
                <SignUpButton mode="modal">
                  <button className="px-4 py-2 text-sm font-medium text-white bg-slate-800 rounded-md hover:bg-slate-900 transition-colors">
                    Sign Up
                  </button>
                </SignUpButton>
              </SignedOut>
              <SignedIn>
                <nav className="hidden md:flex items-center mr-6 space-x-6">
                  <Link href="/dashboard" className="text-sm font-medium text-slate-700 hover:text-blue-600 transition-colors">
                    Dashboard
                  </Link>
                  <Link href="/projects" className="text-sm font-medium text-slate-700 hover:text-blue-600 transition-colors">
                    My Projects
                  </Link>
                  <Link href="/examples/typewriter" className="text-sm font-medium text-slate-700 hover:text-blue-600 transition-colors">
                    Examples
                  </Link>
                </nav>
                <UserButton 
                  afterSignOutUrl="/"
                  appearance={{
                    elements: {
                      userButtonAvatarBox: "w-8 h-8"
                    }
                  }}
                />
              </SignedIn>
            </div>
          </header>
          <main className="flex-1">
            {children}
          </main>
          <footer className="bg-slate-50 border-t border-slate-200">
            <div className="mx-auto max-w-7xl px-6 py-12 md:flex md:items-center md:justify-between lg:px-8">
              <div className="flex items-center justify-center space-x-2">
                <div className="relative w-8 h-10">
                  <Image 
                    src="/logo.png" 
                    alt="Palanca Logo" 
                    fill 
                    className="object-contain" 
                  />
                </div>
                <p className="text-sm font-medium text-slate-800">
                  Palanca
                </p>
              </div>
              <div className="mt-8 md:mt-0 flex flex-col md:flex-row items-center gap-4 md:gap-8">
                <Link href="/examples/typewriter" className="text-xs font-medium text-slate-600 hover:text-blue-600 transition-colors">
                  Typewriter Demo
                </Link>
                <p className="text-center text-xs leading-5 text-slate-500">
                  &copy; {new Date().getFullYear()} Palanca. All rights reserved.
                </p>
              </div>
            </div>
          </footer>
          <Analytics />
        </body>
      </html>
    </ClerkProvider>
  );
}
