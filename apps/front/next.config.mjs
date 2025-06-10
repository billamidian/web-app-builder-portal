/** @type {import('next').NextConfig} */
const nextConfig = {
  transpilePackages: ['@web-app-builder-portal/dto'],
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  experimental: {
    typedRoutes: false
  }
}

export default nextConfig
