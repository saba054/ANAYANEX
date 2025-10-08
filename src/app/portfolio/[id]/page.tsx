import Navigation from "../../components/Navigation";
import Image from "next/image";
import FooterSection from "../../components/FooterSection";
import { headers } from "next/headers";

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

async function fetchProject(id: string) {
  // Build absolute base URL from request headers
  const h = await headers();
  const host = h.get("host");
  const protocol = process.env.NODE_ENV === "development" ? "http" : "https";
  const baseUrl =
    (process.env.NEXT_PUBLIC_SITE_URL as string) ||
    (host ? `${protocol}://${host}` : "http://localhost:3000");

  const res = await fetch(`${baseUrl}/api/portfolio?id=${id}`, { cache: "no-store" });
  if (!res.ok) throw new Error("Failed to load project");
  return res.json();
}

export default async function ProjectDetailsPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const json = await fetchProject(id);

  if (!json?.ok || !json?.data) {
    return (
      <div className="min-h-screen">
        <Navigation />
        <div className="pt-20 max-w-3xl mx-auto px-6">
          <p className="text-red-500">Project not found.</p>
        </div>
      </div>
    );
  }

  const project = json.data;

  return (
    <div className="min-h-screen pt-20">
      <Navigation />
      <div className="pt-20 max-w-5xl mx-auto px-6 py-10">
        <div className="grid md:grid-cols-2 gap-8">
          <div className="relative w-full h-80 rounded-xl overflow-hidden">
            <Image src={project.image} alt={project.title} fill className="object-cover" />
          </div>
          <div>
            <h1 className="text-3xl font-bold text-[var(--foreground)] mb-3">{project.title}</h1>
            <p className="text-[var(--foreground)]/80 mb-4">
              <span className="font-semibold">Category:</span> {project.category} • <span className="font-semibold">Year:</span> {project.year}
            </p>
            <p className="text-[var(--foreground)] leading-relaxed mb-6">{project.description}</p>
            <div className="flex flex-wrap gap-2 mb-6">
              {project.technologies.map((tech, index) => (
                <span key={index} className="bg-[var(--background)]/40 border border-[var(--foreground)]/20 text-[var(--foreground)] opacity-80 px-2 py-1 rounded text-xs">
                  {tech}
                </span>
              ))}
            </div>
            <p className="text-[var(--foreground)]/80 mb-2"><span className="font-semibold">Client:</span> {project.client}</p>
            <p className="text-[var(--foreground)]/80"><span className="font-semibold">Duration:</span> {project.duration}</p>
          </div>
        </div>
      </div>
      <div className="pt-20">
        <FooterSection />
      </div>
    </div>
  );
}