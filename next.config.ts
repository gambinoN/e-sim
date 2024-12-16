// next.config.js
module.exports = {
  async rewrites() {
    return [
      {
        source: '/api/:path*',  // Matches any /api/ path
        destination: 'https://api.esimaccess.com/api/v1/:path*',  // Forward to the external API
      },
    ]
  },
}
