/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  webpack: (config) => {
    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack'],
    });

    return config;
  },
  images: {
    domains: [
      'res.cloudinary.com',
      'yaimg.yanolja.com',
      'tong.visitkorea.or.kr',
    ],
  },
  async redirects() {
    return [
      {
        source: '/',
        destination: '/home',
        permanent: true,
      },
    ];
  },

  typescript: {
    ignoreBuildErrors: true,
  },
};

module.exports = nextConfig;
