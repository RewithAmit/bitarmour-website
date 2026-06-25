import { Target, Users, Zap, Clock } from 'lucide-react';
import FloatingShapes from './FloatingShapes';

const stats = [
  { value: '500+', label: 'Clients Protected', icon: Target },
  { value: '10K+', label: 'Threats Blocked', icon: Zap },
  { value: '99.9%', label: 'Uptime SLA', icon: Clock },
  { value: '50+', label: 'Security Experts', icon: Users },
];

export default function AboutSection() {
  return (
    <section id="about" className="relative py-24 lg:py-32 bg-space-deep overflow-hidden">
      {/* Hex grid background */}
      <div className="absolute inset-0 hex-grid opacity-50" />

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-space-deep via-transparent to-space-deep" />

      {/* Floating shapes */}
      <FloatingShapes />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left: Content */}
          <div>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-neon-cyan/30 bg-neon-cyan/5 mb-6">
              <div className="w-2 h-2 rounded-full bg-neon-cyan animate-pulse" />
              <span className="text-sm font-rajdhani font-semibold text-neon-cyan tracking-wider uppercase">
                About Us
              </span>
            </div>

            <h2 className="font-orbitron text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
              Defending the Digital{' '}
              <span className="text-neon-cyan neon-glow-text">Frontier</span>
            </h2>

            <p className="text-lg text-white/60 font-space leading-relaxed mb-6">
              BitArmour is a next-generation cybersecurity firm built to protect modern enterprises 
              from evolving digital threats. Our team of elite security professionals combines deep 
              technical expertise with strategic foresight to deliver proactive defense.
            </p>

            <p className="text-lg text-white/60 font-space leading-relaxed mb-8">
              We operate at the intersection of cutting-edge technology and human intelligence, 
              offering everything from advanced penetration testing to 24/7 managed security operations. 
              Our mission is simple: make your digital infrastructure impenetrable.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-4">
              {stats.map((stat) => {
                const Icon = stat.icon;
                return (
                  <div
                    key={stat.label}
                    className="glass-card p-4 text-center group"
                  >
                    <Icon className="w-6 h-6 text-neon-cyan mx-auto mb-2 group-hover:scale-110 transition-transform" />
                    <div className="font-orbitron text-2xl font-bold text-white mb-1">
                      {stat.value}
                    </div>
                    <div className="text-sm text-white/50 font-space">{stat.label}</div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right: Decorative visual */}
          <div className="relative hidden lg:block">
            <div className="relative w-full aspect-square max-w-md mx-auto">
              {/* Concentric rings */}
              <div className="absolute inset-0 rounded-full border border-neon-cyan/20 animate-pulse" />
              <div className="absolute inset-4 rounded-full border border-neon-violet/20 animate-pulse" style={{ animationDelay: '0.5s' }} />
              <div className="absolute inset-8 rounded-full border border-neon-magenta/20 animate-pulse" style={{ animationDelay: '1s' }} />
              
              {/* Center glow */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-32 h-32 rounded-full bg-gradient-to-br from-neon-cyan/20 to-neon-violet/20 blur-xl animate-pulse" />
              </div>

              {/* Floating particles */}
              <div className="absolute inset-0">
                {[...Array(6)].map((_, i) => (
                  <div
                    key={i}
                    className="absolute w-2 h-2 rounded-full bg-neon-cyan/40 animate-float"
                    style={{
                      top: `${20 + Math.random() * 60}%`,
                      left: `${20 + Math.random() * 60}%`,
                      animationDelay: `${i * 0.5}s`,
                      animationDuration: `${3 + i * 0.5}s`,
                    }}
                  />
                ))}
              </div>

              {/* Center text */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <div className="font-orbitron text-4xl font-bold text-neon-cyan neon-glow-text mb-2">
                    BitArmour
                  </div>
                  <div className="text-sm font-rajdhani text-white/50 tracking-widest uppercase">
                    Est. 2026
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
