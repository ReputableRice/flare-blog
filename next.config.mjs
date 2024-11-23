/** @type {import('next').NextConfig} */

const nextConfig = {
  experimental: {
    ppr: 'incremental',
  },
  images: {
    domains: ['images.pexels.com'],
  },
};

export default nextConfig;
