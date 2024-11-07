import React from 'react';
import { PostList } from '../../components/PostList';
import { Suspense } from 'react';
import { Loader } from '../../components/Loader';



export default async function Blog(): Promise<JSX.Element> {
    return (
        <>
            <Suspense fallback={<Loader />}>
                <div className='mx-auto mt-4 w-full max-w-3xl flex-col space-y-16 px-4 lg:px-0'>
                    <h1 className="text-gray-100 bg-clip-text text-4xl font-sansfont-bold mt-9">Blog</h1>
                    <div className='mt-1'>
                        <p className='mb-2'>Get weekly updates on the development progress and insights into Flare here!</p>
                        <PostList />
                    </div>
                </div>
            </Suspense>
        </>
    );
}

export const revalidate = 60;
