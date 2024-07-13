require('dotenv').config()
const chokidar = require('chokidar');
const server = import('./index.mjs');
const express = require('express');
let app = express();

server.then(async (data) => {
    data.modules(app).then(({app})=> {
        const port = 4732

        app.listen(port, () => {
            console.log('pid: ', process.pid);
            console.log('listening on http://localhost:' + port);
        });

        process.on('SIGINT', function () {
            Stream.emit("push", "message", {
                type: 'dev',
                msg: 'close'
            });
            process.exit(0);
        });
    }).catch(e => console.error(e));
});
