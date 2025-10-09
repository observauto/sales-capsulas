import React, { useState, useEffect, useCallback } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';
import { motion } from 'framer-motion';
import { ArrowLeft, ArrowRight } from 'lucide-react';

const SLIDE_IMAGES = [
  "https://via.placeholder.com/800x450/1C3B71/FFFFFF?text=Cápsula+1",
  "https://via.placeholder.com/800x450/D70102/FFFFFF?text=Cápsula+2",
  "https://via.placeholder.com/800x450/FDCB00/1A1A1A?text=Cápsula+3",
  "https://via.placeholder.com/800x450/213F7A/FFFFFF?text=Cápsula+4",
  "https://via.placeholder.com/800x450/B22E8D/FFFFFF?text=Cápsula+5",
  "https://via.placeholder.com/800x450/6B3E26/FFFFFF?text=Cápsula+6",
];

export default function ProductSlider() {
  const autoplayOptions = {
    delay: 4000, // 4 seconds
    stopOnInteraction: false,
    stopOnMouseEnter: true,
  };

  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [Autoplay(autoplayOptions)]);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState([]);
  const [progress, setProgress] = useState(0);

  const scrollTo = useCallback((index) => emblaApi && emblaApi.scrollTo(index), [emblaApi]);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi, setSelectedIndex]);

  const onInit = useCallback((emblaApi) => {
    setScrollSnaps(emblaApi.scrollSnapList());
  }, []);

  const updateProgress = useCallback(() => {
    if (!emblaApi) return;
    const autoplay = emblaApi.plugins().autoplay;
    if (autoplay) {
      const { duration, timeSpent } = autoplay.options;
      setProgress(timeSpent / duration);
    }
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;

    onInit(emblaApi);
    onSelect();
    emblaApi.on('select', onSelect);
    emblaApi.on('reInit', onInit);

    const autoplay = emblaApi.plugins().autoplay;
    if (autoplay) {
      autoplay.on('play', updateProgress);
      autoplay.on('stop', updateProgress);
      emblaApi.on('scroll', updateProgress); // Update progress on manual scroll too
      const interval = setInterval(updateProgress, 50); // Update progress more frequently
      return () => {
        clearInterval(interval);
        emblaApi.off('select', onSelect);
        emblaApi.off('reInit', onInit);
        autoplay.off('play', updateProgress);
        autoplay.off('stop', updateProgress);
        emblaApi.off('scroll', updateProgress);
      };
    }
  }, [emblaApi, onInit, onSelect, updateProgress]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ delay: 0.2 }}
      className="relative mt-10"
    >
      <div className="overflow-hidden rounded-2xl shadow-soft" ref={emblaRef}>
        <div className="flex -ml-4"> {/* Negative margin to offset padding on slides */}
          {SLIDE_IMAGES.map((src, index) => (
            <div className="flex-none w-full pl-4" key={index}> {/* Padding on each slide */}
              <img
                src={src}
                alt={`Cápsula Observauto ${index + 1}`}
                className="block w-full h-auto rounded-xl object-cover aspect-video"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Navigation Arrows */}
      <div className="absolute top-1/2 -translate-y-1/2 left-0 right-0 flex justify-between px-4">
        <button
          className="p-2 bg-white/70 rounded-full shadow-md text-oa-ink hover:bg-white transition-colors"
          onClick={() => emblaApi.scrollPrev()}
          aria-label="Previous slide"
        >
          <ArrowLeft size={24} />
        </button>
        <button
          className="p-2 bg-white/70 rounded-full shadow-md text-oa-ink hover:bg-white transition-colors"
          onClick={() => emblaApi.scrollNext()}
          aria-label="Next slide"
        >
          <ArrowRight size={24} />
        </button>
      </div>

      {/* Dots and Progress Bar */}
      <div className="flex justify-center items-center mt-6 gap-2">
        {scrollSnaps.map((_, index) => (
          <button
            key={index}
            className={`w-3 h-3 rounded-full transition-colors ${
              index === selectedIndex ? 'bg-oa-red' : 'bg-oa-gray hover:bg-oa-muted-blue'
            }`}
            onClick={() => scrollTo(index)}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
        {/* Progress Bar */}
        <div className="relative w-24 h-1 bg-oa-gray rounded-full ml-4 overflow-hidden">
          <motion.div
            className="absolute top-0 left-0 h-full rounded-full"
            style={{
              width: `${progress * 100}%`,
              background: `linear-gradient(to right, var(--oa-blue), var(--oa-red))`
            }}
            initial={{ width: 0 }}
            animate={{ width: `${progress * 100}%` }}
            transition={{ duration: 0.1, ease: "linear" }}
          />
        </div>
      </div>
    </motion.div>
  );
}