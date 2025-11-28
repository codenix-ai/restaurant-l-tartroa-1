'use client';

import { useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/Button';
import { Modal } from '@/components/ui/Modal';
import { ReservationForm } from '@/components/forms/ReservationForm';
import { useConfig } from '@/context/ConfigContext';
import { getUnsplashUrl } from '@/lib/utils/unsplash';

export function Hero() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { config } = useConfig();

  if (!config) return null;

  const { hero } = config;

  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Hero Image */}
      <Image
        src={getUnsplashUrl({
          id: hero.backgroundImage.id,
          alt: hero.backgroundImage.alt,
        })}
        alt={hero.backgroundImage.alt}
        fill
        priority
        className="object-cover"
        sizes="100vw"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50" />

      {/* Content */}
      <div className="relative z-10 flex h-full items-center justify-center px-4">
        <div className="max-w-5xl text-center">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mb-8 text-5xl font-bold text-white md:text-7xl lg:text-8xl tracking-tight"
          >
            {hero.title}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mb-6 text-xl text-amber-200 md:text-2xl lg:text-3xl font-light"
          >
            {hero.subtitle}
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mb-12 text-base md:text-lg lg:text-xl text-gray-200 max-w-3xl mx-auto leading-relaxed"
          >
            {hero.description}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex flex-col gap-4 sm:flex-row sm:justify-center sm:gap-6"
          >
            {hero.buttons.map((button, index) => (
              <Button
                key={index}
                size="lg"
                variant={button.variant as 'primary' | 'outline'}
                className={button.variant === 'outline' ? 'border-white text-white hover:bg-white/10' : ''}
                onClick={() => {
                  if (button.action === 'openReservation') {
                    setIsModalOpen(true);
                  } else if (button.action === 'scrollToMenu') {
                    document.getElementById('menu')?.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
              >
                {button.text}
              </Button>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <div className="flex flex-col items-center gap-2">
          <span className="text-sm text-white/70">Scroll to explore</span>
          <svg className="h-6 w-6 animate-bounce text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </motion.div>

      {/* Reservation Modal */}
      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} title="Reserve Your Table">
        <ReservationForm onSuccess={() => setIsModalOpen(false)} />
      </Modal>
    </section>
  );
}
