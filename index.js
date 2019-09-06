const express = require('express');
const fs = require('fs');
const Readable = require('stream').Readable;

const app = express();
const stream = new Readable();
stream._read = () => {};

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

    setInterval(() => {
        stream.push('   ');
    }, 1500);

    stream.pipe(res);
});

// Starting both http & https servers
const httpServer = http.createServer(app);
const httpsServer = https.createServer(credentials, app);

httpServer.listen(80, () => {
	console.log('HTTP Server running on port 80');
});

httpsServer.listen(443, () => {
	console.log('HTTPS Server running on port 443');
});