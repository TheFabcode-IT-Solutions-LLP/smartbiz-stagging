import React from "react";
import Image from "next/image";
import Container from "../ui/conatiner/Container";
const AiConversation = () => {
  return (
    <div className="py-[50px] max-mob-lg:py-6 ">
        <Container>
            <div className="rounded-[20px] bg-[#222222] max-w-[1700px] w-full mx-auto flex flex-row justify-between">
      <div className="flex flex-col justify-center pl-[77px]   gap-[38px]">
        <h2 className="text-[40px] leading-[70px] text-left font-bold  text-white max-w-[595px]">
          Let’s Talk AI – Pick a Time That Works for You
        </h2>
        <div className="flex flex-row gap-[20px]">
          <div className="flex flex-row w-[400px] gap-[15px] border-[1px] rounded-[50px] border-white py-[20px] px-[46px]">
            <Image
              src="/assets/images/telephone.png"
              alt=""
              width={60}
              height={60}
            />
            <p className="text-[24px] flex justify-center items-center font-medium leading-1 text-white">
              Schedule My Call
            </p>
          </div>
          <div className="flex flex-row w-[400px] gap-[15px] border-[1px] rounded-[50px] border-[#FFFFFF] py-[20px] px-[46px]">
            <Image
              src="/assets/images/whatsapp .png"
              alt=""
              width={60}
              height={60}
            />
            <p className="text-[24px] flex justify-center items-center font-medium leading-1 text-white">
              Chat on WhatsApp
            </p>
          </div>
        </div>
      </div>
      <div className="pr-[44px] py-[50px] flex justify-end items-center w-[728px]  ">
        <Image
          src="/assets/images/women.png"
          alt="Illustration of a woman"
          width={684}
          height={501}
          className=" w-[684px] h-auto"
        />
      </div>
      </div>
      </Container>
    </div>
  );
};

export default AiConversation;
