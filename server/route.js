const express = require('express');
const router = express.Router();

const blogsRoute = require('./api/blog/route');

// NOTE: /api/blog/...
router.use('/blog', blogsRoute);

module.exports = router;
