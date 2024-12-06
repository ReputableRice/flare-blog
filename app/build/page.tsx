import React from 'react';
import { Suspense } from 'react';
import { Loader } from '../../components/Loader';

export default async function Build(): Promise<JSX.Element> {
  return (
    <>
      <Suspense fallback={<Loader />}>
        <div className='mx-auto mt-4 w-full max-w-3xl flex-col space-y-16 px-4 lg:px-0'>
          <div className="space-y-6">
            <h1 className="text-gray-100 bg-clip-text text-4xl font-sans font-bold mt-9 tracking-tight">
              Current Build
            </h1>
            
            <div className='space-y-8'>
              <div className="prose prose-invert max-w-none">
                <p className='text-gray-400 text-lg leading-relaxed'>
                  Visit our live site for the latest stable release:
                </p>
              </div>
              
              <a 
                href="https://www.flare-bc.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-orange-500 text-white px-6 py-3 rounded-md text-lg hover:bg-orange-600 transition"
              >
                Visit Live Site
              </a>
            </div>
          </div>
        </div>
      </Suspense>
    </>
  );
}

export const revalidate = 60;
