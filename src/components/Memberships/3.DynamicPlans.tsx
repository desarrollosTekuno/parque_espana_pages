import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { MembershipsContent as parque1Content } from "../../constants/ParkSpain_1/Memberships";
import { MembershipsContent as parque2Content } from "../../constants/ParkSpain_2/Memberships";
import CardLong from "../CardLong";
import { AnimStaggerContainer } from "../Animations";
import Family from "@/assets/images/Memberships/Family_Membership.webp";
import Individual from "@/assets/images/Memberships/Individual_Membership.webp";
import Solidarity from "@/assets/images/Memberships/Solidarity_Membership.webp";
import Separator from "@/assets/images/Memberships/Separator.webp";
import {
  getClubMembershipPrices,
  formatMXN,
  CLUB_IDS,
  type MembershipPrice,
} from "../../services/api";

const images: Record<number, string> = {
  1: Family,
  2: Individual,
  3: Solidarity,
};

export default function Plans() {
  const location = useLocation();

  // Detección del parque según la URL — esto decide QUÉ CLUB consultar en la API
  const isParque2 = location.pathname.startsWith("/parque-espana-2");
  const clubId = isParque2 ? CLUB_IDS.PARQUE_2 : CLUB_IDS.PARQUE_1;

  // Selección dinámica de contenido (texto/imagenes fijos)
  const content = isParque2 ? parque2Content : parque1Content;
  const { title, cards } = content.plans;

  // Parque España 1: 3 cards
  // Parque España 2: únicamente las primeras 2 cards
  const cardsToDisplay = isParque2 ? cards.slice(0, 2) : cards;

  // Precios: se piden de nuevo cada vez que cambia clubId (es decir, al cambiar de parque)
  const [prices, setPrices] = useState<MembershipPrice[]>([]);
  const [loadingPrices, setLoadingPrices] = useState(true);

  useEffect(() => {
    setLoadingPrices(true);
    getClubMembershipPrices(clubId)
      .then((data) => setPrices(data))
      .catch((err) => console.error("Error cargando precios:", err))
      .finally(() => setLoadingPrices(false));
  }, [clubId]);

  // Busca el precio mensual correspondiente al "code" de cada tarjeta, según el club activo
  function getMonthlyPrice(code: string): string {
    if (loadingPrices) return "Cargando...";
    const match = prices.find((p) => p.code === code);
    return match ? formatMXN(match.monthly_payment) : "Consultar precio";
  }

  return (
    <section
      className={`relative overflow-hidden bg-[#F2F4F7] mt-20 lg:mt-40 ${
        isParque2 ? "pb-16 sm:pb-28 lg:pb-38" : ""
      }`}
    >
      <div className="wrap-90 sm:wrap-90 lg:wrap-90">
        <h2 className="font-extrabold text-[#3C3C3C] leading-tight text-[22px] sm:text-[24px] lg:text-[34px] lg:font-extrabold">
          {title}
        </h2>

        {/* 
          - Parque 1: Grid centrada con justify-items-center y w-full.
          - Parque 2: Flex centrado con gap-[130px] exacto.
        */}
        <AnimStaggerContainer
          className={`mx-auto p-2 mt-10 gap-6 sm:gap-6 lg:mt-16 ${
            isParque2
              ? "flex flex-col sm:flex-row justify-center items-center lg:gap-[130px]"
              : "grid grid-cols-1 sm:grid-cols-3 justify-items-center items-stretch"
          }`}
        >
          {cardsToDisplay.map((card) => (
            <div
              key={card.id}
              className="w-full flex justify-center max-w-[270px] sm:max-w-90 lg:max-w-[380px]"
            >
              <div className="w-full">
                <CardLong
                  card={{
                    ...card,
                    image: images[card.id],
                    price: getMonthlyPrice(card.code),
                  }}
                />
              </div>
            </div>
          ))}
        </AnimStaggerContainer>
      </div>

      {/* Separador decorativo inferior (Únicamente para Parque España 2) */}
      {isParque2 && (
        <img
          src={Separator}
          alt=""
          loading="lazy"
          className="absolute bottom-0 left-0 w-full object-cover"
        />
      )}
    </section>
  );
}