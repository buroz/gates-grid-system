const gulp = require('gulp')
const autoprefixer = require('gulp-autoprefixer')
const cleanCSS = require('gulp-clean-css')
const rename = require('gulp-rename');

gulp.task('prefix', () => {
  return gulp.src('./dist/css/main.css')
    .pipe(autoprefixer({ browsers: ['last 99 versions'], cascade: false }))
    .pipe(cleanCSS())
    .pipe(rename('gates.min.css'))
    .pipe(gulp.dest('./dist/css/'))
})