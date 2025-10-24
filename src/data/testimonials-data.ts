export interface Testimonial {
  id: number;
  name: string;
  description: string;
  text: string;
  image: string;
}

export const testimonials: Testimonial[] = [
  {
    id: 1,
    name: 'John Doe',
    description: 'Home Buyer',
    text: 'Eyrie made finding my dream home so easy! The personalized matches were spot on and the online scheduling saved me so much time.',
    image: '/images/testimonial1.jpg',
  },
  {
    id: 2,
    name: 'Sarah Smith',
    description: 'Property Seller',
    text: 'As a first-time seller, I was nervous, but Eyrie guided me through the entire process. Sold my property in just 2 weeks!',
    image: '/images/testimonial2.jpg',
  },
  {
    id: 3,
    name: 'Mike Johnson',
    description: 'Real Estate Investor',
    text: "The platform's analytics and property insights helped me make informed investment decisions. Highly recommended for serious investors.",
    image: '/images/testimonial3.jpg',
  },
  // Add more testimonials as needed
];
