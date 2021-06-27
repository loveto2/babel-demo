module.exports = {
  presets: [
    '@babel/preset-env'
  ],
  plugins: [
    [
      '@babel/plugin-transform-runtime',
      {
        corejs: {
          proposals: true,
          version: 3
        }
      }
    ]
  ]
}