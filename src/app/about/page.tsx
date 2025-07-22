import Container from "@/components/ui/conatiner/Container";
import Anchor from "@/components/ui/Anchor/Anchor";
import Image from "next/image";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About SmartBiz AI | Leading AI Workflow Automation Experts & Custom Chatbot Specialists",
  description: "Meet the AI workflow automation experts behind 50+ successful business transformations. Our team builds custom AI chatbots and automation solutions that save 20+ hours weekly with proven 4-6x ROI.",
  keywords: "AI workflow automation experts, custom AI chatbots team, business process automation specialists, workflow automation tools creators, AI automation company, SmartBiz AI team",
  alternates: {
    canonical: `https://smartbizgenie.com/about`,
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
            alt="SmartBiz AI team of workflow automation experts working on custom AI chatbot solutions"
            width={1900}
            height={1000}
            className="w-full max-h-[100dvh] object-cover h-full"
          />
           
          <div className="absolute bottom-[80px] flex flex-col w-full max-tab-lg:mt-[50px]  max-tab-md:relative max-tab-md:bottom-0  max-tab-lg:px-4  ">
            <h1 className="text-[50px] font-bold text-white leading-[60px] max-mob-lg:text-2xl max-des-3xl:text-[40px] max-mob-lg:leading-[1.2] max-des-3xl:leading-[40px]">
              Meet the AI Workflow Automation Experts Behind{" "}
              <span className="text-accent-100">50+ Business Transformations</span>
            </h1>
            <h2 className="text-[34px] font-normal leading-[100%] text-white mt-6 max-des-4xl:text-lg max-mob-lg:text-xl ">
              We&apos;re the team that turns manual work into automated profits
            </h2>
            <p className="text-[24px] leading-[1.2] text-white/80 mt-8 max-w-[900px] mx-auto max-mob-lg:text-base ">
              SmartBiz AI started with a simple goal: help businesses save time and money through smart AI workflow automation. Today, we&apos;re the trusted partner for companies wanting custom AI chatbots and business process automation that actually works.
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

      {/* Company Story Section */}
      <section className="py-[50px] max-mob-lg:py-6 max-sm:hidden">
        <Container>
          <h2 className="text-[40px] font-bold text-center text-primary-100 mb-[50px] max-des-3xl:text-2xl max-mob-lg:mb-6">
            Our Story: From Manual Tasks to AI Automation Success
          </h2>
          <div className="grid grid-cols-2 gap-[40px] max-w-[1000px] mx-auto max-tab-lg:flex-1 max-tab-lg:flex-wrap max-tab-lg:justify-center max-tab-lg:gap-[20px]">
            <div className="bg-[#F5F5F5] rounded-[20px] p-[40px] max-mob-lg:p-[20px]">
              <div className="text-[48px] mb-[15px]">📖</div>
              <h3 className="text-[24px] font-bold text-primary-100 mb-[10px] max-mob-lg:text-[18px]">
                Started Like You
              </h3>
              <p className="text-[18px] text-primary-100/70 max-mob-lg:text-[14px]">
                We spent 15+ hours weekly on manual tasks that ate up our days
              </p>
            </div>
            <div className="bg-[#F5F5F5] rounded-[20px] p-[40px] max-mob-lg:p-[20px]">
              <div className="text-[48px] mb-[15px]">🤖</div>
              <h3 className="text-[24px] font-bold text-primary-100 mb-[10px] max-mob-lg:text-[18px]">
                Built Our First AI Bot
              </h3>
              <p className="text-[18px] text-primary-100/70 max-mob-lg:text-[14px]">
                Saved 15 hours per week with our first AI workflow automation
              </p>
            </div>
            <div className="bg-[#F5F5F5] rounded-[20px] p-[40px] max-mob-lg:p-[20px]">
              <div className="text-[48px] mb-[15px]">🚀</div>
              <h3 className="text-[24px] font-bold text-primary-100 mb-[10px] max-mob-lg:text-[18px]">
                Word Spread Fast
              </h3>
              <p className="text-[18px] text-primary-100/70 max-mob-lg:text-[14px]">
                Other businesses wanted the same time-saving results
              </p>
            </div>
            <div className="bg-[#F5F5F5] rounded-[20px] p-[40px] max-mob-lg:p-[20px]">
              <div className="text-[48px] mb-[15px]">🎯</div>
              <h3 className="text-[24px] font-bold text-primary-100 mb-[10px] max-mob-lg:text-[18px]">
                50+ Success Stories
              </h3>
              <p className="text-[18px] text-primary-100/70 max-mob-lg:text-[14px]">
                Now we help businesses save 20+ hours weekly on average
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* Mobile Story Section */}
      <section className="py-[50px] max-mob-lg:py-6 sm:hidden">
        <Container>
          <h2 className="text-[40px] font-bold text-center text-primary-100 mb-[50px] max-des-3xl:text-2xl max-mob-lg:mb-6">
            Our Story: From Manual Tasks to AI Automation Success
          </h2>
          <div className="overflow-x-auto max-tab-lg:overflow-x-scroll">
            <div className="grid grid-cols-2 gap-[40px] max-w-[1000px] mx-auto max-tab-lg:flex max-tab-lg:gap-[20px] max-tab-lg:whitespace-nowrap">
              {[
                {
                  icon: "📖",
                  title: "Started Like You",
                  desc: "We spent 15+ hours weekly on manual tasks that ate up our days",
                },
                {
                  icon: "🤖",
                  title: "Built Our First AI Bot",
                  desc: "Saved 15 hours per week with our first AI workflow automation",
                },
                {
                  icon: "🚀",
                  title: "Word Spread Fast",
                  desc: "Other businesses wanted the same time-saving results",
                },
                {
                  icon: "🎯",
                  title: "50+ Success Stories",
                  desc: "Now we help businesses save 20+ hours weekly on average",
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

      {/* Team Expertise Section */}
      <section className="bg-primary-100 py-[50px] max-mob-lg:py-6 my-[50px]">
        <Container>
          <h2 className="text-[40px] font-bold text-center text-white mb-[50px] max-des-3xl:text-2xl max-mob-lg:mb-6">
            Expert Team Behind Your AI Workflow Automation Success
          </h2>
          <div className="grid grid-cols-3 gap-[25px] max-tab-lg:flex max-tab-lg:flex-wrap max-tab-lg:justify-center">
            <div className="bg-white/10 backdrop-blur-sm rounded-[20px] p-[40px] max-mob-lg:p-[20px] max-des-xl:p-[30px]">
              <h3 className="text-[24px] font-medium text-accent-100 mb-[20px] max-mob-lg:text-[18px]">
                AI Workflow Automation Specialists
              </h3>
              <ul className="space-y-[15px]">
                <li className="flex items-center gap-[10px]">
                  <span className="w-[8px] h-[8px] bg-accent-100 rounded-full flex-shrink-0"></span>
                  <span className="text-white text-[18px] max-mob-lg:text-[14px]">
                    5+ years in AI workflow automation
                  </span>
                </li>
                <li className="flex items-center gap-[10px]">
                  <span className="w-[8px] h-[8px] bg-accent-100 rounded-full flex-shrink-0"></span>
                  <span className="text-white text-[18px] max-mob-lg:text-[14px]">
                    Built 200+ custom AI chatbots
                  </span>
                </li>
                <li className="flex items-center gap-[10px]">
                  <span className="w-[8px] h-[8px] bg-accent-100 rounded-full flex-shrink-0"></span>
                  <span className="text-white text-[18px] max-mob-lg:text-[14px]">
                    Expert in business process automation
                  </span>
                </li>
                <li className="flex items-center gap-[10px]">
                  <span className="w-[8px] h-[8px] bg-accent-100 rounded-full flex-shrink-0"></span>
                  <span className="text-white text-[18px] max-mob-lg:text-[14px]">
                    Certified in major AI platforms
                  </span>
                </li>
              </ul>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-[20px] p-[40px] max-mob-lg:p-[20px] max-des-xl:p-[30px]">
              <h3 className="text-[24px] font-medium text-accent-100 mb-[20px] max-mob-lg:text-[18px]">
                Technical Implementation Experts
              </h3>
              <ul className="space-y-[15px]">
                <li className="flex items-center gap-[10px]">
                  <span className="w-[8px] h-[8px] bg-accent-100 rounded-full flex-shrink-0"></span>
                  <span className="text-white text-[18px] max-mob-lg:text-[14px]">
                    Full-stack development team
                  </span>
                </li>
                <li className="flex items-center gap-[10px]">
                  <span className="w-[8px] h-[8px] bg-accent-100 rounded-full flex-shrink-0"></span>
                  <span className="text-white text-[18px] max-mob-lg:text-[14px]">
                    API integration specialists
                  </span>
                </li>
                <li className="flex items-center gap-[10px]">
                  <span className="w-[8px] h-[8px] bg-accent-100 rounded-full flex-shrink-0"></span>
                  <span className="text-white text-[18px] max-mob-lg:text-[14px]">
                    Security and compliance experts
                  </span>
                </li>
                <li className="flex items-center gap-[10px]">
                  <span className="w-[8px] h-[8px] bg-accent-100 rounded-full flex-shrink-0"></span>
                  <span className="text-white text-[18px] max-mob-lg:text-[14px]">
                    24/7 system monitoring
                  </span>
                </li>
              </ul>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-[20px] p-[40px] max-mob-lg:p-[20px] max-des-xl:p-[30px]">
              <h3 className="text-[24px] font-medium text-accent-100 mb-[20px] max-mob-lg:text-[18px]">
                Business Growth Strategists
              </h3>
              <ul className="space-y-[15px]">
                <li className="flex items-center gap-[10px]">
                  <span className="w-[8px] h-[8px] bg-accent-100 rounded-full flex-shrink-0"></span>
                  <span className="text-white text-[18px] max-mob-lg:text-[14px]">
                    Business process analysis
                  </span>
                </li>
                <li className="flex items-center gap-[10px]">
                  <span className="w-[8px] h-[8px] bg-accent-100 rounded-full flex-shrink-0"></span>
                  <span className="text-white text-[18px] max-mob-lg:text-[14px]">
                    ROI optimization strategies
                  </span>
                </li>
                <li className="flex items-center gap-[10px]">
                  <span className="w-[8px] h-[8px] bg-accent-100 rounded-full flex-shrink-0"></span>
                  <span className="text-white text-[18px] max-mob-lg:text-[14px]">
                    Performance tracking experts
                  </span>
                </li>
                <li className="flex items-center gap-[10px]">
                  <span className="w-[8px] h-[8px] bg-accent-100 rounded-full flex-shrink-0"></span>
                  <span className="text-white text-[18px] max-mob-lg:text-[14px]">
                    Ongoing success management
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </Container>
      </section>

      {/* Why Choose Section */}
      <section className="py-[50px] max-mob-lg:py-6">
        <Container>
          <h2 className="text-[40px] font-bold text-center text-primary-100 mb-[50px] max-des-3xl:text-2xl max-mob-lg:mb-6">
            Why Leading Businesses Choose Our AI Workflow Automation Team
          </h2>
          <div className="grid grid-cols-2 gap-[30px] max-w-[1100px] mx-auto max-mob-lg:grid-cols-1">
            <div className="flex gap-[20px] items-center">
              <span className="text-[32px] flex-shrink-0">✅</span>
              <div>
                <h3 className="text-[24px] font-bold text-primary-100 mb-[5px] max-des-xl:text-[18px]">
                  Proven Track Record
                </h3>
                <p className="text-[18px] text-primary-100/70 max-mob-lg:text-[14px]">
                  50+ successful AI workflow automation projects with 4-6x ROI
                </p>
              </div>
            </div>
            <div className="flex gap-[20px]  items-center">
              <span className="text-[32px] flex-shrink-0">✅</span>
              <div>
                <h3 className="text-[24px] font-bold text-primary-100 mb-[5px] max-des-xl:text-[18px]">
                  Advanced AI Technology
                </h3>
                <p className="text-[18px] text-primary-100/70 max-mob-lg:text-[14px]">
                  Latest AI models: GPT-4, Claude, and custom automation systems
                </p>
              </div>
            </div>
            <div className="flex gap-[20px]  items-center">
              <span className="text-[32px] flex-shrink-0">✅</span>
              <div>
                <h3 className="text-[24px] font-bold text-primary-100 mb-[5px]  max-des-xl:text-[18px]">
                  Business-First Approach
                </h3>
                <p className="text-[18px] text-primary-100/70 max-mob-lg:text-[14px]">
                  We understand business needs, not just technology
                </p>
              </div>
            </div>
            <div className="flex gap-[20px]  items-center">
              <span className="text-[32px] flex-shrink-0">✅</span>
              <div>
                <h3 className="text-[24px] font-bold text-primary-100 mb-[5px]  max-des-xl:text-[18px]">
                  Complete Support
                </h3>
                <p className="text-[18px] text-primary-100/70 max-mob-lg:text-[14px]">
                  24/7 monitoring, training, and ongoing optimization
                </p>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Results Section */}
      <section className="bg-accent-100 py-[50px] max-mob-lg:py-6 my-[50px]">
        <Container>
          <div className="text-center">
            <h2 className="text-[40px] font-bold text-white mb-[30px] max-des-3xl:text-2xl">
              Real Results from Our AI Workflow Automation Projects
            </h2>
            <p className="text-[24px] text-white mb-[40px] max-mob-lg:text-[18px]">
              Numbers don&apos;t lie - here&apos;s what our clients achieve:
            </p>
            <div className="bg-white/20 backdrop-blur-sm rounded-[20px] p-[40px] max-w-[800px] mx-auto max-mob-lg:p-[20px]">
              <div className="grid grid-cols-2 gap-[30px] max-mob-lg:grid-cols-1">
                <div className="text-left space-y-[20px]">
                  <div className="flex justify-between items-center max-tab-sm:gap-[10px]">
                    <span className="text-[20px] text-white max-mob-lg:text-[16px]">
                      50+ Successful Projects:
                    </span>
                    <span className="text-[24px] font-bold text-white max-mob-lg:text-[20px]">
                      95% Success Rate
                    </span>
                  </div>
                  <div className="flex justify-between items-center max-tab-sm:gap-[10px]">
                    <span className="text-[20px] text-white max-mob-lg:text-[16px]">
                      Time Saved Monthly:
                    </span>
                    <span className="text-[24px] font-bold text-white max-mob-lg:text-[20px]">
                      1,000+ Hours
                    </span>
                  </div>
                </div>
                <div className="text-left space-y-[20px]">
                  <div className="flex justify-between items-center max-tab-sm:gap-[10px]">
                    <span className="text-[20px] text-white max-mob-lg:text-[16px]">
                      Average ROI:
                    </span>
                    <span className="text-[24px] font-bold text-white max-mob-lg:text-[20px]">
                      4-6x Return
                    </span>
                  </div>
                  <div className="flex justify-between items-center max-tab-sm:gap-[10px]">
                    <span className="text-[20px] text-white max-mob-lg:text-[16px]">
                      Client Satisfaction:
                    </span>
                    <span className="text-[24px] font-bold text-white max-mob-lg:text-[20px]">
                      95% Rating
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Features Section */}
      <section className="py-[50px] max-mob-lg:py-6">
        <Container>
          <h2 className="text-[40px] font-bold text-center text-primary-100 mb-[50px] max-des-3xl:text-2xl max-mob-lg:mb-6">
            What Sets Our AI Workflow Automation Apart
          </h2>
          <div className="grid grid-cols-3 gap-[40px] max-tab-lg:flex max-tab-lg:flex-wrap max-tab-lg:justify-center">
            <div className="bg-[#F5F5F5] rounded-[20px] p-[40px] max-mob-lg:p-[20px] max-des-xl:p-[15px]">
              <div className="text-[48px] mb-[15px]">🎯</div>
              <h3 className="text-[24px] font-bold text-primary-100 mb-[20px] max-mob-lg:text-[18px]">
                Business-First AI Solutions
              </h3>
              <ul className="space-y-[10px]">
                <li className="text-[18px] text-primary-100/80 max-mob-lg:text-[14px]">
                  • Start with your business goals
                </li>
                <li className="text-[18px] text-primary-100/80 max-mob-lg:text-[14px]">
                  • Solve real problems, not tech demos
                </li>
                <li className="text-[18px] text-primary-100/80 max-mob-lg:text-[14px]">
                  • Measurable results from day one
                </li>
                <li className="text-[18px] text-primary-100/80 max-mob-lg:text-[14px]">
                  • Industry-specific expertise
                </li>
              </ul>
            </div>
            <div className="bg-[#F5F5F5] rounded-[20px] p-[40px] max-mob-lg:p-[20px] max-des-xl:p-[15px]">
              <div className="text-[48px] mb-[15px]">⚡</div>
              <h3 className="text-[24px] font-bold text-primary-100 mb-[20px] max-mob-lg:text-[18px]">
                Fast Implementation
              </h3>
              <ul className="space-y-[10px]">
                <li className="text-[18px] text-primary-100/80 max-mob-lg:text-[14px]">
                  • Most projects live in 2-6 weeks
                </li>
                <li className="text-[18px] text-primary-100/80 max-mob-lg:text-[14px]">
                  • Minimal disruption to operations
                </li>
                <li className="text-[18px] text-primary-100/80 max-mob-lg:text-[14px]">
                  • Proven deployment methodology
                </li>
                <li className="text-[18px] text-primary-100/80 max-mob-lg:text-[14px]">
                  • Quick ROI realization
                </li>
              </ul>
            </div>
            <div className="bg-[#F5F5F5] rounded-[20px] p-[40px] max-mob-lg:p-[20px] max-des-xl:p-[15px]">
              <div className="text-[48px] mb-[15px]">🛡️</div>
              <h3 className="text-[24px] font-bold text-primary-100 mb-[20px] max-mob-lg:text-[18px]">
                Enterprise-Grade Security
              </h3>
              <ul className="space-y-[10px]">
                <li className="text-[18px] text-primary-100/80 max-mob-lg:text-[14px]">
                  • SOC 2 Type II compliant
                </li>
                <li className="text-[18px] text-primary-100/80 max-mob-lg:text-[14px]">
                  • End-to-end encryption
                </li>
                <li className="text-[18px] text-primary-100/80 max-mob-lg:text-[14px]">
                  • Regular security audits
                </li>
                <li className="text-[18px] text-primary-100/80 max-mob-lg:text-[14px]">
                  • GDPR/CCPA compliance
                </li>
              </ul>
            </div>
          </div>
        </Container>
      </section>

      {/* Success Story Section */}
      <section className="bg-primary-100 py-[50px] max-mob-lg:py-6 my-[50px]">
        <Container>
          <div className="text-center">
            <h2 className="text-[40px] font-bold text-white mb-[40px] max-des-3xl:text-2xl">
              What Our Clients Say About Working with Our Team
            </h2>
            <div className="grid grid-cols-2 gap-[40px] max-tab-lg:grid-cols-1">
              <div className="bg-white/10 backdrop-blur-sm rounded-[20px] p-[50px] max-mob-lg:p-[30px]">
                <p className="text-[24px] text-white italic mb-[20px] max-mob-lg:text-[18px]">
                  &quot;The SmartBiz AI team completely transformed our customer support with their custom AI chatbot. We went from 6-hour response times to instant replies. Our customers love it, and we saved 30 hours per week.&quot;
                </p>
                <p className="text-[20px] text-accent-100 font-medium max-mob-lg:text-[16px]">
                  - Sarah Chen, E-commerce Store Owner
                </p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-[20px] p-[50px] max-mob-lg:p-[30px]">
                <p className="text-[24px] text-white italic mb-[20px] max-mob-lg:text-[18px]">
                  &quot;Their AI workflow automation saved our agency 25 hours weekly on lead qualification and follow-ups. We can now focus on high-value client work instead of manual tasks. ROI was clear within 60 days.&quot;
                </p>
                <p className="text-[20px] text-accent-100 font-medium max-mob-lg:text-[16px]">
                  - Mike Rodriguez, Marketing Agency CEO
                </p>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Get Started Steps */}
      <section className="py-[50px] max-mob-lg:py-6">
        <Container>
          <h2 className="text-[40px] font-bold text-center text-primary-100 mb-[50px] max-des-3xl:text-2xl max-mob-lg:mb-6">
            How We Work With You in 4 Simple Steps
          </h2>
          <div className="flex justify-between max-w-[1100px] mx-auto  max-mob-lg:gap-[30px] max-mob-lg:flex-wrap">
            <div className="text-center flex-1">
              <div className="w-[100px] h-[100px] bg-accent-100 rounded-full flex items-center justify-center mx-auto mb-[20px] max-tab-sm:w-[80px] max-tab-sm:h-[80px]">
                <span className="text-[40px] font-bold text-white">1</span>
              </div>
              <h3 className="text-[24px] font-bold text-primary-100 mb-[10px] max-mob-lg:text-[18px]">
                Discovery Call
              </h3>
              <p className="text-[18px] text-primary-100/70 max-mob-lg:text-[14px]">
                We learn about your business and automation needs
              </p>
            </div>
            <div className="text-center flex-1">
              <div className="w-[100px] h-[100px] bg-accent-100 rounded-full flex items-center justify-center mx-auto mb-[20px]  max-tab-sm:w-[80px] max-tab-sm:h-[80px]">
                <span className="text-[40px] font-bold text-white">2</span>
              </div>
              <h3 className="text-[24px] font-bold text-primary-100 mb-[10px] max-mob-lg:text-[18px]">
                Custom Strategy
              </h3>
              <p className="text-[18px] text-primary-100/70 max-mob-lg:text-[14px]">
                We design AI workflow automation for your specific goals
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
                We develop and test your custom AI solutions
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
                Go live with ongoing training and optimization
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* Final CTA Section */}
      <section className="bg-primary-100 py-[80px] max-mob-lg:py-10 mt-[50px] border-b-white border-[1px]">
        <Container>
          <div className="text-center">
            <h2 className="text-[40px] font-bold text-white mb-[40px] max-des-3xl:text-2xl">
              Ready to Work with AI Workflow Automation Experts?
            </h2>
            <p className="text-[24px] text-white/90 mb-[30px] max-mob-lg:text-[18px]">
              Join 50+ businesses that trust us for their AI automation needs. Let&apos;s discuss how custom AI chatbots and workflow automation can transform your operations.
            </p>
            <div className="bg-accent-200 text-primary-100 text-[20px] font-bold px-[30px] py-[15px] rounded-full inline-block mb-[40px] max-mob-lg:text-[16px]">
              Free consultation - No sales pitch, just honest advice
            </div>
            <div className="flex justify-center gap-[20px] flex-wrap">
              <Anchor
                href="/get-started"
                label="Schedule Free Consultation"
                className=""
              />
             
            </div>
            <p className="text-[20px] font-normal text-accent-200 mt-[40px] max-mob-lg:text-[16px]">
              Questions about our team? Our AI chatbot has all the answers! 💬
            </p>
          </div>
        </Container>
      </section>
    </>
  );
}