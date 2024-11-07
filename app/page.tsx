import React from 'react';
import { PostList } from '../components/PostList';
import { Loader } from '../components/Loader';
import { Suspense } from 'react';
import Image from 'next/image';
import hero from '../public/images/wildfire.jpg'

export default async function Page(): Promise<JSX.Element> {
  return (
    <main className="mx-auto mt-16 w-full max-w-6xl flex-col space-y-16 px-4 lg:px-0">
      <Suspense fallback={<Loader />}>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-32">
          <div className="flex flex-col justify-center space-y-6">
            <h1 className="text-5xl font-medium tracking-tight text-gray-100">
              We help Inform People about Wildfires in BC
              <span className="text-orange-500">.</span>
            </h1>
            <p className="text-gray-400 text-lg max-w-md">
              Flare is designed to assist outdoor enthusiasts by providing
              real-time wildfire information through AI-powered insights.
            </p>
          </div>
          
          <div className="relative h-[400px] rounded-2xl overflow-hidden">
            <Image
              src={hero}
              alt="Team collaboration"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
        </div>

        <div className="flex flex-col justify-center items-center mt-32 mx-auto max-w-3xl">
          <h2 className="text-2xl font-medium text-center text-gray-100 mb-16 border-b-4 border-highlighter-default">
            Progress Blog Posts
          </h2>
          <PostList showLatestOnly={true}/>
        </div>
      </Suspense>
    </main>
  );
}

export const revalidate = 60;