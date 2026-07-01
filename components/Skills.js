const GROUPS = [
  {
    label: "frontend",
    items: ["React", "Next.js", "Tailwind CSS", "TypeScript"],
  },
  {
    label: "backend",
    items: ["Node.js", "Express", "Supabase", "MySQL", "REST APIs"],
  },
  {
    label: "payments & comms",
    items: ["Paystack", "Arkesel SMS", "Stripe"],
  },
  {
    label: "game dev",
    items: ["Unity", "C#", "PAWN (SA-MP/CRMP)", "Node.js bots"],
  },
  {
    label: "tooling",
    items: ["Git/GitHub", "Vercel", "Docker", "Figma"],
  },
];

export default function Skills() {
  return (
    <section id="stack" className="border-b border-line">
      <div className="mx-auto max-w-6xl px-6 py-20 md:py-28">
        <p className="font-mono text-sm text-amber">03/stack</p>
        <h2 className="mt-3 font-display text-3xl font-semibold text-paper md:text-4xl">
          Tools I reach for
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
