export interface UnsplashImageConfig {
  id: string;
  alt: string;
  width?: number;
  height?: number;
  quality?: number;
}

export function getUnsplashUrl(config: UnsplashImageConfig): string {
  const { id, width = 1920, height = 1080, quality = 80 } = config;
  return `https://images.unsplash.com/${id}?w=${width}&h=${height}&q=${quality}&auto=format&fit=crop`;
}
