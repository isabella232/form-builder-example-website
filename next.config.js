const csp = require('./csp');
/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: [
      'localhost',
      process.env.NEXT_PUBLIC_CMS_URL
    ],
    // remotePatterns: [
    //   {
    //     protocol: 'https',
    //     hostname: 'localhost',
    //     port: '3000',
    //     pathname: '/media/**',
    //   },
    // ],
  },
  allowJs: true,
  reactStrictMode: true,
  async headers() {
    const headers = [];
    if (process.env.NODE_ENV !== 'development') {
      headers.push({
        source: '/(.*)', // applies to all routes
        headers: [
          {
            key: 'Content-Security-Policy',
            value: csp,
          }
        ],
      })
    }
    return headers;
  }
}

module.exports = nextConfig
