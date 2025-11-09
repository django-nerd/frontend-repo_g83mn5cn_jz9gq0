import { Code2, Globe, Sparkles } from 'lucide-react';

const projects = [
  {
    title: 'Interactive 3D Portfolio',
    description: 'A playful 3D experience powered by Spline and React.',
    icon: Sparkles,
    link: '#',
    tags: ['React', 'Spline', 'Three.js'],
  },
  {
    title: 'SaaS Dashboard',
    description: 'Clean analytics dashboard with charts and dark mode.',
    icon: Globe,
    link: '#',
    tags: ['Next.js', 'Tailwind', 'Charts'],
  },
  {
    title: 'Dev Tools Kit',
    description: 'A set of utilities that speed up developer workflows.',
    icon: Code2,
    link: '#',
    tags: ['TypeScript', 'Vite', 'CLI'],
  },
];

export default function Projects() {
  return (
    <section id="projects" className="relative bg-black py-24">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(34,211,238,0.15),transparent_40%),radial-gradient(circle_at_80%_0%,rgba(59,130,246,0.15),transparent_35%)]" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-white">Featured Projects</h2>
          <p className="mt-2 text-white/70">A snapshot of things I built and loved crafting.</p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((p) => (
            <a
              key={p.title}
              href={p.link}
              className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur transition hover:translate-y-[-2px] hover:bg-white/[0.07]"
            >
              <div className="flex items-start justify-between">
                <div className="flex items-center gap-3">
                  <p.icon className="h-6 w-6 text-cyan-400" />
                  <h3 className="text-lg font-semibold text-white">{p.title}</h3>
                </div>
                <span className="text-xs text-white/60">→</span>
              </div>
              <p className="mt-3 text-sm text-white/70">{p.description}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {p.tags.map((t) => (
                  <span key={t} className="rounded-full border border-white/10 bg-white/5 px-2 py-0.5 text-xs text-white/70">{t}</span>
                ))}
              </div>
              <div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100" style={{background:"radial-gradient(600px circle at var(--x,50%) var(--y,50%), rgba(34,211,238,0.15), transparent 40%)"}} />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
