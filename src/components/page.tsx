import Head from "next/head";
import AiConversation from "@/components/homepage/AiConversation";
import Banner from "@/components/homepage/Banner";
import Services from "@/components/homepage/Services";
import WorkSteps from "@/components/homepage/WorkSteps";
import CustomerExperiences from "@/sections/customer-experiences/CustomerExperiences";
import FAQ from "@/sections/faq/FAQ";
import ImageWithText from "@/sections/image-with-text/ImageWithText";
import MultiColumn from "@/sections/multicolumns/MultiColumn";
import RealClients from "@/sections/real-clients/RealClients";
import Trusted from "@/sections/trusted/Trusted";
import WhyChoose from "@/sections/why-choose-us/WhyChoose";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: 'AI Workflow Automation & Business Process Automation Tools | SmartBiz AI',
  description: 'Save 20+ hours weekly with AI workflow automation. Custom chatbots, business process automation, and workflow automation tools that boost productivity by 40%. Free consultation.',
  keywords: "AI workflow automation, workflow automation tools, business process automation, custom AI chatbots, business automation, automated workflows, AI automation platform",
  alternates: {
    canonical: `https://smartbizgenie.com`,
  },
  icons: "/assets/icon/favicon.jfif",
  openGraph: {
    title: 'AI Workflow Automation That Saves 20+ Hours Weekly | SmartBiz AI',
    description: 'Transform your business with proven AI workflow automation. 50+ successful implementations. Average ROI of 4-6x within first year. Free automation audit.',
    url: 'https://smartbizgenie.com',
    siteName: 'SmartBiz AI',
    images: [
      {
        url: 'https://smartbizgenie.com/assets/images/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'AI Workflow Automation Platform - SmartBiz AI',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AI Workflow Automation That Actually Works | SmartBiz AI',
    description: 'Save 20+ hours weekly with AI workflow automation. Trusted by 50+ businesses. Get your free automation audit today.',
    images: ['https://smartbizgenie.com/assets/images/twitter-image.jpg'],
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
};

export default function Home() {
  return (
    <>
      {/* Structured Data for SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "SmartBiz AI",
            "url": "https://smartbizgenie.com",
            "logo": "https://smartbizgenie.com/assets/images/logo.png",
            "description": "Leading AI workflow automation platform helping businesses save 20+ hours weekly through custom chatbots and business process automation.",
            "address": {
              "@type": "PostalAddress",
              "addressCountry": "US"
            },
            "contactPoint": {
              "@type": "ContactPoint",
              "telephone": "+1-XXX-XXX-XXXX",
              "contactType": "customer support",
              "availableLanguage": "en"
            },
            "sameAs": [
              "https://facebook.com/smartbizai",
              "https://twitter.com/smartbizai",
              "https://linkedin.com/company/smartbizai"
            ],
            "offers": {
              "@type": "Offer",
              "name": "AI Workflow Automation Services",
              "description": "Custom AI chatbots, workflow automation tools, and business process automation solutions.",
              "url": "https://smartbizgenie.com/services"
            }
          })
        }}
      />

      <div>
        <Banner />
        <Trusted />
        <MultiColumn />
        <Services />
        <ImageWithText />
        <RealClients />
        
        {/* Enhanced Trust Signal */}
        <div className="text-white bg-accent-100 text-center font-medium text-2xl leading-[1.208] px-6 pt-[26px] pb-[25px] min-h-[80px] max-mob-lg:text-base max-mob-lg:py-3 max-mob-lg:min-h-auto mb-[50px]">
          <strong>Proven Results:</strong> Our AI workflow automation reduces support response time by 30% and saves businesses 20+ hours weekly on average
        </div>
        
        <CustomerExperiences />
        <WorkSteps />
        <WhyChoose />
        <AiConversation />
        <FAQ />
      </div>
    </>
  );
}