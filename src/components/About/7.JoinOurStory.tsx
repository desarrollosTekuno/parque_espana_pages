import JoinOutStoru from "@/assets/images/About/joinOurStory.webp";
import { AboutContent } from "../../constants/About";
import ButtonLink from "../ButtonLink";

export default function Essence() {
  const { title, text } = AboutContent.joinUsStory;

  return (
    <section className="w-full bg-[#F2F4F7]">

      {/* Imagen: solo visible en celular */}
      <div
        className="h-60 w-full bg-cover bg-[right_center] md:hidden"
        style={{ backgroundImage: `url(${JoinOutStoru})`  }}
      />

      {/* Layout de tablet/escritorio: imagen de fondo con texto superpuesto */}
      <div
        className="relative mx-auto hidden w-full max-w-[2200px] md:flex md:h-[65vh] md:min-h-[480px] md:max-h-[520px] md:items-start md:bg-cover md:bg-center"
        style={{ backgroundImage: `url(${JoinOutStoru})` }}
      >
        <div className="relative z-10 w-full px-6 pt-8 text-white md:w-[65%] md:pl-10 md:pr-8 md:pt-10 lg:pl-30 lg:pr-28 lg:pt-20">
          <h2 className="pt-6 text-center text-xl font-extrabold leading-tight md:text-2xl lg:text-3xl">
            {title}
          </h2>
          <p className="mt-6 text-center text-sm md:mt-6 md:text-base lg:text-[23px]">
            {text}
          </p>
          <div className="mt-14 flex justify-center gap-16">
            <ButtonLink to="" color="#029FD4" text="Conocer instalaciones" size={{ sm: "md", lg: "xl"}} />
            <ButtonLink to="" color="#0097B2" text="Ver membresías" size={{ sm: "md", lg: "xl"}} />
          </div>
        </div>
      </div>

      {/* Texto y botones: solo visible en celular */}
      <div className="px-6 py-8 text-[#3C3C3C] md:hidden">
        <h2 className="text-center text-2xl font-extrabold leading-tight">
          {title}
        </h2>
        <p className="mt-6 text-center text-base">
          {text}
        </p>
        <div className="mt-8 flex flex-col items-center gap-4 text-white">
          <ButtonLink to="" color="#029FD4" text="Conocer instalaciones" size={{ base: "sm" }} />
          <ButtonLink to="" color="#0097B2" text="Ver membresías" size={{ base: "sm" }} />
          
        </div>
      </div>

    </section>
  );
}