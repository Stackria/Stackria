/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    domains: ["aceternity.com"],
    unoptimized: true,
  },
  output: 'export',
};

export default nextConfig;
