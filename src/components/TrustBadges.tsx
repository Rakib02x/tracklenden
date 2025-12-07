import { Users, BadgeCheck, Banknote } from 'lucide-react';

const stats = [
  {
    icon: Users,
    value: '১০,০০০+',
    label: 'সন্তুষ্ট গ্রাহক',
  },
  {
    icon: Banknote,
    value: '৫০০ কোটি+',
    label: 'মোট ট্রান্সফার',
  },
  {
    icon: BadgeCheck,
    value: '৯৯.৯%',
    label: 'সফলতার হার',
  },
];

export function TrustBadges() {
  return (
    <section className="py-12 md:py-16">
      <div className="container mx-auto px-4">
        <div className="hero-gradient rounded-3xl p-8 md:p-12 relative overflow-hidden">
          {/* Decorative elements */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-accent/10 rounded-full blur-2xl" />

          <div className="relative z-10 grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-6">
            {stats.map((stat, index) => (
              <div
                key={stat.label}
                className="text-center animate-fade-in-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-white/10 flex items-center justify-center">
                  <stat.icon className="w-8 h-8 text-white" />
                </div>
                <div className="text-3xl md:text-4xl font-bold text-white mb-1">
                  {stat.value}
                </div>
                <div className="text-white/70 text-sm md:text-base">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
