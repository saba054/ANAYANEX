import React from 'react';
import Image from 'next/image';

const SolutionsSection = () => {
  return (
    <section className="relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 "></div>
      <div className="absolute top-20 left-10 w-32 h-32 bg-[var(--foreground)]/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 right-10 w-40 h-40 bg-[var(--foreground)]/10 rounded-full blur-3xl"></div>
      
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            {/* Badge */}
            <div className="inline-flex items-center px-4 py-2 text-[var(--foreground)] rounded-full text-sm font-medium">
              <div className="w-2 h-2 rounded-full mr-2"></div>
              Best IT Solution
            </div>
            
            {/* Main Heading */}
            <h2 className="text-4xl lg:text-4xl font-bold text-[var(--foreground)] leading-tight">
              Lets Elevate Your Business With{' '}
              <span className="text-[var(--foreground)]">Strategic IT Solutions</span>
            </h2>
            
            {/* Description */}
            <p className="text-[var(--foreground)] text-lg leading-relaxed">
              At AnayaNex, we understand that every business is unique, which is why we offer a range 
              of flexible IT solutions designed to address your specific challenges and goals.
            </p>
            
            {/* Services List */}
            <div className="space-y-6">
              {/* Network Infrastructure Solutions */}
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-12 h-12 bg-[var(--foreground)] rounded-lg flex items-center justify-center">
                  <svg className="w-6 h-6 text-[var(--background)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-[var(--foreground)] font-semibold text-lg mb-2">Network Infrastructure Solutions</h3>
                  <p className="text-[var(--foreground)]">Build a reliable and secure network infrastructure that supports your business operations enables seamless</p>
                </div>
              </div>
              
              {/* Managed IT Services */}
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-12 h-12 bg-[var(--foreground)] rounded-lg flex items-center justify-center">
                  <svg className="w-6 h-6 text-[var(--background)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-[var(--foreground)] font-semibold text-lg mb-2">Managed IT Services</h3>
                  <p className="text-[var(--foreground)]">Focus on your core business activities while we take care of your IT needs with our managed IT services.</p>
                </div>
              </div>
            </div>
            
            {/* CTA Button */}
            <div className="pt-4">
              <button className="group inline-flex items-center px-8 py-4 bg-[var(--foreground)] text-[var(--background)] font-semibold rounded-full hover:opacity-90 transition-all duration-300 transform hover:scale-105">
                Discover More ↗
              </button>
            </div>
          </div>
          
          {/* Right Image Collage */}
          <div className="relative">
            {/* Main central image */}
            <div className="relative z-10">
              <div className="relative w-full h-96 rounded-2xl overflow-hidden">
                <Image
                  src="/assets/images/solution-img2.webp"
                  alt="Business professional working"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[var(--background)]/20 to-transparent"></div>
              </div>
            </div>
            
            {/* Top right overlapping image */}
            <div className="absolute -top-8 -right-8 z-20 w-32 h-32 rounded-xl overflow-hidden border-4 border-[var(--foreground)]/20 backdrop-blur-sm">
              <Image
                src="/assets/images/about2-img1.webp"
                alt="Team meeting"
                fill
                className="object-cover"
              />
            </div>
            
            {/* Bottom left overlapping image */}
            <div className="absolute -bottom-8 -left-8 z-20 w-40 h-32 rounded-xl overflow-hidden border-4 border-[var(--foreground)]/20 backdrop-blur-sm">
              <Image
                src="/assets/images/about2-img3.webp"
                alt="Technology workspace"
                fill
                className="object-cover"
              />
            </div>
            
            {/* Decorative elements */}
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-full">
              <div className="absolute top-0 right-0 w-20 h-20 bg-[var(--foreground)]/15 rounded-full blur-2xl"></div>
              <div className="absolute bottom-0 left-0 w-24 h-24 bg-[var(--foreground)]/15 rounded-full blur-2xl"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SolutionsSection;