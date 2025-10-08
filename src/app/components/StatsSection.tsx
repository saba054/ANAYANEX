import Image from "next/image";

export default function StatsSection() {
  return (
    <div className="max-w-7xl mx-auto px-6 pt-16 relative mt-0 md:mt-[-580]">
      {/* Background decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
        <div className="absolute top-20 left-10 w-32 h-32 bg-[var(--foreground)]/20 rounded-full blur-xl"></div>
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-[var(--foreground)]/10 rounded-full blur-xl"></div>
      </div>

      <div className="grid lg:grid-cols-2 gap-12 items-center">
        {/* Left side - Image collage */}
        <div className="relative">
          {/* Main central image */}
          <div className="relative w-full h-64 sm:h-80 md:h-96">
            <Image
              src="/assets/images/solution-img2.webp"
              alt="Business Professional"
              fill
              className="object-cover rounded-2xl"
              priority
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 600px"
            />
          </div>

          {/* Top left small image */}
          <div className="hidden md:block absolute -top-4 -left-4 w-24 h-24 lg:w-32 lg:h-32">
            <Image
              src="/assets/images/about2-img1.webp"
              alt="Team Meeting"
              fill
              className="object-cover rounded-xl border-2 lg:border-4 border-[var(--foreground)]"
              priority
              sizes="160px"
            />
          </div>

          {/* Bottom right small image */}
          <div className="hidden md:block absolute -bottom-4 -right-4 w-24 h-24 lg:w-32 lg:h-32">
            <Image
              src="/assets/images/about2-img3.webp"
              alt="Consultation"
              fill
              className="object-cover rounded-xl border-2 lg:border-4 border-[var(--foreground)]"
              priority
              sizes="160px"
            />
          </div>

          {/* Experience badge (desktop/tablet absolute) */}
          <div className="hidden md:block absolute top-[-30px] right-[-50px] bg-[var(--foreground)] text-[var(--background)] px-6 py-4 rounded-xl font-bold w-45 text-center">
            <div className="flex items-center gap-3">
              <div className="text-4xl font-black">25</div>
              <div className="text-xs font-semibold text-left">
                Years Of <br /> Experience
              </div>
            </div>
          </div>

          {/* Experience badge (mobile inline) */}
          <div className="md:hidden mt-4 bg-[var(--foreground)] text-[var(--background)] px-4 py-3 rounded-xl font-bold max-w-xs mx-auto">
            <div className="flex items-center justify-center gap-3">
              <div className="text-3xl font-black">25</div>
              <div className="text-[10px] font-semibold text-left leading-tight">
                Years Of <br /> Experience
              </div>
            </div>
          </div>
        </div>

        {/* Right side - Content */}
        <div className="space-y-6 ml-0 md:ml-12">
          {/* Service badge */}
          <div className="inline-block">
            <span className="text-[var(--foreground)] px-4 py-2 rounded-full text-sm font-semibold">
              Our Service
            </span>
          </div>

          {/* Main heading */}
          <h2 className="text-4xl lg:text-4xl font-bold text-[var(--foreground)] leading-tight">
            Empower Your Business With
            <br />
            Our Comprehensive IT
            <br />
            Solutions
          </h2>

          <p className="text-[var(--foreground)] text-md opacity-80">
            Welcome to ANAYANEX, your premier destination for cutting-edge
            technology solutions and IT services. At ANAYANEX, we are passionate
            about harnessing the power of technology to empower businesses a
            like.
          </p>

          {/* Progress bars section */}
          <div className="space-y-6 bg-transparent p-6 md:p-10 border border-[var(--foreground)] rounded-xl">
            <div className="space-y-3">
              <div className="flex justify-between items-center">
                <span className="text-[var(--foreground)] font-semibold">IT Consulting</span>
                <span className="text-[var(--foreground)] font-bold">100%</span>
              </div>
              <div className="w-full bg-[var(--foreground)]/20 rounded-full h-2">
                <div className="bg-[var(--foreground)] h-2 rounded-full w-full"></div>
              </div>
            </div>

            <div className="space-y-3">
              <div className="flex justify-between items-center">
                <span className="text-[var(--foreground)] font-semibold">Cyber Security</span>
                <span className="text-[var(--foreground)] font-bold">98%</span>
              </div>
              <div className="w-full bg-[var(--foreground)]/20 rounded-full h-2">
                <div className="bg-[var(--foreground)] h-2 rounded-full w-[98%]"></div>
              </div>
            </div>
          </div>

          {/* Learn More button */}
          <button className="bg-[var(--foreground)] text-[var(--background)] px-8 py-3 rounded-full font-semibold hover:opacity-80 transition-colors">
            Learn More ↗
          </button>
        </div>
      </div>
    </div>
  );
}
