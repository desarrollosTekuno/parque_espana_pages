import { useCallback, useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import useEmblaCarousel from "embla-carousel-react";
import { ChevronLeft, ChevronRight, ImageOff, Loader2 } from "lucide-react";
import { motion } from "framer-motion";
import { getClubCarousel, CLUB_IDS, type CarouselItem } from "../services/api";

// Mínimo de espacios que siempre se deben ver en el carrusel
const MIN_SLIDES = 3;

export default function Carousel() {
  const location = useLocation();

  const isParque2 = location.pathname.startsWith("/parque-espana-2");
  const clubId = isParque2 ? CLUB_IDS.PARQUE_2 : CLUB_IDS.PARQUE_1;

  const [items, setItems] = useState<CarouselItem[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    getClubCarousel(clubId)
      .then((data) => {
        const filled = [...data];
        // Si vienen menos ítems que el mínimo, rellena con espacios vacíos (grises)
        while (filled.length < MIN_SLIDES) {
          filled.push({
            id: `placeholder-${filled.length}`,
            description: "",
            image_url: "",
          });
        }
        setItems(filled);
      })
      .catch((err) => console.error("Error cargando carrusel:", err))
      .finally(() => setLoading(false));
  }, [clubId]);

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

  if (loading) {
    return (
      <div className="w-full aspect-[4/3] max-h-[400px] bg-gray-200 rounded-2xl flex items-center justify-center">
        <Loader2 className="w-8 h-8 text-gray-400 animate-spin" />
      </div>
    );
  }

  return (
    <div className="relative w-full max-w-full">
      <div className="w-full max-w-full overflow-hidden" ref={emblaRef}>
        <div className="flex">
          {items.map((item) => {
            const isPlaceholder = !item.image_url;

            return (
              <div
                key={item.id}
                className="min-w-0 shrink-0 basis-full pr-1 sm:basis-1/2 sm:pr-3 lg:basis-1/3 lg:pr-3"
              >
                <div className="relative aspect-[4/3] rounded-2xl overflow-hidden cursor-pointer group bg-gray-300">
                  {!isPlaceholder ? (
                    <img
                      src={item.image_url}
                      alt={item.description}
                      loading="lazy"
                      className="absolute inset-0 w-full h-full object-cover"
                    />
                  ) : (
                    <div className="absolute inset-0 bg-gray-300 w-full h-full flex flex-col items-center justify-center gap-2 text-gray-400">
                      <ImageOff className="w-10 h-10" />
                      <span className="text-sm font-medium">Próximamente</span>
                    </div>
                  )}

                  {!isPlaceholder && (
                    <motion.div
                      className="absolute inset-0 bg-black/40 flex items-end justify-center p-4"
                      initial={{ opacity: 0 }}
                      whileHover={{ opacity: 1 }}
                      transition={{ duration: 0.3 }}
                    >
                      <p className="text-white text-[20px] sm:text-[20px] lg:text-[25px] font-bold text-center">
                        {item.description}
                      </p>
                    </motion.div>
                  )}
                </div>
              </div>
            );
          })}
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