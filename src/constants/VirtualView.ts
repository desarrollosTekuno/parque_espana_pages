// constants/VirtualView.ts
export const VirtualViewContent = {
  hero: {
    title: "Explora nuestras instalaciones",
    description:
      "Recorre los espacios de Parque España Puebla y descubre las áreas deportivas, culturales y recreativas que forman parte de nuestra comunidad.",
    imageAlt: "Vista aérea de las instalaciones de Parque España",
    graphicImageAlt: "Elemento decorativo",
  },

 tourGallery: {
    tabs: [
      {
        id: "interior",
        label: "Interior",
        items: [
          { id: 1, name: "Recepción" },
          { id: 2, name: "Salón de banderas" },
          { id: 3, name: "Exposiciones" },
        ],
      },
      {
        id: "exterior",
        label: "Exterior",
        items: [
          { id: 1, name: "Pasillos central" },
          { id: 2, name: "Terraza" },
          { id: 3, name: "Jardín lateral " },
          { id: 4, name: "Jardín posterior" },
          { id: 5, name: "Titanic" },
          { id: 6, name: "Squash" },
        ],
      },
      {
        id: "servicios",
        label: "Servicios",
        items: [
          { id: 1, name: "Salón de actos" },
          { id: 2, name: "Salón de juegos" },
          { id: 3, name: "Cafetería" },
        ],
      },
      {
        id: "actividad-fisica",
        label: "Actividad física",
        items: [
          { id: 1, name: "Gimnasio" },
          { id: 2, name: "Tenis" },
          { id: 3, name: "Fútbol rápido" },
          { id: 4, name: "Cancha de baloncesto" },
          { id: 5, name: "Alberca Olímpica" },
        ],
      },
      {
        id: "estacionamiento",
        label: "Estacionamiento",
        items: [
          { id: 1, name: "Estacionamiento 1" },
          { id: 2, name: "Estacionamiento 2" },
        ],
      },
    ],
  },


  liveExperience: {
  title: "Vive la experiencia en persona",
  description:
    "Descubre todo lo que Parque España tiene para ofrecer y conoce los espacios donde cada día se construyen nuevas historias",
  columns: [
    ["Fútbol", "Tenis", "Cancha techada de vóleibol", "Cancha techada de baloncesto"],
    ["Frontón", "Cancha de pickleball", "5 Canchas de pádel", "2 Canchas de squash"],
    ["Alberca semiolímpica", "Chapoteadero", "Pista de 333 metros", "Gimnasio"],
    ["Ludoteca", "Cafetería y palapa", "Salones de usos múltiples"],
  ],
  buttons: {
    contact: { text: "Contáctanos", to: "/contacto" },
    activities: { text: "Ver actividades", to: "/actividades" },
  },
},

};