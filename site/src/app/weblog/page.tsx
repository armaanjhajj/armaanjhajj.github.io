export const metadata = {
  title: "Blog",
};

import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";
import Link from "next/link";

const postsDir = path.join(process.cwd(), "src", "content", "blog");

export default function BlogIndexPage() {
  const files = fs.existsSync(postsDir) ? fs.readdirSync(postsDir) : [];
  const posts = files
    .filter((f) => f.endsWith(".mdx"))
    .map((f) => {
      const slug = f.replace(/\.mdx$/, "");
      const raw = fs.readFileSync(path.join(postsDir, f), "utf8");
      const { data } = matter(raw);
      return { slug, title: data.title || slug, description: data.description || "" };
    });

  return (
    <div className="mx-auto max-w-3xl px-4 py-12">
      <h1 className="font-display text-3xl sm:text-4xl font-semibold">Weblog</h1>
      <p className="mt-4 text-muted">
        Essays and build logs. Topics include building Moments, Jukebox design, Class Navigator exploration, EMT training, MCAT study, and full‑stack growth.
      </p>
      <div className="mt-8 grid gap-4">
        {posts.map((p) => (
          <Link key={p.slug} href={`/weblog/${p.slug}`} className="block rounded-lg border border-border p-4 hover:bg-foreground/5">
            <h3 className="font-medium">{p.title}</h3>
            {p.description ? <p className="text-sm text-muted mt-1">{p.description}</p> : null}
          </Link>
        ))}
      </div>
    </div>
  );
}


