import { useState } from 'react';
import { Search, Loader2, CheckCircle, Clock, ArrowLeft, AlertCircle } from 'lucide-react';
import { useTransactions, Transaction } from '@/hooks/useTransactions';

interface TransactionTrackerProps {
  onBack: () => void;
}

export function TransactionTracker({ onBack }: TransactionTrackerProps) {
  const [accountNumber, setAccountNumber] = useState('');
  const { transactions, loading, error, searched, searchTransactions, resetSearch } = useTransactions();

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    searchTransactions(accountNumber);
  };

  const handleInputChange = (value: string) => {
    // Only allow digits and max 11 characters
    const cleaned = value.replace(/\D/g, '').slice(0, 11);
    setAccountNumber(cleaned);
    if (searched) {
      resetSearch();
    }
  };

  return (
    <section className="py-8 md:py-12 animate-fade-in-up">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto">
          {/* Back button */}
          <button
            onClick={onBack}
            className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors mb-6"
          >
            <ArrowLeft className="w-5 h-5" />
            <span>হোমে ফিরে যান</span>
          </button>

          {/* Header */}
          <div className="text-center mb-8">
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-2">
              ট্রানজেকশন ট্র্যাক করুন
            </h2>
            <p className="text-muted-foreground">
              আপনার লেনদেনের অবস্থা জানতে একাউন্ট নম্বর দিন
            </p>
          </div>

          {/* Search form */}
          <form onSubmit={handleSearch} className="mb-8">
            <div className="glass-card p-6 md:p-8">
              <label className="block text-sm font-medium text-muted-foreground mb-3">
                আপনার ১১ ডিজিট একাউন্ট নাম্বার লিখুন
              </label>
              <div className="flex flex-col sm:flex-row gap-3">
                <div className="relative flex-1">
                  <input
                    type="text"
                    value={accountNumber}
                    onChange={(e) => handleInputChange(e.target.value)}
                    placeholder="উদাহরণ: 01712345678"
                    className="w-full bg-muted/50 border border-border rounded-xl py-4 px-4 text-lg font-medium text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all tracking-wider"
                    maxLength={11}
                    pattern="\d{11}"
                    inputMode="numeric"
                  />
                  <span className="absolute right-4 top-1/2 -translate-y-1/2 text-sm text-muted-foreground">
                    {accountNumber.length}/১১
                  </span>
                </div>
                <button
                  type="submit"
                  disabled={accountNumber.length !== 11 || loading}
                  className="flex items-center justify-center gap-2 bg-primary text-primary-foreground px-6 py-4 rounded-xl text-lg font-semibold shadow-glow hover:shadow-elevated transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed disabled:shadow-none"
                >
                  {loading ? (
                    <Loader2 className="w-5 h-5 animate-spin" />
                  ) : (
                    <Search className="w-5 h-5" />
                  )}
                  সার্চ করুন
                </button>
              </div>
              
              {error && (
                <div className="flex items-center gap-2 mt-4 p-3 bg-destructive/10 border border-destructive/20 rounded-xl text-destructive">
                  <AlertCircle className="w-5 h-5 flex-shrink-0" />
                  <span className="text-sm">{error}</span>
                </div>
              )}
            </div>
          </form>

          {/* Results */}
          {transactions.length > 0 && (
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-foreground mb-4">
                মোট {transactions.length}টি লেনদেন পাওয়া গেছে
              </h3>
              
              {transactions.map((tx, index) => (
                <TransactionCard 
                  key={tx.id} 
                  transaction={tx} 
                  isLatest={index === 0} 
                  delay={index * 100}
                />
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

interface TransactionCardProps {
  transaction: Transaction;
  isLatest: boolean;
  delay: number;
}

function TransactionCard({ transaction, isLatest, delay }: TransactionCardProps) {
  return (
    <div 
      className={`glass-card p-5 md:p-6 relative overflow-hidden animate-scale-in ${
        isLatest 
          ? 'border-2 border-success shadow-[0_0_20px_hsl(142_70%_45%/0.2)]' 
          : ''
      }`}
      style={{ animationDelay: `${delay}ms` }}
    >
      {/* Latest badge */}
      {isLatest && (
        <div className="absolute top-3 right-3">
          <span className="inline-flex items-center gap-1.5 bg-success text-success-foreground px-3 py-1 rounded-full text-xs font-semibold">
            <CheckCircle className="w-3.5 h-3.5" />
            সর্বশেষ আপডেট
          </span>
        </div>
      )}

      {/* Timeline dot */}
      <div className="flex gap-4">
        <div className="flex flex-col items-center">
          <div className={`w-4 h-4 rounded-full ${isLatest ? 'bg-success' : 'bg-primary/50'}`} />
          <div className="w-0.5 h-full bg-border mt-2" />
        </div>

        <div className="flex-1 pb-2">
          {/* Date */}
          <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
            <Clock className="w-4 h-4" />
            <span>{transaction.date}</span>
          </div>

          {/* Status message */}
          <p className="text-foreground font-medium text-base md:text-lg">
            {transaction.display_text}
          </p>
        </div>
      </div>
    </div>
  );
}
