import React from 'react';
import { Loader } from '../../components/Loader';
import { Suspense } from 'react';
import Image from 'next/image';

import { Metadata } from 'next';

export const generateMetadata = async (): Promise<Metadata> => {
  return {
    title: 'Flare - You | Wildfire Safety Companion',
    description: 'Get real-time wildfire alerts, evacuation updates, and safety tips to plan your adventures responsibly with Flare.',
  };
};

export default async function CustomerPage(): Promise<JSX.Element> {
  const imageURL = "https://images.pexels.com/photos/9210464/pexels-photo-9210464.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1";

  return (
    <main className="mx-auto mt-16 w-full max-w-6xl flex-col space-y-16 px-4 lg:px-0">
      <Suspense fallback={<Loader />}>

        <section className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-32">
          <div className="flex flex-col justify-center space-y-6">
            <h1 className="text-5xl font-extrabold tracking-tight leading-tight text-zinc-900 dark:text-white">
              Stay Informed, Stay Safe
            </h1>
            <p className="text-lg text-zinc-600 dark:text-zinc-300 max-w-md">
              Flare is your trusted companion for real-time wildfire alerts, evacuation updates, and safety tips, helping you plan your adventures responsibly.
            </p>
            <a 
              href="/signup" 
              className="bg-orange-500 text-white px-6 py-3 rounded-md text-lg hover:bg-orange-600 transition"
            >
              Get Started
            </a>
          </div>
          <div className="relative h-[400px] rounded-2xl overflow-hidden">
            <Image
              src={imageURL}
              alt="Happy family outdoors"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
        </section>

        <section className="space-y-16">
          <h2 className="text-3xl font-bold text-center text-zinc-900 dark:text-white">Why Choose Flare?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center space-y-4">
              <div className="text-6xl text-orange-500">📍</div>
              <h3 className="text-xl font-semibold">Real-Time Alerts</h3>
              <p className="text-gray-600">
                Receive instant updates on wildfire activity near your location.
              </p>
            </div>
            <div className="text-center space-y-4">
              <div className="text-6xl text-orange-500">💡</div>
              <h3 className="text-xl font-semibold">AI-Powered Insights</h3>
              <p className="text-gray-600">
                Get recommendations and predictions to stay one step ahead.
              </p>
            </div>
            <div className="text-center space-y-4">
              <div className="text-6xl text-orange-500">🛠️</div>
              <h3 className="text-xl font-semibold">Seamless User Experience</h3>
              <p className="text-gray-600">
                Well optimized navigational and interactable features
              </p>
            </div>
          </div>
        </section>

        <footer className="mt-32 text-center text-gray-600">
          <p>© {new Date().getFullYear()} Flare. All Rights Reserved.</p>
        </footer>
      </Suspense>
    </main>
  );
}

export const revalidate = 60;
