
// 1. Updated Banner.tsx - Hero Section with Primary Keywords
'use client';
import React from "react";
import Button from "../ui/button/Button";
import Anchor from "../ui/Anchor/Anchor";
import { useTheme } from "@/contexts/ThemeContext";

const Banner = () => {
  const { toggleModal } = useTheme();
  return (
    <div className="relative pb-[50px] max-mob-lg:pb-6">
      <video
        className="w-full h-auto max-h-[100dvh] object-cover"
        src="/assets/images/Banner.mp4"
        autoPlay
        muted
        loop
        playsInline
      ></video>

      <div className="absolute bottom-[161px] left-[110px] max-tab-md:relative max-tab-md:bottom-0 max-tab-md:left-0 max-tab-lg:px-4 max-des-xl:left-[30px]">
        <div className="flex flex-col gap-[40px] max-tab-lg:gap-[20px] w-[951px] max-des-xl:w-[700px] max-mob-lg:w-full">
          <h1 className="text-[50px] font-bold text-white leading-[60px] tracking-[0%] max-tab-md:text-2xl max-des-3xl:text-[40px] max-mob-lg:pt-[20px] max-tab-md:pt-[40px] max-mob-lg:w-full max-tab-md:text-black max-mob-lg:leading-[1.2] max-mob-lg:text-center max-des-3xl:leading-[40px]">
            AI Workflow Automation That Saves You 20+ Hours Every Week
            <span className="text-accent-100"> - Starting in 7 Days</span>
          </h1>

          <div className="max-mob-lg:text-center">
            <h2 className="text-[34px] font-normal leading-[100%] tracking-[0%] text-white max-des-4xl:text-lg max-mob-lg:text-xl max-mob-lg:text-black">
              Custom AI chatbots, smart analytics, and workflow automation tools trusted by 50+ growing businesses. Turn manual tasks into automated profits.
            </h2>
          </div>
        </div>
        <div className="max-mob-lg:flex max-mob-lg:gap-[20px] max-tab-lg:mt-[20px] mt-[40px] max-mob-lg:justify-center max-tab-lg:flex-wrap flex-row gap-[35px] max-tab-lg:gap-[0px] flex">
          <Button
            onClick={() => toggleModal(true)}
            label="Get Free AI Automation Audit"
            className=""
          />
          <Anchor href="/how-it-works" label="How It Works" className=""></Anchor>
        </div>
      </div>
    </div>
  );
};

export default Banner;