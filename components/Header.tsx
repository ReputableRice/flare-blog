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
            <Link 
              href="/" 
              className="m-6 text-2xl mr-5 text-zinc-800 dark:text-zinc-200 hover:text-zinc-700 dark:hover:text-zinc-300 flex items-center"
            >
              Home
              <svg 
                className="w-4 h-4 ml-1 mt-1" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={2} 
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </Link>
            <div className="absolute left-0 hidden group-hover:block bg-white shadow-lg rounded-lg dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800">
              <ul className="py-2">
                <li>
                  <li>
                    <Link
                      href="/investor"
                      className="block px-4 py-2 text-zinc-800 hover:bg-zinc-100 dark:text-zinc-200 dark:hover:bg-zinc-800"
                    >
                      Investors
                    </Link>
                  </li>
                  <Link
                    href="/customer"
                    className="block px-4 py-2 text-zinc-800 hover:bg-zinc-100 dark:text-zinc-200 dark:hover:bg-zinc-800"
                  >
                    Customers
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <Link 
            href="/blog" 
            className="text-zinc-900 dark:text-zinc-100 text-2xl font-sansfont-bold m-6 hover:text-zinc-700 dark:hover:text-zinc-300"
          >
            Blog
          </Link>
          <Link 
            href="/about" 
            className="text-zinc-900 dark:text-zinc-100 text-2xl font-sansfont-bold m-6 hover:text-zinc-700 dark:hover:text-zinc-300"
          >
            About
          </Link>
        </div>
        <div className="text-white bg-orange-500 hover:bg-orange-600 focus:ring-blue-300 rounded-lg px-5 py-2.5 me-2 mb-2 focus:outline-none">
          <Link href="/build" className="text-white text-1xl font-sansfont-bold m-6">
            Visit our Site
          </Link>
        </div>
      </div>
    </header>
  );
}
