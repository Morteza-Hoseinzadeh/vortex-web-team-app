import React from 'react';
import { ThemeProvider } from '@mui/material';
import theme from '@/utils/theme/theme';

export default function ClientThemeLayout({ children }: { children: React.ReactNode }) {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
}
