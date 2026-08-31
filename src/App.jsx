import { Routes, Route, NavLink } from 'react-router-dom';
import Home from './pages/Home';
import Events from './pages/Events';
import Courses from './pages/Courses';
import Library from './pages/Library';
import ThemeToggle from './components/ThemeToggle';
import Footer from './components/Footer';
import { useState } from 'react';

export default function App() {
  const [open, setOpen] = useState(false);

  const navLinkClasses = ({ isActive }) =>
    `px-3 py-2 text-sm font-medium ${
      isActive
        ? 'text-primary dark:text-primary'
        : 'text-slate-700 dark:text-slate-200'
    }`;

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 dark:bg-slate-900 dark:text-slate-100">
      <header className="sticky top-0 z-20 border-b border-slate-200 bg-white/80 backdrop-blur dark:border-slate-700 dark:bg-slate-900/80">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
          <div className="flex items-center gap-2">
            <span className="h-8 w-8 rounded-full bg-primary dark:bg-primary-dark" />
            <span className="text-sm font-semibold uppercase tracking-wide">
              Club de Tiro con Arco
            </span>
          </div>
          <nav className="hidden items-center gap-4 md:flex">
            <NavLink to="/" className={navLinkClasses} end>
              Inicio
            </NavLink>
            <NavLink to="/eventos" className={navLinkClasses}>
              Eventos
            </NavLink>
            <NavLink to="/cursos" className={navLinkClasses}>
              Cursos
            </NavLink>
            <NavLink to="/biblioteca" className={navLinkClasses}>
              Biblioteca
            </NavLink>
            <ThemeToggle />
          </nav>
          <button
            className="inline-flex items-center justify-center rounded-md border border-slate-300 p-2 text-slate-700 md:hidden dark:border-slate-600 dark:text-slate-100"
            onClick={() => setOpen((o) => !o)}
            aria-label="Abrir menú"
          >
            <span className="block h-0.5 w-5 bg-current" />
            <span className="mt-1 block h-0.5 w-5 bg-current" />
            <span className="mt-1 block h-0.5 w-5 bg-current" />
          </button>
        </div>
        {open && (
          <div className="border-t border-slate-200 bg-white px-4 py-3 md:hidden dark:border-slate-700 dark:bg-slate-900">
            <div className="flex flex-col gap-2">
              <NavLink
                to="/"
                className={navLinkClasses}
                end
                onClick={() => setOpen(false)}
              >
                Inicio
              </NavLink>
              <NavLink
                to="/eventos"
                className={navLinkClasses}
                onClick={() => setOpen(false)}
              >
                Eventos
              </NavLink>
              <NavLink
                to="/cursos"
                className={navLinkClasses}
                onClick={() => setOpen(false)}
              >
                Cursos
              </NavLink>
              <NavLink
                to="/biblioteca"
                className={navLinkClasses}
                onClick={() => setOpen(false)}
              >
                Biblioteca
              </NavLink>
              <ThemeToggle />
            </div>
          </div>
        )}
      </header>

      <main className="mx-auto max-w-6xl px-4 py-6">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/eventos" element={<Events />} />
          <Route path="/cursos" element={<Courses />} />
          <Route path="/biblioteca" element={<Library />} />
        </Routes>
      </main>

      <Footer />
    </div>
  );
}
