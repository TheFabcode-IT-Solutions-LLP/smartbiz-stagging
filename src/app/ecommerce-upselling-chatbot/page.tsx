
import { Metadata } from "next";
import ClientEcommerce from "./ClientEcommerce";

export const metadata: Metadata = {
  title: "Ecommerce Upselling Chatbot | +45% Revenue - Smartbizgenie",
  description:
    "AI-powered upselling chatbot for ecommerce. Increase average order value by 45% with smart product recommendations. Proven ROI in 30 days. Try it free!",
  keywords:
    "ecommerce upselling chatbot, AI upselling, increase order value, product recommendations, ecommerce revenue",
  alternates: {
    canonical: `https://smartbizgenie.com/ecommerce-upselling-chatbot`,
  },
};

export default function EcommercePage() {
  return <ClientEcommerce/>
}

