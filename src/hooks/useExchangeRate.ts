import { useState, useEffect } from 'react';
import { ref, onValue } from 'firebase/database';
import { db } from '@/lib/firebase';

export function useExchangeRate() {
  const [rate, setRate] = useState<number>(27.30);
  const [loading, setLoading] = useState(true);
  const [lastUpdated, setLastUpdated] = useState<Date>(new Date());

  useEffect(() => {
    const rateRef = ref(db, 'rate/bdt');
    
    const unsubscribe = onValue(rateRef, (snapshot) => {
      const data = snapshot.val();
      if (data !== null) {
        setRate(parseFloat(data));
        setLastUpdated(new Date());
      }
      setLoading(false);
    }, (error) => {
      console.error('Error fetching rate:', error);
      setLoading(false);
    });

    // Refresh every 30 seconds
    const interval = setInterval(() => {
      setLastUpdated(new Date());
    }, 30000);

    return () => {
      unsubscribe();
      clearInterval(interval);
    };
  }, []);

  return { rate, loading, lastUpdated };
}
