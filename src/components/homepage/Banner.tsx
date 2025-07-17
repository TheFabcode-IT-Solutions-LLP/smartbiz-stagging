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
>

</video>

      <div className="absolute bottom-[161px] left-[110px] max-mob-md:relative max-mob-md:top-0 max-mob-md:left-0 max-tab-lg:px-4">
        <div className="flex flex-col gap-[20px]">
          <h1 className="text-[60px] font-bold text-white w-[951px] leading-[73px] tracking-[0%] max-des-4xl:text-2xl max-mob-md:pt-[20px] max-mob-md:w-full max-mob-md:text-black max-mob-md:leading-[1.2]">
            Automate & Scale Your Business with{" "}
            <span className="text-accent-100">Custom AI Agents</span>
          </h1>
          <div>
            <span className="text-[34px] font-normal leading-[100%] tracking-[0%] text-white max-des-4xl:text-lg max-mob-md:text-xl max-mob-md:text-black">
              Experts in LangChain, RAG, and AI Orchestration
            </span>
          </div>
        </div>

        <Button  label="Schedule a Free AI Consultation" className="mt-[30px] px-[47px] py-[21px] text-[24px] font-medium max-tab-md:mt-[20px] max-tab-lg:py-3 max-tab-lg:px-5 max-tab-lg:text-base">
         </Button>
      </div>
    </div>
  );
};

export default Banner;
