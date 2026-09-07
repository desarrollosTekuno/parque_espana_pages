import { useEffect, useState } from "react";
import { useParams, useLocation, Link } from "react-router-dom";
import { ChevronLeft, ChevronRight } from "lucide-react";
import {
  getFlickrPhotosetPhotos,
  type FlickrPhoto,
} from "../../../services/api";

// Lightbox y sus plugins
import Lightbox from "yet-another-react-lightbox";
import Zoom from "yet-another-react-lightbox/plugins/zoom";
import Thumbnails from "yet-another-react-lightbox/plugins/thumbnails";
import Download from "yet-another-react-lightbox/plugins/download";
import Counter from "yet-another-react-lightbox/plugins/counter";
import "yet-another-react-lightbox/styles.css";
import "yet-another-react-lightbox/plugins/thumbnails.css";
import "yet-another-react-lightbox/plugins/counter.css";

const PHOTOS_PER_PAGE = 16;

// Placeholder gris pulsante mientras carga cada foto
function PhotoSkeleton() {
  return <div className="aspect-square animate-pulse rounded-xl bg-gray-300" />;
}

export default function AlbumDetail() {
  const { photosetId } = useParams<{ photosetId: string }>();
  const location = useLocation();
  const isParque2 = location.pathname.startsWith("/parque-espana-2");
  const galleryPath = isParque2
    ? "/parque-espana-2/facilities/gallery"
    : "/parque-espana-1/facilities/gallery";

  const [page, setPage] = useState(1);
  const [albumTitle, setAlbumTitle] = useState("");
  const [photos, setPhotos] = useState<FlickrPhoto[]>([]);
  const [totalPages, setTotalPages] = useState(1);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  // Índice de la foto abierta en el lightbox (null = cerrado)
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  useEffect(() => {
    if (!photosetId) return;

    let cancelled = false;
    setLoading(true);

      getFlickrPhotosetPhotos(photosetId, page, PHOTOS_PER_PAGE, isParque2 ? 2 : 1)
      .then((res) => {
        if (cancelled) return;
        setAlbumTitle(res.albumTitle);
        setPhotos(res.photos);
        setTotalPages(res.totalPages);
        setError(false);
      })
      .catch((err) => {
        console.error("Error cargando álbum:", err);
        if (!cancelled) setError(true);
      })
      .finally(() => {
        if (!cancelled) setLoading(false);
      });

    return () => {
      cancelled = true;
    };
  }, [photosetId, page]);

  const prev = () => setPage((p) => Math.max(1, p - 1));
  const next = () => setPage((p) => Math.min(totalPages, p + 1));

  const openLightbox = (index: number) => setLightboxIndex(index);

  // La librería necesita este formato: [{ src, download }, ...]
  const slides = photos.map((photo) => ({
    src: photo.urlLarge,
    alt: photo.title,
    download: photo.urlLarge,
  }));

  if (error) {
    return (
      <div className="wrap-90 mt-10 text-center text-gray-500">
        No se pudo cargar este álbum.
      </div>
    );
  }

  return (
    <div className="wrap-90 sm:wrap-80 lg:wrap-80 mt-10 sm:mt-14 lg:mt-20">
      <Link
        to={galleryPath}
        className="mb-6 inline-flex items-center gap-1 text-sm text-[#0097b2] hover:underline"
      >
        <ChevronLeft className="h-4 w-4" />
        Volver a la galería
      </Link>

      {loading ? (
        <div className="mb-2 h-8 w-64 animate-pulse rounded bg-gray-300" />
      ) : (
        <h1 className="mb-2 text-2xl font-bold sm:text-3xl">{albumTitle}</h1>
      )}

      <p className="mb-8 text-sm text-gray-500">
        {loading ? "Cargando..." : `Página ${page} de ${totalPages}`}
      </p>

      <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
        {loading
          ? Array.from({ length: PHOTOS_PER_PAGE }).map((_, i) => (
              <PhotoSkeleton key={i} />
            ))
          : photos.map((photo, index) => (
              <button
                key={photo.id}
                onClick={() => openLightbox(index)}
                className="aspect-square overflow-hidden rounded-xl bg-gray-200"
              >
                <img
                  src={photo.url}
                  alt={photo.title}
                  loading="lazy"
                  className="h-full w-full object-cover transition hover:scale-105"
                />
              </button>
            ))}
      </div>

      {!loading && totalPages > 1 && (
        <div className="mt-10 mb-16 flex items-center justify-center gap-4">
          <button
            onClick={prev}
            disabled={page == 1}
            className="rounded-full bg-white p-2 shadow disabled:opacity-30"
          >
            <ChevronLeft className="h-5 w-5 text-[#0097b2]" />
          </button>
          <span className="text-sm text-gray-500">
            {page} / {totalPages}
          </span>
          <button
            onClick={next}
            disabled={page == totalPages}
            className="rounded-full bg-white p-2 shadow disabled:opacity-30"
          >
            <ChevronRight className="h-5 w-5 text-[#0097b2]" />
          </button>
        </div>
      )}

      {/* LIGHTBOX con zoom, miniaturas, descarga y contador */}
      <Lightbox
        open={lightboxIndex !== null}
        close={() => setLightboxIndex(null)}
        index={lightboxIndex ?? 0}
        slides={slides}
        plugins={[Zoom, Thumbnails, Download, Counter]}
        counter={{ container: { style: { top: "unset", bottom: 0 } } }}
      />
    </div>
  );
}
