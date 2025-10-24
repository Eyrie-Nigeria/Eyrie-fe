export interface Listing {
  id: number;
  image: string;
  title: string;
  location: string;
  price: string;
  bedrooms: number;
  bathrooms: number;
  size: string;
  type: 'Buy' | 'Rent';
  rating?: number;
}

export interface FeaturedListingsResponse {
  listings: Listing[];
  total: number;
}
