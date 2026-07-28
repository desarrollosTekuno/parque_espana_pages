import FlipCardGrid, { FlipCard } from "../CardFlip";
import { HomeContent } from "../../constants/Home";
import { AnimFadeUp, AnimScale } from "../Animations";
import ButtonLink from "../ButtonLink";

export default function Installations() {
  const { title, cards, buttonText, buttonLink } = HomeContent.installations;

  return (
    <section className="bg-[#F2F4F7] mt-20 lg:mt-40">
      <div className="wrap-90 sm:wrap-80 lg:wrap-70">
        <AnimFadeUp>
          <h2 className="font-extrabold text-[#3C3C3C] leading-tight text-[22px] sm:text-[24px] lg:text-[34px] lg:font-extrabold mb-10 lg:mb-16">
            {title}
          </h2>
        </AnimFadeUp>

        <FlipCardGrid items={cards} cardCount={5} visibleDuration={2000}>
          {(cardsProps: any[]) => (
            <div className="flex flex-col gap-6 items-center">
              {/* Primera fila */}
              <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-3 gap-6 w-full max-w-5xl justify-items-center">
                {cardsProps.slice(0, 3).map((props) => (
                  <AnimScale key={props.key} className="w-full max-w-65 sm:max-w-none">
                    <FlipCard {...props} />
                  </AnimScale>
                ))}
              </div>

              {/* Segunda fila */}
              <div className="grid grid-cols-1 sm:grid-cols-6 lg:grid-cols-6 gap-6 w-full max-w-5xl justify-items-center">
                <AnimScale className="w-full max-w-65 sm:max-w-none sm:col-span-2 sm:col-start-2 lg:col-span-2 lg:col-start-2">
                  <FlipCard {...cardsProps[3]} />
                </AnimScale>

                <AnimScale className="w-full max-w-65 sm:max-w-none sm:col-span-2 sm:col-start-4 lg:col-span-2 lg:col-start-4">
                  <FlipCard {...cardsProps[4]} />
                </AnimScale>
              </div>
            </div>
          )}
        </FlipCardGrid>

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