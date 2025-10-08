"use client";
import Image from "next/image";
import Navigation from "../components/Navigation";
import { useState, useEffect } from "react";

export default function PortfolioPage() {
  type Project = {
    id: number;
    title: string;
    category: string;
    description: string;
    image: string;
    technologies: string[];
    client: string;
    duration: string;
    year: string;
  };

  const [selectedCategory, setSelectedCategory] = useState("all");
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    (async () => {
      try {
        const res = await fetch("/api/portfolio", { cache: "no-store" });
        const json = await res.json();
        if (!res.ok || !json.ok) throw new Error(json.error || "Failed to load projects");
        setProjects(json.data || []);
      } catch (err: any) {
        setError(err?.message || "Failed to load projects");
      } finally {
        setLoading(false);
      }
    })();
  }, []);

  // Derive categories dynamically from data
  const dynamicCategories = [
    { id: "all", name: "All Projects" },
    ...Array.from(new Set(projects.map((p) => p.category))).map((cat) => ({
      id: cat,
      name: cat.charAt(0).toUpperCase() + cat.slice(1).replace(/-/g, " "),
    })),
  ];

  // Helper to safely get category display name
  const getCategoryName = (categoryId: string) => {
    const name =
      dynamicCategories.find((cat) => cat.id === categoryId)?.name || categoryId;
    return name
      .replace(" Development", "")
      .replace(" Apps", "")
      .replace(" Solutions", "");
  };
  const filteredProjects =
    selectedCategory === "all"
      ? projects
      : projects.filter((p) => p.category === selectedCategory);

  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Banner (after navbar) */}
      <div className="pt-20">
        <div className="relative max-w-7xl mx-auto px-6 py-20">
          {/* Background Image with Rounded & Shadow */}
          <div className="absolute inset-0 -z-10 flex justify-center">
            <div className="relative w-full h-full max-w-7xl rounded-3xl shadow-2xl overflow-hidden">
              <Image
                src="/assets/images/a6ddef33ce775e7b6053c6351e92a982.jpg"
                alt="Portfolio Background"
                fill
                className="object-cover opacity-20"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-br from-[var(--background)]/80 via-[var(--background)]/60 to-[var(--background)]/80"></div>
            </div>
            {/* Decorative Elements */}
            <div className="absolute top-20 left-10 w-32 h-32 bg-[var(--foreground)]/10 rounded-full blur-xl"></div>
            <div className="absolute bottom-20 right-10 w-40 h-40 bg-[var(--foreground)]/10 rounded-full blur-xl"></div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-60 h-60 bg-[var(--foreground)]/10 rounded-full blur-2xl"></div>
          </div>
          {/* Hero Text */}
          <div className="text-center relative z-10">
            <p className="text-[var(--foreground)] font-semibold text-base mb-4">
              Our Portfolio
            </p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[var(--foreground)] leading-tight mb-6">
              Showcasing Our
              <br />
              <span className="text-[var(--foreground)]">
                Digital Excellence
              </span>
            </h1>
            <p className="text-[var(--foreground)] text-lg leading-relaxed mb-8 max-w-3xl mx-auto opacity-80">
              Explore our collection of successful projects that demonstrate our
              expertise in delivering innovative technology solutions across
              various industries and platforms.
            </p>
          </div>
        </div>
      </div>

      {/* Category Filter */}
      <div className="max-w-7xl mx-auto px-6 py-10">
        <div className="flex flex-wrap justify-center gap-4">
          {dynamicCategories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={
                selectedCategory === cat.id
                  ? "bg-[var(--foreground)] text-[var(--background)] px-6 py-2 rounded-full font-semibold"
                  : "border border-[var(--foreground)] text-[var(--foreground)] bg-transparent px-6 py-2 rounded-full font-semibold hover:bg-[var(--foreground)] hover:text-[var(--background)] transition-colors"
              }
            >
              {cat.name}
            </button>
          ))}
        </div>
      </div>

      {/* Projects Grid */}
      <div className="max-w-7xl mx-auto px-6 py-12">
        {loading && (
          <div className="text-center text-[var(--foreground)] opacity-80">Loading projects…</div>
        )}
        {error && (
          <div className="text-center text-red-500">Error: {error}</div>
        )}
        {!loading && !error && (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project) => (
              <div key={project.id} className="group h-full flex flex-col">
                {/* Project Image */}
                <div className="relative h-64 overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[var(--background)]/60 via-transparent to-transparent"></div>
                  {/* Category Badge */}
                  <div className="absolute top-4 left-4">
                    <span className="bg-[var(--foreground)] backdrop-blur-md text-[var(--background)] px-3 py-1 rounded-full text-sm font-semibold">
                      {getCategoryName(project.category)}
                    </span>
                  </div>
                  {/* Year Badge */}
                  <div className="absolute top-4 right-4">
                    <span className="bg-[var(--foreground)]/80 backdrop-blur-md text-[var(--background)] px-3 py-1 rounded-full text-sm font-semibold">
                      {project.year}
                    </span>
                  </div>
                </div>
                {/* Project Content */}
                <div className="p-6 flex flex-col h-full">
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="text-xl font-bold text-[var(--foreground)] transition-colors">
                      {project.title}
                    </h3>
                  </div>
                  <p className="text-[var(--foreground)] text-sm leading-relaxed mb-4 opacity-80 line-clamp-3">
                    {project.description}
                  </p>
                  {/* Show “… Read more” when content likely exceeds clamp */}
                  {(project.description?.length ?? 0) > 160 && (
                    <a
                      href={`/portfolio/${project.id}`}
                      className="text-[var(--foreground)]/80 text-sm underline mb-4"
                    >
                      … Read more
                    </a>
                  )}
                  <div className="flex items-center justify-between text-sm text-[var(--foreground)] opacity-70 mb-4">
                    <span>Client: {project.client}</span>
                    <span>{project.duration}</span>
                  </div>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.slice(0, 3).map((tech, index) => (
                      <span
                        key={index}
                        className="bg-[var(--background)]/40 border border-[var(--foreground)]/20 text-[var(--foreground)] opacity-80 px-2 py-1 rounded text-xs"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 3 && (
                      <span className="bg-[var(--background)]/40 border border-[var(--foreground)]/20 text-[var(--foreground)] opacity-80 px-2 py-1 rounded text-xs">
                        +{project.technologies.length - 3} more
                      </span>
                    )}
                  </div>
                  <a
                    href={`/portfolio/${project.id}`}
                    className="mt-auto w-full text-center bg-[var(--foreground)] border border-[var(--foreground)]/30 text-[var(--background)] py-2 rounded-lg font-semibold hover:opacity-80 transition-all duration-300"
                  >
                    View Project Details
                  </a>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Stats Section */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="bg-[var(--background)]/60 backdrop-blur-sm border border-[var(--foreground)]/20 rounded-3xl p-12">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[var(--foreground)] mb-4">
              Project <span className="text-[var(--foreground)]">Success Metrics</span>
            </h2>
            <p className="text-[var(--foreground)] text-lg max-w-2xl mx-auto opacity-80">
              Our portfolio demonstrates consistent delivery of high-quality
              solutions
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <h3 className="text-3xl md:text-4xl font-bold text-[var(--foreground)] mb-2">500+</h3>
              <p className="text-[var(--foreground)] font-medium">Projects Completed</p>
            </div>
            <div className="text-center">
              <h3 className="text-3xl md:text-4xl font-bold text-[var(--foreground)] mb-2">98%</h3>
              <p className="text-[var(--foreground)] font-medium">Client Satisfaction</p>
            </div>
            <div className="text-center">
              <h3 className="text-3xl md:text-4xl font-bold text-[var(--foreground)] mb-2">250+</h3>
              <p className="text-[var(--foreground)] font-medium">Industries Served</p>
            </div>
            <div className="text-center">
              <h3 className="text-3xl md:text-4xl font-bold text-[var(--foreground)] mb-2">100%</h3>
              <p className="text-[var(--foreground)] font-medium">On-Time Delivery</p>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="bg-[var(--background)]/60 backdrop-blur-sm border border-[var(--foreground)]/20 rounded-3xl p-12 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-[var(--foreground)] mb-6">
            Ready to Start Your <span className="text-[var(--foreground)]">Next Project?</span>
          </h2>
          <p className="text-[var(--foreground)] text-lg mb-8 max-w-2xl mx-auto opacity-80">
            Let&apos;s discuss how we can bring your vision to life with our proven
            expertise and innovative approach.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <button className="bg-[var(--foreground)] text-[var(--background)] px-8 py-3 rounded-full font-semibold hover:opacity-80 transition-colors">
              Start Your Project
            </button>
            <button className="border border-[var(--foreground)] text-[var(--foreground)] px-8 py-3 rounded-full font-semibold hover:bg-[var(--foreground)] hover:text-[var(--background)] transition-colors">
              Contact Our Team
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
