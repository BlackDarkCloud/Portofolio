import { createClient } from "@/lib/supabase/server";
import ProjectCard from "./ProjectCard";

const FEATURED_WORK = [
  {
    title: "MJ Portal",
    summary:
      "Founder-led school and business portal work focused on digital administration, records, communication, and smoother operations.",
  },
  {
    title: "AfriConnect GH",
    summary:
      "A Ghana-based venture connecting people, services, and opportunities through practical digital solutions.",
  },
  {
    title: "Client Projects",
    summary:
      "A growing portfolio of websites, dashboards, and business tools built for real users, real clients, and real workflows.",
  },
];

export default async function Projects() {
  const hasSupabaseConfig =
    process.env.NEXT_PUBLIC_SUPABASE_URL &&
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

  let projects = null;

  if (hasSupabaseConfig) {
    const supabase = createClient();
    const { data } = await supabase
      .from("projects")
      .select("*")
      .order("sort_order", { ascending: true })
      .order("created_at", { ascending: false });

    projects = data;
  }

  return (
    <section id="work" className="border-b border-line">
      <div className="mx-auto max-w-6xl px-6 py-20 md:py-28">
        <div className="flex items-end justify-between">
          <div>
            <p className="font-mono text-sm text-amber">01/work</p>
            <h2 className="mt-3 font-display text-3xl font-semibold text-paper md:text-4xl">
              Selected work and ventures
            </h2>
            <p className="mt-4 max-w-2xl text-muted">
              Seven working projects and companies, including founder-led
              platforms and client-facing digital products.
            </p>
          </div>
        </div>

        {!projects || projects.length === 0 ? (
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {FEATURED_WORK.map((project) => (
              <article
                key={project.title}
                className="rounded-md border border-line bg-panel p-6"
              >
                <p className="font-display text-xl font-semibold text-paper">
                  {project.title}
                </p>
                <p className="mt-3 text-sm leading-relaxed text-muted">
                  {project.summary}
                </p>
              </article>
            ))}
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
