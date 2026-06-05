import projectNorton from "@/public/assets/project-norton.jpg";
import projectLumen from "@/public/assets/project-lumen.jpg";
import projectNorthwind from "@/public/assets/project-northwind.jpg";
import projectAtelier from "@/public/assets/project-atelier.jpg";
import { resolveMediaSrc } from "@/lib/media";

const PROJECTS = [
  { title: "Norton", image: projectNorton, text: "Creative campaign with precision UX." },
  { title: "Lumen", image: projectLumen, text: "Modern product design for scale." },
  { title: "Northwind", image: projectNorthwind, text: "High-converting brand experience." },
  { title: "Atelier", image: projectAtelier, text: "Luxury digital storytelling." },
];

export default function ProjectsStack() {
  return (
    <section className="relative pt-20 pb-32 overflow-hidden">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-8 lg:grid-cols-[repeat(3,minmax(0,1fr))]">
          {PROJECTS.map((project) => (
            <article
              key={project.title}
              className="group overflow-hidden rounded-[2rem] border border-border bg-card p-6 transition-all hover:-translate-y-1"
            >
              <img
                src={resolveMediaSrc(project.image)}
                alt={project.title}
                className="h-72 w-full object-cover rounded-[1.5rem]"
              />
              <div className="mt-6">
                <h3 className="text-2xl font-semibold">{project.title}</h3>
                <p className="mt-3 text-sm leading-6 text-muted-foreground">
                  {project.text}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
