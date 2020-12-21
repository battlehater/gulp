import gulp from 'gulp'; 
import config from './config';
import { server } from './server.js';

export default () => 
    gulp.src(config.path.src.fonts)
        .pipe(gulp.dest(config.path[config.env].fonts))
        .pipe(server.stream())
