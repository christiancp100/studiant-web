module.exports = {
  reactStrictMode: true,
  env: {
    backendUrl: process.env.API_URL || 'http://localhost:1337',
  },
  images: {
    loader: 'default',
    domains: [process.env.IMAGES_URL || 'localhost'],
  },
  experimental: {
    outputStandalone: true,
  },
  output: 'standalone',
};
