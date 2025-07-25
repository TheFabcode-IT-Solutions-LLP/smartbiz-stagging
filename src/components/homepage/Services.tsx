"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";

const serviceData = [
  {
    title: "AI Workflow Automation",
    description: "Automate repetitive tasks like email responses, data entry, and report generation. Save 15+ hours weekly.",
    icon: "/assets/images/setting.png",
    link: "/ai-workflow-automation"
  },
  {
    title: "Custom AI Chatbots",
    description: "Smart chatbots that understand context, answer questions 24/7, and convert visitors into customers.",
    icon: "/assets/images/Img1.png",
    link: "/ai-chatbot-ecommerce"
  },
  {
    title: "Business Process Automation",
    description: "Connect your tools and automate entire workflows. From lead capture to customer onboarding.",
    icon: "/assets/images/Img2.png",
    link: "/business-process-automation"
  },
  {
    title: "Smart Analytics & AI Reporting",
    description: "Get insights that matter. Track performance, predict trends, and make data-driven decisions easily.",
    icon: "/assets/images/Img3.png",
    link: "/ai-reporting"
  },
  {
    title: "AI Lead Management System",
    description: "Qualify leads automatically, nurture prospects, and turn more visitors into paying customers.",
    icon: "/assets/images/Img4.png",
    link: "/ai-lead-management"
  },
];

const Services = () => {
  return (
    <div className="py-[50px] max-mob-lg:py-6 flex flex-row gap-[70px] items-center max-des-2xl:gap-3 max-des-2xl:flex-wrap max-tab-md:px-4 max-des-2xl:px-[30px]">
      <h2 className="mt-[10px] text-[40px] font-bold leading-[1.2] text-black max-des-3xl:text-2xl max-des-3xl:text-center w-full mb-[20px] xl:hidden">
        AI Automation Services That Actually Deliver Results
      </h2>
      
      <div className="max-w-[52.0833333%] w-full max-des-2xl:max-w-full h-full">
        <Image
          className="w-full object-cover rounded-r-[20px] max-w-[1000px] h-auto max-des-2xl:rounded-[20px] max-des-2xl:max-w-full"
          src="/assets/images/humanAI.jpg"
          alt="AI workflow automation and business process automation solutions"
          width={1000}
          height={800}
        />
      </div>

      <div className="max-des-2xl:w-full">
        <h2 className="mt-[10px] text-[40px] font-bold leading-[1.2] text-black max-des-3xl:text-2xl max-des-2xl:text-center max-des-2xl:hidden xl:pr-[30px]">
          AI Automation Services That Actually Deliver Results
        </h2>
        
        <p className="text-[18px] text-primary-100/80 mt-4 mb-8 xl:pr-[30px] max-des-2xl:text-center">
          From workflow automation tools to custom AI chatbots - we build solutions that save time, reduce costs, and grow your business. Every solution is designed for real-world results.
        </p>

        <div className="mt-[30px] flex flex-col gap-[20px] max-tab-lg:mt-6 w-[769px] xl:pr-[30px] max-tab-lg:w-full max-des-2xl:w-full">
          {serviceData.map((service, index) => (
            <Link 
              href={service.link}
              key={index}
              className=" group rounded-[20px] flex flex-row bg-[#222222] items-center hover:bg-accent-100 transition-colors duration-300"
            >
              <div className="py-[30px] px-[38px] max-mob-lg:py-[20px] max-mob-lg:px-[25px]">
                <Image
                  src={service.icon}
                  alt={`${service.title} icon`}
                  width={60}
                  height={60}
                  className="max-mob-lg:w-[50px] max-mob-lg:h-[50px] max-mob-lg:object-contain group-hover:brightness-0 group-hover:invert transition duration-300"
                />
              </div>
              

              <span className="w-[1px] bg-white h-[60px]"></span>

              <div className="ml-[20px] max-mob-lg:mx-[15px] flex-1">
                <h3 className="text-[24px] font-medium leading-[100%] text-[#FFFFFF] max-mob-lg:text-[16px] max-mob-lg:leading-[1.2] mb-2">
                  {service.title}
                </h3>
                <p className="text-[16px] text-white/80 max-mob-lg:text-[14px] leading-[1.4]">
                  {service.description}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;