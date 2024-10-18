import { useState, useCallback, useEffect } from 'react';

export const useButton = () => {
  const [activeCart, setActiveCart] = useState(false);
  const TIMEOUT_DURATION = 3000;

  const handleActiveCart = useCallback(() => setActiveCart(true), []);

  useEffect(() => {
    if (activeCart) {
      const timeoutId = setTimeout(() => setActiveCart(false), TIMEOUT_DURATION);
      return () => clearTimeout(timeoutId);
    }
  }, [activeCart]);

  return {
    handleActiveCart,
    activeCart,
  };
};
