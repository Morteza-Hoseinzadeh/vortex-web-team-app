// app/dashboard/tickets/[id]/page.tsx
'use client';

import React, { useState } from 'react';
import { Box, Grid, Typography, Paper, Button, Chip, Divider, Avatar, TextField, IconButton, useTheme, Alert, Snackbar, CircularProgress } from '@mui/material';
import { FiArrowRight, FiPaperclip, FiSend, FiClock, FiCalendar, FiUser, FiTag, FiFlag, FiMessageSquare, FiCheckCircle, FiAlertCircle, FiDownload } from 'react-icons/fi';
import Link from 'next/link';
import ConvertToPersianDigit from '@/utils/functions/convertToPersianDigit';
import ChildrenLayout from '@/components/ChildrenLayout';

// دیتای نمونه تیکت
const mockTicket = {
  id: 1,
  title: 'مشکل در لاگین پنل ادمین',
  status: 'open',
  priority: 'high',
  category: 'technical',
  createdAt: '۱۴۰۲/۰۹/۱۰',
  lastUpdate: '۲ ساعت پیش',
  description: `سلام تیم ورتکس
من چند روزه که نمیتونم وارد پنل ادمین سایت بشم. رمز عبور رو درست وارد میکنم ولی خطا میده.
لطفاً راهنمایی کنید.
ممنون از شما`,
  user: {
    name: 'مهدی احمدی',
    avatar: 'م',
    email: 'mehdi@example.com',
    phone: '۰۹۳۰۹۳۶۳۷۱۵',
  },
  attachments: [
    { id: 1, name: 'screenshot-error.png', size: '۱.۲ MB', type: 'image' },
    { id: 2, name: 'error-log.txt', size: '۰.۳ MB', type: 'text' },
  ],
  messages: [
    {
      id: 1,
      author: 'مهدی احمدی',
      avatar: 'م',
      role: 'user',
      text: 'سلام. من نمیتونم وارد پنل ادمین بشم. لطفاً راهنمایی کنید.',
      time: '۱۴۰۲/۰۹/۱۰ - ۱۰:۳۰',
      isTeam: false,
    },
    {
      id: 2,
      author: 'پشتیبانی ورتکس',
      avatar: 'و',
      role: 'support',
      text: 'سلام وقت بخیر. لطفاً آدرس سایت و نام کاربری خودتون رو برامون ارسال کنید تا بررسی کنیم.',
      time: '۱۴۰۲/۰۹/۱۰ - ۱۱:۱۵',
      isTeam: true,
    },
    {
      id: 3,
      author: 'مهدی احمدی',
      avatar: 'م',
      role: 'user',
      text: 'آدرس سایت: https://example.com\nنام کاربری: admin_mehdi',
      time: '۱۴۰۲/۰۹/۱۰ - ۱۲:۰۰',
      isTeam: false,
    },
    {
      id: 4,
      author: 'پشتیبانی ورتکس',
      avatar: 'و',
      role: 'support',
      text: 'مشکل بررسی شد. به نظر میرسه رمز عبور شما منقضی شده. لطفاً روی گزینه فراموشی رمز عبور کلیک کنید و رمز جدید تنظیم کنید.\n\nدر صورت نیاز به راهنمایی بیشتر، ما هستیم.',
      time: '۱۴۰۲/۰۹/۱۰ - ۱۳:۴۵',
      isTeam: true,
    },
  ],
};

const statusConfig = {
  open: { color: '#F44336', label: 'باز', icon: <FiAlertCircle size={16} style={{ marginRight: '8px', color: '#F44336' }} />, bg: '#F4433620' },
  in_progress: { color: '#FF9800', label: 'در حال بررسی', icon: <FiClock size={16} style={{ marginRight: '8px', color: '#FF9800' }} />, bg: '#FF980020' },
  closed: { color: '#4CAF50', label: 'بسته شده', icon: <FiCheckCircle size={16} style={{ marginRight: '8px', color: '#4CAF50' }} />, bg: '#4CAF5020' },
};

const priorityConfig = {
  high: { color: '#F44336', label: 'بالا', icon: <FiFlag size={14} style={{ marginRight: '8px', color: '#F44336' }} /> },
  medium: { color: '#FF9800', label: 'متوسط', icon: <FiFlag size={14} style={{ marginRight: '8px', color: '#FF9800' }} /> },
  low: { color: '#4CAF50', label: 'پایین', icon: <FiFlag size={14} style={{ marginRight: '8px', color: '#4CAF50' }} /> },
};

const categoryConfig = {
  technical: { label: 'مشکل فنی', color: '#2196F3' },
  design: { label: 'درخواست طراحی', color: '#9C27B0' },
  support: { label: 'پشتیبانی', color: '#4CAF50' },
  billing: { label: 'صورتحساب', color: '#FF9800' },
};

export default function TicketDetailPage({ params }: { params: { id: string } }) {
  const theme = useTheme();
  const [newMessage, setNewMessage] = useState('');
  const [isSending, setIsSending] = useState(false);
  const [snackbar, setSnackbar] = useState({ open: false, message: '', severity: 'success' as 'success' | 'error' });
  const [ticketStatus, setTicketStatus] = useState(mockTicket.status);
  const [messages, setMessages] = useState(mockTicket.messages);

  const currentStatus = statusConfig[ticketStatus as keyof typeof statusConfig] || statusConfig.open;
  const currentPriority = priorityConfig[mockTicket.priority as keyof typeof priorityConfig];
  const currentCategory = categoryConfig[mockTicket.category as keyof typeof categoryConfig];

  const handleSendMessage = async () => {
    if (!newMessage.trim()) return;

    setIsSending(true);

    // شبیه‌سازی ارسال پیام به سرور
    setTimeout(() => {
      const newMsg = { id: messages.length + 1, author: 'مهدی احمدی', avatar: 'م', role: 'user', text: newMessage, time: new Date().toLocaleDateString('fa-IR') + ' - ' + new Date().toLocaleTimeString('fa-IR'), isTeam: false };

      setMessages([...messages, newMsg]);
      setNewMessage('');
      setIsSending(false);
      setSnackbar({ open: true, message: 'پیام شما با موفقیت ارسال شد', severity: 'success' });
    }, 1000);
  };

  const handleCloseTicket = () => {
    setTicketStatus('closed');
    setSnackbar({ open: true, message: 'تیکت با موفقیت بسته شد', severity: 'success' });
  };

  const handleReopenTicket = () => {
    setTicketStatus('open');
    setSnackbar({ open: true, message: 'تیکت مجدداً باز شد', severity: 'success' });
  };

  const handleDownloadFile = (fileName: string) => {
    setSnackbar({ open: true, message: `در حال دانلود ${fileName}...`, severity: 'success' });
  };

  return (
    <ChildrenLayout>
      <Box sx={{ p: { xs: 2, sm: 3, md: 4 }, mt: 18 }}>
        {/* Header with Back Button */}
        <Box sx={{ display: 'flex', alignItems: 'center', flexWrap: 'wrap', gap: 2, mb: 3 }}>
          <IconButton component={Link} href="/dashboard/tickets" sx={{ color: '#fff', bgcolor: 'rgba(107, 78, 255, 0.15)', '&:hover': { bgcolor: 'rgba(107, 78, 255, 0.25)' } }}>
            <FiArrowRight size={20} />
          </IconButton>

          <Box sx={{ flex: 1 }}>
            <Typography variant="h4" sx={{ fontWeight: 900, color: '#fff', mb: 0.5 }}>
              {mockTicket.title}
            </Typography>
            <Box sx={{ display: 'flex', gap: 1.5, flexWrap: 'wrap' }}>
              <Typography variant="caption" sx={{ color: 'rgba(255,255,255,0.5)' }}>
                کد تیکت: {ConvertToPersianDigit(mockTicket.id)}
              </Typography>
              <Typography variant="caption" sx={{ color: 'rgba(255,255,255,0.5)' }}>
                ایجاد شده در: {ConvertToPersianDigit(mockTicket.createdAt)}
              </Typography>
              <Typography variant="caption" sx={{ color: 'rgba(255,255,255,0.5)' }}>
                آخرین بروزرسانی: {ConvertToPersianDigit(mockTicket.lastUpdate)}
              </Typography>
            </Box>
          </Box>

          {/* Action Buttons */}
          {ticketStatus !== 'closed' ? (
            <Button variant="outlined" onClick={handleCloseTicket} sx={{ borderColor: '#f4433650', color: '#f44336', borderRadius: '40px', '&:hover': { borderColor: '#f44336', bgcolor: '#f4433610' } }}>
              بستن تیکت
            </Button>
          ) : (
            <Button variant="outlined" onClick={handleReopenTicket} sx={{ borderColor: theme.palette.primary.main, color: theme.palette.primary.main, borderRadius: '40px' }}>
              باز کردن مجدد
            </Button>
          )}
        </Box>

        <Grid container spacing={3}>
          {/* Main Content - Messages */}
          <Grid size={{ xs: 12, lg: 8 }}>
            <Paper sx={{ p: { xs: 2, sm: 3 }, bgcolor: 'rgba(107, 78, 255, 0.05)', border: '1px solid rgba(107, 78, 255, 0.2)', borderRadius: '24px', mb: 3 }}>
              {/* Ticket Status Bar */}
              <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap', mb: 3, pb: 2, borderBottom: '1px solid rgba(107, 78, 255, 0.2)' }}>
                <Chip label={currentStatus.label} icon={currentStatus.icon} sx={{ bgcolor: currentStatus.bg, color: currentStatus.color, fontWeight: 600 }} />
                <Chip label={currentPriority.label} icon={currentPriority.icon} sx={{ bgcolor: `${currentPriority.color}20`, color: currentPriority.color, fontWeight: 600 }} />
                <Chip label={currentCategory.label} sx={{ bgcolor: `${currentCategory.color}20`, color: currentCategory.color, fontWeight: 600 }} />
              </Box>

              {/* Messages Thread */}
              <Box sx={{ mb: 3, maxHeight: '60vh', overflowY: 'auto', display: 'flex', flexDirection: 'column', gap: 2 }}>
                {messages.map((message) => (
                  <Box key={message.id} sx={{ display: 'flex', gap: 1.5, flexDirection: message.isTeam ? 'row' : 'row-reverse' }}>
                    <Avatar sx={{ width: 40, height: 40, bgcolor: message.isTeam ? theme.palette.primary.main : '#FF9800', flexShrink: 0 }}>{message.avatar}</Avatar>

                    <Box sx={{ maxWidth: '75%', bgcolor: message.isTeam ? 'rgba(107, 78, 255, 0.15)' : 'rgba(255, 152, 0, 0.1)', borderRadius: message.isTeam ? '20px 20px 20px 8px' : '20px 20px 8px 20px', p: 2 }}>
                      <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5, mb: 1, flexWrap: 'wrap' }}>
                        <Typography variant="subtitle2" sx={{ color: '#fff', fontWeight: 700 }}>
                          {message.author}
                        </Typography>
                        {message.isTeam && <Chip label="پشتیبانی" size="small" sx={{ bgcolor: theme.palette.primary.main, color: '#fff', height: 20, fontSize: '0.6rem' }} />}
                        <Typography variant="caption" sx={{ color: 'rgba(255,255,255,0.4)' }}>
                          {ConvertToPersianDigit(message.time)}
                        </Typography>
                      </Box>
                      <Typography variant="body2" sx={{ color: 'rgba(255,255,255,0.9)', whiteSpace: 'pre-wrap', wordBreak: 'break-word' }}>
                        {message.text}
                      </Typography>
                    </Box>
                  </Box>
                ))}
              </Box>

              {/* Reply Form */}
              <Divider sx={{ my: 2, bgcolor: 'rgba(107, 78, 255, 0.2)' }} />

              <Box sx={{ display: 'flex', gap: 1.5, alignItems: 'flex-start' }}>
                <Avatar sx={{ width: 40, height: 40, bgcolor: '#FF9800', flexShrink: 0 }}>م</Avatar>
                <Box sx={{ flex: 1 }}>
                  <TextField fullWidth multiline rows={4} placeholder="پاسخ خود را بنویسید..." value={newMessage} onChange={(e) => setNewMessage(e.target.value)} disabled={ticketStatus === 'closed'} sx={{ '& .MuiOutlinedInput-root': { color: '#fff', bgcolor: 'rgba(255,255,255,0.03)', borderRadius: '16px', '& fieldset': { borderColor: 'rgba(107, 78, 255, 0.3)' }, '&:hover fieldset': { borderColor: 'rgba(107, 78, 255, 0.5)' } } }} />
                  <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mt: 1.5 }}>
                    <Button startIcon={<FiPaperclip style={{ marginLeft: '8px' }} />} disabled={ticketStatus === 'closed'} sx={{ color: 'rgba(255,255,255,0.5)', fontSize: '1rem' }}>
                      آپلود فایل پیوست
                    </Button>
                    <Button variant="contained" onClick={handleSendMessage} disabled={!newMessage.trim() || isSending || ticketStatus === 'closed'} startIcon={isSending ? <CircularProgress size={18} color="inherit" style={{ marginLeft: '8px' }} /> : <FiSend style={{ marginLeft: '8px' }} />} sx={{ bgcolor: theme.palette.primary.main, borderRadius: '40px', px: 3, '&:hover': { bgcolor: '#7B61FF' }, '&.Mui-disabled': { bgcolor: 'rgba(107, 78, 255, 0.3)' } }}>
                      {isSending ? 'در حال ارسال...' : 'ارسال پیام'}
                    </Button>
                  </Box>
                </Box>
              </Box>

              {ticketStatus === 'closed' && (
                <Alert severity="info" sx={{ mt: 2, bgcolor: 'rgba(33, 150, 243, 0.1)', color: '#fff' }}>
                  این تیکت بسته شده است. برای ارسال پیام جدید، لطفاً تیکت را باز کنید.
                </Alert>
              )}
            </Paper>
          </Grid>

          {/* Sidebar - Ticket Info */}
          <Grid size={{ xs: 12, lg: 4 }}>
            {/* User Info Card */}
            <Paper sx={{ p: 3, mb: 3, bgcolor: 'rgba(107, 78, 255, 0.05)', border: '1px solid rgba(107, 78, 255, 0.2)', borderRadius: '24px' }}>
              <Typography variant="h6" sx={{ fontWeight: 800, color: '#fff', mb: 2 }}>
                اطلاعات کاربر
              </Typography>

              <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 2 }}>
                <Avatar sx={{ width: 50, height: 50, bgcolor: '#FF9800', fontSize: '1.2rem' }}>{mockTicket.user.avatar}</Avatar>
                <Box>
                  <Typography variant="body1" sx={{ color: '#fff', fontWeight: 600 }}>
                    {mockTicket.user.name}
                  </Typography>
                  <Typography variant="caption" sx={{ color: 'rgba(255,255,255,0.5)' }}>
                    کارفرما
                  </Typography>
                </Box>
              </Box>

              <Divider sx={{ my: 2, bgcolor: 'rgba(107, 78, 255, 0.2)' }} />

              <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1.5 }}>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5 }}>
                  <FiUser size={16} color="rgba(255,255,255,0.4)" />
                  <Typography variant="body2" sx={{ color: 'rgba(255,255,255,0.7)' }}>
                    {mockTicket.user.email}
                  </Typography>
                </Box>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5 }}>
                  <FiMessageSquare size={16} color="rgba(255,255,255,0.4)" />
                  <Typography variant="body2" sx={{ color: 'rgba(255,255,255,0.7)' }}>
                    {ConvertToPersianDigit(mockTicket.user.phone)}
                  </Typography>
                </Box>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5 }}>
                  <FiCalendar size={16} color="rgba(255,255,255,0.4)" />
                  <Typography variant="body2" sx={{ color: 'rgba(255,255,255,0.7)' }}>
                    عضویت از: {ConvertToPersianDigit('۱۴۰۲/۰۱/۱۵')}
                  </Typography>
                </Box>
              </Box>
            </Paper>

            {/* Attachments Card */}
            {mockTicket.attachments.length > 0 && (
              <Paper sx={{ p: 3, mb: 3, bgcolor: 'rgba(107, 78, 255, 0.05)', border: '1px solid rgba(107, 78, 255, 0.2)', borderRadius: '24px' }}>
                <Typography variant="h6" sx={{ fontWeight: 800, color: '#fff', mb: 2 }}>
                  پیوست‌ها
                </Typography>

                <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1.5 }}>
                  {mockTicket.attachments.map((file) => (
                    <Box key={file.id} sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', p: 1.5, bgcolor: 'rgba(255,255,255,0.03)', borderRadius: '12px', cursor: 'pointer', '&:hover': { bgcolor: 'rgba(255,255,255,0.06)' } }} onClick={() => handleDownloadFile(file.name)}>
                      <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5 }}>
                        <FiPaperclip size={16} color={theme.palette.primary.main} />
                        <Box>
                          <Typography variant="body2" sx={{ color: '#fff' }}>
                            {file.name}
                          </Typography>
                          <Typography variant="caption" sx={{ color: 'rgba(255,255,255,0.3)' }}>
                            {ConvertToPersianDigit(file.size)}
                          </Typography>
                        </Box>
                      </Box>
                      <IconButton size="small">
                        <FiDownload size={16} color={theme.palette.primary.main} />
                      </IconButton>
                    </Box>
                  ))}
                </Box>
              </Paper>
            )}

            {/* Info Card */}
            <Paper sx={{ p: 3, bgcolor: 'rgba(107, 78, 255, 0.05)', border: '1px solid rgba(107, 78, 255, 0.2)', borderRadius: '24px' }}>
              <Typography variant="h6" sx={{ fontWeight: 800, color: '#fff', mb: 2 }}>
                اطلاعات تیکت
              </Typography>

              <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                <Box>
                  <Typography variant="caption" sx={{ color: 'rgba(255,255,255,0.5)', display: 'block', mb: 0.5 }}>
                    توضیحات اولیه
                  </Typography>
                  <Typography variant="body2" sx={{ color: 'rgba(255,255,255,0.8)', lineHeight: 1.6 }}>
                    {mockTicket.description}
                  </Typography>
                </Box>

                <Divider sx={{ bgcolor: 'rgba(107, 78, 255, 0.2)' }} />

                <Box sx={{ display: 'flex', gap: 2 }}>
                  <Box sx={{ flex: 1 }}>
                    <Typography variant="caption" sx={{ color: 'rgba(255,255,255,0.5)', display: 'block', mb: 0.5 }}>
                      تعداد پیام‌ها
                    </Typography>
                    <Typography variant="body1" sx={{ color: '#fff', fontWeight: 600 }}>
                      {ConvertToPersianDigit(messages.length)}
                    </Typography>
                  </Box>
                  <Box sx={{ flex: 1 }}>
                    <Typography variant="caption" sx={{ color: 'rgba(255,255,255,0.5)', display: 'block', mb: 0.5 }}>
                      پاسخ‌های تیم
                    </Typography>
                    <Typography variant="body1" sx={{ color: '#fff', fontWeight: 600 }}>
                      {ConvertToPersianDigit(messages.filter((m) => m.isTeam).length)}
                    </Typography>
                  </Box>
                </Box>
              </Box>
            </Paper>
          </Grid>
        </Grid>

        {/* Snackbar for notifications */}
        <Snackbar open={snackbar.open} autoHideDuration={4000} onClose={() => setSnackbar({ ...snackbar, open: false })} anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}>
          <Alert severity={snackbar.severity} sx={{ width: '100%', bgcolor: '#1a1a2e', color: '#fff' }}>
            {snackbar.message}
          </Alert>
        </Snackbar>
      </Box>
    </ChildrenLayout>
  );
}
