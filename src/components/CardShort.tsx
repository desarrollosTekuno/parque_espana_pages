interface CardProps {
  image: string;
  title: string;
  text: string;
  imageAlt?: string;
  className?: string;
}

export default function Card({
  image,
  title,
  text,
  imageAlt,
  className = "",
}: CardProps) {
  return (
    <div
      className={`group mx-auto flex h-full w-full flex-col overflow-hidden rounded-2xl bg-[#3264A2] shadow-lg transition-all duration-300 hover:shadow-xl
        /* En base: Tarjeta estilizada y contenida */
        max-w-[310px] sm:max-w-[300px]
        /* En lg: Toma el ancho del grid */
        lg:max-w-none ${className}`}
    >
      {/* 
        IMAGEN: Mantener el aspect ratio bloqueado para que NO crezca ni se deforme 
      */}
      <div className="relative aspect-[4/3] w-full flex-shrink-0 overflow-hidden">
        <img
          src={image}
          alt={imageAlt || title}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>

      {/* 
        BLOQUE AZUL: 'flex-1' obliga al azul a crecer hasta abajo en las cards 2 y 3 
      */}
      <div className="flex flex-1 flex-col justify-start p-5 sm:p-6 lg:p-7 text-white">
        <h3 className="text-left font-extrabold leading-tight text-[17px] sm:text-[16px] lg:text-[22px]">
          {title}
        </h3>

        <p className="mt-3 text-left font-normal leading-relaxed text-[#F2F4F7] text-[16px] sm:text-[18px] lg:w-full lg:text-[21px]">
          {text}
        </p>
      </div>
    </div>
  );
}