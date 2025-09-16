import Link from "next/link";

export function Footer() {
  return (
    <footer className="border-t border-border py-8 mt-12">
      <div className="mx-auto max-w-5xl px-4 text-sm text-muted flex flex-col sm:flex-row items-center justify-between gap-4">
        <p>© {new Date().getFullYear()} Armaan Jhajj</p>
        <nav className="flex items-center gap-4">
          <Link href="/privacy" className="hover:text-foreground">Privacy</Link>
          <Link href="/terms" className="hover:text-foreground">Terms</Link>
          <a href="https://github.com/armaanjhajj" target="_blank" rel="noreferrer" className="hover:text-foreground">GitHub</a>
          <a href="https://www.linkedin.com/in/armaanjhajj" target="_blank" rel="noreferrer" className="hover:text-foreground">LinkedIn</a>
        </nav>
      </div>
    </footer>
  );
}


