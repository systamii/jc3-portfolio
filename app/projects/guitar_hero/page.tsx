'use client'

import Link from 'next/link'
import Image from 'next/image'

export default function GuitarHeroPage() {
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
            Custom Guitar Pedal & Amplifier PCB Design
          </h1>

          {/* Date */}
          <div className="text-xs font-semibold text-slate-400">
            Work in Progress
          </div>

          {/* Badges */}
          <div className="flex flex-wrap items-center justify-center gap-2">
            <span className="text-xs font-semibold text-egyptian-teal px-3 py-1 rounded-full bg-egyptian-teal/10 border border-egyptian-teal/30">
              Personal Project
            </span>
            <span className="text-xs font-semibold text-soft-coral px-3 py-1 rounded-full bg-soft-coral/10 border border-soft-coral/30">
              Hardware & Analog PCB Engineering
            </span>
          </div>

          {/* Tech Tags */}
          <div className="flex flex-wrap items-center justify-center gap-2 pt-1">
            {['KiCad', 'PCB Design', 'USB-C Power', 'Analog Electronics', 'SPICE Simulation', 'Circuit Design', 'Guitar Audio'].map((tag, idx) => (
              <span key={`${tag}-${idx}`} className="text-xs px-2.5 py-1 bg-egyptian-teal/10 border border-egyptian-teal/20 rounded text-egyptian-teal font-sans">
                {tag}
              </span>
            ))}
          </div>
        </header>

        {/* Feature Hero Image */}
        <section className="space-y-4">
          <div className="relative aspect-[16/9] w-full rounded-2xl overflow-hidden bg-[#132235] shadow-2xl border border-egyptian-teal/30">
            <Image 
              src="/circuit_model.png" 
              alt="KiCad PCB Schematic for Custom Guitar Pedal Power Supply" 
              fill 
              className="object-cover object-center"
              priority
            />
          </div>
          <p className="text-sm md:text-base text-slate-300 leading-relaxed italic text-center max-w-3xl mx-auto px-4">
            <strong className="text-egyptian-teal not-italic">Subsystem Development:</strong> KiCad schematic and board layout for the 5V USB-C powered LED flasher power stage.
          </p>
        </section>

        {/* Narrative Article Body in Pure Paragraph Form */}
        <article className="space-y-10 text-slate-200 text-base md:text-lg leading-relaxed pt-2">
          
          {/* Section 1: Background & Project Motivation */}
          <section className="space-y-3">
            <h2 className="text-2xl font-bold text-egyptian-teal border-b border-egyptian-teal/20 pb-2">
              Background & Motivation
            </h2>
            <p>Two months ago, I began learning how to play Electric Guitar; It was simultaneously one of the most fun and frustrating experiences I have ever had. Very reminiscent of 2D Fighting Games! 
                I am only just now getting comfortable enough to attempt to learn how to play songs that I actually enjoy; However, I quickly realized that while I might have gotten a steal for the guitar, I got robbed out of my socks for that modifier.. The amp that came with it is terrible; it has a bunch of static, and the cord is not properly toleranced so it doesn't plug in properly in half the time. Rather than buying an off-the-shelf replacement, however, I decided to take matters into my own hands and design a custom pedal and amplifier system from scratch in KiCad. After all, I refuse to waste my money on an amplifier if I don’t have to- even if the cost is learning a whole bunch of PCB Design. </p>
          </section>

          {/* Section 2: Power Subsystem & Initial KiCad Design */}
          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-egyptian-teal border-b border-egyptian-teal/20 pb-2">
              Power Subsystem & Initial KiCad Design
            </h2>
            <p>To kick off the project, I decided to start off small by designing the power supply- a 5V USB-C powered LED Flasher circuit- as it seemed like the easiest thing to do. I soon found out it’d be anything but. </p>
            <p>
              Despite appearing straightforward on paper, translating a basic power supply and timing circuit into a functional PCB presented a steep learning curve. Working in KiCad required learning the nuances of schematic capture, footprint assignment, and board-level design rules.
            </p>
          </section>

          {/* Section 3: Debugging, Tolerances & Simulation Routing */}
          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-egyptian-teal border-b border-egyptian-teal/20 pb-2">
              Debugging, Tolerances & Simulation Challenges
            </h2>
            <p>
              The design process quickly proved more demanding than anticipated. In early board iterations, my physical layout clearances and manufacturing tolerances were far too tight, creating routing bottlenecks and risking potential shorts. Concurrently, my SPICE circuit simulations in KiCad were returning incorrect voltage waveforms, which took significant troubleshooting to trace back to multiple routing and net connections mistakes in the schematic.
            </p>
            <p>
              Overcoming these hurdles involved systematically re-checking netlists, adjusting component spacing, widening power trace clearances, and correcting routing errors. Resolving these issues brought the simulation outputs in line with expected behavior and yielded the clean, fully validated board design you see pictured above.
            </p>
          </section>

          {/* Section 4: Results & Future Roadmap */}
          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-egyptian-teal border-b border-egyptian-teal/20 pb-2">
              Results & Future Roadmap
            </h2>
            <p>
              Completing the 5V USB-C power stage and LED status circuit established a solid, working foundation for the overall pedal project. More importantly, overcoming the initial layout and simulation roadblocks provided vital practical experience in hardware design rule check (DRC) workflows and physical board geometry.
            </p>
            <p>
              With a reliable power supply baseline finished, the next phases will focus on designing the core analog overdrive and buffer stages for the pedal, followed by building a clean, low-noise pre-amp circuit to replace the original static-prone amplifier.
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