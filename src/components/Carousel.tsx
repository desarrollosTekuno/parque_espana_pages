// Carousel.tsx
import { useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { motion } from "framer-motion";
import Swimming from "@/assets/images/Home/Swimming.webp";

export default function Carousel({ items }: any) {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: "start",
    loop: true,
    slidesToScroll: 1,
    duration: 30,
    containScroll: "trimSnaps",
  });

  const [canPrev, setCanPrev] = useState(false);
  const [canNext, setCanNext] = useState(false);

  const updateButtons = useCallback(() => {
    if (!emblaApi) return;
    setCanPrev(emblaApi.canScrollPrev());
    setCanNext(emblaApi.canScrollNext());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    updateButtons();
    emblaApi.on("select", updateButtons);
    emblaApi.on("reInit", updateButtons);
  }, [emblaApi, updateButtons]);

  useEffect(() => {
    if (!emblaApi) return;
    const autoplay = setInterval(() => {
      emblaApi.scrollNext();
    }, 2000);
    return () => clearInterval(autoplay);
  }, [emblaApi]);

  return (
    <div className="relative w-full max-w-full">
      <div className="w-full max-w-full overflow-hidden" ref={emblaRef}>
        {/* Sin gap aquí — el espacio ahora vive en el padding de cada slide */}
        <div className="flex">
          {items.map((item: any) => (
            <div
              key={item.id}
              className="min-w-0 shrink-0 basis-full pr-1 sm:basis-1/2 sm:pr-3 lg:basis-1/3 lg:pr-3"
            >
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden cursor-pointer group">
                <img
                  src={Swimming}
                  alt={item.name}
                  loading="lazy"
                  className="absolute inset-0 w-full h-full object-cover"
                />
                <motion.div
                  className="absolute inset-0 bg-black/40 flex items-end justify-center p-4"
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                >
                  <p className="text-white text-[20px] sm:text-[20px] lg:text-[25px] font-bold text-center">
                    {item.name}
                  </p>
                </motion.div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <button
        onClick={() => emblaApi?.scrollPrev()}
        disabled={!canPrev}
        className="absolute left-3 sm:left-4 lg:left-6 top-1/2 -translate-y-1/2 bg-white rounded-full p-2.5 shadow-lg disabled:opacity-30 z-10"
        aria-label="Anterior"
      >
        <ChevronLeft className="w-5 h-5 text-[#004aad]" />
      </button>
      <button
        onClick={() => emblaApi?.scrollNext()}
        disabled={!canNext}
        className="absolute right-3 sm:right-4 lg:right-6 top-1/2 -translate-y-1/2 bg-white rounded-full p-2.5 shadow-lg disabled:opacity-30 z-10"
        aria-label="Siguiente"
      >
        <ChevronRight className="w-5 h-5 text-[#004aad]" />
      </button>
    </div>
  );
}