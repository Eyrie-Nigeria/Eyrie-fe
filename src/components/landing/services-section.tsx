'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

interface Service {
  id: string;
  title: string;
  description: string;
  image: string;
  alt: string;
}

export function ServicesSection() {
  const services: Service[] = [
    {
      id: 'buy-home',
      title: 'Buy A Home',
      description:
        'Browse a wide range of homes that match your style and budget. From cozy apartments to spacious family houses.',
      image: '/images/service1.png',
      alt: 'Buy A Home',
    },
    {
      id: 'sell-property',
      title: 'Sell Your Property',
      description:
        'Get a free valuation, professional advice, and expert help to list your home and attract serious buyers.',
      image: '/images/service2.png',
      alt: 'Sell Your Property',
    },
    {
      id: 'find-rental',
      title: 'Find A Rental',
      description:
        "Whether it's for a few months or long-term, we've got great spots lined up for you.",
      image: '/images/service3.png',
      alt: 'Find A Rental',
    },
  ];

  return (
    <section className="py-8 sm:py-12 lg:py-16 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex items-center justify-between mb-6 sm:mb-8 lg:mb-12"
        >
          <h2 className="text-lg sm:text-xl lg:text-2xl xl:text-3xl font-bold text-[#FF4500]">
            Our Services
          </h2>
        </motion.div>

        {/* Services Grid */}
        <div className="max-w-7xl mx-auto">
          {/* Mobile: Single column */}
          <div className="grid grid-cols-1 gap-6 sm:hidden">
            {services.map((service, index) => (
              <ServiceCard key={service.id} service={service} index={index} variant="mobile" />
            ))}
          </div>

          {/* Tablet: 2+1 layout */}
          <div className="hidden sm:grid lg:hidden">
            <div className="grid grid-cols-2 gap-6 mb-6">
              {services.slice(0, 2).map((service, index) => (
                <ServiceCard key={service.id} service={service} index={index} variant="tablet" />
              ))}
            </div>
            <div className="flex justify-center">
              <ServiceCard service={services[2]} index={2} variant="tablet" />
            </div>
          </div>

          {/* Desktop: 3 columns */}
          <div className="hidden lg:grid grid-cols-3 gap-8">
            {services.map((service, index) => (
              <ServiceCard key={service.id} service={service} index={index} variant="desktop" />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

interface ServiceCardProps {
  service: Service;
  index: number;
  variant: 'mobile' | 'tablet' | 'desktop';
}

function ServiceCard({ service, index, variant }: ServiceCardProps) {
  const sizes = {
    mobile: { image: 60, padding: 'p-5', text: 'text-base' },
    tablet: { image: 70, padding: 'p-6', text: 'text-lg' },
    desktop: { image: 80, padding: 'p-8', text: 'text-xl' },
  };

  const currentSize = sizes[variant];

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      className={`
        bg-card shadow-2xl rounded-2xl lg:rounded-3xl hover:shadow-2xl transition-all duration-300 card-hover
        ${variant === 'tablet' && index === 2 ? 'w-full max-w-md' : 'w-full'}
        ${currentSize.padding} text-center
      `}
    >
      <Image
        src={service.image}
        alt={service.alt}
        width={currentSize.image}
        height={currentSize.image}
        className="mx-auto mb-4 w-auto h-auto"
        loading="lazy"
      />
      <h3 className={`font-semibold text-foreground mb-3 ${currentSize.text}`}>{service.title}</h3>
      <p
        className={`text-muted-foreground leading-relaxed ${
          variant === 'mobile' ? 'text-sm' : 'text-base'
        }`}
      >
        {service.description}
      </p>
    </motion.div>
  );
}
