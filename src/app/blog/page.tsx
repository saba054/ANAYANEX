// Top of file (module scope)
'use client';
import Image from 'next/image';
import Navigation from '../components/Navigation';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import portfolioImage from '/assets/images/portfolio-img1.webp';


export default function BlogPage() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  // Replace static posts with dynamic fetching
  type BlogPost = {
    id: number;
    date: string;
    author: string;
    title: string;
    description: string;
    image: string;
    readTime: string;
    category: string;
  };

  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // Fetch posts
  useEffect(() => {
    let canceled = false;
    fetch('/api/blog')
      .then(res => res.json())
      .then(json => {
        if (canceled) return;
        if (json?.ok && Array.isArray(json?.data)) {
          setPosts(json.data);
        } else {
          setError(json?.error || 'Failed to load blog posts');
        }
      })
      .catch(err => setError(err.message))
      .finally(() => setLoading(false));
    return () => { canceled = true; };
  }, []);

  // Derive categories dynamically
  const dynamicCategories = [
    { id: 'all', name: 'All' },
    ...Array.from(new Set(posts.map(p => p.category))).map(c => ({
      id: c,
      name: c.charAt(0).toUpperCase() + c.slice(1)
    }))
  ];

  const filteredPosts = selectedCategory === 'all'
    ? posts
    : posts.filter(p => p.category === selectedCategory);

  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Banner (after navbar) */}
      <div className="pt-20">
        <div className="relative w-full h-[360px] sm:h-[420px] lg:h-[480px] overflow-hidden">
          {/* Background image */}
          <Image
            src="/assets/images/banner-software-ui-development-different-260nw-1979287835.webp"
            alt="Blog Banner"
            fill
            className="object-cover opacity-30"
            priority
          />
          {/* Readability overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/40 to-transparent"></div>

          {/* Banner content */}
          <div className="relative z-10 max-w-7xl mx-auto h-full px-6 flex items-center">
            <div className="max-w-2xl">
              <p className="text-[var(--foreground)] font-semibold text-base mb-3">Our Blog</p>
              <h1 className="text-4xl md:text-4xl lg:text-6xl font-bold text-[var(--foreground)] leading-tight mb-5">
                Insights & Updates
                <br />
                <span className="text-[var(--foreground)]">
                  From ANAYANEX
                </span>
              </h1>
              <p className="text-[var(--foreground)] text-lg leading-relaxed opacity-80">
                Explore perspectives on cybersecurity, cloud, analytics, and technology trends shaping the future.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Category Filter */}
      <div className="max-w-7xl mx-auto px-6 py-10">
        <div className="flex flex-wrap justify-center gap-4">
          {dynamicCategories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                selectedCategory === cat.id
                  ? 'bg-[var(--foreground)] text-[var(--background)]'
                  : 'bg-[var(--background)]/60 text-[var(--foreground)] border border-[var(--foreground)]/20 hover:border-[var(--foreground)]/40 hover:bg-[var(--background)]/40'
              }`}
            >
              {cat.name}
            </button>
          ))}
        </div>
      </div>

      {/* Blog Grid */}
      <div className="max-w-7xl mx-auto px-6 pb-16">
        {loading ? (
          <div className="text-center text-[var(--foreground)]/70">Loading posts…</div>
        ) : error ? (
          <div className="text-center text-red-500">{error}</div>
        ) : filteredPosts.length === 0 ? (
          <div className="text-center text-[var(--foreground)]/70">No posts found.</div>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.map((post) => (
              <div key={post.id} className="group cursor-pointer rounded-2xl overflow-hidden bg-[var(--background)]/60 backdrop-blur-sm border border-[var(--foreground)]/20 hover:border-[var(--foreground)]/50 transition-all duration-300">
                <div className="relative h-56 overflow-hidden">
                  <Image 
                    src={post.image} 
                    alt={post.title} 
                    fill 
                    className="object-cover group-hover:scale-110 transition-transform duration-500" 
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 360px"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[var(--background)]/60 via-transparent to-transparent"></div>
                  <div className="absolute top-4 left-4">
                    <span className="bg-[var(--foreground)] backdrop-blur-md text-[var(--background)] px-3 py-1 rounded-full text-xs font-semibold">
                      {post.category.charAt(0).toUpperCase() + post.category.slice(1)}
                    </span>
                  </div>
                  <div className="absolute top-4 right-4">
                    <span className="bg-[var(--foreground)]/80 backdrop-blur-md text-[var(--background)] px-3 py-1 rounded-full text-xs font-semibold">
                      {post.date}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  {/* Meta */}
                  <div className="flex items-center justify-between text-sm text-[var(--foreground)] opacity-70 mb-2">
                    <span>By {post.author}</span>
                    <span>{post.readTime || '5 min read'}</span>
                  </div>
                  {/* Title */}
                  <h3 className="text-xl font-bold text-[var(--foreground)] mb-2 transition-colors">
                    {post.title}
                  </h3>
                  {/* Description */}
                  <p className="text-[var(--foreground)] text-sm leading-relaxed mb-4 opacity-80 line-clamp-3">
                    {post.description}
                  </p>
                  {/* Read More */}
                  <button className="w-full bg-[var(--foreground)] border border-[var(--foreground)]/30 text-[var(--background)] py-2 rounded-lg font-semibold hover:opacity-80 transition-all duration-300">
                    Read More
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* CTA */}
      <div className="max-w-7xl mx-auto px-6 pb-20">
        <div className="bg-[var(--background)]/60 backdrop-blur-sm border border-[var(--foreground)]/20 rounded-3xl p-12 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-[var(--foreground)] mb-6">
            Want Updates From <span className="text-[var(--foreground)]">ANAYANEX?</span>
          </h2>
          <p className="text-[var(--foreground)] text-lg mb-8 max-w-2xl mx-auto opacity-80">
            Subscribe to our newsletter to get the latest insights, tips, and news directly in your inbox.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <button className="bg-[var(--foreground)] text-[var(--background)] px-8 py-3 rounded-full font-semibold hover:opacity-80 transition-colors">
              Subscribe
            </button>
            <button className="border border-[var(--foreground)] text-[var(--foreground)] px-8 py-3 rounded-full font-semibold hover:bg-[var(--foreground)] hover:text-[var(--background)] transition-colors">
              <Link href="/portfolio">Visit Portfolio</Link>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}