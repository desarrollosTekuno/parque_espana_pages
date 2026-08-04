
export const HomeContent = {
  hero: {
    title: "Aquí se vive el movimiento",
    description: "Deporte, cultura y comunidad en un mismo espacio.",
    buttonText: "Descubre Parque España II",
    buttonLink: "/parque-espana-2",
    imageAlt:
      "Jugador de tenis y mujer con vestimenta tradicional en Parque España",
  },




  activities: {
    title: "Un espacio pensado para convivir y disfrutar",
    descriptionParts: [
      { text: "Parque España Puebla II", strong: true },
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
      name: "Jardines "
    },
  ],
  buttonText: "Ver instalaciones",
  buttonLink: "/facilities/virtual-view",
},

  


  experiencePark: {
   title: "Vive la experiencia Parque España II",
    description: "Disfruta instalaciones deportivas, actividades culturales y espacios diseñados para compartir momentos inolvidables en familia.",
    buttons: {
      activities: {
        label: "Conocer actividades",
        to: "/facilities/activities",
      },
      memberships: {
        label: "Membresías",
        to: "/memberships",
      },
    },
  },
};
