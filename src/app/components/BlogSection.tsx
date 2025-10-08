'use client';
import { useState } from 'react';

export default function BlogSection() {
  const blogPosts = [
    {
      id: 1,
      date: "10/02/2024",
      author: "Ben Cutting",
      title: "The Importance of Cybersecurity",
      description: "We explore the growing trend of remote work and its implications for cybersecurity.",
      image: "/assets/images/blog4-img1.webp",
      readTime: "5 min read"
    },
    {
      id: 2,
      date: "10/02/2024", 
      author: "Ben Cutting",
      title: "The Future of Cloud Computing",
      description: "We take a deep dive into the future of cloud computing and discuss emerging trends and predictions that the industry.",
      image: "/assets/images/blog4-img2.webp",
      readTime: "7 min read"
    },
  ];

  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  return (
    <section className="pb-20 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 px-4 py-2 rounded-full mb-4">
            <span className="text-[var(--foreground)] text-sm font-medium">Our Blog</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-[var(--foreground)] mb-4">
            See Our Latest Blog & News
          </h2>
        </div>

        {/* Blog Posts Grid */}
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {blogPosts.slice(0, 2).map((post) => (
            <div
              key={post.id}
              className="group cursor-pointer rounded-2xl overflow-hidden"
              onMouseEnter={() => setHoveredCard(post.id)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              {/* Blog Image */}
              <div className="relative overflow-hidden h-94 border border-gray-700/30 rounded-2xl hover:scale-[1.02] transition-transform hover:shadow-3xl hover:border-white">
                <img 
                  src={post.image} 
                  alt={post.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              {/* Blog Content (stacked below image) */}
              <div className="bg-[var(--background)]/80 backdrop-blur-md p-6 mt-[-60] mx-4 mb-4 rounded-xl shadow-lg hover:bg-[var(--background)]/70 transition-colors duration-300 hover:shadow-3xl hover:border-[var(--foreground)] hover:border-2">
                {/* Meta Information */}
                <div className="flex items-center space-x-4 mb-3 text-sm text-[var(--foreground)]/70">
                  <div className="flex items-center space-x-1">
                    <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                    <span>{post.date}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                    </svg>
                    <span>{post.author}</span>
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-[var(--foreground)] mb-3 transition-colors duration-300 group-hover:opacity-90">
                  {post.title}
                </h3>
                {/* Description */}
                <p className="text-[var(--foreground)]/80 text-sm leading-relaxed mb-4">
                  {post.description}
                </p>
                {/* Read More Button */}
                <button className="inline-flex items-center space-x-1 text-[var(--foreground)] hover:opacity-80 font-medium text-sm transition-colors duration-300">
                  <span>Read More ↗</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
