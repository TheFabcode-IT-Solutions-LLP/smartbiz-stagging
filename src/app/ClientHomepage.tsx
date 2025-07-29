'use client';

import { useEffect } from "react";
import Head from "next/head";
import AOS from "aos";
import "aos/dist/aos.css";

import AiConversation from "@/components/homepage/AiConversation";
import Banner from "@/components/homepage/Banner";
import Services from "@/components/homepage/Services";
import WorkSteps from "@/components/homepage/WorkSteps";
import CustomerExperiences from "@/sections/customer-experiences/CustomerExperiences";
import FAQ from "@/sections/faq/FAQ";
import ImageWithText from "@/sections/image-with-text/ImageWithText";
import MultiColumn from "@/sections/multicolumns/MultiColumn";
import RealClients from "@/sections/real-clients/RealClients";
import Trusted from "@/sections/trusted/Trusted";
import WhyChoose from "@/sections/why-choose-us/WhyChoose";

export default function ClientHomepage() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <>
      <div>
        <div><Banner /></div>
        <div><Trusted /></div>
        <div><MultiColumn /></div>
        <div><Services /></div>
        <div data-aos="fade-up"><ImageWithText /></div>
        <div><RealClients /></div>

        <div className="text-white bg-accent-100 text-center font-medium text-2xl leading-[1.208] px-6 pt-[26px] pb-[25px] min-h-[80px] max-mob-lg:text-base max-mob-lg:py-3 max-mob-lg:min-h-auto mb-[50px]"
        >
          30% reduction in support response time with an AI agent built using LangGraph
        </div>

        <div><CustomerExperiences /></div>
        <div><WorkSteps /></div>
        <div><WhyChoose /></div>
        <div><AiConversation /></div>
        <div data-aos="fade-up"><FAQ /></div>
      </div>
    </>
  );
}
