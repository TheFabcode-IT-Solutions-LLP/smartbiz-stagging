"use client";
import Container from "@/components/ui/conatiner/Container";
import Anchor from "@/components/ui/Anchor/Anchor";
import Button from "@/components/ui/button/Button";
import { useTheme } from "@/contexts/ThemeContext";
import Image from "next/image";
export default function CustomerService247() {
  const { toggleModal } = useTheme();
  return (
    <>
     


          <section className="bg-primary-100 ">
        <div className="text-center max-w-full w-full relative">
                    <Image  src = "/assets/images/24hours.jpg" alt = "" width = {1900} height = {1000} className="w-full max-h-[100dvh] object-cover h-full"/>
        <Container className="absolute bottom-[80px] flex flex-col w-full max-tab-lg:mt-[50px] max-tab-lg:pb-[50px] left-[50%] -translate-x-1/2  max-tab-md:relative max-tab-md:bottom-0  max-tab-lg:px-4">
          <div className="text-center max-w-[1200px] mx-auto">
            <h1 className="text-[50px] font-bold text-white leading-[60px] max-mob-lg:text-2xl max-des-3xl:text-[40px] max-mob-lg:leading-[1.2] max-des-3xl:leading-[40px]">
            Never Miss Another Customer with{" "}
              <span className="text-accent-100">24/7 AI Support</span>
            </h1>
            <h2 className="text-[34px] font-normal leading-[100%] text-white mt-6 max-des-4xl:text-lg max-mob-lg:text-xl">
              Your Customers Don&lsquo;t Sleep. Neither Should Your Support.
            </h2>
            <p className="text-[24px] leading-[1.2] text-white/80 mt-8 max-w-[900px] mx-auto max-mob-lg:text-base">
             Provide round-the-clock customer service without the
              round-the-clock costs. Smartbizgenie&lsquo;s 24/7 customer service
              solution ensures every customer gets instant, accurate support -
              whether it&lsquo;s 3 PM or 3 AM.
            </p>
            <div className="flex gap-[40px] justify-center mt-[50px] max-tab-lg:gap-[20px] max-mob-lg:flex-wrap">
              <Anchor
                href="/get-started"
                label="Start Your 24/7 Support"
                className=""
              />
              <Button
                onClick={() => toggleModal(true)}
                label="Schedule Demo"
                className=" bg-transparent border-2 border-white"
              />
            </div>
          </div>
        </Container>
        </div>
      </section>

      {/* True Cost Section */}
      <section className="py-[50px] max-mob-lg:py-6">
        <Container>
          <h2 className="text-[40px] font-bold text-center text-primary-100 mb-[50px] max-des-3xl:text-2xl max-mob-lg:mb-6">
            The True Cost of Limited Support Hours
          </h2>
          <div className="bg-[#F5F5F5] rounded-[20px] p-[50px] max-w-[1000px] mx-auto max-mob-lg:p-[30px]">
            <h3 className="text-[28px] font-bold text-primary-100 mb-[30px] text-center max-tab-lg:text-[20px] max-mob-md:text-left">
              What Happens After 5 PM:
            </h3>
            <div className="grid grid-cols-2 gap-[30px] max-mob-md:grid-cols-1">
              <div className="flex items-start gap-[20px]">
                <span className="text-[48px] flex-shrink-0">🚪</span>
                <div>
                  <span className="text-[24px] font-bold text-primary-100 max-tab-lg:text-[18px]">
                    62% of queries
                  </span>
                  <p className="text-[18px] text-primary-100/80 mt-[5px] max-mob-lg:text-[14px]">
                    come outside business hours
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-[20px]">
                <span className="text-[48px] flex-shrink-0">😤</span>
                <div>
                  <span className="text-[24px] font-bold text-primary-100 max-tab-lg:text-[18px]">
                    89% of customers
                  </span>
                  <p className="text-[18px] text-primary-100/80 mt-[5px] max-tab-lg:text-[14px]">
                    won&lsquo;t wait for email responses
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-[20px]">
                <span className="text-[48px] flex-shrink-0">💔</span>
                <div>
                  <span className="text-[24px] font-bold text-primary-100 max-tab-lg:text-[18px]">
                    45% will switch
                  </span>
                  <p className="text-[18px] text-primary-100/80 mt-[5px] max-tab-lg:text-[14px]">
                    to competitors with better support
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-[20px]">
                <span className="text-[48px] flex-shrink-0">💸</span>
                <div>
                  <span className="text-[24px] font-bold text-primary-100 max-tab-lg:text-[18px]">
                    $1.6 trillion
                  </span>
                  <p className="text-[18px] text-primary-100/80 mt-[5px] max-tab-lg:text-[14px]">
                    lost annually to poor service
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Always-On Support Section */}
      <section className="bg-primary-100 py-[50px] max-mob-lg:py-6 my-[50px]">
        <Container>
          <h2 className="text-[40px] font-bold text-center text-white mb-[50px] max-des-3xl:text-2xl max-mob-lg:mb-6">
            Always-On Support That Never Compromises
          </h2>
          <div className="grid grid-cols-3  gap-[25px] max-tab-lg:grid-cols-2 max-mob-md:grid-cols-1">
            <div className="bg-white/10 backdrop-blur-sm rounded-[20px] p-[30px] max-mob-lg:p-[20px]">
              <div className="text-[48px] mb-[15px]">🌙</div>
              <h3 className="text-[24px] font-medium text-accent-100 mb-[15px] max-mob-lg:text-[18px]">
                Night Shift Excellence
              </h3>
              <ul className="space-y-[10px]">
                <li className="text-white text-[16px] max-mob-lg:text-[14px]">
                  • Full functionality at all hours
                </li>
                <li className="text-white text-[16px] max-mob-lg:text-[14px]">
                  • No tired agents or mistakes
                </li>
                <li className="text-white text-[16px] max-mob-lg:text-[14px]">
                  • Consistent quality service
                </li>
                <li className="text-white text-[16px] max-mob-lg:text-[14px]">
                  • Happy global customers
                </li>
              </ul>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-[20px] p-[30px] max-mob-lg:p-[20px]">
              <div className="text-[48px] mb-[15px]">🌍</div>
              <h3 className="text-[24px] font-medium text-accent-100 mb-[15px] max-mob-lg:text-[18px]">
                Global Reach
              </h3>
              <ul className="space-y-[10px]">
                <li className="text-white text-[16px] max-mob-lg:text-[14px]">
                  • Support across all time zones
                </li>
                <li className="text-white text-[16px] max-mob-lg:text-[14px]">
                  • Multilingual capabilities
                </li>
                <li className="text-white text-[16px] max-mob-lg:text-[14px]">
                  • Cultural awareness
                </li>
                <li className="text-white text-[16px] max-mob-lg:text-[14px]">
                  • Local market knowledge
                </li>
              </ul>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-[20px] p-[30px] max-mob-lg:p-[20px]">
              <div className="text-[48px] mb-[15px]">⚡</div>
              <h3 className="text-[24px] font-medium text-accent-100 mb-[15px] max-mob-lg:text-[18px]">
                Instant Everything
              </h3>
              <ul className="space-y-[10px]">
                <li className="text-white text-[16px] max-mob-lg:text-[14px]">
                  • Zero wait times
                </li>
                <li className="text-white text-[16px] max-mob-lg:text-[14px]">
                  • Immediate responses
                </li>
                <li className="text-white text-[16px] max-mob-lg:text-[14px]">
                  • Real-time solutions
                </li>
                <li className="text-white text-[16px] max-mob-lg:text-[14px]">
                  • Instant escalation
                </li>
              </ul>
            </div>
          </div>
        </Container>
      </section>

      {/* What 24/7 Means Section */}
      <section className="py-[50px] max-mob-lg:py-6">
        <Container>
          <h2 className="text-[40px] font-bold text-center text-primary-100 mb-[50px] max-des-3xl:text-2xl max-mob-lg:mb-6">
            What 24/7 Really Means for Your Business
          </h2>
          <div className="grid grid-cols-3 gap-[40px] max-tab-lg:flex max-tab-lg:flex-wrap max-tab-lg:justify-center">
            <div className="text-center">
              <div className="w-[100px] h-[100px] bg-accent-100 rounded-full flex items-center justify-center mx-auto mb-[20px]">
                <span className="text-[48px]">👥</span>
              </div>
              <div className="flex flex-col justify-center items-center">
                <h3 className="text-[24px] font-bold text-primary-100 mb-[20px] max-des-2xl:text-[18px] space-y-[10px]">
                  For Your Customers:
                </h3>
                <ul className="text-left inline-block space-y-[10px]">
                  <li className="text-[18px] text-primary-100/80 max-tab-lg:text-[14px] max-des-2xl:text-[16px]">
                    • Get help whenever needed
                  </li>
                  <li className="text-[18px] text-primary-100/80 max-tab-lg:text-[14px] max-des-2xl:text-[16px]">
                    • No frustrating wait times
                  </li>
                  <li className="text-[18px] text-primary-100/80 max-tab-lg:text-[14px] max-des-2xl:text-[16px]">
                    • Consistent service quality
                  </li>
                  <li className="text-[18px] text-primary-100/80 max-tab-lg:text-[14px] max-des-2xl:text-[16px]">
                    • Problems solved instantly
                  </li>
                </ul>
              </div>
            </div>
            <div className="text-center">
              <div className="w-[100px] h-[100px] bg-accent-100 rounded-full flex items-center justify-center mx-auto mb-[20px]">
                <span className="text-[48px]">👨‍💼</span>
              </div>
              <div className="flex flex-col justify-center items-center">
                <h3 className="text-[24px] font-bold text-primary-100 mb-[20px] max-des-2xl:text-[18px]">
                  For Your Team:
                </h3>
                <ul className="text-left inline-block space-y-[10px]">
                  <li className="text-[18px] text-primary-100/80 max-tab-lg:text-[14px] max-des-2xl:text-[16px]">
                    • No overnight shifts
                  </li>
                  <li className="text-[18px] text-primary-100/80 max-tab-lg:text-[14px] max-des-2xl:text-[16px]">
                    • Focus on complex issues
                  </li>
                  <li className="text-[18px] text-primary-100/80 max-tab-lg:text-[14px] max-des-2xl:text-[16px]">
                    • Better work-life balance
                  </li>
                  <li className="text-[18px] text-primary-100/80 max-tab-lg:text-[14px] max-des-2xl:text-[16px]">
                    • Higher job satisfaction
                  </li>
                </ul>
              </div>
            </div>
            <div className="text-center">
              <div className="w-[100px] h-[100px] bg-accent-100 rounded-full flex items-center justify-center mx-auto mb-[20px]">
                <span className="text-[48px]">💰</span>
              </div>
              <div className="flex flex-col justify-center items-center">
                <h3 className="text-[24px] font-bold text-primary-100 mb-[20px] max-des-2xl:text-[18px]">
                  For Your Bottom Line:
                </h3>
                <div className="flex flex-col justify-center items-center">
                  <ul className="text-left inline-block space-y-[10px]">
                    <li className="text-[18px] text-primary-100/80 max-tab-lg:text-[14px] max-des-2xl:text-[16px]">
                      • 70% reduction in support costs
                    </li>
                    <li className="text-[18px] text-primary-100/80 max-tab-lg:text-[14px] max-des-2xl:text-[16px]">
                      • 3x increase in customer retention
                    </li>
                    <li className="text-[18px] text-primary-100/80 max-tab-lg:text-[14px] max-des-2xl:text-[16px]">
                      • 45% boost in customer lifetime value
                    </li>
                    <li className="text-[18px] text-primary-100/80 max-tab-lg:text-[14px] max-des-2xl:text-[16px]">
                      • 90% first-contact resolution rate
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Comprehensive Features Section */}
      <section className="bg-[#F5F5F5] py-[40px] max-mob-lg:py-6 my-[50px]">
        <Container>
          <h2 className="text-[40px] font-bold text-center text-primary-100 mb-[50px] max-des-3xl:text-2xl max-mob-lg:mb-6">
            Comprehensive 24/7 Support Features
          </h2>
          <div className="grid grid-cols-4 gap-[40px] max-mob-md:grid-cols-1 max-des-xl:grid-cols-2">
            <div className="bg-white rounded-[20px] p-[40px] max-mob-lg:p-[20px]">
              <div className="text-[48px] mb-[15px]">🔧</div>
              <h3 className="text-[24px] font-bold text-primary-100 mb-[20px] max-des-3xl:text-[18px]">
                Technical Support
              </h3>
              <ul className="space-y-[10px]">
                <li className="text-[18px] text-primary-100/80 max-des-xl:text-[14px] max-des-3xl:text-[16px]">
                  • Troubleshooting guides
                </li>
                <li className="text-[18px] text-primary-100/80  max-des-xl:text-[14px] max-des-3xl:text-[16px]">
                  • Step-by-step solutions
                </li>
                <li className="text-[18px] text-primary-100/80 max-des-xl:text-[14px] max-des-3xl:text-[16px]">
                  • Video tutorials
                </li>
                <li className="text-[18px] text-primary-100/80  max-des-xl:text-[14px] max-des-3xl:text-[16px]">
                  • Remote assistance options
                </li>
              </ul>
            </div>
            <div className="bg-white rounded-[20px] p-[40px] max-mob-lg:p-[20px]">
              <div className="text-[48px] mb-[15px]">📦</div>
              <h3 className="text-[24px] font-bold text-primary-100 mb-[20px] max-des-3xl:text-[18px]">
                Order Management
              </h3>
              <ul className="space-y-[10px]">
                <li className="text-[18px] text-primary-100/80 max-mob-lg:text-[14px] max-des-3xl:text-[16px]">
                  • Real-time tracking
                </li>
                <li className="text-[18px] text-primary-100/80 max-mob-lg:text-[14px] max-des-3xl:text-[16px]">
                  • Delivery updates
                </li>
                <li className="text-[18px] text-primary-100/80 max-mob-lg:text-[14px] max-des-3xl:text-[16px]">
                  • Return processing
                </li>
                <li className="text-[18px] text-primary-100/80 max-mob-lg:text-[14px] max-des-3xl:text-[16px]">
                  • Refund handling
                </li>
              </ul>
            </div>
            <div className="bg-white rounded-[20px] p-[40px] max-mob-lg:p-[20px]">
              <div className="text-[48px] mb-[15px]">💬</div>
              <h3 className="text-[24px] font-bold text-primary-100 mb-[20px] max-des-3xl:text-[18px]">
                Sales Support
              </h3>
              <ul className="space-y-[10px]">
                <li className="text-[18px] text-primary-100/80 max-mob-lg:text-[14px] max-des-3xl:text-[16px]">
                  • Product inquiries
                </li>
                <li className="text-[18px] text-primary-100/80 max-mob-lg:text-[14px] max-des-3xl:text-[16px]">
                  • Pricing information
                </li>
                <li className="text-[18px] text-primary-100/80 max-mob-lg:text-[14px] max-des-3xl:text-[16px]">
                  • Availability checks
                </li>
                <li className="text-[18px] text-primary-100/80 max-mob-lg:text-[14px] max-des-3xl:text-[16px]">
                  • Purchase assistance
                </li>
              </ul>
            </div>
            <div className="bg-white rounded-[20px] p-[40px] max-mob-lg:p-[20px]">
              <div className="text-[48px] mb-[15px]">🆘</div>
              <h3 className="text-[24px] font-bold text-primary-100 mb-[20px] max-des-3xl:text-[18px]">
                Emergency Handling
              </h3>
              <ul className="space-y-[10px]">
                <li className="text-[18px] text-primary-100/80 max-mob-lg:text-[14px] max-des-3xl:text-[16px]">
                  • Priority issue detection
                </li>
                <li className="text-[18px] text-primary-100/80 max-mob-lg:text-[14px] max-des-3xl:text-[16px]">
                  • Immediate escalation
                </li>
                <li className="text-[18px] text-primary-100/80 max-mob-lg:text-[14px] max-des-3xl:text-[16px]">
                  • Crisis management
                </li>
                <li className="text-[18px] text-primary-100/80 max-mob-lg:text-[14px] max-des-3xl:text-[16px]">
                  • Follow-up protocols
                </li>
              </ul>
            </div>
          </div>
        </Container>
      </section>

      {/* Success Metrics Section */}
      <section className="bg-accent-100 py-[50px] max-mob-lg:py-6 ">
        <Container>
          <h2 className="text-[40px] font-bold text-center text-white mb-[50px] max-des-3xl:text-2xl max-mob-lg:mb-6">
            Success Metrics from Our Clients
          </h2>
          <div className="grid grid-cols-2 gap-[40px] max-w-[1000px] mx-auto max-mob-md:grid-cols-1">
            <div className="bg-white/20 backdrop-blur-sm rounded-[20px] p-[40px] max-mob-lg:p-[20px]">
              <h3 className="text-[28px] font-bold text-white mb-[30px] max-tab-lg:text-[20px]">
                Before Smartbizgenie:
              </h3>
              <ul className="space-y-[15px]">
                <li className="text-[18px] text-white max-mob-lg:text-[14px]">
                  • 8-hour support window
                </li>
                <li className="text-[18px] text-white max-mob-lg:text-[14px]">
                  • 45% missed inquiries
                </li>
                <li className="text-[18px] text-white max-mob-lg:text-[14px]">
                  • 2.3/5 satisfaction rating
                </li>
                <li className="text-[18px] text-white max-mob-lg:text-[14px]">
                  • $50,000 monthly support cost
                </li>
              </ul>
            </div>
            <div className="bg-white rounded-[20px] p-[40px] max-mob-lg:p-[20px]">
              <h3 className="text-[28px] font-bold text-primary-100 mb-[30px] max-tab-lg:text-[20px]">
                After Smartbizgenie:
              </h3>
              <ul className="space-y-[15px]">
                <li className="text-[18px] text-primary-100 font-medium max-mob-lg:text-[14px]">
                  ✓ 24/7 availability
                </li>
                <li className="text-[18px] text-primary-100 font-medium max-mob-lg:text-[14px]">
                  ✓ 0% missed inquiries
                </li>
                <li className="text-[18px] text-primary-100 font-medium max-mob-lg:text-[14px]">
                  ✓ 4.8/5 satisfaction rating
                </li>
                <li className="text-[18px] text-primary-100 font-medium max-mob-lg:text-[14px]">
                  ✓ $15,000 monthly cost
                </li>
              </ul>
            </div>
          </div>
        </Container>
      </section>

      {/* Implementation Timeline Section */}
      <section className="py-[50px] max-mob-lg:py-6">
        <Container>
          <h2 className="text-[40px] font-bold text-center text-primary-100 mb-[50px] max-des-3xl:text-2xl max-mob-lg:mb-6">
            Implementation Timeline
          </h2>
          <div className="bg-[#222222] rounded-[20px] py-[40px] max-tab-lg:py-[30px]">
            <div className="flex flex-row justify-between max-w-[1200px] w-full mx-auto px-[20px] max-mob-lg:flex-wrap max-mob-lg:gap-[35px]">
              <div className="flex flex-col items-center flex-1">
                <div className="w-[120px] h-[120px] rounded-full bg-accent-100 flex justify-center items-center max-mob-lg:w-[80px] max-mob-lg:h-[80px]">
                  <span className="text-[48px] font-bold text-white max-mob-lg:text-[32px]">
                    1
                  </span>
                </div>
                <h3 className="text-[24px] font-medium text-white mt-[20px] max-tab-lg:text-[18px]">
                  Week 1
                </h3>
                <p className="text-[18px] text-white/80 mt-[10px] max-tab-lg:text-[14px] max-tab-lg:text-center">
                  Setup and integration
                </p>
              </div>
              <div className="flex flex-col items-center flex-1">
                <div className="w-[120px] h-[120px] rounded-full bg-accent-100 flex justify-center items-center max-mob-lg:w-[80px] max-mob-lg:h-[80px]">
                  <span className="text-[48px] font-bold text-white max-tab-lg:text-[32px]">
                    2
                  </span>
                </div>
                <h3 className="text-[24px] font-medium text-white mt-[20px] max-tab-lg:text-[18px]">
                  Week 2
                </h3>
                <p className="text-[18px] text-white/80 mt-[10px] max-tab-lg:text-[14px] max-tab-lg:text-center">
                  Knowledge base training
                </p>
              </div>
              <div className="flex flex-col items-center flex-1">
                <div className="w-[120px] h-[120px] rounded-full bg-accent-100 flex justify-center items-center max-mob-lg:w-[80px] max-mob-lg:h-[80px]">
                  <span className="text-[48px] font-bold text-white max-tab-lg:text-[32px]">
                    3
                  </span>
                </div>
                <h3 className="text-[24px] font-medium text-white mt-[20px] max-tab-lg:text-[18px]">
                  Week 3
                </h3>
                <p className="text-[18px] text-white/80 mt-[10px] max-tab-lg:text-[14px] max-tab-lg:text-center">
                  Testing and refinement
                </p>
              </div>
              <div className="flex flex-col items-center flex-1">
                <div className="w-[120px] h-[120px] rounded-full bg-accent-100 flex justify-center items-center max-mob-lg:w-[80px] max-mob-lg:h-[80px]">
                  <span className="text-[48px] font-bold text-white max-tab-lg:text-[32px]">
                    4
                  </span>
                </div>
                <h3 className="text-[24px] font-medium text-white mt-[20px] max-tab-lg:text-[18px]">
                  Week 4
                </h3>
                <p className="text-[18px] text-white/80 mt-[10px] max-tab-lg:text-[14px] max-tab-lg:text-center">
                  Full deployment
                </p>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* CTA Section */}
      <section className="bg-primary-100 py-[80px] max-mob-lg:py-10 border-b-[1px] border-white">
        <Container>
          <div className="text-center">
            <h2 className="text-[40px] font-bold text-white mb-[20px] max-des-3xl:text-2xl">
              Your 24/7 Support Journey Starts Here
            </h2>
            <p className="text-[24px] text-white/90 mb-[30px] max-mob-lg:text-[18px]">
              Join hundreds of businesses providing exceptional round-the-clock
              customer service without breaking the bank.
            </p>
            <div className="bg-accent-200 text-primary-100 text-[20px] font-bold px-[30px] py-[15px] rounded-full inline-block mb-[40px] max-mob-lg:text-[16px]">
              Special Offer: First month 50% off for new customers
            </div>
            <div className="flex justify-center gap-[20px] flex-wrap">
              <Anchor
                href="/get-started"
                label="Start Your 24/7 Support"
                className=""
              />
              <Button
                onClick={() => toggleModal(true)}
                label="Schedule Demo"
                className="bg-transparent border-2 border-white"
              />
              <Anchor href="/pricing" label="See Pricing" className="" />
            </div>
            <p className="text-[20px] font-normal text-accent-200 mt-[40px] max-mob-lg:text-[16px]">
              Have questions? Our 24/7 chatbot is ready to help right now! 💬
            </p>
          </div>
        </Container>
      </section>
    </>
  );
}
