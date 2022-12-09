/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['fqgiwjnywbpxoliwncof.supabase.co'],
  },
  experimental:{
    appDir:true
  }
}

module.exports = nextConfig
