import config from './config.js';
import gulp from 'gulp';
import sass from 'gulp-sass';
import autoprefixer from 'gulp-autoprefixer';
import gulpIf from 'gulp-if';
import groupMedia from 'gulp-group-css-media-queries';
import { server } from './server.js'; 

export default () => 
    gulp.src(config.path.src.sass, { sourcemaps: config.env === 'dev' })
        .pipe(sass(config.sass).on('error', sass.logError))
        .pipe(gulpIf(config[config.env].css.setPrefixes, autoprefixer()))
        .pipe(gulpIf(config[config.env].css.groupMedia, groupMedia()))
        .pipe(gulp.dest(config.path[config.envFolder].css, {sourcemaps: '.'}))
        .pipe(server.stream())
