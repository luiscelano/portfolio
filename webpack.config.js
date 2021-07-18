var path = require("path");

module.exports = {
  mode: "production",
  entry: "./index.js",
  output: {
    path: path.resolve("build"),
    filename: "index.js",
    libraryTarget: "commonjs2"
  },
  module: {
    rules: [
      { test: /\.js$/, exclude: /node_modules/, loader: "babel-loader" },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      }
    ]
  },
  resolve: {
      fallback: { "http": require.resolve("stream-http"),
                  "path": require.resolve("path-browserify"),
                  "stream": require.resolve("stream-browserify"),
                  "util": require.resolve("util/"),
                  "url": require.resolve("url/"),
                  "buffer": require.resolve("buffer/") },

  }
};