import { Mail, Linkedin, Github } from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="border-b border-line">
      <div className="mx-auto max-w-6xl px-6 py-20 md:py-28">
        <p className="font-mono text-sm text-amber">04/contact</p>
        <h2 className="mt-3 max-w-2xl font-display text-3xl font-semibold leading-tight text-paper md:text-5xl">
          Have a build in mind? Let&rsquo;s talk it through.
        </h2>
        <p className="mt-5 max-w-md text-muted">
          Open to freelance projects, collaborations, and full-time roles.
          The fastest way to reach me is email.
        </p>

        <div className="mt-10 flex flex-wrap gap-4">
          <a
            href="mailto:gbedjehajulio15@gmail.com"
            className="focus-ring inline-flex items-center gap-2 rounded-sm bg-amber px-6 py-3 font-mono text-sm font-medium text-ink transition-transform hover:-translate-y-0.5"
          >
            <Mail size={16} /> gbedjehajulio15@gmail.com
          </a>
          <a
            href="https://github.com"
            className="focus-ring inline-flex items-center gap-2 rounded-sm border border-line px-6 py-3 font-mono text-sm text-paper hover:border-amber hover:text-amber"
          >
            <Github size={16} /> GitHub
          </a>
          <a
            href="https://linkedin.com"
            className="focus-ring inline-flex items-center gap-2 rounded-sm border border-line px-6 py-3 font-mono text-sm text-paper hover:border-amber hover:text-amber"
          >
            <Linkedin size={16} /> LinkedIn
          </a>
        </div>
      </div>
    </section>
  );
}
