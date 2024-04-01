/** @type {import('next').NextConfig} */

module.exports = {
  experimental: {
    serverActions: {
      allowedOrigins: [
        "https://k6j.vercel.app",
        "*.https://k6j.vercel.app",
        "https://k6-navy.vercel.app",
        "*.https://k6-navy.vercel.app/",
      ],
    },
  },
};
