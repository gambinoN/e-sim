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
      {
        protocol: "https",
        hostname: "avatars.githubusercontent.com",
      },
    ],
    domains: [
      'static.redteago.com',
      'avatars.githubusercontent.com',
    ],
  },
  async rewrites() {
    return [
      {
        source: '/api/:path*',  
        destination: 'https://api.esimaccess.com/api/v1/:path*',  
      },
    ]
  },
};

export default nextConfig;
