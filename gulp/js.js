import config from './config.js';
import gulp from 'gulp';
import {server} from './server.js';
import rollup from 'gulp-better-rollup';
import babel from 'rollup-plugin-babel';
import {terser} from 'rollup-plugin-terser';
import commonJs from '@rollup/plugin-commonjs';
import resolve from '@rollup/plugin-node-resolve';

const plugins = [babel(), resolve(), commonJs()];

if (config[config.env].js.minify) {
    plugins.push(terser())
}

export default () => 
    gulp.src(config.path.src.js, { sourcemaps: config[config.env].js.sourcemap })
        .pipe(rollup({ plugins }, { format: "iife" }))
        .pipe(gulp.dest(config.path[config.envFolder].js, { sourcemaps: '.' }))
        .pipe(server.stream())
