import Logo from "@/assets/icons/Logo.webp";
import { AnimFadeUp } from "../Animations";
import { HomeContent } from "../../constants/Home";
import ButtonLink from "../ButtonLink";

export default function ParkExperience() {
  const { title, description, buttons } = HomeContent.experiencePark;

  return (
    <section className="bg-[#f5f5f5] mt-20 lg:mt-40">
      <div className="wrap-90 sm:wrap-80 lg:wrap-75">
        <div className="flex flex-col items-center text-center">
          {/* Logo */}
          <AnimFadeUp className="mb-8 sm:mb-12">
            <img
              src={Logo}
              alt="Logo Parque España"
              loading="lazy"
              className="h-24 sm:h-28 lg:h-45 object-contain"
            />
          </AnimFadeUp>

          {/* Título */}
          <AnimFadeUp className="w-full mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-center text-[#3C3C3C]">
              {title}
            </h2>
          </AnimFadeUp>

          {/* Descripción */}
          <AnimFadeUp className="w-full text-[#3C3C3C] sm:mb-16 text-[16px] sm:text-[20px] lg:text-[22px] mb-12 leading-relaxed font-light">
            <p>{description}</p>
          </AnimFadeUp>

          {/* Botones */}
          <AnimFadeUp className="flex flex-col text-white mb-40 sm:flex-row gap-6 sm:gap-8  justify-center">
            <ButtonLink
              text={buttons.activities.label}
              to={buttons.activities.to}
              color="#0097b2"
              size={{ base: "sm", sm: "sm", lg: "lg" }}
            />

            <ButtonLink
              text={buttons.memberships.label}
              to={buttons.memberships.to}
              color="#003f99"
              size={{ base: "sm", md: "sm", lg: "lg" }}
            />
          </AnimFadeUp>
        </div>
      </div>
    </section>
  );
}