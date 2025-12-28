require('dotenv').config();
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const next = require('next');

const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();

const PORT = process.env.PORT || 3000;

app
  .prepare()
  .then(() => {
    const server = express();

    // --- Middleware ---
    server.use(cors({ origin: true, credentials: true }));
    server.use(bodyParser.json());
    server.use(bodyParser.urlencoded({ extended: true }));

    // --- API Routes ---
    server.use('/api', require('./server/route'));

    // --- Custom Next.js Routes ---
    const routes = ['/', '/about', '/blog', '/portfolio', '/pricing', '/support'];

    routes.forEach((route) => {
      server.get(route, (req, res) => {
        return app.render(req, res, route, req.query);
      });
    });

    // Dynamic blog route
    server.get('/blog/:category/:title', (req, res) => {
      const { category, title } = req.params;
      return app.render(req, res, '/blog/[category]/[title]', { category, title });
    });

    // --- Fallback for everything else ---
    server.all('*', (req, res) => handle(req, res));

    // --- Start the server ---
    server.listen(PORT, (err) => {
      if (err) throw err;
      console.log(`🚀 Server running on http://localhost:${PORT}`);
    });
  })
  .catch((err) => {
    console.error('❌ Next.js preparation failed:', err);
    process.exit(1);
  });
