import React from "react";

import Button from "../ui/button/Button";
import Anchor from "../ui/Anchor/Anchor";
const Banner = () => {
  return (
    <div className="relative pb-[50px] max-mob-lg:pb-6">
      <video
        className="w-full h-auto"
        src="/assets/images/Banner.mp4"
        autoPlay
        muted
        loop
        playsInline
      ></video>

      <div className="absolute bottom-[161px] left-[110px] max-mob-lg:relative max-mob-lg:bottom-0 max-mob-lg:left-0 max-tab-lg:px-4 max-tab-md:bottom-[100px] max-des-xl:left-[30px]">
        <div className="flex flex-col gap-[40px] max-tab-lg:gap-[20px] w-[951px] max-des-xl:w-[700px] max-mob-lg:w-full">
          <h1 className="text-[50px] font-bold  text-white   leading-[60px] tracking-[0%] max-mob-lg:text-2xl max-des-3xl:text-[40px] max-mob-lg:pt-[20px] max-mob-lg:w-full max-mob-lg:text-black max-mob-lg:leading-[1.2] max-mob-lg:text-center max-des-3xl:leading-[40px]">
          Scale Your Business with AI Workflow Automation {''}
            <span className="text-accent-100 ">That Actually Works</span>
          </h1>
   
          <div className="max-mob-lg:text-center">
            <h2 className="text-[34px]  font-normal leading-[100%] tracking-[0%] text-white max-des-4xl:text-lg max-mob-lg:text-xl max-mob-lg:text-black">
             Custom AI Chatbots, Smart Analytics & Voice Assistants Built for Scale - Trusted by 50+ Growing Businesses
            </h2>
          </div>
        </div>
        <div className=" max-mob-lg:flex max-mob-lg:justify-center max-tab-lg:flex-wrap flex-row gap-[40px] max-tab-lg:gap-[0px] flex">
          <Anchor href = "/"
            label="Schedule a Free AI Consultation"
            className="mt-[40px] px-[47px] py-[21px] text-[24px] font-medium max-tab-lg:mt-[20px] max-tab-lg:py-3 max-tab-lg:px-5 max-tab-lg:text-base"
          ></Anchor>
           <Anchor href = "/"
            label="Watch a Demo"
            className="mt-[40px] px-[47px] py-[21px] text-[24px] font-medium max-tab-lg:mt-[20px] max-tab-lg:py-3 max-tab-lg:px-5 max-tab-lg:text-base"
          ></Anchor>
        </div>
      </div>
    </div>
  );
};

export default Banner;
