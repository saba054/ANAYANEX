import ServiceCard from './ServiceCard';

export default function ServicesSection() {
  const services = [
    {
      icon: "🔒",
      title: "Cybersecurity Service",
      description: "Protect your digital assets with our comprehensive cybersecurity solutions, ensuring your business stays secure against evolving threats.",
      bgColor: "bg-green-400",
      textColor: "text-black"
    },
    {
      icon: "💻",
      title: "Software Development",
      description: "Custom software solutions tailored to your business needs, from web applications to enterprise systems.",
      bgColor: "bg-blue-400",
      textColor: "text-white"
    },
    {
      icon: "☁️",
      title: "Cloud Solutions",
      description: "Migrate to the cloud with confidence. We provide scalable, secure cloud infrastructure solutions.",
      bgColor: "bg-purple-400",
      textColor: "text-white"
    },
    {
      icon: "🛡️",
      title: "Cyber Security",
      description: "Advanced security measures to protect your business from cyber threats and ensure data integrity.",
      bgColor: "bg-yellow-400",
      textColor: "text-black"
    },
    {
      icon: "📊",
      title: "Data Analytics",
      description: "Transform your data into actionable insights with our advanced analytics and business intelligence solutions.",
      bgColor: "bg-green-400",
      textColor: "text-black"
    },
    {
      icon: "🔧",
      title: "Managed IT Services",
      description: "Comprehensive IT management and support services to keep your business running smoothly 24/7.",
      bgColor: "bg-red-400",
      textColor: "text-white"
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 sm:py-16">
      <div className="text-center space-y-4 mb-16">
        <h2 className="text-4xl lg:text-4xl font-bold text-[var(--foreground)]">
          Empower Your Business with Our
          <br />
          Comprehensive IT Solutions
        </h2>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
        {services.map((service, index) => (
          <ServiceCard
            key={index}
            icon={service.icon}
            title={service.title}
            description={service.description}
            bgColor={service.bgColor}
            textColor={service.textColor}
          />
        ))}
      </div>
      
      <div className="text-center mt-12">
        <button className="bg-[var(--foreground)] text-[var(--background)] px-8 py-3 rounded-full font-semibold hover:opacity-80 transition-colors">
          View All Services ↗
        </button>
      </div>
    </div>
  );
}
