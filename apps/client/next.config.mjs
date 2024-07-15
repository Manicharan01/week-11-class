/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  transpilePackages: ["@repo/ui", "@repo/db", "@repo/secret", "@repo/store"],
};

export default nextConfig;
