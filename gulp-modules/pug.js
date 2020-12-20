import config from './config.js';
import gulp from 'gulp';
import pug from 'gulp-pug';
import plumberNotifier from 'gulp-plumber-notifier';
import beautify from 'gulp-beautify';
import gulpIf from 'gulp-if'; 
import { server } from './server.js'; 

export default () => 
    gulp.src(config.path.src.pug)
        .pipe(plumberNotifier())
        .pipe(pug(config.pug))
        .pipe(gulpIf(config[config.env].html.beautify, beautify.html(config.beautify.html)))
        .pipe(gulp.dest(config.path[config.envFolder].html))
        .pipe(server.stream())
