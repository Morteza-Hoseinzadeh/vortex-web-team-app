import { ReactNode } from 'react';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'پشتیبانی و ارتباط با ما - تیم طراحی سایت ورتکس',
  description: 'صفحه پشتیبانی تیم طراحی سایت ورتکس. دریافت مشاوره، پشتیبانی فنی، پاسخ به سوالات و ارتباط مستقیم با تیم طراحی سایت.',
  keywords: ['پشتیبانی طراحی سایت', 'پشتیبانی سایت', 'پشتیبانی فنی سایت', 'پشتیبانی وب', 'پشتیبانی UI UX', 'پشتیبانی پروژه سایت', 'ارتباط با تیم طراحی سایت', 'مشاوره طراحی سایت', 'سوالات طراحی سایت', 'پشتیبانی وردپرس', 'پشتیبانی React', 'پشتیبانی Next.js', 'خدمات پشتیبانی سایت', 'پشتیبانی سایت فروشگاهی', 'پشتیبانی سایت شرکتی', 'تیم طراحی سایت ورتکس', 'پشتیبانی آنلاین سایت'],
  authors: [{ name: 'تیم طراحی ورتکس', url: 'https://vortexweb.ir' }],
  creator: 'تیم طراحی ورتکس',
  publisher: 'تیم طراحی ورتکس',
  metadataBase: new URL('https://vortexweb.ir'),
  alternates: {
    canonical: '/support',
  },
  openGraph: {
    title: 'پشتیبانی و ارتباط با ما - تیم طراحی سایت ورتکس',
    description: 'دریافت پشتیبانی فنی، مشاوره و ارتباط مستقیم با تیم طراحی سایت ورتکس.',
    url: 'https://vortexweb.ir/support',
    siteName: 'تیم طراحی سایت ورتکس',
    images: [
      {
        url: '/assets/logo/vortex-logo.png',
        width: 1200,
        height: 630,
        alt: 'پشتیبانی تیم طراحی سایت ورتکس',
      },
    ],
    locale: 'fa_IR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'پشتیبانی و ارتباط با ما - تیم طراحی سایت ورتکس',
    description: 'پشتیبانی فنی و ارتباط مستقیم با تیم طراحی سایت ورتکس.',
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

export default function SupportLayout({ children }: { children: ReactNode }) {
  return <>{children}</>;
}
