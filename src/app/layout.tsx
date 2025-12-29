import type { Metadata } from 'next';
import '@/utils/styles/globals.css';
import ClientThemeLayout from './ClientWrapper';

export const metadata: Metadata = {
  metadataBase: new URL('https://vortexweb.ir'),

  title: {
    default: 'تیم طراحی سایت ورتکس | طراحی سایت شرکتی و فروشگاهی',
    template: '%s | تیم طراحی سایت ورتکس',
  },

  description: 'طراحی سایت شرکتی و فروشگاهی سریع، سئو محور و اختصاصی با Next.js و React. مشاوره رایگان + نمونه‌کار واقعی تیم طراحی سایت ورتکس.',

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
      'max-video-preview': -1,
    },
  },

  icons: {
    icon: '/favicon/favicon.ico',
    apple: '/favicon/apple-touch-icon.png',
  },

  themeColor: '#0A0D1A',

  openGraph: {
    type: 'website',
    locale: 'fa_IR',
    url: 'https://vortexweb.ir',
    siteName: 'تیم طراحی سایت ورتکس',
    title: 'طراحی سایت شرکتی و فروشگاهی | تیم طراحی سایت ورتکس',
    description: 'طراحی سایت حرفه‌ای، سئو محور و اختصاصی با Next.js و React توسط تیم طراحی سایت ورتکس',
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
    title: 'طراحی سایت حرفه‌ای | تیم طراحی سایت ورتکس',
    description: 'طراحی سایت شرکتی و فروشگاهی سریع و سئو محور با Next.js توسط تیم طراحی سایت ورتکس',
    images: ['/assets/logo/vortex-logo.png'],
    site: '@vortexweb', // اگر نداری می‌تونی حذفش کنی
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fa" dir="rtl">
      <body>
        <ClientThemeLayout>{children}</ClientThemeLayout>

        {/* WebSite Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'WebSite',
              name: 'تیم طراحی سایت ورتکس',
              url: 'https://vortexweb.ir',
              potentialAction: {
                '@type': 'SearchAction',
                target: 'https://vortexweb.ir/search?q={search_term_string}',
                'query-input': 'required name=search_term_string',
              },
            }),
          }}
        />

        {/* Organization Schema (خیلی مهم برای اعتماد گوگل) */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Organization',
              name: 'تیم طراحی سایت ورتکس',
              url: 'https://vortexweb.ir',
              logo: 'https://vortexweb.ir/assets/logo/vortex-logo.png',
              sameAs: ['https://instagram.com/vortexweb', 'https://linkedin.com/company/vortexweb'],
            }),
          }}
        />
      </body>
    </html>
  );
}
