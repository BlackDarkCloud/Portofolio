import { createClient } from "@/lib/supabase/server";
import ProjectCard from "./ProjectCard";

export default async function Projects() {
  const supabase = createClient();
  const { data: projects } = await supabase
    .from("projects")
    .select("*")
    .order("sort_order", { ascending: true })
    .order("created_at", { ascending: false });

  return (
    <section id="work" className="border-b border-line">
      <div className="mx-auto max-w-6xl px-6 py-20 md:py-28">
        <div className="flex items-end justify-between">
          <div>
            <p className="font-mono text-sm text-amber">01/work</p>
            <h2 className="mt-3 font-display text-3xl font-semibold text-paper md:text-4xl">
              Recent builds
            </h2>
          </div>
        </div>

        {!projects || projects.length === 0 ? (
          <div className="mt-12 rounded-md border border-dashed border-line p-12 text-center">
            <p className="font-mono text-sm text-muted">
              no projects yet — add your first build from{" "}
              <span className="text-amber">/admin</span>
            </p>
          </div>
        ) : (
          <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {projects.map((project, i) => (
              <ProjectCard key={project.id} project={project} index={i} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
