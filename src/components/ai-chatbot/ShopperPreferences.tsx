import React from "react";
import Container from "../ui/conatiner/Container";

const shopperPreferences = [
  {
    icon: "⚡",
    title: "Instant Response Time",
    description: "Answer customer queries in under 2 seconds"
  },
  {
    icon: "🛍️",
    title: "Smart Product Recommendations",
    description: "Increase average order value by 35%"
  },
  {
    icon: "🌐",
    title: "Multilingual Support",
    description: "Serve global customers in 50+ languages"
  },
  {
    icon: "📈",
    title: "Data-Driven Insights",
    description: "Track customer behavior and preferences"
  }
];

const ShopperPreferences = () => {
  return (
    <Container>
      <div className="py-[50px] max-mob-lg:py-6">
        <h2 className="text-[40px] font-bold leading-[1.2] text-center tracking-[0%] max-des-3xl:text-2xl mb-[50px] max-mob-lg:mb-6">
          Why 73% of Online Shoppers Prefer AI Chatbots
        </h2>
        
        <div className="grid grid-cols-2 gap-[40px] max-tab-lg:grid-cols-1 max-tab-lg:gap-[20px]">
          {shopperPreferences.map((item, index) => (
            <div key={index} className="flex gap-[20px] items-start">
              <div className="text-[48px] max-mob-lg:text-[36px]">{item.icon}</div>
              <div>
                <h3 className="text-[24px] font-medium leading-[100%] text-primary-100 mb-[10px] max-mob-lg:text-[18px]">
                  {item.title}
                </h3>
                <p className="text-[18px] font-normal leading-[1.2] text-primary-100/70 max-mob-lg:text-[14px]">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Container>
  );
};

export default ShopperPreferences;