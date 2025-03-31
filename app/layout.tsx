import type { Metadata } from 'next';
import localFont from 'next/font/local';
import { ToastContainer } from 'react-toastify';

import RQProvider from '@/app/_components/common/RQProvider';

import './globals.css';

const pretendard = localFont({
  src: './fonts/PretendardVariable.woff2',
  variable: '--font-pretendard',
  display: 'swap',
  weight: '100 900',
});

export const metadata: Metadata = {
  title: 'Podofarm',
  description:
    '포도팜은 효율적인 코딩 테스트 스터디를 위한 플랫폼으로, 알고리즘 문제 풀이, 실전 테스트, 스터디 관리를 제공합니다.',
  robots: 'index, follow', // SEO 관련 설정
  openGraph: {
    type: 'website',
    url: 'https://www.podofarm.xyz',
    title: 'Podofarm',
    description: '포도팜은 알고리즘 문제 풀이와 코딩 테스트 스터디를 위한 최적의 플랫폼입니다.',
    siteName: 'Podofarm',
    images: [
      {
        url: 'https://www.podofarm.xyz/og-image.png', // 미리보기 이미지 URL
        width: 1200,
        height: 630,
        alt: 'Podofarm 미리보기 이미지',
      },
    ],
    locale: 'ko_KR',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko" className={`${pretendard.variable}`}>
      <body className={`${pretendard.className} bg-secondary text-primary-foreground antialiased`}>
        <RQProvider>{children}</RQProvider>
        <ToastContainer
          position="top-center"
          autoClose={2500}
          newestOnTop
          closeButton={false}
          hideProgressBar
          closeOnClick
          draggable={true}
          theme="dark"
          toastClassName="text-sm font-normal leading-tight bg-tertiary rounded-xl shadow-[0px_4px_8px_0px_rgba(0,0,0,0.15)] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.30)]"
        />
      </body>
    </html>
  );
}
