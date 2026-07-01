"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { createClient } from "@/lib/supabase/client";
import { Trash2 } from "lucide-react";

export default function ProjectForm({ initialProject }) {
  const router = useRouter();
  const isEditing = Boolean(initialProject);

  const [title, setTitle] = useState(initialProject?.title || "");
  const [summary, setSummary] = useState(initialProject?.summary || "");
  const [description, setDescription] = useState(initialProject?.description || "");
  const [techStack, setTechStack] = useState(
    initialProject?.tech_stack?.join(", ") || ""
  );
  const [liveUrl, setLiveUrl] = useState(initialProject?.live_url || "");
  const [repoUrl, setRepoUrl] = useState(initialProject?.repo_url || "");
  const [featured, setFeatured] = useState(initialProject?.featured || false);
  const [sortOrder, setSortOrder] = useState(initialProject?.sort_order ?? 0);
  const [imageUrl, setImageUrl] = useState(initialProject?.image_url || "");
  const [imageFile, setImageFile] = useState(null);
  const [saving, setSaving] = useState(false);
  const [deleting, setDeleting] = useState(false);
  const [error, setError] = useState("");

  async function uploadImage(supabase) {
    if (!imageFile) return imageUrl;

    const ext = imageFile.name.split(".").pop();
    const path = `${Date.now()}-${Math.random().toString(36).slice(2)}.${ext}`;

    const { error: uploadError } = await supabase.storage
      .from("project-images")
      .upload(path, imageFile);

    if (uploadError) throw uploadError;

    const { data } = supabase.storage.from("project-images").getPublicUrl(path);
    return data.publicUrl;
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setError("");
    setSaving(true);

    try {
      const supabase = createClient();
      const finalImageUrl = await uploadImage(supabase);

      const payload = {
        title,
        summary,
        description,
        tech_stack: techStack
          .split(",")
          .map((t) => t.trim())
          .filter(Boolean),
        live_url: liveUrl || null,
        repo_url: repoUrl || null,
        featured,
        sort_order: Number(sortOrder) || 0,
        image_url: finalImageUrl || null,
      };

      if (isEditing) {
        const { error: updateError } = await supabase
          .from("projects")
          .update(payload)
          .eq("id", initialProject.id);
        if (updateError) throw updateError;
      } else {
        const { error: insertError } = await supabase
          .from("projects")
          .insert(payload);
        if (insertError) throw insertError;
      }

      router.push("/admin");
      router.refresh();
    } catch (err) {
      setError(err.message || "Something went wrong saving this project.");
    } finally {
      setSaving(false);
    }
  }

  async function handleDelete() {
    if (!confirm(`Delete "${initialProject.title}"? This can't be undone.`)) return;
    setDeleting(true);
    const supabase = createClient();
    const { error: deleteError } = await supabase
      .from("projects")
      .delete()
      .eq("id", initialProject.id);

    if (deleteError) {
      setError(deleteError.message);
      setDeleting(false);
      return;
    }

    router.push("/admin");
    router.refresh();
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <Field label="title">
        <input
          required
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="focus-ring w-full rounded-sm border border-line bg-ink px-3 py-2 text-paper"
        />
      </Field>

      <Field label="summary (one or two sentences, shown on the card)">
        <textarea
          required
          rows={2}
          value={summary}
          onChange={(e) => setSummary(e.target.value)}
          className="focus-ring w-full rounded-sm border border-line bg-ink px-3 py-2 text-paper"
        />
      </Field>

      <Field label="full description (optional, for a future project detail page)">
        <textarea
          rows={4}
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="focus-ring w-full rounded-sm border border-line bg-ink px-3 py-2 text-paper"
        />
      </Field>

      <Field label="tech stack (comma-separated)">
        <input
          value={techStack}
          onChange={(e) => setTechStack(e.target.value)}
          placeholder="React, Supabase, Tailwind CSS"
          className="focus-ring w-full rounded-sm border border-line bg-ink px-3 py-2 text-paper"
        />
      </Field>

      <div className="grid gap-6 md:grid-cols-2">
        <Field label="live URL">
          <input
            type="url"
            value={liveUrl}
            onChange={(e) => setLiveUrl(e.target.value)}
            className="focus-ring w-full rounded-sm border border-line bg-ink px-3 py-2 text-paper"
          />
        </Field>
        <Field label="repo URL">
          <input
            type="url"
            value={repoUrl}
            onChange={(e) => setRepoUrl(e.target.value)}
            className="focus-ring w-full rounded-sm border border-line bg-ink px-3 py-2 text-paper"
          />
        </Field>
      </div>

      <Field label="cover image">
        {imageUrl && !imageFile && (
          // eslint-disable-next-line @next/next/no-img-element
          <img src={imageUrl} alt="" className="mb-3 h-32 w-48 rounded-sm object-cover" />
        )}
        <input
          type="file"
          accept="image/*"
          onChange={(e) => setImageFile(e.target.files?.[0] || null)}
          className="focus-ring w-full font-mono text-sm text-muted"
        />
      </Field>

      <div className="grid gap-6 md:grid-cols-2">
        <Field label="sort order (lower shows first)">
          <input
            type="number"
            value={sortOrder}
            onChange={(e) => setSortOrder(e.target.value)}
            className="focus-ring w-full rounded-sm border border-line bg-ink px-3 py-2 text-paper"
          />
        </Field>
        <label className="flex items-center gap-2 self-end pb-2 font-mono text-sm text-muted">
          <input
            type="checkbox"
            checked={featured}
            onChange={(e) => setFeatured(e.target.checked)}
            className="focus-ring h-4 w-4"
          />
          featured project
        </label>
      </div>

      {error && (
        <p className="font-mono text-xs text-red-400" role="alert">
          {error}
        </p>
      )}

      <div className="flex items-center justify-between border-t border-line pt-6">
        <button
          type="submit"
          disabled={saving}
          className="focus-ring rounded-sm bg-amber px-6 py-2.5 font-mono text-sm font-medium text-ink disabled:opacity-60"
        >
          {saving ? "saving…" : isEditing ? "save changes" : "publish project"}
        </button>

        {isEditing && (
          <button
            type="button"
            onClick={handleDelete}
            disabled={deleting}
            className="focus-ring inline-flex items-center gap-1 font-mono text-sm text-muted hover:text-red-400 disabled:opacity-60"
          >
            <Trash2 size={14} /> {deleting ? "deleting…" : "delete project"}
          </button>
        )}
      </div>
    </form>
  );
}

function Field({ label, children }) {
  return (
    <label className="block">
      <span className="font-mono text-xs text-muted">{label}</span>
      <div className="mt-1">{children}</div>
    </label>
  );
}
