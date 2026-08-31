const categoryLabel = {
  tecnica: 'Técnica',
  seguridad: 'Seguridad',
  reglamento: 'Reglamento',
};

export default function ManualItem({ manual }) {
  return (
    <article className="flex items-center justify-between rounded-lg border border-slate-200 bg-white p-4 text-sm shadow-sm dark:border-slate-700 dark:bg-slate-800">
      <div className="flex-1">
        <h3 className="text-sm font-semibold">{manual.title}</h3>
        <p className="mt-1 text-xs text-slate-500 dark:text-slate-300">
          Categoría: {categoryLabel[manual.category]} · Tamaño: {manual.fileSize}
        </p>
        <p className="mt-2 text-sm text-slate-700 dark:text-slate-200">
          {manual.description}
        </p>
      </div>
      <a
        href={manual.fileUrl}
        download
        className="ml-4 inline-flex items-center gap-2 rounded-full bg-primary px-4 py-1.5 text-xs font-semibold text-white hover:bg-primary-dark"
      >
        <span>Descargar PDF</span>
        <span>📄</span>
      </a>
    </article>
  );
}
