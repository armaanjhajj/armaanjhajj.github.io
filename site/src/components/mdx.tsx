import type { MDXComponents } from "mdx/types";
import Link from "next/link";

export const mdxComponents: MDXComponents = {
  a: (props) => {
    const href = String(props.href || "");
    if (href.startsWith("http")) {
      return <a {...props} target="_blank" rel="noreferrer" />;
    }
    return <Link href={href}>{props.children}</Link>;
  },
};

export function Prose({ children }: { children: React.ReactNode }) {
  return <article className="prose prose-zinc dark:prose-invert max-w-none">{children}</article>;
}


