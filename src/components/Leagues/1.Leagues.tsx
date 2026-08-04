import ButtonLink from "../ButtonLink";
import Crest from "@/assets/images/Leagues/Crest.webp";

// Importación directa desde Parque España 2
import { LeagueContent as leagueContent } from "../../constants/ParkSpain_2/Leagues";

export default function LeaguesContent() {
  return (
    <section className="w-full bg-white py-12 lg:py-20">
      <div className="wrap-100 mx-auto flex flex-col items-center text-center">
        
        {/* Título Principal */}
        <h2 className="mb-6 text-[24px] font-extrabold leading-tight text-[#3C3C3C] sm:text-[28px] lg:text-[34px]">
          {leagueContent.title}
        </h2>

        {/* Escudo / Logo */}
        <div className="my-4 flex items-center justify-center">
          <img
            src={Crest}
            alt={leagueContent.subtitle}
            className="h-28 w-auto object-contain sm:h-32 lg:h-38"
          />
        </div>

        {/* Subtítulo */}
        <h3 className="mt-4 text-[#2A2A2A] sm:mt-18 text-[16px] text-center sm:text-[18px] lg:text-[28px]">
          {leagueContent.subtitle}
        </h3>

        {/* Descripción */}
        <p className="mt-2 w-full text-[#2A2A2A] mt-10 text-[16px] sm:text-[20px] lg:text-[22px]">
          {leagueContent.description}
        </p>

        {/* Botón */}
        <div className="mt-8 flex justify-center text-white">
          <ButtonLink
            to={leagueContent.to}
            color="#0097b2" 
            text={leagueContent.buttonText}
            size={{ base: "sm", md: "sm", lg: "lg" }}
          />
        </div>

      </div>
    </section>
  );
}