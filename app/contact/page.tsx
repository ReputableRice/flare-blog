import React from 'react';
import { PostList } from '../../components/PostList';
import { Suspense } from 'react';
import { Loader } from '../../components/Loader';



export default async function Contact(): Promise<JSX.Element> {
    return (
        <>
            <Suspense fallback={<Loader />}>
                <h1 className="text-gray-100 bg-clip-text text-4xl font-sansfont-bold">Contact</h1>
            </Suspense>
        </>
    );
}

export const revalidate = 60;
