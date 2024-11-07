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
              Sorry
            </h1>
            
            <div className='space-y-8'>
              <div className="prose prose-invert max-w-none">
                <p className='text-gray-400 text-lg leading-relaxed'>
                  This section is under construction. Check back later for updates!
                </p>
              </div>
              
              {/* <div className="relative">
                <div className="" />
              </div> */}
            </div>
          </div>
        </div>
      </Suspense>
    </>
  );
}

export const revalidate = 60;
