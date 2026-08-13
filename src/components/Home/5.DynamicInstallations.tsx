import { useLocation } from "react-router-dom";
import FlipCardGrid from "../CardFlip";

import { HomeContent as parque1Content } from "../../constants/ParkSpain_1/Home";
import { HomeContent as parque2Content } from "../../constants/ParkSpain_2/Home";

import { AnimFadeUp } from "../Animations";
import ButtonLink from "../ButtonLink";

export default function Installations() {
  const location = useLocation();
  const isParque2 = location.pathname.startsWith("/parque-espana-2");

  const content = isParque2 ? parque2Content : parque1Content;
  const { title, buttonText, buttonLink } = content.installations;

  const targetCardCount = isParque2 ? 8 : 5;

  if (isParque2) {
    return (
      <section className="bg-[#F2F4F7] mt-20 lg:mt-40">
        <div className="wrap-90 sm:wrap-80 lg:wrap-90">
          <AnimFadeUp>
            <h2 className="font-extrabold text-[#3C3C3C] leading-tight text-[22px] sm:text-[24px] lg:text-[34px] lg:font-extrabold mb-10 lg:mb-16">
              {title}
            </h2>
          </AnimFadeUp>

          <FlipCardGrid cardCount={targetCardCount} visibleDuration={2000} />

          <AnimFadeUp className="mt-12 text-center text-white">
            <ButtonLink
              text={buttonText}
              to={buttonLink}
              color="#0097b2"
              size={{ base: "sm", md: "sm", lg: "lg" }}
            />
          </AnimFadeUp>
        </div>
      </section>
    );
  }

  return (
    <section className="bg-[#F2F4F7] mt-20 lg:mt-40">
      <div className="wrap-90 sm:wrap-80 lg:wrap-70">
        <AnimFadeUp>
          <h2 className="font-extrabold text-[#3C3C3C] leading-tight text-[22px] sm:text-[24px] lg:text-[34px] lg:font-extrabold mb-10 lg:mb-16">
            {title}
          </h2>
        </AnimFadeUp>

        <FlipCardGrid cardCount={targetCardCount} visibleDuration={2000} />

        <AnimFadeUp className="mt-12 text-center text-white">
          <ButtonLink
            text={buttonText}
            to={buttonLink}
            color="#0097b2"
            size={{ base: "sm", md: "sm", lg: "lg" }}
          />
        </AnimFadeUp>
      </div>
    </section>
  );
}