import Container from "@/components/ui/conatiner/Container";
import Anchor from "@/components/ui/Anchor/Anchor";
import { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Ecommerce Upselling Chatbot | +45% Revenue - Smartbizgenie",
  description:
    "AI-powered upselling chatbot for ecommerce. Increase average order value by 45% with smart product recommendations. Proven ROI in 30 days. Try it free!",
  keywords:
    "ecommerce upselling chatbot, AI upselling, increase order value, product recommendations, ecommerce revenue",
  alternates: {
    canonical: `https://smartbizgenie.com/ecommerce-upselling-chatbot`,
  },
};

export default function page() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-primary-100 ">
        <div className="text-center max-w-full w-full relative">
          <Image
            src="/assets/images/ecommerce.jpg"
            alt=""
            width={1900}
            height={1000}
            className="w-full max-h-[100dvh] object-cover h-full"
          />
           <div className="absolute inset-0 bg-primary-100/30 z-10"></div>
          <Container className="absolute bottom-[80px] flex flex-col w-full max-tab-lg:mt-[50px] max-tab-lg:pb-[50px] left-[50%] -translate-x-1/2  max-tab-md:relative max-tab-md:bottom-0  max-tab-lg:px-4">
            <div className="text-center max-w-[1200px] mx-auto">
              <h1 className="text-[50px] font-bold text-white leading-[60px] max-mob-lg:text-2xl max-des-3xl:text-[40px] max-mob-lg:leading-[1.2] max-des-3xl:leading-[40px]">
                The Ecommerce Upselling Chatbot That{" "}
                <span className="text-accent-100">Pays for Itself</span>
              </h1>
              <h2 className="text-[34px] font-normal leading-[100%] text-white mt-6 max-des-4xl:text-lg max-mob-lg:text-xl">
                Increase Average Order Value by 45% with AI-Powered
                Recommendations
              </h2>
              <p className="text-[24px] leading-[1.2] text-white/80 mt-8 max-w-[900px] mx-auto max-mob-lg:text-base">
                Turn every conversation into a sales opportunity.
                Smartbizgenie&apos;s ecommerce upselling chatbot uses advanced
                AI to suggest the perfect products at the perfect moment,
                driving revenue while enhancing customer experience.
              </p>
              <div className="flex gap-[40px] justify-center mt-[50px] max-tab-lg:gap-[20px] max-mob-lg:flex-wrap">
                <Anchor
                  href="/demo"
                  label="Watch Demo Video"
                  className="px-[47px] py-[21px] text-[24px] font-medium max-tab-lg:py-3 max-tab-lg:px-5 max-tab-lg:text-base"
                />
                <Anchor
                  href="/get-started"
                  label="Start Free Trial"
                  className="px-[47px] py-[21px] text-[24px] font-medium  max-tab-lg:py-3 max-tab-lg:px-5 max-tab-lg:text-base bg-transparent border-2 border-white"
                />
              </div>
            </div>
          </Container>
        </div>
      </section>

      {/* Science of Smart Upselling Section */}
      <section className="py-[50px] max-mob-lg:py-6">
        <Container>
          <h2 className="text-[40px] font-bold text-center text-primary-100 mb-[50px] max-des-3xl:text-2xl max-mob-lg:mb-6">
            The Science of Smart Upselling
          </h2>
          <div className="grid grid-cols-2 gap-[40px] max-w-[1000px] mx-auto max-tab-lg:grid-cols-1">
            <div className="bg-[#F5F5F5] rounded-[20px] p-[40px] max-mob-lg:p-[20px]">
              <h3 className="text-[24px] font-bold text-primary-100 mb-[20px] max-mob-lg:text-[18px]">
                Traditional Upselling:
              </h3>
              <ul className="space-y-[15px]">
                <li className="flex items-start gap-[10px]">
                  <span className="w-[8px] h-[8px] bg-primary-100/50 rounded-full flex-shrink-0 mt-[8px]"></span>
                  <span className="text-[18px] text-primary-100/80 max-mob-lg:text-[14px]">
                    Generic &quot;You might also like&quot; suggestions
                  </span>
                </li>
                <li className="flex items-start gap-[10px]">
                  <span className="w-[8px] h-[8px] bg-primary-100/50 rounded-full flex-shrink-0 mt-[8px]"></span>
                  <span className="text-[18px] text-primary-100/80 max-mob-lg:text-[14px]">
                    2-5% conversion rate
                  </span>
                </li>
                <li className="flex items-start gap-[10px]">
                  <span className="w-[8px] h-[8px] bg-primary-100/50 rounded-full flex-shrink-0 mt-[8px]"></span>
                  <span className="text-[18px] text-primary-100/80 max-mob-lg:text-[14px]">
                    Often feels pushy
                  </span>
                </li>
              </ul>
            </div>
            <div className="bg-accent-100 rounded-[20px] p-[40px] max-mob-lg:p-[20px]">
              <h3 className="text-[24px] font-bold text-white mb-[20px] max-mob-lg:text-[18px]">
                AI-Powered Upselling:
              </h3>
              <ul className="space-y-[15px]">
                <li className="flex items-start gap-[10px]">
                  <span className="w-[8px] h-[8px] bg-white rounded-full flex-shrink-0 mt-[8px]"></span>
                  <span className="text-[18px] text-white max-mob-lg:text-[14px]">
                    Personalized recommendations based on behavior
                  </span>
                </li>
                <li className="flex items-start gap-[10px]">
                  <span className="w-[8px] h-[8px] bg-white rounded-full flex-shrink-0 mt-[8px]"></span>
                  <span className="text-[18px] text-white max-mob-lg:text-[14px]">
                    15-30% conversion rate
                  </span>
                </li>
                <li className="flex items-start gap-[10px]">
                  <span className="w-[8px] h-[8px] bg-white rounded-full flex-shrink-0 mt-[8px]"></span>
                  <span className="text-[18px] text-white max-mob-lg:text-[14px]">
                    Feels helpful and natural
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </Container>
      </section>

      {/* Intelligent Upselling Strategies Section */}
      <section className="bg-primary-100 py-[50px] max-mob-lg:py-6">
        <Container>
          <h2 className="text-[40px] font-bold text-center text-white mb-[50px] max-des-3xl:text-2xl max-mob-lg:mb-6">
            Intelligent Upselling Strategies That Work
          </h2>
          <div className="grid grid-cols-3 gap-[25px] max-tab-lg:grid-cols-1">
            <div className="bg-white/10 backdrop-blur-sm rounded-[20px] p-[40px] max-mob-lg:p-[20px]">
              <div className="text-[48px] mb-[15px]">🎯</div>
              <h3 className="text-[24px] font-medium text-accent-100 mb-[20px] max-mob-lg:text-[18px]">
                Behavioral Targeting
              </h3>
              <ul className="space-y-[15px]">
                <li className="flex items-center gap-[10px]">
                  <span className="w-[8px] h-[8px] bg-accent-100 rounded-full flex-shrink-0"></span>
                  <span className="text-white text-[18px] max-mob-lg:text-[14px]">
                    Analyze browsing patterns
                  </span>
                </li>
                <li className="flex items-center gap-[10px]">
                  <span className="w-[8px] h-[8px] bg-accent-100 rounded-full flex-shrink-0"></span>
                  <span className="text-white text-[18px] max-mob-lg:text-[14px]">
                    Understand purchase intent
                  </span>
                </li>
                <li className="flex items-center gap-[10px]">
                  <span className="w-[8px] h-[8px] bg-accent-100 rounded-full flex-shrink-0"></span>
                  <span className="text-white text-[18px] max-mob-lg:text-[14px]">
                    Identify upsell opportunities
                  </span>
                </li>
                <li className="flex items-center gap-[10px]">
                  <span className="w-[8px] h-[8px] bg-accent-100 rounded-full flex-shrink-0"></span>
                  <span className="text-white text-[18px] max-mob-lg:text-[14px]">
                    Time suggestions perfectly
                  </span>
                </li>
              </ul>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-[20px] p-[40px] max-mob-lg:p-[20px]">
              <div className="text-[48px] mb-[15px]">🛍️</div>
              <h3 className="text-[24px] font-medium text-accent-100 mb-[20px] max-mob-lg:text-[18px]">
                Smart Product Pairing
              </h3>
              <ul className="space-y-[15px]">
                <li className="flex items-center gap-[10px]">
                  <span className="w-[8px] h-[8px] bg-accent-100 rounded-full flex-shrink-0"></span>
                  <span className="text-white text-[18px] max-mob-lg:text-[14px]">
                    Complementary item suggestions
                  </span>
                </li>
                <li className="flex items-center gap-[10px]">
                  <span className="w-[8px] h-[8px] bg-accent-100 rounded-full flex-shrink-0"></span>
                  <span className="text-white text-[18px] max-mob-lg:text-[14px]">
                    Bundle recommendations
                  </span>
                </li>
                <li className="flex items-center gap-[10px]">
                  <span className="w-[8px] h-[8px] bg-accent-100 rounded-full flex-shrink-0"></span>
                  <span className="text-white text-[18px] max-mob-lg:text-[14px]">
                    Size/color variants
                  </span>
                </li>
                <li className="flex items-center gap-[10px]">
                  <span className="w-[8px] h-[8px] bg-accent-100 rounded-full flex-shrink-0"></span>
                  <span className="text-white text-[18px] max-mob-lg:text-[14px]">
                    Premium alternatives
                  </span>
                </li>
              </ul>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-[20px] p-[40px] max-mob-lg:p-[20px]">
              <div className="text-[48px] mb-[15px]">💡</div>
              <h3 className="text-[24px] font-medium text-accent-100 mb-[20px] max-mob-lg:text-[18px]">
                Contextual Recommendations
              </h3>
              <ul className="space-y-[15px]">
                <li className="flex items-center gap-[10px]">
                  <span className="w-[8px] h-[8px] bg-accent-100 rounded-full flex-shrink-0"></span>
                  <span className="text-white text-[18px] max-mob-lg:text-[14px]">
                    Based on cart contents
                  </span>
                </li>
                <li className="flex items-center gap-[10px]">
                  <span className="w-[8px] h-[8px] bg-accent-100 rounded-full flex-shrink-0"></span>
                  <span className="text-white text-[18px] max-mob-lg:text-[14px]">
                    Previous purchases
                  </span>
                </li>
                <li className="flex items-center gap-[10px]">
                  <span className="w-[8px] h-[8px] bg-accent-100 rounded-full flex-shrink-0"></span>
                  <span className="text-white text-[18px] max-mob-lg:text-[14px]">
                    Seasonal trends
                  </span>
                </li>
                <li className="flex items-center gap-[10px]">
                  <span className="w-[8px] h-[8px] bg-accent-100 rounded-full flex-shrink-0"></span>
                  <span className="text-white text-[18px] max-mob-lg:text-[14px]">
                    Stock levels
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </Container>
      </section>

      {/* Case Studies Section */}
      <section className="py-[50px] max-mob-lg:py-6">
        <Container>
          <h2 className="text-[40px] font-bold text-center text-primary-100 mb-[50px] max-des-3xl:text-2xl max-mob-lg:mb-6">
            Real Results from Real Stores
          </h2>
          <div className="grid grid-cols-2 gap-[40px] max-tab-lg:grid-cols-1">
            <div className="bg-accent-100 rounded-[20px] p-[40px] max-mob-lg:p-[20px]">
              <h3 className="text-[28px] font-bold text-white mb-[30px] max-mob-lg:text-[20px]">
                Case Study: Fashion Retailer
              </h3>
              <div className="space-y-[20px]">
                <div className="flex items-center gap-[15px]">
                  <span className="text-[32px]">📈</span>
                  <div>
                    <span className="text-[24px] font-bold text-white max-mob-lg:text-[18px]">
                      52% increase
                    </span>
                    <span className="text-[18px] text-white/90 ml-2 max-mob-lg:text-[14px]">
                      in average order value
                    </span>
                  </div>
                </div>
                <div className="flex items-center gap-[15px]">
                  <span className="text-[32px]">🛒</span>
                  <div>
                    <span className="text-[24px] font-bold text-white max-mob-lg:text-[18px]">
                      3.2 items
                    </span>
                    <span className="text-[18px] text-white/90 ml-2 max-mob-lg:text-[14px]">
                      per order (up from 1.8)
                    </span>
                  </div>
                </div>
                <div className="flex items-center gap-[15px]">
                  <span className="text-[32px]">💰</span>
                  <div>
                    <span className="text-[24px] font-bold text-white max-mob-lg:text-[18px]">
                      $240,000
                    </span>
                    <span className="text-[18px] text-white/90 ml-2 max-mob-lg:text-[14px]">
                      additional revenue in 6 months
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-[#F5F5F5] rounded-[20px] p-[40px] max-mob-lg:p-[20px]">
              <h3 className="text-[28px] font-bold text-primary-100 mb-[30px] max-mob-lg:text-[20px]">
                Case Study: Electronics Store
              </h3>
              <div className="space-y-[20px]">
                <div className="flex items-center gap-[15px]">
                  <span className="text-[32px]">📱</span>
                  <div>
                    <span className="text-[24px] font-bold text-primary-100 max-mob-lg:text-[18px]">
                      68% of customers
                    </span>
                    <span className="text-[18px] text-primary-100/80 ml-2 max-mob-lg:text-[14px]">
                      accepted accessory suggestions
                    </span>
                  </div>
                </div>
                <div className="flex items-center gap-[15px]">
                  <span className="text-[32px]">🔋</span>
                  <div>
                    <span className="text-[24px] font-bold text-primary-100 max-mob-lg:text-[18px]">
                      $85
                    </span>
                    <span className="text-[18px] text-primary-100/80 ml-2 max-mob-lg:text-[14px]">
                      average upsell value
                    </span>
                  </div>
                </div>
                <div className="flex items-center gap-[15px]">
                  <span className="text-[32px]">⭐</span>
                  <div>
                    <span className="text-[24px] font-bold text-primary-100 max-mob-lg:text-[18px]">
                      4.8/5
                    </span>
                    <span className="text-[18px] text-primary-100/80 ml-2 max-mob-lg:text-[14px]">
                      customer satisfaction rating
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* How It Works Section */}
      <section className="bg-[#F5F5F5] py-[50px] max-mob-lg:py-6">
        <Container>
          <h2 className="text-[40px] font-bold text-center text-primary-100 mb-[50px] max-des-3xl:text-2xl max-mob-lg:mb-6">
            How Our Upselling Chatbot Drives Revenue
          </h2>
          <div className="flex justify-between max-w-[1200px] mx-auto max-mob-lg:flex-col max-mob-lg:gap-[40px]">
            <div className="flex-1 text-center px-[20px]">
              <div className="w-[120px] h-[120px] bg-accent-100 rounded-full flex items-center justify-center mx-auto mb-[20px] max-mob-lg:w-[80px] max-mob-lg:h-[80px]">
                <span className="text-[48px] font-bold text-white max-mob-lg:text-[32px]">
                  1
                </span>
              </div>
              <h3 className="text-[24px] font-bold text-primary-100 mb-[15px] max-mob-lg:text-[18px]">
                Welcome & Engage
              </h3>
              <ul className="text-left inline-block space-y-[10px]">
                <li className="text-[16px] text-primary-100/80 max-mob-lg:text-[14px]">
                  • Greet visitors personally
                </li>
                <li className="text-[16px] text-primary-100/80 max-mob-lg:text-[14px]">
                  • Understand their needs
                </li>
                <li className="text-[16px] text-primary-100/80 max-mob-lg:text-[14px]">
                  • Build trust naturally
                </li>
              </ul>
            </div>
            <div className="flex-1 text-center px-[20px]">
              <div className="w-[120px] h-[120px] bg-accent-100 rounded-full flex items-center justify-center mx-auto mb-[20px] max-mob-lg:w-[80px] max-mob-lg:h-[80px]">
                <span className="text-[48px] font-bold text-white max-mob-lg:text-[32px]">
                  2
                </span>
              </div>
              <h3 className="text-[24px] font-bold text-primary-100 mb-[15px] max-mob-lg:text-[18px]">
                Analyze & Recommend
              </h3>
              <ul className="text-left inline-block space-y-[10px]">
                <li className="text-[16px] text-primary-100/80 max-mob-lg:text-[14px]">
                  • Study shopping behavior
                </li>
                <li className="text-[16px] text-primary-100/80 max-mob-lg:text-[14px]">
                  • Identify opportunities
                </li>
                <li className="text-[16px] text-primary-100/80 max-mob-lg:text-[14px]">
                  • Suggest relevant products
                </li>
              </ul>
            </div>
            <div className="flex-1 text-center px-[20px]">
              <div className="w-[120px] h-[120px] bg-accent-100 rounded-full flex items-center justify-center mx-auto mb-[20px] max-mob-lg:w-[80px] max-mob-lg:h-[80px]">
                <span className="text-[48px] font-bold text-white max-mob-lg:text-[32px]">
                  3
                </span>
              </div>
              <h3 className="text-[24px] font-bold text-primary-100 mb-[15px] max-mob-lg:text-[18px]">
                Convert & Delight
              </h3>
              <ul className="text-left inline-block space-y-[10px]">
                <li className="text-[16px] text-primary-100/80 max-mob-lg:text-[14px]">
                  • Present irresistible offers
                </li>
                <li className="text-[16px] text-primary-100/80 max-mob-lg:text-[14px]">
                  • Handle objections smoothly
                </li>
                <li className="text-[16px] text-primary-100/80 max-mob-lg:text-[14px]">
                  • Close sales effortlessly
                </li>
              </ul>
            </div>
          </div>
        </Container>
      </section>

      {/* Advanced Features Section */}
      <section className="py-[50px] max-mob-lg:py-6">
        <Container>
          <h2 className="text-[40px] font-bold text-center text-primary-100 mb-[50px] max-des-3xl:text-2xl max-mob-lg:mb-6">
            Advanced Features for Maximum Impact
          </h2>
          <div className="grid grid-cols-3 gap-[40px] max-tab-lg:grid-cols-1">
            <div className="text-center">
              <div className="text-[64px] mb-[20px]">🎨</div>
              <h3 className="text-[24px] font-bold text-primary-100 mb-[20px] max-mob-lg:text-[18px]">
                Visual Product Showcase
              </h3>
              <ul className="text-left inline-block space-y-[10px]">
                <li className="text-[18px] text-primary-100/80 max-mob-lg:text-[14px]">
                  • Rich media presentations
                </li>
                <li className="text-[18px] text-primary-100/80 max-mob-lg:text-[14px]">
                  • 360° product views
                </li>
                <li className="text-[18px] text-primary-100/80 max-mob-lg:text-[14px]">
                  • Comparison tools
                </li>
                <li className="text-[18px] text-primary-100/80 max-mob-lg:text-[14px]">
                  • Size guides
                </li>
              </ul>
            </div>
            <div className="text-center">
              <div className="text-[64px] mb-[20px]">🎁</div>
              <h3 className="text-[24px] font-bold text-primary-100 mb-[20px] max-mob-lg:text-[18px]">
                Dynamic Bundling
              </h3>
              <ul className="text-left inline-block space-y-[10px]">
                <li className="text-[18px] text-primary-100/80 max-mob-lg:text-[14px]">
                  • Create custom packages
                </li>
                <li className="text-[18px] text-primary-100/80 max-mob-lg:text-[14px]">
                  • Offer bundle discounts
                </li>
                <li className="text-[18px] text-primary-100/80 max-mob-lg:text-[14px]">
                  • Show savings clearly
                </li>
                <li className="text-[18px] text-primary-100/80 max-mob-lg:text-[14px]">
                  • Limited-time offers
                </li>
              </ul>
            </div>
            <div className="text-center">
              <div className="text-[64px] mb-[20px]">📊</div>
              <h3 className="text-[24px] font-bold text-primary-100 mb-[20px] max-mob-lg:text-[18px]">
                Performance Analytics
              </h3>
              <ul className="text-left inline-block space-y-[10px]">
                <li className="text-[18px] text-primary-100/80 max-mob-lg:text-[14px]">
                  • Track upsell success rates
                </li>
                <li className="text-[18px] text-primary-100/80 max-mob-lg:text-[14px]">
                  • Identify best-performing products
                </li>
                <li className="text-[18px] text-primary-100/80 max-mob-lg:text-[14px]">
                  • A/B test strategies
                </li>
                <li className="text-[18px] text-primary-100/80 max-mob-lg:text-[14px]">
                  • ROI measurement
                </li>
              </ul>
            </div>
          </div>
        </Container>
      </section>

      {/* Pricing Section */}
      <section className="bg-primary-100 py-[50px] max-mob-lg:py-6">
        <Container>
          <h2 className="text-[40px] font-bold text-center text-white mb-[50px] max-des-3xl:text-2xl max-mob-lg:mb-6">
            Pricing That Makes Sense
          </h2>
          <div className="grid grid-cols-3 gap-[30px] max-w-[1200px] mx-auto max-tab-lg:grid-cols-1">
            <div className="bg-white rounded-[20px] p-[40px] text-center max-mob-lg:p-[20px]">
              <h3 className="text-[28px] font-bold text-primary-100 mb-[10px] max-mob-lg:text-[20px]">
                Starter Plan
              </h3>
              <div className="text-[48px] font-bold text-accent-100 mb-[20px] max-mob-lg:text-[36px]">
                $299
                <span className="text-[24px] font-normal max-mob-lg:text-[18px]">
                  /month
                </span>
              </div>
              <ul className="space-y-[15px] text-left mb-[30px]">
                <li className="text-[16px] text-primary-100/80 max-mob-lg:text-[14px]">
                  • Up to 5,000 conversations
                </li>
                <li className="text-[16px] text-primary-100/80 max-mob-lg:text-[14px]">
                  • Basic upselling features
                </li>
                <li className="text-[16px] text-primary-100/80 max-mob-lg:text-[14px]">
                  • Standard analytics
                </li>
              </ul>
              <Anchor
                href="/get-started"
                label="Start Free Trial"
                className="w-full text-center "
              />
            </div>
            <div className="bg-accent-100 rounded-[20px] p-[40px] text-center transform scale-105 max-mob-lg:p-[20px] max-tab-lg:scale-100">
              <div className="bg-accent-200 text-primary-100 text-[14px] font-bold px-[20px] py-[5px] rounded-full inline-block mb-[20px]">
                MOST POPULAR
              </div>
              <h3 className="text-[28px] font-bold text-white mb-[10px] max-mob-lg:text-[20px]">
                Growth Plan
              </h3>
              <div className="text-[48px] font-bold text-white mb-[20px] max-mob-lg:text-[36px]">
                $599
                <span className="text-[24px] font-normal max-mob-lg:text-[18px]">
                  /month
                </span>
              </div>
              <ul className="space-y-[15px] text-left mb-[30px]">
                <li className="text-[16px] text-white/90 max-mob-lg:text-[14px]">
                  • Up to 20,000 conversations
                </li>
                <li className="text-[16px] text-white/90 max-mob-lg:text-[14px]">
                  • Advanced AI recommendations
                </li>
                <li className="text-[16px] text-white/90 max-mob-lg:text-[14px]">
                  • Premium analytics
                </li>
              </ul>
              <Anchor
                href="/get-started"
                label="Start Free Trial"
                className="w-full text-center bg-white !text-accent-100 hover:bg-gray-100"
              />
            </div>
            <div className="bg-white rounded-[20px] p-[40px] text-center max-mob-lg:p-[20px]">
              <h3 className="text-[28px] font-bold text-primary-100 mb-[10px] max-mob-lg:text-[20px]">
                Enterprise
              </h3>
              <div className="text-[48px] font-bold text-accent-100 mb-[20px] max-mob-lg:text-[36px]">
                Custom
              </div>
              <ul className="space-y-[15px] text-left mb-[30px]">
                <li className="text-[16px] text-primary-100/80 max-mob-lg:text-[14px]">
                  • Unlimited conversations
                </li>
                <li className="text-[16px] text-primary-100/80 max-mob-lg:text-[14px]">
                  • Custom integrations
                </li>
                <li className="text-[16px] text-primary-100/80 max-mob-lg:text-[14px]">
                  • Dedicated support
                </li>
              </ul>
              <Anchor
                href="/contact"
                label="Contact Sales"
                className="w-full text-center"
              />
            </div>
          </div>
        </Container>
      </section>

      {/* CTA Section */}
      <section className="py-[80px] max-mob-lg:py-10">
        <Container>
          <div className="text-center">
            <h2 className="text-[40px] font-bold text-primary-100 mb-[20px] max-des-3xl:text-2xl">
              See It In Action
            </h2>
            <p className="text-[24px] text-primary-100/80 mb-[40px] max-w-[800px] mx-auto max-mob-lg:text-[18px]">
              Watch how our upselling chatbot increased this store&apos;s
              revenue by 45% in just 30 days.
            </p>
            <div className="flex justify-center gap-[20px] flex-wrap">
              <Anchor
                href="/demo"
                label="Watch Demo Video"
                className="px-[47px] py-[21px] text-[24px] font-medium max-tab-lg:py-3 max-tab-lg:px-5 max-tab-lg:text-base"
              />
              <Anchor
                href="/get-started"
                label="Start Free Trial"
                className="px-[47px] py-[21px] text-[24px] font-medium max-tab-lg:py-3 max-tab-lg:px-5 max-tab-lg:text-base bg-primary-100 text-white border-2 border-primary-100"
              />
              <Anchor
                href="/consultation"
                label="Book Consultation"
                className="px-[47px] py-[21px] text-[24px] font-medium max-tab-lg:py-3 max-tab-lg:px-5 max-tab-lg:text-base bg-transparent border-2 border-accent-100 !text-primary-100"
              />
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
