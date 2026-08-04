import { useState } from "react";

interface TimelineItem {
  year: string;
  title: string;
  text: string;
  image: string;
}

interface TimelineProps {
  items: TimelineItem[];
}

const GRADIENT_START = { r: 55, g: 65, b: 81 };
const GRADIENT_END = { r: 209, g: 213, b: 219 };

function interpolateColor(t: number) {
  const r = Math.round(GRADIENT_START.r + (GRADIENT_END.r - GRADIENT_START.r) * t);
  const g = Math.round(GRADIENT_START.g + (GRADIENT_END.g - GRADIENT_START.g) * t);
  const b = Math.round(GRADIENT_START.b + (GRADIENT_END.b - GRADIENT_START.b) * t);
  return `rgb(${r}, ${g}, ${b})`;
}

export default function Timeline({ items }: TimelineProps) {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const lastIndex = items.length - 1;

  return (
    <div className="w-full overflow-visible px-4 py-12 md:px-10">

      {/* ===== Versión horizontal: solo desde lg ===== */}
      <div className="relative hidden lg:flex lg:justify-between">

        <div
          className="absolute inset-x-0 top-[224px] z-0 h-[4px]"
          style={{
            background: `linear-gradient(to right, rgb(${GRADIENT_START.r},${GRADIENT_START.g},${GRADIENT_START.b}), rgb(${GRADIENT_END.r},${GRADIENT_END.g},${GRADIENT_END.b}))`,
          }}
        />

        {items.map((item, index) => {
          const isActive = activeIndex == index;
          const isLast = index == lastIndex;
          const t = index / lastIndex;
          const dotColor = interpolateColor(t);

          return (
            <div
              key={item.year}
              className="relative z-10 flex flex-1 flex-col items-center px-2"
              onMouseEnter={() => setActiveIndex(index)}
              onMouseLeave={() => setActiveIndex(null)}
            >
              <img
                src={item.image}
                alt={item.title}
                className="h-44 w-44 rounded-full object-cover shadow-md"
              />

              <div
                className="mt-9 h-6 w-6 rounded-full transition-colors"
                style={{ backgroundColor: dotColor }}
              />

              <button
                className={`mt-6 whitespace-nowrap rounded-xl px-8 py-1 text-2xl font-bold text-[#3C3C3C] shadow-lg transition-colors ${
                  isActive
                    ? isLast
                      ? "bg-[#004AAD] text-white"
                      : "bg-[#F2A900]"
                    : "bg-white"
                }`}
              >
                {item.year}
              </button>

              {isActive && (
                <div className="absolute left-0 top-full z-20 mt-1 w-72 rounded-xl bg-[#E5E4E4] p-6 text-left shadow-xl">
                  <h3 className="text-lg font-extrabold text-[#3C3C3C]">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-justify leading-snug text-[#3C3C3C] text-[16px] sm:text-[18px] lg:text-[21px]">
                    {item.text}
                  </p>
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* ===== Versión vertical apilada: tablet/celular (Línea pegada a la izquierda) ===== */}
      <div className="relative flex flex-col lg:hidden pl-2">

        {/* Línea vertical pegada al extremo izquierdo */}
        <div
          className="absolute left-2.5 top-0 bottom-0 z-0 w-[4px]"
          style={{
            background: `linear-gradient(to bottom, rgb(${GRADIENT_START.r},${GRADIENT_START.g},${GRADIENT_START.b}), rgb(${GRADIENT_END.r},${GRADIENT_END.g},${GRADIENT_END.b}))`,
          }}
        />

        {items.map((item, index) => {
          const isLast = index === lastIndex;
          const t = index / lastIndex;
          const dotColor = interpolateColor(t);

          return (
            <div key={item.year} className="relative z-10 flex gap-3 pb-10 last:pb-0">

              {/* Columna del punto (Alineada perfectamente sobre la línea) */}
              <div className="flex w-5 flex-shrink-0 flex-col items-center pt-2">
                <div
                  className="h-5 w-5 rounded-full shadow-sm"
                  style={{ backgroundColor: dotColor }}
                />
              </div>

              {/* Contenido: imagen + año + texto */}
              <div className="flex-1">
                <div className="flex items-center gap-3">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="h-24 w-24 sm:h-28 sm:w-28 flex-shrink-0 rounded-full object-cover shadow-md"
                  />
                  <span
                    className={`whitespace-nowrap rounded-xl px-4 py-1 text-base sm:text-lg font-bold text-[#3C3C3C] shadow-lg ${
                      isLast ? "bg-[#004AAD] text-white" : "bg-[#F2A900]"
                    }`}
                  >
                    {item.year}
                  </span>
                </div>

                <div className="mt-4 rounded-xl bg-[#E5E4E4] p-4 text-left">
                  <h3 className="text-base sm:text-lg font-extrabold text-[#3C3C3C]">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-justify leading-snug text-[#3C3C3C] text-[15px] sm:text-[18px]">
                    {item.text}
                  </p>
                </div>
              </div>

            </div>
          );
        })}
      </div>

    </div>
  );
}