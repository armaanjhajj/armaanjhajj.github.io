"use client";
import Link from "next/link";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <section className="relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(900px_400px_at_80%_-10%,_rgba(37,99,235,0.15),_transparent)]" />
      <div className="mx-auto max-w-5xl px-4 py-20 sm:py-28">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="font-display text-4xl sm:text-6xl font-bold tracking-tight"
        >
          Armaan Jhajj
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mt-3 text-lg text-muted"
        >
          Student • Founder • EMT • Developer
        </motion.p>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-6 max-w-2xl text-balance text-base sm:text-lg leading-relaxed"
        >
          I build products at the intersection of medicine, technology, and human
          connection. Currently designing and shipping Moments — a social app for
          real-world connection launching on campus in Fall 2025.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-8 flex flex-col sm:flex-row gap-3"
        >
          <Link
            href="/about"
            className="inline-flex items-center justify-center rounded-md bg-accent px-5 py-3 text-white font-medium shadow-sm transition-colors hover:opacity-90"
          >
            About Me
          </Link>
          <Link
            href="/projects"
            className="inline-flex items-center justify-center rounded-md border border-border px-5 py-3 font-medium hover:bg-foreground/5"
          >
            Projects
          </Link>
          <Link
            href="/weblog"
            className="inline-flex items-center justify-center rounded-md border border-border px-5 py-3 font-medium hover:bg-foreground/5"
          >
            Blog
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
