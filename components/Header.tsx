import React from 'react';
import SiteLogo from './logos/SiteLogo';
import { GlobalData } from '../lib/types';
import Logo from './logos/Logo';
import Link from 'next/link';

export default function Header({ name }: { name: GlobalData }): JSX.Element {
  return (
    <header className="bg-white/75 backdrop-blur-lg dark:bg-zinc-950/75 sticky top-0 z-10">
      <div className="w-full max-w-3xl flex items-center justify-between px-4 py-4 content-center mx-auto pt-6">
        <SiteLogo siteData={name} />
        <div className=" ">
          <Link href="/" className="text-gray-100 bg-clip-text text-2xl font-sansfont-bold m-6">Home</Link>
          <Link href="/blog" className="text-gray-100 bg-clip-text text-2xl font-sansfont-bold m-6">Blog</Link>
          <Link href="/about" className="text-gray-100 bg-clip-text text-2xl font-sansfont-bold m-6">About</Link>
        </div>
        <div className="text-white bg-highlighter-default focus:ring-blue-300 rounded-lg px-5 py-2.5 me-2 mb-2 focus:outline-none">
          <Link href="/build" className="text-gray-100 bg-clip-text text-1xl font-sansfont-bold m-6">dev build</Link>
        </div>
      </div>
    </header>
  );
}
