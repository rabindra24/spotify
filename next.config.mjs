import { hostname } from "os";

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: 'images.unsplash.com',
        port: "",
      },
      {
        protocol: "https",
        hostname: 'plus.unsplash.com',
        port: '',
      },
      {
        protocol: "https",
        hostname: "misc.scdn.co",
        port: '',
      },
    ],
  },
};
export default nextConfig;
