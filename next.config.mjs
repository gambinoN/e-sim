/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "i.pravatar.cc",
      },
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
      {
        protocol: "https",
        hostname: "github.com",
      },
    ],
    domains: ['static.redteago.com'],
  },
  async rewrites() {
    return [
      {
        source: '/api/:path*',  // Matches any /api/ path
        destination: 'https://api.esimaccess.com/api/v1/:path*',  // Forward to the external API
      },
    ]
  },
};

export default nextConfig;
