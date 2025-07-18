"use client";
import Container from "@/components/ui/conatiner/Container";
import Image from "next/image";
import React, { useState } from "react";
const items = [
  {
    title: "Proven Track Record",
    children: [
      {
        title: "The SmartBiz AI Advantage - Backed by Data and Results",
        active: true,
        points: [
          "50+ successful implementations across diverse industries",
          "Average ROI of 4-6x within the first year",
          "95% client satisfaction rate with ongoing support",
          "Zero failed deployments with our proven methodology",
        ],
      },
      {
        title: "The SmartBiz AI Advantage - Backed by Data and Results",

        points: [
          "Fast; AI automates tasks instantly",
          "High accuracy (with proper training)",
          "Highly consistent output",
          "Lower operational costs long-term",
          "Handles complex data and patterns well",
        ],
      },
    ],
  },
  {
    title: "Technical Excellence",
    children: [
      {
        title: "The SmartBiz AI Advantage - Backed by Data and Results",
        active: true,
        points: [
          " Latest AI technologies: GPT-4, Claude, and custom models",
          "Seamless integrations: 200+ supported platforms and APIs",
          "Enterprise-grade security: SOC 2 Type II compliant",
          "Scalable architecture: Handles growth from startup to enterprise",
        ],
      },
      {
        title: "AI workflow",
        points: [
          "Fast; AI automates tasks instantly",
          "High accuracy (with proper training)",
          "Highly consistent output",
          "Lower operational costs long-term",
          "Handles complex data and patterns well",
        ],
      },
    ],
  },
  {
    title: "Business-Focused Approach",
    children: [
      {
        title: "The SmartBiz AI Advantage - Backed by Data and Results",
        active: true,
        points: [
          "Industry expertise: Deep understanding of business processes",
          "Measurable results: Clear KPIs and performance tracking",
          "Rapid deployment: Most projects completed in 2-6 weeks",
          "Ongoing optimization: Continuous improvement and updates",
        ],
      },
      {
        title: "AI workflow",
        points: [
          "Fast; AI automates tasks instantly",
          "High accuracy (with proper training)",
          "Highly consistent output",
          "Lower operational costs long-term",
          "Handles complex data and patterns well",
        ],
      },
    ],
  },
  {
    title: "Cost-Effective Solutions",
    children: [
      {
        title: "The SmartBiz AI Advantage - Backed by Data and Results",
        active: true,
        points: [
          "Transparent pricing: No hidden fees or surprise costs",
          "Flexible payment options: Monthly or annual plans available",
          "Quick ROI: Most clients see positive returns within 90 days",
          "Scalable pricing: Pay only for what you use",
        ],
      },
    ],
  },
  {
    title: "Comprehensive Support",
    children: [
      {
        title: "The SmartBiz AI Advantage - Backed by Data and Results",
        active: true,
        points: [
          "24/7 system monitoring: Proactive issue resolution",
          "Dedicated account management: Personal support throughout implementation",
          "Training and documentation: Comprehensive resources for your team",
          "Future-proof solutions: Built to evolve with your business",
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
          WHY CHOOSE SMARTBIZ AI
        </h2>

        <div className="flex flex-row gap-20 mt-[50px] max-mob-lg:flex-col max-mob-lg:gap-10 justify-center">
          <div className="flex flex-col gap-[25px] max-des-2xl:gap-2.5 justify-center">
            {items.map((item) => (
              <button
                key={item.title}
                onClick={() => setActiveTab(item.title)}
                className={`${
                  activeTab === item.title ? "bg-accent-100" : "bg-primary-100"
                } text-white text-center rounded-[20px] cursor-pointer text-2xl font-bold py-6 px-4 max-des-3xl:text-lg max-des-xl:text-sm max-mob-md:py-4 max-mob-md:px-2 max-mob-md:rounded-md`}
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
                                  alt="checked"
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
      </Container>
    </div>
  );
};

export default WhyChoose;
