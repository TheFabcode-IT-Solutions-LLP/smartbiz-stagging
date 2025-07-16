import AiConversation from "@/components/homepage/AiConversation";
import Banner from "@/components/homepage/Banner";
import Services from "@/components/homepage/Services";
import WorkSteps from "@/components/homepage/WorkSteps";
import Button from "@/components/ui/button/Button";
import Image from "next/image";

export default function Home() {
  return <div>
    {/*<Button />*/}
    <Banner />
    <Services />
    <WorkSteps />
    <AiConversation />
  </div>;
}
