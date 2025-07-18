import React from "react";
import Container from "@/components/ui/conatiner/Container";

const ChatbotTestimonial = () => {
  return (
    <Container>
      <div className="py-[50px] max-mob-lg:py-6">
        <div className="bg-primary-100 rounded-[20px] py-[60px] px-[80px] max-mob-lg:p-[30px]">
          <h2 className="text-[40px] font-bold leading-[1.2] text-center text-white max-des-3xl:text-2xl mb-[40px]">
            Real Results from Real Ecommerce Stores
          </h2>
          <p className="text-[24px] font-normal leading-[1.4] text-white/90 text-center italic mb-[20px] max-mob-lg:text-[18px]">
            &quot;Smartbizgenie&apos;s chatbot increased our conversion rate by 42% and reduced support tickets by 65%.
          </p>
          <p className="text-[20px] font-medium text-accent-100 text-center max-mob-lg:text-[16px]">
            - Sarah Chen, Fashion Boutique Owner
          </p>
        </div>
      </div>
    </Container>
  );
};

export default ChatbotTestimonial;