import type { Metadata } from 'next';
import '@/utils/styles/globals.css';
import ClientThemeLayout from './ClientWrapper';

export const metadata: Metadata = {
  title: {
    default: 'تیم طراحی سایت ورتکس | طراحی سایت حرفه‌ای و اختصاصی',
    template: '%s | تیم طراحی سایت ورتکس',
  },

  description: 'تیم طراحی سایت ورتکس ارائه‌دهنده خدمات طراحی سایت حرفه‌ای، شرکتی و فروشگاهی با تمرکز بر سئو، سرعت و تجربه کاربری.',

  metadataBase: new URL('https://vortexweb.ir'),

  alternates: {
    canonical: 'https://vortexweb.ir',
  },

  icons: {
    icon: '/favicon/favicon.ico',
    apple: '/favicon/apple-touch-icon.png',
  },

  themeColor: '#0A0D1A',

  robots: {
    index: true,
    follow: true,
  },

  openGraph: {
    type: 'website',
    locale: 'fa_IR',
    url: 'https://vortexweb.ir',
    siteName: 'تیم طراحی سایت ورتکس',
    title: 'تیم طراحی سایت ورتکس | طراحی سایت حرفه‌ای',
    description: 'طراحی سایت حرفه‌ای، شرکتی و فروشگاهی توسط تیم طراحی سایت ورتکس با استانداردهای روز دنیا',
    images: [
      {
        url: '/assets/logo/vortex-logo.png',
        width: 1200,
        height: 630,
        alt: 'تیم طراحی سایت ورتکس',
      },
    ],
  },

  twitter: {
    card: 'summary_large_image',
    title: 'تیم طراحی سایت ورتکس | طراحی سایت حرفه‌ای',
    description: 'خدمات طراحی سایت حرفه‌ای و سئو محور توسط تیم طراحی سایت ورتکس',
    images: ['/assets/logo/vortex-logo.png'],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fa" dir="rtl">
      <body>
        <ClientThemeLayout>{children}</ClientThemeLayout>

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'WebSite',
              name: 'تیم طراحی سایت ورتکس',
              url: 'https://vortexweb.ir',
            }),
          }}
        />
      </body>
    </html>
  );
}
