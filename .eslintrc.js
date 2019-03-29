module.exports = {
  root: true,
  'extends': [
    'plugin:vue/essential',
    '@vue/standard'
  ],
  rules: {
    // allow async-await
    'generator-star-spacing': 'off',
    // allow debugger during development
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'vue/no-parsing-error': [2, {
      'x-invalid-end-tag': false
    }],
    'no-undef': 'off',
    'camelcase': 'off',
    "indent": ["error", 4, { "SwitchCase": 1 }],
    "quotes": [2, "single"],
    "semi": ["error", "always"],
    "no-unused-vars": 2,
  },
  parserOptions: {
    parser: 'babel-eslint'
  }
}
