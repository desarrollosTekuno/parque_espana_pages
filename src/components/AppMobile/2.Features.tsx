import { AppMobileContent } from "../../constants/ParkSpain_1/AppMobile";
import { AnimFadeUp, AnimSlideRight } from "../Animations";
import Mockup from "@/assets/images/AppMobile/Mockup.webp";
import CheckIcon from "@/assets/images/AppMobile/Check.webp";

export default function Features() {
  const { title, items, phoneImageAlt } = AppMobileContent.features;

  return (
    <section className="bg-[#F2F4F7]">
      <div className="wrap-90 sm:wrap-80 lg:wrap-80 relative h-full py-16 lg:py-40">
        <div className="grid grid-cols-1 items-center">
          {/* Título + lista */}
          <div className="order-1 text-left sm:order-none sm:col-start-2 sm:mb-10 sm:text-left">
            <AnimFadeUp>
              <h2 className="font-extrabold text-center text-[#3C3C3C] text-[24px] sm:text-[30px] lg:text-[32px]">
                {title}
              </h2>
            </AnimFadeUp>

            <ul className="mt-8 space-y-5 sm:mt-10 sm:ml-60 lg:ml-0 lg:space-y-6">
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

          {/* Mockup: Oculto en móviles (`hidden`) y visible a partir de `sm` (`sm:block`) */}
          <div className="hidden pointer-events-none sm:order-none sm:block sm:justify-start">
            <AnimSlideRight className="sm:absolute sm:inset-y-0 sm:left-0 sm:flex sm:h-full sm:w-full sm:items-end">
              <img
                src={Mockup}
                alt={phoneImageAlt}
                loading="lazy"
                className="h-auto w-full object-contain sm:scale-100"
              />
            </AnimSlideRight>
          </div>
        </div>
      </div>
    </section>
  );
}