module.exports = {
  presets: [
    'module:metro-react-native-babel-preset'
  ],
  plugins: [
    [
      'babel-plugin-root-import',
      {
        rootPathSuffix: './src',
        rootPathPrefix: '@/'
      }
    ],
    [
      'module:react-native-dotenv', {
        moduleName: '@env',
        path: '.env',
        safe: false,
        allowUndefined: true
      }
    ]
  ]
}
