import { useState } from 'react';

const levelLabel = {
  iniciacion: 'Iniciación',
  intermedio: 'Intermedio',
  avanzado: 'Avanzado',
};

export default function CourseCard({ course }) {
  const [open, setOpen] = useState(false);

  return (
    <article className="rounded-lg border border-slate-200 bg-white text-sm shadow-sm dark:border-slate-700 dark:bg-slate-800">
      {course.imageUrl && (
        <img
          src={course.imageUrl}
          alt={course.name}
          className="h-40 w-full rounded-t-lg object-cover"
        />
      )}
      <div className="p-4">
        <div className="flex items-center justify-between">
          <h3 className="text-sm font-semibold">{course.name}</h3>
          <span className="rounded-full bg-slate-900 px-3 py-1 text-xs text-white">
            {levelLabel[course.level]}
          </span>
        </div>
        <p className="mt-2 text-sm text-slate-700 dark:text-slate-200">
          {course.description}
        </p>
        <p className="mt-2 text-xs text-slate-500 dark:text-slate-300">
          Precio mensual: {course.price}
        </p>
        <button
          onClick={() => setOpen((o) => !o)}
          className="mt-3 rounded-full bg-primary px-4 py-1.5 text-xs font-semibold text-white hover:bg-primary-dark"
        >
          {open ? 'Ocultar detalles' : 'Ver más'}
        </button>
        {open && (
          <div className="mt-3 space-y-1 border-t border-slate-200 pt-3 text-xs dark:border-slate-700">
            <p>
              <span className="font-semibold">Duración:</span> {course.duration}
            </p>
            <p>
              <span className="font-semibold">Horarios:</span> {course.schedule}
            </p>
            <p>
              <span className="font-semibold">Requisitos:</span> {course.requirements}
            </p>
          </div>
        )}
      </div>
    </article>
  );
}
