import { createClient } from "@/lib/supabase/server";
import ProjectCard from "./ProjectCard";

const FEATURED_WORK = [
  {
    title: "MJ Portal",
    site: "https://mjportalgh.com",
    summary:
      "A cloud-based School Management System developed to digitize and simplify school administration. It helps schools manage student records, academic results, attendance, fees, and communication through a secure, user-friendly dashboard.",
  },
  {
    title: "B2B Company Limited",
    site: "https://b2boptimumsolutions.com",
    summary:
      "A multi-service technology and business solutions company specializing in graphic design, branding, digital marketing, large-format printing, IT solutions, and logistics services.",
  },
  {
    title: "AfriConnect GH",
    site: "https://afri-connect-gh.vercel.app/",
    summary:
      "A travel, relocation, and concierge service helping international visitors and newcomers navigate life in Ghana through tourism, accommodation, transfers, immigration support, business facilitation, and local guidance.",
  },
  {
    title: "Perfecto Nova Plus Ventures",
    site: "https://perfectonovaplus.com/",
    summary:
      "A business management platform built to streamline daily operations with digital record-keeping, sales management, inventory tools, customer records, and business reporting.",
  },
  {
    title: "Spenzmart",
    site: "https://spenzmart.com",
    summary:
      "A modern multi-vendor e-commerce platform connecting buyers and sellers with secure authentication, product catalog management, online payments, order tracking, reviews, and admin tools.",
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

        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {FEATURED_WORK.map((project) => (
            <article
              key={project.title}
              className="rounded-md border border-line bg-panel p-6 transition-colors hover:border-amber-dim"
            >
              <p className="font-display text-xl font-semibold text-paper">
                {project.title}
              </p>
              <p className="mt-3 text-sm leading-relaxed text-muted">
                {project.summary}
              </p>
              <a
                href={project.site}
                target="_blank"
                rel="noopener noreferrer"
                className="focus-ring mt-5 inline-block font-mono text-sm text-amber hover:underline"
              >
                visit site
              </a>
            </article>
          ))}
        </div>

        {projects && projects.length > 0 && (
          <div className="mt-8 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {projects.map((project, i) => (
              <ProjectCard key={project.id} project={project} index={i} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
