/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  env: {
    BASEURL: "http://localhost:3000",
  },
};

module.exports = nextConfig;
