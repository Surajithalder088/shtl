import React from 'react'
import Button from '../components/Button'
import HeroExperience from '../components/HeroExperience'
import Bg from '../components/Bg'

const words = [
  { test: 'Ideas', imgPath: '/images/ideas.png' },
  { test: 'Concepts', imgPath: '/images/concept.png' },
  { test: 'Visions', imgPath: '/images/vision.png' },
]

/* ─── Premium Background Layer ──────────────────────────────────────────────
   Sits at z-0, behind <Bg /> (z-[1]) and the glass card (z-[1])
   Layers (back → front):
     1. Deep radial gradient base
     2. Perspective grid (SVG)
     3. Fine dot matrix
     4. Two diagonal line clusters
     5. Corner accent beams
     6. Soft chromatic glow orbs
──────────────────────────────────────────────────────────────────────────── */
const PremiumBackground = () => (
  <div className="absolute inset-0 z-0 overflow-hidden" aria-hidden="true">

    {/* ① Base gradient — deep navy → near-black */}
    <div
      style={{
        position: 'absolute',
        inset: 0,
        background:
          'radial-gradient(ellipse 120% 80% at 50% 10%, #07122b 0%, #020812 55%, #000000 100%)',
      }}
    />

    {/* ② Perspective / vanishing-point grid */}
    <svg
      style={{ position: 'absolute', inset: 0, width: '100%', height: '100%' }}
      viewBox="0 0 1440 900"
      preserveAspectRatio="xMidYMid slice"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        {/* Fade mask — grid fades to transparent toward the top */}
        <linearGradient id="gridFade" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="white" stopOpacity="0" />
          <stop offset="40%" stopColor="white" stopOpacity="0.35" />
          <stop offset="100%" stopColor="white" stopOpacity="0.6" />
        </linearGradient>
        <mask id="gridMask">
          <rect width="1440" height="900" fill="url(#gridFade)" />
        </mask>

        {/* Horizontal line gradient — bright center, fade edges */}
        <linearGradient id="hLine" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#1e40af" stopOpacity="0" />
          <stop offset="30%" stopColor="#3b82f6" stopOpacity="0.5" />
          <stop offset="70%" stopColor="#3b82f6" stopOpacity="0.5" />
          <stop offset="100%" stopColor="#1e40af" stopOpacity="0" />
        </linearGradient>
      </defs>

      {/* Horizontal lines — evenly spaced, masked */}
      <g mask="url(#gridMask)">
        {Array.from({ length: 20 }).map((_, i) => {
          const y = 180 + i * 40
          return (
            <line
              key={`h${i}`}
              x1="0" y1={y} x2="1440" y2={y}
              stroke="url(#hLine)"
              strokeWidth={i % 5 === 0 ? '0.8' : '0.4'}
              opacity={i % 5 === 0 ? 0.7 : 0.35}
            />
          )
        })}

        {/* Vertical lines with perspective convergence toward horizon */}
        {Array.from({ length: 28 }).map((_, i) => {
          const spacing = 1440 / 27
          const x = i * spacing
          // Lines converge slightly toward top-center vanishing point
          const vx = 720 + (x - 720) * 0.15
          return (
            <line
              key={`v${i}`}
              x1={vx} y1="180"
              x2={x}   y2="900"
              stroke="#3b82f6"
              strokeWidth={i % 4 === 0 ? '0.7' : '0.3'}
              opacity={i % 4 === 0 ? 0.45 : 0.18}
            />
          )
        })}
      </g>

      {/* Horizon glow line */}
      <line
        x1="0" y1="180" x2="1440" y2="180"
        stroke="#60a5fa"
        strokeWidth="1.5"
        opacity="0.6"
      />

      {/* Fine dot matrix overlay */}
      <defs>
        <pattern id="dots" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
          <circle cx="20" cy="20" r="0.7" fill="#60a5fa" opacity="0.4" />
        </pattern>
      </defs>
      <rect width="1440" height="900" fill="url(#dots)" opacity="0.5" mask="url(#gridMask)" />
    </svg>

    {/* ③ Diagonal accent lines — top-left cluster */}
    <svg
      style={{ position: 'absolute', inset: 0, width: '100%', height: '100%' }}
      viewBox="0 0 1440 900"
      preserveAspectRatio="xMidYMid slice"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient id="diagL" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#818cf8" stopOpacity="0.5" />
          <stop offset="100%" stopColor="#818cf8" stopOpacity="0" />
        </linearGradient>
        <linearGradient id="diagR" x1="1" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#38bdf8" stopOpacity="0.4" />
          <stop offset="100%" stopColor="#38bdf8" stopOpacity="0" />
        </linearGradient>
      </defs>

      {/* Top-left diagonals */}
      {[0, 60, 120, 200, 280].map((off, i) => (
        <line
          key={`dl${i}`}
          x1={off} y1="0"
          x2={off + 380} y2="380"
          stroke="url(#diagL)"
          strokeWidth={i === 0 ? '1' : '0.5'}
          opacity={0.6 - i * 0.08}
        />
      ))}

      {/* Top-right diagonals */}
      {[0, 60, 120, 200, 280].map((off, i) => (
        <line
          key={`dr${i}`}
          x1={1440 - off} y1="0"
          x2={1440 - off - 380} y2="380"
          stroke="url(#diagR)"
          strokeWidth={i === 0 ? '1' : '0.5'}
          opacity={0.5 - i * 0.07}
        />
      ))}
    </svg>

    {/* ④ Glow orbs — chromatic, blurred */}
    {/* Primary blue orb — top-center */}
    <div
      style={{
        position: 'absolute',
        top: '-15%',
        left: '50%',
        transform: 'translateX(-50%)',
        width: '70vw',
        height: '55vh',
        background:
          'radial-gradient(ellipse at center, rgba(59,130,246,0.18) 0%, rgba(99,102,241,0.08) 50%, transparent 72%)',
        filter: 'blur(40px)',
        pointerEvents: 'none',
      }}
    />

    {/* Left accent — indigo */}
    <div
      style={{
        position: 'absolute',
        bottom: '10%',
        left: '-10%',
        width: '45vw',
        height: '45vh',
        background:
          'radial-gradient(ellipse at center, rgba(99,102,241,0.14) 0%, transparent 65%)',
        filter: 'blur(50px)',
        pointerEvents: 'none',
      }}
    />

    {/* Right accent — cyan */}
    <div
      style={{
        position: 'absolute',
        top: '20%',
        right: '-8%',
        width: '38vw',
        height: '40vh',
        background:
          'radial-gradient(ellipse at center, rgba(34,211,238,0.1) 0%, transparent 65%)',
        filter: 'blur(50px)',
        pointerEvents: 'none',
      }}
    />

    {/* ⑤ Noise grain texture — subtle premium feel */}
    <div
      style={{
        position: 'absolute',
        inset: 0,
        backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='1'/%3E%3C/svg%3E")`,
        backgroundRepeat: 'repeat',
        backgroundSize: '180px 180px',
        opacity: 0.028,
        mixBlendMode: 'overlay',
        pointerEvents: 'none',
      }}
    />

    {/* ⑥ Corner bracket accents — top-left & top-right */}
    <svg
      style={{ position: 'absolute', top: 0, left: 0, width: 160, height: 160, opacity: 0.35 }}
      viewBox="0 0 160 160"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M10 80 L10 10 L80 10" fill="none" stroke="#60a5fa" strokeWidth="1.2" />
      <path d="M10 10 L30 30" fill="none" stroke="#60a5fa" strokeWidth="0.6" opacity="0.5" />
    </svg>
    <svg
      style={{ position: 'absolute', top: 0, right: 0, width: 160, height: 160, opacity: 0.35, transform: 'scaleX(-1)' }}
      viewBox="0 0 160 160"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M10 80 L10 10 L80 10" fill="none" stroke="#38bdf8" strokeWidth="1.2" />
      <path d="M10 10 L30 30" fill="none" stroke="#38bdf8" strokeWidth="0.6" opacity="0.5" />
    </svg>
  </div>
)

const Hero = () => {
  return (
    <section id="hero" className="fixed overflow-hidden">
  

      {/* ── Premium BG: grid + orbs ── */}
      <PremiumBackground />

      {/* ── Original Bg 3D model ── */}
      <div className="absolute inset-0 z-[1] h-full">
        <Bg />
      </div>

      <div
        className="hero-layout
          border border-white/20
          m-15 rounded-2xl
          bg-white/5
          backdrop-blur-sm
          shadow-[0_0_60px_rgba(0,0,0,0.6)]"
      >
        {/* left */}
        <header className="flex flex-col justify-center md:w-full w-screen md:px-20 px-2">
          <div className="flex flex-col gap-7">
            <h1 className="hero-header h-[80px]mb-3">
              <span className='pb-4'>Shaping</span>
              <span className="slide overflow-hidden h-full">
                <span className="wrapper">
                  {words.map((item, index) => (
                    <span key={index} className="flex items-center md:gap-3 gap-1 pb-2">
                      <img
                        src={item.imgPath}
                        alt={item.test}
                        className="xl:size-5 md:size-4 size-3 md:p-1 p-0 rounded-full bg-white-50"
                      />
                      <span>{item.test}</span>
                    </span>
                  ))}
                </span>
              </span>
            </h1>
            <h1 className="hero-header">into Real Projects</h1>
            <h1 className="hero-header">that Deliver Value</h1>

            <p className="text-white-50 md:text-xl relative z-10 pointer-events-none">
              hi, developing the future of digital infrastructure
            </p>
            <Button />
          </div>
        </header>

        {/* right */}
        <figure>
          <div className="hero-3d-layout">
            <HeroExperience />
          </div>
        </figure>
      </div>
    </section>
  )
}

export default Hero
