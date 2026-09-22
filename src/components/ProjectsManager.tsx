'use client'

import Link from 'next/link'
import Image from 'next/image'

interface ProjectItem {
  slug: string;
  title: string;
  company?: string;
  role: string;
  timeframe: string;
  caption: string;
  thumbnail: string;
  imagePosition?: string;
  tags: string[];
  characterImg?: string;
}

const initialProjects: ProjectItem[] = [
  {
    slug: 'atlas_telescope',
    title: 'ATLAS Telescope',
    company: 'Olin College',
    role: 'Software Lead',
    timeframe: 'Sep 2025 - Dec 2025',
    caption: 'A low-cost, automated star-tracking telescope mount capable of programmatic camera control and real-time celestial localization for high-fidelity long-exposure photography.',
    thumbnail: '/ATLAS.png',
    tags: ['Python', 'Raspberry Pi', 'System Automation', 'Motion Control', 'OpenCV'],
    characterImg: '/suisei.png',
  },
  {
    slug: 'ale_diamond_etching',
    title: 'Atomic Layer Etching (ALE) of Diamond via Alternating O₂/Ar Plasma',
    company: 'IonQ',
    role: 'Quantum Hardware Intern',
    timeframe: 'May 2026 - Aug 2026',
    caption: 'Developed a cyclical, low-damage Atomic Layer Etching (ALE) plasma process to overcome surface roughness and subsurface lattice defects caused by traditional Reactive Ion Etching (RIE) on diamond quantum devices.',
    thumbnail: '/ale_thumbnail.png',
    imagePosition: 'object-[center_35%]',
    tags: ['Atomic Layer Etching', 'ICP-RIE', 'SEM', 'Nanofabrication', 'AFM', 'XPS / ARXPS', 'Quantum Devices'],
    characterImg: '/obaaraido.png',
  },
  {
    slug: 'diamond_surface_characterization',
    title: 'Diamond Surface & Graphitization Characterization for Quantum Emitters',
    company: 'IonQ',
    role: 'Quantum Hardware Intern',
    timeframe: 'May 2026 - Aug 2026',
    caption: 'Investigated surface degradation and graphitic buildup resulting from high-temperature annealing (1300°C) during Silicon-Vacancy (SiV⁻) center activation, optimizing non-destructive plasma restoration methods.',
    thumbnail: '/sc_thumbnail.png',
    tags: ['XPS', 'SiV Centers', 'AFM', 'DIC Microscopy', 'Surface Chemistry'],
    characterImg: '/m2.png',
  },
    {
    slug: 'guitar_hero',
    title: 'KiCad + LTSpice = Guitar Hero??',
    company: 'Olin College of Engineering',
    role: 'Passion Project',
    timeframe: 'Work in Progress',
    caption: 'Currently designing a Pedal and an Amplifier for my Electric Guitar!',
    thumbnail: '/led.png',
    tags: ['Electrical Engineering', 'KiCad', 'LTSpice', 'PCB Design', 'Audio Processing'],
    characterImg: '/guitar_hero.png',
  },
];

export default function ProjectsManager() {
  return (
    <section id="projects" className="space-y-6">
      <div className="flex justify-between items-end border-b border-egyptian-teal/20 pb-3">
        <div>
          <h2 className="text-3xl font-bold text-egyptian-teal">Featured Projects</h2>
          <p className="text-xs text-slate-text/60 mt-1"></p>
        </div>
      </div>

      <div className="space-y-4">
        {initialProjects.map((project) => (
          <Link 
            key={project.slug} 
            href={`/projects/${project.slug}`}
            className="block group"
          >
            <div className="relative bg-[#132235]/60 border border-egyptian-teal/20 hover:border-soft-coral/50 rounded-2xl p-5 md:p-6 transition-all duration-300 hover:shadow-lg hover:shadow-egyptian-teal/5 flex flex-col md:flex-row gap-6 items-center overflow-hidden">
              
              {/* Thumbnail */}
              <div className="relative w-full md:w-56 h-40 rounded-xl overflow-hidden bg-deep-navy border border-egyptian-teal/20 flex-shrink-0">
                <Image 
                  src={project.thumbnail} 
                  alt={project.title} 
                  fill 
                  className={`object-cover ${project.imagePosition || 'object-center'} group-hover:scale-105 transition-transform duration-300`}
                />
              </div>

              {/* Summary Content */}
              <div className="flex-1 space-y-2 pr-6 md:pr-10">
                {/* Row 1: Title */}
                <h3 className="text-xl font-bold text-white group-hover:text-soft-coral transition-colors">
                  {project.title}
                </h3>

                {/* Row 2: Company & Role Badges */}
                <div className="flex items-center gap-2 pt-0.5">
                  {project.company && (
                    <span className="text-xs text-egyptian-teal font-medium bg-egyptian-teal/10 px-2.5 py-0.5 rounded-full border border-egyptian-teal/20">
                      {project.company}
                    </span>
                  )}
                  <span className="text-xs text-soft-coral font-medium bg-soft-coral/10 px-2.5 py-0.5 rounded-full border border-soft-coral/20">
                    {project.role}
                  </span>
                </div>

                {/* Row 3: Tech Tags */}
                <div className="flex flex-wrap gap-1.5 pt-0.5">
                  {project.tags.map((tag) => (
                    <span key={tag} className="text-[11px] px-2 py-0.5 bg-egyptian-teal/10 border border-egyptian-teal/20 rounded text-egyptian-teal">
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Row 4: Timeframe & Caption */}
                <p className="text-xs text-slate-text/50 pt-1">{project.timeframe}</p>
                <p className="text-sm text-slate-text/80 leading-relaxed">{project.caption}</p>
              </div>

              {/* Character Badge (Hover Bobbing Fixed via .character-badge) */}
              {project.characterImg && (
                <div className="character-badge absolute -bottom-2 -right-2 w-20 h-20 md:w-24 md:h-24 opacity-70 group-hover:opacity-100 group-hover:scale-110 transition-all duration-300 pointer-events-none select-none">
                  <Image 
                    src={project.characterImg} 
                    alt="Character Badge" 
                    fill 
                    className="object-contain"
                  />
                </div>
              )}

              {/* Arrow Indicator */}
              <div className="hidden md:block text-egyptian-teal group-hover:text-soft-coral group-hover:translate-x-1 transition-all">
                ➔
              </div>

            </div>
          </Link>
        ))}
      </div>
    </section>
  )
}