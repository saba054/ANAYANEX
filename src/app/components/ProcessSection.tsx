import Image from 'next/image';

export default function ProcessSection() {
  const processes = [
    {
      title: "Cybersecurity & Compliance",
      description: "With the solution blueprint in hand, our team will begin the implementation and integration process solution.",
      image: "/assets/images/work2-img3.webp",
      icon: "🔒"
    },
    {
      title: "Testing & Quality Assurance", 
      description: "Before deployment, we conduct rigorous testing and quality assurance checks to ensure that your solution meets.",
      image: "/assets/images/work2-img4.webp",
      icon: "🧪"
    },
    {
      title: "Deployment & Training",
      description: "Once testing is complete and your solution is ready to go, we&apos;ll handle the deployment process with precision and care.",
      image: "/assets/images/work2-img5.webp", 
      icon: "🚀"
    }
  ];

  return (
    <section className=" px-20">
        {/* Process Cards Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {processes.map((process, index) => (
            <div 
              key={index}
              className="group relative rounded-2xl overflow-hidden border border-gray-700/50 hover:border-[var(--foreground)] transition-all duration-500 hover:transform hover:scale-105"
            >
              {/* Image Container */}
              <div className="relative h-64 overflow-hidden">
                <Image
                  src={process.image}
                  alt={process.title}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-700"
                />
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-[var(--foreground)] mb-3 group-hover:opacity-80 transition-colors duration-300">
                  {process.title}
                </h3>
                <p className="text-[var(--foreground)] text-sm leading-relaxed opacity-70">
                  {process.description}
                </p>
              </div>
            </div>
          ))}
        </div>
    </section>
  );
}