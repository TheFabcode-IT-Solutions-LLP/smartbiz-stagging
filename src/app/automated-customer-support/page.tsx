
import Container from "@/components/ui/conatiner/Container";
import Anchor from "@/components/ui/Anchor/Anchor";
import Image from "next/image";
import { Metadata } from "next";
 
export const metadata: Metadata = {
  title: 'Automated Customer Support | Cut Costs by 70% - Smartbizgenie',
  description: 'Automate customer support with AI. Handle 1000s of queries instantly, reduce response time to seconds, save 70% on support costs. Start free trial today.',
  keywords:"automated customer support, AI customer service, customer support automation, reduce support costs, 24/7 customer service",
    alternates: {
      canonical: `https://smartbizgenie.com/automated-customer-support`,
    },
 
}
 
export default function page() {
  return (
    <>

    
      {/* Hero Section */}
      <section className=" mb-[50px]">
          <div className="text-center max-w-full w-full relative">
            <Image  src = "/assets/images/young-adult-business-person-working-late-listening-generated-by-ai.jpg" alt = "" width = {1900} height = {1000} className="w-full max-h-[100dvh] object-cover h-full"/>
            <div className="absolute bottom-[80px] flex flex-col w-full max-tab-lg:mt-[50px]  max-tab-md:relative max-tab-md:bottom-0  max-tab-lg:px-4  ">
            <h1 className="text-[50px] font-bold text-white leading-[60px] max-tab-md:text-black max-mob-lg:text-2xl max-des-3xl:text-[40px] max-mob-lg:leading-[1.2] max-des-3xl:leading-[40px]">
              Automated Customer Support That{" "}
              <span className="text-accent-100">Never Sleeps</span>
            </h1>
            <h2 className="text-[34px] font-normal leading-[100%] text-white mt-6 max-des-4xl:text-lg max-mob-lg:text-xl max-tab-md:text-black">
              Cut Support Costs by 70% While Delighting Your Customers
            </h2>
            <p className="text-[24px] leading-[1.2] text-white/80 mt-8 max-w-[900px] mx-auto max-mob-lg:text-base max-tab-md:text-black">
              Transform your customer service with Smartbizgenie&aposs automated customer support system. 
              Handle thousands of queries simultaneously, reduce response times to seconds, 
              and free your team to focus on what matters most.
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
                className=" bg-transparent border-2 border-white max-tab-md:bg-accent-100"
              />
            </div>
            </div>
          </div>
     
      </section>

      {/* Hidden Cost Section */}
      <section className="py-[50px] max-mob-lg:py-6 max-sm:hidden">
        <Container>
          <h2 className="text-[40px] font-bold text-center text-primary-100 mb-[50px] max-des-3xl:text-2xl max-mob-lg:mb-6">
            The Hidden Cost of Manual Customer Support
          </h2>
          <div className="grid grid-cols-2 gap-[40px] max-w-[1000px] mx-auto max-tab-lg:flex-1 max-tab-lg:flex-wrap max-tab-lg:justify-center max-tab-lg:gap-[20px]">
            <div className="bg-[#F5F5F5] rounded-[20px] p-[40px] max-mob-lg:p-[20px]">
              <div className="text-[48px] mb-[15px]">📞</div>
              <h3 className="text-[24px] font-bold text-primary-100 mb-[10px] max-mob-lg:text-[18px]">
                $1.50 per minute
              </h3>
              <p className="text-[18px] text-primary-100/70 max-mob-lg:text-[14px]">
                Average cost of phone support
              </p>
            </div>
            <div className="bg-[#F5F5F5] rounded-[20px] p-[40px] max-mob-lg:p-[20px]">
              <div className="text-[48px] mb-[15px]">📧</div>
              <h3 className="text-[24px] font-bold text-primary-100 mb-[10px] max-mob-lg:text-[18px]">
                24-48 hours
              </h3>
              <p className="text-[18px] text-primary-100/70 max-mob-lg:text-[14px]">
                Typical email response time
              </p>
            </div>
            <div className="bg-[#F5F5F5] rounded-[20px] p-[40px] max-mob-lg:p-[20px]">
              <div className="text-[48px] mb-[15px]">😔</div>
              <h3 className="text-[24px] font-bold text-primary-100 mb-[10px] max-mob-lg:text-[18px]">
                67% of customers
              </h3>
              <p className="text-[18px] text-primary-100/70 max-mob-lg:text-[14px]">
                Leave due to poor service
              </p>
            </div>
            <div className="bg-[#F5F5F5] rounded-[20px] p-[40px] max-mob-lg:p-[20px]">
              <div className="text-[48px] mb-[15px]">💸</div>
              <h3 className="text-[24px] font-bold text-primary-100 mb-[10px] max-mob-lg:text-[18px]">
                $75 billion
              </h3>
              <p className="text-[18px] text-primary-100/70 max-mob-lg:text-[14px]">
                Annual loss from poor customer service
              </p>
            </div>
          </div>
        </Container>
      </section>
<section className="py-[50px] max-mob-lg:py-6 sm:hidden">
  <Container>
    <h2 className="text-[40px] font-bold text-center text-primary-100 mb-[50px] max-des-3xl:text-2xl max-mob-lg:mb-6">
      The Hidden Cost of Manual Customer Support
    </h2>

   
    <div className="overflow-x-auto max-tab-lg:overflow-x-scroll">
    
      <div className="grid grid-cols-2 gap-[40px] max-w-[1000px] mx-auto max-tab-lg:flex max-tab-lg:gap-[20px] max-tab-lg:whitespace-nowrap">
        {[
          {
            icon: '📞',
            title: '$1.50 per minute',
            desc: 'Average cost of phone support',
          },
          {
            icon: '📧',
            title: '24-48 hours',
            desc: 'Typical email response time',
          },
          {
            icon: '😔',
            title: '67% of customers',
            desc: 'Leave due to poor service',
          },
          {
            icon: '💸',
            title: '$75 billion',
            desc: 'Annual loss from poor customer service',
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

      {/* Intelligent Automation Section */}
      <section className="bg-primary-100 py-[50px] max-mob-lg:py-6 my-[50px]">
        <Container>
          <h2 className="text-[40px] font-bold text-center text-white mb-[50px] max-des-3xl:text-2xl max-mob-lg:mb-6">
            Intelligent Automation That Understands Your Customers
          </h2>
          <div className="grid grid-cols-3 gap-[25px] max-tab-lg:flex max-tab-lg:flex-wrap max-tab-lg:justify-center">
            <div className="bg-white/10 backdrop-blur-sm rounded-[20px] p-[40px] max-mob-lg:p-[20px] max-des-xl:p-[30px]">
              <h3 className="text-[24px] font-medium text-accent-100 mb-[20px] max-mob-lg:text-[18px]">
                Instant Query Resolution
              </h3>
              <ul className="space-y-[15px]">
                <li className="flex items-center gap-[10px]">
                  <span className="w-[8px] h-[8px] bg-accent-100 rounded-full flex-shrink-0"></span>
                  <span className="text-white text-[18px] max-mob-lg:text-[14px]">FAQs answered immediately</span>
                </li>
                <li className="flex items-center gap-[10px]">
                  <span className="w-[8px] h-[8px] bg-accent-100 rounded-full flex-shrink-0"></span>
                  <span className="text-white text-[18px] max-mob-lg:text-[14px]">Order status updates</span>
                </li>
                <li className="flex items-center gap-[10px]">
                  <span className="w-[8px] h-[8px] bg-accent-100 rounded-full flex-shrink-0"></span>
                  <span className="text-white text-[18px] max-mob-lg:text-[14px]">Product information</span>
                </li>
                <li className="flex items-center gap-[10px]">
                  <span className="w-[8px] h-[8px] bg-accent-100 rounded-full flex-shrink-0"></span>
                  <span className="text-white text-[18px] max-mob-lg:text-[14px]">Technical troubleshooting</span>
                </li>
              </ul>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-[20px] p-[40px] max-mob-lg:p-[20px] max-des-xl:p-[30px]">
              <h3 className="text-[24px] font-medium text-accent-100 mb-[20px] max-mob-lg:text-[18px]">
                Smart Ticket Management
              </h3>
              <ul className="space-y-[15px]">
                <li className="flex items-center gap-[10px]">
                  <span className="w-[8px] h-[8px] bg-accent-100 rounded-full flex-shrink-0"></span>
                  <span className="text-white text-[18px] max-mob-lg:text-[14px]">Automatic categorization</span>
                </li>
                <li className="flex items-center gap-[10px]">
                  <span className="w-[8px] h-[8px] bg-accent-100 rounded-full flex-shrink-0"></span>
                  <span className="text-white text-[18px] max-mob-lg:text-[14px]">Priority-based routing</span>
                </li>
                <li className="flex items-center gap-[10px]">
                  <span className="w-[8px] h-[8px] bg-accent-100 rounded-full flex-shrink-0"></span>
                  <span className="text-white text-[18px] max-mob-lg:text-[14px]">Sentiment analysis</span>
                </li>
                <li className="flex items-center gap-[10px]">
                  <span className="w-[8px] h-[8px] bg-accent-100 rounded-full flex-shrink-0"></span>
                  <span className="text-white text-[18px] max-mob-lg:text-[14px]">Resolution tracking</span>
                </li>
              </ul>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-[20px] p-[40px] max-mob-lg:p-[20px] max-des-xl:p-[30px]">
              <h3 className="text-[24px] font-medium text-accent-100 mb-[20px] max-mob-lg:text-[18px]">
                Proactive Support
              </h3>
              <ul className="space-y-[15px]">
                <li className="flex items-center gap-[10px]">
                  <span className="w-[8px] h-[8px] bg-accent-100 rounded-full flex-shrink-0"></span>
                  <span className="text-white text-[18px] max-mob-lg:text-[14px]">Anticipate customer needs</span>
                </li>
                <li className="flex items-center gap-[10px]">
                  <span className="w-[8px] h-[8px] bg-accent-100 rounded-full flex-shrink-0"></span>
                  <span className="text-white text-[18px] max-mob-lg:text-[14px]">Prevent issues before they arise</span>
                </li>
                <li className="flex items-center gap-[10px]">
                  <span className="w-[8px] h-[8px] bg-accent-100 rounded-full flex-shrink-0"></span>
                  <span className="text-white text-[18px] max-mob-lg:text-[14px]">Personalized help suggestions</span>
                </li>
                <li className="flex items-center gap-[10px]">
                  <span className="w-[8px] h-[8px] bg-accent-100 rounded-full flex-shrink-0"></span>
                  <span className="text-white text-[18px] max-mob-lg:text-[14px]">Timely follow-ups</span>
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
            Why Leading Brands Choose Our Automated Customer Support
          </h2>
          <div className="grid grid-cols-2 gap-[30px] max-w-[1100px] mx-auto max-mob-lg:grid-cols-1">
            <div className="flex gap-[20px] items-center">
              <span className="text-[32px] flex-shrink-0">✅</span>
              <div>
                <h3 className="text-[24px] font-bold text-primary-100 mb-[5px] max-des-xl:text-[18px]">
                  Always Available
                </h3>
                <p className="text-[18px] text-primary-100/70 max-mob-lg:text-[14px]">
                  24/7/365 support without overtime costs
                </p>
              </div>
            </div>
            <div className="flex gap-[20px]  items-center">
              <span className="text-[32px] flex-shrink-0">✅</span>
              <div>
                <h3 className="text-[24px] font-bold text-primary-100 mb-[5px] max-des-xl:text-[18px]">
                  Infinitely Scalable
                </h3>
                <p className="text-[18px] text-primary-100/70 max-mob-lg:text-[14px]">
                  Handle 10 or 10,000 queries simultaneously
                </p>
              </div>
            </div>
            <div className="flex gap-[20px]  items-center">
              <span className="text-[32px] flex-shrink-0">✅</span>
              <div>
                <h3 className="text-[24px] font-bold text-primary-100 mb-[5px]  max-des-xl:text-[18px]">
                  Consistently Accurate
                </h3>
                <p className="text-[18px] text-primary-100/70 max-mob-lg:text-[14px]">
                  No bad days, mood swings, or human errors
                </p>
              </div>
            </div>
            <div className="flex gap-[20px]  items-center">
              <span className="text-[32px] flex-shrink-0">✅</span>
              <div>
                <h3 className="text-[24px] font-bold text-primary-100 mb-[5px]  max-des-xl:text-[18px]">
                  Multilingual Ready
                </h3>
                <p className="text-[18px] text-primary-100/70 max-mob-lg:text-[14px]">
                  Support customers in their preferred language
                </p>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* ROI Calculator Section */}
      <section className="bg-accent-100 py-[50px] max-mob-lg:py-6 my-[50px]">
        <Container>
          <div className="text-center">
            <h2 className="text-[40px] font-bold text-white mb-[30px] max-des-3xl:text-2xl">
              ROI Calculator: See Your Savings
            </h2>
            <p className="text-[24px] text-white mb-[40px] max-mob-lg:text-[18px]">
              For a business handling 1,000 support queries/month:
            </p>
            <div className="bg-white/20 backdrop-blur-sm rounded-[20px] p-[40px] max-w-[600px] mx-auto max-mob-lg:p-[20px]">
              <div className="text-left space-y-[20px]">
                <div className="flex justify-between items-center">
                  <span className="text-[20px] text-white max-mob-lg:text-[16px]">Traditional Support Cost:</span>
                  <span className="text-[24px] font-bold text-white max-mob-lg:text-[20px]">$15,000/month</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-[20px] text-white max-mob-lg:text-[16px]">With Smartbizgenie:</span>
                  <span className="text-[24px] font-bold text-white max-mob-lg:text-[20px]">$2,500/month</span>
                </div>
                <div className="border-t border-white/30 pt-[20px] mt-[20px]">
                  <div className="flex justify-between items-center">
                    <span className="text-[24px] font-bold text-white max-mob-lg:text-[20px]">Your Savings:</span>
                    <span className="text-[24px] font-bold text-white max-mob-lg:text-[24px]">$12,500/month </span>
                  </div>
                </div>
              </div>
                <Anchor 
              href="/calculate-roi" 
              label="Calculate Your ROI"
              className="mt-[40px] bg-white !text-primary-100 hover:bg-gray-100 "
            />
            </div>
          
          </div>
        </Container>
      </section>

      {/* Features Section */}
      <section className="py-[50px] max-mob-lg:py-6">
        <Container>
          <h2 className="text-[40px] font-bold text-center text-primary-100 mb-[50px] max-des-3xl:text-2xl max-mob-lg:mb-6">
            Features That Set Us Apart
          </h2>
          <div className="grid grid-cols-3 gap-[40px] max-tab-lg:flex max-tab-lg:flex-wrap max-tab-lg:justify-center">
            <div className="bg-[#F5F5F5] rounded-[20px] p-[40px] max-mob-lg:p-[20px] max-des-xl:p-[15px]">
              <div className="text-[48px] mb-[15px]">🤖</div>
              <h3 className="text-[24px] font-bold text-primary-100 mb-[20px] max-mob-lg:text-[18px]">
                Advanced AI Understanding
              </h3>
              <ul className="space-y-[10px]">
                <li className="text-[18px] text-primary-100/80 max-mob-lg:text-[14px]">• Natural language processing</li>
                <li className="text-[18px] text-primary-100/80 max-mob-lg:text-[14px]">• Context awareness</li>
                <li className="text-[18px] text-primary-100/80 max-mob-lg:text-[14px]">• Intent recognition</li>
                <li className="text-[18px] text-primary-100/80 max-mob-lg:text-[14px]">• Emotion detection</li>
              </ul>
            </div>
            <div className="bg-[#F5F5F5] rounded-[20px] p-[40px] max-mob-lg:p-[20px] max-des-xl:p-[15px]">
              <div className="text-[48px] mb-[15px]">📊</div>
              <h3 className="text-[24px] font-bold text-primary-100 mb-[20px] max-mob-lg:text-[18px]">
                Comprehensive Analytics
              </h3>
              <ul className="space-y-[10px]">
                <li className="text-[18px] text-primary-100/80 max-mob-lg:text-[14px]">• Response time metrics</li>
                <li className="text-[18px] text-primary-100/80 max-mob-lg:text-[14px]">• Resolution rates</li>
                <li className="text-[18px] text-primary-100/80 max-mob-lg:text-[14px]">• Customer satisfaction scores</li>
                <li className="text-[18px] text-primary-100/80 max-mob-lg:text-[14px]">• Common issue identification</li>
              </ul>
            </div>
            <div className="bg-[#F5F5F5] rounded-[20px] p-[40px] max-mob-lg:p-[20px] max-des-xl:p-[15px]">
              <div className="text-[48px] mb-[15px]">🔗</div>
              <h3 className="text-[24px] font-bold text-primary-100 mb-[20px] max-mob-lg:text-[18px]">
                Seamless Integration
              </h3>
              <ul className="space-y-[10px]">
                <li className="text-[18px] text-primary-100/80 max-mob-lg:text-[14px]">• CRM synchronization</li>
                <li className="text-[18px] text-primary-100/80 max-mob-lg:text-[14px]">• Help desk compatibility</li>
                <li className="text-[18px] text-primary-100/80 max-mob-lg:text-[14px]">• Knowledge base connection</li>
                <li className="text-[18px] text-primary-100/80 max-mob-lg:text-[14px]">• API flexibility</li>
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
              Success Stories
            </h2>
            <div className="bg-white/10 backdrop-blur-sm rounded-[20px] p-[50px] max-w-[800px] mx-auto max-mob-lg:p-[30px]">
              <p className="text-[24px] text-white italic mb-[20px] max-mob-lg:text-[18px]">
                &quot;We reduced our support team from 15 to 5 agents while improving customer satisfaction by 40%.&quot;
              </p>
              <p className="text-[20px] text-accent-100 font-medium max-mob-lg:text-[16px]">
                - Tech Startup CEO
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* Get Started Steps */}
      <section className="py-[50px] max-mob-lg:py-6">
        <Container>
          <h2 className="text-[40px] font-bold text-center text-primary-100 mb-[50px] max-des-3xl:text-2xl max-mob-lg:mb-6">
            Get Started in 3 Simple Steps
          </h2>
          <div className="flex justify-between max-w-[1100px] mx-auto  max-mob-lg:gap-[30px]">
            <div className="text-center flex-1">
              <div className="w-[100px] h-[100px] bg-accent-100 rounded-full flex items-center justify-center mx-auto mb-[20px]">
                <span className="text-[40px] font-bold text-white">1</span>
              </div>
              <h3 className="text-[24px] font-bold text-primary-100 mb-[10px] max-mob-lg:text-[18px]">
                Connect
              </h3>
              <p className="text-[18px] text-primary-100/70 max-mob-lg:text-[14px]">
                Integrate with your existing systems
              </p>
            </div>
            <div className="text-center flex-1">
              <div className="w-[100px] h-[100px] bg-accent-100 rounded-full flex items-center justify-center mx-auto mb-[20px]">
                <span className="text-[40px] font-bold text-white">2</span>
              </div>
              <h3 className="text-[24px] font-bold text-primary-100 mb-[10px] max-mob-lg:text-[18px]">
                Configure
              </h3>
              <p className="text-[18px] text-primary-100/70 max-mob-lg:text-[14px]">
                Set up responses and workflows
              </p>
            </div>
            <div className="text-center flex-1">
              <div className="w-[100px] h-[100px] bg-accent-100 rounded-full flex items-center justify-center mx-auto mb-[20px]">
                <span className="text-[40px] font-bold text-white">3</span>
              </div>
              <h3 className="text-[24px] font-bold text-primary-100 mb-[10px] max-mob-lg:text-[18px]">
                Launch
              </h3>
              <p className="text-[18px] text-primary-100/70 max-mob-lg:text-[14px]">
                Start saving time and money immediately
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* Final CTA Section */}
      <section className="bg-primary-100 py-[80px] max-mob-lg:py-10 mt-[50px]">
        <Container>
          <div className="text-center">
            <h2 className="text-[40px] font-bold text-white mb-[40px] max-des-3xl:text-2xl">
              Ready to Transform Your Customer Support?
            </h2>
            <div className="flex justify-center gap-[20px] flex-wrap">
              <Anchor 
                href="/get-started" 
                label="Get Started Free"
                className=""
              />
              <Anchor 
                href="/demo" 
                label="Book a Demo"
                className=" bg-transparent border-white border-2 text-primary-100 "
              />
              <Anchor 
                href="/pricing" 
                label="View Pricing"
                className=""
              />
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}