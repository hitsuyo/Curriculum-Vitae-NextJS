import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  env: {
    NEXT_PUBLIC_API_ENDPOINT: 'https://laravel-repository-symlinks.laragon.com:8443', /* Backend API */
  },
};

export default nextConfig;
