import Graphic_Element from "@/assets/images/Home/Graphic_Element.webp";
import StatsCounter from "../StatsCounter";
import { HomeContent } from "../../constants/Home";
import { AnimFadeUp, AnimScale } from "../Animations";
import ButtonLink from "../ButtonLink";

export default function StatsBanner() {
  const { title, descriptionParts, buttonText, buttonLink, imageAlt } =
    HomeContent.stats;

  return (
    <section className="bg-[#F2F4F7] mt-20 lg:mt-40">
      <div className="wrap-90 sm:wrap-80 lg:wrap-70">
        <div className="flex w-full flex-wrap items-center justify-center gap-2 sm:gap-3">
          <AnimFadeUp>
            <h2 className="w-full font-extrabold text-[#004aad] leading-tight text-[22px] sm:text-[24px] lg:text-[34px] lg:font-extrabold">
              {title}
            </h2>
          </AnimFadeUp>
          <AnimScale>
            <img
              src={Graphic_Element}
              alt={imageAlt}
              loading="lazy"
              className="hidden lg:block h-20 w-20 -mt-10 lg:h-24 lg:-mt-16 lg:w-24  object-contain"
            />
          </AnimScale>
        </div>

        <AnimFadeUp className="mt-10 lg:mt-16">
          <p className="text-[16px] text-justify sm:text-[18px] sm:text-center lg:text-[28px] lg:text-center text-[#3C3C3C]">
            {descriptionParts.map((part, i) =>
              part.strong ? <strong key={i}>{part.text}</strong> : part.text,
            )}
          </p>
        </AnimFadeUp>

        <AnimFadeUp className="mt-8 text-white">
        <ButtonLink text={buttonText} to={buttonLink} 
        color="#0097b2" 
        size={{base: "sm", md: "sm", lg:"lg"}} />
   
        </AnimFadeUp>

        <AnimScale className="mt-12">
          <StatsCounter />
        </AnimScale>
      </div>
    </section>
  );
}
