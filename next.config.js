/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    // Warning: This allows production builds to successfully complete even if
    // your project has ESLint errors.
    ignoreDuringBuilds: true,
  },
  reactStrictMode: false,
  images : {
    domains : [
      "images.unsplash.com",
      "tailwindcss.com",
      "tailwindui.com"
    ]
  }
}

module.exports = nextConfig
