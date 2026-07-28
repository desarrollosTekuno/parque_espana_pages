import { MembershipsContent } from "../../constants/Memberships";
import Benefits1 from "@/assets/images/Memberships/Benefits-1.webp";
import Benefits2 from "@/assets/images/Memberships/Benefits-2.webp";
import Benefits3 from "@/assets/images/Memberships/Benefits-3.webp";
import Benefits4 from "@/assets/images/Memberships/Benefits-4.webp";

import { AnimFadeUp } from "../Animations";

const icons: Record<number, string> = {
  1: Benefits1,
  2: Benefits2,
  3: Benefits3,
  4: Benefits4,
};

export default function Benefits() {
  const { title, cards } = MembershipsContent.benefits;

  return (
    <section className="bg-[#F2F4F7] mt-20 lg:mt-40">
      <AnimFadeUp>
        <h2 className="font-extrabold text-[#3C3C3C] leading-tight text-[22px] sm:text-[24px] lg:text-[34px] lg:font-extrabold">
          {title}
        </h2>
      </AnimFadeUp>

      <div className="wrap-90 sm:wrap-80 lg:wrap-80">
        <div className="relative mx-auto mt-10 w-full lg:mt-14">
          {/* Línea horizontal con gradiente, solo visible desde sm en adelante */}
          <div className="benefits-line-gradient absolute left-0 right-0 top-8 hidden sm:h-[3px] lg:h-[5px] sm:block" />

          <div className="grid grid-cols-2 mt-10 lg:mt-16 gap-y-10 gap-x-6 sm:grid-cols-4 sm:gap-x-6">
            {cards.map(({ id, name, iconAlt }) => (
              <AnimFadeUp key={id}>
                <div className="relative flex flex-col items-center text-center">
                  <img
                    src={icons[id]}
                    alt={iconAlt}
                    loading="lazy"
                    className="relative z-10 h-12 w-12 object-contain sm:h-15 sm:w-18 lg:h-20 lg:w-24"
                  />
                  <p className="mt-3 text-center text-[16px]  text-[#3C3C3C] sm:max-w-40 sm:text[18px] lg:text-[21px]">
                    {name}
                  </p>
                </div>
              </AnimFadeUp>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}