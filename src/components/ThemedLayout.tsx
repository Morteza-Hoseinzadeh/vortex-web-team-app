'use client';

import React from 'react';
import { ThemeProvider, CssBaseline, GlobalStyles, useTheme } from '@mui/material';

export default function ClientThemeLayout({ children }: { children: React.ReactNode }) {
  const theme = useTheme();

  const globalStyles = {
    body: {
      margin: '24px 32px',
      transition: 'background-color 0.3s ease, color 0.3s ease',
    },
    html: {
      margin: 0,
      padding: 0,
      minHeight: '100vh',
      fontFamily: theme.typography.fontFamily,
    },
  };

  return (
    <div style={{ backgroundColor: theme.palette.background.default, color: theme.palette.text.primary, minHeight: '100vh', transition: 'all 0.3s ease-in-out' }}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <GlobalStyles styles={globalStyles} />

        <div style={{ position: 'fixed', inset: 0, background: '', zIndex: 0, pointerEvents: 'none' }} />

        <main style={{ position: 'relative', zIndex: 1 }}>{children}</main>
      </ThemeProvider>
    </div>
  );
}
