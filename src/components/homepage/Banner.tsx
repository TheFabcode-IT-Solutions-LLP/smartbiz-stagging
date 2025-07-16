import React from "react";
import Image from "next/image";
import Button from "../ui/button/Button";
const Banner = () => {
  return (
    <div className="relative">
      <Image
        className="w-full h-auto"
        src="/assets/images/Banner.png"
        alt=""
        width={1920}
        height={1000}
      />
      <div className="absolute top-[552px] left-[110px] max-mob-md:relative max-mob-md:top-0 max-mob-md:left-0 max-mob-md:px-[15px]">
        <div className="flex flex-col gap-[20px]">
          <h1 className="text-[60px] font-bold text-white w-[951px] leading-[73px] tracking-[0%] max-mob-md:text-[20px] max-mob-md:pt-[20px] max-mob-md:w-full max-mob-md:text-black max-mob-md:leading-[1.2]">
            Automate & Scale Your Business with{" "}
            <span className="text-accent-100">Custom AI Agents</span>
          </h1>
          <div>
            <span className="text-[34px] font-normal leading-[100%] tracking-[0%] text-white">
              Experts in LangChain, RAG, and AI Orchestration
            </span>
          </div>
        </div>

        <Button  label="Schedule a Free AI Consultation" className="mt-[30px] px-[47px] py-[21px] text-[24px] font-medium">
         </Button>
      </div>
    </div>
  );
};

export default Banner;
