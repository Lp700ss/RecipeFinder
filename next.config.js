const withImages = require('next-images');

module.exports = withImages({
  webpack: (config, { isServer }) => {
    if (!isServer) {
      // Configure image file loader
      config.module.rules.push({
        test: /\.(png|jpe?g|gif|svg)$/i,
        use: [
          {
            loader: 'file-loader',
            options: {
              publicPath: '/_next',
              name: 'static/media/[name].[hash].[ext]',
            },
          },
        ],
      });
    }
    return config;
  },
});
