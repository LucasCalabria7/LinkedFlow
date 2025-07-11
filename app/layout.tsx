import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import localFont from 'next/font/local';

const inter = Inter({ subsets: ['latin'] });

const brittisans = localFont({
  src: [
    {
      path: '../public/fonts/Brittisans-Regular.woff2',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../public/fonts/Brittisans-Medium.woff2',
      weight: '500',
      style: 'normal',
    },
    {
      path: '../public/fonts/Brittisans-SemiBold.woff2',
      weight: '600',
      style: 'normal',
    },
    {
      path: '../public/fonts/Brittisans-Bold.woff2',
      weight: '700',
      style: 'normal',
    },
  ],
  variable: '--font-brittisans',
});

export const metadata: Metadata = {
  title: 'LinkedFlow - Streamline Your Business Flow',
  description: 'Modern SaaS platform for workflow automation and team collaboration',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={brittisans.variable}>
      <body className={inter.className}>{children}</body>
    </html>
  );
}