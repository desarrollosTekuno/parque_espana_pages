import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { ChevronLeft, ChevronRight } from "lucide-react";

// Imports para Parque España 1
import { GalleryContent as GalleryContent1 } from "../../../constants/ParkSpain_1/Gallery";

// Imports para Parque España 2
import { GalleryContent as GalleryContent2 } from "../../../constants/ParkSpain_2/Gallery";

// Flickr
import { getFlickrPhotosets, type FlickrPhotoset } from "../../../services/api";

interface AlbumCardProps {
  album: {
    title: string;
    photoCount: number | string;
    viewCount: number | string;
    image_url?: string | null;
  };
  link: string;
}

function AlbumCard({ album, link }: AlbumCardProps) {
  return (
    <Link
      to={link}
      className="group relative aspect-square overflow-hidden rounded-xl bg-gray-300"
    >
      {album.image_url && (
        <img
          src={album.image_url}
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

// Cuántos álbumes trae cada página de Flickr
const FLICKR_PER_PAGE = 15;

export default function Gallery() {
  const location = useLocation();
  const isParque2 = location.pathname.startsWith("/parque-espana-2");

  // Ruta base según el parque, usada para armar el link de cada álbum
  const basePath = isParque2 ? "/parque-espana-2" : "/parque-espana-1";

  const currentContent = isParque2 ? GalleryContent2 : GalleryContent1;

  const { albums: staticAlbums } = currentContent;

  const [page, setPage] = useState(1);
  const [flickrAlbums, setFlickrAlbums] = useState<FlickrPhotoset[] | null>(
    null,
  );
  const [flickrTotalPages, setFlickrTotalPages] = useState(1);
  const [loading, setLoading] = useState(false);
  const [flickrFailed, setFlickrFailed] = useState(false);

  useEffect(() => {
    let cancelled = false;
    setLoading(true);

    getFlickrPhotosets(page, FLICKR_PER_PAGE, isParque2 ? 2 : 1)
      .then((res) => {
        if (cancelled) return;
        setFlickrAlbums(res.photosets);
        setFlickrTotalPages(res.totalPages);
        setFlickrFailed(false);
      })
      .catch((err) => {
        console.error("No se pudieron cargar los álbumes de Flickr:", err);
        if (!cancelled) setFlickrFailed(true);
      })
      .finally(() => {
        if (!cancelled) setLoading(false);
      });

    return () => {
      cancelled = true;
    };
  }, [page, isParque2]);

  const usingFlickr = !flickrFailed && flickrAlbums !== null;

  // Usamos el id REAL de Flickr para poder navegar al álbum correcto
  const albums = usingFlickr
    ? flickrAlbums!.map((fp) => ({
        id: fp.id,
        title: fp.title,
        photoCount: fp.photoCount,
        viewCount: fp.viewCount,
        image_url: fp.primaryPhotoUrl,
      }))
    : staticAlbums;

  const localPerPage = 3;
  const totalPages = usingFlickr
    ? flickrTotalPages
    : Math.ceil(staticAlbums.length / localPerPage);

  const visibleAlbums = usingFlickr
    ? albums
    : albums.slice((page - 1) * localPerPage, page * localPerPage);

  const prev = () => setPage((p) => Math.max(1, p - 1));
  const next = () => setPage((p) => Math.min(totalPages, p + 1));

  const touchStartX = { current: 0 };
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };
  const handleTouchEnd = (e: React.TouchEvent) => {
    const deltaX = e.changedTouches[0].clientX - touchStartX.current;
    if (deltaX < -50) next();
    if (deltaX > 50) prev();
  };

  // Link dinámico: cada álbum manda directo a SU propio detalle, sin mapas fijos
  const getAlbumLink = (album: any) =>
    `${basePath}/facilities/gallery/${album.id}`;

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
            {visibleAlbums.map((album: any) => (
              <AlbumCard
                key={album.id}
                album={album}
                link={getAlbumLink(album)}
              />
            ))}
          </div>

          {totalPages > 1 && (
            <div className="mt-8 flex items-center justify-center gap-4 sm:mt-10">
              <button
                onClick={prev}
                disabled={page === 1 || loading}
                className="rounded-full bg-white p-2 shadow disabled:opacity-30"
              >
                <ChevronLeft className="h-5 w-5 text-[#0097b2]" />
              </button>
              <span className="text-sm text-gray-500">
                {page} / {totalPages}
              </span>
              <button
                onClick={next}
                disabled={page === totalPages || loading}
                className="mb-12 rounded-full bg-white p-2 shadow disabled:opacity-30"
              >
                <ChevronRight className="h-5 w-5 text-[#0097b2]" />
              </button>
            </div>
          )}
        </div>

        {/* DESKTOP (lg) */}
        <div className="mb-20 hidden grid-cols-5 gap-6 lg:grid">
          {visibleAlbums.map((album: any) => (
            <AlbumCard
              key={album.id}
              album={album}
              link={getAlbumLink(album)}
            />
          ))}
        </div>

        {totalPages > 1 && (
          <div className="hidden lg:flex items-center justify-center gap-4 -mt-16 mb-16">
            <button
              onClick={prev}
              disabled={page === 1 || loading}
              className="rounded-full bg-white p-2 shadow disabled:opacity-30"
            >
              <ChevronLeft className="h-5 w-5 text-[#0097b2]" />
            </button>
            <span className="text-sm text-gray-500">
              {page} / {totalPages}
            </span>
            <button
              onClick={next}
              disabled={page == totalPages || loading}
              className="rounded-full bg-white p-2 shadow disabled:opacity-30"
            >
              <ChevronRight className="h-5 w-5 text-[#0097b2]" />
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
