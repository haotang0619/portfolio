import NextBundleAnalyzer from '@next/bundle-analyzer';

// Analyze bundles on local build
const withBundleAnalyzer = process.env.ANALYZE === 'true' ? NextBundleAnalyzer() : (x) => x;

/** @type {import('next').NextConfig} */
const nextConfig = {
  // English stays at `/` regardless of the browser language; Traditional Chinese lives at `/zh-TW`.
  i18n: { defaultLocale: 'en', localeDetection: false, locales: ['en', 'zh-TW'] },
  reactStrictMode: true,
  swcMinify: true,
};

export default withBundleAnalyzer(nextConfig);
