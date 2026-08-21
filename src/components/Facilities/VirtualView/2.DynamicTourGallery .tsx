import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { ImageOff, Loader2 } from "lucide-react";
import { getClubVirtualTour, CLUB_IDS, type VirtualTourCategory } from "../../../services/api";

import Interior from "@/assets/images/Facilities/VirtualView/Interior.webp";
import Exterior from "@/assets/images/Facilities/VirtualView/Exterior.webp";
import Servicios from "@/assets/images/Facilities/VirtualView/Servicios.webp";
import ActividadFisica from "@/assets/images/Facilities/VirtualView/Actividad_Fisica.webp";
import Estacionamiento from "@/assets/images/Facilities/VirtualView/Estacionamiento.webp";

const tabIconsP1: Record<string, string> = {
  interior: Interior,
  exterior: Exterior,
  servicios: Servicios,
  "actividad-fisica": ActividadFisica,
  estacionamiento: Estacionamiento,
};

import Canchas_pe2 from "@/assets/images/Facilities/VirtualView/Canchas.webp";
import Interior_pe2 from "@/assets/images/Facilities/VirtualView/Interior_pe2.webp";
import Exterior_pe2 from "@/assets/images/Facilities/VirtualView/Exterior.webp";
import Salones_pe2 from "@/assets/images/Facilities/VirtualView/Salones.webp";

const tabIconsP2: Record<string, string> = {
  canchas: Canchas_pe2,
  interior: Interior_pe2,
  exterior: Exterior_pe2,
  salones: Salones_pe2,
};

function slugify(name: string) {
  return name
    .normalize("NFD")
    .replace(/\p{Diacritic}/gu, "")
    .toLowerCase()
    .trim()
    .replace(/\s+/g, "-");
}

export default function TourGallery() {
  const location = useLocation();
  const isParque2 = location.pathname.startsWith("/parque-espana-2");
  const clubId = isParque2 ? CLUB_IDS.PARQUE_2 : CLUB_IDS.PARQUE_1;
  const tabIcons = isParque2 ? tabIconsP2 : tabIconsP1;

  // Cantidad de cuadros de esqueleto, ajustada a la primera pestaña típica de cada parque
  const skeletonCount = isParque2 ? 6 : 3;

  const [categories, setCategories] = useState<VirtualTourCategory[]>([]);
  const [loading, setLoading] = useState(true);
  const [activeTabId, setActiveTabId] = useState<string>("");

  useEffect(() => {
    setLoading(true);
    getClubVirtualTour(clubId)
      .then((data) => {
        setCategories(data);
        if (data.length > 0) setActiveTabId(slugify(data[0].name));
      })
      .catch((err) => console.error("Error cargando tour virtual:", err))
      .finally(() => setLoading(false));
  }, [clubId]);

  const currentTab = categories.find((cat) => slugify(cat.name) === activeTabId) ?? categories[0];
  const isDefaultTab = currentTab && categories[0] && currentTab.id === categories[0].id;

  function preloadTabImages(category: VirtualTourCategory) {
    category.images.forEach((img) => {
      if (img.image_url) {
        const image = new Image();
        image.src = img.image_url;
      }
    });
  }

  if (loading) {
    const skeletonKeys = Array.from({ length: skeletonCount }, (_, i) => i);

    return (
      <section className="bg-[#F2F4F7]">
        <div className="border-b border-gray-200 bg-white">
          <div className="wrap-90 sm:wrap-80 lg:wrap-75">
            <div className="flex gap-2 overflow-x-auto sm:gap-4 lg:justify-center lg:gap-6 py-3 sm:py-4">
              {Array.from({ length: 5 }, (_, i) => (
                <div
                  key={i}
                  className="h-9 w-24 shrink-0 rounded-full bg-gray-200 animate-pulse sm:h-10 sm:w-28 lg:h-11 lg:w-32"
                />
              ))}
            </div>
          </div>
        </div>

        <div className="py-10 sm:py-12 lg:py-16">
          <div className="wrap-90 sm:wrap-90 lg:wrap-80">
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3 lg:gap-8">
              {skeletonKeys.map((key) => (
                <div key={key}>
                  <div className="aspect-[16/10] w-full overflow-hidden rounded-2xl bg-gray-200 flex items-center justify-center">
                    <Loader2 className="w-8 h-8 text-gray-400 animate-spin" />
                  </div>
                  <div className="mt-3 h-4 w-2/3 rounded bg-gray-200 animate-pulse" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    );
  }

  if (!categories || categories.length === 0 || !currentTab) return null;

  return (
    <section className="bg-[#F2F4F7]">
      <div className="border-b border-gray-200 bg-white">
        <div className="wrap-90 sm:wrap-80 lg:wrap-75">
          <div className="relative">
            <div className="flex gap-2 overflow-x-auto sm:gap-4 lg:justify-center lg:gap-6 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
              {categories.map((cat) => {
                const tabId = slugify(cat.name);
                const iconSrc = tabIcons[tabId];
                const isActive = tabId === activeTabId;
                return (
                  <button
                    key={cat.id}
                    onClick={() => setActiveTabId(tabId)}
                    onMouseEnter={() => preloadTabImages(cat)}
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
                    {cat.name}
                  </button>
                );
              })}
            </div>
            <div className="pointer-events-none absolute right-0 top-0 h-full w-10 bg-gradient-to-l from-white to-transparent sm:hidden" />
          </div>
        </div>
      </div>

      <div className="py-10 sm:py-12 lg:py-16">
        <div className="wrap-90 sm:wrap-90 lg:wrap-80">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3 lg:gap-8">
            {currentTab.images.map((img, i) => (
              <div key={img.id ?? `${activeTabId}-${i}`}>
                <div className="aspect-[16/10] w-full overflow-hidden rounded-2xl bg-gray-300">
                  {img.image_url ? (
                    <img
                      src={img.image_url}
                      alt={img.title}
                      loading={isDefaultTab ? "eager" : "lazy"}
                      width={640}
                      height={400}
                      className="h-full w-full object-cover"
                    />
                  ) : (
                    <div className="h-full w-full flex flex-col items-center justify-center gap-2 text-gray-400">
                      <ImageOff className="w-8 h-8" />
                      <span className="text-sm font-medium">Próximamente</span>
                    </div>
                  )}
                </div>
                <p className="mt-3 text-[16px] font-medium text-[#3C3C3C] sm:text-[18px] lg:text-[20px]">
                  {img.title}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}