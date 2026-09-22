'use client'

import { useState, useEffect } from 'react'
import ProjectsManager from '@/src/components/ProjectsManager'
import ResearchManager from '@/src/components/ResearchManager'

// Staggered star configurations with progressive entry delays & scroll thresholds
const LEFT_STARS = [
  { top: '10%', left: '12%', threshold: 0.05, size: 'w-6 h-6', rotate: 'rotate-12', delay: '0s', enterDelay: '0ms' },
  { top: '25%', left: '50%', threshold: 0.15, size: 'w-8 h-8', rotate: '-rotate-45', delay: '0.8s', enterDelay: '250ms' },
  { top: '40%', left: '10%', threshold: 0.28, size: 'w-5 h-5', rotate: 'rotate-0', delay: '1.6s', enterDelay: '500ms' },
  { top: '55%', left: '60%', threshold: 0.42, size: 'w-9 h-9', rotate: 'rotate-180', delay: '0.4s', enterDelay: '0ms' },
  { top: '70%', left: '18%', threshold: 0.58, size: 'w-6 h-6', rotate: '-rotate-12', delay: '1.2s', enterDelay: '0ms' },
  { top: '85%', left: '48%', threshold: 0.75, size: 'w-7 h-7', rotate: 'rotate-90', delay: '2.0s', enterDelay: '0ms' },
]

const RIGHT_STARS = [
  { top: '14%', right: '12%', threshold: 0.08, size: 'w-7 h-7', rotate: '-rotate-12', delay: '0.5s', enterDelay: '120ms' },
  { top: '30%', right: '55%', threshold: 0.20, size: 'w-5 h-5', rotate: 'rotate-45', delay: '1.3s', enterDelay: '370ms' },
  { top: '45%', right: '10%', threshold: 0.34, size: 'w-9 h-9', rotate: 'rotate-12', delay: '2.1s', enterDelay: '620ms' },
  { top: '60%', right: '50%', threshold: 0.48, size: 'w-6 h-6', rotate: '-rotate-90', delay: '0.9s', enterDelay: '0ms' },
  { top: '75%', right: '22%', threshold: 0.64, size: 'w-8 h-8', rotate: 'rotate-180', delay: '1.7s', enterDelay: '0ms' },
  { top: '90%', right: '48%', threshold: 0.80, size: 'w-6 h-6', rotate: 'rotate-0', delay: '0.2s', enterDelay: '0ms' },
]

export default function Home() {
  const [scrollProgress, setScrollProgress] = useState(0)
  const [isPastHero, setIsPastHero] = useState(false)

  useEffect(() => {
    if (typeof window !== 'undefined' && 'scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual'
      window.scrollTo(0, 0)
    }

    const handleScroll = () => {
      const heroElement = document.getElementById('about')
      if (heroElement) {
        const heroRect = heroElement.getBoundingClientRect()
        setIsPastHero(heroRect.bottom <= 100)
      }

      const totalScroll = document.documentElement.scrollHeight - window.innerHeight
      if (totalScroll > 0) {
        const currentProgress = Math.min(1, Math.max(0, window.scrollY / totalScroll))
        setScrollProgress(currentProgress)
      }
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll()
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div className="min-h-screen bg-deep-navy text-slate-text font-serif relative overflow-x-hidden">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Lora:ital,wght@0,400..700;1,400..700&display=swap');

        html {
          scroll-behavior: smooth;
        }

        body, div, p, h1, h2, h3, h4, span, a {
          font-family: 'Lora', serif;
        }

        @keyframes fadeIn {
          0% { opacity: 0; }
          100% { opacity: 1; }
        }

        @keyframes starGlowCoral {
          0%, 100% {
            filter: drop-shadow(0 0 6px rgba(235, 130, 110, 0.8)) drop-shadow(0 0 14px rgba(235, 130, 110, 0.4));
            opacity: 0.85;
            transform: scale(1);
          }
          50% {
            filter: drop-shadow(0 0 16px rgba(255, 160, 140, 1)) drop-shadow(0 0 30px rgba(235, 130, 110, 0.9));
            opacity: 1;
            transform: scale(1.2);
          }
        }

        @keyframes starGlowTeal {
          0%, 100% {
            filter: drop-shadow(0 0 6px rgba(75, 200, 200, 0.8)) drop-shadow(0 0 14px rgba(75, 200, 200, 0.4));
            opacity: 0.85;
            transform: scale(1);
          }
          50% {
            filter: drop-shadow(0 0 16px rgba(120, 230, 230, 1)) drop-shadow(0 0 30px rgba(75, 200, 200, 0.9));
            opacity: 1;
            transform: scale(1.2);
          }
        }

        .animate-star-glow-coral {
          animation: starGlowCoral 3s ease-in-out infinite;
        }

        .animate-star-glow-teal {
          animation: starGlowTeal 3.2s ease-in-out infinite;
        }
      `}</style>
      
      {/* Prominent Margin Stars (Left Side) */}
      <div className="hidden md:block fixed inset-y-0 left-2 lg:left-8 w-24 pointer-events-none z-30">
        {LEFT_STARS.map((star, idx) => {
          const isVisible = isPastHero && scrollProgress >= star.threshold
          return (
            <div 
              key={`left-star-${idx}`} 
              className={`absolute text-soft-coral transition-all duration-700 ease-out transform ${star.rotate} ${
                isVisible ? 'opacity-100 scale-100 translate-y-0' : 'opacity-0 scale-50 translate-y-4 pointer-events-none'
              }`}
              style={{ 
                top: star.top, 
                left: star.left,
                transitionDelay: isVisible ? star.enterDelay : '0ms'
              }}
            >
              <svg 
                className={`${star.size} animate-star-glow-coral`} 
                style={{ animationDelay: star.delay }}
                viewBox="0 0 24 24" 
                fill="currentColor"
              >
                <path d="M12 0L14.59 9.41L24 12L14.59 14.59L12 24L9.41 14.59L0 12L9.41 9.41L12 0Z" />
              </svg>
            </div>
          )
        })}
      </div>

      {/* Prominent Margin Stars (Right Side) */}
      <div className="hidden md:block fixed inset-y-0 right-2 lg:right-8 w-24 pointer-events-none z-30">
        {RIGHT_STARS.map((star, idx) => {
          const isVisible = isPastHero && scrollProgress >= star.threshold
          return (
            <div 
              key={`right-star-${idx}`} 
              className={`absolute text-egyptian-teal transition-all duration-700 ease-out transform ${star.rotate} ${
                isVisible ? 'opacity-100 scale-100 translate-y-0' : 'opacity-0 scale-50 translate-y-4 pointer-events-none'
              }`}
              style={{ 
                top: star.top, 
                right: star.right,
                transitionDelay: isVisible ? star.enterDelay : '0ms'
              }}
            >
              <svg 
                className={`${star.size} animate-star-glow-teal`} 
                style={{ animationDelay: star.delay }}
                viewBox="0 0 24 24" 
                fill="currentColor"
              >
                <path d="M12 0L14.59 9.41L24 12L14.59 14.59L12 24L9.41 14.59L0 12L9.41 9.41L12 0Z" />
              </svg>
            </div>
          )
        })}
      </div>

      {/* NAVBAR */}
      <nav 
        className="sticky top-0 z-50 bg-[#0A131D]/90 backdrop-blur-md border-b border-egyptian-teal/20 px-4 md:px-8 py-3 h-[65px] flex items-center opacity-0"
        style={{ animation: 'fadeIn 1.2s ease-out forwards' }}
      >
        <div className="w-full max-w-6xl mx-auto grid grid-cols-3 items-center">
          
          <div className="flex items-center space-x-3 md:space-x-5 justify-self-start">
            <ul className="flex items-center space-x-3 md:space-x-5 text-xs md:text-sm font-semibold text-egyptian-teal">
              <li><a href="#about" className="hover:text-soft-coral transition-colors">About</a></li>
              <li><a href="#projects" className="hover:text-soft-coral transition-colors">Projects</a></li>
              <li><a href="#research" className="hover:text-soft-coral transition-colors">Research</a></li>
            </ul>
          </div>

          <div className="text-center truncate justify-self-center">
            <a href="#about" className="text-base md:text-xl font-extrabold text-white tracking-tight hover:text-soft-coral transition-colors">
              John Chandler
            </a>
          </div>

          <div className="flex items-center justify-end space-x-3 md:space-x-5 justify-self-end">
            <a 
              href="mailto:jchandler@olin.edu" 
              title="Email Me"
              className="text-egyptian-teal hover:text-soft-coral transition-colors p-1 shrink-0"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </a>

            <a 
              href="https://www.linkedin.com/in/jechandler3" 
              target="_blank" 
              rel="noopener noreferrer"
              title="LinkedIn Profile"
              className="text-egyptian-teal hover:text-soft-coral transition-colors p-1 shrink-0"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z"/>
              </svg>
            </a>

            <a 
              href="/John_Chandler_Resume.pdf" 
              target="_blank" 
              rel="noopener noreferrer"
              className="px-2.5 py-1 bg-egyptian-teal border-egyptian-teal/40 text-white hover:bg-soft-coral hover:border-soft-coral hover:text-deep-navy rounded-lg text-xs font-semibold transition-all duration-200 shrink-0"
            >
              Resume ↗
            </a>
          </div>

        </div>
      </nav>

      {/* Main Full-Height Hero Section */}
      <section 
        id="about" 
        className="w-full bg-egyptian-teal/85 backdrop-blur-sm text-deep-navy min-h-[calc(100vh-65px)] flex flex-col justify-between items-center text-center opacity-0 relative z-20 pt-8 pb-6 overflow-hidden"
        style={{ animation: 'fadeIn 1.4s ease-out forwards' }}
      >
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-25 pointer-events-none mix-blend-overlay"
          style={{ backgroundImage: `url('/green_bank.png')` }} 
        />

        <div className="absolute top-1/4 -left-20 w-96 h-96 bg-white/20 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-deep-navy/20 rounded-full blur-3xl pointer-events-none" />

        <div className="h-2" />

        <div className="max-w-5xl space-y-6 px-6 md:px-12 relative z-20 my-auto">
          <h1 className="text-5xl md:text-7xl font-extrabold text-white tracking-tight leading-tight drop-shadow-md">
            Hi, I'm John!
          </h1>
          
          <p className="text-xl md:text-2xl text-soft-coral italic font-semibold tracking-wide drop-shadow-sm">
            Electrical & Computer Engineering @ Olin College '28
          </p>

          <p className="text-slate-100 leading-relaxed text-base md:text-lg max-w-4xl mx-auto pt-2 font-medium drop-shadow-sm">
            Broadly speaking, my research interests lie in the design and fabrication of novel microelectronic and quantum devices; especially those that bridge microwave and photonic devices. My work spans across areas like nanofabrication, materials processing, Microwave/RF Engineering, and embedded instrumentation for quantum and scientific applications. Outside of academics, I enjoy competing in 2D fighting games, learning new languages, and exploring optical and radio astronomy. I’m also a huge fan of anime and manga, and I hope to one day build devices as cool as those I’ve read about!
          </p>
        </div>

        <a 
          href="#projects" 
          aria-label="Explore my projects"
          className="mb-12 text-white hover:text-soft-coral transition-colors flex flex-col items-center group relative z-20 shrink-0"
        >
          <svg className="w-8 h-8 animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
          <span className="mt-2 text-xs font-bold uppercase tracking-widest text-slate-100 group-hover:text-soft-coral transition-colors">
            Explore My Projects!
          </span>
        </a>

        <div className="absolute -bottom-1 inset-x-0 h-24 bg-gradient-to-b from-deep-navy/0 via-deep-navy/60 to-deep-navy pointer-events-none z-10" />
      </section>

      {/* Main Content Area */}
      <main className="max-w-4xl mx-auto px-6 relative z-20 pt-16">
        <div className="space-y-24 pb-24">
          <ProjectsManager />
          <ResearchManager />
        </div>
      </main>
    </div>
  )
}