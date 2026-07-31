import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ChevronDown } from "lucide-react";

// 1. Importas los logos directamente en el TSX
import Logo1 from "@/assets/icons/Logo_pe1.webp";
import Logo2 from "@/assets/icons/Logo_pe2.webp"; // <-- Reemplaza por la ruta de tu segundo logo

import { headerConfig as parque1 } from "../constants/ParkSpain_1/Header";
import { headerConfig as parque2 } from "../constants/ParkSpain_2/Header";

// Tipo unificado para TypeScript
interface HeaderLink {
  label: string;
  to: string;
}

interface HeaderConfig {
  mainLinks: HeaderLink[];
  nosotrosLinks?: HeaderLink[];
  secondaryLinks: HeaderLink[];
  instalacionesLinks: HeaderLink[];
}

export default function Header() {
  const location = useLocation();

  // 2. Comprobamos la ruta
  const isParque2 = location.pathname.startsWith("/parque-espana-2");


  const currentLogo = isParque2 ? Logo2 : Logo1;

  const config: HeaderConfig = isParque2 ? parque2 : parque1;

  const {
    mainLinks = [],
    nosotrosLinks = [],
    secondaryLinks = [],
    instalacionesLinks = [],
  } = config;

  const [showNosotros, setShowNosotros] = useState(false);
  const [showInstalaciones, setShowInstalaciones] = useState(false);

  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileNosotrosOpen, setMobileNosotrosOpen] = useState(false);
  const [mobileInstalacionesOpen, setMobileInstalacionesOpen] = useState(false);

  const closeMobileMenu = () => {
    setMobileOpen(false);
    setMobileNosotrosOpen(false);
    setMobileInstalacionesOpen(false);
  };

  const toggleMobileMenu = () => {
    setMobileOpen((prev) => {
      if (prev) {
        setMobileNosotrosOpen(false);
        setMobileInstalacionesOpen(false);
      }
      return !prev;
    });
  };

  return (
    <>
      <header className="fixed inset-x-0 top-0 z-50 w-full border-none bg-header-gradient font-bold text-white">
        <nav className="mx-auto flex h-17.5 items-center justify-between px-6">
          {/* LOGO DINÁMICO */}
          <Link to="/" className="flex items-center" onClick={closeMobileMenu}>
            <img src={currentLogo} alt="Parque España" className="ml-10 h-12 w-10" />
          </Link>

          {/* DESKTOP MENU */}
          <ul className="mr-18 hidden flex-1 items-center justify-end gap-14 text-base leading-relaxed lg:flex">
            {mainLinks.map((link) => (
              <li
                key={link.to}
                className="relative"
                onMouseEnter={() => {
                  if (link.label == "Nosotros" && nosotrosLinks.length > 0) {
                    setShowNosotros(true);
                  }
                }}
                onMouseLeave={() => {
                  if (link.label == "Nosotros") {
                    setShowNosotros(false);
                  }
                }}
              >
                <Link to={link.to} className="hover:text-blue-300">
                  {link.label}
                </Link>

                {link.label == "Nosotros" &&
                  showNosotros &&
                  nosotrosLinks.length > 0 && (
                    <ul className="absolute left-0 top-full w-52 rounded-b-md bg-white text-gray-800 shadow-lg">
                      {nosotrosLinks.map((item) => (
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
            ))}

            {/* INSTALACIONES */}
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

            {/* LINKS SECUNDARIOS */}
            {secondaryLinks.map((link) => (
              <li key={link.to}>
                <Link to={link.to} className="hover:text-blue-300">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>

          {/* LOGIN */}
          <Link
            to="/login"
            className="hidden rounded-md bg-[#043351] px-4 py-2 text-sm font-semibold hover:bg-slate-800 lg:block"
          >
            Iniciar sesión
          </Link>

          {/* BOTÓN MOBILE */}
          <button
            className="lg:hidden"
            onClick={toggleMobileMenu}
            aria-label="Abrir menú"
          >
            {mobileOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </nav>

        {/* MOBILE MENU */}
        {mobileOpen && (
          <div className="max-h-[calc(100vh-70px)] overflow-y-auto border-t border-white/10 lg:hidden">
            <ul className="flex flex-col divide-y divide-white/10 px-6 py-4 text-sm">
              {mainLinks.map((link) => (
                <li key={link.to}>
                  {link.label == "Nosotros" && nosotrosLinks.length > 0 ? (
                    <>
                      <button
                        className="flex w-full items-center justify-between py-3"
                        onClick={() => setMobileNosotrosOpen((prev) => !prev)}
                      >
                        {link.label}
                        <ChevronDown
                          size={20}
                          className={`transition-transform ${
                            mobileNosotrosOpen ? "rotate-180" : ""
                          }`}
                        />
                      </button>

                      {mobileNosotrosOpen && (
                        <ul className="mb-2 flex flex-col gap-1 pl-4">
                          {nosotrosLinks.map((item) => (
                            <li key={item.to}>
                              <Link
                                to={item.to}
                                className="block py-2 text-base text-white/70 hover:text-blue-300"
                                onClick={closeMobileMenu}
                              >
                                {item.label}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      )}
                    </>
                  ) : (
                    <Link
                      to={link.to}
                      className="block py-3 hover:text-blue-300"
                      onClick={closeMobileMenu}
                    >
                      {link.label}
                    </Link>
                  )}
                </li>
              ))}

              {/* INSTALACIONES MOBILE */}
              <li>
                <button
                  className="flex w-full items-center justify-between py-3"
                  onClick={() => setMobileInstalacionesOpen((prev) => !prev)}
                >
                  Instalaciones
                  <ChevronDown
                    size={20}
                    className={`transition-transform ${
                      mobileInstalacionesOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>

                {mobileInstalacionesOpen && (
                  <ul className="mb-2 flex flex-col gap-1 pl-4">
                    {instalacionesLinks.map((item) => (
                      <li key={item.to}>
                        <Link
                          to={item.to}
                          className="block py-2 text-base text-white/70 hover:text-blue-300"
                          onClick={closeMobileMenu}
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
                    onClick={closeMobileMenu}
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
                onClick={closeMobileMenu}
              >
                Iniciar sesión
              </Link>
            </div>
          </div>
        )}
      </header>

      {/* ESPACIADOR */}
      <div className="h-17.5" aria-hidden="true" />
    </>
  );
}