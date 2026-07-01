import Image from "next/image";

export default function About() {
  return (
    <section id="about" className="border-b border-line">
      <div className="mx-auto max-w-6xl px-6 py-20 md:py-28">
        <p className="font-mono text-sm text-amber">02/about</p>
        <div className="mt-3 grid gap-12 md:grid-cols-[0.95fr_1.05fr]">
          <div>
            <h2 className="font-display text-3xl font-semibold leading-tight text-paper md:text-5xl">
              I turn ideas into real products, brands, and working systems.
            </h2>
            <p className="mt-6 text-base leading-relaxed text-muted">
              My work sits at the meeting point of business, technology, and
              execution. As an entrepreneur and developer, I care about more
              than writing code: I care about whether the product solves a
              real problem, earns trust, and can keep growing after launch.
            </p>
            <p className="mt-5 text-base leading-relaxed text-muted">
              Through MJ Portal, AfriConnect GH, and other client projects, I
              have worked on seven fully working projects and companies across
              education, communication, business operations, and web platforms.
              I bring strategy, design sense, technical execution, and founder
              energy into every build.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            <div className="relative overflow-hidden rounded-md border border-line bg-panel sm:mt-12">
              <Image
                src="/images/komi-office.jpeg"
                alt="Komi Julio in a professional office setting"
                width={760}
                height={500}
                className="h-full min-h-72 w-full object-cover"
              />
            </div>
            <div className="relative overflow-hidden rounded-md border border-line bg-panel">
              <Image
                src="/images/komi-outdoor.jpeg"
                alt="Komi Julio outdoors in Accra"
                width={600}
                height={760}
                className="h-full min-h-72 w-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
