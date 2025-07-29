'use client';
import React from "react";
import Container from "@/components/ui/conatiner/Container";

import { useEffect } from "react";
import AOS from "aos";
import 'aos/dist/aos.css';

const platforms = ["Shopify", "WooCommerce", "Magento", "BigCommerce", "Custom websites"];

const CompatiblePlatforms = () => {

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
    });
  }, []);

  return (
    <div className="bg-[#F5F5F5] py-[50px] max-mob-lg:py-6">
      <Container>
        <h2 data-aos="fade-in" className="text-[40px] font-bold leading-[1.2] text-center tracking-[0%] max-des-3xl:text-2xl mb-[50px] max-mob-lg:mb-6">
          Compatible with Your Favorite Platforms
        </h2>
        <div className="flex flex-wrap justify-center gap-[20px]">
          {platforms.map((platform, index) => (
            <div data-aos="fade-in"
              data-aos-delay={index * 100}
              key={index}
              className="bg-primary-100 text-white px-[40px] py-[20px] rounded-[50px] text-[20px] font-medium max-mob-lg:text-[16px] max-mob-lg:px-[25px] max-mob-lg:py-[15px]"
            >
              {platform}
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
};

export default CompatiblePlatforms;