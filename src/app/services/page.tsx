
import { Metadata } from "next";
import ClientServices from "./ClientServices";

export const metadata: Metadata = {
  title: "AI Workflow Automation Services | Custom Chatbots & Business Process Automation - SmartBiz AI",
  description: "Complete AI workflow automation services including custom AI chatbots, business process automation, smart analytics, and voice assistants. Save 20+ hours weekly with proven automation solutions.",
  keywords: "AI workflow automation services, custom AI chatbots, business process automation, workflow automation tools, AI automation platform, smart analytics, AI lead management, voice assistants",
  alternates: {
    canonical: `https://smartbizgenie.com/services`,
  },
};
export default function ServicesPage() {
  return <ClientServices/>;
}

