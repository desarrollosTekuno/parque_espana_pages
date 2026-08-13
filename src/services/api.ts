const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;
const API_TOKEN = import.meta.env.VITE_API_TOKEN;

export const CLUB_IDS = {
  PARQUE_1: 1,
  PARQUE_2: 2,
};

// Forma real de cada imagen que devuelve la API
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
  return json.data; // <- aquí sacamos el array real que viene dentro de "data"
}



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