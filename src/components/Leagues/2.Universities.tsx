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
import University_Catolica_Valencia from "@/assets/images/Leagues/University_Valencia.webp";
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

import University_Pontifica_Salamanca from "@/assets/images/Leagues/University_Pontifica_Salamanca.webp";
import University_Ramon_Llull from "@/assets/images/Leagues/University_Llull.webp";
import University_Oviedo from "@/assets/images/Leagues/University_Oviedo.webp";
import University_Virgili from "@/assets/images/Leagues/University_Virgili.webp";
import University_Salamanca from "@/assets/images/Leagues/University_Salamanca.webp";
import University_Pablo_Olavide from "@/assets/images/Leagues/University_Pablo.webp";
import University_Sevilla from "@/assets/images/Leagues/University_Sevilla.webp";
import University_Valencia from "@/assets/images/Leagues/University_Valencia.webp";
import University_Vic from "@/assets/images/Leagues/University_Vic.webp";
import University_Zaragoza from "@/assets/images/Leagues/University_Zaragoza.webp";
import University_Alcant from "@/assets/images/Leagues/University_Alicante.webp";
import University_Alfonso_X_Esabio from "@/assets/images/Leagues/University_Sabio.webp";
import University_Nebrija from "@/assets/images/Leagues/University_Nebrija.webp";
import University_Autonoma_Madrid from "@/assets/images/Leagues/University_Auto_Madrid.webp";
import University_Burgos from "@/assets/images/Leagues/University_Burgos.webp";
import University_Jose_Cela from "@/assets/images/Leagues/University_Cela.webp";
import University_Ceu from "@/assets/images/Leagues/University_Ceu.webp";
import University_Mancha from "@/assets/images/Leagues/University_Mancha.webp";
import University_Antonio_Murcia from "@/assets/images/Leagues/University_Antonio_Murcia.webp";
import University_Complutense from "@/assets/images/Leagues/University_Complutense_Madrid.webp";
import University_Coruña from "@/assets/images/Leagues/University_Coruña.webp";
import University_Europea_Madrid from "@/assets/images/Leagues/University_Euro_Madrid.webp";
import University_Vasco from "@/assets/images/Leagues/University_Vasco.webp";
import University_Compostela from "@/assets/images/Leagues/University_Compostela.webp";

import University_Uned from "@/assets/images/Leagues/University_Uned.webp";
import University_Francisco_Vitoria from "@/assets/images/Leagues/University_Francisco.webp";
import University_Granada from "@/assets/images/Leagues/University_Granada.webp";
import University_Navarra from "@/assets/images/Leagues/University_Navarra.webp";
import University_Cartagena from "@/assets/images/Leagues/University_Cartagena.webp";
import University_Politecnica_Madrid from "@/assets/images/Leagues/University_Politecnica_Madrid.webp";
import University_Fabra from "@/assets/images/Leagues/University_Fabra.webp";
import University_Balears from "@/assets/images/Leagues/University_Balears.webp";
import University_Internacional_Catalunya from "@/assets/images/Leagues/University_Internacional_Catalunya.webp";
import University_Jaen from "@/assets/images/Leagues/University_Jaen.webp";
import University_La_Laguna from "@/assets/images/Leagues/University_Laguna.webp";
import University_Las_Palmas from "@/assets/images/Leagues/University_Palmas.webp";
import University_Lleida from "@/assets/images/Leagues/University_Lleida.webp";
import University_Miguel from "@/assets/images/Leagues/University_Miguel.webp";
import University_Murcia from "@/assets/images/Leagues/University_Murcia.webp";
import University_Oberta_Catalunya from "@/assets/images/Leagues/University_Oberta_Catalunya.webp";
import University_Olavide from "@/assets/images/Leagues/University_Olavide.webp";
import University_Politecnica_Catalunya from "@/assets/images/Leagues/University_Politecnica_Catalunya.webp";
import University_Politecnica_Valencia from "@/assets/images/Leagues/University_Politecnica_Valencia.webp";
import University_Comillas from "@/assets/images/Leagues/University_Comillas.webp";
import University_Publica_Navarra from "@/assets/images/Leagues/University_Navarra.webp";
import University_Carlos from "@/assets/images/Leagues/University_Carlos.webp";
import University_SEK from "@/assets/images/Leagues/University_Sek.webp";
import University_Jorge from "@/assets/images/Leagues/University_San_Jorge.webp";

// Interfaz para asegurar el tipado de cada universidad
interface UniversityItem {
  id: string;
  name: string;
  url?: string;
}

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
  "catolica-valencia": University_Catolica_Valencia,
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
  "pontificia-salamanca": University_Pontifica_Salamanca,
  "ramon-llull": University_Ramon_Llull,
  "oviedo": University_Oviedo,
  "rovira-virgili": University_Virgili,
  "salamanca": University_Salamanca,
  "san-pablo-ceu": University_Pablo_Olavide,
  "sevilla": University_Sevilla,
  "valencia": University_Valencia,
  "vic": University_Vic,
  "zaragoza": University_Zaragoza,
  "alacant": University_Alcant,
  "alfonso-x-sabio": University_Alfonso_X_Esabio,
  "nebrija": University_Nebrija,
  "autonoma-madrid": University_Autonoma_Madrid,
  "burgos": University_Burgos,
  "camilo-jose-cela": University_Jose_Cela,
  "cardenal-herrera": University_Ceu,
  "castilla-la-mancha": University_Mancha,
  "san-antonio-murcia": University_Antonio_Murcia,
  "complutense": University_Complutense,
  "coruna": University_Coruña,
  "europea-madrid": University_Europea_Madrid,
  "pais-vasco": University_Vasco,
  "santiago-compostela": University_Compostela,
  "uned": University_Uned,
  "francisco-vitoria": University_Francisco_Vitoria,
  "granada": University_Granada,
  "navarra": University_Navarra,
  "politecnica-cartagena": University_Cartagena,
  "politecnica-madrid": University_Politecnica_Madrid,
  "pompeu-fabra": University_Fabra,
  "illes-balears": University_Balears,
  "internacional-catalunya": University_Internacional_Catalunya,
  "jaen": University_Jaen,
  "la-laguna": University_La_Laguna,
  "las-palmas": University_Las_Palmas,
  "lleida": University_Lleida,
  "miguel-hernandez": University_Miguel,
  "murcia": University_Murcia,
  "oberta-catalunya": University_Oberta_Catalunya,
  "pablo-olavide": University_Olavide,
  "politecnica-catalunya": University_Politecnica_Catalunya,
  "politecnica-valencia": University_Politecnica_Valencia,
  "pontificia-comillas": University_Comillas,
  "publica-navarra": University_Publica_Navarra,
  "rey-juan-carlos": University_Carlos,
  "sek": University_SEK,
  "san-jorge": University_Jorge,
};

export default function UniversitiesGrid() {
  return (
    <section className="w-full bg-white py-12 lg:py-16">
      <div className="wrap-90 sm:wrap-80 mx-auto">
        <div className="grid grid-cols-1 gap-x-8 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
          {(UniversitiesContent.universities as UniversityItem[]).map((item) => {
            const logoSrc = universityLogos[item.id];

            const CardContent = (
              <div className="flex items-center gap-4 p-2 transition-transform hover:scale-105 cursor-pointer">
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

            return item.url ? (
              <a
                key={item.id}
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
                className="block no-underline text-inherit"
              >
                {CardContent}
              </a>
            ) : (
              <div key={item.id}>{CardContent}</div>
            );
          })}
        </div>
      </div>
    </section>
  );
}