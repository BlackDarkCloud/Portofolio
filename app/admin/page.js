import { createClient } from "@/lib/supabase/server";
import AdminShell from "@/components/AdminShell";
import { Plus, Pencil } from "lucide-react";

export const dynamic = "force-dynamic";

export default async function AdminDashboard() {
  const supabase = createClient();
  const { data: projects } = await supabase
    .from("projects")
    .select("*")
    .order("sort_order", { ascending: true })
    .order("created_at", { ascending: false });

  return (
    <AdminShell title="projects">
      <div className="flex items-center justify-between">
        <h1 className="font-display text-2xl font-semibold text-paper">
          Projects
        </h1>
        <a
          href="/admin/projects/new"
          className="focus-ring inline-flex items-center gap-2 rounded-sm bg-amber px-4 py-2 font-mono text-sm font-medium text-ink"
        >
          <Plus size={16} /> add project
        </a>
      </div>

      {!projects || projects.length === 0 ? (
        <div className="mt-10 rounded-md border border-dashed border-line p-12 text-center">
          <p className="font-mono text-sm text-muted">
            nothing here yet — add your first project to publish it on your
            portfolio.
          </p>
        </div>
      ) : (
        <div className="mt-8 divide-y divide-line rounded-md border border-line bg-panel">
          {projects.map((project) => (
            <div
              key={project.id}
              className="flex items-center justify-between gap-4 px-5 py-4"
            >
              <div className="flex items-center gap-4">
                {project.image_url ? (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img
                    src={project.image_url}
                    alt=""
                    className="h-12 w-16 rounded-sm object-cover"
                  />
                ) : (
                  <div className="h-12 w-16 rounded-sm bg-ink" />
                )}
                <div>
                  <p className="font-display text-base font-semibold text-paper">
                    {project.title}
                  </p>
                  <p className="font-mono text-xs text-muted">
                    {project.featured ? "featured · " : ""}
                    {project.tech_stack?.slice(0, 3).join(", ")}
                  </p>
                </div>
              </div>
              <a
                href={`/admin/projects/${project.id}/edit`}
                className="focus-ring inline-flex items-center gap-1 rounded-sm border border-line px-3 py-1.5 font-mono text-xs text-muted hover:border-amber hover:text-amber"
              >
                <Pencil size={12} /> edit
              </a>
            </div>
          ))}
        </div>
      )}
    </AdminShell>
  );
}
