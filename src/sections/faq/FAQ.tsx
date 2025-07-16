"use client";
import Anchor from "@/components/ui/Anchor/Anchor";
import Container from "@/components/ui/conatiner/Container";
import Image from "next/image";
import React, { useState } from "react";

const FAQ = () => {
  const [activeAcc, setActiveTab] = useState("");
  const items = [
    {
      heading: "Do I need a tech team to use this?",
      content:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    },
    {
      heading: "How secure is the data?",
      content:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    },
    {
      heading: "What industries do you work with?",
      content:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    },
    {
      heading: "What’s the timeline to get started?",
      content:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    },
  ];
  return (
    <div className="py-[50px] max-mob-lg:py-6">
      <Container>
        <div className="flex max-tab-sm:flex-col max-tab-sm:gap-4">
          <div className="flex items-center max-tab-sm:justify-center">
            <div className="max-tab-sm:flex max-tab-sm:items-center max-tab-sm:flex-col">
              <h2 className="text-primary-100 text-[40px] text-left font-bold leading-[1.2] max-w-[1037px] mx-auto max-des-4xl:text-2xl max-tab-sm:text-center">
                FAQ
              </h2>
              <div className="text-primary-100/70 text-4xl max-mob-md:text-base max-tab-sm:mb-0 max-tab-sm:my-2 text-left font-normal mt-[18px] mb-[43px] max-des-2xl:max-w-[350px] max-tab-sm:mx-auto max-tab-sm:text-center max-w-[457px] leading-[1.2] mx-auto max-des-4xl:text-2xl">
                Your AI questions, expertly answered here
              </div>

              <Anchor href="/" label="View All Faqs" className="max-tab-sm:hidden" />
            </div>
          </div>

          <div className="flex-1 max-tab-sm:mt-0 pl-[50px] ml-20 max-tab-sm:border-l-0 max-tab-sm:pl-0 max-tab-sm:ml-0 border-l border-primary-100 space-y-[25px] max-des-2xl:space-y-4 max-des-2xl:pl-6 max-des-2xl:ml-6">
            {items &&
              items.map((item, index) => (
                <div
                  key={item.heading}
                  className="w-full rounded-[20px] bg-primary-100"
                >
                  <button
                    onClick={() =>
                      setActiveTab((prev) =>
                        prev == item.heading ? "" : item.heading
                      )
                    }
                    className={`${
                      activeAcc == item.heading
                        ? "bg-accent-100 rounded-t-[20px] "
                        : "bg-primary-100 rounded-[20px] "
                    } text-3xl font-medium  max-tab-md:text-sm max-tab-sm:p-5 text-left max-des-2xl:py-6  max-des-2xl:text-xl leading-[1.208] text-white cursor-pointer py-8 pl-7 pr-[39px] flex items-center justify-between w-full transition-all duration-300`}
                  >
                    {index + 1}. {item.heading}{" "}
                    <Image
                      alt="Arrow"
                      src="/assets/images/ArrowDown.png"
                      width={24}
                      height={24}
                      className={`${
                        activeAcc == item.heading ? "rotate-180" : ""
                      }  transition-all duration-300 max-tab-sm:max-w-4`}
                    />
                  </button>
                  <div
                    className={`${
                      activeAcc == item.heading
                        ? "max-h-[500px]"
                        : "max-h-[0px]"
                    } overflow-hidden transition-all max-des-2xl:text-base max-des-2xl:leading-[1.5] duration-300 text-xl leading-[30px] text-white font-normal text-left w-full  max-mob-lg:text-sm max-mob-lg:leading-[1.2]`}
                  >
                    <div className=" p-6 max-tab-sm:p-4">{item.content}</div>
                  </div>
                </div>
              ))}
          </div>
          <div className="max-tab-sm:flex justify-center hidden">
            <Anchor href="/" label="View All Faqs" className="" />
          </div>
        </div>
      </Container>
    </div>
  );
};

export default FAQ;
