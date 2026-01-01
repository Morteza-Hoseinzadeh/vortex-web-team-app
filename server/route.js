const express = require('express');
const router = express.Router();

const blogsRoute = require('./api/blog/route');
const portfoliosRoute = require('./api/portfolios/route');
const contactRoute = require('./api/contact/route');

// NOTE: /api/blog/...
router.use('/blogs', blogsRoute);

// NOTE: /api/portfolios/...
router.use('/portfolios', portfoliosRoute);

// NOTE: /api/contact/...
router.use('/contact', contactRoute);

module.exports = router;
