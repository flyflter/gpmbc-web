module.exports = {
  'lib/**/*.{less,css,md,html}': ['prettier --write'],
  'lib/**/*.{js,jsx}': ['prettier --write', 'yarn lint:js'],
  'lib/**/*.{ts,tsx}': ['prettier --write', 'yarn lint:ts'],
}