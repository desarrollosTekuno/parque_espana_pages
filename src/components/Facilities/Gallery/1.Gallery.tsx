import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { ChevronLeft, ChevronRight } from "lucide-react";

// Imports para Parque España 1
import { GalleryContent as GalleryContent1 } from "../../../constants/ParkSpain_1/Gallery";

// Imports para Parque España 2
import { GalleryContent as GalleryContent2 } from "../../../constants/ParkSpain_2/Gallery";

// Mapas de imágenes por parque (Asegúrate de actualizar los paths según tus assets reales)
const albumImages1: Record<number, string> = {
  // 1: CruzDeMayo2026,
  // 2: AcuatlonNavideno2025,
};

const albumImages2: Record<number, string> = {
  // 1: CruzDeMayo2026Parque2,
  // ...
};

// Mapas de links por parque
const albumLinks1: Record<number, string> = {
  1: "/galeria/cruz-de-mayo-2026",
  2: "/galeria/acuatlon-navideno-2025",
  3: "/galeria/fiesta-guadalupana-2025",
  4: "/galeria/acuatlon-septiembre-2025",
  5: "/galeria/romeria-covadonga-2025",
  6: "/galeria/romeria-santiago-apostol-2025",
  7: "/galeria/cruz-de-mayo-2025",
  8: "/galeria/cabalgata-2025",
  9: "/galeria/donacion-navidena-2024",
  10: "/galeria/fiesta-guadalupana-2024",
  11: "/galeria/romeria-pilar-2024",
  12: "/galeria/torneo-pilar-2024",
  13: "/galeria/romeria-covadonga-2024",
  14: "/galeria/fiesta-covadonga-2024",
  15: "/galeria/romeria-santiago-apostol-2024",
};

const albumLinks2: Record<number, string> = {
  // Configura los links correspondientes para Parque España 2
  // 1: "/parque-espana-2/galeria/evento-1",
};

interface AlbumCardProps {
  album: {
    title: string;
    photoCount: number | string;
    viewCount: number | string;
  };
  image?: string;
  link: string;
}

function AlbumCard({ album, image, link }: AlbumCardProps) {
  return (
    <Link
      to={link}
      className="group relative aspect-square overflow-hidden rounded-xl bg-gray-300"
    >
      {image && (
        <img
          src={image}
          alt={album.title}
          loading="lazy"
          className="absolute inset-0 h-full w-full object-cover transition group-hover:scale-105"
        />
      )}
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 p-3 sm:p-4">
        <h3 className="text-[16px] font-bold text-white sm:text-[16px] lg:text-[16px]">
          {album.title}
        </h3>
        <p className="mt-1 text-[15px] font-medium text-white/90 sm:text-[16px]">
          {album.photoCount} fotos &nbsp;·&nbsp; {album.viewCount} vistas
        </p>
      </div>
    </Link>
  );
}

export default function Gallery() {
  const location = useLocation();
  const isParque2 = location.pathname.startsWith("/parque-espana-2");

  // Selección dinámica según la ruta
  const currentContent = isParque2 ? GalleryContent2 : GalleryContent1;
  const currentImages = isParque2 ? albumImages2 : albumImages1;
  const currentLinks = isParque2 ? albumLinks2 : albumLinks1;

  const { albums } = currentContent;

  const [page, setPage] = useState(0);
  const perPage = 3;
  const totalPages = Math.ceil(albums.length / perPage);

  const start = page * perPage;
  const visibleAlbums = albums.slice(start, start + perPage);

  const prev = () => setPage((p) => Math.max(0, p - 1));
  const next = () => setPage((p) => Math.min(totalPages - 1, p + 1));

  const touchStartX = { current: 0 };
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };
  const handleTouchEnd = (e: React.TouchEvent) => {
    const deltaX = e.changedTouches[0].clientX - touchStartX.current;
    if (deltaX < -50) next();
    if (deltaX > 50) prev();
  };

  return (
    <div className="wrap-90 sm:wrap-80 lg:wrap-80 mt-10 sm:mt-14 lg:mt-20">
      <div className="relative w-full">
        {/* MOBILE / TABLET */}
        <div
          className="lg:hidden"
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
        >
          <div className="mx-auto grid max-w-[280px] grid-cols-1 gap-4 sm:max-w-[320px] sm:gap-5">
            {visibleAlbums.map((album) => (
              <AlbumCard
                key={album.id}
                album={album}
                image={currentImages[album.id]}
                link={currentLinks[album.id] ?? "#"}
              />
            ))}
          </div>

          {totalPages > 1 && (
            <div className="mt-8 flex items-center justify-center gap-4 sm:mt-10">
              <button
                onClick={prev}
                disabled={page === 0}
                className="rounded-full bg-white p-2 shadow disabled:opacity-30"
              >
                <ChevronLeft className="h-5 w-5 text-[#0097b2]" />
              </button>
              <span className="text-sm text-gray-500">
                {page + 1} / {totalPages}
              </span>
              <button
                onClick={next}
                disabled={page === totalPages - 1}
                className="mb-12 rounded-full bg-white p-2 shadow disabled:opacity-30"
              >
                <ChevronRight className="h-5 w-5 text-[#0097b2]" />
              </button>
            </div>
          )}
        </div>

        {/* DESKTOP (lg) */}
        <div className="mb-20 hidden grid-cols-5 gap-6 lg:grid">
          {albums.map((album) => (
            <AlbumCard
              key={album.id}
              album={album}
              image={currentImages[album.id]}
              link={currentLinks[album.id] ?? "#"}
            />
          ))}
        </div>
      </div>
    </div>
  );
}