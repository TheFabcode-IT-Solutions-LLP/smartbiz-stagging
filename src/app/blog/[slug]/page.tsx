import BlogPost from '@/components/blog/BlogPost';
import { Metadata } from 'next';

// Generate metadata for the page
export async function generateMetadata({ 
  params 
}: { 
  params: Promise<{ slug: string }> 
}): Promise<Metadata> {
  const { slug } = await params;
  
  return {
    title: 'The Complete Guide to AI Workflow Automation for Small Businesses in 2025 | SmartBiz Genie',
    description: 'Learn how to implement AI workflow automation in your small business with our step-by-step guide. Includes ROI calculator, quick wins, and real success stories.',
    keywords: 'AI workflow automation small business, AI workflow implementation guide, business process automation AI',
    openGraph: {
      title: 'AI Workflow Automation Guide for Small Businesses',
      description: 'Transform your small business with AI automation - Complete 2025 Guide',
      images: ['/images/blog/ai-workflow-guide-og.png'],
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
  
  // For now, we'll show the AI workflow guide
  // Later you can add logic to load different posts based on slug
  if (slug === 'ai-workflow-automation-small-business-guide-2025') {
    return <BlogPost />;
  }
  
  // 404 for other slugs
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-2xl font-bold mb-4">Post not found</h1>
        <p>The blog post you&apos;re looking for doesn&apos;t exist.</p>
      </div>
    </div>
  );
}