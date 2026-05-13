// app/dashboard/projects/page.tsx
'use client';

import React, { useState } from 'react';
import { Box, Grid, Typography, Paper, Button, Chip, TextField, InputAdornment, MenuItem, FormControl, Select, Pagination, Stack, useTheme } from '@mui/material';
import { FiSearch, FiFilter, FiGrid, FiList, FiClock, FiCheckCircle, FiAlertCircle, FiArrowLeft, FiDownload, FiEye } from 'react-icons/fi';
import Link from 'next/link';
import ConvertToPersianDigit from '@/utils/functions/convertToPersianDigit';
import ChildrenLayout from '@/components/ChildrenLayout';

// کامپوننت کارت پروژه (نمایش گرید)
function ProjectGridCard({ project }: any) {
  const theme = useTheme();

  const getStatusConfig = (status: string) => {
    const configs = {
      in_progress: { color: '#FF9800', label: 'در حال انجام', icon: <FiClock size={14} style={{ color: '#FF9800', marginRight: '8px' }} /> },
      review: { color: '#2196F3', label: 'در حال بررسی', icon: <FiAlertCircle size={14} style={{ color: '#2196F3', marginRight: '8px' }} /> },
      completed: { color: '#4CAF50', label: 'تکمیل شده', icon: <FiCheckCircle size={14} style={{ color: '#4CAF50', marginRight: '8px' }} /> },
      pending: { color: '#9E9E9E', label: 'در انتظار', icon: <FiClock size={14} style={{ color: '#9E9E9E', marginRight: '8px' }} /> },
    };
    return configs[status as keyof typeof configs] || configs.pending;
  };

  const statusConfig = getStatusConfig(project.status);

  return (
    <Paper sx={{ p: 2.5, bgcolor: 'rgba(107, 78, 255, 0.06)', border: '1px solid rgba(107, 78, 255, 0.2)', borderRadius: '20px', transition: 'all 0.3s ease', '&:hover': { transform: 'translateY(-4px)', borderColor: 'rgba(107, 78, 255, 0.5)', boxShadow: '0 8px 28px rgba(107, 78, 255, 0.15)' } }}>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', mb: 2 }}>
        <Box>
          <Typography variant="h6" sx={{ color: '#fff', fontWeight: 700, mb: 0.5 }}>
            {project.title}
          </Typography>
          <Typography variant="caption" sx={{ color: 'rgba(255,255,255,0.4)' }}>
            کد: {ConvertToPersianDigit(project.code)}
          </Typography>
        </Box>
        <Chip label={statusConfig.label} size="small" icon={statusConfig.icon} sx={{ bgcolor: `${statusConfig.color}20`, color: statusConfig.color, fontWeight: 600, fontSize: '0.7rem', borderRadius: '12px' }} />
      </Box>

      <Box sx={{ mb: 2 }}>
        <Typography variant="body2" sx={{ color: 'rgba(255,255,255,0.6)', mb: 1 }}>
          {project.description}
        </Typography>
        <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap', mb: 1.5 }}>
          <Typography variant="caption" sx={{ color: 'rgba(255,255,255,0.4)' }}>
            شروع: {ConvertToPersianDigit(project.startDate)}
          </Typography>
          <Typography variant="caption" sx={{ color: 'rgba(255,255,255,0.4)' }}>
            تحویل: {ConvertToPersianDigit(project.endDate)}
          </Typography>
        </Box>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
          <Typography variant="caption" sx={{ color: 'rgba(255,255,255,0.5)' }}>
            پیشرفت:
          </Typography>
          <Box sx={{ flex: 1, bgcolor: 'rgba(255,255,255,0.1)', borderRadius: '10px', height: 6 }}>
            <Box sx={{ width: `${project.progress}%`, bgcolor: theme.palette.primary.main, borderRadius: '10px', height: 6 }} />
          </Box>
          <Typography variant="caption" sx={{ color: '#fff', fontWeight: 600 }}>
            {ConvertToPersianDigit(project.progress)}%
          </Typography>
        </Box>
      </Box>

      <Box sx={{ display: 'flex', gap: 1.5, mt: 2 }}>
        <Button size="small" component={Link} href={`/dashboard/projects/${project.id}`} startIcon={<FiEye size={14} style={{ marginLeft: '8px' }} />} sx={{ flex: 1, bgcolor: 'rgba(107, 78, 255, 0.15)', color: theme.palette.primary.main, borderRadius: '12px', '&:hover': { bgcolor: 'rgba(107, 78, 255, 0.25)' } }}>
          مشاهده
        </Button>
        <Button size="small" startIcon={<FiDownload size={14} style={{ marginLeft: '8px' }} />} sx={{ flex: 1, bgcolor: 'rgba(255,255,255,0.05)', color: 'rgba(255,255,255,0.7)', borderRadius: '12px', '&:hover': { bgcolor: 'rgba(255,255,255,0.1)' } }}>
          فایل‌ها
        </Button>
      </Box>
    </Paper>
  );
}

// دیتای نمونه پروژه‌ها
const mockProjects = [
  {
    id: 1,
    title: 'سایت فروشگاهی دیجی‌تک',
    code: 'PRJ-1402-001',
    description: 'طراحی فروشگاه آنلاین محصولات دیجیتال با درگاه پرداخت',
    status: 'in_progress',
    progress: 70,
    startDate: '۱۴۰۲/۰۸/۰۱',
    endDate: '۱۴۰۲/۱۰/۱۵',
  },
  {
    id: 2,
    title: 'سایت شرکتی ورتکس',
    code: 'PRJ-1402-002',
    description: 'طراحی سایت شرکتی با معرفی خدمات و نمونه کارها',
    status: 'review',
    progress: 95,
    startDate: '۱۴۰۲/۰۷/۱۵',
    endDate: '۱۴۰۲/۰۹/۲۰',
  },
  {
    id: 3,
    title: 'پنل مدیریتی اختصاصی',
    code: 'PRJ-1402-003',
    description: 'طراحی داشبورد مدیریتی با امکانات پیشرفته',
    status: 'completed',
    progress: 100,
    startDate: '۱۴۰۲/۰۶/۱۰',
    endDate: '۱۴۰۲/۰۸/۲۵',
  },
  {
    id: 4,
    title: 'سایت رزومه شخصی',
    code: 'PRJ-1402-004',
    description: 'طراحی سایت شخصی و رزومه آنلاین حرفه‌ای',
    status: 'pending',
    progress: 30,
    startDate: '۱۴۰۲/۰۹/۰۵',
    endDate: '۱۴۰۲/۱۰/۱۰',
  },
];

export default function ProjectsPage() {
  const theme = useTheme();
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState('all');
  const [page, setPage] = useState(1);

  const filteredProjects = mockProjects.filter((project) => {
    const matchesSearch = project.title.includes(searchTerm);
    const matchesStatus = statusFilter === 'all' || project.status === statusFilter;
    return matchesSearch && matchesStatus;
  });

  return (
    <ChildrenLayout>
      <Box sx={{ p: { xs: 2, sm: 3, md: 4 }, mt: 18 }}>
        {/* Header */}
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 2, mb: 3 }}>
          <Typography variant="h4" sx={{ fontWeight: 900, color: '#fff' }}>
            پروژه‌های من
          </Typography>
        </Box>
        {/* Filters */}
        <Paper sx={{ p: 2, mb: 3, bgcolor: 'rgba(107, 78, 255, 0.05)', border: '1px solid rgba(107, 78, 255, 0.2)', borderRadius: '20px', display: 'flex', flexWrap: 'wrap', gap: 2, alignItems: 'center' }}>
          <TextField
            placeholder="جستجوی پروژه..."
            size="small"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <FiSearch size={18} color="rgba(255,255,255,0.5)" />
                </InputAdornment>
              ),
              sx: { color: '#fff', bgcolor: 'rgba(255,255,255,0.05)', borderRadius: '12px' },
            }}
            sx={{ flex: { xs: '1 1 200px', sm: '1 1 300px' } }}
          />

          <FormControl size="small" sx={{ minWidth: 150 }}>
            <Select value={statusFilter} onChange={(e) => setStatusFilter(e.target.value)} displayEmpty sx={{ color: '#fff', bgcolor: 'rgba(255,255,255,0.05)', borderRadius: '12px' }}>
              <MenuItem value="all">همه وضعیت‌ها</MenuItem>
              <MenuItem value="in_progress">در حال انجام</MenuItem>
              <MenuItem value="review">در حال بررسی</MenuItem>
              <MenuItem value="completed">تکمیل شده</MenuItem>
              <MenuItem value="pending">در انتظار</MenuItem>
            </Select>
          </FormControl>

          <Box sx={{ display: 'flex', gap: 1, mr: 'auto' }}>
            <Button size="small" variant={viewMode === 'grid' ? 'contained' : 'outlined'} onClick={() => setViewMode('grid')} sx={{ minWidth: 40, p: 1 }}>
              <FiGrid size={16} />
            </Button>
            <Button size="small" variant={viewMode === 'list' ? 'contained' : 'outlined'} onClick={() => setViewMode('list')} sx={{ minWidth: 40, p: 1 }}>
              <FiList size={16} />
            </Button>
          </Box>
        </Paper>
        {/* Projects List/Grid */}
        <Grid container spacing={2.5}>
          {filteredProjects.map((project) => (
            <Grid size={{ xs: 12, sm: viewMode === 'grid' ? 6 : 12, lg: viewMode === 'grid' ? 4 : 12 }} key={project.id}>
              <ProjectGridCard project={project} />
            </Grid>
          ))}
        </Grid>

        {/* No Results */}
        {filteredProjects.length === 0 && (
          <Box sx={{ textAlign: 'center', py: 8 }}>
            <Typography variant="h6" sx={{ color: 'rgba(255,255,255,0.5)' }}>
              پروژه‌ای یافت نشد
            </Typography>
          </Box>
        )}
        {/* Pagination */}
        {filteredProjects.length > 0 && (
          <Stack spacing={2} sx={{ mt: 4, alignItems: 'center' }}>
            <Pagination count={Math.ceil(filteredProjects.length / 6)} page={page} onChange={(_, value) => setPage(value)} sx={{ '& .MuiPaginationItem-root': { color: 'rgba(255,255,255,0.7)', '&.Mui-selected': { bgcolor: theme.palette.primary.main, color: '#fff' } } }} />
          </Stack>
        )}
      </Box>
    </ChildrenLayout>
  );
}
