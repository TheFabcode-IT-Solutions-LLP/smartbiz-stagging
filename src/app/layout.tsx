import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/contexts/ThemeContext";
import Header from "@/layouts/header/Header";
import Footer from "@/layouts/footer/Footer";
import { GoogleTagManager } from "@next/third-parties/google";

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
      <GoogleTagManager gtmId="G-YTJH5VJC48" />
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
