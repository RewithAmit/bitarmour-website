import { BookOpen, FileText, Video, Download } from 'lucide-react';

const resources = [
  {
    title: 'Security Blog',
    description: 'Latest insights on cybersecurity trends, threats, and best practices.',
    icon: BookOpen,
  },
  {
    title: 'White Papers',
    description: 'In-depth research reports on emerging security technologies and methodologies.',
    icon: FileText,
  },
  {
    title: 'Webinars',
    description: 'Live and recorded sessions with our security experts on key topics.',
    icon: Video,
  },
  {
    title: 'Case Studies',
    description: 'Real-world success stories from our client engagements.',
    icon: Download,
  },
];

export default function ResourcesSection() {
  return (
    <section id="resources" className="relative py-24 lg:py-32 bg-space-deep overflow-hidden">
      {/* Grid overlay */}
      <div className="absolute inset-0 grid-overlay opacity-30" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-neon-cyan/30 bg-neon-cyan/5 mb-6">
            <div className="w-2 h-2 rounded-full bg-neon-cyan animate-pulse" />
            <span className="text-sm font-rajdhani font-semibold text-neon-cyan tracking-wider uppercase">
              Knowledge Hub
            </span>
          </div>
          <h2 className="font-orbitron text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
            Resources &{' '}
            <span className="text-neon-cyan neon-glow-text">Insights</span>
          </h2>
          <p className="text-lg text-white/50 max-w-2xl mx-auto font-space">
            Stay informed with our curated collection of cybersecurity resources.
          </p>
        </div>

        {/* Resources Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {resources.map((resource, index) => {
            const Icon = resource.icon;
            return (
              <div
                key={resource.title}
                className="glass-card group p-6 text-center cursor-pointer"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="w-14 h-14 rounded-lg bg-neon-cyan/10 border border-neon-cyan/20 flex items-center justify-center mx-auto mb-4 group-hover:bg-neon-cyan/20 transition-colors">
                  <Icon className="w-7 h-7 text-neon-cyan group-hover:drop-shadow-[0_0_8px_rgba(0,245,255,0.6)] transition-all" />
                </div>
                <h3 className="font-orbitron text-lg font-semibold text-white mb-2 group-hover:text-neon-cyan transition-colors">
                  {resource.title}
                </h3>
                <p className="text-sm text-white/50 font-space leading-relaxed">
                  {resource.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
