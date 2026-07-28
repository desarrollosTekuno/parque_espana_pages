import hero from "@/assets/images/About/hero.webp";
import { AboutContent } from "../../constants/About"; 

export default function Hero() {
  const { title, description, imageAlt } = AboutContent.hero;

  return (
    <section className="bg-header-gradient text-white">
      <div className="flex flex-col items-center lg:h-[60vh] lg:min-h-[380px] lg:max-h-[600px] lg:flex-row">

        {/* Imagen */}
        <div className="flex w-full justify-center lg:w-auto lg:justify-start lg:shrink-0 lg:h-full lg:items-end">
          <img
            src={hero}
            alt={imageAlt}
            className="max-w-55 object-contain lg:w-auto lg:h-[90%] lg:max-w-none"
          />
        </div>

        {/* Contenido */}
        <div className="flex w-full items-center justify-center px-6 py-8 lg:flex-1 lg:h-full lg:px-0 lg:py-0">
          <div className="w-full rounded-3xl bg-gradient-to-r from-[#031826] to-[#073D5F] px-8 py-10 shadow-xl lg:rounded-none lg:rounded-l-[70px] lg:py-28">

            <h1 className="text-left! ml-5 text-xl md:text-2xl font-bold leading-tight lg:text-4xl">
              {title}
            </h1>

            <p className="text-left! ml-5 mt-6 max-w-3xl text-base md:text-lg text-white/90 lg:text-2xl">
              {description}
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}