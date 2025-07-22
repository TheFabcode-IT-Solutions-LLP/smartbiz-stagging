import Container from "@/components/ui/conatiner/Container";
import Image from "next/image";
import React from "react";

const ImageWithText = () => {
  const items = [
    "Spending 20+ hours weekly on manual tasks that workflow automation can handle",
    "Missing leads because your customer support team is overwhelmed with queries", 
    "Losing revenue due to slow response times and poor customer experience",
    "Struggling with disconnected systems that don't share data or work together",
  ];
  
  return (
    <Container className="py-[50px] max-mob-lg:py-6">
      <div className="bg-primary-100 rounded-[20px] w-full p-[45px] pl-[74px] flex items-center justify-between gap-6 max-tab-md:p-10 max-tab-md:flex-col-reverse max-mob-lg:p-4 max-mob-lg:p-6">
        <div>
          <h2 className="text-white text-[40px] font-bold leading-[1.2] max-w-[1037px] mx-auto max-des-4xl:text-2xl">
            Is Your Business Stuck with These Time-Wasting Problems?
          </h2>
          
          <p className="text-white/90 text-[18px] mt-4 mb-8 max-mob-lg:text-base">
            These common challenges cost businesses thousands in lost productivity every month. But AI workflow automation can solve them in weeks, not months.
          </p>
          
          <ul className="grid gap-10 mt-[50px] max-des-4xl:gap-5 max-des-4xl:mt-6">
            {items &&
              items.map((item) => (
                <li className="text-white text-2xl leading-[1.2] max-mob-md:text-base font-medium flex items-center gap-5 max-des-4xl:text-lg max-des-4xl:gap-2" key={item}>
                  <Image
                    alt="Business automation solution checkmark"
                    src="/assets/images/checked.png"
                    width={50}
                    height={50}
                    className="object-contain max-des-4xl:max-w-8"
                  />
                  {item}
                </li>
              ))}
          </ul>
          
          <div className="mt-8 p-6 bg-accent-100 rounded-[15px]">
            <p className="text-white font-bold text-[18px] mb-2">
              Ready to Fix These Problems?
            </p>
            <p className="text-white text-[16px]">
              Our business process automation solutions have helped 50+ companies eliminate these exact challenges. Most see results in 2-4 weeks.
            </p>
          </div>
        </div>
        
        <div className="max-w-[900px] max-des-4xl:flex-1">
          <Image
            alt="Business automation challenges solved by AI workflow automation"
            src="/assets/images/businesses-like-yours.png"
            width={990}
            height={550}
            className="object-cover rounded-[20px]"
          />
        </div>
      </div>
    </Container>
  );
};

export default ImageWithText;