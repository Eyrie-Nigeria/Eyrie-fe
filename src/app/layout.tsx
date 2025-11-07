import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';
import { QueryProvider } from '@/providers/query-provider';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Eyrie Nigeria - Find Your Dream Property',
  description: 'Discover the perfect property in Nigeria with Eyrie',
  icons: {
    icon: '/favicon.ico',
  },
  openGraph: {
    title: 'Eyrie Nigeria - Find Your Dream Property',
    description: 'Discover the perfect property in Nigeria with Eyrie',
    url: 'https://eyrie.ng',
    siteName: 'Eyrie',
    images: [
      {
        url: 'https://eyrie.ng/icon/logo.jpg',
        width: 1200,
        height: 630,
        alt: 'Eyrie Branding',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Eyrie – Empowering Innovation',
    description: 'Discover creative digital products and projects from Eyrie.',
    images: ['https://eyrie.ng/og-image.jpg'],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <QueryProvider>{children}</QueryProvider>
      </body>
    </html>
  );
}
