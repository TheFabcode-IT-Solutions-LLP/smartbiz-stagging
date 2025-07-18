import React from "react";
import Container from "@/components/ui/conatiner/Container";

const platforms = ["Shopify", "WooCommerce", "Magento", "BigCommerce", "Custom websites"];

const CompatiblePlatforms = () => {
  return (
    <div className="bg-[#F5F5F5] py-[50px] max-mob-lg:py-6">
      <Container>
        <h2 className="text-[40px] font-bold leading-[1.2] text-center tracking-[0%] max-des-3xl:text-2xl mb-[50px] max-mob-lg:mb-6">
          Compatible with Your Favorite Platforms
        </h2>
        <div className="flex flex-wrap justify-center gap-[20px]">
          {platforms.map((platform, index) => (
            <div
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