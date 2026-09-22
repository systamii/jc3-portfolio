'use client'

import Link from 'next/link'
import Image from 'next/image'

export default function ALEPage() {
  return (
    <div className="min-h-screen bg-deep-navy text-slate-100 font-serif relative overflow-x-hidden">
      <style>{`
        @keyframes fadeIn {
          0% { opacity: 0; }
          100% { opacity: 1; }
        }
      `}</style>

      <main 
        className="max-w-4xl mx-auto px-6 py-12 md:py-16 relative z-10 space-y-10 opacity-0"
        style={{ animation: 'fadeIn 1.2s ease-out forwards' }}
      >
        
        {/* Back Navigation */}
        <nav>
          <Link
            href="/#projects"
            className="inline-flex items-center space-x-2 text-sm font-semibold text-egyptian-teal hover:text-soft-coral transition-colors group"
          >
            <span className="transition-transform group-hover:-translate-x-1">←</span>
            <span>Back to Projects</span>
          </Link>
        </nav>

        {/* Header: Title, Date, Badges, & Tags */}
        <header className="space-y-4 text-center">
          
          {/* Main Title */}
          <h1 className="text-4xl md:text-5xl font-extrabold text-white tracking-tight leading-tight">
            Atomic Layer Etching (ALE) of Diamond via Alternating O₂/Ar Plasma
          </h1>

          {/* Date */}
          <div className="text-xs font-semibold text-slate-400">
            May 2026 - September 2026
          </div>

          {/* Company & Role Badges */}
          <div className="flex flex-wrap items-center justify-center gap-2">
            <span className="text-xs font-semibold text-egyptian-teal px-3 py-1 rounded-full bg-egyptian-teal/10 border border-egyptian-teal/30">
              IonQ
            </span>
            <span className="text-xs font-semibold text-soft-coral px-3 py-1 rounded-full bg-soft-coral/10 border border-soft-coral/30">
              Quantum Hardware / Fab Engineering Intern
            </span>
          </div>

          {/* Tech Tags */}
          <div className="flex flex-wrap items-center justify-center gap-2 pt-1">
            {['Atomic Layer Etching', 'ICP-RIE', 'SEM', 'Nanofabrication', 'AFM', 'XPS / ARXPS'].map((tag) => (
              <span key={tag} className="text-xs px-2.5 py-1 bg-egyptian-teal/10 border border-egyptian-teal/20 rounded text-egyptian-teal font-sans">
                {tag}
              </span>
            ))}
          </div>
        </header>

        {/* Hero Feature Image Placeholder */}
        <section className="space-y-4">
          <div className="w-full rounded-2xl overflow-hidden bg-[#132235] shadow-2xl border border-egyptian-teal/30">
            <Image 
              src="/ALE_cycle.png" 
              alt="Atomic Layer Etching Process Mechanism" 
              width={1200}
              height={675}
              className="w-full h-auto block object-cover"
              priority
            />
          </div>
          <p className="text-sm md:text-base text-slate-300 leading-relaxed italic text-center max-w-3xl mx-auto px-4">
            <strong className="text-egyptian-teal not-italic">Atomic Layer Etching Process Mechanism:</strong> Sequential cyclic schematic outlining the alternating surface oxidation and physical argon desorption steps required to achieve sub-nanometer etching precision on single-crystal diamond substrates.
          </p>
        </section>

        {/* Narrative Body in Pure Paragraph Form */}
        <article className="space-y-10 text-slate-200 text-base md:text-lg leading-relaxed pt-2">
          
          {/* Section 1: Background & Motivation */}
          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-egyptian-teal border-b border-egyptian-teal/20 pb-2">
              Background & Motivation
            </h2>
            <p>
              In diamond-based quantum architectures, sub-surface crystal damage and surface roughness severely degrade optical quality, acoustic Q-factors, and quantum emitter spin-coherence (T₂) times. Typically, Reactive Ion Etching (RIE) does not help with this issue, as it relies on high-energy ion bombardment that induces lattice defects and structural disorder along the target surface. Recently, however, groups in Japan, France, and Harvard University have begun finding ways to utilize Inductively Coupled Plasma Reactive Ion Etching (ICP-RIE) to achieve never-before seen control over their substrates. The crux of my internship revolved around finding a way to apply these new techniques to Diamond- a much less agreeable material than Silicon- using the resources we had at our disposal at the time. Nonetheless, we have established a highly-synergistic, cyclic Atomic Layer Etching (ALE) baseline for single-crystal, SmartCut, and DDK-polished diamond substrates.
            </p>
            <p className="text-slate-300 italic border-l-2 border-egyptian-teal/40 pl-4 py-1 bg-egyptian-teal/5 rounded-r">
              Due to the nature of this project, I will refrain from providing potentially sensitive photos/descriptions of some of the more exciting aspects of the project until further notice. Regardless, we accomplished some pretty cool stuff that I am allowed to share, so I hope this will suffice!
            </p>
          </section>

          {/* Section 2: Cyclic Process Mechanism & Synergy */}
          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-egyptian-teal border-b border-egyptian-teal/20 pb-2">
              Cyclic Process Mechanism & Synergy
            </h2>
            <p>
              The ALE framework alternates sequentially between surface modification and physical removal, utilizing a low-power strike step for igniting the Ar plasma without reflected power spikes. The cyclic process begins with a gentle O₂ 
               modification step that oxidizes the carbon surface, followed by an in-situ chamber gas purge to stabilize chamber pressure and clear unreacted radicals. Directional Ar⁺ ion bombardment then selectively desorbs the modified surface layer, self-terminating once the unmodified pristine diamond surface is exposed, prior to a final purge step.
            </p>
            <p>
              Two synergistic mechanisms drive this continuous process: the oxidative etching of an amorphous carbon (a-C) overlayer that ends in oxygen termination, and the physical desorption of COx followed by the creation of a finite a-C overlayer with an estimated depth of 0.4 ± 0.1 nm.
            </p>
          </section>

          {/* Section 3: Recipe Optimization & Parameter Sweeps */}
          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-egyptian-teal border-b border-egyptian-teal/20 pb-2">
              Recipe Optimization & Parameter Sweeps
            </h2>
            <p>
              Establishing a true ALE operating window required systematically decoupling chemical modification from physical sputtering across ICP-RIE tools. From there, sweeping RF power directly revealed an ALE regime with a controlled Etch Per Cycle (EPC) of 0.8 nm/cycle.
            </p>
            <p>
              Process monitoring and etch rate determination were conducted on non-overgrown single-crystal diamonds using Filmometrics ES-4 ellipsometry and reflectometry to measure precise pre-etch and post-etch thickness across hundreds of continuous cycles.
            </p>
          </section>

          {/* Section 4: Surface Smoothing & Chemical Metrology */}
          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-egyptian-teal border-b border-egyptian-teal/20 pb-2">
              Surface Smoothing & Chemical Metrology
            </h2>
            <p>
              Characterization performed using Scanning Electron Microscopy (SEM), Atomic Force Microscopy (AFM), X-ray Photoelectron Spectroscopy (XPS), and Angle-Resolved XPS (ARXPS) confirmed exceptional surface smoothing. Performing an ICP-RIE pre-etch followed by our ALE recipe on DDK-polished and SmartCut diamonds reliably produced atomic smoothness, reducing surface RMS roughness (Rq) down to less than 50 pm over a 500 nm x 500 nm scan area.
            </p>
          </section>

        </article>

        {/* Footer Navigation */}
        <footer className="pt-8 border-t border-egyptian-teal/20 flex justify-between items-center text-sm">
          <Link
            href="/#projects"
            className="inline-flex items-center space-x-2 font-semibold text-egyptian-teal hover:text-soft-coral transition-colors group"
          >
            <span className="transition-transform group-hover:-translate-x-1">←</span>
            <span>Back to Projects</span>
          </Link>
          <span className="text-xs text-slate-500">John Chandler</span>
        </footer>

      </main>
    </div>
  )
}