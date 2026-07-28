// JoinUs.tsx
import { MembershipsContent } from "../../constants/Memberships";
import { AnimFadeUp } from "../Animations";
import ButtonLink from "../ButtonLink";

export default function JoinUs() {
  const { title, description, buttonText, buttonLink } =
    MembershipsContent.joinUs;

  return (
    <section className="bg-[#F2F4F7] mt-20 lg:mt-40">
      <div className="wrap-90 sm:wrap-80 lg:wrap-80">
        <AnimFadeUp>
          <h2 className="font-extrabold text-[#3C3C3C] leading-tight text-[22px] sm:text-[24px] lg:text-[34px] lg:font-extrabold">
            {title}
          </h2>
        </AnimFadeUp>

        <AnimFadeUp>
          <p className="mt-10 lg:mt-16 text-[#2A2A2A] sm:mt-18 text-[16px] text-center sm:text-[18px] sm:text-center lg:text-[28px] lg:text-center">
            {description}
          </p>
        </AnimFadeUp>

        <AnimFadeUp className="mt-8 sm:mt-10 lg:mb-20 text-white mb-12">
          <ButtonLink
            text={buttonText}
            to={buttonLink}
            color="#4B4B4B"
            size={{ base: "sm", sm: "sm", lg: "lg" }}
          />
        </AnimFadeUp>
      </div>
    </section>
  );
}
