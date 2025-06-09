import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  async redirects() {
    return [
      {
        source: "/",
        destination: "/products/electronics",
        permanent: false,
      },
    ];
  },
};

export default nextConfig;
