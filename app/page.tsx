import React from 'react';
import { PostList } from '../components/PostList';
import { Loader } from '../components/Loader';
import { Suspense } from 'react';


export default async function Page(): Promise<JSX.Element> {
  return (
    <main className="mx-auto mt-4 w-full max-w-3xl flex-col space-y-16 px-4 lg:px-0">
      <Suspense fallback={<Loader />}>
        <div className='w-8/12	m-auto'>
          <h1 className='text-xl font-medium	text-center	'>What is Flare?</h1>
          <p className='text-center	'>Flare is an app currently in active development designed to assist active and outdoors centric individuals by providing
            up to date information on local wildfires in BC in a fast, trustworthy and efficient ways with the assistance of AI Integrations.
          </p>
        </div>
        <h1 className='text-xl font-medium text-lg text-center m-0'>Progress Blog Posts</h1>
        <PostList />
      </Suspense>
    </main>
  );
}
export const revalidate = 60;
