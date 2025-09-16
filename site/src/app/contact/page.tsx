export const metadata = {
  title: "Contact",
};

export default function ContactPage() {
  return (
    <div className="mx-auto max-w-md px-4 py-12">
      <h1 className="font-display text-3xl sm:text-4xl font-semibold">Get in touch</h1>
      <p className="mt-4 text-muted">I read every message.</p>
      <form
        action="https://formspree.io/f/mwkgbqdn"
        method="POST"
        className="mt-8 space-y-4"
      >
        <div>
          <label className="block text-sm mb-1">Name</label>
          <input name="name" required className="w-full rounded-md border border-border px-3 py-2 bg-transparent" />
        </div>
        <div>
          <label className="block text-sm mb-1">Email</label>
          <input name="email" type="email" required className="w-full rounded-md border border-border px-3 py-2 bg-transparent" />
        </div>
        <div>
          <label className="block text-sm mb-1">Message</label>
          <textarea name="message" rows={5} required className="w-full rounded-md border border-border px-3 py-2 bg-transparent" />
        </div>
        <button type="submit" className="w-full rounded-md bg-accent text-white py-2.5 font-medium">
          Send
        </button>
      </form>
      <div className="mt-6 text-sm">
        <a href="mailto:hello@armaanjhajj.com" className="hover:underline">hello@armaanjhajj.com</a>
      </div>
    </div>
  );
}


