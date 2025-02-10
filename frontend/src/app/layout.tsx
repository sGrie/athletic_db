import type { Metadata } from 'next';
import { Geist } from 'next/font/google';

import Footer from '@/components/Footer';
import Header from '@/components/Header';

import '@/styles/globals.css';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin']
});

export const metadata: Metadata = {
  title: 'AthleticDB',
  description: 'Athletic events, results, and more.'
};

function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body className={`${geistSans.variable} antialiased flex flex-col h-full`}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}

export default RootLayout;
