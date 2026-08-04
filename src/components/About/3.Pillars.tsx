import Card from "../CardShort";
import pillar1Img from "@/assets/images/About/pillar1.webp";
import pillar2Img from "@/assets/images/About/pillar2.webp";
import pillar3Img from "@/assets/images/About/pillar3.webp";
import { AboutContent } from "../../constants/ParkSpain_1/About";

export default function Pillars() {
  const { pillars } = AboutContent.pillars;

  return (
    <section className="bg-[#F2F4F7] mt-20 lg:mt-40">
      {/* Wrapper estandarizado exacto al de tus otros componentes */}
      <div className="wrap-90  lg:wrap-90">
        
        <h2 className="text-center font-extrabold text-[#3C3C3C] leading-tight text-[22px] sm:text-[24px] lg:text-[34px]">
          Nuestros pilares
        </h2>

        {/* 
          Cambiado a Grid con `items-stretch`:
          Fuerza a la tarjeta 2 y 3 a alinearse EXACTAMENTE 
          a la misma altura total que la tarjeta 1.
        */}
        <div className="mt-10 lg:mt-16 grid grid-cols-1 sm:grid-cols-3 gap-6 items-stretch">
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

      </div>
    </section>
  );
}