
import { Metadata } from "next";
import ClientSupport from "./ClientSupport";

export const metadata: Metadata = {
  title: "Automated Customer Support | Cut Costs by 70% - Smartbizgenie",
  description:
    "Automate customer support with AI. Handle 1000s of queries instantly, reduce response time to seconds, save 70% on support costs. Start free trial today.",
  keywords:
    "automated customer support, AI customer service, customer support automation, reduce support costs, 24/7 customer service",
  alternates: {
    canonical: `https://smartbizgenie.com/automated-customer-support`,
  },
};
export default function SupportPage() {
  return <ClientSupport />;
}



