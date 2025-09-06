/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'vyaaparmitra-3.onrender.com',
        pathname: '/uploads/**',
      },
    ],
  },
};

export default nextConfig;
