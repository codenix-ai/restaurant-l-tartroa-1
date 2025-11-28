import type { Metadata } from 'next';
import { Playfair_Display, Inter } from 'next/font/google';
import './globals.css';
import { ApolloClientProvider } from '@/lib/apollo/apollo-provider';
import { ConfigProvider } from '@/context/ConfigContext';
import { ThemeProvider } from '@/components/providers/ThemeProvider';
import { getRestaurantConfig } from '@/hooks/useRestaurantConfig';
import { getRestaurantStructuredData } from '@/lib/constants/structured-data';
import { RESTAURANT_INFO } from '@/lib/constants/restaurant-data';

const playfair = Playfair_Display({
  variable: '--font-playfair',
  subsets: ['latin'],
  display: 'swap',
});

const inter = Inter({
  variable: '--font-inter',
  subsets: ['latin'],
  display: 'swap',
});

const siteUrl = 'https://lejardinelegant.com'; // Update with actual domain

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: `${RESTAURANT_INFO.name} | Fine Dining in ${RESTAURANT_INFO.address.city}`,
    template: `%s | ${RESTAURANT_INFO.name}`,
  },
  description: `${RESTAURANT_INFO.description}. Located in ${RESTAURANT_INFO.address.city}, offering exquisite cuisine and an unforgettable dining experience.`,
  keywords: [
    'fine dining',
    'restaurant',
    RESTAURANT_INFO.address.city,
    'gourmet',
    'upscale dining',
    'French cuisine',
    'Michelin star',
    'culinary experience',
  ],
  authors: [{ name: RESTAURANT_INFO.name }],
  creator: RESTAURANT_INFO.name,
  publisher: RESTAURANT_INFO.name,
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: siteUrl,
    siteName: RESTAURANT_INFO.name,
    title: `${RESTAURANT_INFO.name} | Fine Dining Experience`,
    description: RESTAURANT_INFO.description,
    images: [
      {
        url: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=1200&h=630&q=80&auto=format&fit=crop',
        width: 1200,
        height: 630,
        alt: RESTAURANT_INFO.name,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: `${RESTAURANT_INFO.name} | Fine Dining Experience`,
    description: RESTAURANT_INFO.description,
    images: ['https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=1200&h=630&q=80&auto=format&fit=crop'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const structuredData = getRestaurantStructuredData();

  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(structuredData),
          }}
        />
      </head>
      <body className={`${playfair.variable} ${inter.variable} antialiased`}>
        <ConfigProvider>
          <ThemeProvider>
            <ApolloClientProvider>{children}</ApolloClientProvider>
          </ThemeProvider>
        </ConfigProvider>
      </body>
    </html>
  );
}
