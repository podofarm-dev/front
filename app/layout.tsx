import type { Metadata } from 'next';
import localFont from 'next/font/local';

import RQProvider from '@/app/_components/common/RQProvider';

import './globals.css';

const pretendard = localFont({
  src: './fonts/PretendardVariable.woff2',
  variable: '--font-pretendard',
  display: 'swap',
  weight: '100 900',
});

export const metadata: Metadata = {
  title: '포도팜',
  description: '우리들의 알고리즘 스터디',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="kr" className={`${pretendard.variable}`}>
      <body className={`${pretendard.className} bg-secondary text-primary-foreground antialiased`}>
        {children}
      </body>
    </html>
  );
}
