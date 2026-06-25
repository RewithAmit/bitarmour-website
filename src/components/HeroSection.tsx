import { ArrowRight } from 'lucide-react';
import MatrixRain from './MatrixRain';
import WireframeShield from './WireframeShield';
import ParticleField from './ParticleField';

export default function HeroSection() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-space-deep"
    >
      {/* Animated grid overlay */}
      <div className="absolute inset-0 grid-overlay opacity-50" />

      {/* Matrix rain background */}
      <MatrixRain className="absolute inset-0" color="#00F5FF" density={0.5} />

      {/* Particle field */}
      <ParticleField particleCount={60} color="#00F5FF" speed={0.3} />

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-space-deep via-transparent to-space-deep opacity-80" />
      <div className="absolute inset-0 bg-gradient-to-r from-space-deep via-transparent to-space-deep opacity-60" />

      {/* Glowing orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-neon-cyan/10 rounded-full blur-[120px] animate-pulse" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-neon-violet/10 rounded-full blur-[120px] animate-pulse" style={{ animationDelay: '1s' }} />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          {/* Left: Text content */}
          <div className="flex-1 max-w-2xl">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-neon-cyan/30 bg-neon-cyan/5 mb-8">
              <div className="w-2 h-2 rounded-full bg-neon-cyan animate-pulse" />
              <span className="text-sm font-rajdhani font-semibold text-neon-cyan tracking-wider uppercase">
                Quantum-Grade Security
              </span>
            </div>

            {/* Headline */}
            <h1 className="font-orbitron text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
              <span className="animate-text-flicker inline-block text-shadow-glow">
                Enterprise Cybersecurity
              </span>
              <br />
              <span className="text-neon-cyan neon-glow-text">You Can Trust</span>
            </h1>

            {/* Subtext */}
            <p className="text-lg text-white/60 font-space leading-relaxed mb-10 max-w-xl mx-auto lg:mx-0">
              Protecting organizations with advanced penetration testing, threat intelligence,
              and 24/7 security monitoring.
            </p>

            {/* CTA Button */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <a
                href="#contact"
                className="group relative inline-flex items-center gap-3 px-8 py-4 bg-neon-cyan text-black font-orbitron font-bold text-sm rounded-lg neon-btn-filled overflow-hidden"
              >
                <span className="relative z-10">Get Started</span>
                <ArrowRight className="w-4 h-4 relative z-10 transition-transform group-hover:translate-x-1" />
                <div className="absolute inset-0 bg-gradient-to-r from-neon-cyan via-white to-neon-cyan opacity-0 group-hover:opacity-30 transition-opacity duration-300" />
                {/* Ripple effect */}
                <div className="absolute inset-0 rounded-lg border-2 border-neon-cyan animate-ripple opacity-0 group-hover:opacity-100" />
              </a>
              <a
                href="#services"
                className="inline-flex items-center gap-2 px-8 py-4 text-white font-rajdhani font-semibold text-sm border border-white/20 rounded-lg hover:border-neon-cyan/40 hover:shadow-[0_0_15px_rgba(0,245,255,0.2)] transition-all duration-300 uppercase tracking-wider"
              >
                Explore Services
              </a>
            </div>
          </div>

          {/* Right: Wireframe shield */}
          <div className="flex-1 flex items-center justify-center perspective-1000">
            <div className="relative preserve-3d animate-float">
              <WireframeShield size={320} className="relative z-10" />
              <div className="absolute inset-0 w-80 h-80 bg-neon-cyan/20 rounded-full blur-[80px] animate-pulse" />
              <div className="absolute inset-0 w-80 h-80 bg-neon-violet/10 rounded-full blur-[60px] animate-pulse" style={{ animationDelay: '1.5s' }} />
            </div>
          </div>
        </div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-space-deep to-transparent" />

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
        <span className="text-xs font-rajdhani text-white/30 uppercase tracking-widest">Scroll</span>
        <div className="w-6 h-10 border border-white/20 rounded-full flex justify-center pt-2">
          <div className="w-1.5 h-3 bg-neon-cyan rounded-full animate-bounce" />
        </div>
      </div>
    </section>
  );
}
