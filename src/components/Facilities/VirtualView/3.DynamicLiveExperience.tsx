import { useLocation } from "react-router-dom";
import { VirtualViewContent as VirtualView1 } from "../../../constants/ParkSpain_1/VirtualView";
import { VirtualViewContent as VirtualView2 } from "../../../constants/ParkSpain_2/VirtualView";
import { AnimFadeUp } from "../../Animations";
import ButtonLink from "../../ButtonLink";

import GraphicElement2 from "@/assets/images/Facilities/Schedules/Graphic_Element_2.webp";

export default function LiveExperience() {
  const location = useLocation();
  const isParque2 = location.pathname.startsWith("/parque-espana-2");

  // Selección dinámica de la fuente de datos
  const currentContent = isParque2 ? VirtualView2 : VirtualView1;
  const { title, description, columns, buttons } = currentContent.liveExperience;

  return (
    <section className="relative overflow-hidden bg-[#F2F4F7]">
      <div className="wrap-90 sm:wrap-80 lg:wrap-90 py-16 text-center lg:py-24">
        <AnimFadeUp>
          <h2 className="text-[22px] font-extrabold text-[#3C3C3C] sm:text-[24px] lg:mb-20 lg:text-[34px]">
            {title}
          </h2>
        </AnimFadeUp>

        <AnimFadeUp className="mt-6">
          <p className="text-[16px] font-semibold text-black sm:text-[18px] lg:mb-20 lg:text-[22px]">
            {description}
          </p>
        </AnimFadeUp>

        <AnimFadeUp className="mt-12 lg:mt-16">
          <div className="grid grid-cols-1 gap-x-8 gap-y-6 text-left sm:grid-cols-2 lg:mb-25 lg:grid-cols-4">
            {columns.map((col, i) => (
              <ul key={i} className="space-y-3">
                {col.map((text, j) => (
                  <li
                    key={j}
                    className="flex items-start gap-2 text-[16px] text-[#3C3C3C] sm:text-[17px] lg:text-[19px]"
                  >
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#3C3C3C]" />
                    {text}
                  </li>
                ))}
              </ul>
            ))}
          </div>
        </AnimFadeUp>

        {/* Los botones solo se muestran si NO es Parque España 2 */}
        {!isParque2 && buttons && (
          <AnimFadeUp className="mt-12 flex justify-center gap-4 text-white sm:flex-row sm:gap-6 lg:mt-16">
            <ButtonLink
              text={buttons.contact.text}
              to={buttons.contact.to}
              color="#0097b2"
              size={{ base: "sm", md: "sm", lg: "lg" }}
            />
            <ButtonLink
              text={buttons.activities.text}
              to={buttons.activities.to}
              color="#0b5a8c"
              size={{ base: "sm", md: "sm", lg: "lg" }}
            />
          </AnimFadeUp>
        )}
      </div>

      {/* Elemento gráfico 2 en la esquina inferior derecha */}
      <img
        src={GraphicElement2}
        alt=""
        loading="lazy"
        className="pointer-events-none absolute bottom-0 right-0 h-24 w-24 object-contain sm:h-32 sm:w-32 lg:h-50 lg:w-40"
      />
    </section>
  );
}