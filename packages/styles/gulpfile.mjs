import dartSass from 'sass';
import gulpSass from 'gulp-sass';
import gulp from 'gulp';
import sourcemaps from 'gulp-sourcemaps';
import rename from 'gulp-rename';

const sassPlugin = gulpSass(dartSass);

export function sass() {
  return gulp.src('./src/index.scss')
    .pipe(sourcemaps.init())
    .pipe(sassPlugin({outputStyle: 'compressed'}).on('error', sassPlugin.logError))
    .pipe(sourcemaps.write())
    .pipe(rename(`iridium.css`))
    .pipe(gulp.dest('./dist'));
}

function defaultTask(cb) {
  gulp.parallel(sass);
  cb();
}

export default defaultTask;