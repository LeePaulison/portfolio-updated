import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';
import { ThemeProvider } from '@/components/themeProvider';
import { Analytics } from '@vercel/analytics/next';
import Script from 'next/script';
// components
import Header from '@/components/header';
import Footer from '@/components/footer';
import { IntermediatePage } from '@/components/intermediatePage';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata = {
  title: 'Portfolio | Lee Paulison Jr',
  description: 'Portfolio of Lee Paulison Jr, a web developer and software engineer.',
  keywords: ['Lee Paulison Jr', 'Portfolio', 'Web Developer', 'Software Engineer'],
  authors: [{ name: 'Lee Paulison Jr', url: 'https://www.leejpaulisonjr.com' }],
  creator: 'Lee Paulison Jr',
  openGraph: {
    title: 'Portfolio | Lee Paulison Jr',
    description: 'Portfolio of Lee Paulison Jr, a web developer and software engineer.',
    url: 'https://www.leejpaulisonjr.com',
    siteName: 'Lee Paulison Jr Portfolio',
    images: [
      {
        url: 'https://www.leejpaulisonjr.com/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Lee Paulison Jr Portfolio',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Portfolio | Lee Paulison Jr',
    description: 'Portfolio of Lee Paulison Jr, a web developer and software engineer.',
    images: ['https://www.leejpaulisonjr.com/og-image.png'],
  },
  icons: {
    icon: '/favicon.ico',
    apple: '/apple-touch-icon.png',
    shortcut: '/shortcut-icon.png',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang='en' suppressHydrationWarning>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <Script
          src={`https://www.google.com/recaptcha/api.js?render=${process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY}`}
          strategy='afterInteractive'
        />

        <ThemeProvider attribute='class' defaultTheme='system' enableSystem disableTransitionOnChange>
          <div className='flex flex-col h-screen overflow-hidden'>
            <Header />
            <IntermediatePage>{children}</IntermediatePage>
            <Footer />
            <Analytics />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
