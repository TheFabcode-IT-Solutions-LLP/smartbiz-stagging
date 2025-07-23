// src/app/blog/page.tsx
import Link from 'next/link';

const blogPosts = [
  {
    slug: 'implementing-ai-workflows-chatbot-integration',
    title: 'From Chaos to Control: Implementing AI Workflows with Chatbot Integration',
    excerpt: 'Your customer service team is drowning. Here\'s how to build AI workflows that integrate chatbots directly into your business operations.',
    date: 'April 23, 2025',
    readTime: '15 min read',
    category: 'Workflow Automation'
  },
  {
    slug: 'ai-ecommerce-chatbots-conversion-optimization-playbook',
    title: 'AI Ecommerce Chatbots: The Conversion Optimization Playbook',
    excerpt: 'Stop treating chatbots like glorified FAQ pages. Learn how to turn them into conversion machines that drive real revenue.',
    date: 'March 10, 2025',
    readTime: '12 min read',
    category: 'Ecommerce'
  },
  {
    slug: 'ai-workflow-automation-small-business-guide-2025',
    title: 'The Complete Guide to AI Workflow Automation for Small Businesses in 2025',
    excerpt: 'Learn how to implement AI workflow automation in your small business with our step-by-step guide.',
    date: 'February 18, 2025',
    readTime: '15 min read',
    category: 'AI Automation'
  }
];

export default function BlogPage() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8">SmartBiz Genie Blog</h1>
      
      <div className="grid gap-6">
        {blogPosts.map((post) => (
          <article key={post.slug} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
            <div className="flex items-center gap-4 text-sm text-gray-600 mb-2">
              <span>{post.date}</span>
              <span>•</span>
              <span>{post.readTime}</span>
              <span>•</span>
              <span className="bg-blue-100 text-blue-700 px-2 py-1 rounded">{post.category}</span>
            </div>
            
            <h2 className="text-2xl font-bold mb-2">
              <Link href={`/blog/${post.slug}`} className="hover:text-blue-600">
                {post.title}
              </Link>
            </h2>
            
            <p className="text-gray-600 mb-4">{post.excerpt}</p>
            
            <Link 
              href={`/blog/${post.slug}`}
              className="text-blue-600 font-semibold hover:text-blue-700"
            >
              Read More →
            </Link>
          </article>
        ))}
      </div>
    </div>
  );
}