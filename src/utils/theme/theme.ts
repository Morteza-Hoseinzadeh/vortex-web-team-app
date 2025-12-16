import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  breakpoints: {
    values: { xs: 0, sm: 600, md: 900, lg: 1200, xl: 1536 },
  },

  typography: {
    fontFamily: 'farhang2',
  },

  palette: {
    /* 🔮 Primary (Brand Main) */
    primary: {
      main: '#6B4EFF', // بنفش ورتکس
      light: '#4A7DFF', // آبی کهکشانی
      dark: '#0B0F1A', // نیلی تیره (برای هدر/فوتر)
      contrastText: '#FFFFFF',
    },

    /* ✨ Secondary (Accent / CTA) */
    secondary: {
      main: '#FF4FD8', // صورتی نئونی
      light: '#4DEBFF', // آبی نئونی روشن
      dark: '#9B7BFF', // بنفش گلو
      contrastText: '#FFFFFF',
    },

    /* 🌑 Backgrounds */
    background: {
      default: '#0A0D1A', // بک‌گراند کلی صفحات
      paper: '#0A0D1A', // کارت‌ها / سکشن‌ها
    },

    /* 🧾 Text Colors */
    text: {
      primary: '#FFF', // متن اصلی (خوانا و حرفه‌ای)
      disabled: '#111827', // متن های غیر اکتیو
      secondary: '#9CA0D8', // لینک ها
    },

    /* ➖ Divider */
    divider: '#E5E7EB',
  },
});

export default theme;
