import React from "react";
import Container from "../ui/conatiner/Container";
import Anchor from "../ui/Anchor/Anchor";

const AiChatbotHero = () => {
  return (
    <div className="relative bg-primary-100 py-[80px] max-mob-lg:py-10 mb-[50px]">
      <Container>
        <div className="flex flex-col gap-[40px] max-tab-lg:gap-[20px] max-w-[1200px] mx-auto">
          <h1 className="text-[50px] font-bold text-white text-center leading-[60px] tracking-[0%] max-mob-lg:text-2xl max-des-3xl:text-[40px] max-mob-lg:leading-[1.2] max-des-3xl:leading-[40px]">
            Transform Your Ecommerce Store with{" "}
            <span className="text-accent-100">AI-Powered Customer Service</span>
          </h1>
          
          <h2 className="text-[34px] font-normal leading-[100%] tracking-[0%] text-white text-center max-des-4xl:text-lg max-mob-lg:text-xl">
            The Smart AI Chatbot for Ecommerce That Sells While You Sleep
          </h2>
          
          <p className="text-[24px] font-normal leading-[1.2] text-white/80 text-center max-w-[800px] mx-auto max-mob-lg:text-base">
            Turn every visitor into a potential customer with Smartbizgenie&apos;s intelligent AI chatbot for ecommerce. 
            Deliver instant support, personalized recommendations, and seamless shopping experiences 24/7.
          </p>
          
          <div className="flex justify-center gap-[35px] max-tab-lg:gap-[20px] max-mob-lg:flex-wrap">
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
      </Container>
    </div>
  );
};

export default AiChatbotHero;