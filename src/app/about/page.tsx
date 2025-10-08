// Top imports: removed unused PortfolioPage import
'use client';
import Image from 'next/image';
import Navigation from '../components/Navigation';
import { useState } from 'react';
import Link from 'next/link';
import PortfolioPage from '../portfolio/page';

export default function AboutPage() {
  const [selectedValue, setSelectedValue] = useState(0);

  const values = [
    {
      title: "Innovation",
      description: "We constantly push the boundaries of technology to deliver cutting-edge solutions that drive your business forward.",
      icon: "💡"
    },
    {
      title: "Excellence",
      description: "Our commitment to quality ensures that every project we deliver exceeds expectations and industry standards.",
      icon: "⭐"
    },
    {
      title: "Integrity",
      description: "We build trust through transparency, honesty, and ethical business practices in all our client relationships.",
      icon: "🤝"
    },
    {
      title: "Collaboration",
      description: "We work closely with our clients as partners, ensuring their vision becomes our shared mission.",
      icon: "🤝"
    }
  ];

  const stats = [
    { number: "500+", label: "Projects Completed" },
    { number: "150+", label: "Happy Clients" },
    { number: "50+", label: "Team Members" },
    { number: "5+", label: "Years Experience" }
  ];

  const teamMembers = [
    {
      name: "John Doe",
      position: "CEO & Founder",
      image: "/assets/images/team2-img1.webp",
      bio: "With over 15 years in the tech industry, John leads ANAYANEX with a vision for innovative digital solutions."
    },
    {
      name: "Jane Smith",
      position: "Chief Technology Officer",
      image: "/assets/images/team2-img2.webp",
      bio: "Jane brings deep technical expertise and ensures our solutions are built with the latest technologies."
    },
    {
      name: "Sarah Thompson",
      position: "Head of Project Management",
      image: "/assets/images/team2-img3.webp",
      bio: "Sarah ensures every project is delivered on time and exceeds client expectations through meticulous planning."
    },
    {
      name: "David Garcia",
      position: "Lead Software Engineer",
      image: "/assets/images/team2-img4.webp",
      bio: "David leads our development team in creating robust, scalable solutions for our clients."
    }
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <div className="pt-20">
        <div className="relative w-full">
          {/* Banner with background image */}
          <div className="relative h-[380px] sm:h-[460px] lg:h-[520px] overflow-hidden">
            <Image src="/assets/images/about.webp" alt="About ANAYANEX Banner" fill className="object-cover" priority />
            {/* Readability overlay */}
            <div className="absolute inset-0 bg-gradient-to-r from-[var(--background)]/60 via-[var(--background)]/40 to-transparent"></div>
            {/* Left text overlay on banner */}
            <div className="relative z-10 max-w-7xl mx-auto h-full px-6 flex items-center">
              <div className="max-w-2xl">
                <p className="text-[var(--foreground)] font-semibold text-base mb-4">About ANAYANEX</p>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[var(--foreground)] leading-tight mb-6">
                  Empowering
                  <br />
                  <span className="text-[var(--foreground)]">
                    Digital Innovation
                  </span>
                  <br />
                  Since 2019
                </h1>
                <p className="text-[var(--foreground)] text-lg leading-relaxed mb-8 opacity-80">
                  At ANAYANEX, we are passionate about transforming businesses through innovative technology solutions. 
                  Our team of experts combines creativity with technical excellence to deliver results that matter.
                </p>
                <div className="flex flex-wrap gap-4">
                  <button className="bg-[var(--foreground)] text-[var(--background)] px-8 py-3 rounded-full font-semibold hover:opacity-80 transition-colors">
                    Our Services
                  </button>
                  <button className="border border-[var(--foreground)] text-[var(--foreground)] px-8 py-3 rounded-full font-semibold hover:bg-[var(--foreground)] hover:text-[var(--background)] transition-colors">
                    Contact Us
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="bg-[var(--background)]/60 backdrop-blur-sm border border-[var(--foreground)]/20 rounded-2xl p-6 hover:border-[var(--foreground)]/50 transition-all duration-300">
                <h3 className="text-3xl md:text-4xl font-bold text-[var(--foreground)] mb-2">{stat.number}</h3>
                <p className="text-[var(--foreground)] font-medium opacity-80">{stat.label}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Mission & Vision Section */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid lg:grid-row-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-[var(--foreground)] mb-8">
              Our <span className="text-[var(--foreground)]">Mission & Vision</span>
            </h2>
            <div className="space-y-6">
              <div className="bg-[var(--background)]/60 backdrop-blur-sm border border-[var(--foreground)]/20 rounded-2xl p-6">
                <h3 className="text-xl font-bold text-[var(--foreground)] mb-3">🔮 Our Vision</h3>
                <p className="text-[var(--foreground)] leading-relaxed opacity-80">
                  To be the leading technology partner that shapes the future of digital innovation, creating solutions that 
                  not only meet today&apos;s challenges but anticipate tomorrow&apos;s opportunities.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Values Section */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-[var(--foreground)] mb-4">
            Our <span className="text-[var(--foreground)]">Core Values</span>
          </h2>
          <p className="text-[var(--foreground)] text-lg max-w-2xl mx-auto opacity-80">
            The principles that guide everything we do and shape our company culture
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((value, index) => (
            <div 
              key={index}
              className="bg-[var(--background)]/60 backdrop-blur-sm border border-[var(--foreground)]/20 rounded-2xl p-6 hover:border-[var(--foreground)]/50 hover:bg-[var(--background)]/50 transition-all duration-300 cursor-pointer"
              onClick={() => setSelectedValue(selectedValue === index ? -1 : index)}
            >
              <div className="text-4xl mb-4">{value.icon}</div>
              <h3 className="text-xl font-bold text-[var(--foreground)] mb-3">{value.title}</h3>
              <p className={`text-[var(--foreground)] leading-relaxed transition-all duration-300 opacity-70 ${selectedValue === index ? 'opacity-100' : 'opacity-70'}`}>
                {value.description}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Team Section */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-[var(--foreground)] mb-4">
            Meet Our <span className="text-[var(--foreground)]">Expert Team</span>
          </h2>
          <p className="text-[var(--foreground)] text-lg max-w-2xl mx-auto opacity-80">
            The talented individuals who make ANAYANEX&apos;s success possible
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <div key={index} className="group">
              <div className="bg-[var(--background)]/60 backdrop-blur-sm border border-[var(--foreground)]/20 rounded-2xl p-6 hover:border-[var(--foreground)]/50 transition-all duration-300">
                <div className="relative w-24 h-24 mx-auto mb-4 overflow-hidden rounded-full">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <h3 className="text-xl font-bold text-[var(--foreground)] text-center mb-2">{member.name}</h3>
                <p className="text-[var(--foreground)] text-center font-medium mb-3">{member.position}</p>
                <p className="text-[var(--foreground)] text-sm text-center leading-relaxed opacity-80">{member.bio}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* CTA Section */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="bg-[var(--background)]/60 backdrop-blur-sm border border-[var(--foreground)]/20 rounded-3xl p-12 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-[var(--foreground)] mb-6">
            Ready to Start Your <span className="text-[var(--foreground)]">Digital Journey?</span>
          </h2>
          <p className="text-[var(--foreground)] text-lg mb-8 max-w-2xl mx-auto opacity-80">
            Let&apos;s discuss how ANAYANEX can help transform your business with innovative technology solutions.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <button className="bg-[var(--foreground)] text-[var(--background)] px-8 py-3 rounded-full font-semibold hover:opacity-80 transition-colors">
              Get Started Today
            </button>
            <button className="border border-[var(--foreground)] text-[var(--foreground)] px-8 py-3 rounded-full font-semibold hover:bg-[var(--foreground)] hover:text-[var(--background)] transition-colors">
              <Link href="/portfolio">View Our Portfolio</Link>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}