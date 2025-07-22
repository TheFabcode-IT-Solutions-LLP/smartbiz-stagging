import { Metadata } from "next";
import HowItWorksContent from "./HowItWorksContent";

export const metadata: Metadata = {
  title: "How AI Workflow Automation Works | Step-by-Step Guide - Smartbizgenie",
  description:
    "Learn how AI workflow automation works in simple steps. From setup to results in 30 days. See our proven 4-step process that saves businesses 20+ hours weekly.",
  keywords:
    "how AI workflow automation works, workflow automation process, business automation steps, AI implementation guide, automated business processes, business process automation guide",
  alternates: {
    canonical: `https://smartbizgenie.com/how-it-works`,
  },
  openGraph: {
    title: 'How AI Workflow Automation Works | Step-by-Step Process',
    description: 'Discover our proven 4-step process that transforms manual tasks into automated workflows. From analysis to launch in 30 days or less.',
    url: 'https://smartbizgenie.com/how-it-works',
    siteName: 'SmartBiz AI',
    images: [
      {
        url: 'https://smartbizgenie.com/assets/images/how-it-works-og.jpg',
        width: 1200,
        height: 630,
        alt: 'How AI Workflow Automation Works - Step by Step Process',
      },
    ],
    locale: 'en_US',
    type: 'article',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'How AI Workflow Automation Works | Simple 4-Step Process',
    description: 'Learn our proven workflow automation process that saves businesses 20+ hours weekly. From setup to results in 30 days.',
    images: ['https://smartbizgenie.com/assets/images/how-it-works-twitter.jpg'],
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

const HowItWorksPage = () => {
  return <HowItWorksContent />;
};

export default HowItWorksPage;