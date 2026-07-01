import AdminShell from "@/components/AdminShell";
import ProjectForm from "@/components/ProjectForm";

export default function NewProjectPage() {
  return (
    <AdminShell title="projects/new">
      <h1 className="font-display text-2xl font-semibold text-paper">
        Add a project
      </h1>
      <div className="mt-8 max-w-2xl">
        <ProjectForm />
      </div>
    </AdminShell>
  );
}
