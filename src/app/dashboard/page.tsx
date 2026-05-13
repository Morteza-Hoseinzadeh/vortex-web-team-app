// app/dashboard/page.tsx
'use client';

import React, { useState, useEffect } from 'react';
import { Box, Grid, Typography, Paper, LinearProgress, Avatar, Chip, Button, Card, CardContent, IconButton, Tabs, Tab, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, useTheme } from '@mui/material';
import { FiBriefcase, FiMessageSquare, FiCheckCircle, FiClock, FiArrowLeft, FiTrendingUp, FiUsers, FiCalendar, FiDownload, FiEye, FiThumbsUp, FiStar, FiAward, FiMessageCircle } from 'react-icons/fi';
import ConvertToPersianDigit from '@/utils/functions/convertToPersianDigit';
import Link from 'next/link';
import ChildrenLayout from '@/components/ChildrenLayout';

// کامپوننت کارت آمار
function StatsCard({ title, value, icon, color, progress, subtitle }: any) {
  const theme = useTheme();

  return (
    <Paper
      sx={{
        p: 3,
        bgcolor: 'rgba(107, 78, 255, 0.08)',
        border: '1px solid rgba(107, 78, 255, 0.25)',
        borderRadius: '24px',
        transition: 'all 0.3s ease',
        position: 'relative',
        overflow: 'hidden',
        '&:hover': { transform: 'translateY(-5px)', bgcolor: 'rgba(107, 78, 255, 0.12)', boxShadow: '0 8px 32px rgba(107, 78, 255, 0.15)', borderColor: 'rgba(107, 78, 255, 0.5)' },
        '&::before': { content: '""', position: 'absolute', top: 0, right: 0, width: '100px', height: '100px', background: `radial-gradient(circle, ${color}15 0%, transparent 70%)`, borderRadius: '50%', transform: 'translate(30%, -30%)' },
      }}
    >
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', mb: 2, position: 'relative', zIndex: 1 }}>
        <Box sx={{ p: 1.5, borderRadius: '16px', bgcolor: `${color}20`, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>{icon}</Box>
        <Box sx={{ textAlign: 'left' }}>
          <Typography variant="h3" sx={{ fontWeight: 900, color: '#fff', lineHeight: 1 }}>
            {ConvertToPersianDigit(value)}
          </Typography>
          {subtitle && (
            <Typography variant="caption" sx={{ color: 'rgba(255,255,255,0.5)' }}>
              {subtitle}
            </Typography>
          )}
        </Box>
      </Box>
      <Typography variant="body2" sx={{ color: 'rgba(255,255,255,0.7)', mb: 1, position: 'relative', zIndex: 1 }}>
        {title}
      </Typography>
      {progress !== undefined && <LinearProgress variant="determinate" value={progress} sx={{ height: 6, borderRadius: 3, bgcolor: 'rgba(255,255,255,0.1)', '& .MuiLinearProgress-bar': { bgcolor: color, borderRadius: 3 } }} />}
    </Paper>
  );
}

// کامپوننت پروژه
function ProjectCard({ project }: any) {
  const theme = useTheme();

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'in_progress':
        return '#FF9800';
      case 'review':
        return '#2196F3';
      case 'completed':
        return '#4CAF50';
      case 'pending':
        return '#9E9E9E';
      default:
        return '#9E9E9E';
    }
  };

  const getStatusText = (status: string) => {
    switch (status) {
      case 'in_progress':
        return 'در حال انجام';
      case 'review':
        return 'در حال بررسی';
      case 'completed':
        return 'تکمیل شده';
      case 'pending':
        return 'در انتظار تایید';
      default:
        return 'نامشخص';
    }
  };

  return (
    <Card sx={{ bgcolor: 'rgba(107, 78, 255, 0.06)', border: '1px solid rgba(107, 78, 255, 0.2)', borderRadius: '20px', transition: 'all 0.3s ease', '&:hover': { transform: 'translateY(-3px)', borderColor: 'rgba(107, 78, 255, 0.5)', boxShadow: '0 8px 24px rgba(107, 78, 255, 0.15)' } }}>
      <CardContent>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', mb: 2 }}>
          <Box>
            <Typography variant="h6" sx={{ color: '#fff', fontWeight: 700, mb: 0.5 }}>
              {project.title}
            </Typography>
            <Typography variant="caption" sx={{ color: 'rgba(255,255,255,0.4)' }}>
              کد پروژه: {ConvertToPersianDigit(project.code)}
            </Typography>
          </Box>
          <Chip label={getStatusText(project.status)} size="small" sx={{ bgcolor: `${getStatusColor(project.status)}20`, color: getStatusColor(project.status), fontWeight: 600, fontSize: '0.7rem', borderRadius: '12px' }} />
        </Box>

        <Box sx={{ mb: 2 }}>
          <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1 }}>
            <Typography variant="caption" sx={{ color: 'rgba(255,255,255,0.5)' }}>
              پیشرفت پروژه
            </Typography>
            <Typography variant="caption" sx={{ color: '#fff', fontWeight: 600 }}>
              {ConvertToPersianDigit(project.progress)}%
            </Typography>
          </Box>
          <LinearProgress variant="determinate" value={project.progress} sx={{ height: 6, borderRadius: 3, bgcolor: 'rgba(255,255,255,0.1)', '& .MuiLinearProgress-bar': { bgcolor: theme.palette.primary.main, borderRadius: 3 } }} />
        </Box>

        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mt: 2 }}>
          <Box sx={{ display: 'flex', gap: 1.5 }}>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
              <FiClock size={12} color="rgba(255,255,255,0.4)" />
              <Typography variant="caption" sx={{ color: 'rgba(255,255,255,0.4)' }}>
                {ConvertToPersianDigit(project.remainingDays)} روز مانده
              </Typography>
            </Box>
          </Box>
          <Button size="small" component={Link} href={`/dashboard/projects/${project.id}`} sx={{ color: theme.palette.primary.main, fontWeight: 600, fontSize: '0.75rem', '&:hover': { bgcolor: 'rgba(107, 78, 255, 0.1)' } }}>
            مشاهده جزئیات
            <FiArrowLeft size={12} style={{ marginRight: 4 }} />
          </Button>
        </Box>
      </CardContent>
    </Card>
  );
}

// دیتای نمونه
const mockUserData = {
  name: 'مهدی احمدی',
  avatar: '/assets/avatar/default.png',
  memberSince: '1402',
  level: 'حرفه‌ای',
  levelProgress: 75,
  projectsCount: 5,
  completedCount: 3,
  activeCount: 2,
  ticketsCount: 1,
  satisfactionRate: 98,
  totalSpent: '۲۵۰,۰۰۰,۰۰۰',
  recentProjects: [
    { id: 1, title: 'سایت فروشگاهی دیجی‌تک', code: 'PRJ-1402-001', status: 'in_progress', progress: 70, remainingDays: 14 },
    { id: 2, title: 'سایت شرکتی ورتکس', code: 'PRJ-1402-002', status: 'review', progress: 95, remainingDays: 5 },
    { id: 3, title: 'پنل مدیریتی اختصاصی', code: 'PRJ-1402-003', status: 'completed', progress: 100, remainingDays: 0 },
  ],
  achievements: [
    { title: 'اولین پروژه', icon: <FiStar size={20} />, date: '۱۴۰۲' },
    { title: 'پروژه طلایی', icon: <FiAward size={20} />, date: '۱۴۰۳' },
  ],
};

export default function UserProfileDashboard() {
  const theme = useTheme();
  const [greeting, setGreeting] = useState('');

  useEffect(() => {
    const hour = new Date().getHours();
    if (hour < 12) setGreeting('صبح بخیر');
    else if (hour < 18) setGreeting('ظهر بخیر');
    else setGreeting('عصر بخیر');
  }, []);

  return (
    <ChildrenLayout>
      <Box sx={{ p: { xs: 2, sm: 3, md: 4 }, mt: 18 }}>
        {/* Header Section with Welcome */}
        <Box sx={{ mb: { xs: 3, sm: 4, md: 5 }, p: { xs: 2.5, sm: 3, md: 4 }, background: 'linear-gradient(135deg, rgba(107, 78, 255, 0.15) 0%, rgba(168, 85, 247, 0.08) 100%)', borderRadius: '28px', border: '1px solid rgba(107, 78, 255, 0.3)', position: 'relative', overflow: 'hidden' }}>
          <Box sx={{ display: 'flex', flexDirection: { xs: 'column', sm: 'row' }, justifyContent: 'space-between', alignItems: { xs: 'flex-start', sm: 'center' }, gap: 2 }}>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 2.5 }}>
              <Avatar sx={{ width: { xs: 64, sm: 80 }, height: { xs: 64, sm: 80 }, bgcolor: theme.palette.primary.main, border: '3px solid rgba(107, 78, 255, 0.5)' }}>
                <Typography variant="h3" sx={{ fontWeight: 800 }}>
                  م
                </Typography>
              </Avatar>
              <Box>
                <Typography variant="body2" sx={{ color: theme.palette.primary.light, mb: 0.5 }}>
                  {greeting}
                </Typography>
                <Typography variant="h4" sx={{ fontWeight: 900, color: '#fff', mb: 0.5 }}>
                  {mockUserData.name}
                </Typography>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, flexWrap: 'wrap' }}>
                  <Chip label={`عضو از ${ConvertToPersianDigit(mockUserData.memberSince)}`} size="small" sx={{ bgcolor: 'rgba(107, 78, 255, 0.2)', color: 'rgba(255,255,255,0.7)' }} />
                  <Chip label={`سطح ${mockUserData.level}`} size="small" sx={{ bgcolor: 'rgba(76, 175, 80, 0.2)', color: '#4CAF50' }} />
                </Box>
              </Box>
            </Box>
            <Box display={'flex'} alignItems={'center'} gap={2}>
              <Button variant="contained" startIcon={<FiMessageCircle style={{ marginLeft: '8px' }} />} component={Link} href="/dashboard/tickets" sx={{ bgcolor: theme.palette.primary.main, borderRadius: '40px', px: 3, py: 1, fontWeight: 700, '&:hover': { bgcolor: '#7B61FF' } }}>
                مشاهده تیکت ها
              </Button>
              <Button variant="contained" startIcon={<FiMessageSquare style={{ marginLeft: '8px' }} />} component={Link} href="/dashboard/tickets/new" sx={{ bgcolor: theme.palette.primary.main, borderRadius: '40px', px: 3, py: 1, fontWeight: 700, '&:hover': { bgcolor: '#7B61FF' } }}>
                تیکت جدید
              </Button>
            </Box>
          </Box>

          {/* Level Progress */}
          <Box sx={{ mt: 3 }}>
            <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1 }}>
              <Typography variant="caption" sx={{ color: 'rgba(255,255,255,0.5)' }}>
                پیشرفت سطح {mockUserData.level}
              </Typography>
              <Typography variant="caption" sx={{ color: theme.palette.primary.light }}>
                {ConvertToPersianDigit(mockUserData.levelProgress)}%
              </Typography>
            </Box>
            <LinearProgress variant="determinate" value={mockUserData.levelProgress} sx={{ height: 8, borderRadius: 4, bgcolor: 'rgba(255,255,255,0.1)', '& .MuiLinearProgress-bar': { bgcolor: theme.palette.primary.main, borderRadius: 4 } }} />
          </Box>
        </Box>
        {/* Stats Cards */}
        <Grid container spacing={{ xs: 2, sm: 3 }} sx={{ mb: { xs: 3, sm: 4 } }}>
          <Grid size={{ xs: 12, sm: 6, md: 3 }}>
            <StatsCard title="پروژه‌های فعال" value={mockUserData.activeCount} icon={<FiBriefcase size={28} color={theme.palette.primary.main} />} color={theme.palette.primary.main} />
          </Grid>
          <Grid size={{ xs: 12, sm: 6, md: 3 }}>
            <StatsCard title="پروژه‌های تکمیل شده" value={mockUserData.completedCount} icon={<FiCheckCircle size={28} color="#4CAF50" />} color="#4CAF50" />
          </Grid>
          <Grid size={{ xs: 12, sm: 6, md: 3 }}>
            <StatsCard title="تیکت‌های پشتیبانی" value={mockUserData.ticketsCount} icon={<FiMessageSquare size={28} color="#FF9800" />} color="#FF9800" />
          </Grid>
          <Grid size={{ xs: 12, sm: 6, md: 3 }}>
            <StatsCard title="رضایت مشتریان" value={`${mockUserData.satisfactionRate}%`} icon={<FiThumbsUp size={28} color="#A855F7" />} color="#A855F7" />
          </Grid>
        </Grid>
        {/* Recent Projects */}
        <Box sx={{ mb: { xs: 3, sm: 4 } }}>
          <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 3 }}>
            <Typography variant="h5" sx={{ fontWeight: 800, color: '#fff' }}>
              پروژه‌های اخیر
            </Typography>
            <Button component={Link} href="/dashboard/projects" sx={{ color: theme.palette.primary.main, fontWeight: 600 }}>
              مشاهده همه
              <FiArrowLeft size={16} style={{ marginRight: 4 }} />
            </Button>
          </Box>
          <Grid container spacing={{ xs: 2, sm: 3 }}>
            {mockUserData.recentProjects.map((project) => (
              <Grid size={{ xs: 12, md: 6 }} key={project.id}>
                <ProjectCard project={project} />
              </Grid>
            ))}
          </Grid>
        </Box>
        {/* Bottom Section: Activities & Achievements */}
        <Grid container spacing={{ xs: 2, sm: 3 }}>
          {/* Recent Activities */}
          <Grid size={{ xs: 12, md: 7 }}>
            <Paper sx={{ p: { xs: 2, sm: 3 }, bgcolor: 'rgba(107, 78, 255, 0.05)', border: '1px solid rgba(107, 78, 255, 0.2)', borderRadius: '24px' }}>
              <Typography variant="h6" sx={{ fontWeight: 800, color: '#fff', mb: 2 }}>
                آخرین فعالیت‌ها
              </Typography>
              <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                {[
                  { title: 'مرحله دوم طراحی', project: 'سایت فروشگاهی دیجی‌تک', time: '۲ ساعت پیش', status: 'completed' },
                  { title: 'ارسال فایل‌های پروژه', project: 'سایت شرکتی ورتکس', time: '۵ ساعت پیش', status: 'pending' },
                  { title: 'پاسخ به تیکت پشتیبانی', project: 'درخواست تغییرات', time: '۱ روز پیش', status: 'completed' },
                  { title: 'جلسه آنلاین مشاوره', project: 'پروژه جدید', time: '۲ روز پیش', status: 'completed' },
                ].map((activity, idx) => (
                  <Box key={idx} sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: 1.5, p: 1.5, bgcolor: 'rgba(255,255,255,0.02)', borderRadius: '16px', border: '1px solid rgba(107, 78, 255, 0.1)' }}>
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5 }}>
                      <Box sx={{ width: 8, height: 8, borderRadius: '50%', bgcolor: activity.status === 'completed' ? '#4CAF50' : '#FF9800' }} />
                      <Box>
                        <Typography variant="body2" sx={{ color: '#fff', fontWeight: 600 }}>
                          {activity.title}
                        </Typography>
                        <Typography variant="caption" sx={{ color: 'rgba(255,255,255,0.4)' }}>
                          {activity.project}
                        </Typography>
                      </Box>
                    </Box>
                    <Typography variant="caption" sx={{ color: 'rgba(255,255,255,0.3)' }}>
                      {ConvertToPersianDigit(activity.time)}
                    </Typography>
                  </Box>
                ))}
              </Box>
            </Paper>
          </Grid>

          {/* Achievements & Stats */}
          <Grid size={{ xs: 12, md: 5 }}>
            <Paper sx={{ p: { xs: 2, sm: 3 }, bgcolor: 'rgba(107, 78, 255, 0.05)', border: '1px solid rgba(107, 78, 255, 0.2)', borderRadius: '24px', height: '100%' }}>
              <Typography variant="h6" sx={{ fontWeight: 800, color: '#fff', mb: 2 }}>
                دستاوردها
              </Typography>
              <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2, mb: 3 }}>
                {mockUserData.achievements.map((item, idx) => (
                  <Box key={idx} sx={{ display: 'flex', alignItems: 'center', gap: 2, p: 1.5, bgcolor: 'rgba(107, 78, 255, 0.1)', borderRadius: '16px' }}>
                    <Box sx={{ color: theme.palette.primary.main }}>{item.icon}</Box>
                    <Box>
                      <Typography variant="body2" sx={{ color: '#fff', fontWeight: 600 }}>
                        {item.title}
                      </Typography>
                      <Typography variant="caption" sx={{ color: 'rgba(255,255,255,0.4)' }}>
                        اخذ شده در {ConvertToPersianDigit(item.date)}
                      </Typography>
                    </Box>
                  </Box>
                ))}
              </Box>

              <Box sx={{ mt: 2, pt: 2, borderTop: '1px solid rgba(107, 78, 255, 0.2)' }}>
                <Typography variant="body2" sx={{ color: 'rgba(255,255,255,0.5)', mb: 1 }}>
                  مجموع هزینه‌های پروژه
                </Typography>
                <Typography variant="h5" sx={{ fontWeight: 900, color: theme.palette.primary.light }}>
                  {mockUserData.totalSpent} تومان
                </Typography>
              </Box>
            </Paper>
          </Grid>
        </Grid>
      </Box>
    </ChildrenLayout>
  );
}
