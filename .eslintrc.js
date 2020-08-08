const os = require('os');

module.exports = {
  parser: '@typescript-eslint/parser',
  extends: [
    'airbnb-typescript/base'
  ],
  parserOptions: {
    project: './tsconfig.json',
  },
  rules: {
    'linebreak-style': ['error', os.platform() === 'win32' && 'windows' || 'unix'],
    'no-continue': 'off',
  },
};
