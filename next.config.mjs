/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  basePath: '/portafolio_next',
  output: 'export',
  images: {
    unoptimized: true,
  },
}

export default nextConfig
