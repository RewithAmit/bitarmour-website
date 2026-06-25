import { ArrowRight, Calendar } from 'lucide-react';
import ParticleField from './ParticleField';

export default function CTASection() {
  return (
    <section id="contact" className="relative py-24 lg:py-32 bg-space-deep overflow-hidden">
      {/* Particle field background */}
      <ParticleField particleCount={100} color="#7B00FF" speed={0.4} className="absolute inset-0" />
      <ParticleField particleCount={50} color="#00F5FF" speed={0.3} className="absolute inset-0" />

      {/* Gradient overlays */}
      <div className="absolute inset-0 bg-gradient-to-b from-space-deep via-transparent to-space-deep" />
      <div className="absolute inset-0 bg-gradient-to-r from-space-deep via-transparent to-space-deep" />

      {/* Glowing orbs */}
      <div className="absolute top-1/3 left-1/4 w-72 h-72 bg-neon-violet/15 rounded-full blur-[100px] animate-pulse" />
      <div className="absolute bottom-1/3 right-1/4 w-72 h-72 bg-neon-cyan/15 rounded-full blur-[100px] animate-pulse" style={{ animationDelay: '1s' }} />

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Section Header */}
        <div className="mb-6">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-neon-magenta/30 bg-neon-magenta/5 mb-6">
            <div className="w-2 h-2 rounded-full bg-neon-magenta animate-pulse" />
            <span className="text-sm font-rajdhani font-semibold text-neon-magenta tracking-wider uppercase">
              Get Started
            </span>
          </div>
        </div>

        <h2 className="font-orbitron text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
          Ready to secure your{' '}
          <span className="text-neon-cyan neon-glow-text">organization</span>?
        </h2>

        <p className="text-lg text-white/60 font-space leading-relaxed mb-10 max-w-2xl mx-auto">
          Schedule a free consultation with our security experts and discover how BitArmour can
          transform your security posture.
        </p>

        {/* CTA Button */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <a
            href="#consultation"
            className="group relative inline-flex items-center gap-3 px-10 py-5 bg-gradient-to-r from-neon-cyan to-cyan-600 text-black font-orbitron font-bold text-base rounded-lg overflow-hidden hover:shadow-[0_0_30px_rgba(0,245,255,0.6),0_0_60px_rgba(0,245,255,0.3)] transition-all duration-300 hover:scale-105"
          >
            <Calendar className="w-5 h-5 relative z-10" />
            <span className="relative z-10">Schedule Consultation</span>
            <ArrowRight className="w-5 h-5 relative z-10 transition-transform group-hover:translate-x-1" />
            {/* Continuous glow pulse */}
            <div className="absolute inset-0 rounded-lg border-2 border-neon-cyan animate-glow-pulse opacity-0 group-hover:opacity-100" />
            <div className="absolute inset-[-2px] rounded-lg border-2 border-neon-cyan animate-ripple opacity-0 group-hover:opacity-60" />
          </a>

          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-8 py-4 text-white font-rajdhani font-semibold text-sm border border-white/20 rounded-lg hover:border-neon-cyan/40 hover:shadow-[0_0_15px_rgba(0,245,255,0.2)] transition-all duration-300 uppercase tracking-wider"
          >
            Contact Sales
          </a>
        </div>

        {/* Trust indicators */}
        <div className="mt-12 flex flex-wrap justify-center gap-6 text-sm text-white/40 font-space">
          <span className="flex items-center gap-2">
            <div className="w-1.5 h-1.5 rounded-full bg-neon-cyan" />
            No commitment required
          </span>
          <span className="flex items-center gap-2">
            <div className="w-1.5 h-1.5 rounded-full bg-neon-violet" />
            NDA protected
          </span>
          <span className="flex items-center gap-2">
            <div className="w-1.5 h-1.5 rounded-full bg-neon-magenta" />
            Response within 24h
          </span>
        </div>
      </div>
    </section>
  );
}
