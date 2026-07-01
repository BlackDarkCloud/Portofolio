const GROUPS = [
  {
    label: "business and product",
    items: ["Entrepreneurship", "Product strategy", "Brand building", "Operations"],
  },
  {
    label: "full-stack development",
    items: ["React", "Next.js", "Node.js", "Supabase", "MySQL", "REST APIs"],
  },
  {
    label: "platforms and systems",
    items: ["Admin dashboards", "School portals", "Business websites", "Automation"],
  },
  {
    label: "payments and communication",
    items: ["Mobile money flows", "Paystack", "SMS systems", "Client support"],
  },
  {
    label: "delivery",
    items: ["Git/GitHub", "Vercel", "Deployment", "Maintenance"],
  },
];

export default function Skills() {
  return (
    <section id="stack" className="border-b border-line">
      <div className="mx-auto max-w-6xl px-6 py-20 md:py-28">
        <p className="font-mono text-sm text-amber">03/stack</p>
        <h2 className="mt-3 font-display text-3xl font-semibold text-paper md:text-4xl">
          What I bring into a project
        </h2>

        <div className="mt-12 grid gap-8 md:grid-cols-2">
          {GROUPS.map((group) => (
            <div key={group.label} className="border-l border-line pl-5">
              <p className="font-mono text-xs uppercase tracking-wider text-muted">
                {group.label}
              </p>
              <div className="mt-3 flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <span
                    key={item}
                    className="rounded-sm border border-line bg-panel px-3 py-1.5 font-mono text-sm text-paper"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
