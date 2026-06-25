import { useState, useEffect } from 'react';
import { Shield, Menu, X } from 'lucide-react';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Services', href: '#services' },
    { label: 'Resources', href: '#resources' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? 'bg-black/60 backdrop-blur-xl border-b border-white/10'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <a href="#home" className="flex items-center gap-3 group">
            <div className="relative">
              <Shield className="w-8 h-8 text-neon-cyan transition-all duration-300 group-hover:drop-shadow-[0_0_10px_rgba(123,0,255,0.8)]" />
              <div className="absolute inset-0 w-8 h-8 bg-neon-violet/20 rounded-full blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
            <span className="font-orbitron text-xl font-bold text-white tracking-wider">
              Bit<span className="text-neon-cyan neon-glow-text">Armour</span>
            </span>
          </a>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="nav-link text-sm font-rajdhani font-semibold text-white/70 hover:text-white transition-colors duration-300 uppercase tracking-wider"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Admin Login */}
          <div className="hidden lg:block">
            <a
              href="#admin"
              className="px-4 py-2 text-sm font-rajdhani font-semibold text-neon-cyan border border-neon-cyan/40 rounded-lg hover:border-neon-cyan hover:shadow-[0_0_15px_rgba(0,245,255,0.4)] transition-all duration-300 uppercase tracking-wider"
            >
              Admin Login
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden text-white p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-black/90 backdrop-blur-xl border-b border-white/10">
          <div className="px-4 py-4 space-y-3">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="block text-sm font-rajdhani font-semibold text-white/70 hover:text-white py-2 uppercase tracking-wider"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <a
              href="#admin"
              className="block px-4 py-2 text-sm font-rajdhani font-semibold text-neon-cyan border border-neon-cyan/40 rounded-lg text-center uppercase tracking-wider"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Admin Login
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
