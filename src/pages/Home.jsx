import ViewWrapper from "../components/ViewWrapper";
import HeroBanner from "../components/HeroBanner";
import ContactSection from "../components/ContactSection";

export default function Home() {
  return (
    <ViewWrapper>
      <div id="top" className="space-y-8">
        <HeroBanner />
        <section className="mt-6">
          <h2 className="text-xl font-semibold">Nuestra misión</h2>
          <p className="mt-2 text-sm text-slate-700 dark:text-slate-200">
            Promover el tiro con arco como deporte seguro, inclusivo y apasionante,
            ofreciendo formación continua, eventos y una comunidad comprometida.
          </p>
        </section>
        <ContactSection />
      </div>
    </ViewWrapper>
  );
}
