"use client";
import Container from "@/components/ui/conatiner/Container";
import Anchor from "@/components/ui/Anchor/Anchor";
import Image from "next/image";

export default function HowItWorksContent() {
  return (
    <>
      {/* Hero Section */}
      <section className="mb-[50px] bg-primary-100">
        <div className="text-center max-w-full w-full relative pb-[50px]">
          <div className="relative w-full  max-h-[100dvh]">
          <Image
            src="/assets/images/How it work.jpg"
            alt="Business owner learning how AI workflow automation works step by step"
            width={1900}
            height={1000}
            className="w-full max-h-[100dvh] object-cover h-full"
            loading="eager"
          />
          <div className="absolute inset-0 bg-primary-100/50 " />
           </div>
          <div className="absolute bottom-[80px] flex flex-col w-full max-tab-lg:mt-[50px] max-tab-md:relative max-tab-md:bottom-0 max-tab-lg:px-4">
            <h1 className="text-[50px] font-bold text-white leading-[60px] max-mob-lg:text-2xl max-des-3xl:text-[40px] max-mob-lg:leading-[1.2] max-des-3xl:leading-[40px]">
              How AI Workflow Automation Works:{" "}
              <span className="text-accent-100">Simple 4-Step Process</span>
            </h1>
            <h2 className="text-[34px] font-normal leading-[100%] text-white mt-6 max-des-4xl:text-lg max-mob-lg:text-xl">
              From Setup to Success in 30 Days or Less
            </h2>
            <p className="text-[24px] leading-[1.2] text-white/80 mt-8 max-w-[900px] mx-auto max-mob-lg:text-base">
              Discover our proven process that transforms manual tasks into automated workflows. 
              No technical skills needed - we handle everything while you focus on growing your business.
            </p>
            <div className="flex gap-[35px] justify-center max-tab-lg:mt-[32] mt-[50px] max-tab-lg:gap-[20px] max-mob-lg:flex-wrap">
              <Anchor
                href="/get-started"
                label="Start Your Automation"
                className=""
              />
              <Anchor
                href="/demo"
                label="Watch Demo"
                className="bg-transparent border-2 border-white"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Quick Overview Section */}
      <section className="py-[50px] max-mob-lg:py-6">
        <Container>
          <h2 className="text-[40px] font-bold text-center text-primary-100 mb-[30px] max-des-3xl:text-2xl max-mob-lg:mb-6">
            AI Workflow Automation Made Simple
          </h2>
          <p className="text-[24px] text-center text-primary-100/80 mb-[50px] max-w-[800px] mx-auto max-mob-lg:text-base">
            Our workflow automation process turns time-consuming manual tasks into smart, automatic systems. 
            Here&apos;s how we make it happen:
          </p>
          
          <div className="grid grid-cols-4 gap-[30px] max-tab-lg:grid-cols-2 max-mob-md:grid-cols-1">
            <div className="text-center">
              <div className="w-[100px] h-[100px] bg-accent-100 rounded-full flex items-center justify-center mx-auto mb-[20px]">
                <span className="text-[40px]">🔍</span>
              </div>
              <h3 className="text-[20px] font-bold text-primary-100 mb-[10px]">
                Step 1: Analyze
              </h3>
              <p className="text-[16px] text-primary-100/70">
                We study your current processes and find automation opportunities
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-[100px] h-[100px] bg-accent-100 rounded-full flex items-center justify-center mx-auto mb-[20px]">
                <span className="text-[40px]">🛠️</span>
              </div>
              <h3 className="text-[20px] font-bold text-primary-100 mb-[10px]">
                Step 2: Build
              </h3>
              <p className="text-[16px] text-primary-100/70">
                Our experts create custom AI solutions for your specific needs
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-[100px] h-[100px] bg-accent-100 rounded-full flex items-center justify-center mx-auto mb-[20px]">
                <span className="text-[40px]">🧪</span>
              </div>
              <h3 className="text-[20px] font-bold text-primary-100 mb-[10px]">
                Step 3: Test
              </h3>
              <p className="text-[16px] text-primary-100/70">
                We test everything to make sure it works perfectly before launch
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-[100px] h-[100px] bg-accent-100 rounded-full flex items-center justify-center mx-auto mb-[20px]">
                <span className="text-[40px]">🚀</span>
              </div>
              <h3 className="text-[20px] font-bold text-primary-100 mb-[10px]">
                Step 4: Launch
              </h3>
              <p className="text-[16px] text-primary-100/70">
                Your automated systems go live and start saving time immediately
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* Detailed Process Section */}
      <section className="bg-primary-100 py-[50px] max-mob-lg:py-6 my-[50px]">
        <Container>
          <h2 className="text-[40px] font-bold text-center text-white mb-[50px] max-des-3xl:text-2xl max-mob-lg:mb-6">
            The Complete Workflow Automation Process
          </h2>
          
          {/* Step 1 */}
          <div className="mb-[60px] max-mob-lg:mb-[40px]">
            <div className="flex items-center gap-[40px] max-tab-lg:flex-col">
              <div className="flex-1">
                <div className="flex items-center gap-[20px] mb-[30px]">
                  <div className="w-[80px] aspect-square h-[80px] bg-accent-100 rounded-full flex items-center justify-center">
                    <span className="text-[36px] font-bold text-white">1</span>
                  </div>
                  <h3 className="text-[32px] font-bold text-white max-mob-lg:text-[24px]">
                    Discovery & Analysis Phase
                  </h3>
                </div>
                <p className="text-[20px] text-white/90 mb-[20px] max-mob-lg:text-[16px]">
                  We start by understanding your business inside and out. Our team looks at your current workflows, 
                  identifies bottlenecks, and finds the best opportunities for automation.
                </p>
                <ul className="space-y-[15px]">
                  <li className="flex items-center gap-[15px]">
                    <span className="w-[8px] h-[8px] bg-accent-100 rounded-full"></span>
                    <span className="text-white text-[18px] max-mob-lg:text-[14px]">
                      Free consultation call to understand your goals
                    </span>
                  </li>
                  <li className="flex items-center gap-[15px]">
                    <span className="w-[8px] h-[8px] bg-accent-100 rounded-full"></span>
                    <span className="text-white text-[18px] max-mob-lg:text-[14px]">
                      Process mapping of your current operations
                    </span>
                  </li>
                  <li className="flex items-center gap-[15px]">
                    <span className="w-[8px] h-[8px] bg-accent-100 rounded-full"></span>
                    <span className="text-white text-[18px] max-mob-lg:text-[14px]">
                      Automation opportunity assessment
                    </span>
                  </li>
                  <li className="flex items-center gap-[15px]">
                    <span className="w-[8px] h-[8px] bg-accent-100 rounded-full"></span>
                    <span className="text-white text-[18px] max-mob-lg:text-[14px]">
                      Custom roadmap with timeline and expected results
                    </span>
                  </li>
                </ul>
              </div>
              <div className="flex-1 max-w-[500px]">
                <Image
                  src="/assets/images/Discovery & Analysis Phase.jpg"
                  alt="Business analysis for AI workflow automation implementation"
                  width={500}
                  height={400}
                  className="w-full h-auto rounded-[20px]"
                  loading="lazy"
                />
              </div>
            </div>
          </div>

          {/* Step 2 */}
          <div className="mb-[60px] max-mob-lg:mb-[40px]">
            <div className="flex items-center gap-[40px] max-tab-lg:flex-col-reverse">
              <div className="flex-1 max-w-[500px]">
                <Image
                  src="/assets/images/Custom Development Phase.jpg"
                  alt="Custom AI chatbot development and workflow automation building process"
                  width={500}
                  height={400}
                  className="w-full h-auto rounded-[20px]"
                  loading="lazy"
                />
              </div>
              <div className="flex-1">
                <div className="flex items-center gap-[20px] mb-[30px]">
                  <div className="w-[80px] h-[80px] aspect-square bg-accent-100 rounded-full flex items-center justify-center">
                    <span className="text-[36px] font-bold text-white">2</span>
                  </div>
                  <h3 className="text-[32px] font-bold text-white max-mob-lg:text-[24px]">
                    Custom Development Phase
                  </h3>
                </div>
                <p className="text-[20px] text-white/90 mb-[20px] max-mob-lg:text-[16px]">
                  Our development team builds your custom AI solutions. We create chatbots, automate workflows, 
                  and connect all your business tools to work together seamlessly.
                </p>
                <ul className="space-y-[15px]">
                  <li className="flex items-center gap-[15px]">
                    <span className="w-[8px] h-[8px] bg-accent-100 rounded-full"></span>
                    <span className="text-white text-[18px] max-mob-lg:text-[14px]">
                      AI chatbot creation with your brand voice
                    </span>
                  </li>
                  <li className="flex items-center gap-[15px]">
                    <span className="w-[8px] h-[8px] bg-accent-100 rounded-full"></span>
                    <span className="text-white text-[18px] max-mob-lg:text-[14px]">
                      Workflow automation setup for repetitive tasks
                    </span>
                  </li>
                  <li className="flex items-center gap-[15px]">
                    <span className="w-[8px] h-[8px] bg-accent-100 rounded-full"></span>
                    <span className="text-white text-[18px] max-mob-lg:text-[14px]">
                      Integration with your existing tools and platforms
                    </span>
                  </li>
                  <li className="flex items-center gap-[15px]">
                    <span className="w-[8px] h-[8px] bg-accent-100 rounded-full"></span>
                    <span className="text-white text-[18px] max-mob-lg:text-[14px]">
                      Custom dashboard for monitoring and analytics
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Step 3 */}
          <div className="mb-[60px] max-mob-lg:mb-[40px]">
            <div className="flex items-center gap-[40px] max-tab-lg:flex-col">
              <div className="flex-1">
                <div className="flex items-center gap-[20px] mb-[30px]">
                  <div className="w-[80px] h-[80px] aspect-square bg-accent-100 rounded-full flex items-center justify-center">
                    <span className="text-[36px] font-bold text-white">3</span>
                  </div>
                  <h3 className="text-[32px] font-bold text-white max-mob-lg:text-[24px]">
                    Testing & Training Phase
                  </h3>
                </div>
                <p className="text-[20px] text-white/90 mb-[20px] max-mob-lg:text-[16px]">
                  Before going live, we test everything thoroughly. We also train your team so they know 
                  how to use and manage the new automated systems effectively.
                </p>
                <ul className="space-y-[15px]">
                  <li className="flex items-center gap-[15px]">
                    <span className="w-[8px] h-[8px] bg-accent-100 rounded-full"></span>
                    <span className="text-white text-[18px] max-mob-lg:text-[14px]">
                      Comprehensive testing of all automation workflows
                    </span>
                  </li>
                  <li className="flex items-center gap-[15px]">
                    <span className="w-[8px] h-[8px] bg-accent-100 rounded-full"></span>
                    <span className="text-white text-[18px] max-mob-lg:text-[14px]">
                      AI chatbot training with real customer scenarios
                    </span>
                  </li>
                  <li className="flex items-center gap-[15px]">
                    <span className="w-[8px] h-[8px] bg-accent-100 rounded-full"></span>
                    <span className="text-white text-[18px] max-mob-lg:text-[14px]">
                      Team training sessions and documentation
                    </span>
                  </li>
                  <li className="flex items-center gap-[15px]">
                    <span className="w-[8px] h-[8px] bg-accent-100 rounded-full"></span>
                    <span className="text-white text-[18px] max-mob-lg:text-[14px]">
                      Performance testing and optimization adjustments
                    </span>
                  </li>
                </ul>
              </div>
              <div className="flex-1 max-w-[500px]">
                <Image
                  src="/assets/images/Testing & Training Phase.jpg"
                  alt="Testing and training phase of AI workflow automation implementation"
                  width={500}
                  height={400}
                  className="w-full h-auto rounded-[20px]"
                  loading="lazy"
                />
              </div>
            </div>
          </div>

          {/* Step 4 */}
          <div>
            <div className="flex items-center gap-[40px] max-tab-lg:flex-col-reverse">
              <div className="flex-1 max-w-[500px]">
                <Image
                  src="/assets/images/Launch & Support Phase.jpg"
                  alt="Launch and ongoing support for AI workflow automation systems"
                  width={500}
                  height={400}
                  className="w-full h-auto rounded-[20px]"
                  loading="lazy"
                />
              </div>
              <div className="flex-1">
                <div className="flex items-center gap-[20px] mb-[30px]">
                  <div className="w-[80px] h-[80px] aspect-square bg-accent-100 rounded-full flex items-center justify-center">
                    <span className="text-[36px] font-bold text-white">4</span>
                  </div>
                  <h3 className="text-[32px] font-bold text-white max-mob-lg:text-[24px]">
                    Launch & Support Phase
                  </h3>
                </div>
                <p className="text-[20px] text-white/90 mb-[20px] max-mob-lg:text-[16px]">
                  Time to go live! We launch your automated systems and provide ongoing support to ensure 
                  everything runs smoothly. You&apos;ll start seeing time savings from day one.
                </p>
                <ul className="space-y-[15px]">
                  <li className="flex items-center gap-[15px]">
                    <span className="w-[8px] h-[8px] bg-accent-100 rounded-full"></span>
                    <span className="text-white text-[18px] max-mob-lg:text-[14px]">
                      Smooth system launch with minimal business disruption
                    </span>
                  </li>
                  <li className="flex items-center gap-[15px]">
                    <span className="w-[8px] h-[8px] bg-accent-100 rounded-full"></span>
                    <span className="text-white text-[18px] max-mob-lg:text-[14px]">
                      30 days of included post-launch support
                    </span>
                  </li>
                  <li className="flex items-center gap-[15px]">
                    <span className="w-[8px] h-[8px] bg-accent-100 rounded-full"></span>
                    <span className="text-white text-[18px] max-mob-lg:text-[14px]">
                      Performance monitoring and optimization
                    </span>
                  </li>
                  <li className="flex items-center gap-[15px]">
                    <span className="w-[8px] h-[8px] bg-accent-100 rounded-full"></span>
                    <span className="text-white text-[18px] max-mob-lg:text-[14px]">
                      Regular check-ins to ensure continued success
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Timeline Section */}
      <section className="py-[50px] max-mob-lg:py-6">
        <Container>
          <h2 className="text-[40px] font-bold text-center text-primary-100 mb-[50px] max-des-3xl:text-2xl max-mob-lg:mb-6">
            Your AI Automation Timeline
          </h2>
          <div className="bg-[#222222] rounded-[20px] py-[40px] max-tab-lg:py-[30px]">
            <div className="flex flex-row justify-between max-w-[1200px] w-full mx-auto px-[20px] max-mob-lg:flex-wrap max-mob-lg:gap-[35px] gap-3">
              <div className="flex flex-col items-center flex-1">
                <div className="w-[120px] h-[120px] rounded-full bg-accent-100 flex justify-center items-center max-mob-lg:w-[100px] max-mob-lg:h-[100px]">
                  <span className="text-[20px] font-bold text-white max-mob-lg:text-[20px] max-mob-md:text-[16px]">
                    Week 1
                  </span>
                </div>
                <h3 className="text-[24px] font-medium text-white mt-[20px] max-tab-lg:text-[18px]">
                  Discovery
                </h3>
                <p className="text-[18px] text-white/80 mt-[10px] max-tab-lg:text-[14px] text-center">
                  Business analysis and automation planning
                </p>
              </div>
              <div className="flex flex-col items-center flex-1">
                <div className="w-[120px] h-[120px] rounded-full bg-accent-100 flex justify-center items-center max-mob-lg:w-[100px] max-mob-lg:h-[100px]">
                  <span className="text-[20px] font-bold text-white max-tab-lg:text-[20px] max-mob-md:text-[16px]">
                    Week 2-3
                  </span>
                </div>
                <h3 className="text-[20px] font-medium text-white mt-[20px] max-tab-lg:text-[18px]">
                  Development
                </h3>
                <p className="text-[18px] text-white/80 mt-[10px] max-tab-lg:text-[14px] text-center">
                  Building your custom AI solutions
                </p>
              </div>
              <div className="flex flex-col items-center flex-1">
                <div className="w-[120px] h-[120px] rounded-full bg-accent-100 flex justify-center items-center max-mob-lg:w-[100px] max-mob-lg:h-[100px]">
                  <span className="text-[20px] font-bold text-white max-tab-lg:text-[20px] max-mob-md:text-[16px]">
                    Week 4
                  </span>
                </div>
                <h3 className="text-[20px] font-medium text-white mt-[20px] max-tab-lg:text-[18px]">
                  Testing
                </h3>
                <p className="text-[18px] text-white/80 mt-[10px] max-tab-lg:text-[14px] text-center">
                  Quality assurance and team training
                </p>
              </div>
              <div className="flex flex-col items-center flex-1">
                <div className="w-[120px] h-[120px] rounded-full bg-accent-100 flex justify-center items-center max-mob-lg:w-[100px] max-mob-lg:h-[100px]">
                  <span className="text-[20px] font-bold text-white max-tab-lg:text-[20px] max-mob-md:text-[16px]">
                    Week 5
                  </span>
                </div>
                <h3 className="text-[24px] font-medium text-white mt-[20px] max-tab-lg:text-[18px]">
                  Launch
                </h3>
                <p className="text-[18px] text-white/80 mt-[10px] max-tab-lg:text-[14px] text-center">
                  Go live and start saving time
                </p>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Success Stories Section */}
      <section className="bg-accent-100 py-[50px] max-mob-lg:py-6 my-[50px]">
        <Container>
          <h2 className="text-[40px] font-bold text-center text-white mb-[50px] max-des-3xl:text-2xl max-mob-lg:mb-6">
            Real Results from Our Process
          </h2>
          <div className="grid grid-cols-3 gap-[40px] max-tab-lg:grid-cols-1">
            <div className="bg-white/20 backdrop-blur-sm rounded-[20px] p-[40px] max-mob-lg:p-[20px]">
              <div className="text-[48px] mb-[20px] text-center">🚀</div>
              <blockquote className="text-[20px] text-white italic mb-[20px] max-mob-lg:text-[16px]">
                &quot;The workflow automation process was smooth and professional. We saved 25 hours per week within the first month!&quot;
              </blockquote>
              <cite className="text-[18px] text-accent-200 font-medium max-mob-lg:text-[14px]">
                - Sarah Chen, TechStart Solutions
              </cite>
            </div>
            
            <div className="bg-white/20 backdrop-blur-sm rounded-[20px] p-[40px] max-mob-lg:p-[20px]">
              <div className="text-[48px] mb-[20px] text-center">💰</div>
              <blockquote className="text-[20px] text-white italic mb-[20px] max-mob-lg:text-[16px]">
                &quot;Our AI chatbot handles 80% of customer questions automatically. Customer satisfaction went up 40%.&quot;
              </blockquote>
              <cite className="text-[18px] text-accent-200 font-medium max-mob-lg:text-[14px]">
                - Mike Rodriguez, EcoMart Online
              </cite>
            </div>
            
            <div className="bg-white/20 backdrop-blur-sm rounded-[20px] p-[40px] max-mob-lg:p-[20px]">
              <div className="text-[48px] mb-[20px] text-center">⭐</div>
              <blockquote className="text-[20px] text-white italic mb-[20px] max-mob-lg:text-[16px]">
                &quot;The team made everything simple to understand. No technical jargon - just results that work.&quot;
              </blockquote>
              <cite className="text-[18px] text-accent-200 font-medium max-mob-lg:text-[14px]">
                - Jennifer Lee, RetailFlow
              </cite>
            </div>
          </div>
        </Container>
      </section>

      {/* What Makes Us Different */}
      <section className="py-[50px] max-mob-lg:py-6">
        <Container>
          <h2 className="text-[40px] font-bold text-center text-primary-100 mb-[50px] max-des-3xl:text-2xl max-mob-lg:mb-6">
            What Makes Our Process Different
          </h2>
          <div className="grid grid-cols-2 gap-[40px] max-tab-lg:grid-cols-1">
            <div className="flex gap-[20px] items-center">
              <span className="text-[32px] flex-shrink-0">🎯</span>
              <div>
                <h3 className="text-[24px] font-bold text-primary-100 mb-[10px] max-mob-lg:text-[18px]">
                  Business-First Approach
                </h3>
                <p className="text-[18px] text-primary-100/70 max-mob-lg:text-[14px]">
                  We focus on your business goals first, then build the technology to achieve them. 
                  No unnecessary complexity or features you don&apos;t need.
                </p>
              </div>
            </div>
            
            <div className="flex gap-[20px] items-center">
              <span className="text-[32px] flex-shrink-0">🤝</span>
              <div>
                <h3 className="text-[24px] font-bold text-primary-100 mb-[10px] max-mob-lg:text-[18px]">
                  Full-Service Partnership
                </h3>
                <p className="text-[18px] text-primary-100/70 max-mob-lg:text-[14px]">
                  From initial consultation to ongoing support, we handle everything. 
                  You don&apos;t need technical skills - just tell us what you want to achieve.
                </p>
              </div>
            </div>
            
            <div className="flex gap-[20px] items-center">
              <span className="text-[32px] flex-shrink-0">⚡</span>
              <div>
                <h3 className="text-[24px] font-bold text-primary-100 mb-[10px] max-mob-lg:text-[18px]">
                  Fast Implementation
                </h3>
                <p className="text-[18px] text-primary-100/70 max-mob-lg:text-[14px]">
                  Most projects are completed in 4-6 weeks, not months. 
                  Our proven process means faster results and quicker ROI.
                </p>
              </div>
            </div>
            
            <div className="flex gap-[20px] items-center">
              <span className="text-[32px] flex-shrink-0">🔒</span>
              <div>
                <h3 className="text-[24px] font-bold text-primary-100 mb-[10px] max-mob-lg:text-[18px]">
                  Guaranteed Results
                </h3>
                <p className="text-[18px] text-primary-100/70 max-mob-lg:text-[14px]">
                  We guarantee your automation will work as promised. 
                  If not, we&apos;ll fix it at no extra cost until you&apos;re satisfied.
                </p>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* CTA Section */}
      <section className="bg-primary-100 py-[80px] max-mob-lg:py-10 mt-[50px] border-b-white border-[1px]">
        <Container>
          <div className="text-center">
            <h2 className="text-[40px] font-bold text-white mb-[20px] max-des-3xl:text-2xl">
              Ready to Start Your Automation Journey?
            </h2>
            <p className="text-[24px] text-white/90 mb-[40px] max-w-[700px] mx-auto max-mob-lg:text-[18px]">
              Join 50+ businesses who&apos;ve transformed their operations with our proven workflow automation process. 
              Get started with a free consultation today.
            </p>
            <div className="bg-accent-200 text-primary-100 text-[20px] font-bold px-[30px] py-[15px] rounded-full inline-block mb-[40px] max-mob-md:mb-[30px] max-mob-lg:text-[16px]">
              Free Consultation + Custom Automation Plan Included
            </div>
            <div className="flex justify-center gap-[20px] flex-wrap">
              <Anchor
                href="/get-started"
                label="Start Your Free Consultation"
                className=""
              />
            </div>
            <p className="text-[20px] font-normal text-accent-200 mt-[40px] max-mob-lg:text-[16px]">
              Questions about the process? Chat with our AI assistant below! 💬
            </p>
          </div>
        </Container>
      </section>
    </>
  );
}