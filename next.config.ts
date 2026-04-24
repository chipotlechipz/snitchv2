import type { NextConfig } from "next"

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      { hostname: "avatars.githubusercontent.com" },
      { hostname: "www.nintendo.com" },
        output: 'export',
    ],
  },
}
module.exports = nextConfig;

export default nextConfig
