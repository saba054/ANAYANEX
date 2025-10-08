'use client';
import Image from 'next/image';
import Navigation from '../components/Navigation';
import ServiceCard from '../components/ServiceCard';
import { useState } from 'react';

export default function ServicesPage() {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = [
    { id: 'all', name: 'All Services' },
    { id: 'security', name: 'Cybersecurity' },
    { id: 'software', name: 'Software Development' },
    { id: 'cloud', name: 'Cloud Solutions' },
    { id: 'data', name: 'Data Analytics' },
    { id: 'managed', name: 'Managed IT' },
  ];

  const services = [
    {
      icon: "🔒",
      title: "Cybersecurity Service",
      description: "Protect your digital assets with our comprehensive cybersecurity solutions, ensuring your business stays secure against evolving threats.",
      bgColor: "bg-green-400",
      textColor: "text-black",
      category: "security",
    },
    {
      icon: "💻",
      title: "Software Development",
      description: "Custom software solutions tailored to your business needs, from web applications to enterprise systems.",
      bgColor: "bg-blue-400",
      textColor: "text-white",
      category: "software",
    },
    {
      icon: "☁️",
      title: "Cloud Solutions",
      description: "Migrate to the cloud with confidence. We provide scalable, secure cloud infrastructure solutions.",
      bgColor: "bg-purple-400",
      textColor: "text-white",
      category: "cloud",
    },
    {
      icon: "🛡️",
      title: "Cyber Security",
      description: "Advanced security measures to protect your business from cyber threats and ensure data integrity.",
      bgColor: "bg-yellow-400",
      textColor: "text-black",
      category: "security",
    },
    {
      icon: "📊",
      title: "Data Analytics",
      description: "Transform your data into actionable insights with our advanced analytics and business intelligence solutions.",
      bgColor: "bg-green-400",
      textColor: "text-black",
      category: "data",
    },
    {
      icon: "🔧",
      title: "Managed IT Services",
      description: "Comprehensive IT management and support services to keep your business running smoothly 24/7.",
      bgColor: "bg-red-400",
      textColor: "text-white",
      category: "managed",
    }
  ];

  const filteredServices = selectedCategory === 'all'
    ? services
    : services.filter(s => s.category === selectedCategory);

  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Banner (after navbar) */}
      <div className="pt-20">
        <div className="relative w-full h-[360px] sm:h-[420px] lg:h-[480px] overflow-hidden">
          {/* Background image */}
          <Image src="/assets/images/images.jfif" alt="Services Banner" fill className="object-cover opacity-30" priority />
          {/* Readability overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-[var(--background)]/60 via-[var(--background)]/40 to-transparent"></div>
          {/* Banner content */}
          <div className="relative z-10 max-w-7xl mx-auto h-full px-6 flex items-center">
            <div className="max-w-2xl">
              <p className="text-[var(--foreground)] font-semibold text-base mb-3">Our Services</p>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[var(--foreground)] leading-tight mb-5">
                Comprehensive
                <br />
                <span className="text-[var(--foreground)]">
                  IT Solutions
                </span>
                <br />
                For Your Growth
              </h1>
              <p className="text-[var(--foreground)] text-lg leading-relaxed opacity-80">
                From cybersecurity and cloud to software development and analytics — we deliver future-ready solutions
                tailored to your business goals.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Category Filter */}
      <div className="max-w-7xl mx-auto px-6 py-10">
        <div className="flex flex-wrap justify-center gap-4">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                selectedCategory === cat.id
                  ? 'bg-[var(--foreground)] text-[var(--background)]'
                  : 'border border-[var(--foreground)] text-[var(--foreground)] bg-transparent hover:bg-[var(--foreground)] hover:text-[var(--background)]'
              }`}
            >
              {cat.name}
            </button>
          ))}
        </div>
      </div>

      {/* Services Grid */}
      <div className="max-w-7xl mx-auto px-6 pb-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredServices.map((service, idx) => (
            <ServiceCard
              key={`${service.title}-${idx}`}
              icon={service.icon}
              title={service.title}
              description={service.description}
              bgColor={service.bgColor}
              textColor={service.textColor}
            />
          ))}
        </div>
      </div>

      {/* Why Choose Us */}
      <div className="max-w-7xl mx-auto px-6 pb-16">
        <div className="bg-[var(--background)]/60 backdrop-blur-sm border border-[var(--foreground)]/20 rounded-3xl p-10">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-[var(--foreground)]">
              Why <span className="text-[var(--foreground)]">Choose ANAYANEX</span>
            </h2>
            <p className="text-[var(--foreground)] text-lg max-w-2xl mx-auto opacity-80">
              We combine technical excellence with a customer-first mindset to deliver solutions that make a difference.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: "Expert Team", desc: "Seasoned professionals across cybersecurity, cloud, software, and data." },
              { title: "Tailored Solutions", desc: "We design with your goals, workflows, and constraints in mind." },
              { title: "Security-First", desc: "From architecture to delivery, security is embedded at every step." },
              { title: "Proven Delivery", desc: "Reliable timelines and quality outcomes — every time." },
            ].map((item, i) => (
              <div key={i} className="bg-[var(--background)]/60 border border-[var(--foreground)]/20 rounded-2xl p-6 hover:border-[var(--foreground)] transition-all">
                <h3 className="text-xl font-bold text-[var(--foreground)] mb-2">{item.title}</h3>
                <p className="text-[var(--foreground)] leading-relaxed opacity-80">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="max-w-7xl mx-auto px-6 pb-20">
        <div className="bg-[var(--background)]/60 backdrop-blur-sm border border-[var(--foreground)]/20 rounded-3xl p-12 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-[var(--foreground)] mb-6">
            Ready to Elevate Your <span className="text-[var(--foreground)]">IT Strategy?</span>
          </h2>
          <p className="text-[var(--foreground)] text-lg mb-8 max-w-2xl mx-auto opacity-80">
            Let’s talk about your goals and how we can help you achieve them with scalable, secure, and innovative solutions.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <button className="bg-[var(--foreground)] text-[var(--background)] px-8 py-3 rounded-full font-semibold hover:opacity-80 transition-colors">
              Get Started
            </button>
            <button className="border border-[var(--foreground)] text-[var(--foreground)] px-8 py-3 rounded-full font-semibold hover:bg-[var(--foreground)] hover:text-[var(--background)] transition-colors">
              Contact Us
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}