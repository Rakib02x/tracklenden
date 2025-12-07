import { useState, useEffect } from 'react';
import { ArrowDownUp } from 'lucide-react';
import { useExchangeRate } from '@/hooks/useExchangeRate';

// Convert number to Bengali numerals
function toBengaliNumber(num: number): string {
  const bengaliDigits = ['০', '১', '২', '৩', '৪', '৫', '৬', '৭', '৮', '৯'];
  return num.toFixed(2).toString().replace(/\d/g, (digit) => bengaliDigits[parseInt(digit)]);
}

export function ExchangeCalculator() {
  const { rate } = useExchangeRate();
  const [myrValue, setMyrValue] = useState<string>('1');
  const [bdtValue, setBdtValue] = useState<string>('');
  const [activeField, setActiveField] = useState<'myr' | 'bdt'>('myr');

  useEffect(() => {
    if (activeField === 'myr') {
      const myr = parseFloat(myrValue) || 0;
      setBdtValue((myr * rate).toFixed(2));
    }
  }, [rate, myrValue, activeField]);

  const handleMyrChange = (value: string) => {
    setActiveField('myr');
    setMyrValue(value);
    const myr = parseFloat(value) || 0;
    setBdtValue((myr * rate).toFixed(2));
  };

  const handleBdtChange = (value: string) => {
    setActiveField('bdt');
    setBdtValue(value);
    const bdt = parseFloat(value) || 0;
    setMyrValue((bdt / rate).toFixed(2));
  };

  return (
    <section className="py-8 md:py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-lg mx-auto">
          {/* Section title */}
          <div className="text-center mb-6">
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-2">
              এক্সচেঞ্জ ক্যালকুলেটর
            </h2>
            <p className="text-muted-foreground">
              MYR থেকে BDT বা BDT থেকে MYR হিসাব করুন
            </p>
          </div>

          <div className="glass-card p-6 md:p-8">
            {/* MYR Input */}
            <div className="mb-4">
              <label className="block text-sm font-medium text-muted-foreground mb-2">
                মালয়েশিয়ান রিঙ্গিত (MYR)
              </label>
              <div className="relative">
                <div className="absolute left-4 top-1/2 -translate-y-1/2 flex items-center gap-2">
                  <span className="text-lg font-bold text-primary">🇲🇾</span>
                  <span className="text-sm font-medium text-muted-foreground">MYR</span>
                </div>
                <input
                  type="number"
                  value={myrValue}
                  onChange={(e) => handleMyrChange(e.target.value)}
                  className="w-full bg-muted/50 border border-border rounded-xl py-4 pl-24 pr-4 text-lg font-semibold text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all"
                  placeholder="0.00"
                  min="0"
                  step="0.01"
                />
              </div>
            </div>

            {/* Swap indicator */}
            <div className="flex justify-center my-4">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                <ArrowDownUp className="w-5 h-5 text-primary" />
              </div>
            </div>

            {/* BDT Input */}
            <div className="mb-6">
              <label className="block text-sm font-medium text-muted-foreground mb-2">
                বাংলাদেশী টাকা (BDT)
              </label>
              <div className="relative">
                <div className="absolute left-4 top-1/2 -translate-y-1/2 flex items-center gap-2">
                  <span className="text-lg font-bold text-primary">🇧🇩</span>
                  <span className="text-sm font-medium text-muted-foreground">BDT</span>
                </div>
                <input
                  type="number"
                  value={bdtValue}
                  onChange={(e) => handleBdtChange(e.target.value)}
                  className="w-full bg-muted/50 border border-border rounded-xl py-4 pl-24 pr-4 text-lg font-semibold text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all"
                  placeholder="0.00"
                  min="0"
                  step="0.01"
                />
              </div>
            </div>

            {/* Rate info */}
            <div className="bg-secondary/50 rounded-xl p-4 text-center">
              <p className="text-sm text-muted-foreground">
                বর্তমান রেট: <span className="font-semibold text-foreground">১ MYR = {toBengaliNumber(rate)} BDT</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
