import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  breakpoints: {
    values: { xs: 0, sm: 600, md: 900, lg: 1200, xl: 1536 },
  },

  typography: {
    fontFamily: 'yekanbakh',
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
      default: '#FFFFFF', // بک‌گراند کلی صفحات
      paper: '#F8F9FA', // کارت‌ها / سکشن‌ها
    },

    /* 🧾 Text Colors */
    text: {
      primary: '#111827', // متن اصلی (خوانا و حرفه‌ای)
      secondary: '#6B4EFF', // لینک‌ها و متن تأکیدی
      disabled: '#C9C9D1', // متن غیرفعال
    },

    /* ➖ Divider */
    divider: '#E5E7EB',
  },
});

export default theme;
