const withAssetsImport = require("next-assets-import");
module.exports = withAssetsImport({
  urlLoaderOptions: {
    rules: [
      {
        test: /\.(png|jpg|gif|mp4)$/i,
        use: [
          {
            loader: "url-loader",
            options: {
              limit: 8192,
            },
          },
        ],
      },
    ],
  },
});
