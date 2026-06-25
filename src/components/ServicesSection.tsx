import {
  ShieldCheck,
  Cloud,
  Network,
  Globe,
  Smartphone,
  ClipboardCheck,
  Server,
  Scale,
} from 'lucide-react';
import FloatingShapes from './FloatingShapes';

const services = [
  {
    title: 'VAPT & Penetration Testing',
    description: 'Comprehensive vulnerability assessment and penetration testing to identify and remediate security weaknesses before attackers exploit them.',
    icon: ShieldCheck,
    color: 'cyan',
  },
  {
    title: 'Cloud Security',
    description: 'Secure your cloud infrastructure with tailored assessments, configuration reviews, and continuous monitoring for AWS, Azure, and GCP.',
    icon: Cloud,
    color: 'violet',
  },
  {
    title: 'Network Security',
    description: 'End-to-end network security assessments, firewall audits, and intrusion detection to protect your perimeter and internal networks.',
    icon: Network,
    color: 'cyan',
  },
  {
    title: 'Web Security',
    description: 'In-depth web application security testing using OWASP methodologies to identify vulnerabilities in your applications and APIs.',
    icon: Globe,
    color: 'violet',
  },
  {
    title: 'Mobile Security',
    description: 'Security assessments for iOS and Android applications, identifying vulnerabilities in mobile apps and their backend integrations.',
    icon: Smartphone,
    color: 'cyan',
  },
  {
    title: 'Compliance & Audit',
    description: 'Regulatory compliance assessments for ISO 27001, SOC 2, GDPR, HIPAA, and industry-specific standards.',
    icon: ClipboardCheck,
    color: 'violet',
  },
  {
    title: 'Managed SOC',
    description: '24/7 Security Operations Center with real-time threat detection, incident response, and continuous security monitoring.',
    icon: Server,
    color: 'cyan',
  },
  {
    title: 'Legal & Consultancy',
    description: 'Expert cybersecurity legal advice, incident response planning, and strategic security consulting for your organization.',
    icon: Scale,
    color: 'violet',
  },
];

export default function ServicesSection() {
  return (
    <section id="services" className="relative py-24 lg:py-32 bg-space-deep overflow-hidden">
      {/* Circuit board pattern */}
      <div className="absolute inset-0 circuit-pattern opacity-50" />

      {/* Floating shapes */}
      <FloatingShapes />

      {/* Scanlines overlay */}
      <div className="absolute inset-0 scanlines" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-neon-violet/30 bg-neon-violet/5 mb-6">
            <div className="w-2 h-2 rounded-full bg-neon-violet animate-pulse" />
            <span className="text-sm font-rajdhani font-semibold text-neon-violet tracking-wider uppercase">
              Our Expertise
            </span>
          </div>
          <h2 className="font-orbitron text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
            Comprehensive Security{' '}
            <span className="text-neon-cyan neon-glow-text">Services</span>
          </h2>
          <p className="text-lg text-white/50 max-w-2xl mx-auto font-space">
            From penetration testing to 24/7 SOC monitoring, we deliver end-to-end cybersecurity solutions.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => {
            const Icon = service.icon;
            const isCyan = service.color === 'cyan';
            return (
              <div
                key={service.title}
                className={`glass-card group relative p-6 overflow-hidden ${
                  isCyan ? 'glass-card' : 'glass-card glass-card-violet'
                }`}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {/* Scan line animation on hover */}
                <div className="absolute inset-0 overflow-hidden rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-neon-cyan to-transparent animate-scan-line opacity-30" />
                </div>

                {/* Circuit pattern inside card */}
                <div className="absolute inset-0 circuit-pattern opacity-0 group-hover:opacity-30 transition-opacity duration-500 rounded-xl" />

                {/* Icon */}
                <div className={`relative mb-4 w-12 h-12 rounded-lg flex items-center justify-center ${
                  isCyan
                    ? 'bg-neon-cyan/10 border border-neon-cyan/30'
                    : 'bg-neon-violet/10 border border-neon-violet/30'
                }`}>
                  <Icon
                    className={`w-6 h-6 transition-all duration-300 group-hover:scale-110 ${
                      isCyan
                        ? 'text-neon-cyan group-hover:drop-shadow-[0_0_8px_rgba(0,245,255,0.6)]'
                        : 'text-neon-violet group-hover:drop-shadow-[0_0_8px_rgba(123,0,255,0.6)]'
                    }`}
                  />
                </div>

                {/* Title */}
                <h3 className="font-orbitron text-lg font-semibold text-white mb-2 group-hover:text-neon-cyan transition-colors duration-300">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="text-sm text-white/50 font-space leading-relaxed">
                  {service.description}
                </p>

                {/* Bottom glow line */}
                <div className={`absolute bottom-0 left-4 right-4 h-px bg-gradient-to-r from-transparent ${
                  isCyan ? 'via-neon-cyan' : 'via-neon-violet'
                } to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
