import { useLocation } from "react-router-dom";

// Logos correspondientes a cada parque
import LogoPE1 from "@/assets/icons/Logo_pe1.webp";
import LogoPE2 from "@/assets/icons/Logo_pe2_fondo.webp"; // Asegúrate de que esta ruta sea la de tu logo PE2

// Contenidos dinámicos según el parque
import { HomeContent as parque1Content } from "../../constants/ParkSpain_1/Home";
import { HomeContent as parque2Content } from "../../constants/ParkSpain_2/Home";

import { AnimFadeUp } from "../Animations";
import ButtonLink from "../ButtonLink";

export default function ParkExperience() {
  const location = useLocation();

  // Detección del parque según la URL
  const isParque2 = location.pathname.startsWith("/parque-espana-2");

  // Selección dinámica de contenido y logo
  const content = isParque2 ? parque2Content : parque1Content;
  const logo = isParque2 ? LogoPE2 : LogoPE1;

  const { title, description, buttons } = content.experiencePark;

  /* ==========================================================================
     RENDER PARQUE ESPAÑA 2 
     - Muestra únicamente el primer botón centrado
     ========================================================================== */
  if (isParque2) {
    return (
      <section className="bg-[#F2F4F7] mt-20 lg:mt-40">
        <div className="wrap-90 sm:wrap-80 lg:wrap-75">
          <div className="flex flex-col items-center text-center">
            {/* Logo Parque España 2 */}
            <AnimFadeUp className="mb-8 sm:mb-12">
              <img
                src={logo}
                alt="Logo Parque España 2"
                loading="lazy"
                className="h-24 sm:h-28 lg:h-45 object-contain"
              />
            </AnimFadeUp>

            {/* Título */}
            <AnimFadeUp className="w-full mb-12 sm:mb-16">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-center text-[#3C3C3C]">
                {title}
              </h2>
            </AnimFadeUp>

            {/* Descripción */}
            <AnimFadeUp className="w-full text-[#3C3C3C] sm:mb-16 text-[16px] sm:text-[20px] lg:text-[22px] mb-12 leading-relaxed font-light">
              <p>{description}</p>
            </AnimFadeUp>

            {/* Un solo botón centrado */}
            <AnimFadeUp className="flex justify-center text-white mb-40 w-full">
              <ButtonLink
                text={buttons.activities.label}
                to={buttons.activities.to}
                color="#0097b2"
                size={{ base: "sm", sm: "sm", lg: "lg" }}
              />
            </AnimFadeUp>
          </div>
        </div>
      </section>
    );
  }

  /* ==========================================================================
     RENDER PARQUE ESPAÑA 1 (Original 100% Intacto)
     ========================================================================== */
  return (
    <section className="bg-[#f5f5f5] mt-20 lg:mt-40">
      <div className="wrap-90 sm:wrap-80 lg:wrap-75">
        <div className="flex flex-col items-center text-center">
          {/* Logo */}
          <AnimFadeUp className="mb-8 sm:mb-12">
            <img
              src={LogoPE1}
              alt="Logo Parque España"
              loading="lazy"
              className="h-24 sm:h-28 lg:h-45 object-contain"
            />
          </AnimFadeUp>

          {/* Título */}
          <AnimFadeUp className="w-full mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-center text-[#3C3C3C]">
              {title}
            </h2>
          </AnimFadeUp>

          {/* Descripción */}
          <AnimFadeUp className="w-full text-[#3C3C3C] sm:mb-16 text-[16px] sm:text-[20px] lg:text-[22px] mb-12 leading-relaxed font-light">
            <p>{description}</p>
          </AnimFadeUp>

          {/* Botones */}
          <AnimFadeUp className="flex flex-col text-white mb-40 sm:flex-row gap-6 sm:gap-8 justify-center">
            <ButtonLink
              text={buttons.activities.label}
              to={buttons.activities.to}
              color="#0097b2"
              size={{ base: "sm", sm: "sm", lg: "lg" }}
            />

            <ButtonLink
              text={buttons.memberships.label}
              to={buttons.memberships.to}
              color="#003f99"
              size={{ base: "sm", md: "sm", lg: "lg" }}
            />
          </AnimFadeUp>
        </div>
      </div>
    </section>
  );
}