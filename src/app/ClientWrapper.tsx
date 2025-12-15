'use client';

import ClientThemeLayout from '@/components/ThemedLayout';

export default function ClientWrapper({ children }: { children: React.ReactNode }) {
  return <ClientThemeLayout>{children}</ClientThemeLayout>;
}
