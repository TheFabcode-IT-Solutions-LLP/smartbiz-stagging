'use client';

import React from "react";
import Container from "@/components/ui/conatiner/Container";
import Anchor from "@/components/ui/Anchor/Anchor";
import Button from "@/components/ui/button/Button";
import { useTheme } from "@/contexts/ThemeContext";

const ChatbotCTA = () => {
  const { toggleModal } = useTheme();
  return (
    <div className="bg-primary-100 py-[80px] max-mob-lg:py-10 border-b-[1px] border-white">
      <Container>
        <div className="text-center">
          <h2 className="text-[40px] font-bold text-white leading-[1.2] max-des-3xl:text-2xl mb-[20px]">
            Start Your Free 14-Day Trial
          </h2>
          <p className="text-[24px] font-normal text-white/90 mb-[40px] max-mob-lg:text-[18px] max-mob-lg:mb-[30px]">
            No credit card required. See results in days, not months.
          </p>
          <div className="flex justify-center gap-[20px] flex-wrap">
            <Button 
               onClick={() => toggleModal(true)}
              label="Start Free Trial"
              className=""
            />
            {/* <Anchor 
              href="/demo" 
              label="See Demo"
              className=" border-white border-2  text-primary-100 bg-transparent  "
            />
            <Anchor 
              href="/pricing" 
              label="Pricing Plans"
              className=" "
            /> */}
          </div>
          <p className="text-[20px] font-normal text-accent-200 mt-[40px] max-mob-lg:text-[16px] max-mob-lg:mt-[30px]">
            Questions? Our AI chatbot is ready to help! 💬
          </p>
        </div>
      </Container>
    </div>
  );
};

export default ChatbotCTA;