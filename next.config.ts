import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  async redirects() {
    return [
      {
        source: "/tasks",
        destination: "/",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
