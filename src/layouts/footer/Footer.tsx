"use client";
import Button from "@/components/ui/button/Button";
import Container from "@/components/ui/conatiner/Container";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

const Footer = () => {
  const [message, setMessage] = useState({ message: "", type: "" });
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
  const services = [
    {
      label: "AI Workflow Automation",
      href: "/ Automation",
    },
    {
      label: "Custom AI Chatbots",
      href: "/Chatbots",
    },
    {
      label: "Smart Analytics",
      href: "/Smart Analytics",
    },
    {
      label: "Lead Management",
      href: "/Lead Management",
    },
  ];
  const quickLinks = [
    { label: "Services", href: "/services" },
    { label: "Case Studies", href: "/case-studies" },
    { label: "How It Works", href: "/how-it-works" },
    { label: "Pricing", href: "/pricing" },
    { label: "Contact", href: "/contact" },
  ];
  const legalItems = [
    { label: "Privacy Policy", href: "/privacy-policy" },
    { label: "Terms of Service", href: "/terms-of-service" },
    { label: "Security", href: "/security" },
    { label: "Compliance", href: "/compliance" },
  ];

  const [formData, setFormData] = useState({
    email: "",
  });
  const date = new Date();
  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!formData.email) {
      setMessage({
        message: "Email is required!",
        type: "error",
      });
      return null;
    }
    try {
      const response = await fetch("/api/newsletter", {
        body: JSON.stringify({
          email: formData.email,
        }),
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
      });
      const result = await response.json();
      setMessage({
        message: result.message,
        type: response.ok ? "success" : "error",
      });
      if (response.ok) {
        setFormData({
          email: "",
        });
      }
    } catch (e: unknown) {
      console.error(e);
      setMessage({
        message: "Something went wrong!",
        type: "error",
      });
    }
  };
  return (
    <footer className="bg-primary-100 pt-[70px] max-tab-lg:pt-8">
      <Container>
        <div className="flex items-center gap-6 justify-between pb-[50px] max-mob-lg:pb-6 border-b border-white max-tab-lg:flex-wrap">
          <div>
            <h3 className="text-white text-[40px] text-left font-bold leading-[70px]  max-des-4xl:text-2xl max-mob-lg:leading-[2]">
              Subcribe to Our Newsletter
            </h3>
            <p className="text-white text-lg text-left font-normal leading-[1.208]  max-des-4xl:text-sm max-w-[637px]">
              Stay ahead with the latest AI automation insights, exclusive tips,
              and success stories. Get weekly updates on cutting-edge chatbot
              strategies, workflow optimization techniques, and special offers
              delivered straight to your inbox.
            </p>
          </div>

          <div className="max-w-[870px] w-full">
            <form className="relative" onSubmit={(e) => onSubmit(e)}>
              <input
                type="email"
                onChange={(e) =>
                  setFormData((prev) => ({ ...prev, email: e.target.value }))
                }
                required
                value={formData?.email}
                placeholder="Enter your email address"
                className="w-full h-[70px] border border-white rounded-[70px] px-8 max-tab-md:pr-8 pr-[250px] text-white placeholder:text-white/50 text-lg text-left font-normal leading-[1.208]  max-des-4xl:text-sm"
              />
              <Button
                type="submit"
                label="Subscribe"
                className="absolute top-[5px] right-[5px] min-w-[240px] max-mob-lg:static max-mob-lg:w-full max-mob-lg:mt-2"
              ></Button>
            </form>
            {message?.type == "error" && (
              <div
                className="p-4 my-4 text-sm text-red-800 rounded-lg bg-red-50 "
                role="alert"
              >
                <span className="font-medium">Error!</span> {message?.message}
              </div>
            )}
            {message?.type == "success" && (
              <div
                className="p-4 my-4 text-sm text-green-800 rounded-lg bg-green-50 "
                role="alert"
              >
                <span className="font-medium">Success alert!</span>{" "}
                {message?.message}
              </div>
            )}
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
              Services
              <ul className="mt-[30px] space-y-5 max-mob-lg:mt-2 max-mob-lg:space-y-2">
                {services.map((service, index) => (
                  <li key={index}>
                    <Link
                      className="text-white text-lg text-left font-normal leading-[1.208] max-des-4xl:text-sm max-w-[637px] max-mob-lg:text-center"
                      href={service.href}
                    >
                      {service.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div>
            <div className="text-3xl font-bold leading-[1.2] text-white text-left max-mob-lg:text-xl max-mob-lg:text-center">
              Quick Links
            </div>
            <ul className="mt-[30px] space-y-5 max-mob-lg:mt-2">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <Link
                    href={link.href}
                    className="text-white text-lg text-left font-normal max-mob-lg:text-center leading-[1.208] max-des-4xl:text-sm max-w-[258px]"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <div className="text-3xl font-bold leading-[1.2] text-white text-left max-mob-lg:text-xl max-mob-lg:text-center">
              Legal
            </div>
            <ul className="mt-[30px] space-y-5 max-mob-lg:mt-2">
              {legalItems.map((item, index) => (
                <li key={index}>
                  <Link
                    href={item.href}
                    className="text-white text-lg text-left font-normal max-mob-lg:text-center leading-[1.208] max-des-4xl:text-sm max-w-[258px]"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <div className="text-3xl font-bold leading-[1.2] text-white text-left max-mob-lg:text-xl max-mob-lg:text-center">
              Follow Us
            </div>
            <ul className="mt-[30px] flex gap-[14.8px] max-mob-lg:mt-2">
              {sm.map((item) => (
                <li key={item.icons} className="">
                  <Link href={item.link || "/"} target="_blank">
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
