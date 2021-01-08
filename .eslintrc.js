module.exports = {
  root: true,
  env: {
    node: true
  },
  extends: [
    'plugin:vue/essential',
    '@vue/standard',
    '@vue/typescript'
  ],
  rules: {
    'no-debugger': 'error',
    'no-use-before-define': 'off'
  },
  parserOptions: {
    parser: '@typescript-eslint/parser'
  },
  ignorePatterns: [
    'vueTransformerPlugin.js',
    'src/support/sjcl.js'
  ],
  overrides: [
    {
      files: [
        '**/__tests__/*.{j,t}s?(x)'
      ],
      env: {
        mocha: true
      }
    }
  ]
}
