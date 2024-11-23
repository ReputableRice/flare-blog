import React from 'react';
import { Loader } from '../../components/Loader';
import { Suspense } from 'react';
import Image from 'next/image';
import hero from '../../public/images/wildfire.jpg'

export default async function InvestorPage(): Promise<JSX.Element> {

  return (
    <main className="mx-auto mt-16 w-full max-w-6xl flex-col space-y-16 px-4 lg:px-0">
      <Suspense fallback={<Loader />}>
        {/* Hero Section */}
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-32">
          <div className="flex flex-col justify-center space-y-6">
            <h1 className="text-5xl font-extrabold tracking-tight leading-tight">
              Partner with Flare to Shape a Safer Future
            </h1>
            <p className="text-lg text-gray-700 max-w-md">
              With a growing user base and cutting-edge AI technology, Flare is transforming wildfire safety. Join us in driving innovation and making a global impact.
            </p>
            <a 
              href="/contact" 
              className="bg-orange-500 text-white px-6 py-3 rounded-md text-lg hover:bg-orange-600 transition"
            >
              Contact Us
            </a>
          </div>
          <div className="relative h-[400px] rounded-2xl overflow-hidden">
            <Image
              src={hero}
              alt="Wildfire statistics"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
        </section>

        <section className="mt-32 text-center space-y-8">
          <h2 className="text-3xl font-bold">Our Mission</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Flare is dedicated to saving lives and protecting communities by providing real-time wildfire updates, insights, and predictions. Together, we can create a safer and more sustainable future.
          </p>
        </section>

        {/* Footer Section */}
        <footer className="mt-32 text-center text-gray-600">
          <p>© {new Date().getFullYear()} Flare. All Rights Reserved.</p>
        </footer>
      </Suspense>
    </main>
  );
}

export const revalidate = 60;
