'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

interface Feature {
  id: string;
  title: string;
  description: string;
  image: string;
  alt: string;
}

const features: Feature[] = [
  {
    id: 'personalized-matches',
    title: 'Personalized matches',
    description:
      "Tell us what you're looking for, and we'll show you homes that fit your lifestyle perfectly.",
    image: '/images/building.png',
    alt: 'Icon of a building representing personalized matches',
  },
  {
    id: 'schedule-visits',
    title: 'Schedule visits online',
    description: 'Book property viewings instantly — no phone calls, no hassle.',
    image: '/images/clock.png',
    alt: 'Clock icon representing scheduling visits online',
  },
  {
    id: 'save-favorites',
    title: 'Save favorite properties',
    description: 'Like what you see? Save listings to revisit anytime and compare easily.',
    image: '/images/save.png',
    alt: 'Heart icon representing saving favorite properties',
  },
];

export function FeaturesGrid() {
  return (
    <div className="px-4 sm:px-6">
      {/* Section Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="flex items-center justify-between mb-6 sm:mb-8"
      >
        <h2 className="text-lg sm:text-xl lg:text-2xl xl:text-3xl font-bold text-black">
          What You Get with Eyrie
        </h2>
      </motion.div>

      {/* Features Grid */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 lg:gap-8 mb-10 sm:mb-12 lg:mb-16"
      >
        {features.map((feature, index) => (
          <FeatureCard key={feature.id} feature={feature} index={index} />
        ))}
      </motion.div>
    </div>
  );
}

interface FeatureCardProps {
  feature: Feature;
  index: number;
}

function FeatureCard({ feature, index }: FeatureCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      className="bg-[#FFEDE6] border-2 border-[#FF4500] rounded-2xl lg:rounded-3xl p-5 sm:p-6 lg:p-7 hover:shadow-lg transition-all duration-300"
    >
      <Image
        src={feature.image}
        alt={feature.alt}
        width={80}
        height={80}
        className="mb-4 sm:mb-5 w-[60px] sm:w-[70px] lg:w-[80px] h-auto"
        loading="lazy"
        sizes="(max-width: 640px) 60px, (max-width: 1024px) 70px, 80px"
      />
      <h4 className="font-semibold text-sm sm:text-base lg:text-lg text-[#8C2600] mb-2 sm:mb-3 text-left">
        {feature.title}
      </h4>
      <p className="text-xs sm:text-sm lg:text-base text-[#161616] text-left leading-relaxed">
        {feature.description}
      </p>
    </motion.div>
  );
}
