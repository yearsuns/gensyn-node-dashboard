/** @type {import('next').NextConfig} */
const nextConfig = {
  // Performance budgets
  experimental: {
    optimizePackageImports: ['viem'],
  },
};

export default nextConfig;

