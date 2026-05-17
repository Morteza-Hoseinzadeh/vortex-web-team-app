const express = require('express');
const router = express.Router();
const connection = require('../../models/dbConnection');

router.post('/submit', async (req, res) => {
  try {
    const { name, phone, email, service, message } = req.body; // Changed 'description' to 'message'

    // Validation
    if (!name || !phone || !email || !service || !message) {
      // Changed 'description' to 'message'
      return res.status(400).json({ message: 'پر کردن همه فیلدها الزامی می‌باشد', status: 400 });
    }

    // Insert into DB
    const sql = `
      INSERT INTO form_submissions
      (name, phone, email, service, message)
      VALUES (?, ?, ?, ?, ?)
    `;

    await connection.promise().query(sql, [name, phone, email, service, message]);

    return res.status(201).json({ message: 'درخواست شما با موفقیت ثبت شد', status: 201 });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: error, status: 500 });
  }
});

router.get('/', async (req, res) => {
  try {
    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 10;
    const offset = (page - 1) * limit;

    const dataSql = `
      SELECT *
      FROM form_submissions
      ORDER BY created_at DESC
      LIMIT ? OFFSET ?
    `;

    const countSql = `SELECT COUNT(*) as total FROM form_submissions`;

    const [messages] = await connection.promise().query(dataSql, [limit, offset]);
    const [[{ total }]] = await connection.promise().query(countSql);

    return res.status(200).json({
      status: 200,
      data: messages,
      pagination: { page, limit, total, total_pages: Math.ceil(total / limit) },
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: 'خطا در دریافت پیام‌ها', status: 500 });
  }
});

router.get('/:id', async (req, res) => {
  try {
    const { id } = req.params;

    if (!id || isNaN(id)) {
      return res.status(400).json({ message: 'شناسه نامعتبر است', status: 400 });
    }

    const sql = `
      SELECT id, name, phone, email, service, message, created_at, updated_at, status
      FROM form_submissions
      WHERE id = ?
      LIMIT 1
    `;

    const [result] = await connection.promise().query(sql, [id]);

    if (!result.length) {
      return res.status(404).json({ message: 'پیامی یافت نشد', status: 404 });
    }

    return res.status(200).json({ status: 200, data: result[0] });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: 'خطا در دریافت پیام', status: 500 });
  }
});

// Optional: Add PUT route to update status
router.put('/:id/status', async (req, res) => {
  try {
    const { id } = req.params;
    const { status } = req.body;

    if (!id || isNaN(id)) {
      return res.status(400).json({ message: 'شناسه نامعتبر است', status: 400 });
    }

    const validStatuses = ['new', 'read', 'replied', 'archived'];
    if (!validStatuses.includes(status)) {
      return res.status(400).json({ message: 'وضعیت نامعتبر است', status: 400 });
    }

    const sql = `
      UPDATE form_submissions 
      SET status = ?
      WHERE id = ?
    `;

    const [result] = await connection.promise().query(sql, [status, id]);

    if (result.affectedRows === 0) {
      return res.status(404).json({ message: 'پیامی یافت نشد', status: 404 });
    }

    return res.status(200).json({ message: 'وضعیت با موفقیت به‌روزرسانی شد', status: 200 });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: 'خطا در به‌روزرسانی وضعیت', status: 500 });
  }
});

// Optional: Add DELETE route
router.delete('/:id', async (req, res) => {
  try {
    const { id } = req.params;

    if (!id || isNaN(id)) {
      return res.status(400).json({ message: 'شناسه نامعتبر است', status: 400 });
    }

    const sql = `DELETE FROM form_submissions WHERE id = ?`;
    const [result] = await connection.promise().query(sql, [id]);

    if (result.affectedRows === 0) {
      return res.status(404).json({ message: 'پیامی یافت نشد', status: 404 });
    }

    return res.status(200).json({ message: 'پیام با موفقیت حذف شد', status: 200 });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: 'خطا در حذف پیام', status: 500 });
  }
});

module.exports = router;
