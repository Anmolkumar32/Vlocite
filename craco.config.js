module.exports = {
    webpack: {
      configure: (config) => {
        config.resolve.fallback = {
          "http": require.resolve("stream-http"),
          "https": require.resolve("https-browserify"),
          "stream": require.resolve("stream-browserify"),
          "assert": require.resolve("assert/"),
          "url": require.resolve("url/"),
          "util": require.resolve("util/"),
          "zlib": require.resolve("browserify-zlib")
        };
        return config;
      }
    }
  };
  