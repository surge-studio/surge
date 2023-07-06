import { createSecureHeaders } from 'next-secure-headers';

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          ...createSecureHeaders(),
          // HSTS Preload: https://hstspreload.org/
          {
            key: 'Strict-Transport-Security',
            value: 'max-age=63072000; includeSubDomains; preload',
          },
        ],
      },
    ];
  },
};

export default nextConfig;
