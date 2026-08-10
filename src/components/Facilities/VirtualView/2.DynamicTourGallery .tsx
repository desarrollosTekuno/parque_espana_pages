import { useState } from "react";
import { useLocation } from "react-router-dom";

import { VirtualViewContent as VirtualView1 } from "../../../constants/ParkSpain_1/VirtualView";
import { VirtualViewContent as VirtualView2 } from "../../../constants/ParkSpain_2/VirtualView";

// ==========================================
// PARQUE ESPAÑA 1 (INTACTO)
// ==========================================
import Interior from "@/assets/images/Facilities/VirtualView/Interior.webp";
import Exterior from "@/assets/images/Facilities/VirtualView/Exterior.webp";
import Servicios from "@/assets/images/Facilities/VirtualView/Servicios.webp";
import ActividadFisica from "@/assets/images/Facilities/VirtualView/Actividad_Fisica.webp";
import Estacionamiento from "@/assets/images/Facilities/VirtualView/Estacionamiento.webp";

import Recepcion from "@/assets/images/Facilities/VirtualView/Recepcion.webp";
import SalonDeBanderas from "@/assets/images/Facilities/VirtualView/Salon_de_banderas.webp";
import Exposiciones from "@/assets/images/Facilities/VirtualView/Exposiciones.webp";

import Squash from "@/assets/images/Facilities/VirtualView/Squash.webp";
import Titanic from "@/assets/images/Facilities/VirtualView/Titanic.webp";
import PasillosCentral from "@/assets/images/Facilities/VirtualView/Pasillo_central.webp";
import Terraza from "@/assets/images/Facilities/VirtualView/Terraza.webp";
import JardinPosterior from "@/assets/images/Facilities/VirtualView/Jardin_posterior.webp";
import JardinLateral from "@/assets/images/Facilities/VirtualView/Jardin_lateral.webp";

import Cafeteria from "@/assets/images/Facilities/VirtualView/Cafeteria.webp";
import SalonDeActos from "@/assets/images/Facilities/VirtualView/Salon_de_actos.webp";
import SalonDeJuegos from "@/assets/images/Facilities/VirtualView/Salon_de_juegos.webp";

import Gimnasio from "@/assets/images/Facilities/VirtualView/Gimnasio.webp";
import Tenis from "@/assets/images/Facilities/VirtualView/Tenis.webp";
import FutbolRapido from "@/assets/images/Facilities/VirtualView/Futbol_rapido.webp";
import CanchaDeBaloncesto from "@/assets/images/Facilities/VirtualView/Cancha_de_baloncesto.webp";
import AlbercaOlimpia from "@/assets/images/Facilities/VirtualView/Alberca_olimpica.webp";

import Estacionamiento1 from "@/assets/images/Facilities/VirtualView/Estacionamiento_1.webp";
import Estacionamiento2 from "@/assets/images/Facilities/VirtualView/Estacionamiento_2.webp";

const tabIconsP1: Record<string, string> = {
  interior: Interior,
  exterior: Exterior,
  servicios: Servicios,
  "actividad-fisica": ActividadFisica,
  estacionamiento: Estacionamiento,
};

const itemImagesP1: Record<string, string> = {
  "interior-1": Recepcion,
  "interior-2": SalonDeBanderas,
  "interior-3": Exposiciones,

  "exterior-1": PasillosCentral,
  "exterior-2": Terraza,
  "exterior-3": JardinLateral,
  "exterior-4": JardinPosterior,
  "exterior-5": Titanic,
  "exterior-6": Squash,

  "servicios-1": SalonDeActos,
  "servicios-2": SalonDeJuegos,
  "servicios-3": Cafeteria,

  "actividad-fisica-1": Gimnasio,
  "actividad-fisica-2": Tenis,
  "actividad-fisica-3": FutbolRapido,
  "actividad-fisica-4": CanchaDeBaloncesto,
  "actividad-fisica-5": AlbercaOlimpia,

  "estacionamiento-1": Estacionamiento1,
  "estacionamiento-2": Estacionamiento2,
};

// ==========================================
// PARQUE ESPAÑA 2 (4 PESTAÑAS: 6, 5, 4, 6 IMÁGENES)
// ==========================================

// --- Íconos de Pestañas Parque España 2 ---
// Importa tus imágenes reales reemplazando las rutas de ejemplo:
import Canchas_pe2 from "@/assets/images/Facilities/VirtualView/Canchas.webp";
import Interior_pe2 from "@/assets/images/Facilities/VirtualView/Interior_pe2.webp";
import Exterior_pe2 from "@/assets/images/Facilities/VirtualView/Exterior.webp";
import Salones_pe2 from "@/assets/images/Facilities/VirtualView/Salones.webp";



// --- Imágenes de Pestaña 1 (6 imágenes) ---
import Canchas_de_tenis from "@/assets/images/Facilities/VirtualView/Canchas_de_tenis.webp";
import Fronton from "@/assets/images/Facilities/VirtualView/Fronton.webp";
import Tenis_pe2 from "@/assets/images/Facilities/VirtualView/Tenis_pe2.webp";
import Padel from "@/assets/images/Facilities/VirtualView/Padel.webp";
import Futbol from "@/assets/images/Facilities/VirtualView/Futbol.webp";
import Polideportivo from "@/assets/images/Facilities/VirtualView/Polideportivo.webp";



// --- Imágenes de Pestaña 2 (5 imágenes) ---
import Lobby from "@/assets/images/Facilities/VirtualView/Lobby.webp";
import Trofeos from "@/assets/images/Facilities/VirtualView/Trofeos.webp";
import Vestidores from "@/assets/images/Facilities/VirtualView/Vestidores.webp";
import Auditorio from "@/assets/images/Facilities/VirtualView/Auditorio.webp";
import Billar from "@/assets/images/Facilities/VirtualView/Billar.webp";

// --- Imágenes de Pestaña 3 (4 imágenes) ---
import Albercas from "@/assets/images/Facilities/VirtualView/Albercas.webp";
import Pista from "@/assets/images/Facilities/VirtualView/Pista.webp";
import Jardines from "@/assets/images/Facilities/VirtualView/Jardines.webp";
import Juegos from "@/assets/images/Facilities/VirtualView/Juegos.webp";

// --- Imágenes de Pestaña 4 (6 imágenes) ---
import Salon_de_pelotas from "@/assets/images/Facilities/VirtualView/Salon_de_pelotas.webp";
import Salon_de_spinning from "@/assets/images/Facilities/VirtualView/Salon_de_spinning.webp";
import Salon_grande from "@/assets/images/Facilities/VirtualView/Salon_grande.webp";
import Salon_artes_marciales from "@/assets/images/Facilities/VirtualView/Salon_de_artes_marciales.webp";
import Salon_de_ballet from "@/assets/images/Facilities/VirtualView/Salon_de_ballet.webp";
import Salon_de_box from "@/assets/images/Facilities/VirtualView/Salon_de_box.webp";

// Mapeo de Íconos de Pestañas de Parque 2
const tabIconsP2: Record<string, string> = {
"canchas": Canchas_pe2,
"interior": Interior_pe2,
"exterior": Exterior_pe2,
"salones": Salones_pe2,
};

// Mapeo de Imágenes por Ítem de Parque 2 (${tabId}-${itemId})
const itemImagesP2: Record<string, string> = {
  // Pestaña 1 (6 ítems)
  "canchas-1": Canchas_de_tenis,
  "canchas-2": Fronton,
  "canchas-3": Tenis_pe2,
  "canchas-4": Padel,
  "canchas-5": Futbol,
  "canchas-6": Polideportivo,

  // Pestaña 2 (5 ítems)
  "interior-1": Lobby,
  "interior-2": Trofeos,
  "interior-3": Vestidores,
  "interior-4": Auditorio,
  "interior-5": Billar,

  // Pestaña 3 (4 ítems)
  "exterior-1": Albercas,
  "exterior-2": Pista,
  "exterior-3": Jardines,
  "exterior-4": Juegos,

  // Pestaña 4 (6 ítems)
  "salones-1": Salon_de_pelotas,
  "salones-2": Salon_de_spinning,
  "salones-3": Salon_grande,
  "salones-4": Salon_artes_marciales,
  "salones-5": Salon_de_ballet,
  "salones-6": Salon_de_box,
  
};

// ==========================================
// COMPONENTE PRINCIPAL
// ==========================================
export default function TourGallery() {
  const location = useLocation();
  const isParque2 = location.pathname.startsWith("/parque-espana-2");

  // Seleccionar dinámicamente constantes y diccionarios de imágenes
  const currentContent = isParque2 ? VirtualView2 : VirtualView1;
  const tabIcons = isParque2 ? tabIconsP2 : tabIconsP1;
  const itemImages = isParque2 ? itemImagesP2 : itemImagesP1;

  const { tabs } = currentContent.tourGallery;
  const [activeTab, setActiveTab] = useState(tabs[0]?.id ?? "");

  const currentTab = tabs.find((tab) => tab.id === activeTab) ?? tabs[0];
  const isDefaultTab = currentTab?.id === tabs[0]?.id;

  // Precarga silenciosa de imágenes
  function preloadTabImages(tabId: string, items: { id: number }[]) {
    items.forEach((item) => {
      const src = itemImages[`${tabId}-${item.id}`];
      if (src) {
        const img = new Image();
        img.src = src;
      }
    });
  }

  if (!tabs || tabs.length == 0) return null;

  return (
    <section className="bg-[#F2F4F7]">
      {/* Barra de pestañas */}
      <div className="border-b border-gray-200 bg-white">
        <div className="wrap-90 sm:wrap-80 lg:wrap-75">
          <div className="relative">
            <div className="flex gap-2 overflow-x-auto sm:gap-4 lg:justify-center lg:gap-6 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
              {tabs.map((tab) => {
                const iconSrc = tabIcons[tab.id];
                const isActive = tab.id === currentTab.id;
                return (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    onMouseEnter={() => preloadTabImages(tab.id, tab.items)}
                    className={`flex shrink-0 cursor-pointer items-center gap-2 rounded-t-2xl px-4 py-3 text-[16px] font-semibold transition sm:gap-3 sm:px-5 sm:py-4 sm:text-[18px] lg:items-center lg:px-6 lg:text-[22px] ${
                      isActive
                        ? "border border-b-0 border-gray-200 bg-[#F2F4F7] text-[#3C3C3C]"
                        : "text-gray-500 hover:text-[#3C3C3C]"
                    }`}
                  >
                    {iconSrc && (
                      <img
                        src={iconSrc}
                        alt=""
                        className="h-5 w-5 object-contain sm:h-6 sm:w-6 lg:h-7 lg:w-7"
                      />
                    )}
                    {tab.label}
                  </button>
                );
              })}
            </div>
            {/* Fade indicador de scroll en mobile */}
            <div className="pointer-events-none absolute right-0 top-0 h-full w-10 bg-gradient-to-l from-white to-transparent sm:hidden" />
          </div>
        </div>
      </div>

      {/* Grid de imágenes */}
      <div className="py-10 sm:py-12 lg:py-16">
        <div className="wrap-90 sm:wrap-90 lg:wrap-80">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3 lg:gap-8">
            {currentTab.items.map((item) => {
              const imageSrc = itemImages[`${currentTab.id}-${item.id}`];
              return (
                <div key={item.id}>
                  <div className="aspect-[16/10] w-full overflow-hidden rounded-2xl bg-gray-300">
                    {imageSrc && (
                      <img
                        src={imageSrc}
                        alt={item.name}
                        loading={isDefaultTab ? "eager" : "lazy"}
                        width={640}
                        height={400}
                        className="h-full w-full object-cover"
                      />
                    )}
                  </div>
                  <p className="mt-3 text-[16px] font-medium text-[#3C3C3C] sm:text-[18px] lg:text-[20px]">
                    {item.name}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}