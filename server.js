const express = require('express');
const next = require('next');

const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();

app.prepare().then(() => {
    const server = express();

    // Obsługa routingu
    server.get('/', (req, res) => app.render(req, res, '/', req.query));
    server.get('/about', (req, res) => app.render(req, res, '/about', req.query));
    server.get('/offer', (req, res) => app.render(req, res, '/offer', req.query));
    server.get('/priceList', (req, res) => app.render(req, res, '/priceList', req.query));
    server.get('/sale', (req, res) => app.render(req, res, '/sale', req.query));
    server.get('/contact', (req, res) => app.render(req, res, '/contact', req.query));

    // Obsługa pozostałych ścieżek
    server.get('*', (req, res) => handle(req, res));

    // Start serwera na porcie 3000
    server.listen(8080, (err) => {
        if (err) throw err;
        console.log('> Ready on http://localhost:8080');
    });
});