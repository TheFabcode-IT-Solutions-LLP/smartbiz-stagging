import React from "react";
import Container from "../ui/conatiner/Container";
import Anchor from "../ui/Anchor/Anchor";
import Image from "next/image";
const AiChatbotHero = () => {
  return (
   

     <section className=" mb-[50px]">
          <div className="text-center max-w-full w-full relative">
            <Image  src = "/assets/images/digital-wardrobe-transparent-screen.jpg" alt = "" width = {1900} height = {1000} className="w-full max-h-[100dvh] object-cover h-full"/>
            <div className="absolute bottom-[80px] flex flex-col w-full max-tab-lg:mt-[50px]  max-tab-md:relative max-tab-md:bottom-0  max-tab-lg:px-4  ">
            <h1 className="text-[50px] font-bold text-white leading-[60px]  max-tab-md:text-black max-mob-lg:text-2xl max-des-3xl:text-[40px] max-mob-lg:leading-[1.2] max-des-3xl:leading-[40px]">
             Transform Your Ecommerce Store with{" "}
              <span className="text-accent-100">AI-Powered Customer Service</span>
            </h1>
            <h2 className="text-[34px] font-normal leading-[100%] text-white mt-6 max-des-4xl:text-lg max-mob-lg:text-xl max-tab-md:text-black">
              The Smart AI Chatbot for Ecommerce That Sells While You Sleep
            </h2>
            <p className="text-[24px] leading-[1.2] text-white/80 mt-8 max-w-[900px] mx-auto max-mob-lg:text-base max-tab-md:text-black">
                       Turn every visitor into a potential customer with Smartbizgenie&apos;s intelligent AI chatbot for ecommerce. 
            Deliver instant support, personalized recommendations, and seamless shopping experiences 24/7.
            </p>
            <div className="flex gap-[35px] justify-center mt-[50px] max-tab-lg:gap-[20px] max-mob-lg:flex-wrap">
             <Anchor 
              href="/get-started" 
              label="Start Free Trial"
              className=" "
            />
            <Anchor 
              href="/demo" 
              label="See Demo"
              className="bg-transparent border-2 "
            />
            </div>
            </div>
          </div>
     
      </section>
  );
};

export default AiChatbotHero;