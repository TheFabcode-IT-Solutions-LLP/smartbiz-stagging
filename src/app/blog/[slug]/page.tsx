// src/app/blog/[slug]/page.tsx
import BlogPost from '@/components/blog/BlogPost';
import EcommerceChatbotArticle from '@/components/blog/EcommerceChatbotArticle';
import WorkflowChatbotIntegrationArticle from '@/components/blog/AIWorkflowChatbotArticle';
import { Metadata } from 'next';

// Define the blog post metadata
const blogPostMeta = {
  'ai-workflow-automation-small-business-guide-2025': {
    title: 'The Complete Guide to AI Workflow Automation for Small Businesses in 2025 | SmartBiz Genie',
    description: 'Learn how to implement AI workflow automation in your small business with our step-by-step guide. Includes ROI calculator, quick wins, and real success stories.',
    keywords: 'AI workflow automation small business, AI workflow implementation guide, business process automation AI',
    image: '/images/blog/ai-workflow-guide-og.png'
  },
  'ai-ecommerce-chatbots-conversion-optimization-playbook': {
    title: 'AI Ecommerce Chatbots: The Conversion Optimization Playbook | SmartBiz Genie',
    description: 'Turn your ecommerce chatbot into a conversion machine. Learn proven strategies that increase AOV by 45% and conversion rates by 25%.',
    keywords: 'ecommerce chatbot optimization, AI chatbot conversion, ecommerce conversion optimization, chatbot ROI',
    image: '/images/blog/ecommerce-chatbot-og.png'
  },
  'implementing-ai-workflows-chatbot-integration': {
    title: 'From Chaos to Control: Implementing AI Workflows with Chatbot Integration | SmartBiz Genie',
    description: 'Learn how to build AI workflows that integrate chatbots directly into your business operations. Transform manual customer service into automated excellence.',
    keywords: 'AI workflow automation, chatbot integration, customer service automation, workflow implementation, business process automation',
    image: '/images/blog/workflow-chatbot-integration-og.png'
  }
};

// Generate metadata for the page
export async function generateMetadata({ 
  params 
}: { 
  params: Promise<{ slug: string }> 
}): Promise<Metadata> {
  const { slug } = await params;
  const meta = blogPostMeta[slug as keyof typeof blogPostMeta];
  
  if (!meta) {
    return {
      title: 'Blog Post Not Found | SmartBiz Genie',
      description: 'The requested blog post could not be found.'
    };
  }
  
  return {
    title: meta.title,
    description: meta.description,
    keywords: meta.keywords,
    openGraph: {
      title: meta.title,
      description: meta.description,
      images: [meta.image],
    },
  };
}

// Page component with async params
export default async function Page({ 
  params 
}: { 
  params: Promise<{ slug: string }> 
}) {
  const { slug } = await params;
  
  // Route to the appropriate component based on slug
  switch (slug) {
    case 'ai-workflow-automation-small-business-guide-2025':
      return <BlogPost />;
    case 'ai-ecommerce-chatbots-conversion-optimization-playbook':
      return <EcommerceChatbotArticle />;
    case 'implementing-ai-workflows-chatbot-integration':
      return <WorkflowChatbotIntegrationArticle />;
    default:
      return (
        <div className="min-h-screen flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-2xl font-bold mb-4">Post not found</h1>
            <p>The blog post you&apos;re looking for doesn&apos;t exist.</p>
          </div>
        </div>
      );
  }
}