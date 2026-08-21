// ActivitiesCalendar.tsx
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { ScheduleXCalendar, useCalendarApp } from "@schedule-x/react";
import { createViewMonthGrid } from "@schedule-x/calendar";
import { createEventsServicePlugin } from "@schedule-x/events-service";
import "@schedule-x/theme-default/dist/index.css";
import { Loader2 } from "lucide-react";
import CardFlipHover from "../../CardFlipHover";
import { getClubEvents, CLUB_IDS, type ClubEvent } from "../../../services/api";

const calendars = {
  summer_course: {
    colorName: "summer_course",
    lightColors: {
      main: "#0097b2",
      container: "#e0f5f8",
      onContainer: "#004b56",
    },
  },
  pilgrimage: {
    colorName: "pilgrimage",
    lightColors: {
      main: "#d63384",
      container: "#fbe4ef",
      onContainer: "#6b1a42",
    },
  },
  holidays: {
    colorName: "holidays",
    lightColors: {
      main: "#f4b400",
      container: "#fdf1d6",
      onContainer: "#7a5a00",
    },
  },
};

const legend = [
  { id: "summer_course", label: "Curso de verano", color: "#0097b2" },
  { id: "pilgrimage", label: "Romería", color: "#d63384" },
  { id: "holidays", label: "Días festivos", color: "#f4b400" },
];

const colorById: Record<string, string> = {
  summer_course: "#0097b2",
  pilgrimage: "#d63384",
  holidays: "#f4b400",
};

function parseDateOnly(dateStr: string) {
  const cleanDate = dateStr.slice(0, 10);
  return new Date(cleanDate + "T00:00:00");
}

function getCurrentMonthRange() {
  const now = new Date();
  const start = new Date(now.getFullYear(), now.getMonth(), 1);
  const end = new Date(now.getFullYear(), now.getMonth() + 1, 0);
  const toISO = (d: Date) => d.toISOString().slice(0, 10);
  return { start: toISO(start), end: toISO(end) };
}

interface ActivitiesCalendarViewProps {
  events: ClubEvent[];
}

function ActivitiesCalendarView({ events }: ActivitiesCalendarViewProps) {
  const [selectedEvent, setSelectedEvent] = useState<{
    title: string;
    start: string;
    end: string;
  } | null>(null);

  const [visibleRange, setVisibleRange] = useState<{ start: string; end: string }>(
    getCurrentMonthRange()
  );

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
          end: calendarEvent.end as string,
        });
      },
      onRangeUpdate(range) {
        setVisibleRange({ start: range.start, end: range.end });
      },
    },
  });

  const today = new Date();
  today.setHours(0, 0, 0, 0);

  const eventsInView = events.filter((e) => {
    const eventEndDate = parseDateOnly(e.end);
    if (eventEndDate < today) return false;

    const rangeStart = new Date(visibleRange.start);
    const rangeEnd = new Date(visibleRange.end);
    const eventStartDate = parseDateOnly(e.start);

    return eventStartDate <= rangeEnd && eventEndDate >= rangeStart;
  });

  const sortedEvents = [...eventsInView].sort(
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
            const count = eventsInView.filter((e) => e.calendarId == item.id).length;
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
                {selectedEvent.start === selectedEvent.end
                  ? parseDateOnly(selectedEvent.start).toLocaleDateString("es-ES", {
                      day: "numeric",
                      month: "long",
                      year: "numeric",
                    })
                  : `Del ${parseDateOnly(selectedEvent.start).toLocaleDateString("es-ES", {
                      day: "numeric",
                      month: "long",
                    })} al ${parseDateOnly(selectedEvent.end).toLocaleDateString("es-ES", {
                      day: "numeric",
                      month: "long",
                      year: "numeric",
                    })}`}
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

export default function ActivitiesCalendar() {
  const location = useLocation();
  const isParque2 = location.pathname.startsWith("/parque-espana-2");
  const clubId = isParque2 ? CLUB_IDS.PARQUE_2 : CLUB_IDS.PARQUE_1;

  const [events, setEvents] = useState<ClubEvent[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    getClubEvents(clubId)
      .then((data) => setEvents(data))
      .catch((err) => console.error("Error cargando eventos:", err))
      .finally(() => setLoading(false));
  }, [clubId]);

  if (loading) {
    const weekDays = ["LUN", "MAR", "MIÉ", "JUE", "VIE", "SÁB", "DOM"];
    const skeletonCells = Array.from({ length: 35 }, (_, i) => i);

    return (
      <div className="wrap-100 sm:wrap-80 lg:wrap-70">
        <div className="relative p-4 sm:p-6 lg:p-8 lg:mt-14">
          <p className="mb-8 text-[#3C3C3C] text-[22px] font-extrabold sm:font-extrabold sm:text-[24px] lg:text-[34px] lg:font-extrabold lg:mb-15">
            Resumen mensual de actividades
          </p>

          <div className="relative w-full rounded-2xl border border-gray-100 overflow-hidden">
            <div className="grid grid-cols-7 border-b border-gray-100 bg-gray-50">
              {weekDays.map((day) => (
                <div key={day} className="py-3 text-center text-[12px] font-semibold text-gray-300 sm:text-[13px]">
                  {day}
                </div>
              ))}
            </div>

            <div className="grid grid-cols-7">
              {skeletonCells.map((i) => (
                <div
                  key={i}
                  className="flex h-16 items-start justify-start border-b border-r border-gray-50 p-2 sm:h-20 lg:h-24"
                >
                  <span className="h-3 w-4 rounded bg-gray-100 animate-pulse" />
                </div>
              ))}
            </div>

            <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-white/60">
              <div className="flex items-center gap-2 rounded-full border border-gray-200 bg-white px-4 py-2 shadow-md">
                <Loader2 className="h-4 w-4 animate-spin text-[#0097b2]" />
                <span className="text-[13px] font-semibold text-[#3C3C3C] sm:text-[14px]">
                  Cargando calendario...
                </span>
              </div>
            </div>
          </div>

          <div className="mt-4 flex flex-wrap gap-4 border-t border-gray-100 pt-4">
            {[0, 1, 2].map((i) => (
              <span key={i} className="h-4 w-28 rounded bg-gray-100 animate-pulse" />
            ))}
          </div>
        </div>
      </div>
    );
  }

  return <ActivitiesCalendarView events={events} />;
}