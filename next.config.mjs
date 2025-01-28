/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        hostname: 'cdn.sanity.io',
      },
      {
        hostname: 'images.pexels.com',
      },
    ],
    unoptimized: true
  },
};

export default nextConfig;
