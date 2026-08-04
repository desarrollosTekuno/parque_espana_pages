interface CardProps {
  title: string;
  text: string;
  image: string;
  alt?: string;
  imagePosition?: "top-left" | "bottom-right";
  backgroundColor?: string;
}

export default function CardBadge({
  title,
  text,
  image,
  alt,
  imagePosition = "top-left",
  backgroundColor = "#FFFFFF"
}: CardProps) {
  const isTopLeft = imagePosition == "top-left";

  return (
    <div className="relative">

      {/* Patrón decorativo: detrás de la tarjeta, en la esquina */}
      <img
        src={image}
        alt={alt}
        className={`absolute z-0 w-[35%] ${
          isTopLeft
            ? "-left-12 -top-12 lg:-left-22 lg:-top-22"
            : "-bottom-12 -right-12 lg:-bottom-22 lg:-right-22"
        }`}
      />

      {/* Tarjeta: por encima, tapa la mitad del patrón */}
      <div 
        className="relative z-10 rounded-2xl p-8 shadow-md"
        style={{ backgroundColor }}
      >
        <h3 className="text-left text-xl sm:text-2xl lg:text-[34px] font-extrabold text-[#D31E28]">
          {title}
        </h3>
        <p className="mt-5 text-left text-[16px] sm:text-[18px] lg:text-[21px] text-[#3C3C3C] leading-snug">
          {text}
        </p>
      </div>

    </div>
  );
}