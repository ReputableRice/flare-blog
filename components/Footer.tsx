import React from 'react';
import CosmicLogo from './logos/CosmicLogo';

export default function Footer(): JSX.Element {
  return (
    <footer className="mx-auto mt-8 flex w-full max-w-3xl items-center justify-between px-4 py-4 text-xs md:text-sm lg:px-0 lg:text-base">
      <p>Blog Powered by Cosmic</p>
    </footer>
  );
}
