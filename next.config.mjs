/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "img.clerk.com"
      }
    ]
  },
  swcMinify: false,
  i18n: {
    locales: ['en', 'th'],
    defaultLocale: 'en',
    localeDetection: false
  }
};

export default nextConfig;