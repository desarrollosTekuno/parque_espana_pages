import { useLocation } from "react-router-dom";
import Timeline from "../Timeline";

// Imágenes de Parque España 1
import img1940_p1 from "@/assets/images/About/1940.webp";
import img1958_p1 from "@/assets/images/About/1958.webp";
import img1961_p1 from "@/assets/images/About/1961.webp";
import imgGrowth_p1 from "@/assets/images/About/Growth.webp";
import imgPresent_p1 from "@/assets/images/About/Present.webp";

// Imágenes de Parque España 2 (ajusta las rutas/nombres según tus archivos)
import img1990_p2 from "@/assets/images/About/1990_pe2.webp";
import img1993_p2 from "@/assets/images/About/1993_pe2.webp";
import img1999_p2 from "@/assets/images/About/1999_pe2.webp";
import img2001_p2 from "@/assets/images/About/2001_pe2.webp";
import imgPresent_p2 from "@/assets/images/About/Present_pe2.webp";
// Constantes de texto
import { historyTimeline as timelineParque1 } from "../../constants/ParkSpain_1/History";
import { historyTimeline as timelineParque2 } from "../../constants/ParkSpain_2/History";

export default function History() {
  const location = useLocation();
  const isParque2 = location.pathname.startsWith("/parque-espana-2");

  // Arrays de imágenes en el mismo orden que los textos en las constantes
  const imagesParque1 = [
    img1940_p1,
    img1958_p1,
    img1961_p1,
    imgGrowth_p1,
    imgPresent_p1,
  ];

  const imagesParque2 = [
    img1990_p2,
    img1993_p2,
    img1999_p2,
    img2001_p2,
    imgPresent_p2,
  ];

  // Seleccionamos los textos y las imágenes correspondientes
  const rawTimeline = isParque2 ? timelineParque2 : timelineParque1;
  const currentImages = isParque2 ? imagesParque2 : imagesParque1;

  // Unimos el texto de la constante con la imagen mapeada por su índice
  const timelineItems = rawTimeline.map((item, index) => ({
    ...item,
    image: currentImages[index] || currentImages[0], // fallback si faltara alguna
  }));

  return (
    <section className=" sm:px-10 lg:px-26 wrap-90">
      <h2 className="text-center font-extrabold text-[#3C3C3C] leading-tight text-[22px] sm:text-[24px] lg:text-[34px]">
        Nuestra historia
      </h2>

      <Timeline items={timelineItems} />
    </section>
  );
}