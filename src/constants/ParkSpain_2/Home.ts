
export const HomeContent = {
  hero: {
    title: "Aquí se vive el movimiento",
    description: "Deporte, cultura y comunidad en un mismo espacio.",
    buttonText: "Descubre Parque España II",
    buttonLink: "/parque-espana-2",
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
    buttonLink: "/parque-espana-2/facilities/virtual-view",
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
      { text: "Parque España Puebla II", strong: true },
      { text: " es un club social, deportivo y cultural enfocado en la convivencia familiar, el bienestar y la recreación. Contamos con ", strong: false,},
      { text: "instalaciones deportivas, actividades culturales",strong: true,},
      { text: " y espacios diseñados para que personas de todas las edades disfruten de una comunidad activa, moderna y llena de tradición.",strong: false,},
    ],
  },





installations: {
  title: "Instalaciones pensadas para toda la familia",
  buttonText: "Ver instalaciones",
  buttonLink: "/parque-espana-2/facilities/virtual-view",
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
