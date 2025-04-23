'use client';

import { Preview } from "@/components/ui/typewriter-demo";
import { Typewriter } from "@/components/ui/typewriter";

export default function TypewriterExamplePage() {
  return (
    <div className="min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="mb-12">
          <h1 className="text-3xl font-bold text-slate-900">Typewriter Component</h1>
          <p className="mt-2 text-lg text-slate-600">
            A flexible typewriter effect component with customizable typing and cursor animations.
            <span className="ml-2">
              Now with 
              <Typewriter
                text={["handwritten", "stylish", "beautiful"]}
                className="font-handwritten text-blue-600 text-xl ml-2"
                speed={80}
                waitTime={1500}
                deleteSpeed={50}
                cursorChar="_"
              />
              <span> font support!</span>
            </span>
          </p>
        </div>
        
        <div className="bg-white rounded-lg shadow-sm border border-slate-200 overflow-hidden">
          <div className="p-6">
            <Preview />
          </div>
          
          <div className="mt-8 p-6 border-t border-slate-200">
            <h3 className="text-xl font-bold text-slate-900 mb-4">Handwritten Font Example</h3>
            <div className="flex items-center text-3xl mb-8">
              <span className="mr-2">I love to write </span>
              <Typewriter
                text={["poetry", "letters", "stories", "memories"]}
                className="font-handwritten text-blue-600"
                speed={70}
                waitTime={1800}
                deleteSpeed={45}
                cursorChar="|"
              />
            </div>
          </div>
          
          <div className="bg-slate-50 px-6 py-4 border-t border-slate-200">
            <h3 className="text-sm font-semibold text-slate-900">Usage with Handwritten Font</h3>
            <pre className="mt-2 overflow-x-auto p-4 rounded-md bg-slate-800 text-slate-100 text-sm">
              {`<Typewriter
  text={["poetry", "letters", "stories"]}
  className="font-handwritten text-blue-600" 
  speed={70}
  waitTime={1800}
  deleteSpeed={45}
  cursorChar="|"
/>`}
            </pre>
          </div>
        </div>
      </div>
    </div>
  );
} 