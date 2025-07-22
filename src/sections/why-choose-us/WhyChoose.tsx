"use client";
import Container from "@/components/ui/conatiner/Container";
import Image from "next/image";
import React, { useState } from "react";

const items = [
  {
    title: "Proven Track Record",
    children: [
      {
        title: "Real Results from AI Workflow Automation",
        active: true,
        points: [
          "50+ successful workflow automation projects across different industries",
          "Average ROI of 4-6x within the first year (most see results in 90 days)",
          "95% client satisfaction rate with ongoing support and training",
          "Zero failed deployments - our proven method works every time",
        ],
      },
    ],
  },
  {
    title: "Advanced AI Technology",
    children: [
      {
        title: "Enterprise-Grade Workflow Automation Tools",
        active: true,
        points: [
          "Latest AI models: GPT-4, Claude 3.5, and custom-trained automation systems",
          "200+ platform integrations: Zapier, HubSpot, Salesforce, Shopify, and more",
          "Bank-level security: SOC 2 Type II compliant with end-to-end encryption",
          "Scalable infrastructure: Grows from small business to enterprise seamlessly",
        ],
      },
    ],
  },
  {
    title: "Business-First Approach",
    children: [
      {
        title: "Workflow Automation That Actually Works for Your Business",
        active: true,
        points: [
          "Deep industry expertise in eCommerce, SaaS, and service businesses",
          "Clear, measurable results with KPI tracking and performance reports", 
          "Fast implementation: Most workflow automation projects done in 2-6 weeks",
          "Continuous improvement: We optimize and update your systems regularly",
        ],
      },
    ],
  },
  {
    title: "Transparent Pricing",
    children: [
      {
        title: "Affordable AI Workflow Automation Solutions",
        active: true,
        points: [
          "No hidden fees or surprise costs - everything upfront and transparent",
          "Flexible payment plans: Monthly or annual options available",
          "Quick ROI: Most clients see positive returns within 90 days or less",
          "Pay-as-you-scale pricing: Only pay for what you actually use and need",
        ],
      },
    ],
  },
  {
    title: "Complete Support",
    children: [
      {
        title: "Full-Service AI Automation Partnership",
        active: true,
        points: [
          "24/7 system monitoring with proactive issue resolution and alerts",
          "Dedicated success manager throughout implementation and beyond",
          "Complete training and documentation for your team members",
          "Future-ready solutions that evolve and grow with your business needs",
        ],
      },
    ],
  },
];

const WhyChoose = () => {
  const [activeTab, setActiveTab] = useState(items[0].title);
  
  return (
    <div className="py-[50px] max-mob-lg:py-6">
      <Container>
        <h2 className="text-primary-100 text-[40px] text-center font-bold leading-[1.2] max-w-[1037px] mx-auto max-des-4xl:text-2xl">
          Why Choose SmartBiz AI for Workflow Automation?
        </h2>
        
        <p className="text-center text-[18px] text-primary-100/80 mt-4 max-w-[800px] mx-auto max-mob-lg:text-base mb-8">
          We&apos;re not just another AI company. We&apos;re business automation experts who understand what works in the real world. Here&apos;s what makes us different:
        </p>

        <div className="flex flex-row gap-20 mt-[50px] max-mob-lg:flex-col max-mob-lg:gap-10 justify-center">
          <div className="flex flex-col gap-[25px] max-des-2xl:gap-2.5 justify-center">
            {items.map((item) => (
              <button
                key={item.title}
                onClick={() => setActiveTab(item.title)}
                className={`${
                  activeTab === item.title ? "bg-accent-100" : "bg-primary-100"
                } text-white text-center rounded-[20px] cursor-pointer text-2xl font-bold py-6 px-4 max-des-3xl:text-lg max-des-xl:text-sm max-mob-md:py-4 max-mob-md:px-2 max-mob-md:rounded-md hover:bg-accent-100 transition-colors`}
              >
                {item.title}
              </button>
            ))}
          </div>
          
          <div className="">
            {items.map((item) =>
              activeTab === item.title ? (
                <div key={item.title} className="w-full max-w-[600px] mx-auto">
                  {item.children
                    .filter((child) => child.active)
                    .map((child) => (
                      <div
                        key={child.title}
                        className="bg-primary-100 rounded-[20px] w-full"
                      >
                        <div className="rounded-t-[20px] pt-[26px] pb-6 border-b border-[#D9D9D9] text-center text-white text-2xl leading-[1.208] font-bold bg-accent-100 border-accent-100">
                          {child.title}
                        </div>
                        <div className="pt-10 pl-[29px] pb-[42px] pr-16 max-mob-lg:p-6">
                          <ul className="grid gap-10 max-des-4xl:gap-5">
                            {child.points.map((point) => (
                              <li
                                key={point}
                                className="text-white text-2xl max-mob-md:text-base leading-[1.2] font-normal flex items-center gap-5 max-des-4xl:text-lg max-des-4xl:gap-2"
                              >
                                <Image
                                  alt="AI workflow automation benefit checkmark"
                                  src="/assets/images/checked.png"
                                  width={50}
                                  height={50}
                                  className="object-contain max-des-4xl:max-w-8"
                                />
                                {point}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    ))}
                </div>
              ) : null
            )}
          </div>
        </div>
        
        {/* Additional Trust Signals */}
        <div className="mt-12 bg-[#F5F5F5] rounded-[20px] p-8 text-center">
          <h3 className="text-[24px] font-bold text-primary-100 mb-4">
            Ready to Join 50+ Successful Businesses?
          </h3>
          <p className="text-[18px] text-primary-100/80 max-w-[600px] mx-auto">
            Our AI workflow automation platform has helped businesses save over 1,000 hours of manual work every month. 
            See how we can transform your operations in just 30 days.
          </p>
        </div>
      </Container>
    </div>
  );
};

export default WhyChoose;