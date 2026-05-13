// app/dashboard/tickets/new/page.tsx
'use client';

import React, { useState } from 'react';
import { Box, Typography, Paper, TextField, Button, MenuItem, FormControl, InputLabel, Select, Alert, useTheme, IconButton } from '@mui/material';
import { FiSend, FiArrowRight } from 'react-icons/fi';
import Link from 'next/link';
import ChildrenLayout from '@/components/ChildrenLayout';

export default function NewTicketPage() {
  const theme = useTheme();
  const [formData, setFormData] = useState({ title: '', category: '', priority: 'medium', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <ChildrenLayout>
        <Box sx={{ py: 4, textAlign: 'center' }}>
          <Alert severity="success" sx={{ mb: 3, maxWidth: 500, mx: 'auto', bgcolor: 'rgba(76, 175, 80, 0.1)', color: '#4CAF50' }}>
            تیکت شما با موفقیت ثبت شد
          </Alert>
          <Typography sx={{ color: 'rgba(255,255,255,0.7)', mb: 2 }}>تیم پشتیبانی در اسرع وقت به شما پاسخ خواهد داد.</Typography>
          <Button component={Link} href="/dashboard/tickets" variant="contained" sx={{ bgcolor: theme.palette.primary.main }}>
            بازگشت به لیست تیکت‌ها
          </Button>
        </Box>
      </ChildrenLayout>
    );
  }

  return (
    <ChildrenLayout>
      <Box sx={{ p: { xs: 2, sm: 3, md: 4 }, mt: 18 }}>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 3 }}>
          <IconButton component={Link} href="/dashboard/tickets" sx={{ color: '#fff', bgcolor: 'rgba(107, 78, 255, 0.15)' }}>
            <FiArrowRight size={20} />
          </IconButton>
          <Typography variant="h4" sx={{ fontWeight: 900, color: '#fff' }}>
            تیکت جدید
          </Typography>
        </Box>

        <Paper sx={{ p: { xs: 3, sm: 4 }, maxWidth: 700, mx: 'auto', bgcolor: 'rgba(107, 78, 255, 0.05)', border: '1px solid rgba(107, 78, 255, 0.2)', borderRadius: '24px' }}>
          <form onSubmit={handleSubmit}>
            <TextField fullWidth label="موضوع" required value={formData.title} onChange={(e) => setFormData({ ...formData, title: e.target.value })} sx={{ mb: 3, '& .MuiOutlinedInput-root': { color: '#fff', '& fieldset': { borderColor: 'rgba(107, 78, 255, 0.3)' } }, '& .MuiInputLabel-root': { color: 'rgba(255,255,255,0.5)' } }} />

            <Box sx={{ display: 'flex', gap: 2, mb: 3, flexWrap: 'wrap' }}>
              <FormControl sx={{ flex: 1 }}>
                <InputLabel sx={{ color: 'rgba(255,255,255,0.5)' }}>دسته‌بندی</InputLabel>
                <Select value={formData.category} onChange={(e) => setFormData({ ...formData, category: e.target.value })} label="دسته‌بندی" required sx={{ color: '#fff', '& .MuiOutlinedInput-notchedOutline': { borderColor: 'rgba(107, 78, 255, 0.3)' } }}>
                  <MenuItem value="technical">مشکل فنی</MenuItem>
                  <MenuItem value="design">درخواست طراحی</MenuItem>
                  <MenuItem value="support">پشتیبانی</MenuItem>
                  <MenuItem value="billing">صورتحساب</MenuItem>
                </Select>
              </FormControl>

              <FormControl sx={{ flex: 1 }}>
                <InputLabel sx={{ color: 'rgba(255,255,255,0.5)' }}>اولویت</InputLabel>
                <Select value={formData.priority} onChange={(e) => setFormData({ ...formData, priority: e.target.value })} label="اولویت" sx={{ color: '#fff', '& .MuiOutlinedInput-notchedOutline': { borderColor: 'rgba(107, 78, 255, 0.3)' } }}>
                  <MenuItem value="low">پایین</MenuItem>
                  <MenuItem value="medium">متوسط</MenuItem>
                  <MenuItem value="high">بالا</MenuItem>
                </Select>
              </FormControl>
            </Box>

            <TextField fullWidth label="توضیحات" multiline rows={6} required value={formData.message} onChange={(e) => setFormData({ ...formData, message: e.target.value })} sx={{ mb: 3, '& .MuiOutlinedInput-root': { color: '#fff', '& fieldset': { borderColor: 'rgba(107, 78, 255, 0.3)' } }, '& .MuiInputLabel-root': { color: 'rgba(255,255,255,0.5)' } }} />

            <Button type="submit" fullWidth variant="contained" startIcon={<FiSend style={{ marginLeft: '8px' }} />} sx={{ bgcolor: theme.palette.primary.main, py: 1.5, borderRadius: '40px', fontWeight: 700, '&:hover': { bgcolor: '#7B61FF' } }}>
              ارسال تیکت
            </Button>
          </form>
        </Paper>
      </Box>
    </ChildrenLayout>
  );
}
