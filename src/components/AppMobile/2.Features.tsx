import { AppMobileContent } from "../../constants/AppMobile";
import { AnimFadeUp, AnimSlideRight } from "../Animations";
import Mockup from "@/assets/images/AppMobile/Mockup.webp";
import CheckIcon from "@/assets/images/AppMobile/Check.webp";

export default function Features() {
  const { title, items, phoneImageAlt } = AppMobileContent.features;

  return (
    <section className=" bg-[#F2F4F7] ">
      <div className="wrap-90 sm:wrap-80 lg:wrap-80 relative h-full py-16 lg:py-20">
        <div className="grid grid-cols-1 items-center ">
          {/* Título + lista: izquierda SOLO en base, comportamiento "lg" desde sm en adelante */}
          <div className="order-1 text-left sm:order-none sm:col-start-2 sm:mb-10 sm:text-left">
            <AnimFadeUp>
              <h2 className="font-extrabold text-center text-[#3C3C3C] text-[24px] sm:text-[30px] lg:text-[32px]">
                {title}
              </h2>
            </AnimFadeUp>

            <ul className="mt-8 space-y-5 sm:mt-10 sm:ml-60  lg:space-y-6">
              {items.map((item) => (
                <AnimFadeUp key={item.id}>
                  <li className="flex items-center justify-start gap-3">
                    <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full sm:h-8 sm:w-8">
                      <img src={CheckIcon} alt="" className="h-full w-full object-contain" />
                    </span>
                    <p className="text-[16px] text-[#3C3C3C] sm:text-[18px] lg:text-[21px]">
                      {item.text}
                    </p>
                  </li>
                </AnimFadeUp>
              ))}
            </ul>
          </div>

          {/* Mockup: comportamiento "lg" (absoluto, cubre altura) desde sm en adelante */}
          <div className="mt-15 order-2 pointer-events-none flex justify-center sm:order-none sm:mt-0 sm:block sm:justify-start">
            <AnimSlideRight className="static w-full sm:absolute sm:inset-y-0 sm:left-0 sm:flex sm:h-full sm:items-end">
              <img
                src={Mockup}
                alt={phoneImageAlt}
                loading="lazy"
                className="h-auto w-full scale-110 object-contain sm:w-full sm:scale-100"
              />
            </AnimSlideRight>
          </div>
        </div>
      </div>
    </section>
  );
}