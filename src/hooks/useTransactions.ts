import { useState } from 'react';
import { ref, get } from 'firebase/database';
import { db } from '@/lib/firebase';

export interface Transaction {
  id: string;
  number: string;
  display_text: string;
  date: string;
}

export function useTransactions() {
  const [transactions, setTransactions] = useState<Transaction[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [searched, setSearched] = useState(false);

  const searchTransactions = async (accountNumber: string) => {
    if (!/^\d{11}$/.test(accountNumber)) {
      setError('অনুগ্রহ করে সঠিক ১১ ডিজিট নম্বর দিন');
      return;
    }

    setLoading(true);
    setError(null);
    setSearched(true);

    try {
      const transactionsRef = ref(db, 'single_transaction');
      const snapshot = await get(transactionsRef);
      
      if (snapshot.exists()) {
        const data = snapshot.val();
        const matchedTransactions: Transaction[] = [];

        Object.entries(data).forEach(([key, value]: [string, any]) => {
          if (value.number === accountNumber) {
            matchedTransactions.push({
              id: key,
              number: value.number,
              display_text: value.display_text,
              date: value.date,
            });
          }
        });

        // Sort by date descending (newest first)
        matchedTransactions.sort((a, b) => {
          const dateA = new Date(a.date.replace(' ', 'T'));
          const dateB = new Date(b.date.replace(' ', 'T'));
          return dateB.getTime() - dateA.getTime();
        });

        setTransactions(matchedTransactions);
        
        if (matchedTransactions.length === 0) {
          setError('এই নম্বরে কোনো লেনদেন পাওয়া যায়নি');
        }
      } else {
        setTransactions([]);
        setError('এই নম্বরে কোনো লেনদেন পাওয়া যায়নি');
      }
    } catch (err) {
      console.error('Error searching transactions:', err);
      setError('ডাটা লোড করতে সমস্যা হচ্ছে। পুনরায় চেষ্টা করুন।');
    } finally {
      setLoading(false);
    }
  };

  const resetSearch = () => {
    setTransactions([]);
    setError(null);
    setSearched(false);
  };

  return { transactions, loading, error, searched, searchTransactions, resetSearch };
}
