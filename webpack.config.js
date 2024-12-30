// Learn more on how to config.
// - https://github.com/ant-tool/atool-build#配置扩展

// const ImageminWebpWebpackPlugin = require('imagemin-webp-webpack-plugin');

module.exports = function (webpackConfig) {
  webpackConfig.babel.plugins.push('transform-runtime');
  webpackConfig.babel.plugins.push(['import', {
    libraryName: 'antd',
    style: 'css',
  }]);
  webpackConfig.module.loaders.push({
    test: /\.(png|jpe?g|gif|svg|webp)(\?.*)?$/,
    loader: 'file-loader',
    query: {
      name: '[name].[hash:7].[ext]', // 文件名
      outputPath: 'public/images/', // 输出路径
      publicPath: '/public/images/', // 公共路径
    },
  });

  return webpackConfig;
};
