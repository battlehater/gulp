import parceArgs from 'minimist';
const env =  parceArgs(process.argv.slice(2)).env || 'dev';

const SRC_ROOT = './src/';
const DEV_ROOT = './dev/';
const DIST_ROOT = './dist/';

const PUG_PATH = 'pug/';
const SASS_PATH = 'sass/';
const SVG_ICONS_PATH = 'icons/**/*.svg';
const IMG_PATH = 'img/';
const JS_PATH = 'js/';
const CSS_PATH = 'css/';
const FONTS_PATH = 'fonts/';

export default {
    env: env, // Переменная, определяющее окружение - env или dist
    envFolder: env === 'prod' ? 'dist' : 'dev', // папка, в зависимости, от окружения
    // Настройки для каждого из окружений и каждого из компонентов сборки
    dev: {
        html: {
            beautify: true, // Форматировать документ или нет (возможные значения: true | false)
        },
        css: {
            setPrefixes: true, // Применить Автопрефиксер (возможные значения: true | false)
            groupMediaQueries: false, // Сгруппировать все медиазапросы, по умолчанию отключено, изменяет порядок каскада свойств и может навредить. Так же может повлиять на точность sourcemaps.
        },
        js: {
            sourcemap: true, // sourcemaps для js
            minify: false, // Минифицировать скрипты
        }
    },
    prod: {
        html: {
            beautify: true, // Форматировать документ или нет (возможные значения: true | false)
        },
        css: {
            setPrefixes: true, // Применить Автопрефиксер (возможные значения: true | false)
            groupMediaQueries: false, // Сгруппировать все медиазапросы, по умолчанию отключено, изменяет порядок каскада свойств и может навредить. Так же может повлиять на точность sourcemaps.
        },
        js: {
            sourcemap: false, // sourcemaps для js
            minify: true, // Минифицировать скрипты
        }
    },
    // Пути к папкам и файлам
    path: {
        src: {
            root: SRC_ROOT,
            pug: SRC_ROOT + PUG_PATH + '*.pug',
            sass: SRC_ROOT + SASS_PATH + '**/*.+(sass|scss)',
            js: SRC_ROOT + JS_PATH + '*.js',
            icons: SRC_ROOT + SVG_ICONS_PATH,
            images: SRC_ROOT + IMG_PATH + '**/*',
            fonts: SRC_ROOT + FONTS_PATH + '**/*'
        },
        dev: {
            root: DEV_ROOT,
            html: DEV_ROOT,
            css: DEV_ROOT + CSS_PATH,
            js: DEV_ROOT + JS_PATH,
            icons: DEV_ROOT + IMG_PATH,
            images: DEV_ROOT + IMG_PATH,
            fonts: DEV_ROOT + FONTS_PATH
        },
        dist: {
            root: DIST_ROOT,
            html: DIST_ROOT,
            css: DIST_ROOT + CSS_PATH,
            js: DIST_ROOT + JS_PATH,
            icons: DIST_ROOT + IMG_PATH,
            images: DIST_ROOT + IMG_PATH,
            fonts: DIST_ROOT + FONTS_PATH
        },
        watch: {
            pug: SRC_ROOT + PUG_PATH + '**/*.pug',
            sass: SRC_ROOT + SASS_PATH + '**/*',
            js: SRC_ROOT + JS_PATH + '**/*.js',
            icons: SRC_ROOT + SVG_ICONS_PATH,
            images: SRC_ROOT + IMG_PATH + '**/*',
            fonts: SRC_ROOT + FONTS_PATH + '**/*'
        }
    },
    // Настройки для модулей
    browserSync: {
        baseDir: DEV_ROOT,
    },
    pug: {},
    beautify: {
        html: { indent_size: 4 }
    },
    sass: {
        // includePaths: [],
        outputStyle: env === 'dev' ? 'expanded' : 'compressed',
    },
    svgSprite: {
        mode: {
            symbol: {
                dest: './',
                sprite: 'icons.svg',
            },
            inline: true,
        }
    },
    imagemin: {
        gifsicle: { interlaced: true },
        mozjpeg: { quality: 75, progressive: true },
        optipng: { optimizationLevel: 5,  },
        svgo: {},
        imageminCommon: {},
    }
}
