import { Link } from "react-router-dom";
import United_Logo from "@/assets/images/Footer/United_Logos.webp";
import Facebook from "@/assets/icons/Footer/Facebook.webp";
import Instagram from "@/assets/icons/Footer/Instagram.webp";
import X from "@/assets/icons/Footer/X.webp";
import YouTube from "@/assets/icons/Footer/YouTube.webp";
import Phone from "@/assets/icons/Footer/Phone.webp";
import Pin from "@/assets/icons/Footer/Pin.webp";

const columnaIzquierda = [
  { label: "¿Quiénes somos?", to: "/nosotros" },
  { label: "Actividades", to: "/instalaciones/actividades" },
  { label: "Horarios", to: "/instalaciones/horarios" },
];

const columnaDerecha = [
  { label: "Membresías", to: "/membresias" },
  { label: "APP móvil para socios", to: "/app-movil" },
  { label: "Aviso de privacidad", to: "/aviso-de-privacidad" },
];

const redesSociales = [
  { icon: Facebook, href: "https://facebook.com", label: "Facebook" },
  { icon: Instagram, href: "https://instagram.com", label: "Instagram" },
  { icon: X, href: "https://x.com", label: "X" },
  { icon: YouTube, href: "https://youtube.com", label: "YouTube" },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-white">
      <div className="border-t-2 border-gray-100 shadow-lg mb-5"></div>

      <div className="mx-auto grid max-w-[1890px] grid-cols-1 gap-6 px-4 py-8 sm:gap-10 sm:px-6 sm:py-10 lg:grid-cols-4 lg:gap-8 lg:px-10 lg:py-12">
        {/* Columna 1: Patronato */}
        <div className="text-center lg:text-left">
          <h3 className="text-base font-bold text-slate-900 sm:text-lg">
            Patronato del Parque España
          </h3>
          <p className="mt-3 text-sm text-gray-600 sm:text-base">
            Tradición que une, bienestar que perdura
          </p>

          <div className="mt-6 flex items-center justify-center gap-3 lg:justify-start">
            <img
              src={United_Logo}
              alt="United Logo"
              loading="lazy"
              className="h-12 w-auto object-contain sm:h-15 lg:w-70"
            />
          </div>
        </div>

        {/* Columna 2: Conoce más (lista 1) */}
        <div className="text-center">
          <h3 className="text-sm font-bold text-slate-900 sm:text-base">
            Conoce más
          </h3>
          <div className="mt-4 flex flex-col items-center gap-3 text-sm text-gray-700 sm:text-base">
            {columnaIzquierda.map((link) => (
              <Link key={link.to} to={link.to} className="hover:text-[#0097b2]">
                {link.label}
              </Link>
            ))}
          </div>
        </div>

        {/* Columna 3: continuación de Conoce más (lista 2) */}
        <div className="text-center">
          <h3
            className="text-sm font-bold text-transparent sm:text-base"
            aria-hidden="true"
          >
            Conoce más
          </h3>
          <div className="mt-4 flex flex-col items-center gap-3 text-sm text-gray-700 sm:text-base">
            {columnaDerecha.map((link) => (
              <Link key={link.to} to={link.to} className="hover:text-[#0097b2]">
                {link.label}
              </Link>
            ))}
          </div>
        </div>

        {/* Columna 4: Contacto */}
        <div className="text-center lg:text-left">
          <h3 className="text-sm font-bold text-slate-900 sm:text-base">
            Contacto
          </h3>

          <div className="mt-4 flex items-start justify-center gap-1 text-[14px] text-gray-700 sm:text-[15px] lg:justify-start">
            <img
              src={Pin}
              alt="Ubicación"
              loading="lazy"
              className="mt-0.5 h-6 w-4.5 shrink-0 "
            />
            <p className="">
              Av. 25 Ote. 1001, Ladrillera de Benítez, 72500
              <br />
              Heroica Puebla de Zaragoza, Pue.
            </p>
          </div>
          <div className="mt-3 flex items-center justify-center gap-2 text-sm text-gray-700 sm:text-base lg:justify-start">
            <img src={Phone} alt="Teléfono" loading="lazy" className="h-6 w-6 shrink-0 " />
            <a href="tel:+522229175761" className="hover:text-[#0097b2]">
              +52 1 222 917 5761
            </a>
          </div>

          <div className="mt-4 flex items-center justify-center gap-4 lg:justify-start">
            {redesSociales.map((red) => (
              <a
                key={red.label}
                href={red.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={red.label}
                className="transition-opacity hover:opacity-80"
              >
                <img
                  src={red.icon}
                  alt={red.label}
                  loading="lazy"
                  className="h-6 w-6 object-contain"
                />
              </a>
            ))}
          </div>

          <div className="mt-6 flex flex-wrap justify-center gap-2 sm:gap-3 lg:justify-start">
            <Link
              to="/facilities/schedules"
              className="rounded-full bg-[#043351] px-4 py-2 text-sm font-semibold text-white hover:bg-slate-800 sm:px-5 sm:text-base"
            >
              Horarios
            </Link>
            <Link
              to="/parque-espana-2"
              className="rounded-full bg-[#0097b2] px-4 py-2 text-sm font-semibold text-white hover:bg-sky-700 sm:px-5 sm:text-base"
            >
              Ver Parque España II
            </Link>
          </div>
        </div>
      </div>

      <div className="bg-slate-600 py-3 text-center text-sm text-white">
        Todos los Derechos Reservados Parque España {year}
      </div>
    </footer>
  );
}
