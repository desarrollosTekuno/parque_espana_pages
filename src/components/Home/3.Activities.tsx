import Cards from "../CardsImages";
import Carousel from "../Carousel";
import { HomeContent } from "../../constants/Home";
import { AnimFadeUp } from "../Animations";

export default function Activities() {
  const { title, descriptionParts, cards } = HomeContent.activities;

  return (
    <section className="bg-[#F2F4F7] mt-20 lg:mt-40">
      <div className="wrap-90 sm:wrap-80 lg:wrap-75">
        <AnimFadeUp>
          <h2 className="font-extrabold text-[#3C3C3C] leading-tight text-[22px] sm:text-[24px] lg:text-[34px] lg:font-extrabold">
            {title}
          </h2>
        </AnimFadeUp>

        <AnimFadeUp className="mt-10 lg:mt-16">
          <p className="text-[16px] text-justify sm:text-[18px]  sm:text-justify lg:text-[28px] lg:text-justify text-[#3C3C3C]">
            {descriptionParts.map((part, i) =>
              part.strong ? <strong key={i}>{part.text}</strong> : part.text,
            )}
          </p>
        </AnimFadeUp>

        {/* Sin wrap extra: hereda el ancho ya definido por el padre */}

        <div className="mt-16 -mx-[5%] sm:-mx-[10%] lg:-mx-[12.5%] wrap-90">
          <Carousel items={cards} />
        </div>
      </div>
    </section>
  );
}
