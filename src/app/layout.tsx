import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/contexts/ThemeContext";
import Header from "@/layouts/header/Header";
import Footer from "@/layouts/footer/Footer";
import { GoogleTagManager } from "@next/third-parties/google";
import Head from "next/head";
import Script from "next/script";

const inter = Inter({
  variable: "--font-inter",
  weight: ["100", "400", "500", "600", "700", "900"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "AI Workflow Automation & Custom Chatbots for Business Growth | SmartBiz AI",
  description: "Transform your business with AI workflow automation, custom chatbots, smart analytics, and voice assistants. Automate emails, tasks, leads, and customer support with proven results.",
  icons : "/assets/icon/favicon.jfif"
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
       <Head>
        <meta
          name="google-site-verification"
          content="kohfPFhP66g6ycnzYmw3wcSIMXjv29sxwgwlZu4-8co"
        />
      </Head>
    
        <Script async src="https://www.googletagmanager.com/gtag/js?id=G-YTJH5VJC48"></Script>
<Script id="g-tag">
 {` window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
 
  gtag('config', 'G-YTJH5VJC48');
  `}
</Script>
    
      <body className={`${inter.variable} antialiased`}>
        <ThemeProvider>
          <Header />
          {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
