import config from './config.js';
import gulp from 'gulp';
import { buildHtml, buildCss, buildJs, buildSvgIcons, buildImages } from '../gulpfile.js';

export default (cb) => {
    gulp.watch(config.path.watch.pug, buildHtml);
    gulp.watch(config.path.watch.sass, buildCss);
    gulp.watch(config.path.watch.js, buildJs);
    gulp.watch(config.path.watch.icons, buildSvgIcons);
    gulp.watch(config.path.watch.images, buildImages);
    return cb();
}
