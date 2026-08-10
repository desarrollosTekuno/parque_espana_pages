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
        id: "canchas",
        label: "Canchas",
        items: [
          { id: 1, name: "Canchas de tenis" },
          { id: 2, name: "Frontón" },
          { id: 3, name: "Tenis" },
          { id: 4, name: "Padel" },
          { id: 5, name: "Fútbol" },
          { id: 6, name: "Polideportivo" },
    
        ],
      },
      {
        id: "interior",
        label: "Interior",
       
        items: [
          { id: 1, name: "Lobby" },
          { id: 2, name: "Trofeos" },
          { id: 3, name: "Vestidores" },
          { id: 4, name: "Auditorio" },
          { id: 5, name: "Billar" },
        ],
      },
      {
        id: "exterior",
        label: "Exterior",
        items: [
          { id: 1, name: "Albercas" },
          { id: 2, name: "Pista" },
          { id: 3, name: "Jardines" },
          { id: 4, name: "Juegos" },
        ],
        
      },
      {

        id: "salones",
        label: "Salones",
        items: [
          { id: 1, name: "Salones de pelotas" },
          { id: 2, name: "Salones de spin" },
          { id: 3, name: "Salones grandes" },
          { id: 4, name: "Salones de artes marciales" },
          { id: 5, name: "Salones de ballet" },
          { id: 6, name: "Salones de box" },
        ]
  
      },
     
    ],
  },

  

  liveExperience: {
  title: "Vive la experiencia en persona",
  description:
    "Descubre todo lo que Parque España II tiene para ofrecer y conoce los espacios donde cada día se construyen nuevas historias",
  columns: [
    ["Cancha fútbol 11", "Cancha fútbol 6", "8 Canchas de tenis", "6 canchas pádel"],
    ["4 canchas de frontón", "3 Canchas de squash", "Canchas de pickleball ", "Pista de 550 metros"],
    ["Alberca semiolímpica", "3 Chapoteaderos", "Polideportivo", "Gimnasio"],
    ["Ludoteca", "8 salones de usos múltiples", "Sala de lactancia"],
  ],
  buttons: {
    contact: { text: "Contáctanos", to: "/contact" },
    activities: { text: "Ver actividades", to: "/facilities/activities" },
    
  },
},

};