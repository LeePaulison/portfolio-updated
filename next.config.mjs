import mdx from '@next/mdx';

const withMDX = mdx();

/** @type {import('next').NextConfig} */
const nextConfig = withMDX({
  pageExtensions: ['js', 'jsx', 'mdx'],
});

export default nextConfig;
