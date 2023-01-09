/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env:{
    NEXT_CLIENT_SECRET:process.env.NEXT_CLIENT_SECRET,
    NEXT_CLIENT_ID:process.env.NEXT_CLIENT_ID,
    NEXT_JWT_SECRET:process.env.NEXT_JWT_SECRET,
    NEXTAUTH_URL:process.env.NEXTAUTH_URL
  }
}

module.exports = nextConfig
