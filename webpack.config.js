const path = require('path');

module.exports = {
  entry: ['./src/main.js', './src/gamepad.js', './src/keyboard.js'],
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'main.js',
  },
};