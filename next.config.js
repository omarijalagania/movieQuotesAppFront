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
};

module.exports = nextConfig;
