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
