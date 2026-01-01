const express = require('express');
const router = express.Router();

const connection = require('../../models/dbConnection');

// Helper function for database queries
const query = async (sql, params = []) => {
  try {
    const [results] = await connection.promise().query(sql, params);
    return results;
  } catch (error) {
    console.error('Database query error:', error);
    throw error;
  }
};

// GET all blog posts
router.get('/', async (req, res) => {
  try {
    const blogs = await query('SELECT * FROM blog_posts ORDER BY id DESC');
    return res.status(200).json({ data: blogs, status: 200 });
  } catch (error) {
    return res.status(500).json({ message: 'خطا در برقراری ارتباط با سرور', status: 500 });
  }
});

// GET specific blog post by ID + related posts + comments
router.get('/:postId', async (req, res) => {
  const { postId } = req.params;

  if (!postId || isNaN(postId)) {
    return res.status(400).json({ message: 'شناسه مقاله نامعتبر است', status: 400 });
  }

  try {
    // 1. Get current post
    const [currentPost] = await query('SELECT * FROM blog_posts WHERE id = ?', [postId]);

    if (!currentPost) {
      return res.status(404).json({ message: 'مقاله مورد نظر یافت نشد', status: 404 });
    }

    // 2. Get comments
    const comments = await query('SELECT * FROM blog_comments WHERE post_id = ? ORDER BY id DESC', [postId]);

    // 3. Get related posts (same category, exclude current)
    const relatedPosts = await query(
      `SELECT *
       FROM blog_posts 
       WHERE category = ? AND id != ? 
       ORDER BY id DESC 
       LIMIT 3`,
      [currentPost.category, postId]
    );

    // Format read_time for related posts (if it's a number)
    const formattedRelated = relatedPosts.map((post) => ({ ...post, read_time: post.read_time ? `${post.read_time} دقیقه` : 'چند دقیقه' }));

    // Final response
    return res.status(200).json({ data: { post: currentPost, comments: comments, related_posts: formattedRelated }, status: 200 });
  } catch (error) {
    console.error('Error fetching blog post:', error);
    return res.status(500).json({ message: 'خطا در برقراری ارتباط با سرور', status: 500 });
  }
});

// GET comments of a specific blog post (keep this for backward compatibility)
router.get('/:postId/comments', async (req, res) => {
  try {
    const { postId } = req.params;

    const comments = await query('SELECT * FROM blog_comments WHERE post_id = ? ORDER BY id DESC', [postId]);

    return res.status(200).json({ data: comments, status: 200 });
  } catch (error) {
    return res.status(500).json({ message: 'خطا در برقراری ارتباط با سرور', status: 500 });
  }
});

// Create blog route (placeholder)
router.post('/create-blog', async (req, res) => {
  try {
    // Implement later
    res.status(201).json({ message: 'مقاله با موفقیت ایجاد شد' });
  } catch (error) {
    res.status(500).json({ message: 'خطا در ایجاد مقاله' });
  }
});

module.exports = router;
