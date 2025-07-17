"use client";
import Button from "@/components/ui/button/Button";
import Container from "@/components/ui/conatiner/Container";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

const Footer = () => {
  const sm = [
    {
      icons: "/assets/images/instagram.png",
      link: "/",
    },
    {
      icons: "/assets/images/facebook.png",
      link: "/",
    },
    {
      icons: "/assets/images/twiiter.png",
      link: "/",
    },
  ];
  const [formData, setFormData] = useState({
    email: "",
  });
  const date = new Date();
  return (
    <footer className="bg-primary-100 pt-[70px] max-tab-lg:pt-8">
      <Container>
        <div className="flex items-center gap-6 justify-between pb-[50px] max-mob-lg:pb-6 border-b border-white max-tab-lg:flex-wrap">
          <div>
            <h3 className="text-white text-[40px] text-left font-bold leading-[70px]  max-des-4xl:text-2xl max-mob-lg:leading-[2]">
              Subcribe to Our Newsletter
            </h3>
            <p className="text-white text-lg text-left font-normal leading-[1.208]  max-des-4xl:text-sm max-w-[637px]">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry&apos;s standard dummy
              text ever since.
            </p>
          </div>

          <div className="max-w-[870px] w-full">
            <form className="relative">
              <input
                type="email"
                onChange={(e) =>
                  setFormData((prev) => ({ ...prev, email: e.target.value }))
                }
                required
                value={formData?.email}
                placeholder="Enter your email address"
                className="w-full h-[70px] border border-white rounded-[70px] px-8 pr-[250px] text-white placeholder:text-white/50 text-lg text-left font-normal leading-[1.208]  max-des-4xl:text-sm"
              />
              <Button
                type="submit"
                label="Subscribe"
                className="absolute top-[5px] right-[5px] min-w-[240px] max-mob-lg:static max-mob-lg:w-full max-mob-lg:mt-2"
              ></Button>
            </form>
          </div>
        </div>
        <div className="flex justify-between gap-10 pt-[90px] pb-[100px] max-mob-lg:py-10 max-des-4xl:flex-wrap max-mob-lg:gap-4 max-mob-lg:justify-center">
          <div>
            <Link href={"/"}>
              {" "}
              <Image
                alt="Site Logo"
                src={"/assets/images/logo.png"}
                width={269}
                height={66}
                className="object-contain max-tab-lg:mx-auto"
              />
            </Link>
          </div>
          <div>
            <div className="text-3xl font-bold leading-[1.2] text-white text-left max-mob-lg:text-xl max-mob-lg:text-center">
              Get In Touch
            </div>
            <ul className="mt-[30px] space-y-5 max-mob-lg:mt-2 max-mob-lg:space-y-2">
              <li>
                <Link
                  className="text-white text-lg text-left font-normal leading-[1.208]  max-des-4xl:text-sm max-w-[637px] max-mob-lg:text-center"
                  href={"tel:+(00) - 76644 86743"}
                >
                  +(00) - 76644 86743
                </Link>
              </li>
              <li>
                <Link
                  className="text-white text-lg text-left font-normal leading-[1.208]  max-des-4xl:text-sm max-w-[637px] max-mob-lg:text-center"
                  href={"mailto:info@smartbizgenie.com"}
                >
                  info@smartbizgenie.com
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <div className="text-3xl font-bold leading-[1.2] text-white text-left max-mob-lg:text-xl max-mob-lg:text-center">
              Our Location
            </div>
            <ul className="mt-[30px] space-y-5 max-mob-lg:mt-2">
              <li className="text-white text-lg text-left font-normal max-mob-lg:text-center leading-[1.208]  max-des-4xl:text-sm max-w-[258px]">
                123 Lorem Street Suite 5B, Ips Park London, UK SW1A 1AA
              </li>
            </ul>
          </div>
          <div>
            <div className="text-3xl font-bold leading-[1.2] text-white text-left max-mob-lg:text-xl max-mob-lg:text-center">
              Follow Us
            </div>
            <ul className="mt-[30px] flex gap-[14.8px] max-mob-lg:mt-2">
              {sm.map((item) => (
                <li
                  key={item.icons}
                  className=""
                >
                    <Link href={ item.link || '/'} target="_blank">
                  <Image
                    src={item.icons}
                    alt="Site Logo"
                    width={36}
                    height={36}
                    className="object-contain max-tab-lg:mx-auto"
                  />
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="pt-[50px] pb-[45px] border-t border-white max-des-2xl:py-6 max-mob-lg:py-3 max-mob-lg:text-sm text-white font-normal text-2xl leading-[1.2] text-center">
                Copyright {date.getFullYear()} All Rights Reserved.
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
