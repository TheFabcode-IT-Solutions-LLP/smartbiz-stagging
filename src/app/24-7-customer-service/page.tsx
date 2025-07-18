import { Metadata } from "next";
import CustomerService247 from "./CustomerService247";

export const metadata: Metadata = {
  title: '24/7 Customer Service Solution | AI Support - Smartbizgenie',
  description: 'Never miss another customer with 24/7 AI customer service. Instant support round-the-clock, 90% resolution rate, 70% cost savings. Get started free today.',
  keywords:"24/7 customer service, AI customer support, round-the-clock support, always online support, 24/7 chatbot",
    alternates: {
      canonical: `https://smartbizgenie.com/24-7-customer-service`,
    },
  
}


const page = () => {
  return (
    <CustomerService247 />
  )
}

export default page
