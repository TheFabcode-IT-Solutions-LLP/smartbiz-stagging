'use client';

import React from "react";
import Anchor from "../ui/Anchor/Anchor";
import Image from "next/image";
import Button from "../ui/button/Button";
import { useTheme } from "@/contexts/ThemeContext";
const AiChatbotHero = () => {
  const { toggleModal } = useTheme();
  return (
   

     <section className="pb-[50px] relative bg-primary-100">
  <div className="text-center max-w-full w-full relative">
    {/* Background Image */}
    <Image
      src="/assets/images/digital-wardrobe-transparent-screen.jpg"
      alt=""
      width={1900}
      height={1000}
      className="w-full max-h-[100dvh] object-cover h-full"
    />
    <div className="absolute inset-0 bg-primary-100/80 z-[1] max-tab-md:hidden" />
    <div className="absolute bottom-[80px] flex flex-col w-full max-tab-lg:mt-[50px] max-tab-md:relative max-tab-md:bottom-0 max-tab-lg:px-4 z-[2]">
      <h1 className="text-[50px] lg:max-w-[1000px] lg:w-full lg:mx-auto font-bold text-white leading-[60px]  max-mob-lg:text-2xl max-des-3xl:text-[40px] max-mob-lg:leading-[1.2] max-des-3xl:leading-[40px]">
        Transform Your Ecommerce Store with{" "}
        <span className="text-accent-100">AI-Powered Customer Service</span>
      </h1>
      <h2 className="text-[34px] font-normal leading-[100%] text-white mt-6 max-des-4xl:text-lg max-mob-lg:text-xl ">
        The Smart AI Chatbot for Ecommerce That Sells While You Sleep
      </h2>
      <p className="text-[24px] leading-[1.2] text-white/80 mt-8 max-w-[900px] mx-auto max-mob-lg:text-base ">
        Turn every visitor into a potential customer with Smartbizgenie&apos;s intelligent AI chatbot for ecommerce. 
        Deliver instant support, personalized recommendations, and seamless shopping experiences 24/7.
      </p>
      <div className="flex gap-[35px] justify-center mt-[50px] max-tab-lg:gap-[20px] max-mob-lg:flex-wrap">
        <Button 
          onClick={() => toggleModal(true)}
          label="Start Free Trial"
          className=""
        />
        {/* <Anchor 
          href="/demo" 
          label="See Demo"
          className="bg-transparent border-2 max-tab-lg:border-accent-100 max-tab-lg:bg-accent-100"
        /> */}
      </div>
    </div>
  </div>
</section>

  );
};

export default AiChatbotHero;