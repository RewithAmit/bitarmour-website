import { ShieldCheck, FileCheck, Award } from 'lucide-react';

const certifications = [
  {
    name: 'CERT-In',
    description: 'Certified by the Indian Computer Emergency Response Team for authorized security audits.',
    icon: ShieldCheck,
  },
  {
    name: 'ISO 27001',
    description: 'Internationally recognized standard for information security management systems.',
    icon: FileCheck,
  },
  {
    name: 'SOC 2 Type II',
    description: 'Independent audit verifying our security controls and operational effectiveness.',
    icon: Award,
  },
];

export default function ComplianceSection() {
  return (
    <section id="compliance" className="relative py-24 lg:py-32 bg-space-deep overflow-hidden">
      {/* Hexagonal grid pattern */}
      <div className="absolute inset-0 hex-grid opacity-50" />

      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-neon-violet/5 rounded-full blur-[150px]" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-neon-violet/30 bg-neon-violet/5 mb-6">
            <div className="w-2 h-2 rounded-full bg-neon-violet animate-pulse" />
            <span className="text-sm font-rajdhani font-semibold text-neon-violet tracking-wider uppercase">
              Trust & Compliance
            </span>
          </div>
          <h2 className="font-orbitron text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
            Compliance &{' '}
            <span className="text-neon-violet neon-glow-text-violet">Certifications</span>
          </h2>
          <p className="text-lg text-white/50 max-w-2xl mx-auto font-space">
            We meet and exceed the highest international standards for security and compliance.
          </p>
        </div>

        {/* Certification Badges */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {certifications.map((cert, index) => {
            const Icon = cert.icon;
            return (
              <div
                key={cert.name}
                className="holographic-badge rounded-xl p-8 text-center group relative overflow-hidden"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                {/* Shimmer effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />

                {/* Icon */}
                <div className="relative mb-6 w-20 h-20 mx-auto rounded-full bg-gradient-to-br from-neon-cyan/10 to-neon-violet/10 border border-neon-cyan/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-500">
                  <Icon className="w-10 h-10 text-neon-cyan group-hover:drop-shadow-[0_0_10px_rgba(0,245,255,0.6)] transition-all duration-300" />
                </div>

                {/* Name */}
                <h3 className="font-orbitron text-xl font-bold text-white mb-3 group-hover:text-neon-cyan transition-colors duration-300">
                  {cert.name}
                </h3>

                {/* Description */}
                <p className="text-sm text-white/50 font-space leading-relaxed">
                  {cert.description}
                </p>

                {/* Bottom glow */}
                <div className="absolute bottom-0 left-4 right-4 h-px bg-gradient-to-r from-transparent via-neon-violet to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
            );
          })}
        </div>

        {/* Additional trust indicators */}
        <div className="mt-16 flex flex-wrap justify-center gap-6">
          {['GDPR Compliant', 'HIPAA Ready', 'PCI DSS Level 1', 'FedRAMP'].map((badge) => (
            <div
              key={badge}
              className="px-4 py-2 rounded-full border border-white/10 bg-white/5 text-sm font-rajdhani text-white/60 hover:text-white hover:border-neon-cyan/30 hover:shadow-[0_0_10px_rgba(0,245,255,0.2)] transition-all duration-300"
            >
              {badge}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
