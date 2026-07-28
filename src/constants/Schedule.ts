// constants/Schedule.ts
export const ScheduleContent = {
  title: "Horarios",
  columns: [
    {
      id: 1,
      label: "Martes a sábado",
      items: [
        {
          id: 1,
          time: "6:00 a.m.",
          description: "Apertura de instalaciones en general, vestidores, vapores y luces",
          
        },
        {
          id: 2,
          time: "8:30 p.m.",
          description: "Corte de vapor",
         
        },
        {
          id: 3,
          time: "9:00 p.m.",
          description: "Cierre general del parque, luces, agua, gimnasio, pádel y tenis",
         
        },
      ],
    },
    {
      id: 2,
      label: "Domingo",
      items: [
        {
          id: 1,
          time: "6:00 a.m.",
          description: "Apertura de instalaciones en general, vestidores, vapores y luces",
         
        },
        {
          id: 2,
          time: "7:30 p.m.",
          description: "Corte de vapor",
      
        },
        {
          id: 3,
          time: "8:00 p.m.",
          description: "Cierre general del parque, luces, agua, gimnasio, pádel y tenis",
     
        },
      ],
    },
  ],
};