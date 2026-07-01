export default function Footer() {
  return (
    <footer className="mx-auto max-w-6xl px-6 py-8">
      <div className="flex flex-col items-center justify-between gap-3 font-mono text-xs text-muted md:flex-row">
        <p>© {new Date().getFullYear()} Quam Gbedjeha — built with Next.js &amp; Supabase</p>
        <a href="/admin" className="hover:text-amber">
          admin →
        </a>
      </div>
    </footer>
  );
}
