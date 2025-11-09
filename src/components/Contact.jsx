import { Mail, Github, Linkedin } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="relative bg-black py-24">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl font-bold text-white">Let’s build something together</h2>
        <p className="mt-3 text-white/70">Open to freelance, collaboration, and challenging full-time roles.</p>

        <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
          <a href="mailto:hello@rares.dev" className="inline-flex items-center gap-2 rounded-md bg-gradient-to-r from-cyan-500 to-blue-600 px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-cyan-500/20 hover:shadow-cyan-500/40 transition-shadow">
            <Mail className="h-4 w-4" /> Email Me
          </a>
          <a href="https://github.com/" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-md border border-white/15 bg-white/10 px-5 py-3 text-sm font-semibold text-white/90 hover:bg-white/20">
            <Github className="h-4 w-4" /> GitHub
          </a>
          <a href="https://www.linkedin.com/" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-md border border-white/15 bg-white/10 px-5 py-3 text-sm font-semibold text-white/90 hover:bg-white/20">
            <Linkedin className="h-4 w-4" /> LinkedIn
          </a>
        </div>

        <p className="mt-8 text-xs text-white/50">© {new Date().getFullYear()} RARES DEV. All rights reserved.</p>
      </div>
    </section>
  );
}
