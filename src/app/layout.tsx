import type { Metadata } from 'next';
import '@/utils/styles/globals.css';
import ClientThemeLayout from './ClientWrapper';

export const metadata: Metadata = {
  metadataBase: new URL('https://vortexwebteam.ir'),

  title: {
    default: 'طراحی سایت شرکتی، فروشگاهی، شخصی و حرفه‌ای | خدمات طراحی وب',
    template: '%s | خدمات طراحی سایت حرفه‌ای',
  },

  description: 'طراحی سایت شرکتی، فروشگاهی، شخصی، رزومه و پنل مدیریتی با React و Next.js. سایت سئو شده، ریسپانسیو و بهینه. مشاوره رایگان طراحی وب‌سایت.',

  keywords: ['طراحی سایت', 'طراحی سایت شرکتی', 'طراحی سایت فروشگاهی', 'طراحی سایت شخصی', 'طراحی سایت حرفه ای', 'طراحی وب سایت', 'طراحی سایت اختصاصی', 'طراحی سایت ارزان', 'بهترین شرکت طراحی سایت', 'طراحی سایت با react', 'طراحی سایت با next js', 'سئو سایت', 'بهینه سازی سایت', 'ساخت سایت حرفه ای', 'طراحی سایت رزومه', 'طراحی پنل مدیریتی', 'خدمات طراحی وب', 'طراحی سایت تهران', 'قیمت طراحی سایت', 'نمونه کار طراحی سایت'].join(', '),

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
    url: 'https://vortexwebteam.ir',
    siteName: 'خدمات طراحی سایت حرفه‌ای | شرکتی، فروشگاهی و شخصی',
    title: 'طراحی سایت شرکتی، فروشگاهی و شخصی | حرفه‌ای و سئو محور',
    description: 'طراحی سایت حرفه‌ای، سئو محور و اختصاصی. خدمات طراحی وب‌سایت شرکتی، فروشگاهی، شخصی و پنل مدیریتی با React و Next.js.',
    images: [
      {
        url: '/assets/logo/vortex-logo.png',
        width: 1200,
        height: 630,
        alt: 'طراحی سایت حرفه‌ای - خدمات طراحی وب',
      },
    ],
  },

  twitter: {
    card: 'summary_large_image',
    title: 'طراحی سایت شرکتی، فروشگاهی و شخصی | حرفه‌ای و سئو محور',
    description: 'طراحی سایت حرفه‌ای، سئو محور و اختصاصی با React و Next.js. خدمات طراحی وب‌سایت شرکتی، فروشگاهی و شخصی.',
    images: ['/assets/logo/vortex-logo.png'],
  },

  alternates: {
    canonical: 'https://vortexwebteam.ir',
  },

  verification: {
    google: 'کد_تایید_گوگل_سرویس_console',
  },

  category: 'technology',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fa" dir="rtl">
      <head>
        {/* Meta Keywords برای موتورهای جستجو */}
        <meta name="keywords" content={metadata.keywords?.toString()} />

        {/* Meta Author */}
        <meta name="author" content="تیم طراحی سایت ورتکس" />

        {/* Meta Copyright */}
        <meta name="copyright" content="تیم طراحی سایت ورتکس" />

        {/* Revisit after */}
        <meta name="revisit-after" content="7 days" />

        {/* Distribution */}
        <meta name="distribution" content="global" />

        {/* Rating */}
        <meta name="rating" content="general" />

        {/* Language */}
        <meta name="language" content="Persian" />

        {/* Geo tags */}
        <meta name="geo.region" content="IR" />
        <meta name="geo.placename" content="Tehran" />

        {/* Robots additional */}
        <meta name="googlebot" content="index, follow" />
        <meta name="bingbot" content="index, follow" />

        {/* Mobile optimization */}
        <meta name="viewport" content="width=device-width, initial-scale=1.0, viewport-fit=cover" />

        {/* Handheld friendly */}
        <meta name="HandheldFriendly" content="True" />

        {/* Mobile web app capable */}
        <meta name="mobile-web-app-capable" content="yes" />

        {/* Apple mobile web app */}
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />

        {/* Format detection */}
        <meta name="format-detection" content="telephone=no, date=no, email=no, address=no" />
      </head>
      <body>
        <ClientThemeLayout>{children}</ClientThemeLayout>

        {/* WebSite Schema - بهینه شده */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'WebSite',
              name: 'خدمات طراحی سایت حرفه‌ای',
              url: 'https://vortexwebteam.ir',
              description: 'طراحی سایت شرکتی، فروشگاهی، شخصی و پنل مدیریتی با React و Next.js',
              inLanguage: 'fa-IR',
              copyrightYear: new Date().getFullYear(),
              creator: {
                '@type': 'Organization',
                name: 'تیم طراحی سایت ورتکس',
              },
              potentialAction: {
                '@type': 'SearchAction',
                target: {
                  '@type': 'EntryPoint',
                  urlTemplate: 'https://vortexwebteam.ir/search?q={search_term_string}',
                },
                'query-input': 'required name=search_term_string',
              },
            }),
          }}
        />

        {/* Organization Schema - با خدمات کامل */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Organization',
              name: 'تیم طراحی سایت ورتکس',
              url: 'https://vortexwebteam.ir',
              logo: 'https://vortexwebteam.ir/assets/logo/vortex-logo.png',
              description: 'ارائه‌دهنده خدمات تخصصی طراحی سایت شرکتی، فروشگاهی، شخصی و پنل مدیریتی',
              email: 'vortexwebteam@info.com',
              telephone: '+989309363715',
              address: {
                '@type': 'PostalAddress',
                addressCountry: 'IR',
                addressLocality: 'Tehran',
              },
              sameAs: ['https://instagram.com/vortexweb.team', 'https://linkedin.com/company/vortexweb'],
              foundingDate: '2020',
              foundingLocation: 'Tehran, Iran',
              areaServed: 'IR',
              knowsAbout: ['طراحی سایت', 'طراحی وب', 'React', 'Next.js', 'طراحی سایت شرکتی', 'طراحی سایت فروشگاهی', 'طراحی سایت شخصی', 'UI/UX Design', 'SEO Optimization'],
              offers: {
                '@type': 'Offer',
                category: 'Web Design Services',
                availability: 'InStock',
                priceSpecification: {
                  '@type': 'PriceSpecification',
                  priceCurrency: 'IRR',
                  valueAddedTaxIncluded: true,
                },
              },
            }),
          }}
        />

        {/* Service Schema - لیست خدمات اصلی */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Service',
              serviceType: 'طراحی سایت',
              provider: {
                '@type': 'Organization',
                name: 'تیم طراحی سایت ورتکس',
              },
              areaServed: 'IR',
              hasOfferCatalog: {
                '@type': 'OfferCatalog',
                name: 'خدمات طراحی سایت',
                itemListElement: [
                  {
                    '@type': 'Offer',
                    itemOffered: {
                      '@type': 'Service',
                      name: 'طراحی سایت شرکتی',
                      description: 'طراحی سایت شرکتی حرفه‌ای با قابلیت معرفی خدمات و محصولات',
                    },
                  },
                  {
                    '@type': 'Offer',
                    itemOffered: {
                      '@type': 'Service',
                      name: 'طراحی سایت فروشگاهی',
                      description: 'طراحی فروشگاه آنلاین با درگاه پرداخت و مدیریت محصولات',
                    },
                  },
                  {
                    '@type': 'Offer',
                    itemOffered: {
                      '@type': 'Service',
                      name: 'طراحی سایت شخصی',
                      description: 'طراحی سایت شخصی و رزومه حرفه‌ای',
                    },
                  },
                  {
                    '@type': 'Offer',
                    itemOffered: {
                      '@type': 'Service',
                      name: 'طراحی پنل مدیریتی',
                      description: 'طراحی داشبورد و پنل مدیریتی اختصاصی',
                    },
                  },
                ],
              },
            }),
          }}
        />

        {/* BreadcrumbList Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'BreadcrumbList',
              itemListElement: [
                {
                  '@type': 'ListItem',
                  position: 1,
                  name: 'خانه',
                  item: 'https://vortexwebteam.ir',
                },
                {
                  '@type': 'ListItem',
                  position: 2,
                  name: 'خدمات طراحی سایت',
                  item: 'https://vortexwebteam.ir#services',
                },
              ],
            }),
          }}
        />

        {/* LocalBusiness Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'LocalBusiness',
              name: 'تیم طراحی سایت ورتکس',
              image: 'https://vortexwebteam.ir/assets/logo/vortex-logo.png',
              '@id': 'https://vortexwebteam.ir',
              url: 'https://vortexwebteam.ir',
              telephone: '+989309363715',
              priceRange: '₸₸',
              address: {
                '@type': 'PostalAddress',
                streetAddress: 'Tehran, Iran',
                addressLocality: 'Tehran',
                addressRegion: 'Tehran',
                postalCode: '15875',
                addressCountry: 'IR',
              },
              geo: {
                '@type': 'GeoCoordinates',
                latitude: 35.6892,
                longitude: 51.389,
              },
              openingHoursSpecification: {
                '@type': 'OpeningHoursSpecification',
                dayOfWeek: ['Saturday', 'Sunday', 'Monday', 'Tuesday', 'Wednesday'],
                opens: '09:00',
                closes: '17:00',
              },
              sameAs: ['https://instagram.com/vortexweb.team', 'https://linkedin.com/company/vortexweb'],
            }),
          }}
        />
      </body>
    </html>
  );
}
