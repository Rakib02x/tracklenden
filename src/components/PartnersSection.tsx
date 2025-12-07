import epasarLogo from '@/assets/epasar.png';
import cblLogo from '@/assets/cbl.png';
import westernLogo from '@/assets/western.png';

const partners = [
  { name: 'ePasar', logo: epasarLogo },
  { name: 'City Bank', logo: cblLogo },
  { name: 'Western Union', logo: westernLogo },
];

export function PartnersSection() {
  return (
    <section className="py-12 md:py-16 bg-muted/30">
      <div className="container mx-auto px-4">
        {/* Section header */}
        <div className="text-center mb-10">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-3">
            আমাদের সহযোগী প্রতিষ্ঠান
          </h2>
          <p className="text-muted-foreground">
            বিশ্বস্ত ও নির্ভরযোগ্য পার্টনারদের সাথে আমাদের সেবা
          </p>
        </div>

        {/* Partners grid */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-3xl mx-auto">
          {partners.map((partner, index) => (
            <div
              key={partner.name}
              className="glass-card p-6 flex items-center justify-center hover:shadow-elevated transition-all duration-300 animate-fade-in-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <img
                src={partner.logo}
                alt={partner.name}
                className="h-12 md:h-16 object-contain filter grayscale hover:grayscale-0 transition-all duration-300"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
