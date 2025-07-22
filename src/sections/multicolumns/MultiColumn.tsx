"use client";
import Container from "@/components/ui/conatiner/Container";
import Image from "next/image";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay } from "swiper/modules";

const MultiColumn = ({
  heading = "Common Business Automation Challenges We Solve Every Day",
}: {
  heading?: string;
}) => {
  const items = [
    {
      icon: "/assets/images/to-do.png",
      heading: "Manual Tasks Eating Your Time",
      content:
        "Your team spends 15+ hours weekly on repetitive work like email responses, data entry, and lead follow-ups. This slows growth and wastes money on tasks AI workflow automation can handle instantly.",
    },
    {
      icon: "/assets/images/chatSupport.png",
      heading: "Customer Support Bottlenecks",
      content:
        "Support teams get overwhelmed with the same questions daily. Long wait times frustrate customers and hurt your reputation. Our AI chatbots answer 80% of queries instantly, 24/7.",
    },
    {
      icon: "/assets/images/systems.png",
      heading: "Disconnected Business Systems",
      content:
        "Your tools don't talk to each other. Data gets lost between platforms. Workflow automation tools can connect everything, making your business run like a well-oiled machine.",
    },
    {
      icon: "/assets/images/chatbots.png",
      heading: "Basic Chatbots That Don't Work",
      content:
        "Generic chatbots give robotic answers and frustrate customers. Our custom AI chatbots understand context, learn from conversations, and provide helpful, human-like responses.",
    },
    {
      icon: "/assets/images/in-house.png",
      heading: "No AI Expertise In-House",
      content:
        "You want business process automation but lack technical skills. Our team handles everything - from setup to training - so you get results without the headaches.",
    },
  ];

  return (
    <div className="py-[50px] max-mob-lg:py-6">
      <Container>
        <h2 className="text-primary-100 text-center text-[40px] font-bold leading-[1.2] max-w-[1037px] mx-auto max-mob-lg:text-2xl">
          {heading}
        </h2>
        <p className="text-center text-[20px] text-primary-100/80 mt-4 max-w-[800px] mx-auto max-mob-lg:text-base">
          If any of these sound familiar, AI workflow automation can transform your business operations and boost productivity by 40% or more.
        </p>
        
        <div className="mt-[50px] max-mob-lg:mt-6 max-mob-lg:-mx-[16px]">
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

const MultiColumnItem = ({
  item,
}: {
  item: {
    icon: string;
    heading: string;
    content: string;
  };
}) => {
  return (
    <div className="bg-primary-100 w-full rounded-[20px] pt-11 px-[19px] pb-12 h-full">
      <div className="bg-accent-100 rounded-full w-[90px] h-[90px] flex justify-center items-center mx-auto">
        <Image
          alt={`${item?.heading} automation solution icon`}
          src={item?.icon}
          width={40}
          height={40}
        />
      </div>
      <div className="mt-10 mb-2.5 text-white text-2xl leading-[1.2] font-bold text-center">
        {item?.heading}
      </div>
      <div className="text-white text-sm leading-5 !font-normal text-center">
        {item?.content}
      </div>
    </div>
  );
};

export default MultiColumn;
