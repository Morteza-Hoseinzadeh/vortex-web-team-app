// app/dashboard/projects/[id]/page.tsx
'use client';

import React, { useState } from 'react';
import { Box, Grid, Typography, Paper, Button, Chip, LinearProgress, Divider, Avatar, TextField, IconButton, Stepper, Step, StepLabel, StepContent, useTheme, useMediaQuery } from '@mui/material';
import { FiArrowRight, FiDownload, FiMessageSquare, FiCheckCircle, FiClock, FiCalendar, FiUsers, FiFileText, FiImage, FiPaperclip, FiSend } from 'react-icons/fi';
import Link from 'next/link';
import ConvertToPersianDigit from '@/utils/functions/convertToPersianDigit';
import ChildrenLayout from '@/components/ChildrenLayout';

// مراحل پروژه
const projectSteps = [
  { label: 'بررسی نیازها', description: 'جلسه آنلاین برای آنالیز و جمع‌آوری نیازمندی‌ها', completed: true, date: '۱۴۰۲/۰۸/۰۵' },
  { label: 'طراحی UI/UX', description: 'طراحی رابط کاربری و تجربه کاربری', completed: true, date: '۱۴۰۲/۰۸/۲۰' },
  { label: 'توسعه فرانت‌اند', description: 'پیاده‌سازی طراحی با React و Next.js', completed: false, date: 'در حال انجام' },
  { label: 'توسعه بک‌اند', description: 'پیاده‌سازی منطق سرور و پایگاه داده', completed: false, date: 'مرحله بعد' },
  { label: 'تست و استقرار', description: 'تست نهایی و راه‌اندازی سایت', completed: false, date: 'مرحله بعد' },
];

// فایل‌های پروژه
const projectFiles = [
  { name: 'طرح_اولیه_سایت.fig', size: '۲.۴ MB', type: 'figma', icon: <FiFileText size={18} /> },
  { name: 'مستندات_نیازمندی‌ها.pdf', size: '۱.۱ MB', type: 'pdf', icon: <FiFileText size={18} /> },
  { name: 'لوگو_ورتکس.png', size: '۰.۸ MB', type: 'image', icon: <FiImage size={18} /> },
];

// نظرات
const comments = [
  { id: 1, author: 'تیم ورتکس', avatar: 'ت', text: 'طراحی صفحه اصلی آماده شده، لطفاً بررسی کنید.', time: '۲ ساعت پیش', isTeam: true },
  { id: 2, author: 'مهدی احمدی', avatar: 'م', text: 'خیلی عالی! فقط رنگ دکمه‌ها رو کمی روشن‌تر کنید.', time: '۱ ساعت پیش', isTeam: false },
];

export default function ProjectDetailPage({ params }: { params: { id: string } }) {
  const theme = useTheme();
  const [newComment, setNewComment] = useState('');
  const [activeStep, setActiveStep] = useState(2);

  const matchMdDown = useMediaQuery(theme.breakpoints.down('md'));

  return (
    <ChildrenLayout>
      <Box sx={{ p: { xs: 2, sm: 3, md: 4 }, mt: 18 }}>
        {/* Header with Back Button */}
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 3, flexWrap: 'wrap' }}>
          <IconButton component={Link} href="/dashboard/projects" sx={{ color: '#fff', bgcolor: 'rgba(107, 78, 255, 0.15)', '&:hover': { bgcolor: 'rgba(107, 78, 255, 0.25)' } }}>
            <FiArrowRight size={20} />
          </IconButton>
          <Box>
            <Typography variant="h4" sx={{ fontWeight: 900, color: '#fff' }}>
              سایت فروشگاهی دیجی‌تک
            </Typography>
            <Typography variant="body2" sx={{ color: 'rgba(255,255,255,0.5)' }}>
              کد پروژه: {ConvertToPersianDigit('PRJ-1402-001')}
            </Typography>
          </Box>
          <Chip label="در حال انجام" icon={<FiClock size={14} style={{ marginRight: '8px', color: '#FF9800' }} />} sx={{ bgcolor: '#FF980020', color: '#FF9800', fontWeight: 600 }} />
        </Box>
        <Grid container spacing={3}>
          {/* Main Content */}
          <Grid size={{ xs: 12, lg: 8 }}>
            {/* Progress Section */}
            <Paper sx={{ p: 3, mb: 3, bgcolor: 'rgba(107, 78, 255, 0.05)', border: '1px solid rgba(107, 78, 255, 0.2)', borderRadius: '24px' }}>
              <Typography variant="h6" sx={{ fontWeight: 800, color: '#fff', mb: 2 }}>
                پیشرفت کلی پروژه
              </Typography>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 3, flexWrap: 'wrap' }}>
                <Box sx={{ flex: 1 }}>
                  <LinearProgress variant="determinate" value={70} sx={{ height: 10, borderRadius: 5, bgcolor: 'rgba(255,255,255,0.1)', '& .MuiLinearProgress-bar': { bgcolor: theme.palette.primary.main, borderRadius: 5 } }} />
                </Box>
                <Typography variant="h5" sx={{ fontWeight: 800, color: theme.palette.primary.light }}>
                  {ConvertToPersianDigit(70)}%
                </Typography>
              </Box>

              {/* Stats */}
              <Grid container spacing={2}>
                <Grid size={{ xs: 6, sm: 3 }}>
                  <Box sx={{ textAlign: 'center' }}>
                    <Typography variant="h4" sx={{ fontWeight: 800, color: '#fff' }}>
                      {ConvertToPersianDigit(15)}
                    </Typography>
                    <Typography variant="caption" sx={{ color: 'rgba(255,255,255,0.5)' }}>
                      روز سپری شده
                    </Typography>
                  </Box>
                </Grid>
                <Grid size={{ xs: 6, sm: 3 }}>
                  <Box sx={{ textAlign: 'center' }}>
                    <Typography variant="h4" sx={{ fontWeight: 800, color: '#fff' }}>
                      {ConvertToPersianDigit(14)}
                    </Typography>
                    <Typography variant="caption" sx={{ color: 'rgba(255,255,255,0.5)' }}>
                      روز باقی مانده
                    </Typography>
                  </Box>
                </Grid>
                <Grid size={{ xs: 6, sm: 3 }}>
                  <Box sx={{ textAlign: 'center' }}>
                    <Typography variant="h4" sx={{ fontWeight: 800, color: '#fff' }}>
                      {ConvertToPersianDigit(8)}
                    </Typography>
                    <Typography variant="caption" sx={{ color: 'rgba(255,255,255,0.5)' }}>
                      فایل ارسالی
                    </Typography>
                  </Box>
                </Grid>
                <Grid size={{ xs: 6, sm: 3 }}>
                  <Box sx={{ textAlign: 'center' }}>
                    <Typography variant="h4" sx={{ fontWeight: 800, color: '#fff' }}>
                      {ConvertToPersianDigit(12)}
                    </Typography>
                    <Typography variant="caption" sx={{ color: 'rgba(255,255,255,0.5)' }}>
                      تیکت پاسخ داده
                    </Typography>
                  </Box>
                </Grid>
              </Grid>
            </Paper>

            {/* Timeline / Steps */}
            <Paper sx={{ p: 3, mb: 3, bgcolor: 'rgba(107, 78, 255, 0.05)', border: '1px solid rgba(107, 78, 255, 0.2)', borderRadius: '24px' }}>
              <Typography variant="h6" sx={{ fontWeight: 800, color: '#fff', mb: 2 }}>
                روند انجام پروژه
              </Typography>
              <Stepper activeStep={activeStep} orientation={matchMdDown ? 'vertical' : 'horizontal'}>
                {projectSteps.map((step, index) => (
                  <Step key={step.label} completed={step.completed}>
                    <StepLabel StepIconProps={{ sx: { color: step.completed ? '#4CAF50' : theme.palette.primary.main } }}>
                      <Typography variant={step?.date === 'در حال انجام' ? 'subtitle1' : 'subtitle2'} sx={{ fontWeight: 700, color: step.completed ? '#4CAF50' : step?.date === 'در حال انجام' ? 'white' : theme.palette.primary.main, marginRight: '8px' }}>
                        {step.label}
                      </Typography>
                    </StepLabel>
                    <StepContent>
                      <Typography variant="body2" sx={{ color: 'rgba(255,255,255,0.6)', mb: 1 }}>
                        {step.description}
                      </Typography>
                      <Typography variant="caption" sx={{ color: 'rgba(255,255,255,0.3)' }}>
                        {step.date}
                      </Typography>
                    </StepContent>
                  </Step>
                ))}
              </Stepper>
            </Paper>

            {/* Comments Section */}
            <Paper sx={{ p: 3, bgcolor: 'rgba(107, 78, 255, 0.05)', border: '1px solid rgba(107, 78, 255, 0.2)', borderRadius: '24px' }}>
              <Typography variant="h6" sx={{ fontWeight: 800, color: '#fff', mb: 2 }}>
                نظرات و بازخوردها
              </Typography>

              {/* Comments List */}
              <Box sx={{ mb: 3, maxHeight: 300, overflowY: 'auto' }}>
                {comments.map((comment) => (
                  <Box key={comment.id} sx={{ display: 'flex', gap: 1.5, mb: 2, p: 1.5, bgcolor: 'rgba(255,255,255,0.02)', borderRadius: '16px' }}>
                    <Avatar sx={{ width: 32, height: 32, bgcolor: comment.isTeam ? theme.palette.primary.main : '#FF9800', fontSize: '0.9rem' }}>{comment.avatar}</Avatar>
                    <Box sx={{ flex: 1 }}>
                      <Typography variant="body2" sx={{ color: '#fff', fontWeight: 600 }}>
                        {comment.author}
                      </Typography>
                      <Typography variant="caption" sx={{ color: 'rgba(255,255,255,0.6)', display: 'block', mb: 0.5 }}>
                        {comment.text}
                      </Typography>
                      <Typography variant="caption" sx={{ color: 'rgba(255,255,255,0.3)' }}>
                        {ConvertToPersianDigit(comment.time)}
                      </Typography>
                    </Box>
                  </Box>
                ))}
              </Box>

              {/* Add Comment */}
              <Box sx={{ display: 'flex', gap: 1.5, alignItems: 'flex-start' }}>
                <Avatar sx={{ width: 36, height: 36, bgcolor: theme.palette.primary.main }}>ش</Avatar>
                <TextField fullWidth multiline rows={2} placeholder="پیام خود را بنویسید..." value={newComment} onChange={(e) => setNewComment(e.target.value)} sx={{ '& .MuiOutlinedInput-root': { color: '#fff', bgcolor: 'rgba(255,255,255,0.05)', borderRadius: '16px', '& fieldset': { borderColor: 'rgba(107, 78, 255, 0.3)' } } }} />
                <IconButton sx={{ bgcolor: theme.palette.primary.main, color: '#fff', '&:hover': { bgcolor: '#7B61FF' } }}>
                  <FiSend size={18} />
                </IconButton>
              </Box>
            </Paper>
          </Grid>

          {/* Sidebar */}
          <Grid size={{ xs: 12, lg: 4 }}>
            {/* Team */}
            <Paper sx={{ p: 3, mb: 3, bgcolor: 'rgba(107, 78, 255, 0.05)', border: '1px solid rgba(107, 78, 255, 0.2)', borderRadius: '24px' }}>
              <Typography variant="h6" sx={{ fontWeight: 800, color: '#fff', mb: 2 }}>
                تیم پروژه
              </Typography>
              <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5 }}>
                  <Avatar sx={{ bgcolor: theme.palette.primary.main, width: 40, height: 40 }}>م</Avatar>
                  <Box>
                    <Typography variant="body2" sx={{ color: '#fff', fontWeight: 600 }}>
                      محمد رضایی
                    </Typography>
                    <Typography variant="caption" sx={{ color: 'rgba(255,255,255,0.5)' }}>
                      مدیر پروژه
                    </Typography>
                  </Box>
                </Box>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5 }}>
                  <Avatar sx={{ bgcolor: '#FF9800', width: 40, height: 40 }}>ز</Avatar>
                  <Box>
                    <Typography variant="body2" sx={{ color: '#fff', fontWeight: 600 }}>
                      زهرا کریمی
                    </Typography>
                    <Typography variant="caption" sx={{ color: 'rgba(255,255,255,0.5)' }}>
                      طراح UI/UX
                    </Typography>
                  </Box>
                </Box>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5 }}>
                  <Avatar sx={{ bgcolor: '#4CAF50', width: 40, height: 40 }}>ع</Avatar>
                  <Box>
                    <Typography variant="body2" sx={{ color: '#fff', fontWeight: 600 }}>
                      علی نادری
                    </Typography>
                    <Typography variant="caption" sx={{ color: 'rgba(255,255,255,0.5)' }}>
                      توسعه‌دهنده فرانت‌اند
                    </Typography>
                  </Box>
                </Box>
              </Box>
            </Paper>

            {/* Files */}
            <Paper sx={{ p: 3, mb: 3, bgcolor: 'rgba(107, 78, 255, 0.05)', border: '1px solid rgba(107, 78, 255, 0.2)', borderRadius: '24px' }}>
              <Typography variant="h6" sx={{ fontWeight: 800, color: '#fff', mb: 2 }}>
                فایل‌های پروژه
              </Typography>
              <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1.5 }}>
                {projectFiles.map((file, idx) => (
                  <Box key={idx} sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', p: 1.5, bgcolor: 'rgba(255,255,255,0.03)', borderRadius: '12px' }}>
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5 }}>
                      {file.icon}
                      <Box>
                        <Typography variant="body2" sx={{ color: '#fff' }}>
                          {file.name}
                        </Typography>
                        <Typography variant="caption" sx={{ color: 'rgba(255,255,255,0.3)' }}>
                          {file.size}
                        </Typography>
                      </Box>
                    </Box>
                    <IconButton size="small" sx={{ color: theme.palette.primary.main }}>
                      <FiDownload size={16} />
                    </IconButton>
                  </Box>
                ))}
              </Box>
              <Button fullWidth variant="outlined" startIcon={<FiPaperclip style={{ marginLeft: '8px' }} />} sx={{ mt: 2, borderColor: 'rgba(107, 78, 255, 0.5)', color: theme.palette.primary.main }}>
                آپلود فایل جدید
              </Button>
            </Paper>

            {/* Support Button */}
            <Button fullWidth variant="contained" startIcon={<FiMessageSquare style={{ marginLeft: '8px' }} />} component={Link} href="/dashboard/tickets/new" sx={{ bgcolor: theme.palette.primary.main, py: 1.5, borderRadius: '40px', fontWeight: 700, '&:hover': { bgcolor: '#7B61FF' } }}>
              درخواست پشتیبانی
            </Button>
          </Grid>
        </Grid>
      </Box>
    </ChildrenLayout>
  );
}
