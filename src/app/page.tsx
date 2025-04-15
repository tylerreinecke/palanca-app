'use client';

import { SignUpButton } from "@clerk/nextjs";

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <div className="bg-white">
        <div className="relative isolate px-6 pt-14 lg:px-8">
          <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
            <div className="text-center">
              <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
                Palanca
              </h1>
              <p className="mt-6 text-lg leading-8 text-gray-600">
                Transform heartfelt letters into beautiful, bound books. Create lasting memories that celebrate the connections that matter most.
              </p>
              <div className="mt-10 flex items-center justify-center gap-x-6">
                <SignUpButton mode="modal">
                  <button className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
                    Get started
                  </button>
                </SignUpButton>
                <a href="#learn-more" className="text-sm font-semibold leading-6 text-gray-900">
                  Learn more <span aria-hidden="true">→</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Feature Section */}
      <div id="learn-more" className="bg-gray-50 py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:text-center">
            <h2 className="text-base font-semibold leading-7 text-indigo-600">Meaningful Gifts</h2>
            <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              More than just a book
            </p>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Palanca represents offerings, prayers, and encouragement given on behalf of others. We help you collect and preserve these meaningful messages in a beautifully bound book.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
