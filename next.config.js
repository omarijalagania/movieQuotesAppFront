const { i18n } = require('./next-i18next.config');

const nextConfig = {
  webpack: (config, { isServer }) => {
    if (!isServer) {
      config.resolve.fallback = {
        fs: false,
      };
    }

    return config;
  },

  reactStrictMode: true,
  i18n,
  images: {
    domains: [
      'localhost',
      'movie-quotes.omar.redberryinternship.ge',
      'movie-quotes-api.omar.redberryinternship.ge',
    ],
  },
};

module.exports = nextConfig;
