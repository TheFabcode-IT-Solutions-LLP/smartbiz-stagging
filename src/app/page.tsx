import { Metadata } from "next";
import ClientHomepage from "./ClientHomepage";

export const metadata: Metadata = {
  title: 'AI Workflow Automation & Custom Chatbots for Business Growth | SmartBiz AI',
  description: 'Transform your business with AI workflow automation, custom chatbots, smart analytics, and voice assistants. Automate emails, tasks, leads, and customer support with proven results.',
  keywords: "AI workflow automation, custom AI chatbots, business automation, ecommerce chatbot, WhatsApp AI chatbot, AI voice assistant, smart analytics, lead management",
  alternates: {
    canonical: `https://smartbizgenie.com`,
  },
  icons: "/assets/icon/favicon.jfif"
};

export default function page() {

  return (
    <ClientHomepage />
  );
}
