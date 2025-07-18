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

  const services = [
    { label: "AI Workflow Automation", href: "/24-7-customer-service" },
    { label: "Custom AI Chatbots", href: "/ai-chatbot-ecommerce" },
    { label: "Smart Analytics", href: "/ecommerce-upselling-chatbot" },
    { label: "Lead Management", href: "/automated-customer-support" },
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

  const [formData, setFormData] = useState({ email: "" });

  const [open, setOpen] = useState({
    services: false,
    quickLinks: false,
    legal: false,
  });

  // ✅ Accordion logic: only one open at a time
  const toggleSection = (section: keyof typeof open) => {
    setOpen((prev) => {
      const isAlreadyOpen = prev[section];
      return {
        services: false,
        quickLinks: false,
        legal: false,
        [section]: !isAlreadyOpen,
      };
    });
  };

  const date = new Date();

  return (
    <footer className="bg-primary-100 pt-[70px] max-tab-lg:pt-8">
      <Container>
        {/* Newsletter */}
        <div className="flex items-center gap-6 justify-between pb-[50px] max-mob-lg:pb-6 border-b border-white max-tab-lg:flex-wrap">
          <div>
            <h3 className="text-white text-[40px] text-left font-bold leading-[70px] max-des-4xl:text-2xl max-mob-lg:leading-[2]">
              Subcribe to Our Newsletter
            </h3>
            <p className="text-white text-lg text-left font-normal leading-[1.208] max-des-4xl:text-sm max-w-[637px]">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.
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
                value={formData.email}
                placeholder="Enter your email address"
                className="w-full h-[70px] border border-white rounded-[70px] px-8 max-tab-md:pr-8 pr-[250px] text-white placeholder:text-white/50 text-lg text-left font-normal leading-[1.208] max-des-4xl:text-sm"
              />
              <Button
                type="submit"
                label="Subscribe"
                className="absolute top-[5px] right-[5px] min-w-[240px] max-mob-lg:static max-mob-lg:w-full max-mob-lg:mt-2"
              />
            </form>
          </div>
        </div>

        <div className="flex justify-between gap-10 pt-[90px] pb-[100px] max-mob-lg:py-10 max-des-4xl:flex-wrap max-sm:flex-col max-mob-lg:gap-4 max-tab-lg:justify-center">
          <div>
            <Link href="/">
              <Image
                alt="Site Logo"
                src="/assets/images/logo.png"
                width={269}
                height={66}
                className="object-contain max-tab-lg:mx-auto"
              />
            </Link>
          </div>

          <div className="sm:hidden bg-[#F5F5F5] py-3 px-3 rounded-2xl">
            <button
              onClick={() => toggleSection("services")}
              className="text-3xl font-bold  w-full text-left flex items-center justify-between max-mob-lg:text-xl "
            >
              Services
           <span>
  {open.services ? (
    // Up arrow SVG
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="22"
      height="22"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polyline points="18 15 12 9 6 15" />
    </svg>
  ) : (
 
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="22"
      height="22"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polyline points="6 9 12 15 18 9" />
    </svg>
  )}
</span>

            </button>
            {open.services && (
              <ul className="mt-[20px] space-y-3">
                {services.map((service, index) => (
                  <li key={index}>
                    <Link
                      href={service.href}
                      className="text-lg font-normal block max-des-4xl:text-sm"
                    >
                      {service.label}
                    </Link>
                  </li>
                ))}
              </ul>
            )}
          </div>

          <div className="max-sm:hidden">
            <div className="text-3xl font-bold leading-[1.2] text-white text-left">
              Services
            </div>
            <ul className="mt-[30px] space-y-5">
              {services.map((service, index) => (
                <li key={index}>
                  <Link
                    className="text-white text-lg font-normal max-des-4xl:text-sm"
                    href={service.href}
                  >
                    {service.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="max-sm:hidden">
            <div className="text-3xl font-bold text-white text-left">
              Quick Links
            </div>
            <ul className="mt-[30px] space-y-5">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <Link
                    href={link.href}
                    className="text-white text-lg font-normal max-des-4xl:text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="sm:hidden bg-[#F5F5F5]  py-3 px-3 rounded-2xl ">
            <button
              onClick={() => toggleSection("legal")}
              className="text-3xl font-bold  w-full text-left flex items-center justify-between max-mob-lg:text-xl  "
            >
              Legal
             <span>
  {open.legal ? (
    // Up arrow SVG
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="12"
      height="12"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polyline points="18 15 12 9 6 15" />
    </svg>
  ) : (
    // Down arrow SVG
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="22"
      height="22"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polyline points="6 9 12 15 18 9" />
    </svg>
  )}
</span>

            </button>
            {open.legal && (
              <ul className="mt-[20px] space-y-3">
                {legalItems.map((item, index) => (
                  <li key={index}>
                    <Link
                      href={item.href}
                      className=" text-lg font-normal block max-des-4xl:text-sm"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            )}
          </div>

          <div className="max-sm:hidden">
            <div className="text-3xl font-bold text-white text-left">Legal</div>
            <ul className="mt-[30px] space-y-5">
              {legalItems.map((item, index) => (
                <li key={index}>
                  <Link
                    href={item.href}
                    className="text-white text-lg font-normal max-des-4xl:text-sm"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-[#F5F5F5] py-3 px-3 rounded-2xl">
            <button
              onClick={() => toggleSection("quickLinks")}
              className="text-3xl font-bold  w-full text-left flex items-center justify-between max-mob-lg:text-xl sm:hidden "
            >
              Quick Links
              <span>
  {open.quickLinks ? (
 
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="22"
      height="22"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polyline points="18 15 12 9 6 15" />
    </svg>
  ) : (
  
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="22"
      height="22"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polyline points="6 9 12 15 18 9" />
    </svg>
  )}
</span>

            </button>
            {open.quickLinks && (
              <ul className="mt-[20px] space-y-3">
                {quickLinks.map((link, index) => (
                  <li key={index}>
                    <Link
                      href={link.href}
                      className=" text-lg font-normal block max-des-4xl:text-sm"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            )}
          </div>

          <div className="max-sm:flex max-sm:flex-col max-sm:justify-center max-sm:items-center">
            <div className="text-3xl font-bold text-white text-left max-sm:mt-[30px]">
              Follow Us
            </div>
            <ul className="mt-[30px] flex gap-[14.8px]">
              {sm.map((item) => (
                <li key={item.icons}>
                  <Link href={item.link} target="_blank">
                    <Image
                      src={item.icons}
                      alt="Social Icon"
                      width={36}
                      height={36}
                      className="object-contain"
                    />
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="pt-[50px] pb-[45px] border-t border-white text-white text-center text-2xl max-mob-lg:text-sm">
          Copyright {date.getFullYear()} All Rights Reserved.
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
