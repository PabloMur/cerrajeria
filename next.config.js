/** @type {import('next').NextConfig} */
const nextConfig = {
  devServer: {
    port: process.env.PORT || 3000,
    disableHostCheck: true,
  },
};

module.exports = nextConfig;
