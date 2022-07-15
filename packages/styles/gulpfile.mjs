import dartSass from 'sass';
import gulpSass from 'gulp-sass';
import gulp from 'gulp';
import sourcemaps from 'gulp-sourcemaps';
import rename from 'gulp-rename';

const sassPlugin = gulpSass(dartSass);

export function sass() {
  return gulp.src('./src/index.sass')
    .pipe(sourcemaps.init())
    .pipe(sassPlugin({outputStyle: 'compressed'}).on('error', sassPlugin.logError))
    .pipe(sourcemaps.write())
    .pipe(rename(`iridium.css`))
    .pipe(gulp.dest('./dist'));
}

export function watchSass(cb) {
  gulp.watch('./src/**/*.sass', sass);
  cb();
}

export function watch(cb) {
  gulp.parallel(watchSass);
  cb();
}

export default function defaultTask(cb) {
  gulp.parallel(sass);
  cb();
};