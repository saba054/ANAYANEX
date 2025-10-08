interface ServiceCardProps {
  icon: string;
  title: string;
  description: string;
  bgColor: string;
  textColor: string;
}

export default function ServiceCard({ icon, title, description, bgColor, textColor }: ServiceCardProps) {
  return (
    <div className="relative rounded-2xl p-8 backdrop-blur-sm group hover:scale-105 
     border border-[var(--foreground)]/20 hover:border-[var(--foreground)] transition-colors cursor-pointer">

      {/* Arrow in top-right */}
      <span className="absolute top-4 right-4 text-[var(--foreground)] font-semibold opacity-0 translate-x-0 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-1">
        ↗
      </span>

      <div className="w-16 h-16 bg-[var(--foreground)] rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
        <span className="text-[var(--background)] font-bold text-xl">{icon}</span>
      </div>

      <h3 className="text-[var(--foreground)] text-xl font-bold mb-4">{title}</h3>
      <p className="text-[var(--foreground)] opacity-80 mb-6">{description}</p>
    </div>
  );
}