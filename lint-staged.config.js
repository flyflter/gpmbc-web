module.exports = {
  'packages/**/*.{less,css,md,html}': ['prettier --write'],
  'packages/**/*.{js,jsx}': ['prettier --write', 'yarn lint:js'],
  'packages/**/*.{ts,tsx}': ['prettier --write', 'yarn lint:ts'],
};