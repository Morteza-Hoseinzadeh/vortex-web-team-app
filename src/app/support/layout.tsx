import { ReactNode } from 'react';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'پشتیبانی و ارتباط با تیم طراحی سایت ورتکس',
  description: 'دریافت مشاوره، پشتیبانی فنی و پاسخ به سوالات طراحی سایت توسط تیم حرفه‌ای ورتکس. با ما تماس بگیرید و مشکل خود را سریع حل کنید.',

  keywords: ['پشتیبانی سایت', 'مشاوره طراحی سایت', 'ارتباط با تیم طراحی سایت'],

  authors: [{ name: 'تیم طراحی ورتکس', url: 'https://vortexweb.ir' }],
  creator: 'تیم طراحی ورتکس',
  publisher: 'تیم طراحی ورتکس',

  metadataBase: new URL('https://vortexweb.ir'),

  alternates: {
    canonical: 'https://vortexweb.ir/support',
  },

  openGraph: {
    title: 'پشتیبانی و ارتباط با تیم طراحی سایت ورتکس',
    description: 'دریافت پشتیبانی فنی، مشاوره و پاسخ به سوالات طراحی سایت توسط تیم حرفه‌ای ورتکس.',
    url: 'https://vortexweb.ir/support',
    siteName: 'تیم طراحی سایت ورتکس',
    locale: 'fa_IR',
    type: 'website',
    images: [
      {
        url: '/assets/logo/vortex-logo.png',
        width: 1200,
        height: 630,
        alt: 'پشتیبانی تیم طراحی سایت ورتکس',
      },
    ],
  },

  twitter: {
    card: 'summary_large_image',
    title: 'پشتیبانی و ارتباط با تیم طراحی سایت ورتکس',
    description: 'پشتیبانی فنی و مشاوره طراحی سایت توسط تیم حرفه‌ای ورتکس. با ما در ارتباط باشید.',
    images: ['/assets/logo/vortex-logo.png'],
  },

  robots: {
    index: true,
    follow: true,
  },
};

export default function SupportLayout({ children }: { children: ReactNode }) {
  return <>{children}</>;
}
