import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Navbar from "./components/headtail/Navbar/navbar";
import Footer from "./components/headtail/Footer/footer";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: 'Articles of experts in all language programming and science Understanding Java Generics: A Comprehensive Guide',
  description: 'Java, Python, Html, Css, Javascript, Typescript, Nodejs, Reactjs, Vuejs, Angular, Next.js, Nestjs, Expressjs, Spring, Spring bot, c#, c, c++, .Net, Django',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        {children}
        <Footer />
        </body>
    </html>
  );
}
