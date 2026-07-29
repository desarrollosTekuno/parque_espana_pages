import { AppMobileContent } from "../../constants/AppMobile";
import HeroWaves from "@/assets/images/AppMobile/Hero.webp";
import { AnimFadeUp } from "../Animations";

export default function Hero() {
  const { title, description, imageAlt } = AppMobileContent.hero;

  return (
    <section className="relative overflow-hidden bg-[#F2F4F7]">
      {/* Texto: respeta el wrap-70 */}
      <div className="wrap-90 sm:wrap-80 lg:wrap-70 pt-16 text-center lg:pt-20">
        <AnimFadeUp>
          <h1 className="font-extrabold text-[#3C3C3C] text-[24px] sm:text-[30px] lg:text-[36px]">
            {title}
          </h1>
        </AnimFadeUp>

        <AnimFadeUp className="mt-6">
          <p className="text-[16px] text-justify sm:text-[18px] sm:text-justify lg:text-[28px] lg:text-center text-black">
            {description}
          </p>
        </AnimFadeUp>
      </div>

      {/* Imagen: fuera del wrap, ocupa el 100% del ancho de la pantalla */}
      <AnimFadeUp className="mt-15 pb-8 lg:pb-10">
        <img
          src={HeroWaves}
          alt={imageAlt}
          loading="lazy"
          className="h-auto w-full scale-150 object-contain sm:scale-110 lg:scale-100"
        />
      </AnimFadeUp>
    </section>
  );
}
