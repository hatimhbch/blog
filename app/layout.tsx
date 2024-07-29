import { Inter } from "next/font/google";
import Navbar from "./components/headtail/Navbar/navbar";
import Footer from "./components/headtail/Footer/footer";
import "./globals.css";
import Script from "next/script";
import { ReactNode } from "react";
import { Metadata } from "next";

const inter = Inter({ subsets: ["latin"] });

interface RootLayoutProps {
  children: ReactNode;
}

export const metadata: Metadata = {
  title: {
    default: 'ElevenAi - Articles and Blog for Programming science and ai',
    template: '%s | ElevenAi',
  },
  description: 'Articles and Blog for Programming science ai and more like this',
  openGraph: {
    title: 'ElevenAi - Articles and Blog for Programming science and ai',
    description: 'Articles and Blog for Programming science ai and more like this',
    url: 'https://elevenai.co',
    siteName: 'ElevenAi',
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: '/favicon.ico',
        width: 32,
        height: 32,
      }
    ],
  },
  twitter: {
    card: 'summary_large_image',
    images: ['/favicon.ico'],
  },
  alternates: {
    canonical: 'https://elevenai.co',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: '/favicon.ico',
  },
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {/* Google Analytics */}
        <Script
          async
          src={`https://www.googletagmanager.com/gtag/js?id=G-JYVGDQZH4V`}
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-JYVGDQZH4V');
          `}
        </Script>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
