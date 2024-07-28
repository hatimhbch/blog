import { Inter } from "next/font/google";
import Navbar from "./components/headtail/Navbar/navbar";
import Footer from "./components/headtail/Footer/footer";
import "./globals.css";
import Script from "next/script";
import Head from "next/head";
import { ReactNode } from "react";

const inter = Inter({ subsets: ["latin"] });

interface RootLayoutProps {
  children: ReactNode;
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
