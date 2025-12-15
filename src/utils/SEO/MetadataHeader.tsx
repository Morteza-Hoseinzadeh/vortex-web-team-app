'use client';

import React from 'react';

interface MetadataProps {
  title?: string;
  description?: string;
  imageUrl?: string;
  url?: string;
  keywords?: string;
  type?: 'website' | 'article' | 'service';
  author?: string;
  publishedTime?: string;
  modifiedTime?: string;
  category?: 'services' | 'about' | 'portfolio' | 'home';
  noIndex?: boolean;
  canonicalUrl?: string;
  structuredData?: any;
}

const MetadataHeader: React.FC<MetadataProps> = ({ title, description, imageUrl = '/assets/logo/vortex-logo.png', url = '', keywords, type = 'website', author = 'Vortex Web Team', category, noIndex = false, canonicalUrl, structuredData }) => {
  const baseUrl = 'https://vortexwebteam.ir';

  const pageTitle =
    title ||
    {
      home: 'تیم طراحی سایت ورتکس | طراحی سایت حرفه‌ای',
      services: 'خدمات طراحی سایت | تیم ورتکس',
      about: 'درباره تیم طراحی سایت ورتکس',
      portfolio: 'نمونه کارهای طراحی سایت | ورتکس',
    }[category || 'home'];

  const pageDescription =
    description ||
    {
      home: 'تیم طراحی سایت ورتکس متخصص در طراحی سایت حرفه‌ای، سئو محور و اختصاصی برای رشد کسب‌وکار شما',
      services: 'ارائه خدمات طراحی سایت شرکتی، فروشگاهی و شخصی با جدیدترین تکنولوژی‌های روز',
      about: 'تیم طراحی سایت ورتکس با تمرکز بر کیفیت، سرعت و سئو',
      portfolio: 'مشاهده نمونه کارهای طراحی سایت حرفه‌ای تیم ورتکس',
    }[category || 'home'];

  const finalUrl = canonicalUrl || `${baseUrl}${url === '/' ? '' : url}`;
  const finalImageUrl = imageUrl.startsWith('http') ? imageUrl : `${baseUrl}${imageUrl}`;

  const websiteSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    url: baseUrl,
    name: 'تیم طراحی سایت ورتکس',
    description: 'تیم طراحی سایت حرفه‌ای و سئو محور',
    potentialAction: {
      '@type': 'SearchAction',
      target: `${baseUrl}/search?q={search_term_string}`,
      'query-input': 'required name=search_term_string',
    },
  };

  return (
    <>
      <title>{pageTitle}</title>
      <meta name="keywords" content={keywords || 'تیم طراحی سایت, طراحی سایت, شرکت طراحی سایت, طراحی سایت حرفه‌ای, طراحی سایت شرکتی, طراحی سایت فروشگاهی, web design team, website design, خدمات طراحی سایت, تیم طراحی وب'} />
      <meta name="description" content={pageDescription} />
      <meta name="author" content={author} />
      <meta name="robots" content={noIndex ? 'noindex, nofollow' : 'index, follow'} />
      <link rel="canonical" href={finalUrl} />

      {/* Open Graph */}
      <meta property="og:title" content={pageTitle} />
      <meta property="og:description" content={pageDescription} />
      <meta property="og:image" content={finalImageUrl} />
      <meta property="og:url" content={finalUrl} />
      <meta property="og:type" content={type} />
      <meta property="og:site_name" content="Vortex Web Team" />
      <meta property="og:locale" content="fa_IR" />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={pageTitle} />
      <meta name="twitter:description" content={pageDescription} />
      <meta name="twitter:image" content={finalImageUrl} />
      <meta name="twitter:site" content="@vortexwebteam" />

      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="theme-color" content="#111827" />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(websiteSchema),
        }}
      />

      {structuredData && <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />}

      {/* Favicons */}
      <link rel="icon" href="/favicon/favicon.ico" />
      <link rel="apple-touch-icon" href="/favicon/apple-touch-icon.png" />
    </>
  );
};

export default MetadataHeader;
