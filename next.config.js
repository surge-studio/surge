/** @type {import('next').NextConfig} */

const { createSecureHeaders } = require('next-secure-headers');

const nextConfig = {
  reactStrictMode: true,
  async headers() {
    return [{ source: '/(.*)', headers: createSecureHeaders() }];
  },
};

module.exports = nextConfig;
