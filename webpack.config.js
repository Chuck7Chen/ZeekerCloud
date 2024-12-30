// Learn more on how to config.
// - https://github.com/ant-tool/atool-build#配置扩展

const ImageminWebpWebpackPlugin = require('imagemin-webp-webpack-plugin');

module.exports = function(webpackConfig) {
  webpackConfig.babel.plugins.push('transform-runtime');
  webpackConfig.babel.plugins.push(['import', {
    libraryName: 'antd',
    style: 'css',
  }]);
  webpackConfig.plugins.push(new ImageminWebpWebpackPlugin({
    config: [
      {
        test: /\.(jpe?g|png)/,
        options: {
          quality: 75
        }
      }
    ],
    outputName: '[path][name].[ext]', // 确保定义了 outputName
    overrideExtension: true,
    detailedLogs: false,
    silent: true,
    strict: true
  }));

  return webpackConfig;
};
