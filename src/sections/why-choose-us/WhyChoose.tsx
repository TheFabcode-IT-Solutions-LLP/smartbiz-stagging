"use client";
import Container from "@/components/ui/conatiner/Container";
import Image from "next/image";
import React, { useState } from "react";
const items = [
  {
    title: "The SmartBiz AI Advantage",
    children: [
      {
        title: "Manual Process",
        points: [
          "Slow; humans perform tasks one by one",
          "Prone to human error",
          "Results may vary between people",
          "Higher labor costs over time",
          "Struggles with large or complex data",
        ],
      },
      {
        title: "PRICING & PACKAGES",
        active:true,
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
    title: "Other firms vs your firm",
    children: [
      {
        title: "Manual Process",
        points: [
          "Slow; humans perform tasks one by one",
          "Prone to human error",
          "Results may vary between people",
          "Higher labor costs over time",
          "Struggles with large or complex data",
        ],
      },
      {
        title: "AI workflow",
        active:true,
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
    title: "Generic chatbot vs custom-built AI agent",
    children: [
      {
        title: "Manual Process",
        points: [
          "Slow; humans perform tasks one by one",
          "Prone to human error",
          "Results may vary between people",
          "Higher labor costs over time",
          "Struggles with large or complex data",
        ],
      },
      {
        title: "AI workflow",
        active:true,
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
];
const WhyChoose = () => {
  const [activeTab, setActiveTab] = useState(items[0].title);
  return (
    <div className="py-[50px] max-mob-lg:py-6">
      <Container>
        <h2 className="text-primary-100 text-[40px] text-center font-bold leading-[1.2] max-w-[1037px] mx-auto max-des-4xl:text-2xl">
       WHY CHOOSE SMARTBIZ AI
        </h2>
        <div className="flex flex-row">
        <div className="flex gap-[25px] justify-between mt-[50px] max-tab-lg:mt-6 max-des-2xl:gap-2.5 max-mob-md:flex-col">
          {items &&
            items.map((item) => (
              <button
                className={`${
                  activeTab == item.title ? "bg-accent-100" : "bg-primary-100"
                } text-white text-center rounded-[20px] cursor-pointer text-2xl font-bold leading-[1.208] flex-1 py-9 max-des-7xl:py-8 max-des-7xl:text-xl max-des-3xl:text-lg max-des-xl:px-1 max-des-xl:text-sm max-mob-md:py-4 max-mob-md:px-2 max-mob-md:rounded-md`}
                onClick={() => setActiveTab(item.title)}
                key={item.title}
              >
                {item.title}
              </button>
            ))}
        </div>
        <div className="pt-[50px] max-mob-lg:pt-6">
          {items &&
            items.map(
              (item) =>
                activeTab == item.title && (
                  <div
                    className="flex justify-center gap-[49px] max-tab-lg:gap-6 max-mob-lg:flex-col max-mob-lg:gap-3"
                    key={item.title}
                  >
                    {item.children &&
                      item.children.map((child) => (
                        <div
                          key={child.title}
                          className="bg-primary-100 rounded-[20px] w-full max-w-[550px] max-mob-lg:max-w-full min-des-4xl:min-h-[600px]"
                        >
                          <div className={`rounded-t-[20px] pt-[26px] pb-6 border-b border-[#D9D9D9] text-center text-white text-2xl leading-[1.208] font-bold ${child.active ? 'bg-accent-100 border-accent-100' : ''}`}>
                            {child.title}
                          </div>
                          <div className="pt-10 pl-[29px] pb-[42px] pr-16 max-mob-lg:p-6">
                            <ul className="grid gap-10  max-des-4xl:gap-5">
                              {child.points &&
                                child.points.map((item) => (
                                  <li
                                    className="text-white text-2xl max-mob-md:text-base leading-[1.2] font-normal flex items-center gap-5 max-des-4xl:text-lg max-des-4xl:gap-2"
                                    key={item}
                                  >
                                    <Image
                                      alt="checked"
                                      src="/assets/images/checked.png"
                                      width={50}
                                      height={50}
                                      className="object-contain max-des-4xl:max-w-8"
                                    />
                                    {item}
                                  </li>
                                ))}
                            </ul>
                          </div>
                        </div>
                      ))}
                  </div>
                )
            )}
        </div>
        </div>
      </Container>
    </div>
  );
};

export default WhyChoose;
