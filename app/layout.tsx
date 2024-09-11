import type { Metadata } from 'next';
import { Vazirmatn } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/navbar/navbar';
import Footer from '@/components/footer/footer';

const vazir = Vazirmatn({ subsets: ['arabic'] });

export const metadata: Metadata = {
  title: 'وبلاگ نکست جی اس',
  description: 'A minimal nextjs weblog app with basic CRUD operation',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html dir='rtl' lang='fa-Ir'>
      <body className={vazir.className}>
        <Navbar />
        <div className='flex min-h-dvh flex-col justify-between'>
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}
