"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";

const serviceData = [
  {
    title: "AI Workflow Automation",
    icon: "/assets/images/setting.png",
    link : "/Automation"
  },
  {
    title: "Custom AI Chatbots",
    icon: "/assets/images/Img1.png",
    link : "/ AI Chatbots"
  },
  {
    title: "E-commerce Specific Features",
    icon: "/assets/images/Img2.png",
    link : "/Specific Features"
  },
  {
    title: "Smart Analytics & AI Reporting",
    icon: "/assets/images/Img3.png",
    link : "/ai-reporting"
  },
  {
    title: "AI-Powered Lead Management",
    icon: "/assets/images/Img4.png",
    link: "/lead-management"
  },
];

const Services = () => {
  return (
    <div className="py-[50px] max-mob-lg:py-6 flex flex-row gap-[70px]  items-center max-des-2xl:gap-3 max-des-2xl:flex-wrap max-tab-md:px-4 max-des-2xl:px-[30px]">
      <h2 className="mt-[10px] text-[40px] font-bold leading-[1.2] text-black max-des-3xl:text-2xl max-des-3xl:text-center w-full mb-[20px] xl:hidden">
        Our AI Automation Services - Designed for Real Business Impact
      </h2>
      <div className="max-w-[52.0833333%] w-full max-des-2xl:max-w-full h-full ">
        <Image
          className="w-full object-cover rounded-r-[20px] max-w-[1000px] h-auto max-des-2xl:rounded-[20px] max-des-2xl:max-w-full"
          src="/assets/images/humanAI.jpg"
          alt="AI Illustration"
          width={1000}
          height={800}
        />
      </div>

      <div className="max-des-2xl:w-full">
        <h2 className="mt-[10px] text-[40px] font-bold leading-[1.2] text-black max-des-3xl:text-2xl max-des-2xl:text-center max-des-2xl:hidden xl:pr-[30px]">
          Our AI Automation Services - Designed for Real Business Impact
        </h2>

        <div className="mt-[30px] flex flex-col gap-[20px] max-tab-lg:mt-6 w-[769px] xl:pr-[30px]   max-tab-lg:w-full max-des-2xl:w-full">
          {serviceData.map((service, index) => (
            <Link href = {service.link}
              key={index}
              className="rounded-[20px] flex flex-row bg-[#222222] items-center "
            >
              <div className="py-[30px] px-[38px] max-mob-lg:py-[20px] max-mob-lg:px-[25px]">
                <Image
                  src={service.icon}
                  alt=""
                  width={60}
                  height={60}
                  className="max-mob-lg:w-[50px] max-mob-lg:h-[50px] max-mob-lg:object-contain"
                />
              </div>

              <span className="w-[1px] bg-white h-[60px]"></span>

              <div className="ml-[20px] max-mob-lg:mx-[15px]">
                <h3 className="text-[24px] font-medium leading-[100%] text-[#FFFFFF] max-mob-lg:text-[16px] max-mob-lg:leading-[1.2]">
                  {service.title}
                </h3>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
