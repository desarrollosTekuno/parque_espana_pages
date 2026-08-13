import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ChevronDown } from "lucide-react";

import Logo1 from "@/assets/icons/Logo_pe1.webp";
import Logo2 from "@/assets/icons/Logo_pe2.webp";

import { headerConfig as parque1 } from "../constants/ParkSpain_1/Header";
import { headerConfig as parque2 } from "../constants/ParkSpain_2/Header";

interface HeaderLink {
  label: string;
  to?: string;
}

interface HeaderConfig {
  mainLinks: HeaderLink[];
  nosotrosLinks?: HeaderLink[];
  secondaryLinks: HeaderLink[];
  instalacionesLinks?: HeaderLink[];
}

export default function Header() {
  const location = useLocation();

  const isParque2 = location.pathname.startsWith("/parque-espana-2");

  const currentLogo = isParque2 ? Logo2 : Logo1;
  const config: HeaderConfig = isParque2 ? parque2 : parque1;

  const {
    mainLinks = [],
    nosotrosLinks = [],
    secondaryLinks = [],
    instalacionesLinks = [],
  } = config;

  // Filtrar "Actividades" del submenú de instalaciones solo para Parque España 2
  const filteredInstalacionesLinks = isParque2
    ? instalacionesLinks.filter(
        (item) => item.label.toLowerCase() !== "actividades",
      )
    : instalacionesLinks;

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

  
          <Link
            to={isParque2 ? "/parque-espana-2" : "/parque-espana-1"}
            className="flex items-center"
            onClick={closeMobileMenu}
          >
            <img
              src={currentLogo}
              alt="Parque España"
              className="ml-10 h-12 w-10 object-contain"
            />
          </Link>

          {/* DESKTOP MENU */}
          <ul className="mr-18 hidden flex-1 items-center justify-end gap-14 text-base leading-relaxed lg:flex">
            {mainLinks.map((link, index) => (
              <li
                key={link.to ?? index}
                className="relative flex items-center h-full"
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
                {link.label == "Nosotros" && nosotrosLinks.length > 0 ? (
                  <button className="flex items-center hover:text-blue-300 transition-colors">
                    {link.label}
                  </button>
                ) : (
                  <Link
                    to={link.to ?? "#"}
                    className="flex items-center hover:text-blue-300 transition-colors"
                  >
                    {link.label}
                  </Link>
                )}

                {link.label == "Nosotros" &&
                  showNosotros &&
                  nosotrosLinks.length > 0 && (
                    <ul className="absolute left-1/2 -translate-x-1/2 top-full w-52 rounded-b-md bg-white text-gray-800 shadow-lg py-2">
                      {nosotrosLinks.map((item, subIndex) => (
                        <li key={item.to ?? subIndex}>
                          <Link
                            to={item.to ?? "#"}
                            className="block px-4 py-2 text-sm text-center hover:bg-gray-100"
                          >
                            {item.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  )}
              </li>
            ))}

            {/* INSTALACIONES DESKTOP */}
            {filteredInstalacionesLinks.length > 0 && (
              <li
                className="relative flex items-center h-full"
                onMouseEnter={() => setShowInstalaciones(true)}
                onMouseLeave={() => setShowInstalaciones(false)}
              >
                <button className="flex items-center hover:text-blue-300 transition-colors">
                  Instalaciones
                </button>

                {showInstalaciones && (
                  <ul className="absolute left-1/2 -translate-x-1/2 top-full w-48 rounded-b-md bg-white text-gray-800 shadow-lg py-2">
                    {filteredInstalacionesLinks.map((item, subIndex) => (
                      <li key={item.to ?? subIndex}>
                        <Link
                          to={item.to ?? "#"}
                          className="block px-4 py-2 text-sm text-center hover:bg-gray-100"
                        >
                          {item.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            )}

            {/* LINKS SECUNDARIOS */}
            {secondaryLinks.map((link, index) => (
              <li key={link.to ?? index} className="flex items-center h-full">
                <Link
                  to={link.to ?? "#"}
                  className="flex items-center hover:text-blue-300 transition-colors"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>

          {/* LOGIN */}
          <Link
            to="/login"
            className="hidden rounded-md bg-[#043351] px-4 py-2 text-sm font-semibold hover:bg-slate-800 lg:flex lg:items-center lg:justify-center"
          >
            Iniciar sesión
          </Link>

          {/* BOTÓN MOBILE MENU */}
          <button
            className="flex items-center justify-center p-1 lg:hidden"
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
              {mainLinks.map((link, index) => (
                <li
                  key={link.to ?? index}
                  className="flex flex-col justify-center"
                >
                  {link.label == "Nosotros" && nosotrosLinks.length > 0 ? (
                    <>
                      <button
                        type="button"
                        className="flex w-full items-center justify-between py-3 font-bold hover:text-blue-300 transition-colors text-left"
                        onClick={() => setMobileNosotrosOpen((prev) => !prev)}
                      >
                        <span>{link.label}</span>
                        <ChevronDown
                          size={20}
                          className={`transition-transform duration-200 text-white/80 ${
                            mobileNosotrosOpen ? "rotate-180" : ""
                          }`}
                        />
                      </button>

                      {mobileNosotrosOpen && (
                        <ul className="mb-2 flex flex-col gap-1 pl-4">
                          {nosotrosLinks.map((item, subIndex) => (
                            <li key={item.to ?? subIndex}>
                              <Link
                                to={item.to ?? "#"}
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
                      to={link.to ?? "#"}
                      className="flex items-center py-3 hover:text-blue-300"
                      onClick={closeMobileMenu}
                    >
                      {link.label}
                    </Link>
                  )}
                </li>
              ))}

              {/* INSTALACIONES MOBILE */}
              {filteredInstalacionesLinks.length > 0 && (
                <li className="flex flex-col justify-center">
                  <button
                    type="button"
                    className="flex w-full items-center justify-between py-3 font-bold hover:text-blue-300 transition-colors text-left"
                    onClick={() => setMobileInstalacionesOpen((prev) => !prev)}
                  >
                    <span>Instalaciones</span>
                    <ChevronDown
                      size={20}
                      className={`transition-transform duration-200 text-white/80 ${
                        mobileInstalacionesOpen ? "rotate-180" : ""
                      }`}
                    />
                  </button>

                  {mobileInstalacionesOpen && (
                    <ul className="mb-2 flex flex-col gap-1 pl-4">
                      {filteredInstalacionesLinks.map((item, subIndex) => (
                        <li key={item.to ?? subIndex}>
                          <Link
                            to={item.to ?? "#"}
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
              )}

              {secondaryLinks.map((link, index) => (
                <li
                  key={link.to ?? index}
                  className="flex flex-col justify-center"
                >
                  <Link
                    to={link.to ?? "#"}
                    className="flex items-center py-3 hover:text-blue-300"
                    onClick={closeMobileMenu}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>

            <div className="px-6 pb-6 pt-2">
              <Link
                to="/login"
                className="flex items-center justify-center rounded-lg bg-[#043351] px-4 py-3 text-center text-sm font-semibold hover:bg-blue-700 transition-colors"
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
