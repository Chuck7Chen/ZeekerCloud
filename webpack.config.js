// Learn more on how to config.
// - https://github.com/ant-tool/atool-build#配置扩展

// const ImageminWebpWebpackPlugin = require('imagemin-webp-webpack-plugin');

module.exports = function (webpackConfig) {
  webpackConfig.babel.plugins.push('transform-runtime');
  webpackConfig.babel.plugins.push(['import', {
    libraryName: 'antd',
    style: 'css',
  }]);
  // webpackConfig.plugins.push(new ImageminWebpWebpackPlugin({
  //   config: [{
  //     test: /\.(jpe?g|png)$/i, // 匹配 JPEG 和 PNG 文件
  //     options: {
  //       quality: 80, // 设置图片质量
  //     },
  //   }],
  //   verbose: true, // 是否打印详细日志
  // }));

  return webpackConfig;
};
