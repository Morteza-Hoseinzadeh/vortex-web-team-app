import { ReactNode } from 'react';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'نمونه کار طراحی سایت حرفه‌ای | پورتفولیو تیم ورتکس',
  description: 'مشاهده نمونه کارهای حرفه‌ای طراحی سایت، UI/UX و توسعه وب توسط تیم طراحی سایت ورتکس. بهترین پروژه‌های شرکتی، فروشگاهی و اختصاصی را ببینید.',

  keywords: ['نمونه کار طراحی سایت', 'پورتفولیو طراحی سایت', 'نمونه پروژه وب', 'طراحی سایت حرفه‌ای', 'تیم طراحی وب ورتکس'],

  authors: [{ name: 'تیم طراحی ورتکس', url: 'https://vortexweb.ir' }],
  creator: 'تیم طراحی ورتکس',
  publisher: 'تیم طراحی ورتکس',

  metadataBase: new URL('https://vortexweb.ir'),

  alternates: {
    canonical: 'https://vortexweb.ir/portfolio',
  },

  openGraph: {
    title: 'نمونه کار طراحی سایت حرفه‌ای | پورتفولیو تیم ورتکس',
    description: 'نمونه کارهای حرفه‌ای طراحی سایت، UI/UX و توسعه وب توسط تیم طراحی سایت ورتکس. مشاهده پروژه‌های شرکتی، فروشگاهی و اختصاصی.',
    url: 'https://vortexweb.ir/portfolio',
    siteName: 'تیم طراحی سایت ورتکس',
    images: [
      {
        url: '/assets/logo/vortex-logo.png',
        width: 1200,
        height: 630,
        alt: 'نمونه کارهای تیم طراحی سایت ورتکس',
      },
    ],
    locale: 'fa_IR',
    type: 'website',
  },

  twitter: {
    card: 'summary_large_image',
    title: 'نمونه کار طراحی سایت حرفه‌ای | پورتفولیو تیم ورتکس',
    description: 'مشاهده نمونه کارهای طراحی سایت، UI/UX و توسعه وب توسط تیم طراحی سایت ورتکس.',
    images: ['/assets/logo/vortex-logo.png'],
  },

  robots: {
    index: true,
    follow: true,
  },
};

export default function PortfolioLayout({ children }: { children: ReactNode }) {
  return <>{children}</>;
}
