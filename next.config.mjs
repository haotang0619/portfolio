import NextBundleAnalyzer from '@next/bundle-analyzer';

// Analyze bundles on local build
const withBundleAnalyzer = process.env.ANALYZE === 'true' ? NextBundleAnalyzer() : (x) => x;

/** @type {import('next').NextConfig} */
const nextConfig = {
  // Visiting `/` redirects by Accept-Language (falling back to English) unless the NEXT_LOCALE
  // cookie, set by the language toggle, records an explicit choice. Traditional Chinese lives at `/zh-TW`.
  i18n: { defaultLocale: 'en', locales: ['en', 'zh-TW'] },
  reactStrictMode: true,
  swcMinify: true,
};

export default withBundleAnalyzer(nextConfig);
