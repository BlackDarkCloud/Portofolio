import { ArrowUpRight, Github } from "lucide-react";

export default function ProjectCard({ project, index }) {
  return (
    <article className="group overflow-hidden rounded-md border border-line bg-panel transition-colors hover:border-amber-dim">
      <div className="relative aspect-[16/10] overflow-hidden border-b border-line bg-ink">
        {project.image_url ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={project.image_url}
            alt={project.title}
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
        ) : (
          <div className="flex h-full items-center justify-center font-mono text-xs text-muted">
            no preview
          </div>
        )}
        <span className="absolute left-3 top-3 rounded-sm bg-ink/80 px-2 py-1 font-mono text-xs text-amber backdrop-blur">
          {String(index + 1).padStart(2, "0")}
        </span>
      </div>

      <div className="p-6">
        <h3 className="font-display text-xl font-semibold text-paper">
          {project.title}
        </h3>
        <p className="mt-2 text-sm leading-relaxed text-muted">
          {project.summary}
        </p>

        {project.tech_stack?.length > 0 && (
          <div className="mt-4 flex flex-wrap gap-2">
            {project.tech_stack.map((t) => (
              <span
                key={t}
                className="rounded-sm border border-line px-2 py-1 font-mono text-xs text-muted"
              >
                {t}
              </span>
            ))}
          </div>
        )}

        <div className="mt-5 flex gap-4 font-mono text-sm">
          {project.live_url && (
            <a
              href={project.live_url}
              target="_blank"
              rel="noopener noreferrer"
              className="focus-ring inline-flex items-center gap-1 text-amber hover:underline"
            >
              live <ArrowUpRight size={14} />
            </a>
          )}
          {project.repo_url && (
            <a
              href={project.repo_url}
              target="_blank"
              rel="noopener noreferrer"
              className="focus-ring inline-flex items-center gap-1 text-muted hover:text-paper"
            >
              <Github size={14} /> code
            </a>
          )}
        </div>
      </div>
    </article>
  );
}
