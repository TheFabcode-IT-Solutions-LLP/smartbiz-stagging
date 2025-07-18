
import AiChatbotHero from "@/components/ai-chatbot/AiChatbotHero";
import ShopperPreferences from "@/components/ai-chatbot/ShopperPreferences";
import EcommerceFeatures from "@/components/ai-chatbot/EcommerceFeatures";
import ChatbotMetrics from "@/sections/chatbot-metrics/ChatbotMetrics";
import ChatbotTestimonial from "@/sections/chatbot-testimonial/ChatbotTestimonial";
import ChatbotWorkflow from "@/sections/chatbot-workflow/ChatbotWorkflow";
import CompatiblePlatforms from "@/sections/compatible-platforms/CompatiblePlatforms";
import ChatbotCTA from "@/sections/chatbot-cta/ChatbotCTA";
import { Metadata } from "next";
export const metadata: Metadata = {
  title: 'AI Chatbot for Ecommerce | Boost Sales 24/7 - Smartbizgenie',
  description: 'Transform your ecommerce store with AI chatbot technology. Increase sales by 35%, provide 24/7 support, and automate customer service. Free 14-day trial.',
  keywords:"AI chatbot ecommerce, ecommerce chatbot, AI customer service, automated sales, 24/7 support",
    alternates: {
      canonical: `https://smartbizgenie.com/ai-chatbot-ecommerce`,
    },
 
}
export default function page() {
  return (
    <>
    
      <div>
        <AiChatbotHero />
        <ShopperPreferences />
        <EcommerceFeatures />
        <ChatbotTestimonial />
        <ChatbotMetrics />
        <ChatbotWorkflow />
        <CompatiblePlatforms />
        <ChatbotCTA />
      </div>
    </>
  );
}