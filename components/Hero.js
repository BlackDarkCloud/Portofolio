const STATS = [
  { label: "ventures shipped", value: "4" },
  { label: "years building", value: "5+" },
  { label: "stack", value: "JS/TS" },
];

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden border-b border-line">
      <div className="mx-auto grid max-w-6xl gap-12 px-6 py-20 md:grid-cols-[1.1fr_0.9fr] md:py-28">
        <div>
          <p className="font-mono text-sm text-amber">$ whoami</p>
          <h1 className="mt-4 font-display text-5xl font-semibold leading-[1.05] text-paper md:text-6xl">
            Quam Gbedjeha
          </h1>
          <p className="mt-3 font-display text-2xl text-muted md:text-3xl">
            Full-stack developer, <span className="text-amber">Ghana</span>
          </p>

          <p className="mt-6 max-w-md text-base leading-relaxed text-muted">
            I design and ship full-stack platforms end to end — storefronts,
            admin systems, payment flows, and the infrastructure behind them.
            Currently building for travel, retail, and game-server clients
            across West Africa.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="#work"
              className="focus-ring rounded-sm bg-amber px-6 py-3 font-mono text-sm font-medium text-ink transition-transform hover:-translate-y-0.5"
            >
              view work →
            </a>
            <a
              href="#contact"
              className="focus-ring rounded-sm border border-line px-6 py-3 font-mono text-sm text-paper transition-colors hover:border-amber hover:text-amber"
            >
              get in touch
            </a>
          </div>
        </div>

        <div className="self-start rounded-md border border-line bg-panel font-mono text-sm shadow-2xl shadow-black/40">
          <div className="flex items-center gap-2 border-b border-line px-4 py-3">
            <span className="h-2.5 w-2.5 rounded-full bg-amber-dim" />
            <span className="h-2.5 w-2.5 rounded-full bg-signal" />
            <span className="h-2.5 w-2.5 rounded-full bg-line" />
            <span className="ml-2 text-xs text-muted">build.log</span>
          </div>
          <div className="space-y-3 px-5 py-6 text-muted">
            <p><span className="text-amber">➜</span> initializing profile…</p>
            <p className="text-paper">role: full-stack developer</p>
            <p className="text-paper">based: Accra, Ghana</p>
            <p className="text-paper">focus: web, e-commerce, game backends</p>
            <p><span className="text-amber">✓</span> status: open to new builds</p>

            <div className="mt-6 grid grid-cols-3 gap-3 border-t border-line pt-5">
              {STATS.map((stat) => (
                <div key={stat.label}>
                  <p className="font-display text-2xl text-paper">{stat.value}</p>
                  <p className="mt-1 text-xs leading-tight text-muted">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
