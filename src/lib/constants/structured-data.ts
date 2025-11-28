import { RESTAURANT_INFO } from './restaurant-data';

export function getRestaurantStructuredData() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Restaurant',
    name: RESTAURANT_INFO.name,
    image: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0',
    description: RESTAURANT_INFO.description,
    address: {
      '@type': 'PostalAddress',
      streetAddress: RESTAURANT_INFO.address.street,
      addressLocality: RESTAURANT_INFO.address.city,
      addressRegion: RESTAURANT_INFO.address.state,
      postalCode: RESTAURANT_INFO.address.zip,
      addressCountry: RESTAURANT_INFO.address.country,
    },
    telephone: RESTAURANT_INFO.phone,
    email: RESTAURANT_INFO.email,
    servesCuisine: 'Fine Dining',
    priceRange: '$$$',
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Tuesday', 'Wednesday', 'Thursday'],
        opens: '17:00',
        closes: '22:00',
      },
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Friday', 'Saturday'],
        opens: '17:00',
        closes: '23:00',
      },
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: 'Sunday',
        opens: '17:00',
        closes: '21:00',
      },
    ],
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.9',
      reviewCount: '247',
    },
  };
}
