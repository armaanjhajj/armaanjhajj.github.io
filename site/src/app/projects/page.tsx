export const metadata = {
  title: "Projects",
};

function ProjectCard({ title, subtitle, children }: { title: string; subtitle?: string; children: React.ReactNode }) {
  return (
    <div className="rounded-xl border border-border p-6 hover:shadow-sm transition-shadow">
      <h3 className="font-display text-xl font-semibold">{title}</h3>
      {subtitle ? <p className="text-sm text-muted mt-1">{subtitle}</p> : null}
      <div className="mt-3 leading-relaxed text-sm sm:text-base">{children}</div>
    </div>
  );
}

export default function ProjectsPage() {
  return (
    <div className="mx-auto max-w-5xl px-4 py-12 space-y-8">
      <h1 className="font-display text-3xl sm:text-4xl font-semibold">Projects</h1>
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
        <ProjectCard title="Moments" subtitle="React, Tailwind, Supabase, Vercel">
          App for real in-person connections. Launching on campus Fall 2025. Focus on UX, brand, and go-to-market with leadership across design and engineering.
        </ProjectCard>
        <ProjectCard title="Jukebox" subtitle="Raspberry Pi, Spotify/Apple Music">
          Coin-operated, retro-modern product for cafes/diners. Hardware/software integration, enclosure design, and playful interaction.
        </ProjectCard>
        <ProjectCard title="Class Navigator (Idea)" subtitle="Concept, UX exploration">
          “Apple Maps for universities.” Help students find classrooms quickly. Early research and wireframing.
        </ProjectCard>
        <ProjectCard title="Series (Networking Assistant)" subtitle="AI + iMessage">
          AI-driven warm-intro platform leveraging SMS/iMessage to make networking more human and less transactional.
        </ProjectCard>
        <ProjectCard title="Portfolio Development" subtitle="React, Tailwind, Supabase, GitHub">
          Growth via Moments: frontend craft, full-stack patterns, product thinking, and shipping discipline.
        </ProjectCard>
      </div>
    </div>
  );
}


