"use client";

import { useRouter } from "next/navigation";
import { createClient } from "@/lib/supabase/client";
import { LogOut } from "lucide-react";

export default function AdminShell({ children, title }) {
  const router = useRouter();

  async function handleSignOut() {
    const supabase = createClient();
    await supabase.auth.signOut();
    router.push("/admin/login");
    router.refresh();
  }

  return (
    <div className="min-h-screen">
      <header className="border-b border-line bg-panel">
        <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
          <a href="/admin" className="font-mono text-sm text-paper">
            <span className="text-amber">~/admin</span> /{title}
          </a>
          <div className="flex items-center gap-4 font-mono text-sm">
            <a href="/" className="text-muted hover:text-amber">
              view site
            </a>
            <button
              onClick={handleSignOut}
              className="focus-ring inline-flex items-center gap-1 text-muted hover:text-amber"
            >
              <LogOut size={14} /> sign out
            </button>
          </div>
        </div>
      </header>
      <main className="mx-auto max-w-5xl px-6 py-10">{children}</main>
    </div>
  );
}
