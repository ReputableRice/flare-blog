import React from 'react';
import SiteLogo from './logos/SiteLogo';
import { GlobalData } from '../lib/types';
import Link from 'next/link';

export default function Header({ name }: { name: GlobalData }): JSX.Element {
  return (
    <header className="bg-white/75 backdrop-blur-lg dark:bg-zinc-950/75 sticky top-0 z-10">
      <div className="w-full max-w-3xl flex items-center justify-between px-4 py-4 content-center mx-auto pt-6">
        <SiteLogo siteData={name} />
        <div className="flex items-center">
          <div className="relative group">
            <Link href="/" className="text-2xl mr-5">
              Home
            </Link>
            <div className="absolute left-0 hidden group-hover:block bg-white shadow-lg rounded-lg dark:bg-zinc-950">
              <ul className="py-2">
                <li>
                  <Link
                    href="/customer"
                    className="block px-4 py-2 text-gray-800 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-zinc-800"
                  >
                    Customers
                  </Link>
                </li>
                <li>
                  <Link
                    href="/investor"
                    className="block px-4 py-2 text-gray-800 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-zinc-800"
                  >
                    Investors
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <Link href="/blog" className=" bg-clip-text text-2xl font-sansfont-bold m-6">Blog</Link>
          <Link href="/about" className=" bg-clip-text text-2xl font-sansfont-bold m-6">About</Link>
        </div>
        <div className="text-white bg-highlighter-default focus:ring-blue-300 rounded-lg px-5 py-2.5 me-2 mb-2 focus:outline-none">
          <Link href="/build" className=" bg-clip-text text-1xl font-sansfont-bold m-6">dev build</Link>
        </div>
      </div>
    </header>
  );
}
