/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
          {
            protocol: 'https',
            hostname: 'cdn.dummyjson.com',
          },
          {
            protocol: 'https',
            hostname: 'freshcart.codescandy.com',
          },
        ],
      },
};

export default nextConfig;
