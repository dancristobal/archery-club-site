import ViewWrapper from "../components/ViewWrapper";
import { useEffect, useState } from "react";
import eventsData from "../data/events.json";
import EventCard from "../components/EventCard";
import EventModal from "../components/EventModal";

export default function Events() {
  const [events, setEvents] = useState([]);
  const [selected, setSelected] = useState(null);

  useEffect(() => {
    const today = new Date();
    const upcoming = eventsData.filter((e) => {
      const d = new Date(e.dateStart);
      return d >= new Date(today.toDateString());
    });
    setEvents(upcoming);
  }, []);

  return (
    <ViewWrapper>
      <section className="space-y-4">
        <h1 className="text-xl font-semibold">Próximos eventos</h1>
        <p className="text-sm text-slate-700 dark:text-slate-200">
          Competiciones, prácticas y reuniones del club.
        </p>

        <div className="mt-3 space-y-3">
          {events.length === 0 && (
            <p className="text-sm text-slate-500">No hay eventos próximos por ahora.</p>
          )}
          {events.map((event) => (
            <EventCard key={event.id} event={event} onDetails={setSelected} />
          ))}
        </div>

        <EventModal event={selected} onClose={() => setSelected(null)} />
      </section>
    </ViewWrapper>
  );
}
