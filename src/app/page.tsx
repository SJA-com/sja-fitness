"use client";

import { useState } from "react";

const services = [
  { name: "Workout Plans", desc: "AI-generated workout programmes tailored to your goals, fitness level, and schedule. Updated weekly as you progress.", icon: "M13 10V3L4 14h7v7l9-11h-7z" },
  { name: "Nutrition Guides", desc: "Personalised meal plans and macro tracking to fuel your training. Built around your dietary preferences and goals.", icon: "M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" },
  { name: "Online Coaching", desc: "1-on-1 virtual coaching with certified trainers. Video check-ins, form reviews, and real-time programme adjustments.", icon: "M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" },
  { name: "Fitness Challenges", desc: "Join community-driven challenges — 30-day shreds, step wars, strength milestones. Compete, track, and win.", icon: "M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064" },
  { name: "Progress Tracking", desc: "AI-powered analytics that track your lifts, cardio, body composition, and habits. See exactly how far you've come.", icon: "M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" },
  { name: "Community", desc: "Connect with thousands of members. Share wins, get accountability, and stay motivated with a tribe that trains together.", icon: "M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" },
];

const pricing = [
  {
    tier: "Free",
    price: "$0",
    period: "forever",
    desc: "Get started with the basics.",
    features: ["Basic workout templates", "Community access", "Progress dashboard", "Weekly fitness tips"],
    cta: "Join Free",
    highlighted: false,
  },
  {
    tier: "Pro",
    price: "$9.99",
    period: "/month",
    desc: "For those ready to level up.",
    features: ["AI-personalised workout plans", "Custom nutrition guides", "Advanced analytics", "Monthly challenges", "Priority support"],
    cta: "Go Pro",
    highlighted: true,
  },
  {
    tier: "Elite",
    price: "$19.99",
    period: "/month",
    desc: "The ultimate training experience.",
    features: ["Everything in Pro", "1-on-1 online coaching", "Weekly video check-ins", "Form review & feedback", "Exclusive challenges & rewards", "Early access to new features"],
    cta: "Go Elite",
    highlighted: false,
  },
];

export default function Home() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleWaitlist = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) setSubmitted(true);
  };

  return (
    <>
      {/* Coming Soon Banner */}
      <div className="fixed top-0 left-0 right-0 z-60 bg-emerald-500 text-white text-center py-2 text-sm font-semibold tracking-wide">
        Coming Soon — Join the Waitlist Below
      </div>

      {/* Navbar */}
      <nav className="fixed top-8 left-0 right-0 z-50 bg-background/80 backdrop-blur-xl border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16">
          <div className="flex items-center gap-2">
            <img src="/sja-logo-circle.png" alt="SJA Logo" width="40" height="40" className="rounded-full" />
            <span className="text-lg font-bold text-accent">Fitness</span>
          </div>
          <a href="https://sja-thedude.github.io/sja-ecosystem" className="text-xs font-mono text-foreground/50 hover:text-emerald-400 transition-colors">sja.com</a>
        </div>
      </nav>

      {/* Hero */}
      <section className="relative min-h-screen flex items-center justify-center pt-24">
        <div className="absolute inset-0 pointer-events-none"><div className="absolute top-1/4 left-1/3 w-[500px] h-[500px] bg-emerald-500/5 rounded-full blur-3xl" /></div>
        <div className="relative text-center px-4 max-w-4xl mx-auto">
          <p className="text-emerald-400 text-sm font-mono mb-4 tracking-wider uppercase">Your Online Fitness Platform</p>
          <h1 className="text-5xl sm:text-7xl font-bold mb-6 leading-tight">Train Anywhere.<br /><span className="text-emerald-400">Win Everywhere.</span></h1>
          <p className="text-foreground/60 text-lg max-w-2xl mx-auto mb-8">AI-powered workout plans, expert online coaching, and a community that pushes you forward. No gym required.</p>
          <a href="#waitlist" className="inline-block bg-emerald-500 hover:bg-emerald-600 text-white px-8 py-3 rounded-full font-medium transition-colors">Join the Waitlist</a>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-emerald-400 text-sm font-mono mb-3 tracking-wider uppercase">What We Offer</p>
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

      {/* Pricing */}
      <section id="pricing" className="py-24 border-t border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-emerald-400 text-sm font-mono mb-3 tracking-wider uppercase">Pricing</p>
            <h2 className="text-4xl sm:text-5xl font-bold">Pick Your <span className="text-emerald-400">Plan</span></h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {pricing.map((p) => (
              <div key={p.tier} className={`rounded-xl border p-8 transition-all ${p.highlighted ? "bg-emerald-500/10 border-emerald-400/50 scale-[1.02]" : "bg-surface border-border hover:border-emerald-400/30"}`}>
                {p.highlighted && <p className="text-emerald-400 text-xs font-mono font-bold uppercase tracking-wider mb-4">Most Popular</p>}
                <h3 className="text-2xl font-bold mb-1">{p.tier}</h3>
                <p className="text-foreground/50 text-sm mb-4">{p.desc}</p>
                <div className="mb-6">
                  <span className="text-4xl font-bold">{p.price}</span>
                  <span className="text-foreground/40 text-sm">{p.period}</span>
                </div>
                <ul className="space-y-3 mb-8">
                  {p.features.map((f) => (
                    <li key={f} className="flex items-start gap-2 text-sm text-foreground/70">
                      <svg className="w-4 h-4 text-emerald-400 mt-0.5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                      {f}
                    </li>
                  ))}
                </ul>
                <button className={`w-full py-3 rounded-full font-medium transition-colors ${p.highlighted ? "bg-emerald-500 hover:bg-emerald-600 text-white" : "bg-foreground/10 hover:bg-foreground/15 text-foreground"}`}>
                  {p.cta}
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Shop Teaser */}
      <section id="shop" className="py-24 border-t border-border">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <p className="text-emerald-400 text-sm font-mono mb-3 tracking-wider uppercase">SJA Wear</p>
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">Fitness Collection <span className="text-emerald-400">Coming Soon</span></h2>
          <p className="text-foreground/60 max-w-xl mx-auto mb-6">Premium workout gear designed for performance and style. From training tees to joggers — built for those who move.</p>
          <span className="inline-block bg-foreground/10 text-foreground/50 px-6 py-3 rounded-full text-sm font-medium">Stay Tuned</span>
        </div>
      </section>

      {/* Waitlist */}
      <section id="waitlist" className="py-24 border-t border-border">
        <div className="max-w-2xl mx-auto px-4 text-center">
          <p className="text-emerald-400 text-sm font-mono mb-3 tracking-wider uppercase">Be First In</p>
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">Join the <span className="text-emerald-400">Waitlist</span></h2>
          <p className="text-foreground/60 mb-8">Get early access, exclusive launch offers, and be the first to know when we go live.</p>
          {submitted ? (
            <div className="bg-emerald-500/10 border border-emerald-400/30 rounded-xl p-6">
              <p className="text-emerald-400 font-semibold text-lg">You&apos;re on the list!</p>
              <p className="text-foreground/50 text-sm mt-1">We&apos;ll be in touch soon.</p>
            </div>
          ) : (
            <form onSubmit={handleWaitlist} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input
                type="email"
                required
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="flex-1 px-4 py-3 rounded-full bg-surface border border-border text-foreground placeholder:text-foreground/30 focus:outline-none focus:border-emerald-400/50 transition-colors"
              />
              <button type="submit" className="bg-emerald-500 hover:bg-emerald-600 text-white px-8 py-3 rounded-full font-medium transition-colors whitespace-nowrap">
                Sign Up
              </button>
            </form>
          )}
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border py-8">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <p className="text-foreground/40 text-sm">SJA Fitness — Part of the <a href="https://sja-thedude.github.io/sja-ecosystem" className="text-emerald-400 hover:underline">SJA</a> family.</p>
          <p className="text-foreground/30 text-xs mt-2">&copy; 2025 SJA Fitness. All rights reserved.</p>
        </div>
      </footer>
    </>
  );
}
