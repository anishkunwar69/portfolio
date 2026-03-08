import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  eslint: {
    // Warning: This allows production builds to successfully complete even if
    // your project has ESLint errors.
    ignoreDuringBuilds: true,
  },
  images: {
    domains: [
      'media.istockphoto.com',
      'scontent.fktm20-1.fna.fbcdn.net',
      'res.cloudinary.com',
      'goinswriter.com',
      'assets.aceternity.com'
    ],
  },
};

export default nextConfig;
