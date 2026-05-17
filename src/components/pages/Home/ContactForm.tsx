'use client';

import { useState } from 'react';
import axiosInstance from '@/utils/hooks/axiosInstance';
import { Box, TextField, Button, Typography, MenuItem, Alert, useTheme, Paper } from '@mui/material';
import { motion, AnimatePresence } from 'framer-motion';
import { FaRegSmile } from 'react-icons/fa';
import { TbSparkles } from 'react-icons/tb';
import { MdOutlineMarkEmailRead } from 'react-icons/md';

export default function ContactForm() {
  const theme = useTheme();
  const [focusedField, setFocusedField] = useState<string | null>(null);

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
        name: formData.name.trim(),
        phone: formData.phone.trim(),
        email: formData.email.trim(),
        service: formData.service,
        message: formData.message.trim(),
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
    { value: 'corporate', label: 'طراحی سایت شرکتی', icon: '🏢' },
    { value: 'ecommerce', label: 'فروشگاه اینترنتی', icon: '🛒' },
    { value: 'uiux', label: 'UI/UX اختصاصی', icon: '🎨' },
    { value: 'personal', label: 'سایت شخصی / رزومه', icon: '👤' },
    { value: 'dashboard', label: 'پنل مدیریتی', icon: '📊' },
    { value: 'seo', label: 'سئو و بهینه‌سازی', icon: '🚀' },
    { value: 'custom', label: 'پروژه اختصاصی (سایر)', icon: '⚡' },
  ];

  const inputVariants = {
    focused: { scale: 1.02, transition: { duration: 0.2 } },
    blurred: { scale: 1, transition: { duration: 0.2 } },
  };

  return (
    <Box component="section" sx={{ width: '100%', py: { xs: 4, md: 6, lg: 8 }, px: { xs: 2, sm: 4, md: 6, lg: 8 }, bgcolor: '#0A0D1A', position: 'relative', overflow: 'hidden' }}>
      {/* Animated Background Particles */}
      <Box sx={{ position: 'absolute', inset: 0, overflow: 'hidden' }}>
        {[...Array(20)].map((_, i) => (
          <Box key={i} sx={{ position: 'absolute', width: `${Math.random() * 200 + 50}px`, height: `${Math.random() * 200 + 50}px`, borderRadius: '50%', background: `radial-gradient(circle, rgba(107, 78, 255, 0.04) 0%, transparent 70%)`, top: `${Math.random() * 100}%`, left: `${Math.random() * 100}%`, animation: `float ${10 + Math.random() * 15}s ease-in-out infinite`, animationDelay: `${Math.random() * 5}s` }} />
        ))}
      </Box>

      {/* Glowing Orbs */}
      <Box sx={{ position: 'absolute', top: '15%', left: '-5%', width: '350px', height: '350px', borderRadius: '50%', background: 'radial-gradient(circle, rgba(107, 78, 255, 0.12) 0%, transparent 70%)', filter: 'blur(50px)', animation: 'pulse 5s ease-in-out infinite' }} />
      <Box sx={{ position: 'absolute', bottom: '15%', right: '-5%', width: '350px', height: '350px', borderRadius: '50%', background: 'radial-gradient(circle, rgba(255, 79, 216, 0.1) 0%, transparent 70%)', filter: 'blur(50px)', animation: 'pulse 5s ease-in-out infinite 2.5s' }} />

      <Box sx={{ maxWidth: '1100px', mx: 'auto', position: 'relative', zIndex: 2 }}>
        {/* Header Section */}
        <motion.div initial={{ opacity: 0, y: -30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
          <Box textAlign="center" mb={{ xs: 6, md: 8 }}>
            <Box sx={{ display: 'inline-flex', alignItems: 'center', gap: 1.5, bgcolor: 'rgba(107, 78, 255, 0.1)', backdropFilter: 'blur(10px)', borderRadius: '100px', px: 3, py: 1, mb: 4, border: '1px solid rgba(107, 78, 255, 0.3)' }}>
              <Box sx={{ width: 6, height: 6, borderRadius: '50%', bgcolor: '#6B4EFF', boxShadow: '0 0 8px #6B4EFF', animation: 'pulse 2s infinite' }} />
              <Typography sx={{ fontSize: '0.7rem', color: '#9B7BFF', fontWeight: 600, letterSpacing: '2px' }}>✦ GET IN TOUCH ✦</Typography>
            </Box>

            <Typography component="h2" sx={{ fontSize: { xs: '1.8rem', sm: '2.2rem', md: '2.8rem', lg: '3.2rem' }, fontWeight: 700, color: '#FFFFFF', mb: 2 }}>
              فرم{' '}
              <Box component="span" sx={{ background: 'linear-gradient(135deg, #6B4EFF, #FF4FD8, #4A7DFF)', backgroundSize: '200% 200%', backgroundClip: 'text', WebkitBackgroundClip: 'text', color: 'transparent', animation: 'gradientShift 3s ease infinite' }}>
                همکاری
              </Box>
            </Typography>

            <Typography component="p" sx={{ fontSize: { xs: '0.85rem', sm: '0.95rem', md: '1rem' }, color: 'rgba(255, 255, 255, 0.55)', maxWidth: '550px', mx: 'auto' }}>
              برای شروع همکاری یا دریافت مشاوره رایگان، فرم زیر را تکمیل کنید
            </Typography>
          </Box>
        </motion.div>

        {/* Form Card */}
        <motion.div initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, type: 'spring' }}>
          <Paper elevation={0} component="form" onSubmit={handleSubmit} sx={{ p: { xs: 3, sm: 4, md: 5 }, borderRadius: '40px', bgcolor: 'rgba(15, 12, 35, 0.6)', backdropFilter: 'blur(12px)', border: '1px solid rgba(107, 78, 255, 0.2)', position: 'relative', overflow: 'hidden' }}>
            {/* Animated Border Gradient */}
            <Box sx={{ position: 'absolute', top: 0, left: 0, right: 0, height: '3px', background: 'linear-gradient(90deg, #6B4EFF, #FF4FD8, #4A7DFF, #6B4EFF)', backgroundSize: '200% 100%', animation: 'borderFlow 3s linear infinite' }} />

            {/* Decorative Sparkles */}
            <Box sx={{ position: 'absolute', top: 20, left: 20, opacity: 0.2 }}>
              <TbSparkles size={32} color="#6B4EFF" />
            </Box>
            <Box sx={{ position: 'absolute', bottom: 20, right: 20, opacity: 0.2 }}>
              <TbSparkles size={32} color="#FF4FD8" />
            </Box>

            {/* Success Alert */}
            <AnimatePresence>
              {success && (
                <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }}>
                  <Alert severity="success" icon={<MdOutlineMarkEmailRead size={20} />} sx={{ mb: 3, borderRadius: '20px', bgcolor: 'rgba(76, 175, 80, 0.1)', color: '#4caf50', '& .MuiAlert-icon': { color: '#4caf50' } }}>
                    درخواست شما با موفقیت ثبت شد! به‌زودی با شما تماس خواهیم گرفت.
                  </Alert>
                </motion.div>
              )}

              {/* Error Alert */}
              {error && (
                <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }}>
                  <Alert severity="error" sx={{ mb: 3, borderRadius: '20px', bgcolor: 'rgba(244, 67, 54, 0.1)', color: '#f44336', '& .MuiAlert-icon': { color: '#f44336' } }}>
                    {error}
                  </Alert>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Form Fields Grid */}
            <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', sm: 'repeat(2, 1fr)' }, gap: 3 }}>
              {[
                { name: 'name', label: 'نام و نام خانوادگی', required: true, icon: '👤' },
                { name: 'phone', label: 'شماره تماس', required: true, icon: '📱' },
                { name: 'email', label: 'ایمیل (اختیاری)', required: false, icon: '📧', type: 'email' },
              ].map((field) => (
                <motion.div key={field.name} variants={inputVariants} animate={focusedField === field.name ? 'focused' : 'blurred'}>
                  <TextField fullWidth name={field.name} label={`${field.icon} ${field.label}`} value={formData[field.name as keyof typeof formData]} onChange={handleChange} required={field.required} type={field.type || 'text'} variant="outlined" onFocus={() => setFocusedField(field.name)} onBlur={() => setFocusedField(null)} sx={textFieldStyle} InputProps={{ sx: { color: '#fff', borderRadius: '20px' } }} />
                </motion.div>
              ))}

              {/* Service Select */}
              <motion.div variants={inputVariants} animate={focusedField === 'service' ? 'focused' : 'blurred'}>
                <TextField
                  fullWidth
                  select
                  name="service"
                  label="🎯 نوع خدمات"
                  value={formData.service}
                  onChange={handleChange}
                  required
                  variant="outlined"
                  onFocus={() => setFocusedField('service')}
                  onBlur={() => setFocusedField(null)}
                  sx={textFieldStyle}
                  SelectProps={{
                    sx: { color: '#fff', borderRadius: '20px' },
                    renderValue: (selected: any) => {
                      const service = services.find((s) => s.value === selected);
                      return service ? `${service.icon} ${service.label}` : selected;
                    },
                  }}
                >
                  <MenuItem value="" disabled sx={{ color: 'rgba(255,255,255,0.7)' }}>
                    یک گزینه انتخاب کنید
                  </MenuItem>
                  {services.map((option) => (
                    <MenuItem key={option.value} value={option.value} sx={{ color: '#fff' }}>
                      {option.icon} {option.label}
                    </MenuItem>
                  ))}
                </TextField>
              </motion.div>

              {/* Message */}
              <motion.div variants={inputVariants} animate={focusedField === 'message' ? 'focused' : 'blurred'} style={{ gridColumn: '1 / -1' }}>
                <TextField fullWidth name="message" label="💬 توضیحات مربوط به پروژه" value={formData.message} onChange={handleChange} multiline rows={5} variant="outlined" onFocus={() => setFocusedField('message')} onBlur={() => setFocusedField(null)} sx={textFieldStyle} InputProps={{ sx: { color: '#fff', borderRadius: '20px' } }} />
              </motion.div>
            </Box>

            {/* Buttons */}
            <Box sx={{ display: 'flex', justifyContent: 'center', gap: 3, mt: 4, flexWrap: 'wrap' }}>
              <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                <Button type="reset" onClick={handleReset} disabled={loading} variant="outlined" sx={{ px: 4, py: 1.3, borderRadius: '40px', fontSize: '0.9rem', fontWeight: 600, borderColor: 'rgba(107, 78, 255, 0.5)', color: '#fff', textTransform: 'none', transition: 'all 0.3s ease', '&:hover': { borderColor: '#f44336', bgcolor: 'rgba(244, 67, 54, 0.1)', transform: 'translateY(-2px)' } }}>
                  پاک کردن فرم
                </Button>
              </motion.div>

              <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                <Button type="submit" disabled={loading} variant="contained" sx={{ px: 5, py: 1.3, borderRadius: '40px', fontSize: '0.9rem', fontWeight: 600, background: 'linear-gradient(135deg, #6B4EFF, #9B7BFF)', color: '#fff', textTransform: 'none', boxShadow: '0 4px 20px rgba(107, 78, 255, 0.3)', transition: 'all 0.3s ease', '&:hover': { transform: 'translateY(-2px)', boxShadow: '0 8px 30px rgba(107, 78, 255, 0.4)' } }}>
                  {loading ? 'در حال ارسال...' : '✨ ثبت پیشنهاد'}
                </Button>
              </motion.div>
            </Box>

            {/* WhatsApp Alternative */}
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5 }}>
              <Box sx={{ mt: 4, textAlign: 'center' }}>
                <Typography sx={{ fontSize: '0.75rem', color: 'rgba(255,255,255,0.4)', mb: 1.5, display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 1 }}>
                  <FaRegSmile size={14} />
                  یا ارتباط سریع‌تر از طریق بله
                </Typography>
                <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                  <Button component="a" href="https://wa.me/+989309363715" target="_blank" rel="noopener noreferrer" sx={{ px: 4, py: 1.2, borderRadius: '40px', fontSize: '0.85rem', fontWeight: 600, bgcolor: '#25D366', color: '#fff', textTransform: 'none', transition: 'all 0.3s ease', '&:hover': { bgcolor: '#128C7E', transform: 'translateY(-2px)', boxShadow: '0 5px 20px rgba(37, 211, 102, 0.3)' } }}>
                    💬 گفتگو در بله
                  </Button>
                </motion.div>
              </Box>
            </motion.div>

            {/* Trust Badge */}
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.7 }}>
              <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 1, mt: 3, pt: 2, borderTop: '1px solid rgba(107, 78, 255, 0.1)' }}>
                <Typography sx={{ fontSize: '0.65rem', color: 'rgba(255,255,255,0.3)' }}>🔒 اطلاعات شما نزد ما محفوظ است</Typography>
              </Box>
            </motion.div>
          </Paper>
        </motion.div>
      </Box>

      {/* Global Styles */}
      <style jsx global>{`
        @keyframes float {
          0%,
          100% {
            transform: translateY(0px) translateX(0px);
          }
          25% {
            transform: translateY(-20px) translateX(15px);
          }
          50% {
            transform: translateY(-40px) translateX(0px);
          }
          75% {
            transform: translateY(-20px) translateX(-15px);
          }
        }

        @keyframes pulse {
          0%,
          100% {
            opacity: 0.2;
            transform: scale(1);
          }
          50% {
            opacity: 0.5;
            transform: scale(1.1);
          }
        }

        @keyframes gradientShift {
          0% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
          100% {
            background-position: 0% 50%;
          }
        }

        @keyframes borderFlow {
          0% {
            background-position: 0% 0%;
          }
          100% {
            background-position: 200% 0%;
          }
        }
      `}</style>
    </Box>
  );
}

const textFieldStyle = {
  '& .MuiOutlinedInput-root': {
    backgroundColor: 'rgba(107, 78, 255, 0.05)',
    borderRadius: '20px',
    transition: 'all 0.3s ease',
    '& fieldset': {
      borderColor: 'rgba(107, 78, 255, 0.3)',
    },
    '&:hover fieldset': {
      borderColor: 'rgba(107, 78, 255, 0.6)',
    },
    '&.Mui-focused fieldset': {
      borderColor: '#6B4EFF',
      boxShadow: '0 0 0 3px rgba(107, 78, 255, 0.1)',
    },
  },
  '& .MuiInputLabel-root': {
    color: 'rgba(255, 255, 255, 0.6)',
    '&.Mui-focused': {
      color: '#6B4EFF',
    },
  },
};
