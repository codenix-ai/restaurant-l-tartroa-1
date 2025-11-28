'use client';

import { createContext, useContext, ReactNode } from 'react';
import { useRestaurantConfig, RestaurantConfig } from '@/hooks/useRestaurantConfig';

type ConfigContextType = {
  config: RestaurantConfig | null;
  loading: boolean;
  error: Error | null;
};

const ConfigContext = createContext<ConfigContextType | undefined>(undefined);

export function ConfigProvider({ children }: { children: ReactNode }) {
  const { config, loading, error } = useRestaurantConfig();

  return <ConfigContext.Provider value={{ config, loading, error }}>{children}</ConfigContext.Provider>;
}

export function useConfig() {
  const context = useContext(ConfigContext);
  if (context === undefined) {
    throw new Error('useConfig must be used within a ConfigProvider');
  }
  return context;
}
