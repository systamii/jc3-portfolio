'use client'

interface StarConfig {
  id: number
  xPct: number       // Horizontal anchor point (%)
  baseLength: number // Hanging string length (px)
  size: number       // Star radius (px)
}

const STARS: StarConfig[] = [
  { id: 1, xPct: 6, baseLength: 38, size: 16 },
  { id: 2, xPct: 18, baseLength: 62, size: 22 },
  { id: 3, xPct: 30, baseLength: 42, size: 15 },
  { id: 4, xPct: 42, baseLength: 78, size: 24 },
  { id: 5, xPct: 54, baseLength: 48, size: 18 },
  { id: 6, xPct: 66, baseLength: 72, size: 22 },
  { id: 7, xPct: 78, baseLength: 40, size: 16 },
  { id: 8, xPct: 90, baseLength: 68, size: 20 },
]

export default function DrapedStars() {
  return (
    <div className="absolute top-0 left-0 right-0 w-full h-40 pointer-events-none z-30 overflow-visible">
      <style>{`
        /* Damped Pendulum Sway */
        @keyframes pendulumSway {
          0% { transform: rotate(-14deg); }
          22% { transform: rotate(10deg); }
          42% { transform: rotate(-5deg); }
          62% { transform: rotate(2.5deg); }
          80% { transform: rotate(-1deg); }
          100% { transform: rotate(0deg); }
        }

        /* Staggered Illumination & Glow */
        @keyframes starIlluminate {
          0% {
            opacity: 0;
            filter: drop-shadow(0 0 0px rgba(255, 183, 178, 0));
          }
          40% {
            opacity: 1;
            filter: drop-shadow(0 0 14px rgba(255, 183, 178, 0.9));
          }
          100% {
            opacity: 0.85;
            filter: drop-shadow(0 0 6px rgba(255, 183, 178, 0.5));
          }
        }

        /* String Line Fade In */
        @keyframes stringFadeIn {
          0% { opacity: 0; }
          100% { opacity: 0.5; }
        }
      `}</style>

      {STARS.map((star, index) => {
        const delay = `${index * 200}ms`
        const size = star.size

        return (
          <div
            key={star.id}
            className="absolute top-0 -translate-x-1/2 flex flex-col items-center pointer-events-none"
            style={{
              left: `${star.xPct}%`,
              transformOrigin: 'top center',
              animation: `pendulumSway 3.6s ease-in-out ${delay} forwards`,
            }}
          >
            {/* Hanging Dashed String */}
            <div
              className="w-[1.5px] border-l-2 border-dashed border-[#FFB7B2]"
              style={{
                height: `${star.baseLength}px`,
                animation: `stringFadeIn 1s ease-out ${delay} forwards`,
                opacity: 0,
              }}
            />

            {/* Illuminated Star */}
            <div
              style={{
                animation: `starIlluminate 1.2s ease-out ${delay} forwards`,
                opacity: 0,
              }}
            >
              <svg
                width={size * 2}
                height={size * 2}
                viewBox={`-${size} -${size} ${size * 2} ${size * 2}`}
                className="overflow-visible"
              >
                <path
                  d={`M 0 ${-size} 
                     Q ${size * 0.22} ${-size * 0.22} ${size} 0 
                     Q ${size * 0.22} ${size * 0.22} 0 ${size} 
                     Q ${-size * 0.22} ${size * 0.22} ${-size} 0 
                     Q ${-size * 0.22} ${-size * 0.22} 0 ${-size} Z`}
                  fill="#FFB7B2"
                />
              </svg>
            </div>
          </div>
        )
      })}
    </div>
  )
}