'use strict';

const { series, src, dest } = require('gulp');
const sass = require('gulp-sass');
const autoprefixer = require('gulp-autoprefixer');
const cssmin = require('gulp-cssmin');

function compileScss() {
  return src('./src/components/styles/*.scss')
    .pipe(sass.sync())
    .pipe(autoprefixer({
      cascade: false
    }))
    .pipe(cssmin())
    .pipe(dest('./dist'));
}

function copyfonts() {
  return src('./src/components/styles/fonts/**')
    .pipe(dest('./dist/fonts'));
}

exports.buildscss = series(compileScss, copyfonts);
