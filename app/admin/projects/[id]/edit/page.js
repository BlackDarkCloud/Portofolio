import { notFound } from "next/navigation";
import { createClient } from "@/lib/supabase/server";
import AdminShell from "@/components/AdminShell";
import ProjectForm from "@/components/ProjectForm";

export default async function EditProjectPage({ params }) {
  const supabase = createClient();
  const { data: project } = await supabase
    .from("projects")
    .select("*")
    .eq("id", params.id)
    .single();

  if (!project) notFound();

  return (
    <AdminShell title={`projects/${project.title}`}>
      <h1 className="font-display text-2xl font-semibold text-paper">
        Edit project
      </h1>
      <div className="mt-8 max-w-2xl">
        <ProjectForm initialProject={project} />
      </div>
    </AdminShell>
  );
}
