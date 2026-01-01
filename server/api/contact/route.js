const express = require('express');
const router = express.Router();
const connection = require('../../models/dbConnection');

router.post('/submit', async (req, res) => {
  try {
    const { full_name, phone, email, service, description } = req.body;

    // Validation
    if (!full_name || !phone || !email || !service || !description) {
      return res.status(400).json({ message: 'پر کردن همه فیلدها الزامی می‌باشد', status: 400 });
    }

    // Insert into DB
    const sql = `
      INSERT INTO contact_form
      (full_name, phone, email, service, description)
      VALUES (?, ?, ?, ?, ?)
    `;

    await connection.promise().query(sql, [full_name, phone, email, service, description]);

    return res.status(201).json({ message: 'درخواست شما با موفقیت ثبت شد', status: 201 });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: 'خطا در ثبت اطلاعات', status: 500 });
  }
});

router.get('/', async (req, res) => {
  try {
    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 10;
    const offset = (page - 1) * limit;

    const dataSql = `
      SELECT id, full_name, phone, email, service, description, created_at
      FROM contact_form
      ORDER BY created_at DESC
      LIMIT ? OFFSET ?
    `;

    const countSql = `SELECT COUNT(*) as total FROM contact_form`;

    const [messages] = await connection.promise().query(dataSql, [limit, offset]);
    const [[{ total }]] = await connection.promise().query(countSql);

    return res.status(200).json({ status: 200, data: messages, pagination: { page, limit, total, total_pages: Math.ceil(total / limit) } });
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
      SELECT id, full_name, phone, email, service, description, created_at
      FROM contact_form
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

module.exports = router;
