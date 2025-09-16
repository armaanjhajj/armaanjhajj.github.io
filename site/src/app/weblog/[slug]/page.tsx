import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";
import { MDXRemote } from "next-mdx-remote/rsc";
import rehypeSlug from "rehype-slug";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import remarkGfm from "remark-gfm";
import { mdxComponents, Prose } from "@/components/mdx";

const postsDir = path.join(process.cwd(), "src", "content", "blog");

export async function generateStaticParams() {
  const files = fs.existsSync(postsDir) ? fs.readdirSync(postsDir) : [];
  return files
    .filter((f) => f.endsWith(".mdx"))
    .map((f) => ({ slug: f.replace(/\.mdx$/, "") }));
}

export async function generateMetadata({ params }: { params: { slug: string } }) {
  const full = path.join(postsDir, `${params.slug}.mdx`);
  const raw = fs.readFileSync(full, "utf8");
  const { data } = matter(raw);
  return {
    title: data.title || params.slug,
    description: data.description || "",
  };
}

export default async function PostPage({ params }: { params: { slug: string } }) {
  const full = path.join(postsDir, `${params.slug}.mdx`);
  const raw = fs.readFileSync(full, "utf8");
  const { content, data } = matter(raw);

  return (
    <div className="mx-auto max-w-3xl px-4 py-12">
      <h1 className="font-display text-3xl sm:text-4xl font-semibold">{data.title}</h1>
      {data.description ? <p className="mt-2 text-muted">{data.description}</p> : null}
      <div className="mt-8">
        <Prose>
          <MDXRemote
            source={content}
            components={mdxComponents}
            options={{ mdxOptions: { remarkPlugins: [remarkGfm], rehypePlugins: [rehypeSlug, [rehypeAutolinkHeadings, { behavior: "wrap" }]] } }}
          />
        </Prose>
      </div>
    </div>
  );
}


