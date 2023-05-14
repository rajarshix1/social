/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
    async rewrites() {
      return [
        {
          source: '/api/:path*',
          destination: 'https://tame-lime-bear.cyclic.app/:path*',      },
      ];
    },
  
}

module.exports = nextConfig
