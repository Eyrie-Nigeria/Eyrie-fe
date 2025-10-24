// src/data/listings-data.ts

export interface Listing {
  id: number;
  title: string;
  location: string;
  price: string;
  priceValue: number;
  type: 'Buy' | 'Rent';
  bedrooms: number;
  bathrooms: number;
  size: string;
  image: string;
  description: string;
  gallery: string[];
  category: string;
  furnishing: 'Furnished' | 'Semi-Furnished' | 'Unfurnished';
  amenities: string[];
  featured: boolean;
  flashSale: boolean;
  specialOffer: boolean;
  rating?: number;
}

export const listings: Listing[] = [
  {
    id: 1,
    title: 'Loft Apartment',
    location: 'Lagos',
    price: '₦1,000,000',
    priceValue: 1000000,
    type: 'Rent',
    bedrooms: 3,
    bathrooms: 2,
    size: '1,500 Sqft',
    image: '/images/feature2.jpg',
    description:
      'This luxurious apartment offers a spacious living area, modern kitchen, and a serene environment. Perfect for families looking for comfort and style.',
    gallery: ['/images/feature2.jpg', '/images/feature2.jpg'],
    category: 'Apartment',
    furnishing: 'Furnished',
    amenities: ['Parking', 'Security'],
    featured: true,
    flashSale: true,
    specialOffer: false,
    rating: 4.8,
  },
  {
    id: 2,
    title: 'Modern Duplex',
    location: 'Abuja',
    price: '₦2,000,000',
    priceValue: 2000000,
    type: 'Buy',
    bedrooms: 3,
    bathrooms: 2,
    size: '1,500 Sqft',
    image: '/images/feature3.jpg',
    description:
      'This luxurious duplex offers a spacious living area, modern kitchen, and a serene environment. Perfect for families looking for comfort and style.',
    gallery: ['/images/feature3.jpg', '/images/feature3.jpg', '/images/feature3.jpg'],
    category: 'Duplex',
    furnishing: 'Semi-Furnished',
    amenities: ['Parking', 'Swimming Pool', 'Security'],
    featured: true,
    flashSale: false,
    specialOffer: true,
    rating: 4.6,
  },
  {
    id: 4,
    title: 'Beachside Villa',
    location: 'Lagos',
    price: '₦4,000,000',
    priceValue: 4000000,
    type: 'Buy',
    bedrooms: 4,
    bathrooms: 3,
    size: '2,000 Sqft',
    image: '/images/feature1.jpg',
    description:
      'Experience luxury living at its finest with this beautiful beachside villa offering stunning ocean views.',
    gallery: ['/images/feature1.jpg', '/images/feature1.jpg', '/images/feature1.jpg'],
    category: 'Villa',
    furnishing: 'Furnished',
    amenities: ['Parking', 'Swimming Pool', 'Security', 'Balcony'],
    featured: true,
    flashSale: false,
    specialOffer: true,
    rating: 4.9,
  },
  {
    id: 5,
    title: 'Luxury Loft',
    location: 'Ibadan',
    price: '₦5,000,000',
    priceValue: 5000000,
    type: 'Rent',
    bedrooms: 2,
    bathrooms: 2,
    size: '1,200 Sqft',
    image: '/images/feature7.jpg',
    description:
      'A stylish loft apartment with breathtaking views and modern interiors, perfect for urban living.',
    gallery: ['/images/feature7.jpg', '/images/feature7.jpg'],
    category: 'Apartment',
    furnishing: 'Semi-Furnished',
    amenities: ['Parking', 'Gym'],
    featured: false,
    flashSale: true,
    specialOffer: false,
    rating: 4.7,
  },
  {
    id: 6,
    title: 'Cozy Bungalow',
    location: 'Enugu',
    price: '₦1,500,000,000,000',
    priceValue: 1500000000000,
    type: 'Buy',
    bedrooms: 2,
    bathrooms: 1,
    size: '1,000 Sqft',
    image: '/images/feature2.jpg',
    description:
      'A charming bungalow perfect for small families or couples looking for a peaceful retreat.',
    gallery: ['/images/feature2.jpg', '/images/feature2.jpg'],
    category: 'Bungalow',
    furnishing: 'Unfurnished',
    amenities: ['Parking', 'Garden'],
    featured: true,
    flashSale: false,
    specialOffer: true,
    rating: 4.4,
  },
  {
    id: 7,
    title: 'Penthouse Suite',
    location: 'Lagos',
    price: '₦8,000,000',
    priceValue: 8000000,
    type: 'Rent',
    bedrooms: 5,
    bathrooms: 4,
    size: '3,000 Sqft',
    image: '/images/feature3.jpg',
    description: 'An exclusive penthouse with panoramic city views and top-tier amenities.',
    gallery: ['/images/feature3.jpg', '/images/feature3.jpg', '/images/feature3.jpg'],
    category: 'Penthouse',
    furnishing: 'Furnished',
    amenities: ['Parking', 'Swimming Pool', 'Gym', 'Security', 'Balcony'],
    featured: true,
    flashSale: true,
    specialOffer: false,
    rating: 5.0,
  },
  {
    id: 8,
    title: 'Garden Cottage',
    location: 'Calabar',
    price: '₦2,500,000',
    priceValue: 2500000,
    type: 'Buy',
    bedrooms: 3,
    bathrooms: 2,
    size: '1,800 Sqft',
    image: '/images/feature4.jpg',
    description: 'A beautiful cottage surrounded by lush gardens, ideal for nature lovers.',
    gallery: ['/images/feature4.jpg', '/images/feature4.jpg'],
    category: 'Cottage',
    furnishing: 'Semi-Furnished',
    amenities: ['Parking', 'Garden', 'Security'],
    featured: false,
    flashSale: false,
    specialOffer: true,
    rating: 4.5,
  },
  {
    id: 9,
    title: 'Executive Mansion',
    location: 'Abuja',
    price: '₦15,000,000',
    priceValue: 15000000,
    type: 'Buy',
    bedrooms: 6,
    bathrooms: 5,
    size: '5,000 Sqft',
    image: '/images/feature1.jpg',
    description: 'An opulent mansion with world-class amenities and breathtaking architecture.',
    gallery: ['/images/feature1.jpg', '/images/feature1.jpg', '/images/feature1.jpg'],
    category: 'Mansion',
    furnishing: 'Furnished',
    amenities: ['Parking', 'Swimming Pool', 'Gym', 'Security', 'Garden', 'Balcony'],
    featured: true,
    flashSale: false,
    specialOffer: false,
    rating: 4.9,
  },
  {
    id: 10,
    title: 'Studio Apartment',
    location: 'Benin',
    price: '₦800,000',
    priceValue: 800000,
    type: 'Rent',
    bedrooms: 1,
    bathrooms: 1,
    size: '600 Sqft',
    image: '/images/feature2.jpg',
    description: 'A compact and modern studio apartment perfect for young professionals.',
    gallery: ['/images/feature2.jpg', '/images/feature2.jpg'],
    category: 'Studio Apartment',
    furnishing: 'Furnished',
    amenities: ['Parking', 'Security'],
    featured: false,
    flashSale: true,
    specialOffer: false,
    rating: 4.2,
  },
  {
    id: 11,
    title: 'Townhouse',
    location: 'Owerri',
    price: '₦3,500,000',
    priceValue: 3500000,
    type: 'Buy',
    bedrooms: 4,
    bathrooms: 3,
    size: '2,200 Sqft',
    image: '/images/feature3.jpg',
    description: 'A spacious townhouse with modern finishes in a secure gated community.',
    gallery: ['/images/feature3.jpg', '/images/feature3.jpg', '/images/feature3.jpg'],
    category: 'Townhouse',
    furnishing: 'Semi-Furnished',
    amenities: ['Parking', 'Swimming Pool', 'Security', 'Garden'],
    featured: true,
    flashSale: false,
    specialOffer: true,
    rating: 4.6,
  },
  {
    id: 12,
    title: 'Waterfront Condo',
    location: 'Lagos',
    price: '₦6,500,000,000,000',
    priceValue: 6500000000000,
    type: 'Rent',
    bedrooms: 3,
    bathrooms: 2,
    size: '1,800 Sqft',
    image: '/images/feature4.jpg',
    description: 'Luxury waterfront condominium with stunning lagoon views and premium amenities.',
    gallery: ['/images/feature4.jpg', '/images/feature4.jpg'],
    category: 'Condominium',
    furnishing: 'Furnished',
    amenities: ['Parking', 'Swimming Pool', 'Gym', 'Security', 'Balcony'],
    featured: true,
    flashSale: true,
    specialOffer: false,
    rating: 4.8,
  },
];

// Helper functions
export function getFeaturedListings(): Listing[] {
  return listings.filter((listing) => listing.featured);
}

export function getTopRatedListings(limit?: number): Listing[] {
  const topRated = listings
    .filter((listing) => listing.rating && listing.rating >= 4.5)
    .sort((a, b) => (b.rating || 0) - (a.rating || 0));

  return limit ? topRated.slice(0, limit) : topRated;
}

export function getListingsByType(type: 'Buy' | 'Rent'): Listing[] {
  return listings.filter((listing) => listing.type === type);
}

export function getListingById(id: number): Listing | undefined {
  return listings.find((listing) => listing.id === id);
}
