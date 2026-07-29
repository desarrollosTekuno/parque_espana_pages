import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X, ChevronDown } from "lucide-react";

import Logo from "@/assets/icons/Logo.webp";

const mainLinks = [
  { label: "Inicio", to: "/" },
  { label: "Nosotros", to: "/about" },
  { label: "Membresías", to: "/memberships" },
];

const secondaryLinks = [
  { label: "APP móvil", to: "/app-mobile" },
  { label: "Parque España II", to: "/parque-espana-2" },
  { label: "Contacto", to: "/contacto" },
];

const instalacionesLinks = [
  { label: "Horarios", to: "/facilities/schedules" },
  { label: "Vista virtual", to: "/facilities/virtual-view" },
  { label: "Actividades", to: "/facilities/activities" },
  { label: "Galería", to: "/facilities/gallery" },
];

export default function Header() {
  const [showInstalaciones, setShowInstalaciones] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileInstalacionesOpen, setMobileInstalacionesOpen] = useState(false);

  return (
    <>
      <header className="fixed inset-x-0 top-0 z-50 w-full bg-header-gradient text-white font-bold borderr-none">
        <nav className="mx-auto flex h-17.5 items-center justify-between px-6">
          <Link
            to="/"
            className="flex items-center"
            onClick={() => setMobileOpen(false)}
          >
            <img src={Logo} alt="Parque España" className="h-12 w-10 ml-10" />
          </Link>

          {/* Menú desktop */}
          <ul className="hidden flex-1 items-center justify-end gap-14 text-base leading-relaxed mr-18 lg:flex">
            {mainLinks.map((link) => (
              <li key={link.to}>
                <Link to={link.to} className="hover:text-blue-300">
                  {link.label}
                </Link>
              </li>
            ))}

            <li
              className="relative"
              onMouseEnter={() => setShowInstalaciones(true)}
              onMouseLeave={() => setShowInstalaciones(false)}
            >
              <button className="hover:text-blue-300">Instalaciones</button>

              {showInstalaciones && (
                <ul className="absolute left-0 top-full w-48 rounded-b-md bg-white text-gray-800 shadow-lg">
                  {instalacionesLinks.map((item) => (
                    <li key={item.to}>
                      <Link
                        to={item.to}
                        className="block px-4 py-2 text-sm hover:bg-gray-100"
                      >
                        {item.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </li>

            {secondaryLinks.map((link) => (
              <li key={link.to}>
                <Link to={link.to} className="hover:text-blue-300">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>

          {/* Botón desktop */}
          <Link
            to="/login"
            className="hidden rounded-md bg-[#043351] px-4 py-2 text-sm font-semibold hover:bg-slate-800 lg:block"
          >
            Iniciar sesión
          </Link>

          {/* Hamburguesa: móvil y tablet */}
          <button
            className="lg:hidden"
            onClick={() => setMobileOpen((prev) => !prev)}
            aria-label="Abrir menú"
          >
            {mobileOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </nav>

        {mobileOpen && (
          <div className="max-h-[calc(100vh-70px)] overflow-y-auto border-t border-white/10 lg:hidden">
            <ul className="flex flex-col divide-y divide-white/10 px-6 py-4 text-sm">
              {mainLinks.map((link) => (
                <li key={link.to}>
                  <Link
                    to={link.to}
                    className="block py-3 hover:text-blue-300"
                    onClick={() => setMobileOpen(false)}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}

              <li>
                <button
                  className="flex w-full items-center justify-between py-3"
                  onClick={() => setMobileInstalacionesOpen((prev) => !prev)}
                >
                  Instalaciones
                  <ChevronDown
                    size={20}
                    className={`transition-transform ${mobileInstalacionesOpen ? "rotate-180" : ""}`}
                  />
                </button>

                {mobileInstalacionesOpen && (
                  <ul className="mb-2 flex flex-col gap-1 pl-4">
                    {instalacionesLinks.map((item) => (
                      <li key={item.to}>
                        <Link
                          to={item.to}
                          className="block py-2 text-base text-white/70 hover:text-blue-300"
                          onClick={() => setMobileOpen(false)}
                        >
                          {item.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </li>

              {secondaryLinks.map((link) => (
                <li key={link.to}>
                  <Link
                    to={link.to}
                    className="block py-3 hover:text-blue-300"
                    onClick={() => setMobileOpen(false)}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>

            <div className="px-6 pb-6">
              <Link
                to="/login"
                className="block rounded-lg bg-[#043351] px-4 py-3 text-center text-sm font-semibold hover:bg-blue-700"
                onClick={() => setMobileOpen(false)}
              >
                Iniciar sesión
              </Link>
            </div>
          </div>
        )}
      </header>

      {/* Spacer: mismo alto que el header, empuja el contenido de la página */}
      <div className="h-17.5" aria-hidden="true" />
    </>
  );
}