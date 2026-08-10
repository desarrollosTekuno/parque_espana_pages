import { useLocation } from "react-router-dom";
import { ScheduleContent as parque1Content } from "../../../constants/ParkSpain_1/Schedule";
import { ScheduleContent as parque2Content } from "../../../constants/ParkSpain_2/Schedule";
import { AnimFadeUp, AnimStaggerContainer, AnimStaggerItem } from "../../Animations";
import GraphicElement1 from "@/assets/images/Facilities/Schedules/Graphic_Element_1.webp";
import GraphicElement2 from "@/assets/images/Facilities/Schedules/Graphic_Element_2.webp";

const rowColors = ["#048BA3", "#245089", "#5F6B7A"];

export default function Schedule() {
  const location = useLocation();

  // Detección de la ruta para conmutar solo el objeto de textos/contenido
  const isParque2 = location.pathname.startsWith("/parque-espana-2");
  const { title, columns } = isParque2 ? parque2Content : parque1Content;

  return (
    <section className="relative overflow-hidden bg-[#F2F4F7] mt-20">
      <div className="wrap-90 sm:wrap-90 lg:wrap-80">
        <AnimFadeUp>
          <h2 className="text-center font-extrabold text-[#3C3C3C] text-[22px] sm:text-[24px] lg:text-[34px]">
            {title}
          </h2>
        </AnimFadeUp>

        <div className="mt-10 grid grid-cols-1 gap-10 sm:grid-cols-2 sm:gap-8 lg:mt-16 lg:gap-12">
          {columns.map((column, colIndex) => (
            <AnimFadeUp key={column.id} className="relative">
              {/* Elemento gráfico 1 (Mismas imágenes y diseño para ambos parques) */}
              {colIndex === 0 && (
                <img
                  src={GraphicElement1}
                  alt=""
                  loading="lazy"
                  className="pointer-events-none absolute -left-8 -top-16 h-32 w-32 object-contain sm:-left-10 sm:-top-20 sm:h-40 sm:w-40 lg:-left-12 lg:-top-32 lg:h-60 lg:w-60"
                />
              )}

              {/* Encabezado con el label dinámico */}
              <div className="relative rounded-full bg-[#EBEBEB] px-6 py-3 text-center sm:px-10 sm:py-3 lg:px-12 lg:py-5">
                <h3 className="font-bold text-black text-[22px] sm:text-[22px] lg:text-[30px]">
                  {column.label}
                </h3>
              </div>

              {/* Filas con time y description dinámicos */}
              <AnimStaggerContainer className="mt-6 flex flex-col gap-5 sm:mt-8 sm:gap-6 lg:gap-8 mb-10 sm:mb-20 lg:mb-50">
                {column.items.map((item, i) => (
                  <AnimStaggerItem key={item.id}>
                    <div className="flex items-start gap-4 lg:gap-6">
                      <span
                        className="shrink-0 rounded-full px-4 py-2 text-center font-bold text-white text-[16px] sm:px-5 sm:py-2.5 sm:text-[18px] lg:px-6 lg:py-3 lg:text-[28px]"
                        style={{ backgroundColor: rowColors[i % rowColors.length] }}
                      >
                        {item.time}
                      </span>
                      <p className="pt-1 text-left text-[16px] text-[#3C3C3C] sm:pt-2 sm:text-[17px] lg:pt-2 lg:text-[25px]">
                        {item.description}
                      </p>
                    </div>
                  </AnimStaggerItem>
                ))}
              </AnimStaggerContainer>
            </AnimFadeUp>
          ))}
        </div>
      </div>

      {/* Elemento gráfico 2 (Mismas imágenes y diseño para ambos parques) */}
      <img
        src={GraphicElement2}
        alt=""
        loading="lazy"
        className="pointer-events-none absolute bottom-0 right-0 h-24 w-24 object-contain sm:h-32 sm:w-32 lg:h-50 lg:w-40"
      />
    </section>
  );
}