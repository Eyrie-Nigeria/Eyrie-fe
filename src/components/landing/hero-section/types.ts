export interface Service {
  id: string;
  title: string;
  description: string;
  image: string;
  alt: string;
  buttonText: string;
  onClick: () => void;
}

export interface HeroSectionProps {
  isMarketplace?: boolean;
}
