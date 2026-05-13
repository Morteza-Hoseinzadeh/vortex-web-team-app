// app/dashboard/layout.tsx
import { ReactNode } from 'react';
import { Metadata } from 'next';

// متادیتای صحیح برای پنل کاربری - با no-index برای جلوگیری از ایندکس شدن
export const metadata: Metadata = {
  robots: {
    index: false, // جلوگیری از ایندکس شدن صفحات پنل کاربری
    follow: false, // جلوگیری از دنبال کردن لینک‌ها
  },

  title: 'پنل کاربری | مدیریت پروژه‌های طراحی سایت',
  description: 'ورود به پنل کاربری تیم طراحی سایت ورتکس - مشاهده وضعیت پروژه، ارسال تیکت پشتیبانی و دریافت فایل‌های پروژه',

  keywords: ['پنل کاربری', 'مدیریت پروژه', 'تیکت پشتیبانی', 'طراحی سایت'],

  authors: [{ name: 'تیم طراحی ورتکس' }],

  metadataBase: new URL('https://vortexweb.ir'),

  alternates: {
    canonical: 'https://vortexweb.ir/dashboard',
  },

  openGraph: {
    title: 'پنل کاربری | تیم طراحی سایت ورتکس',
    description: 'مدیریت پروژه‌های طراحی سایت، پیگیری پیشرفت و ارتباط با تیم پشتیبانی',
    url: 'https://vortexweb.ir/dashboard',
    siteName: 'تیم طراحی سایت ورتکس',
    locale: 'fa_IR',
    type: 'website',
    images: [
      {
        url: '/assets/logo/vortex-logo.png',
        width: 1200,
        height: 630,
        alt: 'پنل کاربری ورتکس',
      },
    ],
  },

  twitter: {
    card: 'summary_large_image',
    title: 'پنل کاربری | مدیریت پروژه',
    description: 'ورود به پنل کاربری و مدیریت پروژه‌های طراحی سایت',
    images: ['/assets/logo/vortex-logo.png'],
  },
};

export default function DashboardLayout({ children }: { children: ReactNode }) {
  return <>{children}</>;
}
