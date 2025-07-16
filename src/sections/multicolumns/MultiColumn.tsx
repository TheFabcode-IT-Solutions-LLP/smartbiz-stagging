"use client";
import Container from "@/components/ui/conatiner/Container";
import Image from "next/image";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay } from "swiper/modules";
const MultiColumn = ({
  heading = "Struggling With Repetitive Tasks, Manual Workflows, or Customer Support?",
}: {
  heading?: string;
}) => {
  const items = [
    {
      icon: "/assets/images/to-do.png",
      heading: "Wasting Time on Repetitive Tasks",
      content:
        "Teams spend hours every week on manual tasks like email replies, lead qualification, or report generation-slowing growth and burning resources.",
    },
    {
      icon: "/assets/images/chatSupport.png",
      heading: "Overloaded Customer Support Teams",
      content:
        "Support teams are overwhelmed with routine queries, leading to long response times, missed SLAs, and frustrated customers.",
    },
    {
      icon: "/assets/images/systems.png",
      heading: "Disconnected Systems & Workflows",
      content:
        "Businesses struggle with siloed tools and platforms, making data flow and process automation nearly impossible.",
    },
    {
      icon: "/assets/images/chatbots.png",
      heading: "Low ROI from Generic Chatbots",
      content:
        "Most off-the-shelf chatbots can't understand context, don’t learn over time, and fail to deliver a personalized experience.",
    },
    {
      icon: "/assets/images/in-house.png",
      heading: "Lack of In-House AI Expertise",
      content:
        "Companies want to adopt AI but don’t have the technical resources or strategy to implement high-impact solutions like RAG or LangGraph.",
    },
  ];
  return (
    <div className="py-[50px] max-mob-lg:py-6">
      <Container>
        <h2 className=" text-primary-100 text-center text-[40px] font-bold leading-[1.2] max-w-[1037px] mx-auto max-mob-lg:text-2xl">
          {heading}
        </h2>
        <div className="mt-[50px] max-mob-lg:mt-6 max-mob-lg:-mx-[16px] ">
          <div className="product-slider-component relative px-0">
            <Swiper
              slidesPerView={1}
              spaceBetween={25}
              loop={true}
              autoplay={{
                delay: 3500,
                disableOnInteraction: false,
              }}
              modules={[Autoplay]}
              breakpoints={{
                320: {
                  centeredSlides: true,
                  slidesPerView: 1.3,
                  spaceBetween: 16,
                },
                640: {
                  centeredSlides: true,
                  slidesPerView: 2.3,
                  spaceBetween: 20,
                },
                990: {
                  centeredSlides: true,
                  slidesPerView: 3.3,
                  spaceBetween: 25,
                },
                1280: {                  
                  slidesPerView: 4,
                  spaceBetween: 25,
                },
                1440: {
                  autoplay: false,
                  slidesPerView: 5,
                  spaceBetween: 25,
                },
              }}
              className="mySwiper"
            >
              {items &&
                items.map((item) => (
                  <SwiperSlide className="!h-auto" key={`${item.heading}`}>
                    <MultiColumnItem item={item} />
                  </SwiperSlide>
                ))}
            </Swiper>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default MultiColumn;

const MultiColumnItem = ({
  item,
}: {
  item: {
    icon: string;
    heading: string;
    content: string;
    headingStyle?: string;
    contentStyle?: string;
  };
}) => {
  return (
    <div className="bg-primary-100 w-full rounded-[20px] pt-11 px-[19px] pb-12 h-full">
      <div className="bg-accent-100 rounded-full w-[90px] h-[90px] flex justify-center items-center mx-auto">
        <Image
          alt={item?.heading || ""}
          src={item?.icon}
          width={40}
          height={40}
        />
      </div>
      <div
        className={`mt-10 mb-2.5 text-white text-2xl leading-[1.2] font-bold text-center ${
          item?.headingStyle || ""
        }`}
      >
        {item?.heading}
      </div>
      <div
        className={`text-white text-sm leading-5 !font-normal text-center ${
          item?.contentStyle || ""
        }`}
      >
        {item?.content}
      </div>
    </div>
  );
};
