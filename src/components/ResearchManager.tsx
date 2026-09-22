'use client'

import Image from 'next/image'

interface ResearchItem {
  id: string;
  title: string;
  institution: string;
  role: string;
  timeframe: string;
  caption: string;
  thumbnail: string;
  tags: string[];
  link: string;
  buttonText: string;
  characterImg?: string;
}

const researchData: ResearchItem[] = [
  {
    id: 'compact-portable-spectrometer',
    title: 'A Compact, Portable Spectrometer for NMR Measurements in Undergraduate Education Labs',
    institution: 'SpinQuorum',
    role: 'Research Intern',
    timeframe: 'Jan 2026 - Jun 2026',
    caption: 'Quorum-1, a low-cost, open-source, single-qubit Earth-field nuclear magnetic resonance platform designed for hands-on quantum education and adaptable to both spectroscopy and gradient-coil magnetic resonance imaging demonstrations.',
    thumbnail: '/NMR_thumbnail.png',
    tags: ['FPGA', 'Verilog', 'Digital Signal Processing', 'Radio Astronomy', 'Spectral Kurtosis'],
    link: 'https://ed.quantum.ieee.org/qseec26/',
    buttonText: 'IEEE Xplore Coming Soon!',
    characterImg: '/miku1.png',
  },
  {
    id: 'low-cost-odmr',
    title: 'A Low-Cost, Optically Detectable Magnetic Resonance Device',
    institution: 'SpinQuorum',
    role: 'Research Intern',
    timeframe: 'Jan 2026 - Jun 2026',
    caption: 'Here we present Quorum-NV, an open-source, low-cost optically detected magnetic resonance (ODMR) device designed specifically for secondary, undergraduate, and hobbyist laboratory environments. Rather than targeting research-grade sensitivity, Quorum-NV is meant to be an instructional platform for introducing NV- center physics through direct experiment.',
    thumbnail: '/SpinQuorum.png',
    tags: ['RF Engineering', 'NV-Center Devices', 'Antenna Design', 'ODMR', 'Ansys HFSS', 'Quantum Devices', 'Product Management'],
    link: 'https://ed.quantum.ieee.org/qseec26/',
    buttonText: 'IEEE Xplore Coming Soon!',
    characterImg: '/aigis.png',
  },
  {
    id: 'rfi-mitigation-fpga',
    title: 'Real-Time RFI Mitigation via FPGA-Based Spectral Kurtosis',
    institution: 'Green Bank Observatory',
    role: 'Research Intern',
    timeframe: 'Jun 2025 - Aug 2025',
    caption: 'Implemented real-time Radio Frequency Interference (RFI) detection algorithms on FPGA hardware using Spectral Kurtosis to automatically isolate and filter transient interference for radio astronomy signals.',
    thumbnail: '/fpga_thumbnail.png',
    tags: ['Radio Frequency Inteference Mitigation', 'Digital Signal Processing', 'Spectral Kurtosis', 'FPGA', 'Verilog'],
    link: 'https://aas242-aas.ipostersessions.com/?s=6B-79-91-79-08-94-81-80-6A-8B-03-69-D0-84-A1-F1',
    buttonText: 'View the Full iPoster!',
    characterImg: '/Therta.png',
  },
];

export default function ResearchManager() {
  return (
    <section id="research" className="space-y-6 pt-4">
      <div className="flex justify-between items-end border-b border-egyptian-teal/20 pb-3">
        <div>
          <h2 className="text-3xl font-bold text-egyptian-teal">Research & Publications</h2>
          <p className="text-xs text-slate-text/60 mt-1"></p>
        </div>
      </div>

      <div className="space-y-4">
        {researchData.map((item) => (
          <div 
            key={item.id} 
            className="group relative bg-[#132235]/60 border border-egyptian-teal/20 hover:border-soft-coral/50 rounded-2xl p-5 md:p-6 transition-all duration-300 hover:shadow-lg hover:shadow-egyptian-teal/5 flex flex-col md:flex-row gap-6 items-center overflow-hidden"
          >
            {/* Thumbnail */}
            <div className="relative w-full md:w-56 h-40 rounded-xl overflow-hidden bg-deep-navy border border-egyptian-teal/20 flex-shrink-0">
              <Image 
                src={item.thumbnail} 
                alt={item.title} 
                fill 
                className="object-cover group-hover:scale-105 transition-transform duration-300"
              />
            </div>

            {/* Summary Content */}
            <div className="flex-1 space-y-2 pr-6 md:pr-10">
              {/* Row 1: Title */}
              <h3 className="text-xl font-bold text-white group-hover:text-soft-coral transition-colors">
                {item.title}
              </h3>

              {/* Row 2: Institution & Role Badges */}
              <div className="flex items-center gap-2 pt-0.5">
                <span className="text-xs text-egyptian-teal font-medium bg-egyptian-teal/10 px-2.5 py-0.5 rounded-full border border-egyptian-teal/20">
                  {item.institution}
                </span>
                <span className="text-xs text-soft-coral font-medium bg-soft-coral/10 px-2.5 py-0.5 rounded-full border border-soft-coral/20">
                  {item.role}
                </span>
              </div>

              {/* Row 3: Tech Tags */}
              <div className="flex flex-wrap gap-1.5 pt-0.5">
                {item.tags.map((tag) => (
                  <span key={tag} className="text-[11px] px-2 py-0.5 bg-egyptian-teal/10 border border-egyptian-teal/20 rounded text-egyptian-teal">
                    {tag}
                  </span>
                ))}
              </div>

              {/* Row 4: Timeframe & Caption */}
              <p className="text-xs text-slate-text/50 pt-1">{item.timeframe}</p>
              <p className="text-sm text-slate-text/80 leading-relaxed">{item.caption}</p>

              {/* Row 5: CTA Button */}
              <div className="pt-2">
                <a
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-4 py-2 bg-egyptian-teal text-white text-xs font-semibold rounded-xl hover:bg-soft-coral hover:text-deep-navy transition-all duration-200 shadow-sm z-10"
                >
                  {item.buttonText} ↗
                </a>
              </div>
            </div>

            {/* Character Badge */}
            {item.characterImg && (
              <div className="character-badge absolute -bottom-2 -right-2 w-20 h-20 md:w-24 md:h-24 opacity-70 group-hover:opacity-100 group-hover:scale-110 transition-all duration-300 pointer-events-none select-none">
                <Image 
                  src={item.characterImg} 
                  alt="Character Badge" 
                  fill 
                  className="object-contain"
                />
              </div>
            )}

          </div>
        ))}
      </div>
    </section>
  )
}