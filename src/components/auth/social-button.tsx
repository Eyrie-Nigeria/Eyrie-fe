'use client';

import { Button } from '@/components/ui/button';
import Image from 'next/image';

interface SocialButtonProps {
  provider: 'google';
  onClick: () => void;
  children: React.ReactNode;
}

export function SocialButton({ provider, onClick, children }: SocialButtonProps) {
  return (
    <Button type="button" variant="outline" onClick={onClick} className="google-button">
      <Image
        src={`/icon/${provider}-icon.svg`}
        alt={provider}
        width={18}
        height={18}
        className="mr-2.5"
        loading="lazy"
        sizes="18px"
      />
      {children}
    </Button>
  );
}
