const express = require('express');
const Readable = require('stream').Readable;

const app = express();
const stream = new Readable();
stream._read = () => {};

app.use(express.static('./react/build'));

app.get('/stream', (req, res) => {
    res.set('Content-Type', 'application/octet-stream');
    res.status(200);

    setInterval(() => {
        stream.push('f');
    }, 100);

    stream.pipe(res);
});

app.listen(80);