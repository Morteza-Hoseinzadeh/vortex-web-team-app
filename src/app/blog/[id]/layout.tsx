import { ReactNode } from 'react';
import type { Metadata } from 'next';

export async function generateMetadata({ params }: any): Promise<Metadata> {
  const myPromise = new Promise<string>((resolve) => {
    setInterval(() => {
      resolve(params);
    }, 1000);
  });

  const result: any = await myPromise;
  const { id } = result;

  // اگر id نامعتبر بود
  if (!id || isNaN(Number(id))) {
    return {
      title: 'مقاله یافت نشد | تیم طراحی سایت ورتکس',
      robots: { index: false, follow: false },
    };
  }

  // دریافت اطلاعات مقاله از API یا DB
  const res = await fetch(`http://localhost:3000/api/blogs/${id}`, {
    next: { revalidate: 60 },
  });

  if (!res.ok) {
    return {
      title: 'مقاله یافت نشد | تیم طراحی سایت ورتکس',
      robots: { index: false, follow: false },
    };
  }

  const { post } = (await res.json()).data;

  const pageTitle = `${post.title} | بلاگ طراحی سایت ورتکس`;
  const pageDescription = post.excerpt || `مطالعه مقاله ${post.title} در بلاگ طراحی سایت ورتکس. آموزش طراحی سایت، سئو و توسعه وب.`;

  const canonicalUrl = `https://vortexweb.ir/blog/${id}`;

  return {
    title: pageTitle,
    description: pageDescription,

    metadataBase: new URL('https://vortexweb.ir'),

    alternates: {
      canonical: canonicalUrl,
    },

    openGraph: {
      title: pageTitle,
      description: pageDescription,
      url: canonicalUrl,
      siteName: 'تیم طراحی سایت ورتکس',
      locale: 'fa_IR',
      type: 'article',
      images: [
        {
          url: post.image || '/assets/logo/vortex-logo.png',
          width: 1200,
          height: 630,
          alt: post.title,
        },
      ],
    },

    twitter: {
      card: 'summary_large_image',
      title: pageTitle,
      description: pageDescription,
      images: [post.image || '/assets/logo/vortex-logo.png'],
    },

    robots: {
      index: true,
      follow: true,
    },
  };
}

// Layout
export default function BlogIdLayout({ children }: { children: ReactNode }) {
  return <>{children}</>;
}
