import React from 'react';
import { Suspense } from 'react';
import { Loader } from '../../components/Loader';
import Image from 'next/image';
import logo from "../../public/images/FlareLogo.svg"



export default async function About(): Promise<JSX.Element> {
    return (
        <>
            <Suspense fallback={<Loader />}>
                <div className='mx-auto mt-4 w-full max-w-3xl flex-col space-y-16 px-4 lg:px-0'>
                    <h1 className="text-gray-100 bg-clip-text text-4xl font-sansfont-bold mt-9">About</h1>
                    <div className='mt-1'>
                        <p className='mb-2'>Get to know the team at Flare</p>
                        <div>
                            <Image
                                height={300}
                                width={300}
                                src={logo}
                                alt="Flare logo"
                            />
                        </div>
                        <div>
                            <ul className="text-gray-100">
                                <li>Jackie</li>
                                <li>Ben</li>
                                <li>Henver</li>
                                <li>Sebastian</li>
                                <li>Allison</li>
                                <li>Jin</li>
                                <li>Kevin</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </Suspense>
        </>
    );
}

export const revalidate = 60;
