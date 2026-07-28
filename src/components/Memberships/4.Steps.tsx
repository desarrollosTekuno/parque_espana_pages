// Steps.tsx
import { MembershipsContent } from "../../constants/Memberships";
import Separator from "@/assets/images/Memberships/Separator.webp";
import { AnimFadeUp, AnimStaggerContainer, AnimStaggerItem } from "../Animations";

export default function Steps() {
  const { title, items } = MembershipsContent.steps;

  return (
    <section className="relative overflow-hidden bg-[#F2F4F7] pb-16 sm:pb-28 lg:pb-38 mt-20 lg:mt-40 ">
      <div className="wrap-90 sm:wrap-80 lg:wrap-70">
        <AnimFadeUp>
          <h2 className="font-extrabold text-[#3C3C3C] leading-tight text-[22px] sm:text-[24px] lg:text-[34px] lg:font-extrabold">
            {title}
          </h2>
        </AnimFadeUp>

        <AnimStaggerContainer className="mx-auto mt-8 flex w-fit max-w-full flex-col items-start gap-4 sm:mt-20 sm:gap-6">
          {items.map(({ id, text }) => (
            <AnimStaggerItem key={id}>
              <div className="flex items-start gap-2.5 sm:gap-3">
                <span className="text-[16px] text-justify sm:text-[18px]  sm:text-justify lg:text-[28px] lg:text-justify font-extrabold text-[#0097b2] ">
                  {id}
                </span>
                <p className="text-[15.9px] text-justify sm:text-[18px]  sm:text-justify lg:text-[28px] lg:text-justify text-[#3C3C3C]">
                  {text}
                </p>
              </div>
            </AnimStaggerItem>
          ))}
        </AnimStaggerContainer>
      </div>

      {/* Separador decorativo inferior */}
      <img
        src={Separator}
        alt=""
        loading="lazy"
        className="absolute bottom-0 left-0 w-full object-cover"
      />
    </section>
  );
}