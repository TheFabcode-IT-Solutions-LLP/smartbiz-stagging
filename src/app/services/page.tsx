import Container from "@/components/ui/conatiner/Container";
import Anchor from "@/components/ui/Anchor/Anchor";
import Image from "next/image";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "AI Workflow Automation Services | Custom Chatbots & Business Process Automation - SmartBiz AI",
  description: "Complete AI workflow automation services including custom AI chatbots, business process automation, smart analytics, and voice assistants. Save 20+ hours weekly with proven automation solutions.",
  keywords: "AI workflow automation services, custom AI chatbots, business process automation, workflow automation tools, AI automation platform, smart analytics, AI lead management, voice assistants",
  alternates: {
    canonical: `https://smartbizgenie.com/services`,
  },
};

export default function page() {
  return (
    <>
      {/* Hero Section */}
      <section className=" mb-[50px] bg-primary-100">
        <div className="text-center max-w-full w-full relative pb-[50px]">
          <Image
            src="/assets/images/young-adult-business-person-working-late-listening-generated-by-ai.jpg"
            alt="AI workflow automation services team building custom chatbots and business process automation solutions"
            width={1900}
            height={1000}
            className="w-full max-h-[100dvh] object-cover h-full"
          />
           
          <div className="absolute bottom-[80px] flex flex-col w-full max-tab-lg:mt-[50px]  max-tab-md:relative max-tab-md:bottom-0  max-tab-lg:px-4  ">
            <h1 className="text-[50px] font-bold text-white leading-[60px] max-mob-lg:text-2xl max-des-3xl:text-[40px] max-mob-lg:leading-[1.2] max-des-3xl:leading-[40px]">
              AI Workflow Automation Services That{" "}
              <span className="text-accent-100">Actually Work for Your Business</span>
            </h1>
            <h2 className="text-[34px] font-normal leading-[100%] text-white mt-6 max-des-4xl:text-lg max-mob-lg:text-xl ">
              Complete automation solutions that save 20+ hours weekly and boost profits
            </h2>
            <p className="text-[24px] leading-[1.2] text-white/80 mt-8 max-w-[900px] mx-auto max-mob-lg:text-base ">
              From custom AI chatbots to complete business process automation, we build workflow automation tools that solve real problems. Our AI automation services help businesses save time, cut costs, and grow faster with proven technology.
            </p>
            <div className="flex gap-[35px] justify-center mt-[50px] max-tab-lg:gap-[20px] max-mob-lg:flex-wrap">
              <Anchor
                href="/get-started"
                label="Get Started Free"
                className=""
              />
              <Anchor
                href="/demo"
                label="Book a Demo"
                className=" bg-transparent border-2 border-white "
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview Section */}
      <section className="py-[50px] max-mob-lg:py-6 max-sm:hidden">
        <Container>
          <h2 className="text-[40px] font-bold text-center text-primary-100 mb-[50px] max-des-3xl:text-2xl max-mob-lg:mb-6">
            Complete AI Workflow Automation Services
          </h2>
          <div className="grid grid-cols-2 gap-[40px] max-w-[1200px] mx-auto max-tab-lg:flex-1 max-tab-lg:flex-wrap max-tab-lg:justify-center max-tab-lg:gap-[20px]">
            <div className="bg-[#F5F5F5] rounded-[20px] p-[40px] max-mob-lg:p-[20px]">
              <div className="text-[48px] mb-[15px]">🤖</div>
              <h3 className="text-[24px] font-bold text-primary-100 mb-[10px] max-mob-lg:text-[18px]">
                Custom AI Chatbots
              </h3>
              <p className="text-[18px] text-primary-100/70 max-mob-lg:text-[14px]">
                Smart chatbots that understand your business and customers
              </p>
            </div>
            <div className="bg-[#F5F5F5] rounded-[20px] p-[40px] max-mob-lg:p-[20px]">
              <div className="text-[48px] mb-[15px]">⚙️</div>
              <h3 className="text-[24px] font-bold text-primary-100 mb-[10px] max-mob-lg:text-[18px]">
                Business Process Automation
              </h3>
              <p className="text-[18px] text-primary-100/70 max-mob-lg:text-[14px]">
                Connect your tools and automate entire workflows
              </p>
            </div>
            <div className="bg-[#F5F5F5] rounded-[20px] p-[40px] max-mob-lg:p-[20px]">
              <div className="text-[48px] mb-[15px]">📊</div>
              <h3 className="text-[24px] font-bold text-primary-100 mb-[10px] max-mob-lg:text-[18px]">
                Smart Analytics & AI Reporting
              </h3>
              <p className="text-[18px] text-primary-100/70 max-mob-lg:text-[14px]">
                Get insights that help you make better business decisions
              </p>
            </div>
            <div className="bg-[#F5F5F5] rounded-[20px] p-[40px] max-mob-lg:p-[20px]">
              <div className="text-[48px] mb-[15px]">🎯</div>
              <h3 className="text-[24px] font-bold text-primary-100 mb-[10px] max-mob-lg:text-[18px]">
                AI Lead Management
              </h3>
              <p className="text-[18px] text-primary-100/70 max-mob-lg:text-[14px]">
                Find, qualify, and nurture leads automatically
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* Mobile Services Section */}
      <section className="py-[50px] max-mob-lg:py-6 sm:hidden">
        <Container>
          <h2 className="text-[40px] font-bold text-center text-primary-100 mb-[50px] max-des-3xl:text-2xl max-mob-lg:mb-6">
            Complete AI Workflow Automation Services
          </h2>
          <div className="overflow-x-auto max-tab-lg:overflow-x-scroll">
            <div className="grid grid-cols-2 gap-[40px] max-w-[1200px] mx-auto max-tab-lg:flex max-tab-lg:gap-[20px] max-tab-lg:whitespace-nowrap">
              {[
                {
                  icon: "🤖",
                  title: "Custom AI Chatbots",
                  desc: "Smart chatbots that understand your business and customers",
                },
                {
                  icon: "⚙️",
                  title: "Business Process Automation",
                  desc: "Connect your tools and automate entire workflows",
                },
                {
                  icon: "📊",
                  title: "Smart Analytics & AI Reporting",
                  desc: "Get insights that help you make better business decisions",
                },
                {
                  icon: "🎯",
                  title: "AI Lead Management",
                  desc: "Find, qualify, and nurture leads automatically",
                },
              ].map(({ icon, title, desc }, i) => (
                <div
                  key={i}
                  className="bg-[#F5F5F5] rounded-[20px] p-[40px] min-w-[280px] max-w-[300px] max-mob-lg:p-[20px] flex-shrink-0"
                >
                  <div className="text-[48px] mb-[15px]">{icon}</div>
                  <h3 className="text-[24px] font-bold text-primary-100 mb-[10px] max-mob-lg:text-[18px]">
                    {title}
                  </h3>
                  <p className="text-[18px] text-primary-100/70 max-mob-lg:text-[14px]">
                    {desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* Detailed Service #1 - Custom AI Chatbots */}
      <section className="bg-primary-100 py-[50px] max-mob-lg:py-6 my-[50px]">
        <Container>
          <h2 className="text-[40px] font-bold text-center text-white mb-[50px] max-des-3xl:text-2xl max-mob-lg:mb-6">
            Custom AI Chatbots That Understand Your Business
          </h2>
          <div className="grid grid-cols-3 gap-[25px] max-tab-lg:flex max-tab-lg:flex-wrap max-tab-lg:justify-center">
            <div className="bg-white/10 backdrop-blur-sm rounded-[20px] p-[40px] max-mob-lg:p-[20px] max-des-xl:p-[30px]">
              <h3 className="text-[24px] font-medium text-accent-100 mb-[20px] max-mob-lg:text-[18px]">
                24/7 Customer Support
              </h3>
              <ul className="space-y-[15px]">
                <li className="flex items-center gap-[10px]">
                  <span className="w-[8px] h-[8px] bg-accent-100 rounded-full flex-shrink-0"></span>
                  <span className="text-white text-[18px] max-mob-lg:text-[14px]">
                    Answer questions instantly, any time
                  </span>
                </li>
                <li className="flex items-center gap-[10px]">
                  <span className="w-[8px] h-[8px] bg-accent-100 rounded-full flex-shrink-0"></span>
                  <span className="text-white text-[18px] max-mob-lg:text-[14px]">
                    Handle multiple customers at once
                  </span>
                </li>
                <li className="flex items-center gap-[10px]">
                  <span className="w-[8px] h-[8px] bg-accent-100 rounded-full flex-shrink-0"></span>
                  <span className="text-white text-[18px] max-mob-lg:text-[14px]">
                    Transfer complex issues to humans
                  </span>
                </li>
                <li className="flex items-center gap-[10px]">
                  <span className="w-[8px] h-[8px] bg-accent-100 rounded-full flex-shrink-0"></span>
                  <span className="text-white text-[18px] max-mob-lg:text-[14px]">
                    Learn from every conversation
                  </span>
                </li>
              </ul>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-[20px] p-[40px] max-mob-lg:p-[20px] max-des-xl:p-[30px]">
              <h3 className="text-[24px] font-medium text-accent-100 mb-[20px] max-mob-lg:text-[18px]">
                Sales & Lead Generation
              </h3>
              <ul className="space-y-[15px]">
                <li className="flex items-center gap-[10px]">
                  <span className="w-[8px] h-[8px] bg-accent-100 rounded-full flex-shrink-0"></span>
                  <span className="text-white text-[18px] max-mob-lg:text-[14px]">
                    Qualify leads automatically
                  </span>
                </li>
                <li className="flex items-center gap-[10px]">
                  <span className="w-[8px] h-[8px] bg-accent-100 rounded-full flex-shrink-0"></span>
                  <span className="text-white text-[18px] max-mob-lg:text-[14px]">
                    Schedule appointments and demos
                  </span>
                </li>
                <li className="flex items-center gap-[10px]">
                  <span className="w-[8px] h-[8px] bg-accent-100 rounded-full flex-shrink-0"></span>
                  <span className="text-white text-[18px] max-mob-lg:text-[14px]">
                    Recommend products and services
                  </span>
                </li>
                <li className="flex items-center gap-[10px]">
                  <span className="w-[8px] h-[8px] bg-accent-100 rounded-full flex-shrink-0"></span>
                  <span className="text-white text-[18px] max-mob-lg:text-[14px]">
                    Follow up with warm prospects
                  </span>
                </li>
              </ul>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-[20px] p-[40px] max-mob-lg:p-[20px] max-des-xl:p-[30px]">
              <h3 className="text-[24px] font-medium text-accent-100 mb-[20px] max-mob-lg:text-[18px]">
                Multi-Platform Integration
              </h3>
              <ul className="space-y-[15px]">
                <li className="flex items-center gap-[10px]">
                  <span className="w-[8px] h-[8px] bg-accent-100 rounded-full flex-shrink-0"></span>
                  <span className="text-white text-[18px] max-mob-lg:text-[14px]">
                    Website chat widgets
                  </span>
                </li>
                <li className="flex items-center gap-[10px]">
                  <span className="w-[8px] h-[8px] bg-accent-100 rounded-full flex-shrink-0"></span>
                  <span className="text-white text-[18px] max-mob-lg:text-[14px]">
                    WhatsApp Business integration
                  </span>
                </li>
                <li className="flex items-center gap-[10px]">
                  <span className="w-[8px] h-[8px] bg-accent-100 rounded-full flex-shrink-0"></span>
                  <span className="text-white text-[18px] max-mob-lg:text-[14px]">
                    Facebook Messenger support
                  </span>
                </li>
                <li className="flex items-center gap-[10px]">
                  <span className="w-[8px] h-[8px] bg-accent-100 rounded-full flex-shrink-0"></span>
                  <span className="text-white text-[18px] max-mob-lg:text-[14px]">
                    Slack and Teams integration
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </Container>
      </section>

      {/* Detailed Service #2 - Business Process Automation */}
      <section className="py-[50px] max-mob-lg:py-6">
        <Container>
          <h2 className="text-[40px] font-bold text-center text-primary-100 mb-[50px] max-des-3xl:text-2xl max-mob-lg:mb-6">
            Business Process Automation That Connects Everything
          </h2>
          <div className="grid grid-cols-2 gap-[30px] max-w-[1100px] mx-auto max-mob-lg:grid-cols-1">
            <div className="flex gap-[20px] items-center">
              <span className="text-[32px] flex-shrink-0">⚡</span>
              <div>
                <h3 className="text-[24px] font-bold text-primary-100 mb-[5px] max-des-xl:text-[18px]">
                  Email Marketing Automation
                </h3>
                <p className="text-[18px] text-primary-100/70 max-mob-lg:text-[14px]">
                  Send the right emails at the right time to the right people
                </p>
              </div>
            </div>
            <div className="flex gap-[20px]  items-center">
              <span className="text-[32px] flex-shrink-0">📋</span>
              <div>
                <h3 className="text-[24px] font-bold text-primary-100 mb-[5px] max-des-xl:text-[18px]">
                  Data Entry & Processing
                </h3>
                <p className="text-[18px] text-primary-100/70 max-mob-lg:text-[14px]">
                  Move data between systems without manual copy-paste work
                </p>
              </div>
            </div>
            <div className="flex gap-[20px]  items-center">
              <span className="text-[32px] flex-shrink-0">📊</span>
              <div>
                <h3 className="text-[24px] font-bold text-primary-100 mb-[5px]  max-des-xl:text-[18px]">
                  Report Generation
                </h3>
                <p className="text-[18px] text-primary-100/70 max-mob-lg:text-[14px]">
                  Create and send reports automatically, no manual work needed
                </p>
              </div>
            </div>
            <div className="flex gap-[20px]  items-center">
              <span className="text-[32px] flex-shrink-0">🔄</span>
              <div>
                <h3 className="text-[24px] font-bold text-primary-100 mb-[5px]  max-des-xl:text-[18px]">
                  Workflow Integration
                </h3>
                <p className="text-[18px] text-primary-100/70 max-mob-lg:text-[14px]">
                  Connect CRM, email, calendar, and other business tools
                </p>
              </div>
            </div>
            <div className="flex gap-[20px]  items-center">
              <span className="text-[32px] flex-shrink-0">📞</span>
              <div>
                <h3 className="text-[24px] font-bold text-primary-100 mb-[5px]  max-des-xl:text-[18px]">
                  Customer Follow-up
                </h3>
                <p className="text-[18px] text-primary-100/70 max-mob-lg:text-[14px]">
                  Follow up with leads and customers at perfect timing
                </p>
              </div>
            </div>
            <div className="flex gap-[20px]  items-center">
              <span className="text-[32px] flex-shrink-0">📅</span>
              <div>
                <h3 className="text-[24px] font-bold text-primary-100 mb-[5px]  max-des-xl:text-[18px]">
                  Scheduling & Appointments
                </h3>
                <p className="text-[18px] text-primary-100/70 max-mob-lg:text-[14px]">
                  Book meetings and manage calendars without back-and-forth
                </p>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Case Study Section */}
      <section className="bg-accent-100 py-[50px] max-mob-lg:py-6 my-[50px]">
        <Container>
          <div className="text-center">
            <h2 className="text-[40px] font-bold text-white mb-[30px] max-des-3xl:text-2xl">
              Real Results from Our AI Workflow Automation Services
            </h2>
            <p className="text-[24px] text-white mb-[40px] max-mob-lg:text-[18px]">
              See how our services transformed these businesses:
            </p>
            <div className="grid grid-cols-2 gap-[40px] max-tab-lg:grid-cols-1">
              <div className="bg-white/20 backdrop-blur-sm rounded-[20px] p-[40px] max-mob-lg:p-[20px]">
                <div className="text-left space-y-[20px]">
                  <h3 className="text-[24px] font-bold text-white max-mob-lg:text-[18px]">
                    E-commerce Store Case Study
                  </h3>
                  <div className="space-y-[15px]">
                    <div className="flex justify-between items-center">
                      <span className="text-[18px] text-white max-mob-lg:text-[14px]">
                        Before: Manual customer support
                      </span>
                      <span className="text-[20px] font-bold text-white max-mob-lg:text-[16px]">
                        6-hour response time
                      </span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-[18px] text-white max-mob-lg:text-[14px]">
                        After: Custom AI chatbot
                      </span>
                      <span className="text-[20px] font-bold text-accent-200 max-mob-lg:text-[16px]">
                        Instant responses
                      </span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-[18px] text-white max-mob-lg:text-[14px]">
                        Time saved weekly:
                      </span>
                      <span className="text-[20px] font-bold text-accent-200 max-mob-lg:text-[16px]">
                        30 hours
                      </span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-[18px] text-white max-mob-lg:text-[14px]">
                        Customer satisfaction:
                      </span>
                      <span className="text-[20px] font-bold text-accent-200 max-mob-lg:text-[16px]">
                        +40% increase
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-white/20 backdrop-blur-sm rounded-[20px] p-[40px] max-mob-lg:p-[20px]">
                <div className="text-left space-y-[20px]">
                  <h3 className="text-[24px] font-bold text-white max-mob-lg:text-[18px]">
                    Marketing Agency Case Study
                  </h3>
                  <div className="space-y-[15px]">
                    <div className="flex justify-between items-center">
                      <span className="text-[18px] text-white max-mob-lg:text-[14px]">
                        Before: Manual lead follow-up
                      </span>
                      <span className="text-[20px] font-bold text-white max-mob-lg:text-[16px]">
                        25 hours/week
                      </span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-[18px] text-white max-mob-lg:text-[14px]">
                        After: Automated workflows
                      </span>
                      <span className="text-[20px] font-bold text-accent-200 max-mob-lg:text-[16px]">
                        2 hours/week
                      </span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-[18px] text-white max-mob-lg:text-[14px]">
                        Lead conversion rate:
                      </span>
                      <span className="text-[20px] font-bold text-accent-200 max-mob-lg:text-[16px]">
                        +45% increase
                      </span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-[18px] text-white max-mob-lg:text-[14px]">
                        ROI achieved in:
                      </span>
                      <span className="text-[20px] font-bold text-accent-200 max-mob-lg:text-[16px]">
                        60 days
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Additional Services Section */}
      <section className="py-[50px] max-mob-lg:py-6">
        <Container>
          <h2 className="text-[40px] font-bold text-center text-primary-100 mb-[50px] max-des-3xl:text-2xl max-mob-lg:mb-6">
            Complete AI Automation Platform Services
          </h2>
          <div className="grid grid-cols-3 gap-[40px] max-tab-lg:flex max-tab-lg:flex-wrap max-tab-lg:justify-center">
            <div className="bg-[#F5F5F5] rounded-[20px] p-[40px] max-mob-lg:p-[20px] max-des-xl:p-[15px]">
              <div className="text-[48px] mb-[15px]">📊</div>
              <h3 className="text-[24px] font-bold text-primary-100 mb-[20px] max-mob-lg:text-[18px]">
                Smart Analytics & AI Reporting
              </h3>
              <ul className="space-y-[10px]">
                <li className="text-[18px] text-primary-100/80 max-mob-lg:text-[14px]">
                  • Track business performance automatically
                </li>
                <li className="text-[18px] text-primary-100/80 max-mob-lg:text-[14px]">
                  • Get insights from your data
                </li>
                <li className="text-[18px] text-primary-100/80 max-mob-lg:text-[14px]">
                  • Predict trends and opportunities
                </li>
                <li className="text-[18px] text-primary-100/80 max-mob-lg:text-[14px]">
                  • Create custom dashboards
                </li>
              </ul>
            </div>
            <div className="bg-[#F5F5F5] rounded-[20px] p-[40px] max-mob-lg:p-[20px] max-des-xl:p-[15px]">
              <div className="text-[48px] mb-[15px]">🎯</div>
              <h3 className="text-[24px] font-bold text-primary-100 mb-[20px] max-mob-lg:text-[18px]">
                AI Lead Management System
              </h3>
              <ul className="space-y-[10px]">
                <li className="text-[18px] text-primary-100/80 max-mob-lg:text-[14px]">
                  • Find and qualify leads automatically
                </li>
                <li className="text-[18px] text-primary-100/80 max-mob-lg:text-[14px]">
                  • Score leads by conversion potential
                </li>
                <li className="text-[18px] text-primary-100/80 max-mob-lg:text-[14px]">
                  • Nurture prospects with personalized content
                </li>
                <li className="text-[18px] text-primary-100/80 max-mob-lg:text-[14px]">
                  • Track the entire sales pipeline
                </li>
              </ul>
            </div>
            <div className="bg-[#F5F5F5] rounded-[20px] p-[40px] max-mob-lg:p-[20px] max-des-xl:p-[15px]">
              <div className="text-[48px] mb-[15px]">🎤</div>
              <h3 className="text-[24px] font-bold text-primary-100 mb-[20px] max-mob-lg:text-[18px]">
                AI Voice Assistants
              </h3>
              <ul className="space-y-[10px]">
                <li className="text-[18px] text-primary-100/80 max-mob-lg:text-[14px]">
                  • Handle phone calls automatically
                </li>
                <li className="text-[18px] text-primary-100/80 max-mob-lg:text-[14px]">
                  • Schedule appointments by voice
                </li>
                <li className="text-[18px] text-primary-100/80 max-mob-lg:text-[14px]">
                  • Answer common questions
                </li>
                <li className="text-[18px] text-primary-100/80 max-mob-lg:text-[14px]">
                  • Transfer calls when needed
                </li>
              </ul>
            </div>
          </div>
        </Container>
      </section>

      {/* Customer Testimonials Section */}
      <section className="bg-primary-100 py-[50px] max-mob-lg:py-6 my-[50px]">
        <Container>
          <div className="text-center">
            <h2 className="text-[40px] font-bold text-white mb-[40px] max-des-3xl:text-2xl">
              What Our Clients Say About Our AI Workflow Automation Services
            </h2>
            <div className="grid grid-cols-3 gap-[30px] max-tab-lg:grid-cols-1">
              <div className="bg-white/10 backdrop-blur-sm rounded-[20px] p-[40px] max-mob-lg:p-[20px]">
                <p className="text-[20px] text-white italic mb-[20px] max-mob-lg:text-[16px]">
                  &quot;Their custom AI chatbot handles 80% of our customer questions. We saved $15,000 per month on support costs and our customers are happier than ever.&quot;
                </p>
                <div className="flex items-center gap-[10px] justify-center">
                  <Image
                    src="/assets/images/sarah.png"
                    alt="Sarah Chen testimonial about AI workflow automation services success"
                    width={40}
                    height={40}
                    className="rounded-full object-cover"
                    loading="lazy"
                  />
                  <div className="text-left">
                    <div className="text-[16px] font-bold text-accent-100">Sarah Chen</div>
                    <div className="text-[14px] text-white/80">TechStart CEO</div>
                  </div>
                </div>
              </div>
              
              <div className="bg-white/10 backdrop-blur-sm rounded-[20px] p-[40px] max-mob-lg:p-[20px]">
                <p className="text-[20px] text-white italic mb-[20px] max-mob-lg:text-[16px]">
                  &quot;The business process automation they built connects all our tools. No more manual data entry. We save 20 hours every week.&quot;
                </p>
                <div className="flex items-center gap-[10px] justify-center">
                  <Image
                    src="/assets/images/sarah.png"
                    alt="Mike Rodriguez testimonial about business process automation results"
                    width={40}
                    height={40}
                    className="rounded-full object-cover"
                    loading="lazy"
                  />
                  <div className="text-left">
                    <div className="text-[16px] font-bold text-accent-100">Mike Rodriguez</div>
                    <div className="text-[14px] text-white/80">Agency Owner</div>
                  </div>
                </div>
              </div>
              
              <div className="bg-white/10 backdrop-blur-sm rounded-[20px] p-[40px] max-mob-lg:p-[20px]">
                <p className="text-[20px] text-white italic mb-[20px] max-mob-lg:text-[16px]">
                  &quot;Their AI lead management system finds and qualifies prospects automatically. Our sales team can focus on closing deals instead of searching for leads.&quot;
                </p>
                <div className="flex items-center gap-[10px] justify-center">
                  <Image
                    src="/assets/images/sarah.png"
                    alt="Jennifer Lee testimonial about AI lead management system benefits"
                    width={40}
                    height={40}
                    className="rounded-full object-cover"
                    loading="lazy"
                  />
                  <div className="text-left">
                    <div className="text-[16px] font-bold text-accent-100">Jennifer Lee</div>
                    <div className="text-[14px] text-white/80">Sales Director</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* How We Work Section */}
      <section className="py-[50px] max-mob-lg:py-6">
        <Container>
          <h2 className="text-[40px] font-bold text-center text-primary-100 mb-[50px] max-des-3xl:text-2xl max-mob-lg:mb-6">
            How Our AI Workflow Automation Services Work
          </h2>
          <div className="flex justify-between max-w-[1100px] mx-auto  max-mob-lg:gap-[30px] max-mob-lg:flex-wrap">
            <div className="text-center flex-1">
              <div className="w-[100px] h-[100px] bg-accent-100 rounded-full flex items-center justify-center mx-auto mb-[20px] max-tab-sm:w-[80px] max-tab-sm:h-[80px]">
                <span className="text-[40px] font-bold text-white">1</span>
              </div>
              <h3 className="text-[24px] font-bold text-primary-100 mb-[10px] max-mob-lg:text-[18px]">
                Understand Your Needs
              </h3>
              <p className="text-[18px] text-primary-100/70 max-mob-lg:text-[14px]">
                We learn about your business, challenges, and goals
              </p>
            </div>
            <div className="text-center flex-1">
              <div className="w-[100px] h-[100px] bg-accent-100 rounded-full flex items-center justify-center mx-auto mb-[20px]  max-tab-sm:w-[80px] max-tab-sm:h-[80px]">
                <span className="text-[40px] font-bold text-white">2</span>
              </div>
              <h3 className="text-[24px] font-bold text-primary-100 mb-[10px] max-mob-lg:text-[18px]">
                Design Custom Solution
              </h3>
              <p className="text-[18px] text-primary-100/70 max-mob-lg:text-[14px]">
                Create AI automation that fits your specific needs
              </p>
            </div>
            <div className="text-center flex-1">
              <div className="w-[100px] h-[100px] bg-accent-100 rounded-full flex items-center justify-center mx-auto mb-[20px] max-tab-sm:w-[80px] max-tab-sm:h-[80px]">
                <span className="text-[40px] font-bold text-white">3</span>
              </div>
              <h3 className="text-[24px] font-bold text-primary-100 mb-[10px] max-mob-lg:text-[18px]">
                Build & Test
              </h3>
              <p className="text-[18px] text-primary-100/70 max-mob-lg:text-[14px]">
                Develop and test your automation before going live
              </p>
            </div>
            <div className="text-center flex-1">
              <div className="w-[100px] h-[100px] bg-accent-100 rounded-full flex items-center justify-center mx-auto mb-[20px] max-tab-sm:w-[80px] max-tab-sm:h-[80px]">
                <span className="text-[40px] font-bold text-white">4</span>
              </div>
              <h3 className="text-[24px] font-bold text-primary-100 mb-[10px] max-mob-lg:text-[18px]">
                Launch & Support
              </h3>
              <p className="text-[18px] text-primary-100/70 max-mob-lg:text-[14px]">
                Deploy your solution with ongoing training and support
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* Pricing Overview Section 
      <section className="bg-[#F5F5F5] py-[50px] max-mob-lg:py-6">
        <Container>
          <h2 className="text-[40px] font-bold text-center text-primary-100 mb-[50px] max-des-3xl:text-2xl max-mob-lg:mb-6">
            Simple, Transparent Pricing for AI Workflow Automation Services
          </h2>
          <div className="grid grid-cols-3 gap-[40px] max-tab-lg:grid-cols-1">
            <div className="bg-white rounded-[20px] p-[40px] max-mob-lg:p-[20px] text-center">
              <h3 className="text-[24px] font-bold text-primary-100 mb-[15px] max-mob-lg:text-[18px]">
                Starter Package
              </h3>
              <div className="text-[36px] font-bold text-accent-100 mb-[20px] max-mob-lg:text-[28px]">
                $2,999
              </div>
              <p className="text-[16px] text-primary-100/80 mb-[20px] max-mob-lg:text-[14px]">
                Perfect for small businesses getting started with AI automation
              </p>
              <ul className="text-left space-y-[10px] mb-[30px]">
                <li className="text-[16px] text-primary-100/80 max-mob-lg:text-[14px]">
                  • Basic AI chatbot setup
                </li>
                <li className="text-[16px] text-primary-100/80 max-mob-lg:text-[14px]">
                  • 2 workflow automation processes
                </li>
                <li className="text-[16px] text-primary-100/80 max-mob-lg:text-[14px]">
                  • 30 days of support
                </li>
                <li className="text-[16px] text-primary-100/80 max-mob-lg:text-[14px]">
                  • Basic training included
                </li>
              </ul>
              <Anchor href="/get-started" label="Get Started" className="w-full text-center" />
            </div>
            
            <div className="bg-accent-100 rounded-[20px] p-[40px] max-mob-lg:p-[20px] text-center transform scale-105 max-tab-lg:scale-100">
              <div className="bg-accent-200 text-primary-100 text-[14px] font-bold px-[20px] py-[5px] rounded-full inline-block mb-[20px]">
                MOST POPULAR
              </div>
              <h3 className="text-[24px] font-bold text-white mb-[15px] max-mob-lg:text-[18px]">
                Growth Package
              </h3>
              <div className="text-[36px] font-bold text-white mb-[20px] max-mob-lg:text-[28px]">
                $7,999
              </div>
              <p className="text-[16px] text-white/90 mb-[20px] max-mob-lg:text-[14px]">
                Complete automation solution for growing businesses
              </p>
              <ul className="text-left space-y-[10px] mb-[30px]">
                <li className="text-[16px] text-white/90 max-mob-lg:text-[14px]">
                  • Advanced AI chatbot with integrations
                </li>
                <li className="text-[16px] text-white/90 max-mob-lg:text-[14px]">
                  • 5 business process automations
                </li>
                <li className="text-[16px] text-white/90 max-mob-lg:text-[14px]">
                  • Smart analytics dashboard
                </li>
                <li className="text-[16px] text-white/90 max-mob-lg:text-[14px]">
                  • 90 days of support & training
                </li>
              </ul>
              <Anchor href="/get-started" label="Get Started" className="w-full text-center bg-white !text-accent-100 hover:bg-gray-100" />
            </div>
            
            <div className="bg-white rounded-[20px] p-[40px] max-mob-lg:p-[20px] text-center">
              <h3 className="text-[24px] font-bold text-primary-100 mb-[15px] max-mob-lg:text-[18px]">
                Enterprise Package
              </h3>
              <div className="text-[36px] font-bold text-accent-100 mb-[20px] max-mob-lg:text-[28px]">
                Custom
              </div>
              <p className="text-[16px] text-primary-100/80 mb-[20px] max-mob-lg:text-[14px]">
                Full-scale automation for large organizations
              </p>
              <ul className="text-left space-y-[10px] mb-[30px]">
                <li className="text-[16px] text-primary-100/80 max-mob-lg:text-[14px]">
                  • Complete AI automation platform
                </li>
                <li className="text-[16px] text-primary-100/80 max-mob-lg:text-[14px]">
                  • Unlimited workflow automations
                </li>
                <li className="text-[16px] text-primary-100/80 max-mob-lg:text-[14px]">
                  • Custom integrations
                </li>
                <li className="text-[16px] text-primary-100/80 max-mob-lg:text-[14px]">
                  • Dedicated success manager
                </li>
              </ul>
              <Anchor href="/contact" label="Contact Sales" className="w-full text-center" />
            </div>
          </div>
        </Container>
      </section>*/}

      {/* Final CTA Section */}
      <section className="bg-primary-100 py-[80px] max-mob-lg:py-10 mt-[50px] border-b-white border-[1px]">
        <Container>
          <div className="text-center">
            <h2 className="text-[40px] font-bold text-white mb-[40px] max-des-3xl:text-2xl">
              Ready to Transform Your Business with AI Workflow Automation Services?
            </h2>
            <p className="text-[24px] text-white/90 mb-[30px] max-mob-lg:text-[18px]">
              Join 50+ businesses that use our AI automation services to save time, cut costs, and grow faster. Get started with a free consultation today.
            </p>
            <div className="bg-accent-200 text-primary-100 text-[20px] font-bold px-[30px] py-[15px] rounded-full inline-block mb-[40px] max-mob-lg:text-[16px]">
              Free consultation + Custom automation plan included
            </div>
            <div className="flex justify-center gap-[20px] flex-wrap">
              <Anchor
                href="/get-started"
                label="Start Free Consultation"
                className=""
              />
              <Anchor
                href="/demo"
                label="See Live Demo"
                className=" bg-transparent border-2 border-white text-primary-100 "
              />
              {/* <Anchor href="/pricing" label="View All Pricing" className="" /> */}
            </div>
            <p className="text-[20px] font-normal text-accent-200 mt-[40px] max-mob-lg:text-[16px]">
              Questions about our services? Our AI chatbot can help! 💬
            </p>
          </div>
        </Container>
      </section>
    </>
  );
}