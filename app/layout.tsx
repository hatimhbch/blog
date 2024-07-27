import { Inter } from "next/font/google";
import Navbar from "./components/headtail/Navbar/navbar";
import Footer from "./components/headtail/Footer/footer";
import "./globals.css";
import Script from "next/script";
import { ReactNode } from "react"; // استيراد ReactNode
import { Metadata } from "next";

const inter = Inter({ subsets: ["latin"] });

interface RootLayoutProps {
  children: ReactNode; // تحديد نوعية children
}

export const meta:Metadata = {
  metadataBase: new URL("https://elevenai.co"),
  keywords: ["elevenai","coding","programming","ai"],
  title:{
    default: "Elevenai",
    template: "%s | Elevenai"
  },
  openGraph: {
    description: "learn code, programming and science"
  }
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <head>
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
      </head>
      <body className={inter.className}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
