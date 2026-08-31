import Map from "../components/Map";

export default function ContactSection() {
  return (
    <section className="mt-10 space-y-8">
      <h2 className="text-xl font-semibold">Contacto</h2>
      <p className="text-sm text-slate-700 dark:text-slate-200">
        Estamos ubicados en nuestro campo de tiro oficial. Puedes visitarnos en horario
        de entrenamiento o escribirnos para resolver cualquier duda.
      </p>

      {/* Información de contacto */}
      <div className="grid gap-6 md:grid-cols-3">

        {/* Dirección */}
        <div className="flex items-start gap-3">
          <span className="text-2xl">📍</span>
          <div>
            <h3 className="text-sm font-semibold">Dirección</h3>
            <p className="text-sm text-slate-600 dark:text-slate-300">
              Camino del Campo de Tiro s/n, 28000 Ciudad
            </p>
          </div>
        </div>

        {/* Teléfono */}
        <div className="flex items-start gap-3">
          <span className="text-2xl">📞</span>
          <div>
            <h3 className="text-sm font-semibold">Teléfono</h3>
            <p className="text-sm text-slate-600 dark:text-slate-300">
              +34 600 000 000
            </p>
          </div>
        </div>

        {/* Email */}
        <div className="flex items-start gap-3">
          <span className="text-2xl">✉️</span>
          <div>
            <h3 className="text-sm font-semibold">Correo electrónico</h3>
            <p className="text-sm text-slate-600 dark:text-slate-300">
              contacto@clubtiroconarco.es
            </p>
          </div>
        </div>
      </div>

      {/* Mapa */}
      <Map />
    </section>
  );
}
