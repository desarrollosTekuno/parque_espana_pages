
import tennis from "@/assets/images/Home/Hero.webp";
import { HomeContent } from "../../constants/Home";
import { AnimFadeUp, AnimSlideRight } from "../Animations";
import ButtonLink from "../ButtonLink";

export default function Hero() {
  const { title, description, buttonText, buttonLink, imageAlt } =  HomeContent.hero;

  return (
    <section className="relative flex  bg-header-gradient min-h-150 flex-col overflow-hidden  text-white md:flex-row wrap-100">
      {/* Texto: mitad izquierda */}
      <div className="z-10 flex flex-1 items-center justify-center px-6 py-16 text-center md:justify-start md:px-16 md:text-left lg:text-center">
        <div>
          <AnimFadeUp>
            <h1 className=" font-bold leading-tight text-[26px] sm:text-[24px] lg:text-[45px]">
              {title}
            </h1>
          </AnimFadeUp>

          <AnimFadeUp className="mt-4">
            <p className="text-[16px] sm:text-[20px] lg:text-[22px] text-white">{description}</p>
          </AnimFadeUp>

          <AnimFadeUp className="mt-8">
            <ButtonLink
              text={buttonText}
              to={buttonLink}
              color="#B20026"
              size={{base: "sm", md: "sm", lg:"lg"}}
            />
           
          </AnimFadeUp>
        </div>
      </div>

      {/* Imagen: mitad derecha */}
      <AnimSlideRight className="h-75 w-full sm:h-95 md:h-auto md:flex-1 ">
        <img
          src={tennis}
          alt={imageAlt}
          loading="lazy"
          className="h-full w-full object-cover object-top md:object-bottom-right md:object-contain"
        />
      </AnimSlideRight>
    </section>
  );
}
