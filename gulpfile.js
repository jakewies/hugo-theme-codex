var gulp = require("gulp");
var babel = require("gulp-babel");
var stylus = require("gulp-stylus");
var sourcemaps = require("gulp-sourcemaps");
var autoprefixer = require("gulp-autoprefixer");
var gulpIf = require("gulp-if");
var gutil = require("gulp-util");

const isDev = () => gutil.env.env === "dev";

gulp.task("styles", function () {
  return gulp
    .src("src/styles/pages/*.styl")
    .pipe(gulpIf(isDev(), sourcemaps.init()))
    .pipe(
      stylus({
        compress: true,
      })
    )
    .pipe(autoprefixer())
    .pipe(gulpIf(isDev(), sourcemaps.write()))
    .pipe(gulp.dest("static/css"));
});

gulp.task("js", function () {
  return gulp
    .src("src/js/**/*.js")
    .pipe(
      babel({
        presets: ["@babel/preset-env"],
      })
    )
    .pipe(gulp.dest("static/js"));
});

gulp.task("watch", function () {
  gulp.watch("src/styles/**/*.styl", gulp.series("styles"));
  gulp.watch("src/js/**/*.js", gulp.series("js"));
});

// The default task is run on yarn watch:assets. This will build styles and js
// before watching the src/styles and src/js directoryies
gulp.task("default", gulp.series(gulp.parallel("styles", "js"), "watch"));
// The build task is run on yarn build:assets
gulp.task("build", gulp.parallel("styles", "js"));
