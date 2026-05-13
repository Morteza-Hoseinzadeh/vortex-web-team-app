// app/dashboard/tickets/page.tsx
'use client';

import React, { useState } from 'react';
import { Box, Typography, Paper, Button, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Chip, TextField, InputAdornment, MenuItem, Select, FormControl, Pagination, Stack, useTheme } from '@mui/material';
import { FiSearch, FiPlus, FiMessageSquare, FiCheckCircle, FiClock, FiAlertCircle } from 'react-icons/fi';
import Link from 'next/link';
import ConvertToPersianDigit from '@/utils/functions/convertToPersianDigit';
import ChildrenLayout from '@/components/ChildrenLayout';

const mockTickets = [
  { id: 1, title: 'مشکل در لاگین پنل ادمین', status: 'open', priority: 'high', date: '۱۴۰۲/۰۹/۱۰', lastUpdate: '۲ ساعت پیش', category: 'فنی' },
  { id: 2, title: 'درخواست تغییر لوگو', status: 'in_progress', priority: 'medium', date: '۱۴۰۲/۰۹/۰۸', lastUpdate: '۱ روز پیش', category: 'طراحی' },
  { id: 3, title: 'سوال درباره افزونه جدید', status: 'closed', priority: 'low', date: '۱۴۰۲/۰۹/۰۵', lastUpdate: '۳ روز پیش', category: 'پشتیبانی' },
  { id: 4, title: 'گزارش باگ در صفحه محصولات', status: 'open', priority: 'high', date: '۱۴۰۲/۰۹/۱۲', lastUpdate: '۳۰ دقیقه پیش', category: 'فنی' },
];

const getStatusConfig = (status: string) => {
  const configs = {
    open: { color: '#F44336', label: 'باز', icon: <FiAlertCircle size={14} style={{ color: '#F44336', margin: '0 8px' }} /> },
    in_progress: { color: '#FF9800', label: 'در حال بررسی', icon: <FiClock size={14} style={{ color: '#FF9800', margin: '0 8px' }} /> },
    closed: { color: '#4CAF50', label: 'بسته شده', icon: <FiCheckCircle size={14} style={{ color: '#4CAF50', margin: '0 8px' }} /> },
  };
  return configs[status as keyof typeof configs] || configs.open;
};

const getPriorityConfig = (priority: string) => {
  const configs = {
    high: { color: '#F44336', label: 'بالا' },
    medium: { color: '#FF9800', label: 'متوسط' },
    low: { color: '#4CAF50', label: 'پایین' },
  };
  return configs[priority as keyof typeof configs] || configs.medium;
};

export default function TicketsPage() {
  const theme = useTheme();
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState('all');

  const filteredTickets = mockTickets.filter((ticket) => {
    const matchesSearch = ticket.title.includes(searchTerm);
    const matchesStatus = statusFilter === 'all' || ticket.status === statusFilter;
    return matchesSearch && matchesStatus;
  });

  return (
    <ChildrenLayout>
      <Box sx={{ p: { xs: 2, sm: 3, md: 4 }, mt: 18 }}>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 2, mb: 3 }}>
          <Typography variant="h4" sx={{ fontWeight: 900, color: '#fff' }}>
            تیکت‌های پشتیبانی
          </Typography>
          <Button variant="contained" component={Link} href="/dashboard/tickets/new" startIcon={<FiPlus style={{ marginLeft: '8px' }} />} sx={{ bgcolor: theme.palette.primary.main, borderRadius: '40px', px: 3, fontWeight: 700, '&:hover': { bgcolor: '#7B61FF' } }}>
            تیکت جدید
          </Button>
        </Box>
        <Paper sx={{ p: 2, mb: 3, bgcolor: 'rgba(107, 78, 255, 0.05)', border: '1px solid rgba(107, 78, 255, 0.2)', borderRadius: '20px', display: 'flex', flexWrap: 'wrap', gap: 2 }}>
          <TextField
            placeholder="جستجوی تیکت..."
            size="small"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <FiSearch size={18} color="rgba(255,255,255,0.5)" />{' '}
                </InputAdornment>
              ),
              sx: { color: '#fff', bgcolor: 'rgba(255,255,255,0.05)', borderRadius: '12px', minWidth: 250 },
            }}
          />
          <FormControl size="small" sx={{ minWidth: 150 }}>
            <Select value={statusFilter} onChange={(e) => setStatusFilter(e.target.value)} displayEmpty sx={{ color: '#fff', bgcolor: 'rgba(255,255,255,0.05)', borderRadius: '12px' }}>
              <MenuItem value="all">همه تیکت‌ها</MenuItem>
              <MenuItem value="open">باز</MenuItem>
              <MenuItem value="in_progress">در حال بررسی</MenuItem>
              <MenuItem value="closed">بسته شده</MenuItem>
            </Select>
          </FormControl>
        </Paper>
        <TableContainer component={Paper} sx={{ bgcolor: 'rgba(107, 78, 255, 0.05)', borderRadius: '20px', overflowX: 'auto' }}>
          <Table>
            <TableHead>
              <TableRow sx={{ bgcolor: 'rgba(107, 78, 255, 0.15)' }}>
                <TableCell sx={{ color: '#fff', fontWeight: 700 }}>عنوان</TableCell>
                <TableCell sx={{ color: '#fff', fontWeight: 700 }}>دسته‌بندی</TableCell>
                <TableCell sx={{ color: '#fff', fontWeight: 700 }}>وضعیت</TableCell>
                <TableCell sx={{ color: '#fff', fontWeight: 700 }}>اولویت</TableCell>
                <TableCell sx={{ color: '#fff', fontWeight: 700 }}>تاریخ</TableCell>
                <TableCell sx={{ color: '#fff', fontWeight: 700 }}>آخرین بروزرسانی</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {filteredTickets.map((ticket) => {
                const statusConfig = getStatusConfig(ticket.status);
                const priorityConfig = getPriorityConfig(ticket.priority);
                return (
                  <TableRow key={ticket.id} component={Link} href={`/dashboard/tickets/${ticket.id}`} sx={{ cursor: 'pointer', '&:hover': { bgcolor: 'rgba(107, 78, 255, 0.1)' }, textDecoration: 'none' }}>
                    <TableCell sx={{ color: '#fff', fontWeight: 600 }}>{ticket.title}</TableCell>
                    <TableCell>
                      <Chip label={ticket.category} size="small" sx={{ bgcolor: 'rgba(107, 78, 255, 0.2)', color: theme.palette.primary.main }} />
                    </TableCell>
                    <TableCell>
                      <Chip label={statusConfig.label} size="small" icon={statusConfig.icon} sx={{ bgcolor: `${statusConfig.color}20`, color: statusConfig.color, fontWeight: 600 }} />
                    </TableCell>
                    <TableCell>
                      <Chip label={priorityConfig.label} size="small" sx={{ bgcolor: `${priorityConfig.color}20`, color: priorityConfig.color }} />
                    </TableCell>
                    <TableCell sx={{ color: 'rgba(255,255,255,0.7)' }}>{ConvertToPersianDigit(ticket.date)}</TableCell>
                    <TableCell sx={{ color: 'rgba(255,255,255,0.5)' }}>{ConvertToPersianDigit(ticket.lastUpdate)}</TableCell>
                  </TableRow>
                );
              })}
            </TableBody>
          </Table>
        </TableContainer>
        {filteredTickets.length === 0 && (
          <Box sx={{ textAlign: 'center', py: 6 }}>
            <FiMessageSquare size={48} color="rgba(255,255,255,0.2)" />
            <Typography sx={{ color: 'rgba(255,255,255,0.5)', mt: 2 }}>تیکتی یافت نشد</Typography>
          </Box>
        )}
        <Stack spacing={2} sx={{ mt: 4, alignItems: 'center' }}>
          <Pagination count={Math.ceil(filteredTickets.length / 10)} sx={{ '& .MuiPaginationItem-root': { color: 'rgba(255,255,255,0.7)', '&.Mui-selected': { bgcolor: theme.palette.primary.main, color: '#fff' } } }} />
        </Stack>
      </Box>
    </ChildrenLayout>
  );
}
