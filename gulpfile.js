import startServer from './gulp/server.js';
import buildHtml from './gulp/pug.js';
import buildCss from './gulp/sass.js';
import buildJs from './gulp/js.js';
import buildSvgIcons from './gulp/svg-sprite.js';
import buildImages from './gulp/images.js';
import buildFonts from './gulp/fonts.js';
import watch from './gulp/watch.js';

export { startServer, buildHtml, buildCss, buildJs, buildSvgIcons, buildImages, buildFonts, watch };
