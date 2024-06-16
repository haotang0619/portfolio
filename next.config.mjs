import NextBundleAnalyzer from '@next/bundle-analyzer';

// Analyze bundles on local build
const withBundleAnalyzer = process.env.ANALYZE === 'true' ? NextBundleAnalyzer() : (x) => x;

/** @type {import('next').NextConfig} */
const nextConfig = { reactStrictMode: true, swcMinify: true };

export default withBundleAnalyzer(nextConfig);
