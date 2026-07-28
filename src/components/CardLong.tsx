import { ChevronRight } from "lucide-react";
import { AnimHoverScale, AnimStaggerItem } from "./Animations";
import ButtonLink from "./ButtonLink";

export default function CardLong({ card }: any) {
  return (
    <AnimStaggerItem className="h-full">
      <AnimHoverScale className="card-long-gradient flex h-full min-h-95 flex-col rounded-3xl p-4 text-center text-white sm:min-h-[350px] sm:p-4 lg:min-h-[480px] lg:p-6">
        <img
          src={card.image}
          alt={card.imageAlt}
          loading="lazy"
          className="h-32 w-full rounded-2xl object-cover sm:h-28 lg:h-48"
        />

        <h3 className="mt-5 text-[16px] font-bold sm:mt-3 sm:text-[14px] lg:mt-6 lg:text-xl">
          {card.name}
        </h3>

        <p className="mt-3 line-clamp-3 text-[15px] text-justify text-white/90 sm:mt-2 sm:text-[15px] lg:mt-4 lg:text-[21px]">
          {card.description}
        </p>

        <p className="mt-4 text-[18px] sm:text-[18px] lg:text-[28px] font-bold text-[#f4b403] sm:mt-3 lg:mt-6">
          {card.price}
        </p>

        <div className="flex-1" />

        <div className="mt-7 text-black">
          <ButtonLink
            text={card.buttonText}
            to={card.buttonLink}
            color="#FFFFFF"
            size={{ base: "sm", md: "sm", lg: "lg" }}
            icon={ChevronRight}
          />
        </div>
      </AnimHoverScale>
    </AnimStaggerItem>
  );
}