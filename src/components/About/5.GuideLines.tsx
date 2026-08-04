import directivaImg from "@/assets/images/About/GuideLines.webp"; 
import { AboutContent } from "../../constants/ParkSpain_2/About";   

export default function GuideLine() {
  const { title, imageAlt, membersColumn1, membersColumn2 } = AboutContent.guideLine;

  return (
    <section className="w-full bg-[#F2F4F7]  lg:mt-78">
      <div className="wrap-90 sm:wrap-80 lg:wrap-90">
        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-14">
          
          {/* ===== COLUMNA IZQUIERDA: Imagen Principal ===== */}
          <div className="flex w-full items-center justify-center">
            <div className="w-full max-w-xl overflow-hidden rounded-2xl shadow-xl transition-all duration-300 lg:max-w-none">
              <img
                src={directivaImg}
                alt={imageAlt || title}
                loading="lazy"
                className="h-auto w-full object-cover object-center"
              />
            </div>
          </div>

          {/* ===== COLUMNA DERECHA: Organigrama / Directivas ===== */}
          <div className="flex flex-col justify-center">
            <h2 className="mb-6 lg:mb-18 text-center font-extrabold text-[#3C3C3C] leading-tight text-[22px] sm:text-[24px] lg:text-center lg:text-[34px] lg:mr-20">
              {title}
            </h2>

            {/* Grid dinámico de 2 columnas para cargos y nombres */}
            <div className="grid grid-cols-1 gap-x-8 gap-y-5 sm:grid-cols-2">
              
              {/* Columna 1 */}
              <div className="flex flex-col gap-4 text-left">
                {membersColumn1.map((item, index) => (
                  <div key={index} className="flex flex-col">
                    <span className="font-extrabold text-black text-[16px]  sm:text-[18px] lg:w-full lg:text-[21px] ">
                      {item.role}
                    </span>
                    <span className="font-normal text-[#3C3C3C] text-[16px]  sm:text-[18px] lg:w-full lg:text-[21px] ">
                      {item.name}
                    </span>
                  </div>
                ))}
              </div>

              {/* Columna 2 */}
              <div className="flex flex-col gap-4 text-left">
                {membersColumn2.map((item, index) => (
                  <div key={index} className="flex flex-col">
                    <span className="font-extrabold text-black text-[16px]  sm:text-[18px] lg:w-full lg:text-[21px] ">
                      {item.role}
                    </span>
                    <span className="font-normal text-[#3C3C3C] text-[16px]  sm:text-[18px] lg:w-full lg:text-[21px] ">
                      {item.name}
                    </span>
                  </div>
                ))}
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}