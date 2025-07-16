import Button from "@/components/ui/button/Button";
import CustomerExperiences from "@/sections/customer-experiences/CustomerExperiences";
import FAQ from "@/sections/faq/FAQ";
import ImageWithText from "@/sections/image-with-text/ImageWithText";
import MultiColumn from "@/sections/multicolumns/MultiColumn";
import RealClients from "@/sections/real-clients/RealClients";
import Trusted from "@/sections/trusted/Trusted";
import WhyChoose from "@/sections/why-choose-us/WhyChoose";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <MultiColumn />
      <ImageWithText />
      <RealClients />
      <div className="text-white bg-accent-100 text-center font-medium text-2xl leading-[1.208] px-6 pt-[26px] pb-[25px] min-h-[80px] max-mob-lg:text-base max-mob-lg:py-3 max-mob-lg:min-h-auto mb-[50px]">
        30% reduction in support response time with an AI agent built using LangGraph
      </div>
      <CustomerExperiences />
      <WhyChoose />
      <FAQ />
      <Trusted />
    </div>
  );
}
