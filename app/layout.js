import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';
import { ThemeProvider } from '@/components/themeProvider';
// components
import Header from '@/components/header';
import Footer from '@/components/footer';

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
  keywords: ['Lee Paulison Jr', 'Portfolio', 'Web Developer', 'Software Engineer'],
  authors: [{ name: 'Lee Paulison Jr', url: 'https://leejpaulisonjr.com' }],
  creator: 'Lee Paulison Jr',
  openGraph: {
    title: 'Portfolio | Lee Paulison Jr',
    description: 'Portfolio of Lee Paulison Jr, a web developer and software engineer.',
    url: 'https://leejpaulisonjr.com',
    siteName: 'Lee Paulison Jr Portfolio',
    images: [
      {
        url: 'https://leejpaulisonjr.com/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Lee Paulison Jr Portfolio',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  description: 'Portfolio of Lee Paulison Jr, a web developer and software engineer.',
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
        <ThemeProvider attribute='class' defaultTheme='system' enableSystem disableTransitionOnChange>
          <div className='flex flex-col mx-auto max-w-screen-lg h-screen px-4 sm:px-6 lg:px-8 overflow-x-hidden'>
            <Header />
            <main className='flex-grow overflow-y-auto'>{children}</main>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
