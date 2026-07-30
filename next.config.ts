import type { NextConfig } from "next";

const isSitesBuild = process.env.SITES_BUILD === "1";

const nextConfig: NextConfig = {
  ...(isSitesBuild ? {} : { output: "export" as const }),
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
