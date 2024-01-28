/* eslint-disable @typescript-eslint/no-var-requires */
/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['github.com'],
  },
  compiler: {},
  env: {
    APP_PORT: process.env.PORT,
    BACKEND_PORT: process.env.BACKEND_PORT,
  },
};

const withImages = require('next-images');

module.exports = withImages({
  esModule: true,
});

module.exports = nextConfig;
