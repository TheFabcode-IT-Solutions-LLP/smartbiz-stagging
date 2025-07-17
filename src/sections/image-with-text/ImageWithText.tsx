import Container from "@/components/ui/conatiner/Container";
import Image from "next/image";
import React from "react";
const ImageWithText = () => {
  const items = [
    " Drowning in Repetitive Manual Tasks",
    "Overwhelmed Customer Support Operations",
    "Inefficient Lead Management Process",
    "Disconnected Systems Creating Chaos",
  ];
  return (
    <Container className="py-[50px] max-mob-lg:py-6">
      <div className="bg-primary-100 rounded-[20px] w-full p-[45px] pl-[74px] flex  items-center justify-between gap-6 max-tab-md:p-10 max-tab-md:flex-col-reverse max-mob-lg:p-4 max-mob-lg:p-6">
        <div>
          <h2 className=" text-white text-[40px] font-bold leading-[1.2] max-w-[1037px] mx-auto max-des-4xl:text-2xl">
            Built for Businesses Like Yours
          </h2>
          <ul className="grid gap-10 mt-[50px] max-des-4xl:gap-5 max-des-4xl:mt-6">

            {items &&
              items.map((item) => (
                <li className="text-white text-2xl leading-[1.2] max-mob-md:text-base font-medium flex items-center gap-5 max-des-4xl:text-lg max-des-4xl:gap-2" key={item}>
                  <Image
                    alt="checked"
                    src="/assets/images/checked.png"
                    width={50}
                    height={50}
                    className="object-contain max-des-4xl:max-w-8"
                  />
                    {item}
                </li>
              ))}
          </ul>
        </div>
        <div className="max-w-[900px] max-des-4xl:flex-1">
              <Image
                    alt="checked"
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
