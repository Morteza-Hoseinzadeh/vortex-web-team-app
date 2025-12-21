import { ReactNode } from 'react';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'وبلاگ طراحی سایت و توسعه وب | تیم طراحی سایت ورتکس',
  description: 'وبلاگ تیم طراحی سایت ورتکس؛ آموزش طراحی سایت، سئو، UI/UX، توسعه فرانت‌اند و بک‌اند، نکات تخصصی وب و مقالات کاربردی برای رشد کسب‌وکار آنلاین.',
  keywords: ['وبلاگ طراحی سایت', 'آموزش طراحی سایت', 'آموزش توسعه وب', 'مقالات طراحی سایت', 'سئو سایت', 'آموزش سئو', 'UI UX', 'طراحی رابط کاربری', 'تجربه کاربری', 'فرانت‌اند', 'بک‌اند', 'React', 'Next.js', 'وردپرس', 'بهینه سازی سایت', 'افزایش سرعت سایت', 'کسب و کار آنلاین', 'توسعه وب', 'آموزش برنامه نویسی وب', 'وبلاگ ورتکس'],
  authors: [{ name: 'تیم طراحی ورتکس', url: 'https://vortexweb.ir' }],
  creator: 'تیم طراحی ورتکس',
  publisher: 'تیم طراحی ورتکس',
  metadataBase: new URL('https://vortexweb.ir'),
  alternates: {
    canonical: '/blog',
  },
  openGraph: {
    title: 'وبلاگ طراحی سایت و توسعه وب | تیم طراحی سایت ورتکس',
    description: 'مقالات آموزشی و تخصصی طراحی سایت، سئو، UI/UX و توسعه وب در وبلاگ تیم طراحی سایت ورتکس.',
    url: 'https://vortexweb.ir/blog',
    siteName: 'تیم طراحی سایت ورتکس',
    images: [
      {
        url: '/assets/logo/vortex-logo.png',
        width: 1200,
        height: 630,
        alt: 'وبلاگ تیم طراحی سایت ورتکس',
      },
    ],
    locale: 'fa_IR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'وبلاگ طراحی سایت و توسعه وب | ورتکس',
    description: 'آموزش‌ها و مقالات تخصصی طراحی سایت، سئو و توسعه وب توسط تیم طراحی سایت ورتکس.',
    images: ['/assets/logo/vortex-logo.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
};

export default function BlogLayout({ children }: { children: ReactNode }) {
  return <>{children}</>;
}
