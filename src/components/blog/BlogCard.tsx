import Link from 'next/link';
import Image from 'next/image';

interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  category: string;
  image: string;
}

interface BlogCardProps {
  post: BlogPost;
}

export default function BlogCard({ post }: BlogCardProps) {
  return (
    <article className="bg-white rounded-[20px] overflow-hidden shadow-md hover:shadow-xl transition-shadow group">
      <Link href={`/blog/${post.slug}`}>
        <div className="relative h-[240px] overflow-hidden">
          <Image
            src={post.image}
            alt={post.title}
            fill
            className="object-cover group-hover:scale-110 transition-transform duration-300"
          />
          <div className="absolute top-4 left-4">
            <span className="bg-accent-100 text-white px-4 py-1 rounded-full text-sm font-medium">
              {post.category}
            </span>
          </div>
        </div>
        
        <div className="p-[30px]">
          <div className="flex items-center gap-3 text-sm text-gray-600 mb-3">
            <span>{post.date}</span>
            <span>•</span>
            <span>{post.readTime}</span>
          </div>
          
          <h3 className="text-[22px] font-bold text-primary-100 mb-3 line-clamp-2 group-hover:text-accent-100 transition-colors">
            {post.title}
          </h3>
          
          <p className="text-[16px] text-primary-100/70 line-clamp-3 mb-4">
            {post.excerpt}
          </p>
          
          <span className="text-accent-100 font-semibold hover:text-primary-100 transition-colors inline-flex items-center gap-2">
            Read More 
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" className="group-hover:translate-x-1 transition-transform">
              <path d="M4.16666 10H15.8333" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M10 4.16666L15.8333 10L10 15.8333" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </span>
        </div>
      </Link>
    </article>
  );
}