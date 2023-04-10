module.exports = {
  presets: [
    '@vue/babel-preset-jsx'
  ],
  plugins: [
    [
      'import',
      {
        libraryName: 'element-ui',
        // libraryDirectory: 'es',
        style: true
      }
    ],
    [
      'component',
      {
        libraryName: 'element-ui',
        styleLibraryName: 'theme-chalk'
      }
    ]
  ]
}
