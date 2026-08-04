import { useLocation } from "react-router-dom";
import hero from "@/assets/images/About/hero.webp";
import StatsCounter from "../StatsCounter";

// Contenidos dinámicos de cada parque
import { AboutContent as parque1Content } from "../../constants/ParkSpain_1/About";
import { AboutContent as parque2Content } from "../../constants/ParkSpain_2/About";

export default function Hero() {
  const location = useLocation();

  // Detección del parque según la URL
  const isParque2 = location.pathname.startsWith("/parque-espana-2");

  // Selección dinámica de texto según el parque
  const content = isParque2 ? parque2Content : parque1Content;
  const { title, description, imageAlt } = content.hero;

  return (
    <>
      <section className="bg-header-gradient text-white">
        <div className="flex flex-col items-center lg:h-[60vh] lg:min-h-[380px] lg:max-h-[600px] lg:flex-row">

          {/* Imagen (Intacta para ambos parques) */}
          <div className="flex w-full justify-center lg:w-auto lg:justify-start lg:shrink-0 lg:h-full lg:items-end">
            <img
              src={hero}
              alt={imageAlt}
              className="max-w-55 object-contain lg:w-auto lg:h-[90%] lg:max-w-none"
            />
          </div>

          {/* Contenido */}
          <div className="flex w-full items-center justify-center px-6 py-8 lg:flex-1 lg:h-full lg:px-0 lg:py-0">
            <div className="w-full rounded-3xl bg-gradient-to-r from-[#031826] to-[#073D5F] px-8 py-10 shadow-xl lg:rounded-none lg:rounded-l-[70px] lg:py-28">

              {/* 
                whitespace-pre-line: interpreta el '\n' de Parque 2 sin romper el responsive.
                Si Parque España 1 no incluye '\n', se renderiza normal en una sola línea.
              */}
              <h1 className="text-left! ml-5 text-xl sm:text-2xl font-bold leading-tight lg:text-4xl whitespace-pre-line">
                {title}
              </h1>

              <p className="text-left! ml-5 mt-6 max-w-3xl text-base sm:text-lg text-white/90 lg:text-2xl">
                {description}
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* Contador de estadísticas */}
      <div className="wrap-90 sm:wrap-80 lg:wrap-70">
        <StatsCounter />
      </div>
    </>
  );
}