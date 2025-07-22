"use client";

import Anchor from "@/components/ui/Anchor/Anchor";
import Button from "@/components/ui/button/Button";
import { useTheme } from "@/contexts/ThemeContext";
import Image from "next/image";
import React, { useState } from "react";
import Container from "@/components/ui/conatiner/Container";
const ContactPage = () => {
  const { toggleModal } = useTheme();
  const [message, setMessage] = useState({ message: "", type: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    if (!formData.name || !formData.email || !formData.message) {
      setMessage({
        message: "Please fill in all required fields!",
        type: "error",
      });
      setIsSubmitting(false);
      return;
    }

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();
      setMessage({
        message: result.message,
        type: response.ok ? "success" : "error",
      });

      if (response.ok) {
        setFormData({
          name: "",
          email: "",
          message: "",
        });
      }
    } catch (error) {
      console.error(error);
      setMessage({
        message: "Something went wrong! Please try again.",
        type: "error",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <>
      {/* Hero Section */}
      <section className="mb-[50px] bg-primary-100">
        <div className="text-center max-w-full w-full relative pb-[50px]">
          <Image
            src="/assets/images/young-adult-business-person-working-late-listening-generated-by-ai.jpg"
            alt="Contact SmartBiz AI team for AI workflow automation and custom chatbot consultation"
            width={1900}
            height={1000}
            className="w-full max-h-[100dvh] object-cover h-full"
          />

          <div className="absolute bottom-[80px] flex flex-col w-full max-tab-lg:mt-[50px] max-tab-md:relative max-tab-md:bottom-0 max-tab-lg:px-4">
            <h1 className="text-[50px] font-bold text-white leading-[60px] max-mob-lg:text-2xl max-des-3xl:text-[40px] max-mob-lg:leading-[1.2] max-des-3xl:leading-[40px]">
              Ready to Transform Your Business with{" "}
              <span className="text-accent-100">AI Workflow Automation?</span>
            </h1>
            <h2 className="text-[34px] font-normal leading-[100%] text-white mt-6 max-des-4xl:text-lg max-mob-lg:text-xl">
              Get in touch with our AI automation experts today
            </h2>
            <p className="text-[24px] leading-[1.2] text-white/80 mt-8 max-w-[900px] mx-auto max-mob-lg:text-base">
              Whether you need custom AI chatbots, business process automation, or a complete workflow automation solution, our team is here to help. Get a free consultation and see how we can save your business 20+ hours weekly.
            </p>
            <div className="flex gap-[35px] justify-center mt-[50px] max-tab-lg:gap-[20px] max-mob-lg:flex-wrap">
              <Button
                onClick={() => toggleModal(true)}
                label="Schedule Free Call"
              />
              <Anchor
                href="#contact-form"
                label="Send Message"
                className="bg-transparent border-2 border-white"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Contact Information Section */}
      <section className="py-[50px] max-mob-lg:py-6 max-sm:hidden">
        <Container>
          <h2 className="text-[40px] font-bold text-center text-primary-100 mb-[50px] max-des-3xl:text-2xl max-mob-lg:mb-6">
            Multiple Ways to Reach Our AI Automation Team
          </h2>
          <div className="grid grid-cols-3 gap-[40px] max-w-[1000px] mx-auto max-tab-lg:flex-1 max-tab-lg:flex-wrap max-tab-lg:justify-center max-tab-lg:gap-[20px]">
            {/* Call */}
            <div className="bg-[#F5F5F5] rounded-[20px] p-[40px] max-mob-lg:p-[20px] text-center">
              <div className="text-[48px] mb-[15px]">📞</div>
              <h3 className="text-[24px] font-bold text-primary-100 mb-[10px] max-mob-lg:text-[18px]">
                Schedule a Call
              </h3>
              <p className="text-[18px] text-primary-100/70 max-mob-lg:text-[14px] mb-4">
                Book a free 30-minute consultation to discuss your automation needs
              </p>
              <Button
                onClick={() => toggleModal(true)}
                label="Book Now"
                className="text-[16px] py-[12px] px-[24px]"
              />
            </div>

            {/* Email */}
            <div className="bg-[#F5F5F5] rounded-[20px] p-[40px] max-mob-lg:p-[20px] text-center">
              <div className="text-[48px] mb-[15px]">✉️</div>
              <h3 className="text-[24px] font-bold text-primary-100 mb-[10px] max-mob-lg:text-[18px]">
                Email Us
              </h3>
              <p className="text-[18px] text-primary-100/70 max-mob-lg:text-[14px] mb-4">
                Send us a detailed message about your project
              </p>
              <a
                href="mailto:hello@smartbizgenie.com"
                className="text-[16px] text-accent-100 font-medium hover:underline"
              >
                hello@smartbizgenie.com
              </a>
            </div>

            {/* Chat */}
            <div className="bg-[#F5F5F5] rounded-[20px] p-[40px] max-mob-lg:p-[20px] text-center">
              <div className="text-[48px] mb-[15px]">💬</div>
              <h3 className="text-[24px] font-bold text-primary-100 mb-[10px] max-mob-lg:text-[18px]">
                Chat with AI
              </h3>
              <p className="text-[18px] text-primary-100/70 max-mob-lg:text-[14px] mb-4">
                Get instant answers from our AI chatbot
              </p>
              <span className="text-[16px] text-primary-100 font-medium">
                Available 24/7
              </span>
            </div>
          </div>
        </Container>
      </section>

      {/* Contact Form Section */}
      <section id="contact-form" className="bg-primary-100 py-[50px] max-mob-lg:py-6 my-[50px]">
        <Container>
          <h2 className="text-[40px] font-bold text-center text-white mb-[50px] max-des-3xl:text-2xl max-mob-lg:mb-6">
            Send Us a Message
          </h2>
          <div className="max-w-[800px] mx-auto">
            <div className="bg-white/10 backdrop-blur-sm rounded-[20px] p-[50px] max-mob-lg:p-[30px]">
              <form onSubmit={handleSubmit} className="space-y-[30px]">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-[18px] font-medium text-white mb-[10px] max-mob-lg:text-[16px]"
                  >
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full h-[60px] px-[20px] rounded-[15px] border border-white/20 bg-white/10 text-white placeholder:text-white/60 text-[18px] max-mob-lg:text-[16px] max-mob-lg:h-[50px] focus:outline-none focus:border-accent-100 transition-colors"
                    placeholder="Enter your full name"
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-[18px] font-medium text-white mb-[10px] max-mob-lg:text-[16px]"
                  >
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full h-[60px] px-[20px] rounded-[15px] border border-white/20 bg-white/10 text-white placeholder:text-white/60 text-[18px] max-mob-lg:text-[16px] max-mob-lg:h-[50px] focus:outline-none focus:border-accent-100 transition-colors"
                    placeholder="Enter your email address"
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-[18px] font-medium text-white mb-[10px] max-mob-lg:text-[16px]"
                  >
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={6}
                    className="w-full px-[20px] py-[15px] rounded-[15px] border border-white/20 bg-white/10 text-white placeholder:text-white/60 text-[18px] max-mob-lg:text-[16px] resize-vertical min-h-[120px] focus:outline-none focus:border-accent-100 transition-colors"
                    placeholder="Tell us about your AI automation needs, current challenges, or any questions you have..."
                  />
                </div>

                {message.type === "error" && (
                  <div className="p-4 text-sm text-red-100 rounded-lg bg-red-500/20 border border-red-500/30">
                    <span className="font-medium">Error!</span> {message.message}
                  </div>
                )}

                {message.type === "success" && (
                  <div className="p-4 text-sm text-green-100 rounded-lg bg-green-500/20 border border-green-500/30">
                    <span className="font-medium">Success!</span> {message.message}
                  </div>
                )}

                <Button
                  type="submit"
                  label={isSubmitting ? "Sending..." : "Send Message"}
                  className="w-full text-center justify-center flex items-center"
                  onClick={() => {}}
                />
              </form>

              <div className="mt-[40px] text-center">
                <p className="text-[16px] text-white/80 max-mob-lg:text-[14px]">
                  Expected response time: Within 24 hours
                </p>
                <p className="text-[16px] text-white/80 mt-2 max-mob-lg:text-[14px]">
                  For urgent matters, please schedule a call above
                </p>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
};

export default ContactPage;
