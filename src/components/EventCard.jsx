export default function EventCard({ event, onDetails }) {
  const date = new Date(event.dateStart);
  const day = date.getDate();
  const month = date.toLocaleString('es-ES', { month: 'short' });

  return (
    <article className="flex gap-4 rounded-lg border border-slate-200 bg-white p-4 text-sm shadow-sm dark:border-slate-700 dark:bg-slate-800">
      <div className="flex w-16 flex-col items-center justify-center rounded-lg bg-slate-900 text-white">
        <span className="text-xl font-bold">{day}</span>
        <span className="text-xs uppercase tracking-wide">{month}</span>
      </div>
      <div className="flex-1">
        <h3 className="text-sm font-semibold">{event.title}</h3>
        <p className="mt-1 text-xs text-slate-500 dark:text-slate-300">
          {event.time} · {event.location}
        </p>
        <p className="mt-2 text-sm text-slate-700 dark:text-slate-200">
          {event.description}
        </p>
        <button
          onClick={() => onDetails(event)}
          className="mt-3 rounded-full bg-primary px-4 py-1.5 text-xs font-semibold text-white hover:bg-primary-dark"
        >
          Detalles
        </button>
      </div>
    </article>
  );
}
