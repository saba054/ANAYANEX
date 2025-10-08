import Image from "next/image";

export default function HeroSection() {
  return (
    <div className="relative max-w-7xl mx-auto px-4 overflow-hidden">
      
      {/* Additional Background Overlay */}
      <div className="absolute inset-0 -z-5"></div>
      
      <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center relative z-10">
        <div className="order-1 lg:order-1 mt-8 lg:mt-[-200] px-2 sm:px-4 lg:px-6">
          <div className="mt-0 lg:mt-[-280] px-2 sm:px-4">
            <p className="text-[var(--foreground)] font-semibold text-sm sm:text-base">IT Support For Business</p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[var(--foreground)]">
              With ANAYANEX
            </h1>
            <p className="text-[var(--foreground)] text-base sm:text-lg leading-relaxed mt-4 opacity-80">
              Completely synergize resource taxing relationships via premier niche markets. 
              Professionally cultivate one-to-one customer service with robust ideas.
            </p>
          </div>
          
          <div className="flex flex-wrap gap-2 sm:gap-3 lg:gap-4 mt-6 px-2 sm:px-4">
            <button className="text-[var(--foreground)] px-3 sm:px-4 lg:px-6 py-1 sm:py-2 rounded-full text-xs sm:text-sm font-semibold border border-[var(--foreground)] bg-transparent hover:bg-[var(--foreground)] hover:text-[var(--background)] transition-colors">
              Software Development
            </button>
            <button className="text-[var(--foreground)] px-3 sm:px-4 lg:px-6 py-1 sm:py-2 rounded-full text-xs sm:text-sm font-semibold border border-[var(--foreground)] bg-transparent hover:bg-[var(--foreground)] hover:text-[var(--background)] transition-colors">
              Cloud Solution
            </button>
            <button className="text-[var(--foreground)] px-3 sm:px-4 lg:px-6 py-1 sm:py-2 rounded-full text-xs sm:text-sm font-semibold border border-[var(--foreground)] bg-transparent hover:bg-[var(--foreground)] hover:text-[var(--background)] transition-colors">
              IT Solution
            </button>
            <button className="text-[var(--foreground)] px-3 sm:px-4 lg:px-6 py-1 sm:py-2 rounded-full text-xs sm:text-sm font-semibold border border-[var(--foreground)] bg-transparent hover:bg-[var(--foreground)] hover:text-[var(--background)] transition-colors">
              Data Analytics
            </button>
            <button className="text-[var(--foreground)] px-3 sm:px-4 lg:px-6 py-1 sm:py-2 rounded-full text-xs sm:text-sm font-semibold border border-[var(--foreground)] bg-transparent hover:bg-[var(--foreground)] hover:text-[var(--background)] transition-colors">
              Technology
            </button>
            <button className="text-[var(--foreground)] px-3 sm:px-4 lg:px-6 py-1 sm:py-2 rounded-full text-xs sm:text-sm font-semibold border border-[var(--foreground)] bg-transparent hover:bg-[var(--foreground)] hover:text-[var(--background)] transition-colors">
              Cyber Security
            </button>
            <button className="text-[var(--foreground)] px-3 sm:px-4 lg:px-6 py-1 sm:py-2 rounded-full text-xs sm:text-sm font-semibold border border-[var(--foreground)] bg-transparent hover:bg-[var(--foreground)] hover:text-[var(--background)] transition-colors">
              Consulting Services
            </button>
          </div>
        </div>
        
        <div className="order-2 lg:order-2 relative">
          {/* First image */}
          <div className="relative w-full h-64 sm:h-80 lg:h-[700px] flex items-center justify-center">
            <div className="relative w-56 h-56 sm:w-72 sm:h-72 lg:w-96 lg:h-96">
              <Image 
                src="/assets/images/hero2-main-img1.webp"
                alt="AnayaNex Hero"
                fill
                className="object-contain animate-spin-slow rounded-3xl"
                priority
                sizes="(max-width: 640px) 14rem, (max-width: 1024px) 18rem, 24rem"
              />
            </div>
          </div>
          
          {/* Gap/Margin between images */}
          <div className="mt-80"></div>
          
          {/* Second image */}
          <div className="w-full h-60 sm:h-72 lg:h-96 flex items-end justify-center">
            <div className="w-56 h-56 sm:w-52 sm:h-72 lg:w-96 lg:h-96">
              <Image 
                src="/assets/images/hero2-main-img2.webp"
                alt="ANAYANEX Background"
                fill
                className="object-contain"
                priority
                sizes="(max-width: 640px) 14rem, (max-width: 1024px) 18rem, 24rem"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}