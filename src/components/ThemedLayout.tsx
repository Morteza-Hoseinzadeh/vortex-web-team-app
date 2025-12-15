'use client';

import React from 'react';
import { ThemeProvider } from '@mui/material';
import theme from '@/utils/theme/theme';

export default function ClientThemeLayout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <ThemeProvider theme={theme}>
        <main style={{ position: 'relative', zIndex: 1 }}>{children}</main>
      </ThemeProvider>
    </div>
  );
}
