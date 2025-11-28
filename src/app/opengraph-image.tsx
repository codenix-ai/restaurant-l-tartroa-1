import { ImageResponse } from 'next/og';
import { RESTAURANT_INFO } from '@/lib/constants/restaurant-data';

export const runtime = 'edge';
export const alt = RESTAURANT_INFO.name;
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = 'image/png';

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          fontSize: 60,
          background: 'linear-gradient(135deg, #0f172a 0%, #1e293b 100%)',
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '40px',
        }}
      >
        <div
          style={{
            fontSize: 80,
            fontWeight: 'bold',
            color: '#f59e0b',
            marginBottom: 20,
          }}
        >
          {RESTAURANT_INFO.name}
        </div>
        <div
          style={{
            fontSize: 40,
            color: '#fbbf24',
            marginBottom: 10,
          }}
        >
          {RESTAURANT_INFO.tagline}
        </div>
        <div
          style={{
            fontSize: 28,
            color: '#cbd5e1',
            textAlign: 'center',
            maxWidth: '80%',
          }}
        >
          {RESTAURANT_INFO.description}
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
