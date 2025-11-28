'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

export function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="about" className="py-20 md:py-32 px-4 bg-slate-50">
      <div className="max-w-7xl mx-auto">
        <div ref={ref} className="grid gap-16 lg:grid-cols-2 lg:gap-24 items-center">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.8 }}
            className="order-2 lg:order-1"
          >
            <h2 className="mb-8 text-4xl font-bold text-slate-900 md:text-5xl lg:text-6xl">Our Story</h2>
            <div className="space-y-6 text-base md:text-lg text-slate-700 leading-relaxed">
              <p>
                Since 2010, Le Jardin Élégant has been a beacon of culinary excellence, nestled in the heart of New York
                City. Our journey began with a simple vision: to create an unforgettable dining experience that marries
                classical French techniques with contemporary innovation.
              </p>
              <p>
                Every dish that leaves our kitchen tells a story—a narrative woven through locally-sourced ingredients,
                meticulous preparation, and an unwavering commitment to perfection. Our award-winning chef brings over
                20 years of Michelin-star experience to every plate.
              </p>
              <p>
                We believe that dining is not just about food; it's about creating memories. From our carefully curated
                wine selection to our attentive service, every detail is designed to transport you to a world of refined
                elegance.
              </p>
            </div>
          </motion.div>

          {/* Stats Grid */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="order-1 lg:order-2 grid grid-cols-2 gap-6 lg:gap-8"
          >
            <div className="rounded-xl bg-white p-8 lg:p-10 shadow-xl hover:shadow-2xl transition-shadow">
              <div className="text-5xl lg:text-6xl font-bold text-amber-600 mb-3">15+</div>
              <div className="text-sm lg:text-base text-slate-600 font-medium">Years of Excellence</div>
            </div>
            <div className="rounded-xl bg-white p-8 lg:p-10 shadow-xl hover:shadow-2xl transition-shadow">
              <div className="text-5xl lg:text-6xl font-bold text-amber-600 mb-3">2</div>
              <div className="text-sm lg:text-base text-slate-600 font-medium">Michelin Stars</div>
            </div>
            <div className="rounded-xl bg-white p-8 lg:p-10 shadow-xl hover:shadow-2xl transition-shadow">
              <div className="text-5xl lg:text-6xl font-bold text-amber-600 mb-3">50K+</div>
              <div className="text-sm lg:text-base text-slate-600 font-medium">Happy Guests</div>
            </div>
            <div className="rounded-xl bg-white p-8 lg:p-10 shadow-xl hover:shadow-2xl transition-shadow">
              <div className="text-5xl lg:text-6xl font-bold text-amber-600 mb-3">100%</div>
              <div className="text-sm lg:text-base text-slate-600 font-medium">Locally Sourced</div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
