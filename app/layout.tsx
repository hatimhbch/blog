import { Inter } from "next/font/google";
import Navbar from "./components/headtail/Navbar/navbar";
import Footer from "./components/headtail/Footer/footer";
import "./globals.css";
import Script from "next/script";
import Head from "next/head";
import { ReactNode } from "react";
import { Metadata } from "next";

const inter = Inter({ subsets: ["latin"] });

interface RootLayoutProps {
  children: ReactNode;
}

export const metadata: Metadata = {
  title: {
    default: 'Articles and Blog for Programming science and ai',
    template: '%s | Articles and Blog for Programming science and ai',
  },
  description: 'Articles and Blog for Programming science ai and more like this',
  openGraph: {
    title: 'Articles and Blog for Programming science and ai',
    description: 'Articles and Blog for Programming science ai and more like this',
    url: './',
    siteName: 'elevenai',
    locale: 'en_US',
    type: 'website',
  },
  alternates: {
    canonical: './',
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
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <Head>
        <title>Elevenai</title>
        <meta name="description" content="learn code, programming and science" />
        <meta name="keywords" content="elevenai, coding, programming, ai" />
        <meta property="og:title" content="Elevenai" />
        <meta property="og:description" content="learn code, programming and science" />
        <meta property="og:url" content="https://elevenai.co" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="canonical" href="https://eleven.co" />
        {/* إضافة المزيد من الميتا بيانات هنا إذا لزم الأمر */}
      </Head>
      <body className={inter.className}>
        {/* إضافة Google Analytics */}
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
