import React from "react";
import { Link } from "react-router-dom";
import { WelcomeContent } from "../constants/Welcome";
import esquina from "../assets/icons/esquina.webp";
import Logo_pe1 from "../assets/icons/Logo_pe1.webp";
import Logo_pe2 from "../assets/icons/Logo_pe2_fondo.webp";

interface WelcomeProps {
  onSelectPark?: (parkId: string) => void;
}

export const Welcome: React.FC<WelcomeProps> = ({ onSelectPark }) => {
  // Mapeo dinámico de los logos importados por id
  const parkLogos: Record<string, string> = {
    "parque-1": Logo_pe1,
    "parque-2": Logo_pe2,
  };

  return (
    <div className="relative min-h-screen w-full bg-gradient-to-l from-[#EBF3F8] to-[#F2F4F7] flex flex-col justify-between overflow-hidden">
      {/* Contenido Principal */}
      <main className="relative z-10 flex-1 flex flex-col justify-center items-center lg:items-start px-6 sm:px-12 md:px-16 lg:px-24 max-w-4xl">
        {/* Encabezado con la tipografía exacta de Hero */}
        <header className="mb-8 sm:mb-12 text-center lg:text-left">
          <h1 className="font-bold leading-tight text-[26px] sm:text-[28px] lg:text-[45px] text-[#333333] tracking-tight mb-2">
            {WelcomeContent.title}
          </h1>
          <p className="text-[16px] sm:text-[20px] lg:text-[22px] text-[#000000] font-normal">
            {WelcomeContent.subtitle}
          </p>
        </header>

        {/* Parques */}
        <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-8 sm:gap-12 lg:gap-16 w-full">
          {WelcomeContent.parks.map((park) => {
            const currentLogo = parkLogos[park.id] || park.logo;

            return (
              <Link
                key={park.id}
                to={park.link}
                onClick={(e) => {
                  if (onSelectPark) {
                    e.preventDefault();
                    onSelectPark(park.id);
                  }
                }}
                className="group flex flex-col items-center focus:outline-none transition-transform transform hover:scale-105"
              >
                <div className="w-28 h-28 sm:w-36 sm:h-36 md:w-44 md:h-44 flex items-center justify-center p-2 mb-3 sm:mb-4 bg-transparent">
                  <img
                    src={currentLogo}
                    alt={park.alt}
                    className="max-w-full max-h-full object-contain filter drop-shadow-sm group-hover:drop-shadow-md transition-all"
                  />
                </div>
                <span className="text-[16px] sm:text-[20px] lg:text-[22px] font-bold text-[#4A4A4A] group-hover:text-black text-center">
                  {park.name}
                </span>
              </Link>
            );
          })}
        </div>
      </main>

      {/* Marca de agua en móvil, sm y md / Ilustración a color en lg */}
      <div className="absolute top-0 right-0 h-full w-full opacity-20 lg:w-1/2 lg:min-w-[380px] lg:opacity-100 pointer-events-none select-none z-0 transition-all duration-300">
        <img
          src={esquina}
          alt={WelcomeContent.decorations.cornerImageAlt}
          className="h-full w-full object-cover object-right-top lg:object-right"
        />
      </div>
    </div>
  );
};

export default Welcome;