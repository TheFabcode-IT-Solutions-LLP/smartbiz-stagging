'use client';

import React, { useState } from 'react';
import { ChevronRight, Clock, MessageSquare, Bot, Shield, BarChart3, AlertTriangle, TrendingUp, DollarSign, Users, Zap } from 'lucide-react';
import Link from 'next/link';
import { useTheme } from '@/contexts/ThemeContext';

const ShopifyCustomerSupportArticle = () => {
  const { toggleModal } = useTheme();
  const [activeSection, setActiveSection] = useState('');

  const tableOfContents = [
    { id: 'why-automation-matters', title: 'Why Shopify Customer Support Automation Matters Now' },
    { id: 'core-components', title: 'The Core Components of Shopify Customer Support Automation' },
    { id: 'advanced-strategies', title: 'Advanced Shopify Customer Service Automation Strategies' },
    { id: 'choosing-tools', title: 'Choosing the Right Customer Support Automation Tools for Shopify' },
    { id: 'implementation', title: 'Implementation Best Practices' },
    { id: 'measuring-success', title: 'Measuring Success: KPIs That Matter' },
    { id: 'common-pitfalls', title: 'Common Pitfalls to Avoid' },
    { id: 'roi-calculation', title: 'The ROI of Shopify Customer Support Automation' }
  ];

  const automationTools = [
    { name: 'Shopify Inbox', type: 'Native', bestFor: 'Small stores with straightforward support needs', price: 'Free' },
    { name: 'Gorgias', type: 'Specialized', bestFor: 'Growing stores needing deep Shopify integration', price: '$60+/mo' },
    { name: 'Zendesk', type: 'Enterprise', bestFor: 'Large stores with complex support operations', price: '$49+/mo' },
    { name: 'Intercom', type: 'AI-Powered', bestFor: 'Stores wanting advanced AI capabilities', price: '$74+/mo' }
  ];

  return (
    <article className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <header className="mb-12">
          <div className="flex items-center gap-2 text-sm text-gray-600 mb-4">
            <Clock className="w-4 h-4" />
            <span>July 28, 2025</span>
            <span className="mx-2">•</span>
            <span>18 min read</span>
            <span className="mx-2">•</span>
            <span className="bg-orange-100 text-orange-700 px-2 py-1 rounded">Ecommerce Automation</span>
          </div>
          
          <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-orange-600 to-purple-600 bg-clip-text text-transparent">
            Customer Support Automation in Shopify: The Complete Guide to Scaling Your Ecommerce Support
          </h1>
          
          <p className="text-xl text-gray-700 leading-relaxed font-semibold">
            Customer support automation isn&apos;t just a nice-to-have anymore—it&apos;s the difference between scaling profitably and drowning in support tickets.
          </p>

          <p className="text-lg text-gray-600 mt-4">
            After helping hundreds of Shopify stores implement automated support systems, I&apos;ve seen firsthand how the right automation can transform both customer satisfaction and bottom-line results.
          </p>
        </header>

        {/* Table of Contents */}
        <nav className="bg-gray-100 rounded-lg p-6 mb-12">
          <h2 className="text-xl font-semibold mb-4">Table of Contents</h2>
          <ol className="space-y-2">
            {tableOfContents.map((item, index) => (
              <li key={item.id}>
                <a 
                  href={`#${item.id}`}
                  className="flex items-center text-gray-700 hover:text-orange-600 transition-colors group"
                  onClick={() => setActiveSection(item.id)}
                >
                  <span className="text-sm text-gray-500 mr-3">{index + 1}.</span>
                  <span className="flex-1">{item.title}</span>
                  <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </a>
              </li>
            ))}
          </ol>
        </nav>

        {/* Key Metrics */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
          <div className="bg-orange-50 p-4 rounded-lg text-center">
            <div className="text-3xl font-bold text-orange-600">67%</div>
            <div className="text-sm text-gray-600">faster response times</div>
          </div>
          <div className="bg-purple-50 p-4 rounded-lg text-center">
            <div className="text-3xl font-bold text-purple-600">30%</div>
            <div className="text-sm text-gray-600">cost reduction</div>
          </div>
          <div className="bg-green-50 p-4 rounded-lg text-center">
            <div className="text-3xl font-bold text-green-600">80%</div>
            <div className="text-sm text-gray-600">auto-resolved tickets</div>
          </div>
          <div className="bg-blue-50 p-4 rounded-lg text-center">
            <div className="text-3xl font-bold text-blue-600">4.5+</div>
            <div className="text-sm text-gray-600">CSAT score</div>
          </div>
        </div>

        {/* Section 1: Why Automation Matters */}
        <section id="why-automation-matters" className="mb-12">
          <h2 className="text-3xl font-bold mb-6">Why Shopify Customer Support Automation Matters Now</h2>
          
          <p className="text-gray-700 mb-4">
            Your customers expect instant responses. Not &quot;within 24 hours&quot; or &quot;soon&quot;—they want answers immediately. Manual support can&apos;t deliver that consistently, especially as you scale past those first few orders per day.
          </p>

          <p className="text-gray-700 mb-6">
            The numbers tell the story: businesses using customer support automation see 67% faster response times and reduce support costs by 30% while maintaining higher satisfaction scores. For Shopify stores specifically, automated support handles 80% of common inquiries without human intervention.
          </p>

          <div className="bg-orange-50 border-l-4 border-orange-400 p-6 mb-6">
            <h4 className="font-semibold text-orange-900 mb-3">The Reality for Most Shopify Stores:</h4>
            <ul className="space-y-2">
              <li className="flex items-start">
                <DollarSign className="w-5 h-5 text-orange-600 mr-2 mt-0.5 flex-shrink-0" />
                <span><strong>$1.50 per minute</strong> average cost of phone support</span>
              </li>
              <li className="flex items-start">
                <Clock className="w-5 h-5 text-orange-600 mr-2 mt-0.5 flex-shrink-0" />
                <span><strong>24-48 hours</strong> typical email response time</span>
              </li>
              <li className="flex items-start">
                <Users className="w-5 h-5 text-orange-600 mr-2 mt-0.5 flex-shrink-0" />
                <span><strong>67% of customers</strong> leave due to poor service</span>
              </li>
              <li className="flex items-start">
                <TrendingUp className="w-5 h-5 text-orange-600 mr-2 mt-0.5 flex-shrink-0" />
                <span><strong>$75 billion</strong> annual loss from poor customer service</span>
              </li>
            </ul>
          </div>
        </section>

        {/* Section 2: Core Components */}
        <section id="core-components" className="mb-12">
          <h2 className="text-3xl font-bold mb-6">The Core Components of Shopify Customer Support Automation</h2>
          
          <h3 className="text-2xl font-semibold mb-4">Automated Chat Support</h3>
          <p className="text-gray-700 mb-4">
            Live chat automation through tools like Shopify Inbox, Tidio, or Gorgias forms the foundation of modern ecommerce customer service. These systems handle order status inquiries, return requests, and basic product questions instantly.
          </p>

          <div className="bg-white border border-gray-200 rounded-lg p-6 mb-6">
            <p className="font-semibold text-gray-900 mb-3">What works:</p>
            <p className="text-gray-700 mb-3">
              Set up automated responses for your top 10 most common questions. Track analytics to identify which questions customers ask most frequently, then build targeted flows for each scenario.
            </p>
            <p className="text-purple-600 font-semibold">
              Pro tip: Don&apos;t try to automate everything on day one. Start with order tracking and return policies—these account for roughly 60% of support volume for most Shopify stores.
            </p>
          </div>

          <h3 className="text-2xl font-semibold mb-4 mt-8">Intelligent Email Automation</h3>
          <p className="text-gray-700 mb-4">
            Email automation goes beyond simple autoresponders. Modern customer support automation tools integrate directly with your Shopify store to pull order data, customer history, and product information into contextual responses.
          </p>

          <p className="text-gray-700 mb-4">Configure automated workflows for:</p>
          <ul className="space-y-2 mb-6 ml-6">
            <li className="flex items-start">
              <MessageSquare className="w-5 h-5 text-purple-500 mr-2 mt-0.5 flex-shrink-0" />
              <span>Order confirmation and shipping updates</span>
            </li>
            <li className="flex items-start">
              <MessageSquare className="w-5 h-5 text-purple-500 mr-2 mt-0.5 flex-shrink-0" />
              <span>Return and exchange requests</span>
            </li>
            <li className="flex items-start">
              <MessageSquare className="w-5 h-5 text-purple-500 mr-2 mt-0.5 flex-shrink-0" />
              <span>Product availability notifications</span>
            </li>
            <li className="flex items-start">
              <MessageSquare className="w-5 h-5 text-purple-500 mr-2 mt-0.5 flex-shrink-0" />
              <span>Post-purchase follow-up sequences</span>
            </li>
          </ul>

          <h3 className="text-2xl font-semibold mb-4">Self-Service Knowledge Base</h3>
          <p className="text-gray-700 mb-4">
            Your customers want to solve problems themselves when possible. A well-structured knowledge base reduces support ticket volume by 20-40% while improving customer satisfaction.
          </p>

          <p className="text-gray-700 mb-4">Focus on these essential sections:</p>
          <ul className="space-y-2 mb-6 ml-6">
            <li>• Shipping and delivery policies</li>
            <li>• Return and exchange procedures</li>
            <li>• Size guides and product specifications</li>
            <li>• Account management instructions</li>
            <li>• Troubleshooting common issues</li>
          </ul>
        </section>

        {/* Section 3: Advanced Strategies */}
        <section id="advanced-strategies" className="mb-12">
          <h2 className="text-3xl font-bold mb-6">Advanced Shopify Customer Service Automation Strategies</h2>
          
          <h3 className="text-2xl font-semibold mb-4">Smart Ticket Routing</h3>
          <p className="text-gray-700 mb-4">
            Not every support request needs the same level of attention. Intelligent routing ensures high-value customers and urgent issues get priority treatment while routine questions flow to appropriate automation tracks.
          </p>

          <p className="text-gray-700 mb-4">Set up routing rules based on:</p>
          <ul className="space-y-2 mb-6 ml-6">
            <li>• Customer lifetime value</li>
            <li>• Order value and recency</li>
            <li>• Issue complexity and sentiment</li>
            <li>• Previous interaction history</li>
          </ul>

          <h3 className="text-2xl font-semibold mb-4 mt-8">Automated Order Management</h3>
          <p className="text-gray-700 mb-4">
            Integration between your customer support automation and Shopify&apos;s order management system enables customers to modify orders, request returns, and track shipments without agent involvement.
          </p>

          <div className="bg-purple-50 border border-purple-200 rounded-lg p-6 mb-6">
            <p className="text-purple-800">
              <strong>Implementation strategy:</strong> Start with order status inquiries and tracking requests. These are high-volume, low-complexity interactions perfect for automation. Gradually expand to include order modifications and return initiation.
            </p>
          </div>

          <h3 className="text-2xl font-semibold mb-4 mt-8">Proactive Customer Outreach</h3>
          <p className="text-gray-700 mb-4">
            The best customer support prevents problems before they become complaints. Automated monitoring can identify potential issues and trigger proactive communication.
          </p>

          <p className="text-gray-700 mb-4">Monitor for:</p>
          <ul className="space-y-2 mb-6 ml-6">
            <li>• Shipping delays and delivery exceptions</li>
            <li>• Inventory shortages affecting pending orders</li>
            <li>• Payment processing failures</li>
            <li>• Unusual account activity</li>
          </ul>
        </section>

        {/* Section 4: Choosing Tools */}
        <section id="choosing-tools" className="mb-12">
          <h2 className="text-3xl font-bold mb-6">Choosing the Right Customer Support Automation Tools for Shopify</h2>
          
          <div className="overflow-x-auto">
            <table className="w-full bg-white rounded-lg overflow-hidden mb-6">
              <thead className="bg-gray-100">
                <tr>
                  <th className="px-4 py-3 text-left">Platform</th>
                  <th className="px-4 py-3 text-left">Type</th>
                  <th className="px-4 py-3 text-left">Best For</th>
                  <th className="px-4 py-3 text-left">Starting Price</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {automationTools.map((tool, index) => (
                  <tr key={index}>
                    <td className="px-4 py-3 font-semibold">{tool.name}</td>
                    <td className="px-4 py-3">{tool.type}</td>
                    <td className="px-4 py-3">{tool.bestFor}</td>
                    <td className="px-4 py-3 text-green-600 font-semibold">{tool.price}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="bg-gray-100 p-6 rounded-lg">
            <p className="text-gray-700">
              <strong>Selection criteria:</strong> Choose based on your support volume, team size, and complexity needs. Most Shopify stores under $1M revenue find specialized ecommerce platforms like Gorgias provide the best balance of features and simplicity.
            </p>
          </div>
        </section>

        {/* Section 5: Implementation */}
        <section id="implementation" className="mb-12">
          <h2 className="text-3xl font-bold mb-6">Implementation Best Practices</h2>
          
          <h3 className="text-2xl font-semibold mb-4">Start Small, Scale Smart</h3>
          <p className="text-gray-700 mb-4">
            Begin with automation for your three most common support requests. Perfect these workflows before expanding to more complex scenarios.
          </p>

          <div className="bg-white border border-gray-200 rounded-lg p-6 mb-6">
            <h4 className="font-semibold text-gray-900 mb-3">Implementation Timeline:</h4>
            <ul className="space-y-2">
              <li><strong>Week 1-2:</strong> Implement basic chatbot responses for order status and return policy questions</li>
              <li><strong>Week 3-4:</strong> Add automated email responses for common inquiries</li>
              <li><strong>Month 2:</strong> Introduce smart routing and escalation rules</li>
              <li><strong>Month 3+:</strong> Expand to proactive automation and advanced AI features</li>
            </ul>
          </div>

          <h3 className="text-2xl font-semibold mb-4 mt-8">Maintain the Human Touch</h3>
          <p className="text-gray-700 mb-4">
            Automation should enhance human support, not replace it entirely. Ensure customers can easily escalate to human agents when needed.
          </p>

          <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
            <p className="text-yellow-800">
              <strong>Key principles:</strong> Always provide a clear path to human support. Use automation to handle routine tasks, humans for empathy. Monitor automation performance and customer satisfaction continuously. Train your team to work alongside automated systems effectively.
            </p>
          </div>

          <h3 className="text-2xl font-semibold mb-4 mt-8">Monitor and Optimize Continuously</h3>
          <p className="text-gray-700 mb-4">
            Customer support automation requires ongoing refinement. Track key metrics to identify improvement opportunities:
          </p>

          <ul className="space-y-2 mb-6 ml-6">
            <li>• First response time</li>
            <li>• Resolution time</li>
            <li>• Customer satisfaction scores</li>
            <li>• Automation success rate</li>
            <li>• Escalation patterns</li>
          </ul>

          <p className="text-gray-700">
            <strong>Monthly review process:</strong> Analyze which automated responses perform well and which need adjustment. Update knowledge base content based on new product launches and policy changes. Refine routing rules based on team capacity and expertise.
          </p>
        </section>

        {/* Section 6: Measuring Success */}
        <section id="measuring-success" className="mb-12">
          <h2 className="text-3xl font-bold mb-6">Measuring Success: KPIs That Matter</h2>
          
          <div className="grid md:grid-cols-2 gap-4 mb-6">
            <div className="bg-white p-6 rounded-lg border border-gray-200">
              <h4 className="font-semibold text-gray-900 mb-2">Response Time Metrics</h4>
              <p className="text-gray-600">Target under 5 minutes for automated responses and under 2 hours for human follow-up during business hours. Track both average and 95th percentile response times.</p>
            </div>
            <div className="bg-white p-6 rounded-lg border border-gray-200">
              <h4 className="font-semibold text-gray-900 mb-2">Resolution Rates</h4>
              <p className="text-gray-600">Aim for 70-80% first-contact resolution on automated interactions. Higher rates often indicate you&apos;re not escalating complex issues appropriately.</p>
            </div>
            <div className="bg-white p-6 rounded-lg border border-gray-200">
              <h4 className="font-semibold text-gray-900 mb-2">Customer Satisfaction</h4>
              <p className="text-gray-600">Maintain CSAT scores above 85% for automated interactions. If scores drop below 80%, review automation logic and consider expanding human agent involvement.</p>
            </div>
            <div className="bg-white p-6 rounded-lg border border-gray-200">
              <h4 className="font-semibold text-gray-900 mb-2">Cost Per Resolution</h4>
              <p className="text-gray-600">Factor in both technology costs and human agent time. Effective automation typically reduces cost per resolution by 25-40% while maintaining or improving satisfaction scores.</p>
            </div>
          </div>
        </section>

        {/* Section 7: Common Pitfalls */}
        <section id="common-pitfalls" className="mb-12">
          <h2 className="text-3xl font-bold mb-6">Common Pitfalls to Avoid</h2>
          
          <div className="space-y-4">
            <div className="bg-red-50 border border-red-200 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-red-900 mb-2 flex items-center">
                <AlertTriangle className="w-5 h-5 mr-2" />
                Over-automation
              </h3>
              <p className="text-red-800">
                Don&apos;t automate interactions that require empathy or complex problem-solving. Frustrated customers escalate faster and leave worse reviews.
              </p>
            </div>

            <div className="bg-red-50 border border-red-200 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-red-900 mb-2 flex items-center">
                <AlertTriangle className="w-5 h-5 mr-2" />
                Poor integration
              </h3>
              <p className="text-red-800">
                Ensure your automation tools access real Shopify data. Generic responses based on incomplete information create more problems than they solve.
              </p>
            </div>

            <div className="bg-red-50 border border-red-200 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-red-900 mb-2 flex items-center">
                <AlertTriangle className="w-5 h-5 mr-2" />
                Neglecting updates
              </h3>
              <p className="text-red-800">
                Product changes, policy updates, and seasonal variations require corresponding automation adjustments. Set monthly review schedules.
              </p>
            </div>

            <div className="bg-red-50 border border-red-200 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-red-900 mb-2 flex items-center">
                <AlertTriangle className="w-5 h-5 mr-2" />
                Ignoring edge cases
              </h3>
              <p className="text-red-800">
                Plan for unusual requests and system failures. Always provide clear escalation paths when automation can&apos;t help.
              </p>
            </div>
          </div>
        </section>

        {/* Section 8: ROI Calculation */}
        <section id="roi-calculation" className="mb-12">
          <h2 className="text-3xl font-bold mb-6">The ROI of Shopify Customer Support Automation</h2>
          
          <p className="text-gray-700 mb-4">
            Properly implemented customer support automation typically pays for itself within 3-6 months through reduced labor costs and improved efficiency. Beyond direct cost savings, automation enables:
          </p>

          <ul className="space-y-2 mb-6 ml-6">
            <li className="flex items-start">
              <Zap className="w-5 h-5 text-orange-500 mr-2 mt-0.5 flex-shrink-0" />
              <span>24/7 customer support availability</span>
            </li>
            <li className="flex items-start">
              <BarChart3 className="w-5 h-5 text-orange-500 mr-2 mt-0.5 flex-shrink-0" />
              <span>Consistent response quality</span>
            </li>
            <li className="flex items-start">
              <TrendingUp className="w-5 h-5 text-orange-500 mr-2 mt-0.5 flex-shrink-0" />
              <span>Scalable support operations</span>
            </li>
            <li className="flex items-start">
              <Users className="w-5 h-5 text-orange-500 mr-2 mt-0.5 flex-shrink-0" />
              <span>Better agent productivity through reduced routine tasks</span>
            </li>
            <li className="flex items-start">
              <Shield className="w-5 h-5 text-orange-500 mr-2 mt-0.5 flex-shrink-0" />
              <span>Improved customer satisfaction through faster response times</span>
            </li>
          </ul>

          <div className="bg-green-50 border border-green-200 rounded-lg p-6">
            <h4 className="font-semibold text-green-900 mb-3">For a store handling 1,000 support queries/month:</h4>
            <ul className="space-y-2 text-green-800">
              <li><strong>Traditional Support Cost:</strong> $15,000/month</li>
              <li><strong>With Automation:</strong> $2,500/month (tools) + $7,500/month (reduced staff)</li>
              <li><strong>Monthly Savings:</strong> $5,000</li>
              <li><strong>Annual ROI:</strong> 400%+</li>
            </ul>
          </div>

          <p className="text-gray-700 mt-6">
            <strong>Budget planning:</strong> Expect to invest $100-500 monthly for automation tools, plus 20-40 hours for initial setup and ongoing optimization. The investment typically reduces support costs by $1,000-5,000 monthly for stores processing 100+ orders weekly.
          </p>
        </section>

        {/* Conclusion */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6">Getting Started Today</h2>
          
          <p className="text-gray-700 mb-4">
            Customer support automation works best when implemented systematically. Start by auditing your current support volume and identifying the most common request types. Choose automation tools that integrate well with Shopify and offer room to grow.
          </p>
          
          <p className="text-gray-700 mb-4">
            Focus on automating high-volume, low-complexity interactions first. Perfect these workflows before expanding to more sophisticated automation scenarios. Remember that the goal isn&apos;t to eliminate human support entirely—it&apos;s to make your team more effective by handling routine tasks automatically.
          </p>

          <p className="text-gray-700 mb-6">
            The ecommerce landscape continues evolving rapidly, but excellent customer support remains a competitive advantage. Automation ensures you can deliver that excellence consistently, regardless of order volume or time of day. Start small, measure results, and scale what works. Your customers—and your bottom line—will thank you.
          </p>

          <div className="bg-orange-50 border border-orange-200 rounded-lg p-6">
            <p className="text-orange-800 text-xl font-semibold">
              Ready to implement customer support automation for your Shopify store? Begin with a comprehensive audit of your current support requests to identify the best opportunities for automation. The investment in setup time pays dividends in reduced workload and improved customer satisfaction.
            </p>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-gradient-to-r from-orange-600 to-purple-600 text-white rounded-2xl p-8 text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Ready to Automate Your Shopify Support?</h2>
          <p className="text-xl mb-6 opacity-90">
            See how customer support automation can transform your Shopify store&apos;s efficiency and customer satisfaction
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              onClick={() => toggleModal(true)}
              className="bg-white text-orange-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              get started freeConsultation
            </button>
            <Link 
              href="/automated-customer-support"
              className="bg-orange-500 text-white px-8 py-3 rounded-lg font-semibold hover:bg-orange-400 transition-colors"
            >
              Learn More About Our Solutions
            </Link>
          </div>
        </section>

        {/* About Section */}
        <footer className="mt-12 pt-8 border-t">
          <div className="bg-gray-100 p-6 rounded-lg">
            <h3 className="text-xl font-semibold mb-3">About SmartBiz Genie</h3>
            <p className="text-gray-700">
              SmartBiz Genie specializes in customer support automation for ecommerce businesses. We&apos;ve helped hundreds of Shopify stores reduce support costs by up to 70% while improving customer satisfaction scores. Our solutions integrate seamlessly with your existing Shopify setup to deliver immediate results.
            </p>
            <div className="mt-4">
              <Link href="/services" className="text-orange-600 hover:underline">Explore our automation services →</Link>
            </div>
          </div>
        </footer>
      </div>
    </article>
  );
};

export default ShopifyCustomerSupportArticle;