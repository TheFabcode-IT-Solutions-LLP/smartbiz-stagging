import BlogPost from '@/components/blog/BlogPost';

// Add the metadata here
export const metadata = {
  title: 'The Complete Guide to AI Workflow Automation for Small Businesses in 2025 | SmartBiz Genie',
  description: 'Learn how to implement AI workflow automation in your small business with our step-by-step guide. Includes ROI calculator, quick wins, and real success stories.',
  keywords: 'AI workflow automation small business, AI workflow implementation guide, business process automation AI',
  author: 'SmartBiz Genie',
  publishDate: '2025-07-23',
  lastModified: '2025-07-23',
  openGraph: {
    title: 'AI Workflow Automation Guide for Small Businesses',
    description: 'Transform your small business with AI automation - Complete 2025 Guide',
    type: 'article',
    publishedTime: '2025-07-23',
    authors: ['SmartBiz Genie'],
    images: [
      {
        url: '/images/blog/ai-workflow-guide-og.png',
        width: 1200,
        height: 630,
        alt: 'AI Workflow Automation Guide'
      }
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AI Workflow Automation Guide for Small Businesses',
    description: 'Transform your small business with AI automation - Complete 2025 Guide',
    images: ['/images/blog/ai-workflow-guide-og.png'],
  },
  alternates: {
    canonical: 'https://smartbizgenie.com/blog/ai-workflow-automation-small-business-guide-2025'
  }
};

// The page component
export default function Page({ params }) {
  if (params.slug === 'ai-workflow-automation-small-business-guide-2025') {
    return <BlogPost />;
  }
  
  return <div>Post not found</div>;
}