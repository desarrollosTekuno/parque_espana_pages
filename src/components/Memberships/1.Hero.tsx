import MembershipsHero from "@/assets/images/Memberships/TeamFamily.webp";
import { MembershipsContent } from "../../constants/ParkSpain_1/Memberships";
import Graphic_Element from "@/assets/images/Memberships/Graphic_Element.webp";
import { AnimFadeUp } from "../Animations";

export default function Hero() {
  const { title, subtitle, imageAlt, graphicImageAlt } = MembershipsContent.hero;

  return (
    <section className="relative bg-header-gradient">
      <div className="relative flex flex-col items-center h-auto sm:h-auto lg:h-[60vh] lg:min-h95 lg:max-h-150 lg:flex-row overflow-hidden">

        {/* Imagen */}
        <img
          src={MembershipsHero}
          alt={imageAlt}
          loading="lazy"
          className="absolute inset-0 h-full w-full object-cover"
        />


   

        {/* Contenido - ARRIBA A LA IZQUIERDA */}
        <div className="relative z-10 flex w-full items-start px-6 py-10 sm:px-8 sm:py-12 lg:flex-1 lg:px-16 lg:pt-20">
          <div>

            {/* Título pequeño */}
            <AnimFadeUp>
              <p className="ml-4 text-left  text-white sm:ml-12 lg:ml-20 text-[16px] sm:text-[20px] lg:text-[22px] ">
                {title}
              </p>
            </AnimFadeUp>

            {/* Subtítulo */}
            <AnimFadeUp>
              <h1 className="ml-4 mt-4 text-white font-bold leading-tight sm:ml-12 lg:ml-20  text-[26px] sm:text-[24px] lg:text-[45px]">
                {subtitle}
              </h1>
            </AnimFadeUp>

            {/* Icono */}
            <AnimFadeUp className="">
              <img
                src={Graphic_Element}
                alt={graphicImageAlt}
                loading="lazy"
                className="h-14 w-14 object-contain sm:h-16 sm:w-16 lg:h-18 lg:w-18"
              />
            </AnimFadeUp>

          </div>
        </div>

      </div>
    </section>
  );
}