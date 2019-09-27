module.exports = {
  jsxBracketSameLine: false,
  bracketSpacing: true,
  semi: true,
  singleQuote: true,
  printWidth: 140,
  tabWidth: 2,
  parser: 'typescript',
  trailingComma: 'all',
  overrides: [{
      files: '*.json',
      options: {
        parser: 'json'
      }
    },
    {
      files: '*.{ts,tsx}',
      options: {
        parser: 'typescript'
      }
    }
  ]
};