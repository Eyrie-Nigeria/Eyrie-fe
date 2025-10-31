import { FilterOption } from '@/types';

export const defaultFilters: FilterOption[] = [
  {
    label: 'Property Type',
    options: [
      'Apartment',
      'House',
      'Duplex',
      'Bungalow',
      'Penthouse',
      'Villa',
      'Cottage',
      'Townhouse',
      'Studio Apartment',
      'Mansion',
      'Condominium',
      'Country Home',
      'Office Space',
      'Shop',
      'Warehouse',
      'Land',
    ],
  },
  {
    label: 'Location',
    options: [
      'Lagos',
      'Abuja',
      'Port Harcourt',
      'Ibadan',
      'Enugu',
      'Calabar',
      'Benin',
      'Owerri',
      'Kano',
      'Yola',
    ],
  },
  {
    label: 'Price Range',
    isRange: true,
    min: 0,
    max: 100000000,
  },
  {
    label: 'Bedrooms',
    options: ['1', '2', '3', '4', '5+'],
  },
  {
    label: 'Bathrooms',
    options: ['1', '2', '3', '4+'],
  },
  {
    label: 'Furnishing',
    options: ['Furnished', 'Semi-Furnished', 'Unfurnished'],
  },
  {
    label: 'Amenities',
    options: ['Parking', 'Swimming Pool', 'Gym', 'Security', 'Garden', 'Balcony'],
  },
];

// You can also add categories data here if needed
export const marketplaceCategories = [
  { label: 'Popular Listings', icon: 'TrendUp', color: 'text-purple-500' },
  { label: 'Recently Viewed', icon: 'Clock', color: 'text-orange-500' },
  { label: 'Top Rated', icon: 'Star', color: 'text-green-500' },
  { label: 'Luxury Homes', icon: 'Crown', color: 'text-pink-500' },
];
