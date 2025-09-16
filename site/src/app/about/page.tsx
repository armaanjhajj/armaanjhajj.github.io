export const metadata = {
  title: "About",
};

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-12">
      <h1 className="font-display text-3xl sm:text-4xl font-semibold">About Me</h1>
      <p className="mt-4 text-muted">
        Rutgers student studying Computer Science, Data Science, and Chemistry (Pre-Med). EMT in training, founder of Moments, and a builder who loves design, research, and startups.
      </p>
      <div className="mt-8 space-y-6">
        <section>
          <h2 className="font-display text-xl font-semibold">Student</h2>
          <p className="mt-2 leading-relaxed">
            I study CS, Data Science, and Chemistry at Rutgers. I’m fascinated by systems thinking, human-centered product design, and the science behind how we care for people.
          </p>
        </section>
        <section>
          <h2 className="font-display text-xl font-semibold">EMT Journey</h2>
          <p className="mt-2 leading-relaxed">
            I’m progressing through EMT certification — mastering psychomotor skills, patient assessment, and real-world readiness while balancing academics and product work.
          </p>
        </section>
        <section>
          <h2 className="font-display text-xl font-semibold">Founder</h2>
          <p className="mt-2 leading-relaxed">
            I’m building <strong>Moments</strong>: a social app reimagining real-world connections. Shipping a campus launch in Fall 2025 with a focus on thoughtful UX, brand, and go-to-market.
          </p>
        </section>
        <section>
          <h2 className="font-display text-xl font-semibold">Mission</h2>
          <p className="mt-2 leading-relaxed">
            My goal is to bridge medicine, technology, and human connection — building tools that help people feel seen, supported, and connected.
          </p>
        </section>
      </div>
    </div>
  );
}


