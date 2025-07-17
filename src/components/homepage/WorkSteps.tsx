import React from "react";
import Image from "next/image";
import Container from "../ui/conatiner/Container";

const steps = [
  {
    title: "Step 1",
    image: "/assets/images/phone.png",
    content: "Book a call",
  },
  {
    title: "Step 2",
    image: "/assets/images/magnifying-glass.png",
    content: "AI Opportunity Discovery",
  },
  {
    title: "Step 3",
    image: "/assets/images/optimization.png",
    content: "Custom AI Build",
  },
  {
    title: "Step 4",
    image: "/assets/images/preferences.png",
    content: "Ongoing Support & Optimization",
  },
];

const WorkSteps = () => {
  return (
    <Container>
    <div className="py-[50px]  max-mob-lg:py-6  w-full mx-auto">
      <h2 className="text-[40px] font-bold leading-[1.2] text-center tracking-[0%]">
        How It Works
      </h2>
      <div className="mt-[50px] bg-[#222222] rounded-[20px] py-[40px]">
        <div className="flex flex-row justify-between max-w-[1438px] w-full mx-auto px-[20px] max-mob-lg:flex-wrap">
       {steps.map((step, index) => (
  <div key={index} className="flex flex-col items-center w-full relative">
    <h4 className="text-[24px] font-medium text-center text-white mb-[15px]">
      {step.title}
    </h4>
    <div className="w-[140px] h-[140px] rounded-full bg-accent-100 flex justify-center items-center max-mob-lg:w-[90px] max-mob-lg:h-[90px]">
      <Image src={step.image} alt={step.title} width={60} height={60} className="max-mob-lg:w-[40px] max-mob-lg:h-[40px]" />
    </div>
    <div className="mt-[-8px]">
      <Image
        className="w-[22px] h-[22px] max-mob-lg:w-[16px] max-mob-lg:h-[16px]"
        src="/assets/images/Polygon .png"
        alt="Arrow Down"
        width={20}
        height={20}
      />
    </div>
    <div className="mt-[20px] w-full flex items-center justify-center">
      <div
        className={`flex-1 h-[2px] max-mob-lg:hidden border-t-2 border-dotted border-[#FFFFFF4D] bg-opacity-30 ${
          index === 0 ? "opacity-0" : ""
        }`}
      ></div>

      <div className=" w-[20px] h-[20px] rounded-full border-[2px] border-accent-100 bg-white flex justify-center items-center">
        <div className="w-[10px] h-[10px] bg-accent-100 rounded-full"></div>
      </div>

      <div
        className={`flex-1 h-[2px] border-t-2  max-mob-lg:hidden border-dotted border-[#FFFFFF4D] bg-opacity-30 ${
          index === steps.length - 1 ? "opacity-0" : ""
        }`}
      ></div>
    </div>
    <span className="mt-[20px] text-[24px] font-medium leading-[35px] text-white text-center">
      {step.content}
    </span>
  </div>
))}

        </div>
      </div>
    </div>
    </Container>
  );
};

export default WorkSteps;