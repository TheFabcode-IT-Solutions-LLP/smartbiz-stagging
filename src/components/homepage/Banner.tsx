import React from "react";

import Button from "../ui/button/Button";
const Banner = () => {
  return (
    <div className="relative pb-[50px] max-mob-lg:pb-6">
      <video
        className="w-full h-auto"
        src="/assets/images/Banner.mp4"
        autoPlay
        muted
        loop
        playsInline
      ></video>

      <div className="absolute bottom-[161px] left-[110px] max-mob-lg:relative max-mob-lg:bottom-0 max-mob-lg:left-0 max-tab-lg:px-4 max-tab-md:bottom-[100px] max-des-xl:left-[30px]">
        <div className="flex flex-col gap-[20px]">
          <h1 className="text-[60px] font-bold  text-white w-[951px] max-des-xl:w-[700px]  leading-[73px] tracking-[0%] max-mob-lg:text-2xl max-des-3xl:text-[40px] max-mob-lg:pt-[20px] max-mob-lg:w-full max-mob-lg:text-black max-mob-lg:leading-[1.2] max-mob-lg:text-center max-des-3xl:leading-[40px]">
            Automate & Scale Your Business with{" "}
            <span className="text-accent-100 ">Custom AI Agents</span>
          </h1>
          <div className="max-mob-lg:text-center">
            <span className="text-[34px]  font-normal leading-[100%] tracking-[0%] text-white max-des-4xl:text-lg max-mob-lg:text-xl max-mob-lg:text-black">
              Experts in LangChain, RAG, and AI Orchestration
            </span>
          </div>
        </div>
        <div className=" max-mob-lg:flex max-mob-lg:justify-center">
          <Button
            label="Schedule a Free AI Consultation"
            className="mt-[30px] px-[47px] py-[21px] text-[24px] font-medium max-tab-lg:mt-[20px] max-tab-lg:py-3 max-tab-lg:px-5 max-tab-lg:text-base"
          ></Button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
