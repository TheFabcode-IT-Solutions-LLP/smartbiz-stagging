
import { Metadata } from "next";
import ClientAbout from "./ClientAbout";

export const metadata: Metadata = {
  title: "About SmartBiz AI | Leading AI Workflow Automation Experts & Custom Chatbot Specialists",
  description: "Meet the AI workflow automation experts behind 50+ successful business transformations...",
  keywords: "AI workflow automation experts, custom AI chatbots team...",
  alternates: {
    canonical: `https://smartbizgenie.com/about`,
  },
};

export default function AboutPage() {
  return <ClientAbout />;
}