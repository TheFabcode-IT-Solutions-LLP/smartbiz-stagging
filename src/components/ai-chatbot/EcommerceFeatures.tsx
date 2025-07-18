import React from "react";
import Container from "../ui/conatiner/Container";

const ecommerceFeatures = [
  {
    title: "Product Discovery Made Easy",
    features: [
      "Intelligent search assistance",
      "Size and fit recommendations",
      "Stock availability updates",
      "Price comparison features"
    ]
  },
  {
    title: "Seamless Order Management",
    features: [
      "Real-time order tracking",
      "Easy returns and exchanges",
      "Payment query resolution",
      "Shipping information"
    ]
  },
  {
    title: "Personalized Shopping Experience",
    features: [
      "Browse history analysis",
      "Wishlist reminders",
      "Abandoned cart recovery",
      "Exclusive offer notifications"
    ]
  }
];

const EcommerceFeatures = () => {
  return (
    <div className="bg-[#F5F5F5] py-[50px] max-mob-lg:py-6">
      <Container>
        <h2 className="text-[40px] font-bold leading-[1.2] text-center tracking-[0%] max-des-3xl:text-2xl mb-[20px]">
          Built Specifically for Ecommerce Success
        </h2>
        <p className="text-[24px] font-normal leading-[1.2] text-center text-primary-100/80 mb-[50px] max-mob-lg:text-base max-mob-lg:mb-6">
          Our AI chatbot for ecommerce understands the unique challenges of online retail:
        </p>
        
        <div className="grid grid-cols-3 gap-[25px] max-tab-lg:grid-cols-1">
          {ecommerceFeatures.map((feature, index) => (
            <div key={index} className="bg-primary-100 rounded-[20px] p-[40px] max-mob-lg:p-[20px]">
              <h3 className="text-[24px] font-medium leading-[100%] text-white mb-[30px] max-mob-lg:text-[18px] max-mob-lg:mb-[20px]">
                {feature.title}
              </h3>
              <ul className="space-y-[15px]">
                {feature.features.map((item, itemIndex) => (
                  <li key={itemIndex} className="flex items-center gap-[15px]">
                    <div className="w-[8px] h-[8px] bg-accent-100 rounded-full flex-shrink-0"></div>
                    <span className="text-[18px] font-normal leading-[1.2] text-white/90 max-mob-lg:text-[14px]">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
};

export default EcommerceFeatures;