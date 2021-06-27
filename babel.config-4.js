module.exports = {
  presets: [
    [
      '@babel/preset-env',
      {
        debug: true,
        corejs: {
          // polyfill 非标准的api（草案阶段的api）
          proposals: true,
          // 指定core-js版本，建议指定到次要版本（如下版本的意思是主要版本是3，次要版本是15）
          version: 3.15
        },
        // 全量引入
        useBuiltIns: 'entry',
        // 指定兼容的浏览器版本 优先使用targets字段 如果没有就读取.browserslistrc文件或者package.json文件里的browserslist字段（后二者不可同时配置）
        targets: 'IE 9'
      }
    ]
  ]
}