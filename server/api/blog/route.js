const express = require('express');
const router = express.Router();

const connection = require('../../models/dbConnection');

// Helper function for database queries
const query = async (sql, params) => {
  try {
    const [results] = await connection.promise().query(sql, params);
    return results;
  } catch (error) {
    console.error('Database query error:', error);
    throw error;
  }
};

// GET all blogs posts
router.get('/', async (req, res) => {
  try {
    const blogs = await query('SELECT * FROM blog_posts');
    return res.status(200).json({ data: blogs, status: 200 });
  } catch (error) {
    return res.status(500).json({ message: 'خطا در برقراری ارتباط با سرور', status: 500, error });
  }
});

// Create blog route
router.post('/create-blog', async (req, res) => {
  try {
  } catch (error) {}
});

// GET comments of a specific blog post
router.get('/:postId/comments', async (req, res) => {
  try {
    const { postId } = req.params;

    const comments = await query('SELECT * FROM blog_comments WHERE post_id = ? ORDER BY id DESC', [postId]);

    return res.status(200).json({ data: comments, status: 200 });
  } catch (error) {
    return res.status(500).json({ message: 'خطا در برقراری ارتباط با سرور', status: 500, error });
  }
});

module.exports = router;
