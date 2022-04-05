/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    SERVER_END_POINT: process.env.SERVER_END_POINT,
  }
}

module.exports = nextConfig
