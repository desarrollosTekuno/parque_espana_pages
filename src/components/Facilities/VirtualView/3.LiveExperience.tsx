import { VirtualViewContent } from "../../../constants/ParkSpain_1/VirtualView";
import { AnimFadeUp } from "../../Animations";
import ButtonLink from "../../ButtonLink";

export default function LiveExperience() {
  const { title, description, columns, buttons } = VirtualViewContent.liveExperience;

  return (
    <section className="bg-[#F2F4F7]">
      <div className="wrap-90 sm:wrap-80 lg:wrap-90 py-16 text-center lg:py-24">
        <AnimFadeUp>
          <h2 className="font-extrabold text-[#3C3C3C] text-[22px] sm:text-[24px] lg:text-[34px] lg:mb-20">
            {title}
          </h2>
        </AnimFadeUp>

        <AnimFadeUp className="mt-6">
          <p className="font-semibold text-black text-[16px] sm:text-[18px] lg:text-[22px] lg:mb-20">
            {description}
          </p>
        </AnimFadeUp>

        <AnimFadeUp className="mt-12 lg:mt-16">
          <div className="grid grid-cols-1 gap-x-8 gap-y-6 text-left sm:grid-cols-2 lg:grid-cols-4 lg:mb-25">
            {columns.map((col, i) => (
              <ul key={i} className="space-y-3">
                {col.map((text, j) => (
                  <li
                    key={j}
                    className="flex items-start gap-2 text-[#3C3C3C] text-[16px] sm:text-[17px] lg:text-[19px]"
                  >
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#3C3C3C]" />
                    {text}
                  </li>
                ))}
              </ul>
            ))}
          </div>
        </AnimFadeUp>

        <AnimFadeUp className="mt-12 flex text-white  justify-center gap-4 sm:flex-row sm:gap-6 lg:mt-16">
          <ButtonLink
            text={buttons.contact.text}
            to={buttons.contact.to}
            color="#0097b2"
            size={{ base: "sm", md: "sm", lg: "lg" }}
          />
          <ButtonLink
            text={buttons.activities.text}
            to={buttons.activities.to}
            color="#0b5a8c"
            size={{ base: "sm", md: "sm", lg: "lg" }}
          />
        </AnimFadeUp>
      </div>
    </section>
  );
}