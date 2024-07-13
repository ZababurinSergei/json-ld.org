import path from 'path';
import process from 'process';
import cors from 'cors';
import Enqueue from 'express-enqueue';
import compression from 'compression';
import * as dotenv from 'dotenv';
import express from 'express';

let __dirname = process.cwd();
dotenv.config();

let sse = null
export const stream = () => {
    return Stream
}
export const modules = async (app) => {
    let whitelist = []

    let corsOptions = {
        origin: function (origin, callback) {
            callback(null, true);
            // if (whitelist.indexOf(origin) !== -1) {
            //     callback(null, true);
            // } else {
            //     callback(new Error('Not allowed by CORS'));
            // }
        }
    };

    app.use((req, res, next) => {
        console.log(`request: ${req.method}: ${req.path}`);
        next();
    });

    app.use(express.json());

    const queue = new Enqueue({
        concurrentWorkers: 4,
        maxSize: 200,
        timeout: 30000
    });

    console.log('__dirname', __dirname);

    app.use(await cors({ credentials: true }));
    app.use(queue.getMiddleware());

    app.use((req, res, next) => {
        res.set('Cross-Origin-Embedder-Policy', 'require-corp');
        res.set('Cross-Origin-Opener-Policy', 'same-origin');
        next();
    });

    app.use(compression());

    app.use(express.static(`${__dirname}/docs`, {
        setHeaders: function (res, path, stat) {
            res.set('Cross-Origin-Embedder-Policy', 'require-corp');
            res.set('Cross-Origin-Opener-Policy', 'same-origin');
        }
    }));

    app.use(express.static(`${__dirname}`));
    // app.use('/docs', express.static(`${__dirname}/docs`));

    app.get(`/*`, async (req, res) => {
        // console.log('index ----- index', __dirname)
        res.status(200).sendFile(path.join(__dirname, '/dist/index.html'));
    });

    app.post(`/auth`, async (req, res) => {
        console.log('==== AUTH POST ====', req.path, req.body);
    });

    app.post(`/*`, async (req, res) => {
        console.log('==== POST ====', req.path);
    });

    app.use(queue.getErrorMiddleware());

    return {
        app: app
    }
}

export default {
    description: 'server welcomebook'
};