'use client';
import { useState, useEffect } from 'react';

export default function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);

   const testimonials = [
    {
      id: 1,
      rating: 99,
      text: "I have been thoroughly impressed with the level of service and expertise provided by TechXen. Their team went above and beyond to understand our business needs and deliver a custom software solution. I highly recommend them to anyone looking for top-notch technology solutions.",
      name: "Jason Behrendorff",
      rating_score: 4.5
    },
    {
      id: 2,
      rating: 99,
      text: "We approached TechXen with a complex IT problem, and they were able to provide an innovative solution that addressed our needs perfectly. Their team&apos;s creativity, technical prowess, and dedication to client satisfaction are truly commendable.",
      name: "Matthew Kuhnemann",
      rating_score: 4.5
    },
    {
      id: 3,
      rating: 99,
      text: "TechXen has been our go-to partner for IT support for several years now, and they have consistently delivered outstanding service. Their team is highly responsive, knowledgeable, reliable. Thanks to their expertise, we&apos;ve been able to overcome various IT challenges focus growing business.",
      name: "Scott Boland",
      rating_score: 4.5
    },
    {
      id: 4,
      rating: 99,
      text: "The professionalism and technical expertise of TechXen&apos;s team is unmatched. They delivered our project on time and exceeded our expectations in every way. Their attention to detail and commitment to quality is remarkable.",
      name: "Sarah Mitchell",
      rating_score: 4.8
    },
    {
      id: 6,
      rating: 99,
      text: "TechXen&apos;s customer service is exceptional. They are always available when we need them and provide solutions that are both effective and cost-efficient. Their team truly understands our business needs.",
      name: "Emily Rodriguez",
      rating_score: 4.6
    }
  ];

  // Removed unused navigation handlers to satisfy no-unused-vars
  // const nextSlide = () => setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  // const prevSlide = () => setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);

  // Auto-slide every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [testimonials.length]);

  const nextSlide = () => setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  const prevSlide = () => setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);

  return (
    <section className="py-16">
      <div className="max-w-9xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
           <span className="text-[var(--foreground)] text-sm font-medium">Testimonials</span>
          <h2 className="text-4xl md:text-4xl font-bold text-[var(--foreground)] my-4">
            See What Our Customers Say
          </h2>
        </div>

        {/* Carousel Container */}
        <div className="relative overflow-hidden max-w-5xl mx-auto">
          {/* Sliding Flex Track */}
          <div
            className="flex transition-transform duration-700 ease-in-out"
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {testimonials.map((testimonial) => (
              <div key={testimonial.id} className="min-w-full px-4">
                <div className="rounded-3xl p-10 border border-[var(--foreground)]/20 backdrop-blur-sm shadow-2xl bg-[var(--background)]/60">
                  {/* Rating Badge */}
                  <div className="flex items-start justify-between mb-6">
                    <div className="w-12 h-12 bg-[var(--foreground)] rounded-full flex items-center justify-center shadow-lg">
                      <span className="text-[var(--background)] font-bold text-2xl">{testimonial.rating}</span>
                    </div>
                  </div>
                  {/* Testimonial Text */}
                  <p className="text-[var(--foreground)] text-xl md:text-2xl leading-relaxed font-light mb-8 opacity-80">
                    {testimonial.text}
                  </p>
                  {/* Author Info */}
                  <div className="flex items-center justify-between pt-3 border-t border-[var(--foreground)]/20">
                    <div>
                      <h4 className="text-[var(--foreground)] font-semibold text-2xl">{testimonial.name}</h4>
                    </div>
                    <div className="bg-[var(--background)]/40 px-3 py-2 rounded-xl border border-[var(--foreground)]/20">
                      <div className="text-[var(--foreground)] font-bold text-xl">({testimonial.rating_score})</div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
