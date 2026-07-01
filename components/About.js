export default function About() {
  return (
    <section id="about" className="border-b border-line">
      <div className="mx-auto max-w-6xl px-6 py-20 md:py-28">
        <p className="font-mono text-sm text-amber">02/about</p>
        <h2 className="mt-3 max-w-2xl font-display text-3xl font-semibold leading-tight text-paper md:text-4xl">
          I build the systems businesses run on, not just the screens people see.
        </h2>

        <div className="mt-12 grid gap-10 md:grid-cols-2">
          <p className="text-base leading-relaxed text-muted">
            I&rsquo;m a developer and student based in Ghana, working across
            the full stack — from React and Next.js interfaces down to
            database design, payments, and deployment. I&rsquo;ve built
            booking and money-transfer platforms, e-commerce stores with
            local payment integrations, and the backend logic that keeps
            multiplayer game servers running for thousands of players.
          </p>
          <p className="text-base leading-relaxed text-muted">
            What stays consistent across projects is the goal: software that
            real businesses can depend on. That means clean admin tools,
            sensible data models, and interfaces that don&rsquo;t need a
            manual. I care as much about what happens after launch — the
            edits, the new content, the next feature — as I do about the
            first deploy.
          </p>
        </div>
      </div>
    </section>
  );
}
