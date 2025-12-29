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

router.get('/', async (req, res) => {
  try {
    const portfolios = await query('SELECT * FROM portfolios');
    return res.status(200).json({ data: portfolios, status: 200 });
  } catch (error) {
    return res.status(500).json({ message: 'خطا در برقراری ارتباط با سرور', status: 500, error });
  }
});

// Toggle like/dislike the portfolios
router.post('/:id/toggle-like', async (req, res) => {
  const { id } = req.params;
  const { status } = req.body;

  if (id && status) {
    // Determine increment/decrement
    const increment = status === 'like' ? 1 : -1;

    // Update likes safely, prevent negative values
    await query(
      `UPDATE \`vortex-web-team\`.\`portfolios\` 
       SET like_counts = GREATEST(like_counts + ?, 0)
       WHERE id = ?`,
      [increment, id]
    );

    // Get the updated like count
    const [rows] = await query(`SELECT like_counts FROM \`vortex-web-team\`.\`portfolios\` WHERE id = ?`, [id]);

    const statusMessage = status === 'like' ? 'پست با موفقیت لایک شد' : 'پست با موفقیت دیس لایک شد';

    return res.status(200).json({ message: statusMessage, status: 200, like_counts: rows[0]?.like_counts });
  } else {
    return res.status(500).json({ message: 'خطا در برقراری ارتباط با سرور', status: 500 });
  }
});

module.exports = router;
