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

module.exports = router;
