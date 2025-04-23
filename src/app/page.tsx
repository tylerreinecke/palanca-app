'use client';

import { SignUpButton } from "@clerk/nextjs";
import Image from "next/image";
import { Typewriter } from "@/components/ui/typewriter";

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <div className="bg-amber-50">
        <div className="relative isolate px-6 py-16 sm:py-24 lg:py-32 lg:px-8 overflow-hidden">
          {/* Background gradient effect */}
          <div 
            className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80" 
            aria-hidden="true"
          >
            <div 
              className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-amber-100 to-amber-200 opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]" 
              style={{ clipPath: 'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)' }}
            />
          </div>
          
          {/* Large debossed logo */}
          <div className="absolute inset-0 -z-10 flex items-center justify-center">
            <div className="relative w-4/5 h-4/5 max-w-3xl max-h-full">
              <Image 
                src="/logo.png" 
                alt="Palanca Logo Background" 
                fill 
                className="object-contain debossed-image"
                priority
              />
            </div>
          </div>
          
          {/* Hero content */}
          <div className="mx-auto max-w-5xl py-8 sm:py-14 lg:py-20 relative z-10">
            <div className="text-center">
              <h1 className="text-4xl font-bold tracking-tight text-stone-900 sm:text-6xl drop-shadow-sm leading-tight">
                <span>Share </span>
                <Typewriter
                  text={[
                    "letters",
                    "memories", 
                    "messages",
                    "lessons",
                    "stories"
                  ]}
                  speed={80}
                  className="text-amber-800 font-handwritten text-4xl sm:text-6xl drop-shadow-sm leading-tight"
                  waitTime={2000}
                  deleteSpeed={60}
                  cursorChar="|"
                />
                <span> with those you love.</span>
              </h1>
              <div className="mt-10 flex items-center justify-center gap-x-6">
                <SignUpButton mode="modal">
                  <button className="rounded-md bg-amber-900 px-4 py-2.5 text-sm font-semibold text-amber-50 shadow-sm hover:bg-amber-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amber-900 transition-all">
                    Start Your Palanca
                  </button>
                </SignUpButton>
                <a href="#what-is-palanca" className="text-sm font-semibold leading-6 text-stone-900 hover:text-amber-800 transition-colors">
                  Learn More <span aria-hidden="true">→</span>
                </a>
              </div>
            </div>
          </div>
          
          {/* Bottom gradient effect */}
          <div 
            className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]" 
            aria-hidden="true"
          >
            <div 
              className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-amber-200 to-amber-100 opacity-20 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]" 
              style={{ clipPath: 'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)' }}
            />
          </div>
        </div>
      </div>

      {/* What is a Palanca Section */}
      <div id="what-is-palanca" className="bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:text-center mb-12">
            <h2 className="text-base font-semibold leading-7 text-amber-800">What is a Palanca?</h2>
            <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              A Legacy of Love and Support
            </p>
          </div>
          
          <div className="mx-auto grid grid-cols-1 gap-8 lg:grid-cols-2">
            <div className="prose prose-gray prose-lg text-gray-600">
              <p>
                The word "Palanca" comes from the Spanish word for "lever" and symbolizes spiritual leverage or support. 
                In many traditions, particularly in spiritual retreats, a Palanca is a collection of thoughtful letters 
                and messages from loved ones, offering encouragement, wisdom, and support.
              </p>
              <p>
                <br></br>  
                These personal messages are gathered secretly and presented at a meaningful moment, 
                often during life transitions or celebrations, to provide emotional strength and 
                commemorate special milestones.
              </p>
            </div>
            <div className="prose prose-gray prose-lg text-gray-600">
              <p>
                Our service transforms this beautiful tradition into lasting keepsakes by 
                collecting and preserving meaningful messages in beautiful, professionally bound books 
                that celebrate the connections and moments that matter most in life.
              </p>
              <p>
                <br></br>
                Whether it's for a wedding, graduation, retirement, or any significant life event, 
                a Palanca book becomes a treasured memento that can be revisited for years to come, 
                providing encouragement and reminders of love and support whenever needed.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* How It Works Section */}
      <div id="how-it-works" className="bg-gray-50 py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:text-center">
            <h2 className="text-base font-semibold leading-7 text-amber-800">How It Works</h2>
            <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Simple Steps to Create Your Palanca
            </p>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              We help you collect messages from friends and family, and transform them into a beautifully bound book that will be cherished for generations.
            </p>
          </div>
          
          <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
            <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
              <div className="flex flex-col">
                <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-gray-900">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-amber-800 text-white">
                    1
                  </div>
                  Create Your Project
                </dt>
                <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-600">
                  <p className="flex-auto">Set up your collection and customize it for your special occasion or loved one.</p>
                </dd>
              </div>
              
              <div className="flex flex-col">
                <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-gray-900">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-amber-800 text-white">
                    2
                  </div>
                  Collect Messages
                </dt>
                <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-600">
                  <p className="flex-auto">Invite friends and family to contribute their personal letters, photos, and memories.</p>
                </dd>
              </div>
              
              <div className="flex flex-col">
                <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-gray-900">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-amber-800 text-white">
                    3
                  </div>
                  Receive Your Book
                </dt>
                <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-600">
                  <p className="flex-auto">We'll transform the collected messages into a beautifully designed, professionally bound book.</p>
                </dd>
              </div>
            </dl>
          </div>
        </div>
      </div>

      {/* Occasions Section */}
      <div className="bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:text-center">
            <h2 className="text-base font-semibold leading-7 text-amber-800">Perfect For Any Occasion</h2>
            <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Celebrate Life's Meaningful Moments
            </p>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              From weddings to retirements, graduations to milestone birthdays, Palanca helps you create a lasting memory for all of life's significant occasions.
            </p>
          </div>
          
          <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:mt-20 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3">
            {[
              { title: "Weddings", description: "Collect words of wisdom and well wishes from wedding guests." },
              { title: "Graduations", description: "Gather advice and congratulations from mentors and loved ones." },
              { title: "Retirements", description: "Celebrate a career with messages from colleagues and friends." },
              { title: "Milestone Birthdays", description: "Honor special birthdays with memories and wishes." },
              { title: "New Beginnings", description: "Welcome a baby or commemorate a new home or journey." },
              { title: "Community Support", description: "Express collective encouragement during challenging times." }
            ].map((occasion, index) => (
              <div key={index} className="flex flex-col items-start">
                <h3 className="text-lg font-semibold leading-8 tracking-tight text-gray-900">{occasion.title}</h3>
                <p className="mt-1 text-base leading-7 text-gray-600">{occasion.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Testimonial Section */}
      <div className="bg-gray-50 py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:text-center">
            <h2 className="text-base font-semibold leading-7 text-amber-800">Testimonials</h2>
            <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              What Our Customers Say
            </p>
          </div>
          <div className="mx-auto mt-16 flow-root max-w-2xl lg:max-w-4xl">
            <div className="rounded-2xl bg-white p-8 shadow-sm ring-1 ring-gray-200 luxury-shadow">
              <blockquote className="text-lg font-medium leading-8 text-gray-900">
                <p>
                  "The book Palanca created for my daughter's graduation was beyond anything I could have imagined. Seeing all the letters from family and mentors bound so beautifully brought tears to her eyes. This will be treasured forever."
                </p>
              </blockquote>
              <div className="mt-6 flex items-center gap-x-4">
                <div>
                  <p className="font-semibold">Michelle K.</p>
                  <p className="text-sm leading-6 text-gray-600">Mother of a College Graduate</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-white">
        <div className="mx-auto max-w-7xl py-24 sm:px-6 sm:py-32 lg:px-8">
          <div className="relative isolate overflow-hidden bg-gray-900 px-6 py-24 text-center shadow-2xl sm:rounded-3xl sm:px-16 luxury-shadow">
            <h2 className="mx-auto max-w-2xl text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Start your collection today
            </h2>
            <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-gray-300">
              Create a meaningful keepsake that preserves the words and memories that matter most.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <SignUpButton mode="modal">
                <button className="rounded-md bg-white px-4 py-2.5 text-sm font-semibold text-gray-900 shadow-sm hover:bg-gray-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white transition-all">
                  Get Started
                </button>
              </SignUpButton>
            </div>
            <div className="absolute -top-24 right-0 -z-10 transform-gpu blur-3xl" aria-hidden="true">
              <div className="aspect-[1404/767] w-[87.75rem] bg-gradient-to-r from-gray-800 to-gray-700 opacity-30" style={{ clipPath: 'polygon(73.6% 51.7%, 91.7% 11.8%, 100% 46.4%, 97.4% 82.2%, 92.5% 84.9%, 75.7% 64%, 55.3% 47.5%, 46.5% 49.4%, 45% 62.9%, 50.3% 87.2%, 21.3% 64.1%, 0.1% 100%, 5.4% 51.1%, 21.4% 63.9%, 58.9% 0.2%, 73.6% 51.7%)' }} />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
