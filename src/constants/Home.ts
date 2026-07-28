
export const HomeContent = {
  hero: {
    title: "Aquí se vive el movimiento",
    description: "Deporte, cultura y comunidad en un mismo espacio.",
    buttonText: "Descubre Parque España I",
    buttonLink: "/parque-espana-1",
    imageAlt:
      "Jugador de tenis y mujer con vestimenta tradicional en Parque España",
  },

  stats: {
    title: "Tradición, deporte y comunidad en Puebla",
    descriptionParts: [
      { text: "Un espacio donde ", strong: false },
      { text: "familias, cultura y bienestar", strong: true },
      { text: " se unen para crear ", strong: false },
      { text: "experiencias memorables", strong: true },
      { text: " para todas las generaciones.", strong: false },
    ],
    imageAlt: "Elemento gráfico",
    buttonText: "Conoce nuestras instalaciones",
    buttonLink: "/instalaciones",
    counters: [
      { value: 6500, suffix: "", label: "Usuarios activos" },
      { value: 60, suffix: "", label: "Años de historia" },
      { value: 15, suffix: "", label: "Disciplinas deportivas" },
      { value: 1, suffix: "M", label: "de experiencias compartidas" },
    ],
  },


  activities: {
    title: "Un espacio pensado para convivir y disfrutar",
    descriptionParts: [
      { text: "Parque España Puebla", strong: true },
      { text: " es un club social, deportivo y cultural enfocado en la convivencia familiar, el bienestar y la recreación. Contamos con ", strong: false,},
      { text: "instalaciones deportivas, actividades culturales",strong: true,},
      { text: " y espacios diseñados para que personas de todas las edades disfruten de una comunidad activa, moderna y llena de tradición.",strong: false,},
    ],

    cards: [
      {
        id: 1,
        name: "Romería",
      },
      {
        id: 2,
        name: "Natación",
      },
      {
        id: 3,
        name: "Pádel",
      },
    ],
  },


  experience: {
  title: "Vive una experiencia integral",
  items: [
    {
      id: 1,
      title: "Deporte",
      description: "actividades para un estilo de vida activo",
    },
    {
      id: 2,
      title: "Comunidad",
      description: "Espacios para convivir y fortalecer vínculos",
    },
    {
      id: 3,
      title: "Bienestar",
      description: "Ambientes seguros y cómodos para toda la familia",
    },
    {
      id: 4,
      title: "Cultura y tradición",
      description: "Eventos y actividades que preservan nuestras raíces",
    },
  ],
},



installations: {
  title: "Instalaciones pensadas para toda la familia",
  cards: [
    {
      id: 1,
      name: "Cafetería"
    },
    {
      id: 2,
      name: "Gimnasio"
    },
    {
      id: 3,
      name: "Alberca semiólimpica"
    },
    {
      id: 4,
      name: "Tenis"
    },
    {
      id: 5,
      name: "Jardines"
    },
  ],
  buttonText: "Ver instalaciones",
  buttonLink: "/instalaciones",
},

  
app: {
  title: "Tu parque desde cualquier lugar",
  description: "Consulta información, realiza pagos, reserva amenidades y accede a los servicios del club desde la app móvil",
  googlePlayLabel: "Google Play",
  googlePlayAlt: "Google Play",
  appStoreLabel: "App Store",
  appStoreAlt: "App Store",
},



  experiencePark: {
   title: "Vive la experiencia Parque España",
    description: "Disfruta instalaciones deportivas, actividades culturales y espacios diseñados para compartir momentos inolvidables en familia.",
    buttons: {
      activities: {
        label: "Conocer actividades",
        to: "/actividades",
      },
      memberships: {
        label: "Membresías",
        to: "/membresias",
      },
    },
  },
};
