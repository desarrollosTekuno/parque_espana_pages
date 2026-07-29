import { useState } from "react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Danza1 from "@/assets/images/Facilities/Activities/Danza_1.webp";
import Danza2 from "@/assets/images/Facilities/Activities/Danza_2.webp";
import Banda1 from "@/assets/images/Facilities/Activities/Banda_1.webp";
import Banda2 from "@/assets/images/Facilities/Activities/Banda_2.webp";
import Guitarra1 from "@/assets/images/Facilities/Activities/Guitarra_1.webp";
import Guitarra2 from "@/assets/images/Facilities/Activities/Guitarra_2.webp";
import Tenis1 from "@/assets/images/Facilities/Activities/Tenis_1.webp";
import Tenis2 from "@/assets/images/Facilities/Activities/Tenis_2.webp";
import Padel1 from "@/assets/images/Facilities/Activities/Padel_1.webp";
import Padel2 from "@/assets/images/Facilities/Activities/Padel_2.webp";
import Natacion1 from "@/assets/images/Facilities/Activities/Natacion_1.webp";
import Natacion2 from "@/assets/images/Facilities/Activities/Natacion_2.webp";
import Personalizado1 from "@/assets/images/Facilities/Activities/Personalizado_1.webp";
import Personalizado2 from "@/assets/images/Facilities/Activities/Personalizado_2.webp";
import Funcional1 from "@/assets/images/Facilities/Activities/Funcional_1.webp";
import Funcional2 from "@/assets/images/Facilities/Activities/Funcional_2.webp";
import Sculpting1 from "@/assets/images/Facilities/Activities/Sculpting_1.webp";
import Sculpting2 from "@/assets/images/Facilities/Activities/Sculpting_2.webp";
import Fisico1 from "@/assets/images/Facilities/Activities/Fisico_1.webp";
import Fisico2 from "@/assets/images/Facilities/Activities/Fisico_2.webp";
import Yoga1 from "@/assets/images/Facilities/Activities/Yoga_1.webp";
import Yoga2 from "@/assets/images/Facilities/Activities/Yoga_2.webp";
import Aerofit1 from "@/assets/images/Facilities/Activities/Aerofit_1.webp";
import Aerofit2 from "@/assets/images/Facilities/Activities/Aerofit_2.webp";
import Ballet from "@/assets/images/Facilities/Activities/Ballet_1.webp";
import Ballet2 from "@/assets/images/Facilities/Activities/Ballet_2.webp";
import Zumba1 from "@/assets/images/Facilities/Activities/Zumba_1.webp";
import Zumba2 from "@/assets/images/Facilities/Activities/Zumba_2.webp";
import Jazz1 from "@/assets/images/Facilities/Activities/Jazz_1.webp";
import Jazz2 from "@/assets/images/Facilities/Activities/Jazz_2.webp";
import Salsa1 from "@/assets/images/Facilities/Activities/Salsa_1.webp";
import Salsa2 from "@/assets/images/Facilities/Activities/Salsa_2.webp";
import Taekwondo1 from "@/assets/images/Facilities/Activities/Taekwondo_1.webp";
import Taekwondo2 from "@/assets/images/Facilities/Activities/Taekwondo_2.webp";

interface Activity {
  id: number;
  name: string;
  image?: string;
  back?: { image: string };
}

const activities: Activity[] = Array.from({ length: 17 }, (_, i) => ({
  id: i + 1,
  name: `Actividad ${i + 1}`,
  image: undefined,
  back: undefined,
}));

activities[0] = { id: 1, name: "Danza", image: Danza1, back: { image: Danza2 } };
activities[1] = { id: 2, name: "Banda de gaitas", image: Banda1, back: { image: Banda2 } };
activities[2] = { id: 3, name: "Guitarra", image: Guitarra1, back: { image: Guitarra2 } };
activities[3] = { id: 4, name: "Tenis", image: Tenis1, back: { image: Tenis2 } };
activities[4] = { id: 5, name: "Pádel", image: Padel1, back: { image: Padel2 } };
activities[5] = { id: 6, name: "Natación", image: Natacion1, back: { image: Natacion2 } };
activities[6] = { id: 7, name: "Personalizado", image: Personalizado1, back: { image: Personalizado2 } };
activities[7] = { id: 8, name: "Funcional", image: Funcional1, back: { image: Funcional2 } };
activities[8] = { id: 9, name: "Sculpting", image: Sculpting1, back: { image: Sculpting2 } };
activities[9] = { id: 10, name: "Acondicionamiento físico", image: Fisico1, back: { image: Fisico2 } };
activities[10] = { id: 11, name: "Yoga", image: Yoga1, back: { image: Yoga2 } };
activities[11] = { id: 12, name: "Aerofit", image: Aerofit1, back: { image: Aerofit2 } };
activities[12] = { id: 13, name: "Ballet", image: Ballet, back: { image: Ballet2 } };
activities[13] = { id: 14, name: "Zumba", image: Zumba1, back: { image: Zumba2 } };
activities[14] = { id: 15, name: "Jazz", image: Jazz1, back: { image: Jazz2 } };
activities[15] = { id: 16, name: "Salsa", image: Salsa1, back: { image: Salsa2 } };
activities[16] = { id: 17, name: "Taekwondo", image: Taekwondo1, back: { image: Taekwondo2 } };

function HoverFace({ item, style }: any) {
  if (!item) return null;
  return (
    <div
      className="absolute inset-0 h-full w-full overflow-hidden rounded-2xl bg-gray-300 [backface-visibility:hidden]"
      style={style}
    >
      {item.image && (
        <img src={item.image} alt={item.name} loading="lazy" className="absolute inset-0 h-full w-full object-cover" />
      )}
    </div>
  );
}

function HoverCard({ item }: any) {
  const [flipped, setFlipped] = useState(false);

  return (
    <div
      className="relative aspect-square overflow-hidden rounded-2xl"
      onMouseEnter={() => setFlipped(true)}
      onMouseLeave={() => setFlipped(false)}
      onClick={() => setFlipped((f) => !f)}
    >
      <div className="relative h-full w-full [perspective:1000px]">
        <motion.div
          className="relative h-full w-full [transform-style:preserve-3d]"
          animate={{ rotateY: flipped ? 180 : 0 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
        >
          <HoverFace item={item} style={{ transform: "rotateY(0deg)" }} />
          <HoverFace item={item.back ?? item} style={{ transform: "rotateY(180deg)" }} />
        </motion.div>
      </div>
    </div>
  );
}

export default function CardFlipHover() {
  const [page, setPage] = useState(0);
  const perPage = 3;
  const totalPages = Math.ceil(activities.length / perPage);

  const start = page * perPage;
  const visibleItems = activities.slice(start, start + perPage);

  const prev = () => setPage((p) => Math.max(0, p - 1));
  const next = () => setPage((p) => Math.min(totalPages - 1, p + 1));

  const touchStartX = { current: 0 };
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };
  const handleTouchEnd = (e: React.TouchEvent) => {
    const deltaX = e.changedTouches[0].clientX - touchStartX.current;
    if (deltaX < -50) next();
    if (deltaX > 50) prev();
  };

  return (
    <div className="relative w-full">
      {/* MOBILE / TABLET: paginado de 3 en 3, en una sola columna, tarjetas más grandes */}
      <div
        className="lg:hidden"
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
      >
        <div className="grid grid-cols-1 sm:max-w-sm sm:mx-auto gap-4 sm:gap-6">
          {visibleItems.map((item) => (
            <HoverCard key={item.id} item={item} />
          ))}
        </div>

        {totalPages > 1 && (
          <div className="mt-6 flex items-center justify-center gap-4">
            <button
              onClick={prev}
              disabled={page == 0}
              className="rounded-full bg-white p-2 shadow disabled:opacity-30"
            >
              <ChevronLeft className="h-5 w-5 text-[#0097b2]" />
            </button>
            <span className="text-sm text-gray-500">
              {page + 1} / {totalPages}
            </span>
            <button
              onClick={next}
              disabled={page == totalPages - 1}
              className="rounded-full bg-white p-2 shadow disabled:opacity-30"
            >
              <ChevronRight className="h-5 w-5 text-[#0097b2]" />
            </button>
          </div>
        )}
      </div>

      {/* DESKTOP (lg): las 17 tarjetas completas, sin paginación */}
      <div className="hidden grid-cols-3 gap-6 lg:grid">
        {activities.map((item) => (
          <HoverCard key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
}