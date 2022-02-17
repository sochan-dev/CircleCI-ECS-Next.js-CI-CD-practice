/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  //追加ここから
  webpackDevMiddleware: (config) => {
    config.watchOptions = {
      poll: 800,
      aggregateTimeout: 300,
    };
    return config;
  },
  //ここまで
};

module.exports = nextConfig;
