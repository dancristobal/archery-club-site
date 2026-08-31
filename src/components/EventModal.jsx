export default function EventModal({ event, onClose }) {
  if (!event) return null;
  const date = new Date(event.dateStart).toLocaleDateString('es-ES');

  return (
    <div className="fixed inset-0 z-30 flex items-center justify-center bg-black/40">
      <div className="max-w-md rounded-xl bg-white p-5 text-sm shadow-xl dark:bg-slate-900">
        <h2 className="text-lg font-semibold">{event.title}</h2>
        <p className="mt-1 text-xs text-slate-500 dark:text-slate-300">
          {date} · {event.time} · {event.location}
        </p>
        <p className="mt-3 text-sm text-slate-700 dark:text-slate-200">
          {event.description}
        </p>
        {event.imageUrl && (
          <img
            src={event.imageUrl}
            alt={event.title}
            className="mt-3 h-40 w-full rounded-lg object-cover"
          />
        )}
        <div className="mt-4 flex justify-end">
          <button
            onClick={onClose}
            className="rounded-full border border-slate-300 px-4 py-1.5 text-xs font-semibold hover:bg-slate-100 dark:border-slate-600 dark:hover:bg-slate-800"
          >
            Cerrar
          </button>
        </div>
      </div>
    </div>
  );
}
