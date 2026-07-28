import { HomeContent } from "../../constants/Home";
import { AnimFadeUp, AnimScale } from "../Animations";
import Racket from "@/assets/images/Home/Racket.webp";
import Flags from "@/assets/images/Home/Flags.webp";
import Group from "@/assets/images/Home/Group.webp";
import Star from "@/assets/images/Home/Star.webp";

export default function ExperienceBanner() {
  const { title, items } = HomeContent.experience;

  const images = [Racket, Group, Star, Flags];

  return (
    <section className="bg-[#F2F4F7] mt-20 lg:mt-40">
      <div className="warp-90 sm:wrap-80 lg:wrap-75">
        <AnimFadeUp>
          <h2 className="font-extrabold text-[#3C3C3C] leading-tight text-[22px] sm:text-[24px] lg:text-[34px] lg:font-extrabold">
            {title}
          </h2>
        </AnimFadeUp>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:gap-8 lg:grid-cols-4 ">
          {items.map((item, index) => (
            <AnimScale key={item.id} className="text-center mt-10 lg:mt-16">
              <img
                src={images[index]}
                alt={item.title}
                loading="lazy"
                className="h-14 sm:h-16 lg:h-24 w-auto mx-auto mb-4 sm:mb-6 object-contain"
              />

              <h3 className="text-[16px] font-semibold mb-3 text-black sm:text-[18px]   lg:w-full lg:text-[21px] lg:mb-5 lg:font-semibold">
                {item.title}
              </h3>

              <p className=" text-[16px]  text-black  sm:text-[17px] lg:w-full lg:text-[21px] lg:mb1">
                {item.description}
              </p>
            </AnimScale>
          ))}
        </div>
      </div>
    </section>
  );
}
