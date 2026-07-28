import Card from "../CardShort";
import pillar1Img from "@/assets/images/About/pillar1.webp";
import pillar2Img from "@/assets/images/About/pillar2.webp";
import pillar3Img from "@/assets/images/About/pillar3.webp";
import { AboutContent } from "../../constants/About";

export default function Pillars() {
  const { pillars } = AboutContent.pillars;
  return (
    <section className="px-6 py-16 sm:px-10 lg:wrap-90">

      <h2 className="text-center text-[22px] sm:text-2xl lg:text-[34px] font-extrabold">
        Nuestros pilares
      </h2>

      <div className="mt-12 flex flex-col gap-6 sm:h-90 md:flex-row lg:h-135">
        <Card
          image={pillar1Img}
          title={pillars[0].title}
          text={pillars[0].text}
          imageAlt={pillars[0].imageAlt}
        />
        <Card
          image={pillar2Img}
          title={pillars[1].title}
          text={pillars[1].text}
          imageAlt={pillars[1].imageAlt}
        />
        <Card
          image={pillar3Img}
          title={pillars[2].title}
          text={pillars[2].text}
          imageAlt={pillars[2].imageAlt}
        />
      </div>

    </section>
  );
}