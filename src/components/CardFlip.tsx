import { useEffect, useRef, useState } from "react";
import { useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import { ImageOff, Loader2 } from "lucide-react";
import { getClubHomeCards, CLUB_IDS, type HomeCardItem } from "../services/api";
import { AnimScale } from "./Animations";

function Face({ item, style }: any) {
  if (!item) return null;

  const itemImage = item.image_url;

  return (
    <div
      className="absolute inset-0 w-full h-full rounded-2xl overflow-hidden bg-gray-300 [backface-visibility:hidden]"
      style={style}
    >
      {itemImage ? (
        <>
          <img
            src={itemImage}
            alt={item.category}
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/40 flex items-end justify-center p-4">
            <p className="text-white text-[20px] sm:text-[20px] lg:text-[25px] font-bold text-center">
              {item.category}
            </p>
          </div>
        </>
      ) : (
        <div className="absolute inset-0 bg-gray-300 w-full h-full flex flex-col items-center justify-center gap-2 text-gray-400">
          <ImageOff className="w-10 h-10" />
          <span className="text-sm font-medium">Próximamente</span>
        </div>
      )}
    </div>
  );
}

export function FlipCard({ items, currentIndex, isActive, flipDuration = 0.6, onFlipComplete }: any) {
  const [flipped, setFlipped] = useState(false);
  const nextIndex = (currentIndex + 1) % items.length;

  useEffect(() => {
    if (isActive) setFlipped(true);
  }, [isActive]);

  const handleAnimationComplete = () => {
    if (!flipped) return;
    setFlipped(false);
    onFlipComplete?.();
  };

  return (
    <div className="relative aspect-square rounded-2xl [perspective:1000px]">
      <motion.div
        className="relative w-full h-full [transform-style:preserve-3d]"
        animate={{ rotateY: flipped ? 180 : 0 }}
        transition={{ duration: flipped ? flipDuration : 0, ease: "easeInOut" }}
        onAnimationComplete={handleAnimationComplete}
      >
        <Face item={items[currentIndex]} style={{ transform: "rotateY(0deg)" }} />
        <Face item={items[nextIndex]} style={{ transform: "rotateY(180deg)" }} />
      </motion.div>
    </div>
  );
}

function StaticImage({ item }: any) {
  return (
    <div className="relative aspect-square rounded-2xl overflow-hidden bg-gray-300">
      <img
        src={item.image_url}
        alt={item.category}
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-black/40 flex items-end justify-center p-4">
        <p className="text-white text-[20px] sm:text-[20px] lg:text-[25px] font-bold text-center">
          {item.category}
        </p>
      </div>
    </div>
  );
}

function StaticPlaceholder() {
  return (
    <div className="relative aspect-square rounded-2xl overflow-hidden bg-gray-300 flex flex-col items-center justify-center gap-2 text-gray-400">
      <ImageOff className="w-10 h-10" />
      <span className="text-sm font-medium">Próximamente</span>
    </div>
  );
}

function SkeletonCard() {
  return (
    <div className="relative aspect-square rounded-2xl bg-gray-200 flex items-center justify-center">
      <Loader2 className="w-8 h-8 text-gray-400 animate-spin" />
    </div>
  );
}

export default function FlipCardGrid({
  cardCount = 5,
  visibleDuration = 4000,
  flipDuration = 0.6,
}: any) {
  const location = useLocation();
  const isParque2 = location.pathname.startsWith("/parque-espana-2");
  const clubId = isParque2 ? CLUB_IDS.PARQUE_2 : CLUB_IDS.PARQUE_1;

  const [items, setItems] = useState<HomeCardItem[]>([]);
  const [loaded, setLoaded] = useState(false);

  const realCount = Math.min(items.length, cardCount);
  const canFlip = !isParque2 && items.length >= 2;

  const [indices, setIndices] = useState<number[]>([]);
  const [activeCard, setActiveCard] = useState(0);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | undefined>(undefined);

  // Evita que Strict Mode dispare la petición dos veces y reinicie el ciclo
  const fetchedForClubRef = useRef<number | null>(null);

  useEffect(() => {
    if (fetchedForClubRef.current == clubId) return;
    fetchedForClubRef.current = clubId;

    getClubHomeCards(clubId)
      .then((data) => setItems(data))
      .catch((err) => console.error("Error cargando instalaciones:", err))
      .finally(() => setLoaded(true));
  }, [clubId]);

  // Se arma el ciclo UNA sola vez cuando llegan los items reales (ya no se resetea después)
  const initializedRef = useRef(false);

  useEffect(() => {
    if (!canFlip || realCount == 0) return;
    if (initializedRef.current) return;
    initializedRef.current = true;

    setIndices(Array.from({ length: realCount }, (_, i) => i % items.length));
    setActiveCard(0);

    timeoutRef.current = setTimeout(() => setActiveCard(0), visibleDuration);
  }, [realCount, items, canFlip, visibleDuration]);

  useEffect(() => {
    return () => clearTimeout(timeoutRef.current);
  }, []);

  const handleCardFlipComplete = (cardIdx: number) => {
    setIndices((prev) => {
      const next = [...prev];
      next[cardIdx] = (prev[cardIdx] + 1) % items.length;
      return next;
    });
    timeoutRef.current = setTimeout(() => {
      setActiveCard((cardIdx + 1) % realCount);
    }, visibleDuration);
  };

  if (!loaded) {
    const skeletonKeys = Array.from({ length: cardCount }, (_, i) => i);

    if (isParque2) {
      return (
        <div className="flex flex-col gap-6 items-center">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 w-full sm:max-w-xl lg:max-w-none justify-items-center">
            {skeletonKeys.map((key) => (
              <div key={key} className="w-full max-w-65 sm:max-w-none">
                <SkeletonCard />
              </div>
            ))}
          </div>
        </div>
      );
    }

    return (
      <div className="flex flex-col gap-6 items-center">
        <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-3 gap-6 w-full max-w-5xl justify-items-center">
          {skeletonKeys.slice(0, 3).map((key) => (
            <div key={key} className="w-full max-w-65 sm:max-w-none">
              <SkeletonCard />
            </div>
          ))}
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-6 lg:grid-cols-6 gap-6 w-full max-w-5xl justify-items-center">
          <div className="w-full max-w-65 sm:max-w-none sm:col-span-2 sm:col-start-2 lg:col-span-2 lg:col-start-2">
            <SkeletonCard />
          </div>
          <div className="w-full max-w-65 sm:max-w-none sm:col-span-2 sm:col-start-4 lg:col-span-2 lg:col-start-4">
            <SkeletonCard />
          </div>
        </div>
      </div>
    );
  }

  const slots = Array.from({ length: cardCount }, (_, i) => {
    if (i >= realCount) {
      return { key: i, type: "placeholder" as const };
    }
    if (!canFlip) {
      return { key: i, type: "static" as const, item: items[i] };
    }
    return {
      key: i,
      type: "flip" as const,
      items,
      currentIndex: indices[i] ?? (i % items.length),
      isActive: activeCard == i,
      flipDuration,
      onFlipComplete: () => handleCardFlipComplete(i),
    };
  });

  const renderSlot = (slot: any) => {
    if (slot.type == "flip") return <FlipCard key={slot.key} {...slot} />;
    if (slot.type == "static") return <StaticImage key={slot.key} item={slot.item} />;
    return <StaticPlaceholder key={slot.key} />;
  };

  if (isParque2) {
    return (
      <div className="flex flex-col gap-6 items-center">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 w-full sm:max-w-xl lg:max-w-none justify-items-center">
          {slots.map((slot) => (
            <div key={slot.key} className="w-full max-w-65 sm:max-w-none aspect-square overflow-hidden rounded-2xl">
              <AnimScale className="w-full h-full">
                {renderSlot(slot)}
              </AnimScale>
            </div>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-6 items-center">
      <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-3 gap-6 w-full max-w-5xl justify-items-center">
        {slots.slice(0, 3).map((slot) => (
          <AnimScale key={slot.key} className="w-full max-w-65 sm:max-w-none">
            {renderSlot(slot)}
          </AnimScale>
        ))}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-6 lg:grid-cols-6 gap-6 w-full max-w-5xl justify-items-center">
        {slots[3] && (
          <AnimScale className="w-full max-w-65 sm:max-w-none sm:col-span-2 sm:col-start-2 lg:col-span-2 lg:col-start-2">
            {renderSlot(slots[3])}
          </AnimScale>
        )}

        {slots[4] && (
          <AnimScale className="w-full max-w-65 sm:max-w-none sm:col-span-2 sm:col-start-4 lg:col-span-2 lg:col-start-4">
            {renderSlot(slots[4])}
          </AnimScale>
        )}
      </div>
    </div>
  );
}