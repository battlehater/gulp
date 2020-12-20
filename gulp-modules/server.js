import config from './config.js';
import browserSync from 'browser-sync';

export const server = browserSync.create();

export default (cb) => {
    
    server.init({
        server: config.browserSync
    });

    return cb()
}
