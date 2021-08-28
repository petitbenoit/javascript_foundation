const path = require('path');

module.exports = {
  entry: './main.js', // entry file
  output: {
      // build output
    path: path.resolve(__dirname, 'dist'), // dist, build
    filename: 'main.bundle.js', // o/p file name
  },
  mode: "production" //  development
};

// npm run script-name
// npm run build

// ES6 and 7 explained