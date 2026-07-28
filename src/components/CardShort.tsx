interface CardProps {
  image: string;
  title: string;
  text: string;
  imageAlt?: string;
}

export default function Card({ image, title, text, imageAlt }: CardProps) {
  return (
    <div className="flex h-80 w-full flex-col overflow-hidden rounded-2xl bg-[#3264A2] shadow-lg md:h-full">

      {/* Imagen: 60% de la altura */}
      <div className="relative h-[60%] w-full">
        <img
          src={image}
          alt={imageAlt}
          className="h-full w-full object-cover"
        />
      </div>

      {/* Contenido: 40% de la altura */}
      <div className="flex h-[40%] w-full flex-col justify-center px-6 py-2 text-white">
        <h3 className="pl-2 text-left text-lg font-bold leading-tight lg:text-2xl">
          {title}
        </h3>
        <p className="mt-4 text-left text-sm lg:text-[26px] text-white/90 md:mt-8 lg:font-light">
          {text}
        </p>
      </div>

    </div>
  );
}