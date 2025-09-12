/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    turbo: {
      // Enable Turbo Pack for faster builds and development
      rules: {
        '*.svg': {
          loaders: ['@svgr/webpack'],
          as: '*.js',
        },
      },
    },
  },
}

export default nextConfig
