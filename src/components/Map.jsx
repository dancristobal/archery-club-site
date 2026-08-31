import { useEffect, useRef } from "react";
import L from "leaflet";

export default function Map() {
  const mapRef = useRef(null);

  useEffect(() => {
    // Evitar inicializar el mapa más de una vez
    if (mapRef.current) return;

    // Coordenadas del club
    const position = [39.5696, 2.6502]; // Ajusta a tu ubicación real

    // Crear mapa
    mapRef.current = L.map("map", {
      center: position,
      zoom: 14,
      scrollWheelZoom: false,
    });

    // Capa base
    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
      maxZoom: 19,
      attribution: "&copy; OpenStreetMap contributors",
    }).addTo(mapRef.current);

    // Icono del marcador
    const icon = L.icon({
      iconUrl: "https://cdn-icons-png.flaticon.com/512/684/684908.png",
      iconSize: [32, 32],
      iconAnchor: [16, 32],
    });

    // Marcador
    L.marker(position, { icon })
      .addTo(mapRef.current)
      .bindPopup("<b>Club de Tiro con Arco</b><br>Campo oficial de entrenamiento.");
  }, []);

  return (
    <div
      id="map"
      className="h-64 w-full rounded-xl shadow-lg border border-slate-300 dark:border-slate-700"
    ></div>
  );
}
