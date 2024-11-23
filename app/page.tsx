import React from 'react';
import { Loader } from '../components/Loader';
import { Suspense } from 'react';
import Image from 'next/image';
import hero from '../public/images/wildfire.jpg';

export default async function Page(): Promise<JSX.Element> {
  return (
    <main className="mx-auto mt-16 w-full max-w-6xl flex-col space-y-16 px-4 lg:px-0">
      <Suspense fallback={<Loader />}>
        {/* Hero Section */}
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-32">
          <div className="flex flex-col justify-center space-y-6">
            <h1 className="text-5xl font-extrabold tracking-tight leading-tight">
              Your Essential Wildfire Safety Companion
            </h1>
            <p className="text-lg text-gray-700 max-w-md">
              Discover how Flare keeps you informed with AI-powered wildfire alerts and updates. Stay safe, plan confidently, and protect what matters most.
            </p>
            <div className="space-y-4">
              <a 
                href="/get-started" 
                className="bg-orange-500 text-white px-6 py-3 rounded-md text-lg hover:bg-orange-600 transition"
              >
                Get Started Now
              </a>
              <a 
                href="#about" 
                className="text-orange-500 underline hover:text-orange-600 transition ml-3"
              >
                Learn More
              </a>
            </div>
          </div>
          <div className="relative h-[400px] rounded-2xl overflow-hidden">
            <Image
              src={hero}
              alt="Wildfire landscape"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
        </section>

        {/* Features Section */}
        <section id="features" className="mt-32 text-center space-y-16">
          <h2 className="text-3xl font-bold">Why Choose Flare?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-6 bg-gray-100 rounded-lg shadow">
              <h3 className="text-xl font-semibold">Real-Time Information</h3>
              <p className="mt-2 text-gray-600">
                Stay ahead with instant wildfire updates for your area or travel destinations.
              </p>
            </div>
            <div className="p-6 bg-gray-100 rounded-lg shadow">
              <h3 className="text-xl font-semibold">AI-Powered Insights</h3>
              <p className="mt-2 text-gray-600">
                Let finely tuned AI guide your safety and decision-making with personalized suggestions.
              </p>
            </div>
            <div className="p-6 bg-gray-100 rounded-lg shadow">
              <h3 className="text-xl font-semibold">Easy to Use</h3>
              <p className="mt-2 text-gray-600">
                A sleek, intuitive interface that makes staying informed effortless for everyone.
              </p>
            </div>
          </div>
        </section>



        {/* Footer Section */}
        <footer className="mt-32 text-center text-gray-600">
        </footer>
      </Suspense>
    </main>
  );
}

export const revalidate = 60;
