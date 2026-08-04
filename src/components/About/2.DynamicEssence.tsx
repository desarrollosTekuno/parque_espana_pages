import { useLocation } from "react-router-dom";
import essenceBg from "@/assets/images/About/essence.webp";
import personImg from "@/assets/images/About/EssenceWithOutLine.webp";
import waveImg from "@/assets/images/About/EssenceLines.webp";

import { AboutContent as parque1 } from "../../constants/ParkSpain_1/About";
import { AboutContent as parque2 } from "../../constants/ParkSpain_2/About";

interface EssenceContent {
  title: string;
  text1: string;
  text2?: string;
  imageAlt?: string;
}

export default function Essence() {
  const location = useLocation();

  const isParque2 = location.pathname.startsWith("/parque-espana-2");
  const content: EssenceContent = isParque2 ? parque2.essence : parque1.essence;

  const { title, text1, text2, imageAlt } = content;

  return (
    <section className="w-full overflow-hidden bg-[#F2F4F7]">
      {/* ===== BANNER: Oculto en base (móvil), visible solo en sm, se oculta de nuevo en sm ===== */}
      <div
        className="hidden sm:block sm:hidden h-56 sm:h-72 w-full bg-cover bg-[right_center]"
        style={{ backgroundImage: `url(${essenceBg})` }}
      />

      {/* ===== DESKTOP / TABLET (>= sm): Layout Superpuesto con persona y olas ===== */}
      <div className="relative hidden w-full sm:block sm:min-h-[500px] lg:min-h-[580px] xl:min-h-[640px]">
        {/* Imagen de la Persona */}
        <img
          src={personImg}
          alt={imageAlt || ""}
          className="pointer-events-none absolute bottom-0 right-0 z-0 h-[85%] max-h-[580px] w-auto object-contain object-bottom"
        />

        {/* Onda/Líneas Decorativas */}
        <img
          src={waveImg}
          alt=""
          className="pointer-events-none absolute bottom-0 left-0 z-10 w-full object-cover"
        />

        {/* Contenido con límites de ancho seguros */}
        <div className="relative z-20 wrap-90 sm:wrap-80 lg:wrap-90 py-12 sm:py-1 lg:py-20">
          <div className="w-full sm:w-[62%] lg:w-[58%] xl:w-[52%]">
            <h2 className="text-center font-extrabold text-[#3C3C3C] leading-tight text-[22px] sm:text-[24px] lg:text-[34px]">
              {title}
            </h2>

            {text1 && (
              <p className="mt-10 lg:mt-16 text-[16px] text-justify sm:text-[18px] lg:text-[28px] text-[#3C3C3C]">
                {text1}
              </p>
            )}

            {text2 && (
              <p className="mt-4 text-[16px] text-justify sm:text-[18px] lg:text-[28px] text-[#3C3C3C]">
                {text2}
              </p>
            )}
          </div>
        </div>
      </div>

      {/* ===== MÓVIL (< sm): Texto del Bloque ===== */}
      <div className="wrap-90 py-8 sm:py-10 sm:hidden">
        <h2 className="text-center font-extrabold text-[#3C3C3C] leading-tight text-[22px] sm:text-[24px]">
          {title}
        </h2>

        {text1 && (
          <p className="mt-10  lg:mt-16 text-[16px] text-justify sm:text-[18px] lg:text-[28px] text-[#3C3C3C]">
            {text1}
          </p>
        )}

        {text2 && (
          <p className="mt-4 text-[16px] text-justify sm:text-[18px] lg:text-[28px] text-[#3C3C3C]">
            {text2}
          </p>
        )}
      </div>
    </section>
  );
}