const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;
const API_TOKEN = import.meta.env.VITE_API_TOKEN;

const FLICKR_BASE_URL = import.meta.env.VITE_FLICKR_BASE_URL;
const FLICKR_API_KEY = import.meta.env.VITE_FLICKR_API_KEY;
const FLICKR_USER_ID = import.meta.env.VITE_FLICKR_USER_ID;

const FLICKR_API_KEY_2 =
  import.meta.env.VITE_FLICKR_API_KEY_2 || FLICKR_API_KEY;
const FLICKR_USER_ID_2 =
  import.meta.env.VITE_FLICKR_USER_ID_2 || FLICKR_USER_ID;

export const CLUB_IDS = {
  PARQUE_1: 1,
  PARQUE_2: 2,
};

// Variable en memoria para saber si la página acaba de ser recargada (F5) en esta pestaña
let isPageRefreshed = false;

if (typeof window !== "undefined") {
  const sessionActiveKey = "app_session_active";
  if (!sessionStorage.getItem(sessionActiveKey)) {
    localStorage.clear();
    sessionStorage.setItem(sessionActiveKey, "true");
  }
}

// HELPER DE CACHÉ INTELIGENTE (Respeta navegación, se limpia con F5)
async function fetchWithCache<T>(
  url: string,
  init?: RequestInit,
  ttlMinutes = 30,
): Promise<T> {
  const cacheKey = `cache_${url}`;
  const cached = localStorage.getItem(cacheKey); // Usamos localStorage para que persista entre navegaciones de rutas

  if (cached) {
    try {
      const { data, expiry } = JSON.parse(cached);
      if (Date.now() < expiry) {
        return data as T;
      }
    } catch {
      localStorage.removeItem(cacheKey);
    }
  }

  // Si no hay caché o expiró, vamos a la API
  const response = await fetch(url, init);

  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }

  const json = await response.json();
  const dataToCache = json.data !== undefined ? json.data : json;

  const expiry = Date.now() + ttlMinutes * 60 * 1000;
  localStorage.setItem(cacheKey, JSON.stringify({ data: dataToCache, expiry }));

  return dataToCache as T;
}

// FLICKR - Álbumes
export interface FlickrPhotoset {
  id: string;
  title: string;
  photoCount: number;
  viewCount: number;
  primaryPhotoUrl: string | null;
  dateTaken: string | null;
}

export interface FlickrPhotosetsResponse {
  photosets: FlickrPhotoset[];
  page: number;
  totalPages: number;
  total: number;
}

interface FlickrPhotosetsRaw {
  photosets: {
    page: number;
    pages: number;
    total: number;
    photoset: Array<{
      id: string;
      title: { _content: string };
      photos: number;
      primary_photo_extras?: {
        url_m?: string;
        datetaken?: string;
      };
    }>;
  };
  stat: string;
}

interface FlickrPhotosetInfoRaw {
  photoset: {
    id: string;
    count_views: string;
  };
  stat: string;
}

async function getFlickrPhotosetViews(
  photosetId: string,
  park: 1 | 2 = 1,
): Promise<number> {
  const apiKey = park == 2 ? FLICKR_API_KEY_2 : FLICKR_API_KEY;
  const userId = park == 2 ? FLICKR_USER_ID_2 : FLICKR_USER_ID;

  const params = new URLSearchParams({
    method: "flickr.photosets.getInfo",
    api_key: apiKey,
    photoset_id: photosetId,
    user_id: userId,
    format: "json",
    nojsoncallback: "1",
  });

  const url = `${FLICKR_BASE_URL}?${params.toString()}`;

  try {
    const data = await fetchWithCache<FlickrPhotosetInfoRaw>(
      url,
      undefined,
      120,
    );
    if (data.stat !== "ok") return 0;
    return Number(data.photoset.count_views) || 0;
  } catch {
    return 0; // si falla una sola vista, no tumbamos toda la galería
  }
}

export async function getFlickrPhotosets(
  page = 1,
  perPage = 15,
  park: 1 | 2 = 1,
): Promise<FlickrPhotosetsResponse> {
  const apiKey = park == 2 ? FLICKR_API_KEY_2 : FLICKR_API_KEY;
  const userId = park == 2 ? FLICKR_USER_ID_2 : FLICKR_USER_ID;

  const params = new URLSearchParams({
    method: "flickr.photosets.getList",
    api_key: apiKey,
    user_id: userId,
    format: "json",
    nojsoncallback: "1",
    primary_photo_extras: "url_m,date_upload,date_taken",
    page: String(page),
    per_page: String(perPage),
  });

  const url = `${FLICKR_BASE_URL}?${params.toString()}`;

  const data = await fetchWithCache<FlickrPhotosetsRaw>(url, undefined, 60);

  if (data.stat !== "ok") {
    throw new Error("No se pudieron cargar los álbumes de Flickr");
  }

  const viewsList = await Promise.all(
    data.photosets.photoset.map((p) => getFlickrPhotosetViews(p.id, park)),
  );

  return {
    photosets: data.photosets.photoset.map((p, i) => ({
      id: p.id,
      title: p.title._content,
      photoCount: p.photos,
      viewCount: viewsList[i],
      primaryPhotoUrl: p.primary_photo_extras?.url_m ?? null,
      dateTaken: p.primary_photo_extras?.datetaken ?? null,
    })),
    page: data.photosets.page,
    totalPages: data.photosets.pages,
    total: data.photosets.total,
  };
}

// FLICKR - Fotos de un álbum específico
export interface FlickrPhoto {
  id: string;
  title: string;
  url: string;
  urlLarge: string;
}

export interface FlickrPhotosetPhotosResponse {
  albumTitle: string;
  photos: FlickrPhoto[];
  page: number;
  totalPages: number;
  total: number;
}

interface FlickrPhotosetPhotosRaw {
  photoset: {
    id: string;
    title: string;
    page: string;
    pages: number;
    perpage: string;
    total: string;
    photo: Array<{
      id: string;
      title: string;
      url_m?: string;
      url_l?: string;
    }>;
  };
  stat: string;
}

export async function getFlickrPhotosetPhotos(
  photosetId: string,
  page = 1,
  perPage = 16,
  park: 1 | 2 = 1,
): Promise<FlickrPhotosetPhotosResponse> {
  const apiKey = park == 2 ? FLICKR_API_KEY_2 : FLICKR_API_KEY;
  const userId = park == 2 ? FLICKR_USER_ID_2 : FLICKR_USER_ID;

  const params = new URLSearchParams({
    method: "flickr.photosets.getPhotos",
    api_key: apiKey,
    photoset_id: photosetId,
    user_id: userId,
    format: "json",
    nojsoncallback: "1",
    extras: "url_m,url_l",
    privacy_filter: "1",
    page: String(page),
    per_page: String(perPage),
    media: "photos",
  });

  const url = `${FLICKR_BASE_URL}?${params.toString()}`;

  const data = await fetchWithCache<FlickrPhotosetPhotosRaw>(
    url,
    undefined,
    60,
  );

  if (data.stat !== "ok") {
    throw new Error("No se pudo cargar el álbum");
  }

  return {
    albumTitle: data.photoset.title,
    photos: data.photoset.photo.map((p) => ({
      id: p.id,
      title: p.title,
      url: p.url_m ?? p.url_l ?? "",
      urlLarge: p.url_l ?? p.url_m ?? "",
    })),
    page: Number(data.photoset.page),
    totalPages: data.photoset.pages,
    total: Number(data.photoset.total),
  };
}

////////////////////////////////////
export interface CarouselItem {
  id: number | string;
  description: string;
  image_url: string;
}

export async function getClubCarousel(clubId: number): Promise<CarouselItem[]> {
  const response = await fetch(
    `${API_BASE_URL}/clubs/${clubId}/website/carousel`,
    {
      headers: {
        Authorization: `Bearer ${API_TOKEN}`,
        Accept: "application/json",
      },
    },
  );

  if (!response.ok) {
    throw new Error("No se pudo cargar el carrusel");
  }

  const json = await response.json();
  return json.data;
}

//////////////////////////////
export interface HomeCardItem {
  id: number | string;
  category: string;
  image_url: string;
}

export async function getClubHomeCards(
  clubId: number,
): Promise<HomeCardItem[]> {
  const response = await fetch(
    `${API_BASE_URL}/clubs/${clubId}/website/home-cards`,
    {
      headers: {
        Authorization: `Bearer ${API_TOKEN}`,
        Accept: "application/json",
      },
    },
  );

  if (!response.ok) {
    throw new Error("No se pudieron cargar las instalaciones");
  }

  const json = await response.json();
  return json.data;
}

//////////////////////////////////////////////////////////////////
export interface VirtualTourImage {
  id: number | string | null;
  title: string;
  image_url: string | null;
}

export interface VirtualTourCategory {
  id: number;
  name: string;
  images: VirtualTourImage[];
}

export async function getClubVirtualTour(
  clubId: number,
): Promise<VirtualTourCategory[]> {
  const response = await fetch(
    `${API_BASE_URL}/clubs/${clubId}/website/virtual-tour`,
    {
      headers: {
        Authorization: `Bearer ${API_TOKEN}`,
        Accept: "application/json",
      },
    },
  );

  if (!response.ok) {
    throw new Error("No se pudo cargar el tour virtual");
  }

  const json = await response.json();
  return json.data;
}

///////////////////////////////////////////////////////

export interface ClubEvent {
  id: string;
  title: string;
  start: string;
  end: string;
  calendarId: string;
}

export async function getClubEvents(clubId: number): Promise<ClubEvent[]> {
  const response = await fetch(
    `${API_BASE_URL}/clubs/${clubId}/website/events`,
    {
      headers: {
        Authorization: `Bearer ${API_TOKEN}`,
        Accept: "application/json",
      },
    },
  );

  if (!response.ok) {
    throw new Error("No se pudieron cargar los eventos");
  }

  const json = await response.json();
  return json.data;
}

//////////////////////////////////////////////////////////
export interface ContactPayload {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export async function submitClubContact(
  clubId: number,
  payload: ContactPayload,
) {
  const response = await fetch(
    `${API_BASE_URL}/clubs/${clubId}/website/contact`,
    {
      method: "POST",
      headers: {
        Authorization: `Bearer ${API_TOKEN}`,
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(payload),
    },
  );

  if (!response.ok) {
    throw new Error("No se pudo enviar el mensaje");
  }

  return response.json();
}

////////////////////////////////////////////////////

export interface ClubContactInfo {
  club_name: string;
  email: string | null;
  phone: string | null;
  website: string | null;
  address: string | null;
  logo_url: string | null;
  map_image_url: string | null;
  social_whatsapp: string | null;
  social_instagram: string | null;
  social_facebook: string | null;
  social_twitter: string | null;
  social_youtube: string | null;
  social_threads: string | null;
}

export async function getClubContactInfo(
  clubId: number,
): Promise<ClubContactInfo> {
  const response = await fetch(`${API_BASE_URL}/clubs/${clubId}/contact-info`, {
    headers: {
      Authorization: `Bearer ${API_TOKEN}`,
      Accept: "application/json",
    },
  });

  if (!response.ok) {
    throw new Error("No se pudo cargar la información de contacto");
  }

  const json = await response.json();
  return json.data;
}

/////////////////////////////////////////////////////

export interface MembershipPrice {
  id: number;
  code: string;
  name: string;
  monthly_payment: number;
  inscription_payment: number;
  year: number;
}

export async function getClubMembershipPrices(
  clubId: number,
): Promise<MembershipPrice[]> {
  const response = await fetch(
    `${API_BASE_URL}/clubs/${clubId}/website/membership-prices`,
    {
      headers: {
        Authorization: `Bearer ${API_TOKEN}`,
        Accept: "application/json",
      },
    },
  );

  if (!response.ok) {
    throw new Error("No se pudieron cargar los precios de membresías");
  }

  const json = await response.json();
  return json.data;
}

// Da formato $X,XXX.00 a partir de un número
export function formatMXN(amount: number): string {
  return new Intl.NumberFormat("es-MX", {
    style: "currency",
    currency: "MXN",
  }).format(amount);
}
