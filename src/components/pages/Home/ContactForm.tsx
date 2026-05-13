'use client';

import { useState } from 'react';
import axiosInstance from '@/utils/hooks/axiosInstance';
import { Box, TextField, Button, Typography, MenuItem, Alert, CircularProgress, useTheme, Paper, Fade } from '@mui/material';
import { FaPaperPlane, FaWhatsapp } from 'react-icons/fa';
import { TbTrash } from 'react-icons/tb';

export default function ContactForm() {
  const theme = useTheme();

  const [formData, setFormData] = useState({ name: '', phone: '', email: '', service: '', message: '' });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | { name?: string; value: unknown }>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name as string]: value as string });
  };

  const handleReset = () => {
    setFormData({ name: '', phone: '', email: '', service: '', message: '' });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setSuccess(false);
    setError(null);

    try {
      const response = await axiosInstance.post('/api/contact/submit', {
        full_name: formData.name.trim(),
        phone: formData.phone.trim(),
        email: formData.email.trim(),
        service: formData.service,
        description: formData.message.trim(),
      });

      if (response.data.status === 201) {
        setSuccess(true);
        handleReset();
        setTimeout(() => setSuccess(false), 5000);
      }
    } catch (err: any) {
      console.error('Form submission error:', err);
      setError(err.response?.data?.message || 'خطایی در ارسال اطلاعات رخ داد. لطفاً دوباره تلاش کنید.');
      setTimeout(() => setError(null), 5000);
    } finally {
      setLoading(false);
    }
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
    <Box component="section" sx={{ width: '100%', py: { xs: 2, md: 4, lg: 6 }, px: { xs: 2, sm: 4, md: 6, lg: 8 }, bgcolor: '#0A0D1A', position: 'relative', overflow: 'hidden' }}>
      {/* Background Gradients */}
      <Box sx={{ position: 'absolute', top: '20%', left: '-10%', width: '400px', height: '400px', borderRadius: '50%', background: 'radial-gradient(circle, rgba(107, 78, 255, 0.06) 0%, transparent 70%)', pointerEvents: 'none' }} />
      <Box sx={{ position: 'absolute', bottom: '10%', right: '-10%', width: '400px', height: '400px', borderRadius: '50%', background: 'radial-gradient(circle, rgba(255, 79, 216, 0.05) 0%, transparent 70%)', pointerEvents: 'none' }} />

      <Box sx={{ maxWidth: '1000px', mx: 'auto', position: 'relative', zIndex: 2 }}>
        {/* Header */}
        <Box textAlign="center" mb={{ xs: 6, md: 8 }}>
          <Typography component="h4" sx={{ fontSize: { xs: '0.7rem', sm: '0.75rem', md: '0.8rem' }, letterSpacing: '3px', textTransform: 'uppercase', color: '#6B4EFF', fontWeight: 600, mb: 2, display: 'inline-block', bgcolor: 'rgba(107, 78, 255, 0.08)', px: 2, py: 0.6, borderRadius: '30px' }}>
            CONTACT US
          </Typography>

          <Typography component="h2" sx={{ fontSize: { xs: '1.8rem', sm: '2.2rem', md: '2.8rem', lg: '3.2rem' }, fontWeight: 700, color: '#FFFFFF', mb: 2 }}>
            فرم{' '}
            <Box component="span" sx={{ background: 'linear-gradient(135deg, #6B4EFF, #FF4FD8)', backgroundClip: 'text', WebkitBackgroundClip: 'text', color: 'transparent' }}>
              همکاری
            </Box>
          </Typography>

          <Typography component="p" sx={{ fontSize: { xs: '0.85rem', sm: '0.95rem', md: '1rem' }, color: 'rgba(255, 255, 255, 0.55)', maxWidth: '550px', mx: 'auto' }}>
            برای شروع همکاری یا دریافت مشاوره رایگان، فرم زیر را تکمیل کنید
          </Typography>
        </Box>

        {/* Form Card */}
        <Fade in timeout={500}>
          <Paper elevation={0} component="form" onSubmit={handleSubmit} sx={{ p: { xs: 3, sm: 4, md: 5 }, borderRadius: '32px', bgcolor: 'rgba(15, 12, 35, 0.6)', backdropFilter: 'blur(10px)', border: '1px solid rgba(107, 78, 255, 0.15)' }}>
            {/* Success Alert */}
            {success && (
              <Alert severity="success" sx={{ mb: 3, borderRadius: '16px', bgcolor: 'rgba(76, 175, 80, 0.1)', color: '#4caf50', '& .MuiAlert-icon': { color: '#4caf50' } }}>
                درخواست شما با موفقیت ثبت شد! به‌زودی با شما تماس خواهیم گرفت.
              </Alert>
            )}

            {/* Error Alert */}
            {error && (
              <Alert severity="error" sx={{ mb: 3, borderRadius: '16px', bgcolor: 'rgba(244, 67, 54, 0.1)', color: '#f44336', '& .MuiAlert-icon': { color: '#f44336' } }}>
                {error}
              </Alert>
            )}

            {/* Form Fields Grid */}
            <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', sm: 'repeat(2, 1fr)' }, gap: 3 }}>
              <TextField fullWidth name="name" label="نام و نام خانوادگی" value={formData.name} onChange={handleChange} required variant="outlined" sx={textFieldStyle} InputProps={{ sx: { color: '#fff', borderRadius: '16px' } }} />

              <TextField fullWidth name="phone" label="شماره تماس" value={formData.phone} onChange={handleChange} required variant="outlined" sx={textFieldStyle} InputProps={{ sx: { color: '#fff', borderRadius: '16px' } }} />

              <TextField fullWidth name="email" label="ایمیل (اختیاری)" value={formData.email} onChange={handleChange} type="email" variant="outlined" sx={textFieldStyle} InputProps={{ sx: { color: '#fff', borderRadius: '16px' } }} />

              <TextField fullWidth select name="service" label="نوع خدمات" value={formData.service} onChange={handleChange} required variant="outlined" sx={textFieldStyle} SelectProps={{ sx: { color: '#fff', borderRadius: '16px' } }}>
                <MenuItem value="" disabled sx={{ color: 'rgba(255,255,255,0.7)' }}>
                  یک گزینه انتخاب کنید
                </MenuItem>
                {services.map((option) => (
                  <MenuItem key={option.value} value={option.value} sx={{ color: '#fff' }}>
                    {option.label}
                  </MenuItem>
                ))}
              </TextField>

              <TextField fullWidth name="message" label="توضیحات مربوط به پروژه" value={formData.message} onChange={handleChange} multiline rows={5} variant="outlined" sx={{ ...textFieldStyle, gridColumn: { xs: 'auto', sm: '1 / -1' } }} InputProps={{ sx: { color: '#fff', borderRadius: '16px' } }} />
            </Box>

            {/* Buttons */}
            <Box sx={{ display: 'flex', justifyContent: 'center', gap: 2.5, mt: 4, flexWrap: 'wrap' }}>
              <Button type="reset" onClick={handleReset} disabled={loading} variant="outlined" startIcon={<TbTrash size={18} style={{ marginLeft: '8px' }} />} sx={{ px: 4, py: 1.3, borderRadius: '40px', fontSize: '0.9rem', fontWeight: 600, borderColor: 'rgba(107, 78, 255, 0.5)', color: '#fff', textTransform: 'none', '&:hover': { borderColor: '#f44336', bgcolor: 'rgba(244, 67, 54, 0.1)' } }}>
                پاک کردن فرم
              </Button>

              <Button
                type="submit"
                disabled={loading}
                variant="contained"
                startIcon={loading ? <CircularProgress size={20} color="inherit" /> : <FaPaperPlane style={{ marginLeft: '8px' }} size={18} />}
                sx={{ px: 4, py: 1.3, borderRadius: '40px', fontSize: '0.9rem', fontWeight: 600, background: 'linear-gradient(135deg, #6B4EFF, #9B7BFF)', color: '#fff', textTransform: 'none', boxShadow: '0 4px 20px rgba(107, 78, 255, 0.25)', '&:hover': { transform: 'translateY(-2px)', boxShadow: '0 8px 30px rgba(107, 78, 255, 0.35)' } }}
              >
                {loading ? 'در حال ارسال...' : 'ثبت پیشنهاد'}
              </Button>
            </Box>

            {/* WhatsApp Alternative */}
            <Box sx={{ mt: 4, textAlign: 'center' }}>
              <Typography sx={{ fontSize: '0.75rem', color: 'rgba(255,255,255,0.4)', mb: 1.5 }}>یا ارتباط سریع‌تر از طریق واتساپ</Typography>
              <Button component="a" href="https://wa.me/989309363715" target="_blank" rel="noopener noreferrer" startIcon={<FaWhatsapp size={20} style={{ marginLeft: '8px' }} />} sx={{ px: 3, py: 1, borderRadius: '40px', fontSize: '0.8rem', fontWeight: 600, bgcolor: '#25D366', color: '#fff', textTransform: 'none', '&:hover': { bgcolor: '#128C7E', transform: 'translateY(-2px)' } }}>
                گفتگو در واتساپ
              </Button>
            </Box>
          </Paper>
        </Fade>
      </Box>
    </Box>
  );
}

const textFieldStyle = {
  '& .MuiOutlinedInput-root': {
    backgroundColor: 'rgba(107, 78, 255, 0.05)',
    borderRadius: '16px',
    '& fieldset': {
      borderColor: 'rgba(107, 78, 255, 0.3)',
    },
    '&:hover fieldset': {
      borderColor: 'rgba(107, 78, 255, 0.5)',
    },
    '&.Mui-focused fieldset': {
      borderColor: '#6B4EFF',
    },
  },
  '& .MuiInputLabel-root': {
    color: 'rgba(255, 255, 255, 0.6)',
    '&.Mui-focused': {
      color: '#6B4EFF',
    },
  },
};
