import { RefreshCw, TrendingUp } from 'lucide-react';
import { useExchangeRate } from '@/hooks/useExchangeRate';

// Convert number to Bengali numerals
function toBengaliNumber(num: number): string {
  const bengaliDigits = ['০', '১', '২', '৩', '৪', '৫', '৬', '৭', '৮', '৯'];
  return num.toFixed(2).toString().replace(/\d/g, (digit) => bengaliDigits[parseInt(digit)]);
}

export function LiveRateCard() {
  const { rate, loading, lastUpdated } = useExchangeRate();

  return (
    <section className="py-8 md:py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-md mx-auto">
          <div className="glass-card p-6 md:p-8 relative overflow-hidden">
            {/* Decorative gradient */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-accent/20 to-transparent rounded-bl-full" />
            
            {/* Live indicator */}
            <div className="flex items-center gap-2 mb-4">
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-success opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-success"></span>
              </span>
              <span className="text-sm font-medium text-success">লাইভ রেট</span>
            </div>

            {/* Rate display */}
            <div className="flex items-center justify-between mb-4">
              <div>
                <p className="text-sm text-muted-foreground mb-1">আজকের এক্সচেঞ্জ রেট</p>
                <div className="flex items-baseline gap-2">
                  <span className="text-3xl md:text-4xl font-bold text-foreground">
                    ১ রিঙ্গিত = {loading ? '...' : toBengaliNumber(rate)} টাকা
                  </span>
                </div>
              </div>
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center">
                <TrendingUp className="w-7 h-7 text-primary" />
              </div>
            </div>

            {/* Last updated */}
            <div className="flex items-center gap-2 text-xs text-muted-foreground pt-4 border-t border-border/50">
              <RefreshCw className={`w-3.5 h-3.5 ${loading ? 'animate-spin' : ''}`} />
              <span>
                সর্বশেষ আপডেট: {lastUpdated.toLocaleTimeString('bn-BD', { 
                  hour: '2-digit', 
                  minute: '2-digit' 
                })}
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
