import { useLocation } from "react-router-dom";
import JoinOutStoru from "@/assets/images/About/joinOurStory.webp";
import { AboutContent as aboutPark1 } from "../../constants/ParkSpain_1/About";
import { AboutContent as aboutPark2 } from "../../constants/ParkSpain_2/About";
import ButtonLink from "../ButtonLink";

export default function Essence() {
  const location = useLocation();

  // Evaluamos en qué parque nos encontramos
  const isParque2 = location.pathname.startsWith("/parque-espana-2");
  const aboutContent = isParque2 ? aboutPark2 : aboutPark1;

  // Extraemos dinámicamente según el parque activo
  const { title, text, buttons } = aboutContent.joinUsStory;

  return (
    <section className="w-full bg-[#F2F4F7] mt-20 lg:mt-40">

      {/* Layout para Tablets y Escritorio */}
      <div
        className="relative mx-auto hidden w-full max-w-[2200px] sm:flex sm:min-h-[560px] sm:items-center sm:bg-cover sm:bg-center lg:h-[65vh] lg:max-h-[520px] lg:items-start"
        style={{ backgroundImage: `url(${JoinOutStoru})` }}
      >
        <div className="relative z-10 w-full px-6 py-10 text-white sm:w-[85%] sm:pl-12 sm:pr-10 lg:w-[65%] lg:pl-30 lg:pr-28 lg:pt-35">
          <h2 className="text-center font-extrabold leading-tight text-[22px] sm:text-[28px] lg:text-[34px] lg:mb-12">
            {title}
          </h2>
          
          <p className="mt-6 text-justify text-[16px] sm:text-[20px] lg:text-[22px] lg:text-center leading-relaxed">
            {text}
          </p>

          <div className="mt-10 sm:mt-12 flex justify-center gap-8 sm:gap-12 lg:gap-16">
            {/* Botón 1: Instalaciones */}
            {buttons?.facilities && (
              <ButtonLink
                to={buttons.facilities.to}
                color="#029FD4"
                text={buttons.facilities.text}
                size={{ base: "sm", md: "sm", lg: "lg" }}
              />
            )}

            {/* Botón 2: Membresías (Solo se renderiza si existe en el parque actual) */}
            {buttons?.memberships && (
              <ButtonLink
                to={buttons.memberships.to}
                color="#0097B2"
                text={buttons.memberships.text}
                size={{ base: "sm", md: "sm", lg: "lg" }}
              />
            )}
          </div>
        </div>
      </div>

      {/* Layout exclusivo para Móviles */}
      <div className="px-6 py-8 text-[#3C3C3C] sm:hidden">
        <h2 className="text-center text-2xl font-extrabold leading-tight">
          {title}
        </h2>
        <p className="mt-6 text-center text-base">
          {text}
        </p>
        <div className="mt-8 flex flex-col items-center gap-4 text-white">
          {/* Botón 1 Móvil */}
          {buttons?.facilities && (
            <ButtonLink
              to={buttons.facilities.to}
              color="#0097B2"
              text={buttons.facilities.text}
              size={{ base: "sm", sm: "sm", lg: "lg" }}
            />
          )}

    
        </div>
      </div>

    </section>
  );
}