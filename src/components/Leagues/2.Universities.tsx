import { UniversitiesContent } from "../../constants/ParkSpain_2/Universities";

// Imports de logos
import University_Abat_Oliba from "@/assets/images/Leagues/University_Abad.webp";
import University_Alcala from "@/assets/images/Leagues/University_Alcala.webp";
import University_Almeria from "@/assets/images/Leagues/University_Almeria.webp";
import University_Autonoma from "@/assets/images/Leagues/University_Autonoma.webp";
import University_Autonoma_Barcelona from "@/assets/images/Leagues/University_Barcelona.webp";
import University_Cadiz from "@/assets/images/Leagues/University_Cadiz.webp";
import University_Cantabria from "@/assets/images/Leagues/University_Cantabria.webp";
import University_Carlos_III from "@/assets/images/Leagues/University_Carlos_III.webp";
import University_Avila from "@/assets/images/Leagues/University_Avila.webp";
import University_Valencia from "@/assets/images/Leagues/University_Valencia.webp";
import University_Cordoba from "@/assets/images/Leagues/University_Cordoba.webp";
import University_Deusto from "@/assets/images/Leagues/University_Deusto.webp";
import University_Cervantes from "@/assets/images/Leagues/University_Cervantes.webp";
import University_Girona from "@/assets/images/Leagues/University_Girona.webp";
import University_Huelva from "@/assets/images/Leagues/University_Huelva.webp";
import University_Andalucia from "@/assets/images/Leagues/University_Andalucia.webp";
import University_Pelayo from "@/assets/images/Leagues/University_Pelayo.webp";
import University_Jaume_I from "@/assets/images/Leagues/University_Jaume_I.webp";
import University_Rioja from "@/assets/images/Leagues/University_Rioja.webp";
import University_Leon from "@/assets/images/Leagues/University_Leon.webp";
import University_Malaga from "@/assets/images/Leagues/University_Malaga.webp";
import University_Mondragon from "@/assets/images/Leagues/University_Mondragon.webp";
import University_Valladolid from "@/assets/images/Leagues/University_Valladolid.webp";
import University_Vigo from "@/assets/images/Leagues/University_Vigo.webp";
// Importa los demás logos aquí...
// import University_Alcala from "@/assets/images/Leagues/University_Alcala.webp";

// Mapeo entre los IDs definidos en universidades.ts y las imágenes importadas
const universityLogos: Record<string, string> = {
  "abat-oliba": University_Abat_Oliba,
  "alcala": University_Alcala,
  "almeria": University_Almeria,
  "autonoma-barcelona": University_Autonoma,
  "barcelona": University_Autonoma_Barcelona,
  "cadiz": University_Cadiz,
  "cantabria": University_Cantabria,
  "carlos-iii": University_Carlos_III,
  "catolica-avila": University_Avila,
  "catolica-valencia": University_Valencia,
  "cordoba": University_Cordoba,
  "deusto": University_Deusto,
  "miguel-cervantes": University_Cervantes,
  "girona": University_Girona,
  "huelva": University_Huelva,
  "andalucia": University_Andalucia,
  "menendez-pelayo": University_Pelayo,
  "jaume-i": University_Jaume_I,
  "rioja": University_Rioja,
  "leon": University_Leon,
  "malaga": University_Malaga,
  "mondragon": University_Mondragon,
  "valladolid": University_Valladolid,
  "vigo": University_Vigo,
  // Agrega aquí los demás IDs según los tengas en universities.ts
};

export default function UniversitiesGrid() {
  return (
    <section className="w-full bg-white py-12 lg:py-16">
      <div className="wrap-90 sm:wrap-80 mx-auto">
        <div className="grid grid-cols-1 gap-x-8 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
          {UniversitiesContent.universities.map((item) => {
            const logoSrc = universityLogos[item.id];

            return (
              <div
                key={item.id}
                className="flex items-center gap-4 p-2 transition-transform hover:scale-105"
              >
                <div className="flex h-16 w-16 shrink-0 items-center justify-center">
                  {logoSrc && (
                    <img
                      src={logoSrc}
                      alt={item.name}
                      className="h-full w-full object-contain"
                    />
                  )}
                </div>
                <span className="text-[15px] font-medium leading-snug text-[#555555] sm:text-[16px]">
                  {item.name}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}