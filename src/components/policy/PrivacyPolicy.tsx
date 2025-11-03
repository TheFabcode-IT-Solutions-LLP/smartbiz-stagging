"use client";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Container from "../ui/conatiner/Container";

export default function PrivacyPolicy() {
  useEffect(() => {
    AOS.init({
      duration: 500,
      offset: 80,
      easing: "ease-out-cubic",
      once: true,
      mirror: false,
    });
  }, []);

  const listData = [
    "Create and manage your account.",
    "Deliver targeted advertising, newsletters, and other information regarding promotions and the website to you.",
    "Email you regarding your account or order.",
    "Fulfill and manage purchases, orders, payments, and other transactions related to the website and our services.",
    "Generate a personal profile about you to make future visits to the website and use of our services more personalized.",
    "Increase the efficiency and operation of the website and our services.",
    "Monitor and analyze usage and trends to improve your experience with the website and our services.",
    "Notify you of updates to the website and our services.",
    "Offer new products, services, mobile applications, and/or recommendations to you.",
    "Perform other business activities as needed.",
    "Prevent fraudulent transactions, monitor against theft, and protect against criminal activity.",
    "Process payments and refunds.",
    "Request feedback and contact you about your use of the website and our services.",
    "Resolve disputes and troubleshoot problems.",
    "Respond to product and customer service requests.",
    "Send you a newsletter.",
    "Train and improve our AI models and services.",
  ];

  return (
    <div className="py-[100px] max-mob-lg:py-[50px] bg-primary-100 text-white">
      <Container>
        <div className="max-w-[1200px] mx-auto space-y-8">
          {/* Page Title */}
          <h1
            data-aos="fade-down"
            className="text-[50px] font-bold text-white leading-[1.2] mb-[30px] max-mob-lg:text-3xl max-mob-lg:mb-4 text-center"
          >
            Privacy Policy
          </h1>

          {/* Introduction */}
          <section data-aos="fade-up">
            <h2 className="text-3xl font-bold mt-8 mb-4 max-mob-lg:text-2xl">
              Introduction
            </h2>
            <p>
              SmartBiz AI ("we," "our," or "us") is committed to protecting your
              privacy. This Privacy Policy explains how we collect, use,
              disclose, and safeguard your information when you visit our
              website or use our AI workflow automation, custom chatbots, smart
              analytics, and voice assistant services.
            </p>
            <p>
              Please read this privacy policy carefully. If you do not agree
              with the terms of this privacy policy, please do not access the
              site or use our services.
            </p>
          </section>

          {/* Information We Collect */}
          <section data-aos="fade-up" data-aos-delay="100">
            <h2 className="text-3xl font-bold mt-8 mb-4 max-mob-lg:text-2xl">
              Information We Collect
            </h2>
            <p>
              We may collect information about you in a variety of ways. The
              information we may collect via the website or our services
              includes:
            </p>

            <div className="space-y-6 mt-4">
              <div data-aos="fade-up" data-aos-delay="200">
                <h3 className="text-2xl font-bold mb-3 max-mob-lg:text-xl">
                  Personal Data
                </h3>
                <p>
                  Personally identifiable information, such as your name, email
                  address, telephone number, and business information that you
                  voluntarily give to us when you register with the website or
                  our services or when you choose to participate in various
                  activities related to the website or services.
                </p>
              </div>

              <div data-aos="fade-up" data-aos-delay="300">
                <h3 className="text-2xl font-bold mb-3 max-mob-lg:text-xl">
                  Derivative Data
                </h3>
                <p>
                  Information our servers automatically collect when you access
                  the website or our services, such as your IP address, browser
                  type, operating system, access times, and pages you have
                  viewed before and after accessing the site.
                </p>
              </div>

              <div data-aos="fade-up" data-aos-delay="400">
                <h3 className="text-2xl font-bold mb-3 max-mob-lg:text-xl">
                  AI Training Data
                </h3>
                <p>
                  When you use our AI services, we may collect data from your
                  interactions to improve and train our AI models. This may
                  include conversation logs, query patterns, and feedback on AI
                  responses.
                </p>
              </div>
            </div>
          </section>

          {/* Use of Your Information */}
          <section data-aos="fade-up" data-aos-delay="500">
            <h2 className="text-3xl font-bold mt-8 mb-4 max-mob-lg:text-2xl">
              Use of Your Information
            </h2>
            <p>
              Having accurate information about you permits us to provide you
              with a smooth, efficient, and customized experience. Specifically,
              we may use information collected about you via the website or our
              services to:
            </p>
            <ul className="list-disc pl-6 space-y-2 mt-3">
              {listData.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </section>

          {/* Disclosure of Your Information */}
          <section data-aos="fade-up" data-aos-delay="600">
            <h2 className="text-3xl font-bold mt-8 mb-4 max-mob-lg:text-2xl">
              Disclosure of Your Information
            </h2>
            <p>
              We may share information we have collected about you in certain
              situations. Your information may be disclosed as follows:
            </p>

            <div className="space-y-6 mt-4">
              <div data-aos="fade-up" data-aos-delay="700">
                <h3 className="text-2xl font-bold mb-3 max-mob-lg:text-xl">
                  By Law or to Protect Rights
                </h3>
                <p>
                  If we believe the release of information about you is
                  necessary to respond to legal process, to investigate or
                  remedy violations of our policies, or to protect the rights
                  and safety of others, we may share your data as permitted by
                  law.
                </p>
              </div>

              <div data-aos="fade-up" data-aos-delay="800">
                <h3 className="text-2xl font-bold mb-3 max-mob-lg:text-xl">
                  Third-Party Service Providers
                </h3>
                <p>
                  We may share your information with third parties that perform
                  services for us or on our behalf, such as payment processing,
                  email delivery, hosting, or marketing.
                </p>
              </div>

              <div data-aos="fade-up" data-aos-delay="900">
                <h3 className="text-2xl font-bold mb-3 max-mob-lg:text-xl">
                  Marketing Communications
                </h3>
                <p>
                  With your consent, we may share your information with third
                  parties for marketing purposes, as permitted by law.
                </p>
              </div>

              <div data-aos="fade-up" data-aos-delay="1000">
                <h3 className="text-2xl font-bold mb-3 max-mob-lg:text-xl">
                  Interactions with Other Users
                </h3>
                <p>
                  If you interact with other users, they may see your name,
                  profile photo, and activity description.
                </p>
              </div>

              <div data-aos="fade-up" data-aos-delay="1100">
                <h3 className="text-2xl font-bold mb-3 max-mob-lg:text-xl">
                  Online Postings
                </h3>
                <p>
                  When you post content to the site, your posts may be viewed by
                  all users and may be publicly distributed outside the website.
                </p>
              </div>
            </div>
          </section>

          {/* Security */}
          <section data-aos="fade-up" data-aos-delay="1200">
            <h2 className="text-3xl font-bold mt-8 mb-4 max-mob-lg:text-2xl">
              Security of Your Information
            </h2>
            <p>
              We use administrative, technical, and physical security measures
              to help protect your information. While we take reasonable steps,
              no security system is impenetrable, and we cannot guarantee
              complete security.
            </p>
          </section>

          {/* Policy for Children */}
          <section data-aos="fade-up" data-aos-delay="1300">
            <h2 className="text-3xl font-bold mt-8 mb-4 max-mob-lg:text-2xl">
              Policy for Children
            </h2>
            <p>
              We do not knowingly solicit information from or market to children
              under 13. If you believe we have collected such data, please
              contact us immediately.
            </p>
          </section>

          {/* Do-Not-Track */}
          <section data-aos="fade-up" data-aos-delay="1400">
            <h2 className="text-3xl font-bold mt-8 mb-4 max-mob-lg:text-2xl">
              Controls for Do-Not-Track Features
            </h2>
            <p>
              Most browsers include a Do-Not-Track (“DNT”) setting, but since no
              standard exists, we currently do not respond to DNT signals.
            </p>
          </section>

          {/* Options */}
          <section data-aos="fade-up" data-aos-delay="1500">
            <h2 className="text-3xl font-bold mt-8 mb-4 max-mob-lg:text-2xl">
              Options Regarding Your Information
            </h2>
            <p>
              You may at any time review, change, or delete your account, or
              request access to your personal data and corrections to it.
            </p>
          </section>

          {/* Contact */}
          <section data-aos="fade-up" data-aos-delay="1600">
            <h2 className="text-3xl font-bold mt-8 mb-4 max-mob-lg:text-2xl">
              Contact Us
            </h2>
            <p>
              If you have questions or comments about this Privacy Policy,
              please contact us at:
            </p>
            <p className="mt-4">
              <strong>SmartBiz AI</strong>
              <br />
              Email: privacy@smartbiz.ai
              <br />
              Phone: (555) 123-4567
            </p>
          </section>
        </div>
      </Container>
    </div>
  );
}
