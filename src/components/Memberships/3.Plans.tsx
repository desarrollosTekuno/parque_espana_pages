import { MembershipsContent } from "../../constants/Memberships";
import CardLong from "../CardLong";
import { AnimStaggerContainer } from "../Animations";
import Family from "@/assets/images/Memberships/Family_Membership.webp";
import Individual from "@/assets/images/Memberships/Individual_Membership.webp";
import Solidarity from "@/assets/images/Memberships/Solidarity_Membership.webp";

const images: Record<number, string> = {
  1: Family,
  2: Individual,
  3: Solidarity,
};

export default function Plans() {
  const { title, cards } = MembershipsContent.plans;

  return (
    <section className="bg-[#F2F4F7] mt-20 lg:mt-40">
      <div className="wrap-90 sm:wrap-90 lg:wrap-90">
        <h2 className="font-extrabold text-[#3C3C3C] leading-tight text-[22px] sm:text-[24px] lg:text-[34px] lg:font-extrabold">
          {title}
        </h2>

        <AnimStaggerContainer className="mx-auto p-2 mt-10 grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-4 lg:gap-[130px] lg:mt-16">
          {cards.map((card) => (
            <div
              key={card.id}
              className="w-full max-w-[270px] mx-auto sm:max-w-90 lg:max-w-[380px]"
            >
              <CardLong card={{ ...card, image: images[card.id] }} />
            </div>
          ))}
        </AnimStaggerContainer>
      </div>
    </section>
  );
}