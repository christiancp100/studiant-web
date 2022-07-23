module.exports = {
  reactStrictMode: true,
  env: {
    backendUrl: process.env.API_URL || 'http://localhost:1337',
  },
  images: {
    deviceSizes: [320, 420, 768, 1024, 1200],
    loader: 'default',
    domains: [process.env.IMAGES_URL || 'localhost'],
  },
  experimental: {
    outputStandalone: true,
  },
  output: 'standalone',
};
