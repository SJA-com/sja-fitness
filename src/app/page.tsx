const services = [
  { name: "Yoga Studios", desc: "Serene yoga studios offering Hatha, Vinyasa, Ashtanga, and AI-guided personalized yoga sessions for all levels.", icon: "M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" },
  { name: "Aerobics Classes", desc: "High-energy aerobics, Zumba, and dance fitness classes with real-time performance tracking and heart rate monitoring.", icon: "M13 10V3L4 14h7v7l9-11h-7z" },
  { name: "Personal Training", desc: "One-on-one coaching with certified trainers, AI-generated workout plans, and progress analytics.", icon: "M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" },
  { name: "CrossFit", desc: "Intensive CrossFit programs with smart equipment, form analysis, and community-driven challenges.", icon: "M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064" },
  { name: "Swimming & Aquatics", desc: "Olympic-grade pools, aqua aerobics, swim coaching, and hydrotherapy sessions for all ages.", icon: "M14 10l-2 1m0 0l-2-1m2 1v2.5M20 7l-2 1m2-1l-2-1m2 1v2.5M14 4l-2-1-2 1M4 7l-2-1M4 7l2-1M4 7v2.5M12 21l-2-1m2 1l2-1m-2 1v-2.5M6 18l-2-1v-2.5M18 18l2-1v-2.5" },
  { name: "Nutrition & Diet", desc: "AI-powered meal planning, nutritionist consultations, and personalized diet programs for optimal health.", icon: "M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" },
];

export default function Home() {
  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-xl border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16">
          <div className="flex items-center gap-2">
            <img src="/sja-logo-circle.png" alt="SJA Logo" width="40" height="40" className="rounded-full" />
            <span className="text-lg font-bold text-accent">Fitness</span>
          </div>
          <a href="https://sja-thedude.github.io/sja-ecosystem" className="text-xs font-mono text-foreground/50 hover:text-emerald-400 transition-colors">sja.com</a>
        </div>
      </nav>
      <section className="relative min-h-screen flex items-center justify-center pt-16">
        <div className="absolute inset-0 pointer-events-none"><div className="absolute top-1/4 left-1/3 w-[500px] h-[500px] bg-emerald-500/5 rounded-full blur-3xl" /></div>
        <div className="relative text-center px-4 max-w-4xl mx-auto">
          <p className="text-emerald-400 text-sm font-mono mb-4 tracking-wider uppercase">Fitness & Wellness</p>
          <h1 className="text-5xl sm:text-7xl font-bold mb-6 leading-tight">Elevate Your<br /><span className="text-emerald-400">Wellness</span></h1>
          <p className="text-foreground/60 text-lg max-w-2xl mx-auto mb-8">From yoga studios to CrossFit arenas — AI-powered fitness tracking, expert coaching, and personalized wellness journeys.</p>
          <a href="#services" className="inline-block bg-emerald-500 hover:bg-emerald-600 text-white px-8 py-3 rounded-full font-medium transition-colors">Explore Programs</a>
        </div>
      </section>
      <section id="services" className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-emerald-400 text-sm font-mono mb-3 tracking-wider uppercase">Our Programs</p>
            <h2 className="text-4xl sm:text-5xl font-bold">Train <span className="text-emerald-400">Smarter</span></h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((s) => (
              <div key={s.name} className="rounded-xl bg-surface border border-border hover:border-emerald-400/30 p-6 transition-all hover:bg-surface-2">
                <div className="w-12 h-12 rounded-xl bg-emerald-400/10 flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={s.icon} /></svg>
                </div>
                <h3 className="text-lg font-bold mb-2">{s.name}</h3>
                <p className="text-foreground/60 text-sm leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="py-24 border-t border-border">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Our <span className="text-emerald-400">Mission</span></h2>
          <p className="text-foreground/60 leading-relaxed">SJA Fitness is dedicated to making health and wellness accessible, enjoyable, and effective for everyone. Through smart technology, expert guidance, and a supportive community, we help you become the best version of yourself.</p>
        </div>
      </section>
      <footer className="border-t border-border py-8">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <p className="text-foreground/40 text-sm">Part of the <a href="https://sja-thedude.github.io/sja-ecosystem" className="text-emerald-400 hover:underline">SJA Ecosystem</a></p>
          <p className="text-foreground/30 text-xs mt-2">&copy; 2025 SJA Fitness. All rights reserved.</p>
        </div>
      </footer>
    </>
  );
}
