import { useLocation } from "react-router-dom";
import FlipCardGrid, { FlipCard } from "../CardFlip";

// Configuraciones de Home para cada parque
import { HomeContent as parque1Content } from "../../constants/ParkSpain_1/Home";
import { HomeContent as parque2Content } from "../../constants/ParkSpain_2/Home";

import { AnimFadeUp, AnimScale } from "../Animations";
import ButtonLink from "../ButtonLink";

export default function Installations() {
  const location = useLocation();

  // Detección del parque según la URL
  const isParque2 = location.pathname.startsWith("/parque-espana-2");

  // Selección dinámica de contenido
  const content = isParque2 ? parque2Content : parque1Content;
  const { title, cards, buttonText, buttonLink } = content.installations;

  // Cantidad de tarjetas requeridas por parque
  const targetCardCount = isParque2 ? 8 : 5;

  /* ==========================================================================
     RENDER PARQUE ESPAÑA 2 
     - Móvil: 1 columna centrada (Mismo tamaño y padding que Parque 1)
     - Tablet: 2 columnas con ancho controlado (sm:max-w-xl)
     - Escritorio: 4 columnas con espacio expandido (lg:wrap-90)
     ========================================================================== */
  if (isParque2) {
    return (
      <section className="bg-[#F2F4F7] mt-20 lg:mt-40">
        <div className="wrap-90 sm:wrap-80 lg:wrap-90">
          <AnimFadeUp>
            <h2 className="font-extrabold text-[#3C3C3C] leading-tight text-[22px] sm:text-[24px] lg:text-[34px] lg:font-extrabold mb-10 lg:mb-16">
              {title}
            </h2>
          </AnimFadeUp>

          <FlipCardGrid items={cards} cardCount={targetCardCount} visibleDuration={2000}>
            {(cardsProps: any[]) => (
              <div className="flex flex-col gap-6 items-center">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 w-full sm:max-w-xl lg:max-w-none justify-items-center">
                  {cardsProps.map((props) => (
                    /* Wrapper rígido que reserva el espacio y congela el layout inferior */
                    <div key={props.key} className="w-full max-w-65 sm:max-w-none aspect-square overflow-hidden rounded-2xl">
                      <AnimScale className="w-full h-full">
                        <FlipCard {...props} />
                      </AnimScale>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </FlipCardGrid>

          <AnimFadeUp className="mt-12 text-center text-white">
            <ButtonLink
              text={buttonText}
              to={buttonLink}
              color="#0097b2"
              size={{ base: "sm", md: "sm", lg: "lg" }}
            />
          </AnimFadeUp>
        </div>
      </section>
    );
  }

  /* ==========================================================================
     RENDER PARQUE ESPAÑA 1 (Original intacto)
     ========================================================================== */
  return (
    <section className="bg-[#F2F4F7] mt-20 lg:mt-40">
      <div className="wrap-90 sm:wrap-80 lg:wrap-70">
        <AnimFadeUp>
          <h2 className="font-extrabold text-[#3C3C3C] leading-tight text-[22px] sm:text-[24px] lg:text-[34px] lg:font-extrabold mb-10 lg:mb-16">
            {title}
          </h2>
        </AnimFadeUp>

        <FlipCardGrid items={cards} cardCount={targetCardCount} visibleDuration={2000}>
          {(cardsProps: any[]) => (
            <div className="flex flex-col gap-6 items-center">
              {/* Primera fila: 3 tarjetas */}
              <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-3 gap-6 w-full max-w-5xl justify-items-center">
                {cardsProps.slice(0, 3).map((props) => (
                  <AnimScale key={props.key} className="w-full max-w-65 sm:max-w-none">
                    <FlipCard {...props} />
                  </AnimScale>
                ))}
              </div>

              {/* Segunda fila: 2 tarjetas centradas */}
              <div className="grid grid-cols-1 sm:grid-cols-6 lg:grid-cols-6 gap-6 w-full max-w-5xl justify-items-center">
                {cardsProps[3] && (
                  <AnimScale className="w-full max-w-65 sm:max-w-none sm:col-span-2 sm:col-start-2 lg:col-span-2 lg:col-start-2">
                    <FlipCard {...cardsProps[3]} />
                  </AnimScale>
                )}

                {cardsProps[4] && (
                  <AnimScale className="w-full max-w-65 sm:max-w-none sm:col-span-2 sm:col-start-4 lg:col-span-2 lg:col-start-4">
                    <FlipCard {...cardsProps[4]} />
                  </AnimScale>
                )}
              </div>
            </div>
          )}
        </FlipCardGrid>

        <AnimFadeUp className="mt-12 text-center text-white">
          <ButtonLink
            text={buttonText}
            to={buttonLink}
            color="#0097b2"
            size={{ base: "sm", md: "sm", lg: "lg" }}
          />
        </AnimFadeUp>
      </div>
    </section>
  );
}