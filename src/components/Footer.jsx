export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="mt-8 border-t border-slate-200 bg-slate-100 py-4 text-xs dark:border-slate-700 dark:bg-slate-950">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-2 px-4 md:flex-row">
        <span>© {year} Club de Tiro con Arco. Todos los derechos reservados.</span>
        <span>Diseño: Equipo del club.</span>
        <a href="#top" className="text-primary hover:underline">
          Volver al inicio
        </a>
        <span className="text-[11px] text-slate-500 dark:text-slate-400">
          Este sitio no recopila datos personales. Solo se usan cookies técnicas si fueran necesarias.
        </span>
      </div>
    </footer>
  );
}
