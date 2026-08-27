const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;
const API_TOKEN = import.meta.env.VITE_API_TOKEN;


export const CLUB_IDS = {
  PARQUE_1: 1,
  PARQUE_2: 2,
};




// Variable en memoria para saber si la página acaba de ser recargada (F5) en esta pestaña
let isPageRefreshed = false;

// Verificamos si ya existía una sesión activa en esta pestaña
if (typeof window !== 'undefined') {
  const sessionActiveKey = 'app_session_active';
  if (!sessionStorage.getItem(sessionActiveKey)) {
    // Si no existe esta llave, significa que es una recarga nueva (F5) o se abrió la pestaña por primera vez
    localStorage.clear(); // Limpiamos toda la caché anterior de golpe
    sessionStorage.setItem(sessionActiveKey, 'true');
  }
}

// HELPER DE CACHÉ INTELIGENTE (Respeta navegación, se limpia con F5)
async function fetchWithCache<T>(url: string, init?: RequestInit, ttlMinutes = 30): Promise<T> {
  const cacheKey = `cache_${url}`;
  const cached = localStorage.getItem(cacheKey); // Usamos localStorage para que persista entre navegaciones de rutas

  if (cached) {
    try {
      const { data, expiry } = JSON.parse(cached);
      if (Date.now() < expiry) {
        return data as T; // ¡Navega súper rápido entre secciones sin ir a la API!
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

















////////////////////////////////////
export interface CarouselItem {
   id: number | string;
  description: string;
  image_url: string;
}

export async function getClubCarousel(clubId: number): Promise<CarouselItem[]> {
  const response = await fetch(`${API_BASE_URL}/clubs/${clubId}/website/carousel`, {
    headers: {
      Authorization: `Bearer ${API_TOKEN}`,
      Accept: "application/json",
    },
  });

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


export async function getClubHomeCards(clubId: number): Promise<HomeCardItem[]> {
  const response = await fetch(`${API_BASE_URL}/clubs/${clubId}/website/home-cards`, {
    headers: {
      Authorization: `Bearer ${API_TOKEN}`,
      Accept: "application/json",
    },
  });

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

export async function getClubVirtualTour(clubId: number): Promise<VirtualTourCategory[]> {
  const response = await fetch(`${API_BASE_URL}/clubs/${clubId}/website/virtual-tour`, {
    headers: {
      Authorization: `Bearer ${API_TOKEN}`,
      Accept: "application/json",
    },
  });

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
  const response = await fetch(`${API_BASE_URL}/clubs/${clubId}/website/events`, {
    headers: {
      Authorization: `Bearer ${API_TOKEN}`,
      Accept: "application/json",
    },
  });

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

export async function submitClubContact(clubId: number, payload: ContactPayload) {
  const response = await fetch(`${API_BASE_URL}/clubs/${clubId}/website/contact`, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${API_TOKEN}`,
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify(payload),
  });

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

export async function getClubContactInfo(clubId: number): Promise<ClubContactInfo> {
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

export async function getClubMembershipPrices(clubId: number): Promise<MembershipPrice[]> {
  const response = await fetch(`${API_BASE_URL}/clubs/${clubId}/website/membership-prices`, {
    headers: {
      Authorization: `Bearer ${API_TOKEN}`,
      Accept: "application/json",
    },
  });

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