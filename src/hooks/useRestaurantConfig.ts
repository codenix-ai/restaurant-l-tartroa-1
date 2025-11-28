import { useState, useEffect } from 'react';
import restaurantConfigJSON from '@/config/restaurant-config.json';

export type RestaurantConfig = typeof restaurantConfigJSON;

/**
 * Hook to fetch restaurant configuration
 * In production, this would fetch from a backend API
 * For now, it uses the local JSON file as a mock
 */
export function useRestaurantConfig() {
  const [config, setConfig] = useState<RestaurantConfig | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    // Simulate API call
    const fetchConfig = async () => {
      try {
        setLoading(true);

        // TODO: Replace with actual API call
        // const response = await fetch('/api/restaurant-config');
        // const data = await response.json();

        // For now, use the imported JSON
        await new Promise(resolve => setTimeout(resolve, 100)); // Simulate network delay
        setConfig(restaurantConfigJSON);
        setError(null);
      } catch (err) {
        setError(err as Error);
        // Fallback to local config
        setConfig(restaurantConfigJSON);
      } finally {
        setLoading(false);
      }
    };

    fetchConfig();
  }, []);

  return { config, loading, error };
}

/**
 * Server-side function to get restaurant configuration
 * Use this in Server Components
 */
export async function getRestaurantConfig(): Promise<RestaurantConfig> {
  // TODO: Replace with actual API call
  // const response = await fetch('https://your-backend.com/api/restaurant-config');
  // return response.json();

  // For now, return the imported JSON
  return restaurantConfigJSON;
}
