// utils/seo.ts
import type { Metadata } from 'next';

interface SeoProps {
  title?: string;
  description?: string;
  image?: string;
  url?: string;
  noIndex?: boolean;
  type?: 'website' | 'article';
}

const BASE_URL = 'https://vortexweb.ir';

export function createMetadata({ title, description, image = '/assets/logo/vortex-logo.png', url = '/', noIndex = false, type = 'website' }: SeoProps): Metadata {
  const fullUrl = `${BASE_URL}${url === '/' ? '' : url}`;

  return {
    title,
    description,
    alternates: {
      canonical: fullUrl,
    },
    robots: noIndex ? { index: false, follow: false } : undefined,

    openGraph: {
      title,
      description,
      url: fullUrl,
      type,
      images: [{ url: image }],
      locale: 'fa_IR',
      siteName: 'تیم طراحی سایت ورتکس',
    },

    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [image],
    },
  };
}
