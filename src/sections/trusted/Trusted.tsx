import Container from "@/components/ui/conatiner/Container";
import Image from "next/image";
import React from "react";

const Trusted = () => {
  const items = [
    {
      icon: "/assets/images/trust.png",
      text: "Over 50+ clients served across eCommerce, SaaS, and service-based businesses",
    },
    {
      icon: "/assets/images/artificial-intelligence.png",
      text: "Powered by OpenAI, LangChain, Zapier, and N8N",
    },
    {
      icon: "/assets/images/shield.png",
      text: "100% secure and scalable setups",
    },
  ];
  return (
    <div className="py-[50px] max-mob-lg:py-6">
      <Container>
        <h2 className="text-primary-100 text-[40px] text-center font-bold leading-[1.2] max-w-[1037px] mx-auto max-des-4xl:text-2xl">
          Built for Scale, Trusted by Industry
        </h2>
        <div className="flex justify-center gap-6 mt-[50px] max-mob-lg:mt-6 max-tab-md:flex-wrap">
          {items &&
            items.map((item) => <TrustedItem key={item.text} item={item} />)}
        </div>
      </Container>
    </div>
  );
};

export default Trusted;

const TrustedItem = ({
  item,
}: {
  item: {
    icon: string;
    text: string;
  };
}) => {
  return (
    <div>
      <div className="flex flex-col gap-4 items-center">
        <div className="bg-accent-100 w-20 h-20 rounded-full flex justify-center items-center">
          <Image alt="icon" src={item.icon} width={44} height={44} className="invert" />
        </div>
        <p className="text-xl leading-[30px] text-primary-100 max-w-[350px] font-medium text-center w-full mt-2.5 max-mob-lg:text-sm max-mob-lg:leading-[1.2]">{item.text}</p>
      </div>
    </div>
  );
};
