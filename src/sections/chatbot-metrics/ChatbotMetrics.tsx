'use client'
import React from "react";
import Container from "@/components/ui/conatiner/Container";
import { useEffect } from "react";
import AOS from "aos";
import 'aos/dist/aos.css';

const metrics = [
  { icon: "🎯", value: "3x Higher Engagement", subtext: "than traditional chat" },
  { icon: "💰", value: "28% Increase in Sales", subtext: "on average" },
  { icon: "⏰", value: "80% Reduction", subtext: "in response time" },
  { icon: "😊", value: "94% Customer Satisfaction", subtext: "rate" }
];

const ChatbotMetrics = () => {

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
    });
  }, []);
  return (
    <div className="bg-accent-100 py-[50px] max-mob-lg:py-6 my-[50px]">
      <Container>
        <h2 data-aos="fade-in" className="text-[40px] font-bold leading-[1.2] text-center text-white max-des-3xl:text-2xl mb-[50px] max-mob-lg:mb-6">
          Key Performance Metrics:
        </h2>
        <div className="grid grid-cols-4 gap-[40px] max-tab-lg:grid-cols-2 max-mob-lg:gap-[20px]">
          {metrics.map((metric, index) => (
            <div data-aos="fade-up" data-aos-delay={index * 100} key={index} className="text-center">
              <div className="text-[48px] mb-[10px]">{metric.icon}</div>
              <h3 className="text-[24px] font-bold text-white mb-[5px] max-mob-lg:text-[18px]">
                {metric.value}
              </h3>
              <p className="text-[18px] font-normal text-white/80 max-mob-lg:text-[14px]">
                {metric.subtext}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
};

export default ChatbotMetrics;