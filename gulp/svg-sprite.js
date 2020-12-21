import config from './config.js';
import gulp from 'gulp';
import svgSprite from 'gulp-svg-sprite';
import svgo from 'gulp-svgo';
import { server } from './server.js';

export default () => 
    gulp.src(config.path.src.icons)
        .pipe(svgo())
        .pipe(svgSprite(config.svgSprite))
        .pipe(gulp.dest(config.path[config.env].icons))
        .pipe(server.stream())
