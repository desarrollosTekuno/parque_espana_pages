// ActivitiesCalendar.tsx
import { useState } from "react";
import { ScheduleXCalendar, useCalendarApp } from "@schedule-x/react";
import { createViewMonthGrid } from "@schedule-x/calendar";
import { createEventsServicePlugin } from "@schedule-x/events-service";
import "@schedule-x/theme-default/dist/index.css";
import CardFlipHover from "../../CardFlipHover";


const events = [
  {
    id: "1",
    title: "Romería Cruz de Mayo",
    start: "2026-07-07",
    end: "2026-07-07",
    calendarId: "romeria",
  },
  {
    id: "2",
    title: "Curso de verano",
    start: "2026-07-15",
    end: "2026-07-15",
    calendarId: "curso",
  },
  {
    id: "3",
    title: "P.E abierto (horario domingo)",
    start: "2026-07-20",
    end: "2026-07-20",
    calendarId: "festivo",
  },
  {
    id: "4",
    title: "P.E abierto (horario domingo)",
    start: "2026-07-30",
    end: "2026-07-30",
    calendarId: "festivo",
  },
];

const calendars = {
  curso: {
    colorName: "curso",
    lightColors: {
      main: "#0097b2",
      container: "#e0f5f8",
      onContainer: "#004b56",
    },
  },
  romeria: {
    colorName: "romeria",
    lightColors: {
      main: "#d63384",
      container: "#fbe4ef",
      onContainer: "#6b1a42",
    },
  },
  festivo: {
    colorName: "festivo",
    lightColors: {
      main: "#f4b400",
      container: "#fdf1d6",
      onContainer: "#7a5a00",
    },
  },
};

const legend = [
  { id: "curso", label: "Curso de verano", color: "#0097b2" },
  { id: "romeria", label: "Romería", color: "#d63384" },
  { id: "festivo", label: "Días festivos", color: "#f4b400" },
];

// Mapa de colores por calendarId, para reutilizar en la lista de eventos
const colorById: Record<string, string> = {
  curso: "#0097b2",
  romeria: "#d63384",
  festivo: "#f4b400",
};

export default function ActivitiesCalendar() {
  const [selectedEvent, setSelectedEvent] = useState<{
    title: string;
    start: string;
  } | null>(null);

  const calendarApp = useCalendarApp({
    views: [createViewMonthGrid()],
    events,
    calendars,
    locale: "es-ES",
    defaultView: "month-grid",
    plugins: [createEventsServicePlugin()],
    callbacks: {
      onEventClick(calendarEvent) {
        setSelectedEvent({
          title: calendarEvent.title as string,
          start: calendarEvent.start as string,
        });
      },
    },
  });

  // Eventos ordenados por fecha, para la lista debajo del calendario en mobile
  const sortedEvents = [...events].sort(
    (a, b) => new Date(a.start).getTime() - new Date(b.start).getTime()
  );

  return (
    <div className="wrap-100 sm:wrap-80 lg:wrap-70">
      <div className="relative p-4 sm:p-6 lg:p-8 lg:mt-14 ">
        <p className="mb-8 text-[#3C3C3C] text-[22px] font-extrabold sm:font-extrabold  sm:text-[24px] lg:text-[34px] lg:font-extrabold lg:mb-15">
          Resumen mensual de actividades
        </p>

        <div className="h-[420px] sm:h-[520px] lg:h-[800px] w-full">
          <ScheduleXCalendar calendarApp={calendarApp} />
        </div>

    

        <div className="mt-4 flex flex-wrap gap-4 border-t border-gray-100 pt-4 text-[14px] sm:text-[14px] lg:text-[16px] lg:font-bold text-gray-700">
          {legend.map((item) => {
            const count = events.filter((e) => e.calendarId == item.id).length;
            return (
              <span key={item.id} className="flex items-center gap-1.5">
                <span
                  className="h-2 w-2 rounded-full"
                  style={{ backgroundColor: item.color }}
                />
                {count} {item.label}
              </span>
            );
          })}
        </div>

        {/* Lista de actividades, solo visible en mobile/tablet (oculta en lg) */}
        <div className="mt-6 flex flex-col gap-3 lg:hidden">
          {sortedEvents.map((event) => (
            <div
              key={event.id}
              className="flex items-start gap-3 rounded-xl border border-gray-100 bg-white p-3"
            >
              <span
                className="mt-1.5 h-2.5 w-2.5 shrink-0 rounded-full"
                style={{ backgroundColor: colorById[event.calendarId] }}
              />
              <div>
               
                <p className="text-[14px] font-semibold text-[#3C3C3C] sm:text-[15px]">
                  {event.title}
                </p>
              </div>
            </div>
          ))}
        </div>


    {/* Tarjetas que voltean con hover, debajo del calendario */}
      <div className="mt-15 -mx-0 sm:-mx-[10%] lg:-mx-[15%] wrap-80">
  <CardFlipHover />
</div>

     {selectedEvent && (
  <div
    className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 p-4"
    onClick={() => setSelectedEvent(null)}
  >
    <div
      className="w-full max-w-[300px] rounded-2xl bg-white p-5 shadow-lg sm:max-w-sm sm:p-6 lg:max-w-md lg:p-8"
      onClick={(e) => e.stopPropagation()}
    >
      <p className="text-[14px] text-gray-400 sm:text-[15px] lg:text-[16px]">
        {new Date(selectedEvent.start + "T00:00:00").toLocaleDateString("es-ES", {
          day: "numeric",
          month: "long",
          year: "numeric",
        })}
      </p>
      <h3 className="mt-1 text-[16px] font-bold text-[#3C3C3C] sm:text-[18px] lg:text-[20px]">
        {selectedEvent.title}
      </h3>
      <button
        onClick={() => setSelectedEvent(null)}
        className="mt-4 w-full rounded-lg bg-[#0097b2] px-4 py-2 text-[13px] font-semibold text-white sm:text-[14px] lg:py-2.5 lg:text-[15px]"
      >
        Cerrar
      </button>
    </div>
  </div>
)}
      </div>
    </div>
  );
}