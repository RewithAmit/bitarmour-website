import { Shield, Linkedin, Twitter, Mail, Phone, MapPin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="relative bg-space-black border-t border-white/5 overflow-hidden">
      {/* Circuit board pattern */}
      <div className="absolute inset-0 circuit-pattern opacity-30" />

      {/* Top gradient line */}
      <div className="neon-gradient-line w-full" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand Column */}
          <div className="lg:col-span-1">
            <a href="#home" className="flex items-center gap-3 mb-6 group">
              <Shield className="w-8 h-8 text-neon-cyan group-hover:drop-shadow-[0_0_10px_rgba(123,0,255,0.8)] transition-all" />
              <span className="font-orbitron text-xl font-bold text-white tracking-wider">
                Bit<span className="text-neon-cyan neon-glow-text">Armour</span>
              </span>
            </a>
            <p className="text-sm text-white/40 font-space leading-relaxed mb-6">
              Next-generation cybersecurity solutions for the digital age. Protecting what matters most.
            </p>
            {/* Social Icons */}
            <div className="flex gap-3">
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-white/40 hover:text-neon-cyan hover:border-neon-cyan/40 hover:shadow-[0_0_10px_rgba(0,245,255,0.2)] transition-all duration-300"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-white/40 hover:text-neon-cyan hover:border-neon-cyan/40 hover:shadow-[0_0_10px_rgba(0,245,255,0.2)] transition-all duration-300"
              >
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-orbitron text-sm font-semibold text-white mb-6 uppercase tracking-wider">
              Quick Links
            </h4>
            <ul className="space-y-3">
              {[
                { label: 'Home', href: '#home' },
                { label: 'Services', href: '#services' },
                { label: 'About', href: '#about' },
                { label: 'Resources', href: '#resources' },
                { label: 'Contact', href: '#contact' },
              ].map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm text-white/40 hover:text-neon-cyan transition-colors duration-300 font-space"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Compliance Badges */}
          <div>
            <h4 className="font-orbitron text-sm font-semibold text-white mb-6 uppercase tracking-wider">
              Compliance
            </h4>
            <div className="space-y-3">
              {['CERT-In', 'ISO 27001', 'SOC 2 Type II'].map((badge) => (
                <div
                  key={badge}
                  className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg border border-white/10 bg-white/5 text-sm text-white/50 font-space"
                >
                  <div className="w-1.5 h-1.5 rounded-full bg-neon-cyan" />
                  {badge}
                </div>
              ))}
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-orbitron text-sm font-semibold text-white mb-6 uppercase tracking-wider">
              Contact
            </h4>
            <ul className="space-y-4">
              <li>
                <a
                  href="mailto:support@bitarmour.com"
                  className="flex items-center gap-3 text-sm text-white/40 hover:text-neon-cyan transition-colors duration-300 font-space"
                >
                  <Mail className="w-4 h-4 text-neon-cyan/60" />
                  support@bitarmour.com
                </a>
              </li>
              <li>
                <a
                  href="tel:+16475721999"
                  className="flex items-center gap-3 text-sm text-white/40 hover:text-neon-cyan transition-colors duration-300 font-space"
                >
                  <Phone className="w-4 h-4 text-neon-cyan/60" />
                  +1 647 572 1999
                </a>
              </li>
              <li className="flex items-start gap-3 text-sm text-white/40 font-space">
                <MapPin className="w-4 h-4 text-neon-cyan/60 mt-0.5" />
                <span>Toronto, Canada</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-white/5">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-sm text-white/30 font-space">
              &copy; 2026 BitArmour. All rights reserved.
            </p>
            <div className="flex gap-6">
              <a href="#privacy" className="text-sm text-white/30 hover:text-neon-cyan transition-colors font-space">
                Privacy Policy
              </a>
              <a href="#terms" className="text-sm text-white/30 hover:text-neon-cyan transition-colors font-space">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
