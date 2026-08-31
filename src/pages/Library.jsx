import ViewWrapper from "../components/ViewWrapper";
import { useState } from "react";
import manualsData from "../data/manuals.json";
import ManualItem from "../components/ManualItem";

const tabs = [
  { id: "todas", label: "Todas" },
  { id: "tecnica", label: "Técnica" },
  { id: "seguridad", label: "Seguridad" },
  { id: "reglamento", label: "Reglamento" }
];

export default function Library() {
  const [active, setActive] = useState("todas");

  const filtered =
    active === "todas"
      ? manualsData
      : manualsData.filter((m) => m.category === active);

  return (
    <ViewWrapper>
      <section className="space-y-4">
        <h1 className="text-xl font-semibold">Biblioteca de manuales</h1>
        <p className="text-sm text-slate-700 dark:text-slate-200">
          Documentos técnicos y reglamentos disponibles para descarga.
        </p>

        <div className="mt-3 flex flex-wrap gap-2">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActive(tab.id)}
              className={`rounded-full px-4 py-1.5 text-xs font-semibold ${
                active === tab.id
                  ? "bg-primary text-white"
                  : "bg-slate-100 text-slate-700 dark:bg-slate-800 dark:text-slate-200"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        <div className="mt-4 space-y-3">
          {filtered.map((manual) => (
            <ManualItem key={manual.id} manual={manual} />
          ))}
        </div>
      </section>
    </ViewWrapper>
  );
}
