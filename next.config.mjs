/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    serverActions: {
      allowedOrigins: [
        "https://k6-navy.vercel.app",
        "*.https://k6-navy.vercel.app",
        "https://k6j.vercel.app",
        "*.https://k6j.vercel.app",
      ],
    },
  },
};

export default nextConfig;
