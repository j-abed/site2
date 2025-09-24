/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      { protocol: 'https', hostname: '**.unsplash.com' },
      { protocol: 'https', hostname: '**.pexels.com' },
    ],
  },
}

export default nextConfig
