import Image from "next/image";
import { ArrowRight, MapPin, MessageCircle } from "lucide-react";

const STATS = [
  { label: "working projects and companies", value: "7" },
  { label: "founded ventures", value: "2" },
  { label: "base", value: "Accra" },
];

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden border-b border-line">
      <div className="mx-auto grid max-w-6xl gap-12 px-6 py-16 md:grid-cols-[1.05fr_0.95fr] md:py-24">
        <div className="flex flex-col justify-center">
          <p className="font-mono text-sm text-amber">Komi Julio</p>
          <h1 className="mt-4 font-display text-5xl font-semibold leading-[1.04] text-paper md:text-7xl">
            Entrepreneur and full-stack developer building useful digital
            companies.
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted">
            I am the founder of <span className="text-paper">MJ Portal</span>{" "}
            and <span className="text-paper">AfriConnect GH</span>, based in
            Accra, Ghana. I build software products, business platforms, and
            operational systems that help people work faster, sell better, and
            manage real-world processes with confidence.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="#work"
              className="focus-ring inline-flex items-center gap-2 rounded-sm bg-amber px-6 py-3 font-mono text-sm font-medium text-ink transition-transform hover:-translate-y-0.5"
            >
              view portfolio <ArrowRight size={16} />
            </a>
            <a
              href="https://wa.me/233200782852"
              target="_blank"
              rel="noopener noreferrer"
              className="focus-ring inline-flex items-center gap-2 rounded-sm border border-line px-6 py-3 font-mono text-sm text-paper transition-colors hover:border-amber hover:text-amber"
            >
              <MessageCircle size={16} /> WhatsApp me
            </a>
          </div>

          <div className="mt-8 flex items-center gap-2 font-mono text-sm text-muted">
            <MapPin size={16} className="text-amber" />
            Accra, Ghana
          </div>
        </div>

        <div className="grid gap-4">
          <div className="relative overflow-hidden rounded-md border border-line bg-panel">
            <Image
              src="/images/komi-portrait-car.jpeg"
              alt="Komi Julio in a black suit"
              width={600}
              height={760}
              priority
              className="aspect-[4/5] w-full object-cover"
            />
          </div>

          <div className="grid grid-cols-3 gap-3">
            {STATS.map((stat) => (
              <div key={stat.label} className="border-l border-line pl-4">
                <p className="font-display text-3xl font-semibold text-paper">
                  {stat.value}
                </p>
                <p className="mt-1 text-xs leading-tight text-muted">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
