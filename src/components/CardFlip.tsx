import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

function Face({ item, style }: any) {
  if (!item) return null;
  
  // Determina la imagen si viene de la API o constante
  const itemImage = item.image || item.imageUrl;

  return (
    <div
      className="absolute inset-0 w-full h-full rounded-2xl overflow-hidden bg-gray-300 [backface-visibility:hidden]"
      style={style}
    >
      {itemImage && (
        <img
          src={itemImage}
          alt={item.name}
          className="absolute inset-0 w-full h-full object-cover"
        />
      )}
      <div className="absolute inset-0 bg-black/40 flex items-end justify-center p-4">
        <p className="text-white text-[20px] sm:text-[20px] lg:text-[25px] font-bold text-center">
          {item.name}
        </p>
      </div>
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

// Contenedor con render prop
export default function FlipCardGrid({
  items,
  cardCount = 5,
  visibleDuration = 4000,
  flipDuration = 0.6,
  children,
}: any) {
  const [indices, setIndices] = useState<number[]>([]);
  const [activeCard, setActiveCard] = useState(0);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | undefined>(undefined);

  // Sincronizar índices cuando cambia cardCount o la lista de items
  useEffect(() => {
    if (!items || items.length == 0) return;
    setIndices(Array.from({ length: cardCount }, (_, i) => i % items.length));
    setActiveCard(0);
  }, [cardCount, items]);

  useEffect(() => {
    if (!items || items.length == 0) return;
    timeoutRef.current = setTimeout(() => setActiveCard(0), visibleDuration);
    return () => clearTimeout(timeoutRef.current);
  }, [items, visibleDuration]);

  const handleCardFlipComplete = (cardIdx: number) => {
    setIndices((prev) => {
      const next = [...prev];
      next[cardIdx] = (prev[cardIdx] + 1) % items.length;
      return next;
    });
    timeoutRef.current = setTimeout(() => {
      setActiveCard((cardIdx + 1) % cardCount);
    }, visibleDuration);
  };

  if (!items || items.length == 0 || indices.length !== cardCount) return null;

  const cardsProps = Array.from({ length: cardCount }, (_, i) => ({
    key: i,
    items,
    currentIndex: indices[i] ?? (i % items.length),
    isActive: activeCard == i,
    flipDuration,
    onFlipComplete: () => handleCardFlipComplete(i),
  }));

  return children(cardsProps);
}