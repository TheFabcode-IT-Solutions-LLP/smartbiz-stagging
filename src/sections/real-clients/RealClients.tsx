import Container from "@/components/ui/conatiner/Container";
import Image from "next/image";
import React from "react";
import AOS from "aos";
import 'aos/dist/aos.css';
import { useEffect } from "react";

const RealClients = () => {

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
    });
  }, []);

  const items = [
    {
      image: "/assets/images/problem.png",
      heading: "E-commerce Customer Support Revolution",
    },
    {
      image: "/assets/images/ai-solution.png",
      heading: "SaaS Lead Generation Transformation",
    },
    {
      image: "/assets/images/outcome.png",
      heading: "Service Business Operational Efficiency",
    },
  ];
  return (
    <div className="py-[50px] max-mob-lg:py-6">
      <Container>
        <h2 className="text-primary-100 text-[40px] text-center font-bold leading-[1.2] max-w-[1037px] mx-auto max-des-4xl:text-2xl">
          Real Results from Real Clients
        </h2>
        <div data-aos="fade-in" className="mt-[50px] max-tab-lg:mt-6 flex gap-[25px] justify-between max-des-xl:gap-3 max-mob-lg:flex-wrap">
          {items &&
            items.map((item, index) => (
              <RealClientsItem key={item.heading} item={item} delay={index * 200} />
            ))}
        </div>
      </Container>
    </div>
  );
};

export default RealClients;

const RealClientsItem = ({
  item,
  delay,
}: {
  item: {
    image: string;
    heading: string;
  };
  delay: number;
}) => {
  return (
    <div data-aos="fade-in" data-aos-delay={delay} className="h-full w-full relative group overflow-hidden  rounded-[20px]">
      <Image
        alt="Site Logo"
        src={item.image}
        width={550}
        height={380}
        className="object-cover  group-hover:scale-[1.2] transition-all duration-300 w-full h-full block"
      />
      <div className="overlay-bg h-[133px] absolute bottom-0 left-0 w-full z-[1]"></div>
      <div className="text-2xl leading-[1.2] text-white font-bold text-center w-full bottom-6 absolute z-[2] max-mob-lg:text-lg">
        {item?.heading}
      </div>
    </div>
  );
};
