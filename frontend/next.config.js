/* eslint-disable @typescript-eslint/no-var-requires */
/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['github.com'],
  },
  compiler: {},
  env: {
    BACKEND_PORT: process.env.BACKEND_PORT,
    BACKEND_URL: process.env.BACKEND_URL,
  },
};

const withImages = require('next-images');

module.exports = withImages({
  esModule: true,
});

module.exports = nextConfig;
