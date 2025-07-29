
'use client';
import React from "react";
import Container from "@/components/ui/conatiner/Container";
import { useEffect } from "react";
import AOS from "aos";
import 'aos/dist/aos.css';

const workSteps = [
  {
    number: "1",
    title: "Easy Integration",
    description: "Set up in minutes with popular ecommerce platforms"
  },
  {
    number: "2",
    title: "Smart Learning",
    description: "AI learns from your product catalog and customer interactions"
  },
  {
    number: "3",
    title: "Continuous Improvement",
    description: "Gets smarter with every conversation"
  },
  {
    number: "4",
    title: "Human Handoff",
    description: "Seamlessly transfers complex queries to your team"
  }
];

const ChatbotWorkflow = () => {

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
    });
  }, []);
  return (
    <Container>
      <div className="py-[50px] max-mob-lg:py-6">
        <h2 data-aos="fade-in" className="text-[40px] font-bold leading-[1.2] text-center tracking-[0%] max-des-3xl:text-2xl mb-[50px] max-mob-lg:mb-6">
          How Our AI Chatbot Works
        </h2>
        <div className="bg-[#222222] rounded-[20px] py-[40px] max-tab-lg:py-[30px]">
          <div className="flex flex-row justify-between max-w-[1438px] w-full mx-auto px-[20px] max-mob-lg:flex-wrap max-mob-lg:gap-[35px]">
            {workSteps.map((step, index) => (
              <div data-aos="fade-up" data-aos-delay={index * 50} key={index} className="flex flex-col items-center w-full relative">
                <div data-aos="fade-in" className="w-[120px] h-[120px] rounded-full bg-accent-100 flex justify-center items-center max-mob-lg:w-[70px] max-mob-lg:h-[70px] max-tab-md:w-[85px] max-tab-md:h-[85px]">
                  <span className="text-[48px] font-bold text-white max-mob-lg:text-[24px] max-tab-md:text-[32px]">
                    {step.number}
                  </span>
                </div>
                <h4 className="text-[24px] font-medium text-center text-white mt-[20px] max-mob-lg:mt-[10px] max-mob-lg:text-[18px]">
                  {step.title}
                </h4>
                <p className="mt-[10px] text-[18px] font-normal leading-[1.2] text-white/80 text-center max-w-[250px] max-mob-lg:text-[14px]">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Container>
  );
};

export default ChatbotWorkflow;