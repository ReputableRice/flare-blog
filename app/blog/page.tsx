import React from 'react';
import { PostList } from '../../components/PostList';
import { Suspense } from 'react';
import { Loader } from '../../components/Loader';

export default async function Blog(): Promise<JSX.Element> {
  return (
    <>
      <Suspense fallback={<Loader />}>
        <div className='mx-auto mt-4 w-full max-w-3xl flex-col space-y-16 px-4 lg:px-0'>
          <div className="space-y-6">
            <h1 className=" bg-clip-text text-4xl font-sans font-bold mt-9 tracking-tight">
              Blog
            </h1>
            
            <div className='space-y-8'>
              <div className="prose prose-invert max-w-none">
                <p className='text-gray-400 text-lg leading-relaxed'>
                  Get weekly updates on the development progress and insights into Flare here!
                </p>
              </div>
              
              <div className="relative">
                <div className="absolute inset-0 from-gray-900/0 via-gray-900/50 to-gray-900/0 blur-sm -z-10" />
                <PostList showLatestOnly={false} />
              </div>
            </div>
          </div>
        </div>
      </Suspense>
    </>
  );
}

export const revalidate = 60;