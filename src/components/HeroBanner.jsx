export default function HeroBanner() {
  return (
    <section className="relative overflow-hidden rounded-2xl bg-slate-900 text-white">
      <div className="absolute inset-0 bg-[url('/assets/hero/archery-hero.jpg')] bg-cover bg-center opacity-40" />
      <div className="relative z-10 px-6 py-12 md:px-10 md:py-16">
        <h1 className="text-3xl font-bold md:text-4xl">
          Precisión, disciplina y comunidad.
        </h1>
        <p className="mt-3 max-w-xl text-sm md:text-base">
          El Club de Tiro con Arco ofrece formación para todos los niveles, eventos
          regulares y recursos técnicos para que puedas crecer como arquero.
        </p>
        <div className="mt-6 flex flex-wrap gap-3">
          <a
            href="/eventos"
            className="rounded-full bg-primary px-5 py-2 text-sm font-semibold text-white shadow hover:bg-primary-dark"
          >
            Ver próximos eventos
          </a>
          <a
            href="/cursos"
            className="rounded-full border border-white/70 px-5 py-2 text-sm font-semibold"
          >
            Explorar cursos
          </a>
        </div>
      </div>
    </section>
  );
}
