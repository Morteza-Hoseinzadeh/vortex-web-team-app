'use client';

import React, { useState } from 'react';
import { Box, Button, FormControl, InputLabel, MenuItem, Select, TextField, Typography, useTheme } from '@mui/material';

export default function ContactForm() {
  const theme = useTheme();

  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    service: '',
    message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleServiceChange = (event: any) => {
    setFormData({ ...formData, service: event.target.value as string });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // اینجا می‌توانید فرم را به API بفرستید
  };

  const services = [
    { value: 'corporate', label: 'طراحی سایت شرکتی' },
    { value: 'ecommerce', label: 'فروشگاه اینترنتی' },
    { value: 'uiux', label: 'UI/UX اختصاصی' },
    { value: 'personal', label: 'سایت شخصی / رزومه' },
    { value: 'dashboard', label: 'پنل مدیریتی' },
    { value: 'seo', label: 'سئو و بهینه‌سازی' },
    { value: 'custom', label: 'پروژه اختصاصی (سایر)' },
  ];

  return (
    <Box component="section" aria-labelledby="contact-form-heading" sx={{ py: { xs: 4, md: 6, lg: 8 }, px: { xs: 4, md: 8, lg: 12 }, bgcolor: 'rgba(10, 5, 30, 0.98)', textAlign: 'center' }}>
      {/* Header */}
      <Box mb={{ xs: 5, md: 8 }}>
        <Typography id="contact-form-heading" component="h2" sx={{ fontSize: { xs: '3rem', md: '4.5rem', lg: '5.5rem' }, fontWeight: 900, color: '#fff', mb: 4, letterSpacing: '-1px', lineHeight: 1.1, textShadow: '0 0 40px rgba(107, 78, 255, 0.6)' }}>
          فرم همکاری
        </Typography>

        <Typography component="p" sx={{ fontSize: { xs: '1.2rem', md: '1.6rem' }, fontWeight: 600, color: 'rgba(255, 255, 255, 0.9)', maxWidth: '1000px', mx: 'auto', lineHeight: 1.9 }}>
          برای شروع همکاری یا دریافت مشاوره رایگان، فرم زیر را تکمیل کنید. تیم ما در کوتاه‌ترین زمان ممکن با شما تماس خواهد گرفت و بهترین راهکار را برای پروژه‌تان پیشنهاد می‌دهیم.
        </Typography>
      </Box>

      {/* Form */}
      <Box component="form" onSubmit={handleSubmit} noValidate autoComplete="off" sx={{ maxWidth: '1100px', mx: 'auto', display: 'grid', gridTemplateColumns: { xs: '1fr', md: 'repeat(2, 1fr)' }, gap: { xs: 5, md: 7 } }}>
        {/* Name */}
        <TextField name="name" label="نام و نام خانوادگی" value={formData.name} onChange={handleChange} required fullWidth variant="filled" InputProps={{ disableUnderline: true }} InputLabelProps={{ shrink: true }} sx={fieldStyle} aria-required="true" />

        {/* Phone */}
        <TextField name="phone" label="شماره تماس" value={formData.phone} onChange={handleChange} required fullWidth variant="filled" type="tel" InputProps={{ disableUnderline: true }} InputLabelProps={{ shrink: true }} sx={fieldStyle} aria-required="true" />

        {/* Email */}
        <TextField name="email" label="ایمیل (اختیاری)" value={formData.email} onChange={handleChange} fullWidth variant="filled" type="email" InputProps={{ disableUnderline: true }} InputLabelProps={{ shrink: true }} sx={fieldStyle} />

        {/* Service Select */}
        <FormControl fullWidth required sx={fieldStyle}>
          <InputLabel id="service-label" shrink>
            نوع خدمات مورد نظر
          </InputLabel>
          <Select
            labelId="service-label"
            name="service"
            value={formData.service}
            onChange={handleServiceChange}
            displayEmpty
            sx={{
              ...selectStyle,
              '& .MuiSelect-select': { padding: '28px 32px', paddingRight: '64px !important', textAlign: 'right', color: '#fff', fontSize: '1.15rem' },
              '& .MuiSelect-icon': { color: '#fff', right: '24px', fontSize: '28px' },
            }}
            MenuProps={{
              PaperProps: {
                sx: { bgcolor: 'rgba(20, 10, 40, 0.95)', backdropFilter: 'blur(20px)', border: '1px solid rgba(107, 78, 255, 0.5)', borderRadius: '24px', mt: 1, boxShadow: '0 16px 50px rgba(107, 78, 255, 0.4)', '& .MuiMenuItem-root': { fontSize: '1.1rem', fontWeight: 600, color: '#fff', py: 2, px: 4, textAlign: 'right', transition: 'all 0.3s ease', '&:hover': { bgcolor: 'rgba(107, 78, 255, 0.3)', transform: 'translateX(8px)' }, '&.Mui-selected': { bgcolor: 'rgba(107, 78, 255, 0.4)' } } },
              },
            }}
          >
            <MenuItem value="" disabled>
              یک گزینه انتخاب کنید
            </MenuItem>
            {services.map((option) => (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
          </Select>
        </FormControl>

        {/* Message */}
        <TextField name="message" label="توضیحات مربوط به پروژه" value={formData.message} onChange={handleChange} multiline rows={7} fullWidth variant="filled" InputProps={{ disableUnderline: true }} InputLabelProps={{ shrink: true }} sx={{ ...fieldStyle, gridColumn: { xs: '1 / -1', md: '1 / -1' } }} />

        {/* Buttons */}
        <Box sx={{ gridColumn: { xs: '1 / -1', md: '1 / -1' }, display: 'flex', justifyContent: 'center', gap: { xs: 4, md: 6 }, mt: 2 }}>
          <Button type="reset" onClick={() => setFormData({ name: '', phone: '', email: '', service: '', message: '' })} sx={secondaryButtonStyle}>
            پاک کردن فرم
          </Button>

          <Button type="submit" sx={primaryButtonStyle}>
            ثبت پیشنهاد
          </Button>
        </Box>
      </Box>
    </Box>
  );
}

// استایل‌های بهینه‌شده و کاملاً MUI-based
const fieldStyle = {
  bgcolor: 'rgba(107, 78, 255, 0.15)',
  backdropFilter: 'blur(20px)',
  border: '2px solid rgba(107, 78, 255, 0.4)',
  borderRadius: '32px',
  boxShadow: '0 8px 32px rgba(0,0,0,0.2)',
  transition: 'all 0.5s ease',
  '& .MuiFilledInput-root': {
    bgcolor: 'transparent',
    borderRadius: '32px',
    '&:hover': {
      bgcolor: 'transparent',
    },
  },
  '& .MuiInputLabel-root': {
    color: '#fff',
    fontWeight: 700,
    fontSize: { xs: '1rem', md: '1.15rem' },
    right: 28,
    left: 'auto',
    transformOrigin: 'right',
    '&.Mui-focused': {
      color: '#fff',
    },
    '&.MuiInputLabel-shrink': {
      transform: 'translate(14px, -9px) scale(0.75)',
      bgcolor: 'rgba(10, 5, 30, 0.9)',
      px: 2,
      borderRadius: '12px',
    },
  },
  '& .MuiFilledInput-input': {
    color: '#fff',
    fontSize: '1.15rem',
    py: 3.5,
    textAlign: 'right',
    '&::placeholder': {
      color: 'rgba(255,255,255,0.5)',
      opacity: 1,
    },
  },
  '&:hover': {
    borderColor: 'rgba(107, 78, 255, 0.7)',
    bgcolor: 'rgba(107, 78, 255, 0.22)',
  },
  '&.Mui-focused': {
    borderColor: '#A78BFA',
    bgcolor: 'rgba(107, 78, 255, 0.25)',
    boxShadow: '0 0 0 4px rgba(107, 78, 255, 0.3)',
  },
};

const selectStyle = {
  ...fieldStyle,
};

const primaryButtonStyle = {
  px: { xs: 8, md: 10 },
  py: { xs: 2.5, md: 3 },
  borderRadius: '40px',
  fontSize: { xs: '1.15rem', md: '1.4rem' },
  fontWeight: 800,
  bgcolor: '#6B4EFF',
  background: 'linear-gradient(135deg, #6B4EFF 0%, #A855F7 100%)',
  color: '#fff',
  boxShadow: '0 16px 50px rgba(107, 78, 255, 0.6)',
  textTransform: 'none',
  transition: 'all 0.5s ease',
  '&:hover': {
    transform: 'translateY(-12px)',
    boxShadow: '0 28px 80px rgba(107, 78, 255, 0.7)',
  },
};

const secondaryButtonStyle = {
  px: { xs: 8, md: 10 },
  py: { xs: 2.5, md: 3 },
  borderRadius: '40px',
  fontSize: { xs: '1.15rem', md: '1.4rem' },
  fontWeight: 800,
  bgcolor: 'rgba(255,255,255,0.08)',
  color: '#fff',
  border: '2px solid rgba(255,255,255,0.2)',
  backdropFilter: 'blur(12px)',
  textTransform: 'none',
  transition: 'all 0.5s ease',
  '&:hover': {
    bgcolor: 'rgba(255,255,255,0.18)',
    transform: 'translateY(-10px)',
    borderColor: 'rgba(255,255,255,0.5)',
  },
};
