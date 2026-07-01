import { Facebook, Instagram, Mail, MessageCircle } from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="border-b border-line">
      <div className="mx-auto max-w-6xl px-6 py-20 md:py-28">
        <p className="font-mono text-sm text-amber">04/contact</p>
        <h2 className="mt-3 max-w-2xl font-display text-3xl font-semibold leading-tight text-paper md:text-5xl">
          Have a project, partnership, or business idea? Let&rsquo;s talk.
        </h2>
        <p className="mt-5 max-w-md text-muted">
          I am open to client projects, partnerships, company collaborations,
          and serious conversations around digital products in Ghana and beyond.
        </p>

        <div className="mt-10 flex flex-wrap gap-4">
          <a
            href="https://wa.me/233200782852"
            target="_blank"
            rel="noopener noreferrer"
            className="focus-ring inline-flex items-center gap-2 rounded-sm bg-amber px-6 py-3 font-mono text-sm font-medium text-ink transition-transform hover:-translate-y-0.5"
          >
            <MessageCircle size={16} /> +233 200 782 852
          </a>
          <a
            href="mailto:gbedjehajulio15@gmail.com"
            className="focus-ring inline-flex items-center gap-2 rounded-sm border border-line px-6 py-3 font-mono text-sm text-paper hover:border-amber hover:text-amber"
          >
            <Mail size={16} /> gbedjehajulio15@gmail.com
          </a>
          <a
            href="https://instagram.com/komi_julio"
            target="_blank"
            rel="noopener noreferrer"
            className="focus-ring inline-flex items-center gap-2 rounded-sm border border-line px-6 py-3 font-mono text-sm text-paper hover:border-amber hover:text-amber"
          >
            <Instagram size={16} /> Instagram
          </a>
          <a
            href="https://facebook.com/komi_julio"
            target="_blank"
            rel="noopener noreferrer"
            className="focus-ring inline-flex items-center gap-2 rounded-sm border border-line px-6 py-3 font-mono text-sm text-paper hover:border-amber hover:text-amber"
          >
            <Facebook size={16} /> Facebook
          </a>
        </div>
      </div>
    </section>
  );
}
