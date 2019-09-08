const express = require('express');
const fs = require('fs');
const https = require('https');
const Readable = require('stream').Readable;

const app = express();

// Certificate
const privateKey = fs.readFileSync('/etc/letsencrypt/live/stc-outage.wtf/privkey.pem', 'utf8');
const certificate = fs.readFileSync('/etc/letsencrypt/live/stc-outage.wtf/cert.pem', 'utf8');
const ca = fs.readFileSync('/etc/letsencrypt/live/stc-outage.wtf/chain.pem', 'utf8');

const credentials = {
	key: privateKey,
	cert: certificate,
	ca: ca
};

app.use(express.static('./react/build'));

app.get('/stream', (req, res) => {
    res.set('Content-Type', 'application/octet-stream');
    res.status(200);

    const stream = new Readable();
    stream._read = () => {};
    stream.pipe(res);

    const interval = setInterval(() => {
        stream.push('a');
    }, 500);

    res.on('close', () => {
        clearInterval(interval);
        stream.unpipe(res);
        stream.destroy();
    });
});

const httpsServer = https.createServer(credentials, app);

httpsServer.listen(443, () => {
	console.log('HTTPS Server running on port 443');
});