"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";

const LINKS = [
  { href: "#work", label: "work" },
  { href: "#about", label: "about" },
  { href: "#stack", label: "stack" },
  { href: "#contact", label: "contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-line bg-ink/90 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <a href="#top" className="flex items-center gap-2 font-mono text-sm">
          <span className="flex h-2.5 w-2.5 rounded-full bg-amber" aria-hidden="true" />
          <span className="text-paper">~/quam</span>
        </a>

        <nav className="hidden items-center gap-8 font-mono text-sm text-muted md:flex">
          {LINKS.map((link, i) => (
            <a
              key={link.href}
              href={link.href}
              className="focus-ring transition-colors hover:text-amber"
            >
              <span className="text-amber-dim">0{i + 1}</span>/{link.label}
            </a>
          ))}
        </nav>

        <a
          href="#contact"
          className="focus-ring hidden rounded-sm border border-amber px-4 py-2 font-mono text-sm text-amber transition-colors hover:bg-amber hover:text-ink md:inline-block"
        >
          let&rsquo;s build
        </a>

        <button
          className="focus-ring text-paper md:hidden"
          onClick={() => setOpen(!open)}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {open && (
        <nav className="border-t border-line bg-ink px-6 py-4 font-mono text-sm md:hidden">
          {LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="block py-3 text-muted hover:text-amber"
              onClick={() => setOpen(false)}
            >
              {link.label}
            </a>
          ))}
          <a href="#contact" className="mt-2 block text-amber" onClick={() => setOpen(false)}>
            let&rsquo;s build →
          </a>
        </nav>
      )}
    </header>
  );
}
