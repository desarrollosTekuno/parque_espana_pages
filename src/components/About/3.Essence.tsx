import essenceBg from "@/assets/images/About/essence.webp";
import personImg from "@/assets/images/About/EssenceWithOutLine.webp";
import waveImg from "@/assets/images/About/EssenceLines.webp";
import { AboutContent } from "../../constants/About";

export default function Essence() {
  const { title, text1, text2 } = AboutContent.essence;

  return (
    <section className="w-full bg-[#F2F4F7]">

      {/* Imagen: solo visible en celular */}
      <div
        className="h-70 w-full bg-cover bg-[right_center] md:hidden"
        style={{ backgroundImage: `url(${essenceBg})` }}
      />

      {/* Layout de tablet/escritorio: capas independientes, sin recorte */}
      <div className="relative hidden w-full md:block md:h-[55vh] md:min-h-[480px] md:max-h-[600px] lg:h-[60vh] lg:min-h-[620px] lg:max-h-[750px]">

        {/* Persona: nunca se recorta, se ajusta a la altura disponible */}
        <img
          src={personImg}
          alt=""
          className="pointer-events-none absolute bottom-0 right-0 z-0 h-[90%] w-auto object-contain"
        />

        {/* Curva decorativa: ocupa todo el ancho, mantiene su proporción */}
        <img
          src={waveImg}
          alt=""
          className="absolute bottom-0 left-0 z-10 w-full"
        />

        {/* Contenido de texto */}
        <div className="relative z-20 w-full px-6 pt-8 md:w-[70%] md:pl-10 md:pr-8 md:pt-10 lg:pl-30 lg:pr-28 lg:pt-20">
          <h2 className="text-center text-xl text-[#3C3C3C] font-extrabold leading-tight sm:text-2xl lg:text-[34px]">
            {title}
          </h2>
          <p className="mt-4 text-justify text-sm md:text-lg lg:text-[26px] md:mt-6 sm:pr-10 lg:pr-0 ">
            {text1}
          </p>
          <p className="mt-4 text-justify text-sm md:text-lg lg:text-[26px] md:mt-6 sm:pr-50 lg:pr-0">
            {text2}
          </p>
        </div>

      </div>

      {/* Texto: solo visible en celular */}
      <div className="px-6 py-8 md:hidden">
        <h2 className="text-center text-xl text-[#3C3C3C] font-extrabold leading-tight">
          {title}
        </h2>
        <p className="mt-6 text-justify text-base">
          {text1}
        </p>
        <p className="mt-6 text-justify text-base">
          {text2}
        </p>
      </div>

    </section>
  );
}