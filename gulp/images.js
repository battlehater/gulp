import gulp from 'gulp';
import config from './config.js';
import imagemin from 'gulp-imagemin';
import { server } from './server.js';

export default () =>
    gulp.src(config.path.src.images)
        .pipe(imagemin([
            imagemin.gifsicle(config.imagemin.gifsicle),
            imagemin.mozjpeg(config.imagemin.mozjpeg),
            imagemin.optipng(config.imagemin.optipng),
            imagemin.svgo(config.imagemin.svgo)
        ], config.imagemin.imageminCommon))
        .pipe(gulp.dest(config.path[config.env].images))
        .pipe(server.stream())
