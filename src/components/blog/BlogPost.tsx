'use client';

import React, { useState } from 'react';
import { ChevronRight, Clock, CheckCircle, Download, Calculator, Users, TrendingUp, AlertCircle } from 'lucide-react';
import ROICalculator from './ROICalculator';
import { useTheme } from '@/contexts/ThemeContext';

const BlogPost = () => {
  const { toggleModal } = useTheme();
  const [activeSection, setActiveSection] = useState('');
  const [showCalculator, setShowCalculator] = useState(false);

  const tableOfContents = [
    { id: 'why-now', title: 'Why Small Businesses Need AI Workflows Now' },
    { id: 'signs-ready', title: '5 Signs Your Business is Ready' },
    { id: 'understanding-workflows', title: 'Understanding AI Workflows' },
    { id: 'implementation-guide', title: 'Step-by-Step Implementation Guide' },
    { id: 'cost-breakdown', title: 'Real Cost Breakdown' },
    { id: 'quick-wins', title: '10 Quick Wins' },
    { id: 'pitfalls', title: 'Common Pitfalls' },
    { id: 'roi-timeline', title: 'ROI Timeline' },
    { id: 'success-stories', title: 'Success Stories' },
    { id: 'next-steps', title: 'Your Next Steps' }
  ];

  const quickWins = [
    { title: 'Email Auto-Responder Plus', time: '2 hours', icon: '📧', desc: 'Reads and categorizes incoming emails, sends intelligent responses' },
    { title: 'Smart Appointment Scheduler', time: '1 hour', icon: '📅', desc: 'Syncs with calendar, handles rescheduling requests' },
    { title: 'Invoice Processing Bot', time: '3 hours', icon: '📄', desc: 'Extracts data from invoices, enters into accounting system' },
    { title: 'Customer Onboarding Workflow', time: '4 hours', icon: '👋', desc: 'Sends welcome series, collects information, sets up accounts' },
    { title: 'Social Media Monitor', time: '2 hours', icon: '📱', desc: 'Tracks mentions and comments, responds to common questions' },
    { title: 'Lead Qualification System', time: '3 hours', icon: '🎯', desc: 'Scores incoming leads, routes to appropriate salesperson' },
    { title: 'Order Status Updater', time: '2 hours', icon: '📦', desc: 'Tracks shipments, updates customers automatically' },
    { title: 'Review Request Automation', time: '1 hour', icon: '⭐', desc: 'Identifies happy customers, sends review requests' },
    { title: 'Inventory Alert System', time: '3 hours', icon: '📊', desc: 'Monitors stock levels, creates purchase orders' },
    { title: 'Employee FAQ Bot', time: '4 hours', icon: '💬', desc: 'Answers HR questions, provides policy information' }
  ];

  const signs = [
    {
      title: "The Copy-Paste Syndrome",
      description: "Your team spends hours copying data between systems, sending the same emails, or manually updating spreadsheets."
    },
    {
      title: "The 24-Hour Response Curse",
      description: "Customers complain about response times, but hiring more staff isn't financially viable."
    },
    {
      title: "The Growth Ceiling",
      description: "You're turning away business because you can't scale operations without proportionally scaling headcount."
    },
    {
      title: "The Human Error Tax",
      description: "Mistakes in order processing, data entry, or customer communication are costing you money and reputation."
    },
    {
      title: "The Competitive Squeeze",
      description: "Larger competitors are delivering services faster and cheaper, making it hard to compete on service quality."
    }
  ];

  const pitfalls = [
    {
      title: "Over-Automation Syndrome",
      problem: "Trying to automate everything at once",
      solution: "Start with 1-2 workflows, perfect them, then expand"
    },
    {
      title: "The Human Touch Deficit",
      problem: "Losing personal connection with customers",
      solution: "Use AI for efficiency, humans for empathy"
    },
    {
      title: "Integration Nightmares",
      problem: "Tools don't talk to each other",
      solution: "Choose platforms with robust APIs and pre-built integrations"
    },
    {
      title: "Resistance to Change",
      problem: "Team members fear job replacement",
      solution: "Position AI as an assistant, not a replacement"
    },
    {
      title: "Set-and-Forget Mentality",
      problem: "Not optimizing workflows over time",
      solution: "Schedule monthly reviews and optimizations"
    }
  ];

  const implementationPhases = [
    {
      phase: "Phase 1: Foundation",
      weeks: "Weeks 1-2",
      steps: [
        {
          week: "Week 1: Process Mapping",
          tasks: [
            "Document your current workflows",
            "Identify repetitive tasks",
            "Calculate time spent on each task",
            "Note pain points and bottlenecks"
          ]
        },
        {
          week: "Week 2: Tool Selection",
          tasks: [
            "Assess your needs",
            "Evaluate platforms",
            "Start with a pilot"
          ]
        }
      ]
    },
    {
      phase: "Phase 2: Pilot Implementation",
      weeks: "Weeks 3-4",
      steps: [
        {
          week: "Week 3: Setup and Configuration",
          tasks: [
            "Account creation and team onboarding",
            "Connect your existing tools",
            "Build your first workflow",
            "Test and refine"
          ]
        },
        {
          week: "Week 4: Testing and Optimization",
          tasks: [
            "Run parallel processes",
            "Compare outputs",
            "Gather team feedback",
            "Make adjustments"
          ]
        }
      ]
    },
    {
      phase: "Phase 3: Full Deployment",
      weeks: "Weeks 5-8",
      steps: [
        {
          week: "Weeks 5-6: Gradual Rollout",
          tasks: [
            "Expand to full team",
            "Build additional workflows",
            "Maintain support structure"
          ]
        },
        {
          week: "Weeks 7-8: Optimization",
          tasks: [
            "Analyze workflow data",
            "Identify bottlenecks",
            "Implement improvements",
            "Add advanced features"
          ]
        }
      ]
    },
    {
      phase: "Phase 4: Scale and Innovate",
      weeks: "Weeks 9-12",
      steps: [
        {
          week: "Weeks 9-10: Advanced Integration",
          tasks: [
            "Connect all systems",
            "Build complex workflows",
            "Implement AI decision-making"
          ]
        },
        {
          week: "Weeks 11-12: Innovation",
          tasks: [
            "Explore new possibilities",
            "Customer-facing automation",
            "Predictive analytics",
            "New service offerings"
          ]
        }
      ]
    }
  ];

  const roiTimeline = [
    { month: "Month 1", status: "Foundation", investment: "Setup costs + first month subscription", return: "20% reduction in manual tasks", focus: "Learning and initial implementation" },
    { month: "Month 2", status: "Acceleration", investment: "Subscription + training time", return: "40% reduction in response times", focus: "Expanding automation coverage" },
    { month: "Month 3", status: "Optimization", investment: "Subscription only", return: "60% increase in capacity", focus: "Fine-tuning and efficiency" },
    { month: "Months 4-6", status: "Scale", investment: "Subscription + advanced features", return: "2-3x productivity increase", focus: "Complex workflow development" },
    { month: "Months 7-12", status: "Innovation", investment: "Subscription + new capabilities", return: "New revenue streams enabled", focus: "Competitive advantage building" }
  ];

  const successStories = [
    {
      company: "BrightSmile Dental",
      challenge: "3-person office handling 200+ appointment requests weekly",
      solution: "AI appointment scheduling and reminder system",
      results: [
        "75% reduction in no-shows",
        "5 hours/week saved on scheduling",
        "$15,000 annual revenue increase"
      ]
    },
    {
      company: "TechRepair Plus",
      challenge: "Overwhelmed by customer service inquiries",
      solution: "AI chatbot for common troubleshooting",
      results: [
        "80% of issues resolved without human intervention",
        "Customer satisfaction increased from 3.2 to 4.7 stars",
        "Technician productivity up 40%"
      ]
    },
    {
      company: "Boutique Marketing Co.",
      challenge: "Manually creating client reports took 20 hours/week",
      solution: "Automated reporting workflow",
      results: [
        "Reports generated in 30 minutes vs. 4 hours",
        "Ability to take on 5 additional clients",
        "$8,000/month revenue increase"
      ]
    }
  ];

  return (
    <article className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <header className="mb-12">
          <div className="flex items-center gap-2 text-sm text-gray-600 mb-4">
            <Clock className="w-4 h-4" />
            <span>Last Updated: July 2025</span>
            <span className="mx-2">•</span>
            <span>15 min read</span>
          </div>
          
          <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
            The Complete Guide to AI Workflow Automation for Small Businesses in 2025
          </h1>
          
          <p className="text-xl text-gray-700 leading-relaxed">
            <strong>Running a small business in 2025 without AI workflow automation is like trying to compete in a Formula 1 race with a bicycle.</strong> While enterprise companies have been leveraging AI for years, small businesses are finally getting access to powerful, affordable automation tools that can transform their operations overnight.
          </p>

          <p className="text-lg text-gray-600 mt-4">
            If you&apos;re a small business owner drowning in repetitive tasks, struggling to scale, or watching competitors deliver faster service, this guide is your roadmap to AI transformation—without the enterprise price tag or complexity.
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
                  className="flex items-center text-gray-700 hover:text-blue-600 transition-colors group"
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

        {/* Key Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
          <div className="bg-blue-50 p-4 rounded-lg text-center">
            <div className="text-3xl font-bold text-blue-600">67%</div>
            <div className="text-sm text-gray-600">of tasks are automatable</div>
          </div>
          <div className="bg-green-50 p-4 rounded-lg text-center">
            <div className="text-3xl font-bold text-green-600">4.2h</div>
            <div className="text-sm text-gray-600">saved daily per employee</div>
          </div>
          <div className="bg-purple-50 p-4 rounded-lg text-center">
            <div className="text-3xl font-bold text-purple-600">$45k</div>
            <div className="text-sm text-gray-600">annual savings per person</div>
          </div>
          <div className="bg-orange-50 p-4 rounded-lg text-center">
            <div className="text-3xl font-bold text-orange-600">30</div>
            <div className="text-sm text-gray-600">days to ROI</div>
          </div>
        </div>

        {/* Section 1: Why Now */}
        <section id="why-now" className="mb-12">
          <h2 className="text-3xl font-bold mb-6">Why Small Businesses Need AI Workflows Now</h2>
          
          <h3 className="text-2xl font-semibold mb-4">The Small Business Automation Gap</h3>
          <p className="text-gray-700 mb-6 leading-relaxed">
            While 92% of enterprises have increased their AI investments in 2025, only 28% of small businesses have implemented any form of AI automation. This gap represents both a challenge and an opportunity.
          </p>
          
          <div className="bg-yellow-50 border-l-4 border-yellow-400 p-6 mb-6">
            <h4 className="font-semibold mb-3">The reality for most small businesses:</h4>
            <ul className="space-y-2">
              <li className="flex items-start">
                <span className="text-yellow-600 mr-2">•</span>
                <span><strong>67% of daily tasks</strong> are repetitive and automatable</span>
              </li>
              <li className="flex items-start">
                <span className="text-yellow-600 mr-2">•</span>
                <span><strong>4.2 hours per day</strong> spent on administrative work</span>
              </li>
              <li className="flex items-start">
                <span className="text-yellow-600 mr-2">•</span>
                <span><strong>$45,000 annually</strong> in lost productivity per employee</span>
              </li>
              <li className="flex items-start">
                <span className="text-yellow-600 mr-2">•</span>
                <span><strong>73% of customers</strong> expect instant responses</span>
              </li>
            </ul>
          </div>

          <h3 className="text-2xl font-semibold mb-4 mt-8">The AI Advantage for SMBs</h3>
          <p className="text-gray-700 mb-4">
            Unlike enterprise solutions that require massive investments and IT teams, modern AI workflow automation for small businesses offers:
          </p>
          <ul className="space-y-2 mb-6">
            <li className="flex items-start">
              <CheckCircle className="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
              <span><strong>Plug-and-play solutions</strong> requiring no coding</span>
            </li>
            <li className="flex items-start">
              <CheckCircle className="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
              <span><strong>Monthly subscriptions</strong> starting at $99</span>
            </li>
            <li className="flex items-start">
              <CheckCircle className="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
              <span><strong>Same-day implementation</strong> for basic workflows</span>
            </li>
            <li className="flex items-start">
              <CheckCircle className="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
              <span><strong>ROI within 30 days</strong> for most use cases</span>
            </li>
          </ul>

          <blockquote className="bg-blue-50 border-l-4 border-blue-400 p-4 italic">
            &quot;We went from handling 50 customer inquiries a day to 500, with the same team of three people. AI didn&apos;t replace anyone—it made everyone superhuman.&quot;
            <cite className="block text-sm mt-2 not-italic">- Sarah Chen, Owner of CloudBrew Coffee</cite>
          </blockquote>
        </section>

        {/* Section 2: 5 Signs */}
        <section id="signs-ready" className="mb-12">
          <h2 className="text-3xl font-bold mb-6">5 Signs Your Business is Ready for AI Workflow Automation</h2>
          
          <div className="space-y-4">
            {signs.map((sign, index) => (
              <div key={index} className="bg-white p-6 rounded-lg border border-gray-200">
                <h3 className="text-xl font-semibold mb-2 flex items-center">
                  <span className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center mr-3 text-sm">{index + 1}</span>
                  {sign.title}
                </h3>
                <p className="text-gray-700 ml-11">{sign.description}</p>
              </div>
            ))}
          </div>

          <div className="bg-orange-50 border border-orange-200 rounded-lg p-4 mt-6">
            <p className="text-orange-800 font-semibold">
              If you checked even two of these boxes, AI workflow automation isn&apos;t just nice to have—it&apos;s essential for survival.
            </p>
          </div>
        </section>

        {/* Section 3: Understanding AI Workflows */}
        <section id="understanding-workflows" className="mb-12">
          <h2 className="text-3xl font-bold mb-6">Understanding AI Workflows: A Small Business Perspective</h2>
          
          <h3 className="text-2xl font-semibold mb-4">What Are AI Workflows?</h3>
          <p className="text-gray-700 mb-4">Think of AI workflows as intelligent assistants that can:</p>
          <ul className="space-y-2 mb-6">
            <li className="flex items-start">
              <span className="text-blue-600 mr-2">•</span>
              <span><strong>See</strong> incoming data (emails, forms, messages)</span>
            </li>
            <li className="flex items-start">
              <span className="text-blue-600 mr-2">•</span>
              <span><strong>Understand</strong> what needs to be done</span>
            </li>
            <li className="flex items-start">
              <span className="text-blue-600 mr-2">•</span>
              <span><strong>Decide</strong> the best course of action</span>
            </li>
            <li className="flex items-start">
              <span className="text-blue-600 mr-2">•</span>
              <span><strong>Execute</strong> tasks automatically</span>
            </li>
            <li className="flex items-start">
              <span className="text-blue-600 mr-2">•</span>
              <span><strong>Learn</strong> from outcomes to improve</span>
            </li>
          </ul>

          <h3 className="text-2xl font-semibold mb-4">AI Workflows vs. Traditional Automation</h3>
          <div className="overflow-x-auto">
            <table className="w-full bg-white rounded-lg overflow-hidden">
              <thead className="bg-gray-100">
                <tr>
                  <th className="px-4 py-3 text-left">Traditional Automation</th>
                  <th className="px-4 py-3 text-left">AI Workflow Automation</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                <tr>
                  <td className="px-4 py-3">Follows rigid if-then rules</td>
                  <td className="px-4 py-3">Adapts to context and learns</td>
                </tr>
                <tr>
                  <td className="px-4 py-3">Breaks with unexpected inputs</td>
                  <td className="px-4 py-3">Handles variations intelligently</td>
                </tr>
                <tr>
                  <td className="px-4 py-3">Requires exact matches</td>
                  <td className="px-4 py-3">Understands intent and meaning</td>
                </tr>
                <tr>
                  <td className="px-4 py-3">Single-task focused</td>
                  <td className="px-4 py-3">Manages complex, multi-step processes</td>
                </tr>
                <tr>
                  <td className="px-4 py-3">Needs constant updates</td>
                  <td className="px-4 py-3">Self-improves over time</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h3 className="text-2xl font-semibold mb-4 mt-6">Real-World Example</h3>
          <div className="bg-gray-100 p-6 rounded-lg">
            <p className="mb-3"><strong>Traditional automation:</strong> &quot;If email contains &apos;order&apos;, forward to sales@&quot;</p>
            <p><strong>AI workflow:</strong> &quot;Understand the email intent, extract order details, check inventory, calculate shipping, send personalized quote, create follow-up reminder, and notify the sales team with context.&quot;</p>
          </div>
        </section>

        {/* Section 4: Implementation Guide */}
        <section id="implementation-guide" className="mb-12">
          <h2 className="text-3xl font-bold mb-6">Step-by-Step Implementation Guide</h2>
          
          {implementationPhases.map((phase, phaseIndex) => (
            <div key={phaseIndex} className="mb-8">
              <h3 className="text-2xl font-semibold mb-4 text-blue-600">{phase.phase} ({phase.weeks})</h3>
              
              {phase.steps.map((step, stepIndex) => (
                <div key={stepIndex} className="bg-white p-6 rounded-lg border border-gray-200 mb-4">
                  <h4 className="text-xl font-semibold mb-3">{step.week}</h4>
                  <ol className="space-y-2">
                    {step.tasks.map((task, taskIndex) => (
                      <li key={taskIndex} className="flex items-start">
                        <span className="text-blue-600 mr-2">{taskIndex + 1}.</span>
                        <span>{task}</span>
                      </li>
                    ))}
                  </ol>
                </div>
              ))}
            </div>
          ))}
        </section>

        {/* Section 5: Cost Breakdown */}
        <section id="cost-breakdown" className="mb-12">
          <h2 className="text-3xl font-bold mb-6">Real Cost Breakdown</h2>
          
          <h3 className="text-2xl font-semibold mb-4">Typical Investment for Small Businesses</h3>
          
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <div className="bg-white p-6 rounded-lg border border-gray-200">
              <h4 className="text-lg font-semibold mb-3">Software Costs (Monthly)</h4>
              <ul className="space-y-2">
                <li className="flex justify-between">
                  <span>Starter (1-10 employees):</span>
                  <span className="font-semibold">$99-299/month</span>
                </li>
                <li className="flex justify-between">
                  <span>Growth (11-50 employees):</span>
                  <span className="font-semibold">$299-799/month</span>
                </li>
                <li className="flex justify-between">
                  <span>Scale (50+ employees):</span>
                  <span className="font-semibold">$799-1,999/month</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-white p-6 rounded-lg border border-gray-200">
              <h4 className="text-lg font-semibold mb-3">Implementation Costs (One-time)</h4>
              <ul className="space-y-2">
                <li className="flex justify-between">
                  <span>DIY Approach:</span>
                  <span className="font-semibold">$0 (using free resources)</span>
                </li>
                <li className="flex justify-between">
                  <span>Guided Setup:</span>
                  <span className="font-semibold">$500-2,500</span>
                </li>
                <li className="flex justify-between">
                  <span>Full Service:</span>
                  <span className="font-semibold">$2,500-10,000</span>
                </li>
              </ul>
            </div>
          </div>

          <button
            onClick={() => setShowCalculator(!showCalculator)}
            className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors flex items-center gap-2"
          >
            <Calculator className="w-5 h-5" />
            {showCalculator ? 'Hide Calculator' : 'Show ROI Calculator'}
          </button>
          
          {showCalculator && <ROICalculator />}
        </section>

        {/* Section 6: Quick Wins */}
        <section id="quick-wins" className="mb-12">
          <h2 className="text-3xl font-bold mb-6">10 Quick Wins: AI Workflows You Can Implement Today</h2>
          <div className="grid md:grid-cols-2 gap-4">
            {quickWins.map((win, index) => (
              <div key={index} className="bg-white p-4 border border-gray-200 rounded-lg hover:shadow-md transition-shadow">
                <div className="flex items-start">
                  <span className="text-2xl mr-3">{win.icon}</span>
                  <div className="flex-1">
                    <h3 className="font-semibold">{index + 1}. {win.title}</h3>
                    <p className="text-sm text-gray-600 mt-1">{win.desc}</p>
                    <p className="text-sm text-blue-600 font-semibold mt-2">Setup time: {win.time}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Section 7: Common Pitfalls */}
        <section id="pitfalls" className="mb-12">
          <h2 className="text-3xl font-bold mb-6">Common Pitfalls and How to Avoid Them</h2>
          
          <div className="space-y-4">
            {pitfalls.map((pitfall, index) => (
              <div key={index} className="bg-white p-6 rounded-lg border border-gray-200">
                <h3 className="text-xl font-semibold mb-3 text-red-600">
                  Pitfall {index + 1}: {pitfall.title}
                </h3>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <p className="text-sm font-semibold text-gray-600 mb-1">Problem:</p>
                    <p className="text-gray-700">{pitfall.problem}</p>
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-green-600 mb-1">Solution:</p>
                    <p className="text-gray-700">{pitfall.solution}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Section 8: ROI Timeline */}
        <section id="roi-timeline" className="mb-12">
          <h2 className="text-3xl font-bold mb-6">ROI Timeline: What to Expect Month by Month</h2>
          
          <div className="space-y-4">
            {roiTimeline.map((item, index) => (
              <div key={index} className="bg-white p-6 rounded-lg border border-gray-200">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-xl font-semibold">{item.month}: {item.status}</h3>
                  <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm">{item.focus}</span>
                </div>
                <div className="grid md:grid-cols-2 gap-4 text-sm">
                  <div>
                    <p className="font-semibold text-gray-600">Investment:</p>
                    <p>{item.investment}</p>
                  </div>
                  <div>
                    <p className="font-semibold text-green-600">Return:</p>
                    <p>{item.return}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="bg-green-50 border border-green-200 rounded-lg p-4 mt-6">
            <p className="text-green-800 font-semibold">Typical Payback Period: 2.5 months</p>
          </div>
        </section>

        {/* Section 9: Success Stories */}
        <section id="success-stories" className="mb-12">
          <h2 className="text-3xl font-bold mb-6">Success Stories from Small Businesses</h2>
          
          <div className="space-y-6">
            {successStories.map((story, index) => (
              <div key={index} className="bg-white p-6 rounded-lg border border-gray-200">
                <h3 className="text-xl font-semibold mb-2 text-blue-600">
                  Case Study {index + 1}: {story.company}
                </h3>
                <p className="text-gray-700 mb-3">
                  <strong>Challenge:</strong> {story.challenge}
                </p>
                <p className="text-gray-700 mb-3">
                  <strong>Solution:</strong> {story.solution}
                </p>
                <div>
                  <p className="font-semibold text-gray-700 mb-2">Results:</p>
                  <ul className="space-y-1">
                    {story.results.map((result, i) => (
                      <li key={i} className="flex items-start">
                        <CheckCircle className="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                        <span>{result}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Section 10: Next Steps */}
        <section id="next-steps" className="mb-12">
          <h2 className="text-3xl font-bold mb-6">Your Next Steps</h2>
          
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-lg border border-gray-200">
              <h3 className="text-xl font-semibold mb-3 flex items-center">
                <Download className="w-6 h-6 mr-2 text-blue-600" />
                1. Download Our Free Resources
              </h3>
              <ul className="space-y-2 text-sm">
                <li>• Process Mapping Template</li>
                <li>• ROI Calculator Spreadsheet</li>
                <li>• Vendor Comparison Guide</li>
                <li>• Implementation Checklist</li>
              </ul>
            </div>
            
            <div className="bg-white p-6 rounded-lg border border-gray-200">
              <h3 className="text-xl font-semibold mb-3 flex items-center">
                <TrendingUp className="w-6 h-6 mr-2 text-green-600" />
                2. Start Your 30-Day Challenge
              </h3>
              <p className="text-sm">Join 500+ small businesses in our AI transformation challenge:</p>
              <ul className="space-y-1 text-sm mt-2">
                <li>• Week 1: Map one process</li>
                <li>• Week 2: Implement one automation</li>
                <li>• Week 3: Optimize and expand</li>
                <li>• Week 4: Share results and win prizes</li>
              </ul>
            </div>
            
            <div className="bg-white p-6 rounded-lg border border-gray-200">
              <h3 className="text-xl font-semibold mb-3 flex items-center">
                <Users className="w-6 h-6 mr-2 text-purple-600" />
                3. Get Expert Guidance
              </h3>
              <p className="text-sm mb-3">Book a free 30-minute consultation with our AI workflow experts:</p>
              <ul className="space-y-1 text-sm">
                <li>• Personalized automation roadmap</li>
                <li>• Tool recommendations for your industry</li>
                <li>• Cost-benefit analysis</li>
                <li>• Implementation timeline</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Conclusion */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6">Conclusion: Your Competitive Edge Awaits</h2>
          
          <p className="text-gray-700 mb-4 leading-relaxed">
            AI workflow automation isn&apos;t just for big corporations anymore. It&apos;s the equalizer that allows small businesses to compete on efficiency, service quality, and innovation. The question isn&apos;t whether you should implement AI workflows—it&apos;s how quickly you can start.
          </p>
          
          <p className="text-gray-700 mb-4 leading-relaxed">
            Every day you wait is a day your competitors gain ground. But with the right approach, tools, and guidance, you can transform your small business into an AI-powered operation that delivers big business results.
          </p>
          
          <p className="text-xl font-semibold text-blue-600">
            Ready to join the AI revolution? Start with one workflow today, and in 90 days, you&apos;ll wonder how you ever operated without it.
          </p>
        </section>

        {/* CTA Section */}
        <section className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-2xl p-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Transform Your Business?</h2>
          <p className="text-xl mb-6 opacity-90">
            Join 500+ small businesses already using AI workflow automation
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
            onClick={() => toggleModal(true)}
            className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
              Schedule Free Consultation
            </button>
            <button className="bg-blue-500 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-400 transition-colors flex items-center justify-center gap-2">
              <Download className="w-5 h-5" />
              Download Resources
            </button>
          </div>
        </section>

        {/* About Section */}
        <footer className="mt-12 pt-8 border-t">
          <div className="bg-gray-100 p-6 rounded-lg">
            <h3 className="text-xl font-semibold mb-3">About SmartBiz Genie</h3>
            <p className="text-gray-700 mb-4">
              SmartBiz Genie specializes in AI workflow automation for small and medium businesses. We&apos;ve helped over 500 companies transform their operations with intelligent automation that actually works. Our mission: making enterprise-grade AI accessible to every business, regardless of size.
            </p>
            <div className="flex gap-4">
              <a href="mailto:hello@smartbizgenie.com" className="text-blue-600 hover:underline">Email us</a>
              <span className="text-gray-400">|</span>
              <a href="#" className="text-blue-600 hover:underline">LinkedIn</a>
              <span className="text-gray-400">|</span>
              <a href="#" className="text-blue-600 hover:underline">Twitter</a>
            </div>
          </div>
        </footer>
      </div>
    </article>
  );
};

export default BlogPost;