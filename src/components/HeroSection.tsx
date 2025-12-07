import { ArrowRight, Shield, Zap, Globe } from 'lucide-react';

interface HeroSectionProps {
  onTrackClick: () => void;
}

export function HeroSection({ onTrackClick }: HeroSectionProps) {
  return (
    <section className="relative overflow-hidden py-12 md:py-20 lg:py-28">
      {/* Background decorations */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-radial from-primary/5 to-transparent rounded-full" />
      </div>

      <div className="container mx-auto px-4">
        <div className="text-center max-w-4xl mx-auto">
          {/* Main headline */}
          <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-foreground leading-tight mb-6 animate-fade-in-up">
            দ্রুত ও নিরাপদ{' '}
            <span className="gradient-text">MYR → BDT</span>{' '}
            মানি ট্রান্সফার
          </h1>

          {/* Subtext */}
          <p className="text-lg md:text-xl lg:text-2xl text-muted-foreground mb-10 animate-fade-in-up animation-delay-100">
            মালয়েশিয়া থেকে বাংলাদেশ — নিশ্চিন্ত, সুরক্ষিত, নির্ভরযোগ্য লেনদেন।
          </p>

          {/* CTA Button */}
          <button
            onClick={onTrackClick}
            className="group inline-flex items-center gap-3 bg-primary text-primary-foreground px-8 py-4 rounded-2xl text-lg font-semibold shadow-glow hover:shadow-elevated transition-all duration-300 hover:scale-105 animate-fade-in-up animation-delay-200"
          >
            ট্রানজেকশন দেখুন
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>

          {/* Feature badges */}
          <div className="flex flex-wrap justify-center gap-4 md:gap-6 mt-12 animate-fade-in-up animation-delay-300">
            <div className="flex items-center gap-2 bg-card/80 backdrop-blur-sm px-4 py-2.5 rounded-xl border border-border/50 shadow-soft">
              <Shield className="w-5 h-5 text-primary" />
              <span className="text-sm font-medium text-foreground">১০০% নিরাপদ</span>
            </div>
            <div className="flex items-center gap-2 bg-card/80 backdrop-blur-sm px-4 py-2.5 rounded-xl border border-border/50 shadow-soft">
              <Zap className="w-5 h-5 text-accent" />
              <span className="text-sm font-medium text-foreground">দ্রুত ট্রান্সফার</span>
            </div>
            <div className="flex items-center gap-2 bg-card/80 backdrop-blur-sm px-4 py-2.5 rounded-xl border border-border/50 shadow-soft">
              <Globe className="w-5 h-5 text-teal-light" />
              <span className="text-sm font-medium text-foreground">২৪/৭ সার্ভিস</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
