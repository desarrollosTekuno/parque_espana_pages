// Hero.tsx (VirtualView)
import HeroBg from "@/assets/images/Facilities/VirtualView/Hero.webp";
import Graphic_Element from "@/assets/images/Facilities/VirtualView/Graphic_Element.webp";
import { VirtualViewContent } from "../../../constants/VirtualView";
import { AnimFadeUp } from "../../Animations";

export default function Hero() {
  const { title, description, imageAlt, graphicImageAlt } =
    VirtualViewContent.hero;

  return (
    <section className="relative bg-header-gradient text-white">
      <div className="relative flex flex-col items-center h-auto sm:h-auto lg:h-[60vh] lg:min-h95 lg:max-h-150 lg:flex-row overflow-hidden">
        {/* Imagen de fondo */}
        <img
          src={HeroBg}
          alt={imageAlt}
          loading="lazy"
          className="absolute inset-0 h-full w-full object-cover"
        />

        {/* Contenido */}
        <div className="relative z-10 px-6 py-10 sm:px-8 sm:py-12 lg:px-16 lg:pt-20">
          <AnimFadeUp>
            <div className="flex items-center justify-center gap-1 sm:gap-3 ">
              <img
                src={Graphic_Element}
                alt={graphicImageAlt}
                loading="lazy"
                className="hidden h-10 w-10 object-contain sm:block sm:h-12 sm:w-12 lg:h-14 lg:w-14"
              />
              <h1 className="font-extrabold leading-tight text-[26px] sm:text-[24px] lg:text-[45px] ">
                {title}
              </h1>
            </div>
          </AnimFadeUp>

          <AnimFadeUp className="mt-6">
            <p className="mx-auto max-w-2xl ml-4 text-white sm:ml-12 lg:ml-26 text-[16px] sm:text-[20px] lg:text-[22px]">
              {description}
            </p>
          </AnimFadeUp>
        </div>
      </div>
    </section>
  );
}
