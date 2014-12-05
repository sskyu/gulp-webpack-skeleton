var path = require('path');

var dest = './build';
var src = './src';
var relativeSrcPath = path.relative('.', src);

module.exports = {

  dest: dest,

  js: {
    src: src + '/js/**',
    dest: dest + '/js',
    uglify: false
  },

  webpack: {
    entry: src + '/js/app.js',
    output: {
      filename: 'bundle.js'
    },
    resolve: {
      extensions: ['', '.js']
    }
  },

  copy: {
    src: [
      src + '/www/index.html'
    ],
    dest: dest
  },

  stylus: {
    src: [
      src + '/styl/**/!(_)*'
    ],
    dest: dest + '/css/',
    output: 'app.css',
    autoprefixer: {
      browsers: ['last 2 versions']
    },
    minify: false
  },

  watch: {
    js: relativeSrcPath + '/js/**',
    styl: relativeSrcPath + '/styl/**',
    www: relativeSrcPath + '/www/index.html'
  }
};