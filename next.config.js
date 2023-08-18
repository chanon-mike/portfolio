/** @type {import('next').NextConfig} */

const { i18n } = require('./next-i18next.config');

const nextConfig = {
  reactStrictMode: true,
  basePath:
    process.env.GITHUB_REPOSITORY !== undefined
      ? `/${process.env.GITHUB_REPOSITORY.split('/')[1]}`
      : '',
  trailingSlash: true,
  eslint: { ignoreDuringBuilds: true },
  typescript: { ignoreBuildErrors: true },
  i18n,
};

module.exports = nextConfig;
