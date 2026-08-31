function ContactCard({ icon, title, value }) {
  return (
    <div className="flex items-start gap-3 rounded-lg border border-slate-200 bg-white p-4 text-sm shadow-sm dark:border-slate-700 dark:bg-slate-800">
      <div className="mt-1 h-8 w-8 rounded-full bg-primary/10 text-primary flex items-center justify-center">
        {icon}
      </div>
      <div>
        <p className="font-semibold">{title}</p>
        <p className="text-slate-700 dark:text-slate-200">{value}</p>
      </div>
    </div>
  );
}

export default function ContactSection() {
  return (
    <section className="mt-8 grid gap-6 md:grid-cols-2">
      <div className="space-y-4">
        <h2 className="text-xl font-semibold">Contacto</h2>
        <p className="text-sm text-slate-700 dark:text-slate-200">
          Estamos ubicados en nuestro campo de tiro oficial. Puedes visitarnos en
          horario de entrenamiento o escribirnos para resolver cualquier duda.
        </p>
        <div className="space-y-3">
          <ContactCard
            icon={<span>📍</span>}
            title="Dirección"
            value="Camino del Campo de Tiro s/n, 28000 Ciudad"
          />
          <ContactCard icon={<span>📞</span>} title="Teléfono" value="+34 600 000 000" />
          <ContactCard
            icon={<span>✉️</span>}
            title="Correo electrónico"
            value="info@clubtiroconarco.es"
          />
          <ContactCard
            icon={<span>🌐</span>}
            title="Redes sociales"
            value="@clubtiroconarco en Instagram y Facebook"
          />
        </div>
      </div>
      <div className="h-64 overflow-hidden rounded-lg border border-slate-200 bg-slate-100 dark:border-slate-700">
        <iframe
          title="Ubicación del club"
          src="https://www.google.com/maps/embed?pb=!1m18!..."
          className="h-full w-full border-0"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>
    </section>
  );
}
