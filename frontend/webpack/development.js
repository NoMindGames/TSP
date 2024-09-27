module.exports = function (path, dir) {
  return {
    devtool: 'inline-source-map',
    devServer: {
      static: {
        directory: path.join(dir, 'public'),
      },
      historyApiFallback: true,
      open: true,
      hot: true,
    },
  };
};
