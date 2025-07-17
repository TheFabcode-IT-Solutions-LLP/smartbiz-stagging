'use client';
import Container from "@/components/ui/conatiner/Container";
import Image from "next/image";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay } from "swiper/modules";
const CustomerExperiences = () => {
  const items = [
    {
      image: "/assets/images/sarah.png",
      auth: "Rachel Martinez",
      desig: "TechStart Solutions",
      content:
        "SmartBiz AI completely transformed our customer support operations. Their WhatsApp AI chatbot handles 75% of our customer queries automatically, and our team can focus on high-value activities. We've seen a 40% increase in customer satisfaction and cut our support costs in half.",
    },
    {
      image: "/assets/images/sarah.png",
      auth: "David Chen",
      desig: "EcoMart Online",
      content:
        "The AI workflow automation they built for us is incredible. Our order processing time dropped from 6 hours to 30 minutes, and our customers love the instant responses. Sales have increased 35% since implementation, and our team is more productive than ever.",
    },
    {
      image: "/assets/images/sarah.png",
      auth: "Sarah Thompson",
      desig: "CloudTech Inc",
      content:
        "Their AI-powered lead management system revolutionized our sales process. We now identify high-value prospects 3x faster, and our conversion rates improved by 45%. The ROI was clear within the first month.",
    },
  ];
  return (
    <div className="py-[50px] max-mob-lg:py-6">
      <Container className="">
        <h2 className="text-primary-100 text-[40px] text-center font-bold leading-[1.2] max-w-[1037px] mx-auto max-des-4xl:text-2xl">
          Customer Experiences
        </h2>
        <div className="mt-[50px] max-tab-lg:mt-6 max-mob-lg:mx-[-16px]">
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
              768: {                
                slidesPerView: 2,
                spaceBetween: 25,
              },                  
              1440: {
                autoplay: false,
                slidesPerView: 3,
                spaceBetween: 25,
              },
            }}
            className="mySwiper"
          >
            {items &&
              items.map((item) => (
                <SwiperSlide className="!h-auto" key={item.auth}>                  
                  <CustomerExperiencesItem item={item} />
                </SwiperSlide>
              ))}
          </Swiper>
        </div>
      </Container>
    </div>
  );
};

export default CustomerExperiences;

const CustomerExperiencesItem = ({
  item,
}: {
  item: {
    image: string;
    auth: string;
    desig: string;
    content: string;
  };
}) => {
  return (
    <div className="h-full w-full relative pt-[19px] pl-[26px] pr-[58px] pb-[55px] bg-primary-100 rounded-[20px] max-mob-lg:p-4">
      <svg
        width="107"
        height="20"
        viewBox="0 0 107 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M3.81899 19.3808L6.21579 12.2576L0.436589 8.3824H7.51499L10.0462 0.743999L12.6222 8.3824H19.6558L13.8766 12.2576L16.3182 19.3808L10.0462 14.8336L3.81899 19.3808ZM25.5461 19.3808L27.9429 12.2576L22.1637 8.3824H29.2421L31.7733 0.743999L34.3493 8.3824H41.3829L35.6037 12.2576L38.0453 19.3808L31.7733 14.8336L25.5461 19.3808ZM47.2732 19.3808L49.67 12.2576L43.8908 8.3824H50.9692L53.5004 0.743999L56.0764 8.3824H63.11L57.3308 12.2576L59.7724 19.3808L53.5004 14.8336L47.2732 19.3808ZM69.0004 19.3808L71.3972 12.2576L65.618 8.3824H72.6964L75.2276 0.743999L77.8036 8.3824H84.8372L79.058 12.2576L81.4996 19.3808L75.2276 14.8336L69.0004 19.3808ZM90.7275 19.3808L93.1243 12.2576L87.3451 8.3824H94.4235L96.9547 0.743999L99.5307 8.3824H106.564L100.785 12.2576L103.227 19.3808L96.9547 14.8336L90.7275 19.3808Z"
          fill="#FFCC00"
        />
      </svg>

      <div className="text-xl leading-[30px] text-white font-normal text-left w-full mt-2.5 max-mob-lg:text-sm max-mob-lg:leading-[1.2]">
        {item?.content}
      </div>
      <div className="flex items-center gap-5 mt-[30px] max-mob-lg:gap-3 max-mob-lg:pr-[56px]">
        <div>
          <Image
            alt="Site Logo"
            src={item.image}
            width={70}
            height={70}
            className="object-cover  rounded-[70px]  w-[70px] h-[70px] block max-mob-lg:max-w-[50px] max-mob-lg:max-h-[50px]"
          />
        </div>
        <div>
          <div className="text-2xl leading-[1.208] text-white font-bold text-left w-full mt-0 max-mob-lg:text-base">
            {item.auth}
          </div>
          <div className="text-lg leading-[30px] text-white font-light text-left w-full mt-[3px] max-mob-lg:text-sm max-mob-lg:mt-[1px]">
            {item.desig}
          </div>
        </div>
        <Image
          alt="quote"
          src="/assets/images/quote.png"
          width={50}
          height={50}
          className="absolute bottom-[32px] right-[58px] max-mob-lg:w-10 max-mob-lg:h-10 max-mob-lg:right-4 max-mob-lg:bottom-4"
        />
      </div>
    </div>
  );
};
