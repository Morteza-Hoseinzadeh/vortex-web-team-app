const express = require('express');
const router = express.Router();

const blogsRoute = require('./api/blog/route');
const portfoliosRoute = require('./api/portfolios/route');

// NOTE: /api/blog/...
router.use('/blogs', blogsRoute);

// NOTE: /api/portfolios/...
router.use('/portfolios', portfoliosRoute);

module.exports = router;
