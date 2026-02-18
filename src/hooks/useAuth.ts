import { useState, useEffect } from 'react';
import { User } from '../types';

export const useAuth = () => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Болашақта мұнда LocalStorage немесе API арқылы тексеру болады
    setLoading(false);
  }, []);

  return { user, loading, isAuthenticated: !!user };
};