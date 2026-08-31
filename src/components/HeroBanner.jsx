export default function HeroBanner() {
  return (
    <section className="mt-6 rounded-2xl bg-gradient-to-r from-slate-900 via-slate-800 to-slate-700 px-6 py-10 text-white shadow-lg">
      <div className="mx-auto flex max-w-5xl flex-col gap-8 md:flex-row md:items-center">
        
        {/* Texto principal */}
        <div className="flex-1 space-y-4">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-300">
            Club de Tiro con Arco
          </p>

          <h1 className="text-3xl font-extrabold leading-tight md:text-4xl">
            Entrena precisión.  
            <span className="text-primary"> Compite con pasión.</span>
          </h1>

          <p className="max-w-xl text-sm text-slate-200">
            Somos un club deportivo dedicado al tiro con arco:
            entrenamientos guiados, preparación para competición,
            cursos por niveles y una comunidad que te acompaña
            desde tu primera flecha hasta el podio.
          </p>

          <div className="mt-4 flex flex-wrap gap-3">
            <a
              href="/eventos"
              className="rounded-full bg-primary px-5 py-2 text-xs font-semibold text-white shadow-sm hover:bg-primary-dark"
            >
              Ver próximos eventos
            </a>
            <a
              href="/cursos"
              className="rounded-full border border-slate-300 px-5 py-2 text-xs font-semibold text-slate-100 hover:border-primary hover:text-primary"
            >
              Explorar cursos
            </a>
          </div>

          {/* Estadísticas + Badge */}
          <div className="mt-6 flex flex-wrap items-center gap-6 text-xs text-slate-300">

            <div>
              <span className="font-semibold text-white">+50</span> arqueros activos
            </div>

            <div>
              <span className="font-semibold text-white">Entrenamientos</span> semanales
            </div>

            <div>
              <span className="font-semibold text-white">Competencias</span> federadas
            </div>

            {/* Badge de experiencia */}
            <div className="flex items-center gap-2 rounded-full bg-primary/20 px-4 py-1.5 text-primary shadow-sm backdrop-blur">
              <span className="text-lg font-extrabold text-primary">15+</span>
              <span className="text-[11px] font-semibold uppercase tracking-wide text-primary">
                años de experiencia
              </span>
            </div>

          </div>
        </div>

        {/* Imagen */}
        <div className="flex-1">
          <div className="relative h-48 overflow-hidden rounded-2xl border border-slate-700 bg-slate-900 md:h-56">
            <img
              src="/assets/hero/archery-hero.jpg"
              alt="Arquero apuntando a la diana"
              className="h-full w-full object-cover opacity-90"
            />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-slate-900/70 via-transparent to-transparent" />
            <div className="absolute bottom-3 left-3 space-y-1 text-xs text-slate-200">
              <p className="font-semibold text-white">
                Campo oficial de entrenamiento
              </p>
              <p>Sesiones técnicas, simulacros de competición y práctica libre.</p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
