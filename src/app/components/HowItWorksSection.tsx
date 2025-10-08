import React from 'react';
import Image from 'next/image';

const HowItWorksSection = () => {
  return (
    <section className="relative pt-10 overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0"></div>
      <div className="absolute top-20 left-10 w-32 h-32 bg-blue-500/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 right-10 w-40 h-40 bg-purple-500/10 rounded-full blur-3xl"></div>
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          {/* Badge */}
          <div className="inline-flex items-center px-4 py-2 text-[var(--foreground)] rounded-full text-sm font-medium mb-6">
            How It Works
          </div>
          
          {/* Main Heading */}
          <h2 className="text-4xl lg:text-4xl font-bold text-[var(--foreground)] leading-tight mb-6">
            Unlocking Success The Path To{' '}
            <br />
            <span className="text-[var(--foreground)]">Seamless Solutions</span>
          </h2>
        </div>
        
        {/* Process Steps */}
        <div className="grid lg:grid-cols-2 gap-12 items-start mx-auto px-10">
          {/* Step 1 - Discovery & Consultation */}
          <div className="space-y-6">
            {/* Image */}
            <div className="relative w-full h-80 rounded-2xl overflow-hidden">
              <Image
                src="/assets/images/work2-img1.webp"
                alt="Discovery & Consultation"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
            </div>
            {/* Text */}
            <div className='px-4'>
              <h3 className="text-2xl font-bold text-[var(--foreground)] mb-4">
                Discovery & Consultation
              </h3>
              <p className="text-[var(--foreground)] leading-relaxed">
                The journey begins with a thorough discovery phase where we take the time 
                to understand your business, goals, and challenges. Our experienced team 
                will work closely with you to assess your needs and objectives.
              </p>
            </div>
          </div>
          
          {/* Step 2 - Implementation & Integration */}
          <div className="space-y-6 ">
            {/* Image */}
            <div className="relative w-full h-80 rounded-2xl overflow-hidden">
              <Image
                src="/assets/images/work2-img2.webp"
                alt="Implementation & Integration"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
            </div>
            {/* Text */}
            <div className='px-4'>
              <h3 className="text-2xl font-bold text-[var(--foreground)] mb-4">
                Implementation & Integration
              </h3>
              <p className="text-[var(--foreground)] leading-relaxed">
                Once we have a clear understanding of your requirements, our expert team 
                will design a custom solution tailored to your specific needs.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
