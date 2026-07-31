import { useLocation } from "react-router-dom";

// Imágenes de Hero para cada parque
import tennisParque1 from "@/assets/images/Home/Hero_pe1.webp";
// Ajusta la ruta de la imagen del parque 2 si es distinta
import tennisParque2 from "@/assets/images/Home/Hero_pe2.webp"; 

// Configuraciones de Home para cada parque
import { HomeContent as parque1Content } from "../constants/ParkSpain_1/Home";
import { HomeContent as parque2Content } from "../constants/ParkSpain_2/Home";

import { AnimFadeUp, AnimSlideRight } from "./Animations";
import ButtonLink from "./ButtonLink";

export default function Hero() {
  const location = useLocation();

  // Detección del parque según la URL
  const isParque2 = location.pathname.startsWith("/parque-espana-2");

  // Selección dinámica de contenido e imagen
  const content = isParque2 ? parque2Content : parque1Content;
  const heroImage = isParque2 ? tennisParque2 : tennisParque1;

  const { title, description, buttonText, buttonLink, imageAlt } = content.hero;

  return (
    <section className="relative flex bg-header-gradient min-h-150 flex-col overflow-hidden text-white md:flex-row wrap-100">
      {/* Texto: mitad izquierda */}
      <div className="z-10 flex flex-1 items-center justify-center px-6 py-16 text-center md:justify-start md:px-16 md:text-left lg:text-center">
        <div>
          <AnimFadeUp>
            <h1 className="font-bold leading-tight text-[26px] sm:text-[24px] lg:text-[45px]">
              {title}
            </h1>
          </AnimFadeUp>

          <AnimFadeUp className="mt-4">
            <p className="text-[16px] sm:text-[20px] lg:text-[22px] text-white">
              {description}
            </p>
          </AnimFadeUp>

          <AnimFadeUp className="mt-8">
            <ButtonLink
              text={buttonText}
              to={buttonLink}
              color="#B20026"
              size={{ base: "sm", md: "sm", lg: "lg" }}
            />
          </AnimFadeUp>
        </div>
      </div>

      {/* Imagen: mitad derecha (dinámica por parque) */}
      <AnimSlideRight className="h-75 w-full sm:h-95 md:h-auto md:flex-1">
        <img
          src={heroImage}
          alt={imageAlt}
          loading="lazy"
          className="h-full w-full object-cover object-top md:object-bottom-right md:object-contain"
        />
      </AnimSlideRight>
    </section>
  );
}