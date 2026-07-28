import Timeline from "../Timeline";
import img1940 from "@/assets/images/About/1940.webp";
import img1958 from "@/assets/images/About/1958.webp";
import img1961 from "@/assets/images/About/1961.webp";
import imgGrowth from "@/assets/images/About/Growth.webp";
import imgPresent from "@/assets/images/About/Present.webp";

const timelineItems = [
  {
    year: "1940",
    title: "Los primeros encuentros deportivos",
    text: "Los terrenos que hoy conforman Parque España eran utilizados por aquipos integrados por españoles residentes en Puebla para la práctica del fútbol y otras actividades recreativas.",
    image: img1940,
  },
  {
    year: "1958",
    title: "Un espacio comienza a tomar forma",
    text: "La Sociedad Española de Beneficiencia de Puebla recibe en donación los terrenos que darían origen al actual Parque España Puebla, consolidando el proyecto de crear un centro social, cultural y deportivo.",
    image: img1958,
  },
  {
    year: "1961",
    title: "Nace el Patronato del Parque España",
    text: "El 26 de febrero se constituye formalmente la institución, con la misión de ofrecer un espacio de encuentro para las familias y preservar las tradiciones de la comunidad española en Puebla.",
    image: img1961,
  },
  {
    year: "Crecimiento",
    title: "Décadas de crecimiento",
    text: "Se desarrollan instalaciones deportivas, actividades culturales y espacios de recreación que fortalecen la convivencia entre generaciones y consolidan la identidad del parque.",
    image: imgGrowth,
  },
  {
    year: "Actualidad",
    title: "Una comunidad que sigue creciendo",
    text: "Con más de 6,500 usuarios activos, Parque España Puebla continúa siendo un referente deportivo, cultural y social para familias de distintas generaciones.",
    image: imgPresent,
  },
];

export default function History() {
  return (
    <section className="px-6 py-16 sm:px-10 lg:px-26 wrap-90">

      <h2 className="text-center text-[22px] sm:text-2xl lg:text-[34px] font-extrabold ">
        Nuestra historia
      </h2>

      <Timeline items={timelineItems} />

    </section>
  );
}