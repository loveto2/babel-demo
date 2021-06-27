module.exports = {
  presets: [
    '@babel/preset-env'
  ],
  plugins: [
    [
      '@babel/plugin-transform-runtime',
      {
        corejs: {
          // 只有core-js@3.x才能开启
          // proposals: true,
          version: 2
        }
      }
    ]
  ]
}