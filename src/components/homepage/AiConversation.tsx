'use client';

import React from "react";
import Image from "next/image";
import Container from "../ui/conatiner/Container";
import Link from "next/link";
import { useTheme } from "@/contexts/ThemeContext";

const AiConversation = () => {
  const {toggleModal} = useTheme();
  return (
    <div className="py-[50px] max-mob-lg:py-6">
      <Container>
        <div className="rounded-[20px] bg-[#222222] w-full mx-auto flex flex-row justify-between max-tab-lg:flex-wrap max-tab-lg:p-[30px]">
          <div className="flex flex-col justify-center 2xl:pl-[77px] px-[20px] max-tab-lg:pl-auto gap-[38px] max-tab-lg:w-full max-tab-lg:text-center max-tab-lg:items-center">
            <div>
              <h2 className="text-[40px] leading-[50px] text-left max-des-xl:text-center font-bold text-white max-w-[595px] max-des-3xl:text-2xl max-des-5xl:leading-normal">
                Ready to Transform Your Business with AI Workflow Automation?
              </h2>
              <p className="text-[18px] text-white/90 mt-4 max-w-[550px] max-mob-lg:text-base">
                Book a free 30-minute consultation to see exactly how workflow automation tools can save your business 20+ hours weekly and boost profits.
              </p>
            </div>
            
            <div className="flex flex-row gap-[20px] max-des-2xl:flex-wrap">
              <button 
                // href="/schedule-consultation" 
                className="flex group flex-row w-[350px] max-des-4xl:w-auto max-tab-lg:justify-center gap-[15px] border-[1px] rounded-[50px] border-white py-[18px] px-[35px] max-des-4xl:px-[20px] max-des-4xl:py-[10px] hover:bg-accent-100 hover:border-accent-100 transition-colors"
              >
                <Image
                  src="/assets/images/telephone.png"
                  alt="Schedule AI automation consultation call"
                  width={50}
                  height={50}
                  className="max-des-4xl:w-[45px] max-des-4xl:h-[45px] object-contain"
                />
                <button
                onClick={() => toggleModal(true)}
                 className="text-[24px] flex  justify-center leading-[30px] items-center font-medium  text-white max-des-4xl:text-[16px] max-des-4xl:leading-normal">
                  Schedule Free Consultation
                </button>
              </button>
              
              <Link 
                href="/contact" 
                className="flex group flex-row w-[350px] max-des-4xl:w-auto gap-[15px] border-[1px] rounded-[50px] border-white py-[18px] px-[35px] max-des-4xl:px-[20px] max-des-4xl:py-[10px] hover:bg-white hover:text-primary-100 transition-colors"
              >
                <Image
                  src="/assets/icon/gmail.png"
                  alt="Contact AI workflow automation experts"
                  width={50}
                  height={50}
                  quality={100}
                  className="max-des-4xl:w-[45px] max-des-4xl:h-[45px] rounded-full object-cover"
                />
                <p className="text-[24px] group-hover:text-accent-100 flex justify-center items-center font-medium  text-white max-des-4xl:text-[16px] max-des-4xl:leading-normal">
                  Get Expert Advice
                </p>
              </Link>
            </div>
            
            <div className="bg-accent-100/20 rounded-[15px] p-4 max-w-[500px]">
              <p className="text-accent-100 font-bold text-[16px] mb-2">
                🚀 Free Automation Audit Included
              </p>
              <p className="text-white text-[14px]">
                We&apos;ll analyze your current processes and show you exactly where AI workflow automation can save time and money.
              </p>
            </div>
          </div>
          
          <div className="xl:pr-[44px] py-[50px] max-tab-lg:pb-[0px] flex xl:justify-end items-center xl:w-[728px] w-full justify-center">
            <Image
              src="/assets/images/women.png"
              alt="AI workflow automation consultant ready to help your business"
              width={684}
              height={501}
              className="w-[684px] h-auto"
            />
          </div>
        </div>
      </Container>
    </div>
  );
};

export default AiConversation;