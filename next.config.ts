import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  ppr: "incremental",
  images: {
    domains: ["raw.githubusercontent.com"],
  },
};

export default nextConfig;
