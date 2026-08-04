import { Link, useLocation } from "react-router-dom";
import United_Logo from "@/assets/images/Footer/United_Logos.webp";
import Facebook from "@/assets/icons/Footer/Facebook.webp";
import Instagram from "@/assets/icons/Footer/Instagram.webp";
import X from "@/assets/icons/Footer/X.webp";
import YouTube from "@/assets/icons/Footer/YouTube.webp";
import Phone from "@/assets/icons/Footer/Phone.webp";
import Pin from "@/assets/icons/Footer/Pin.webp";

// Configuración de datos de cada parque
import { footerConfig as parque1 } from "../constants/ParkSpain_1/Footer";
import { footerConfig as parque2 } from "../constants/ParkSpain_2/Footer";


// Redes sociales por parque definidas dentro del TSX
const SOCIAL_LINKS_PARQUE_1: Record<string, string> = {
  Facebook: "https://www.facebook.com/parqueespanapuebla?mibextid=wwXIfr&rdid=bTS56VzxdihqP8OU&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F1B4LThdJr4%2F%3Fmibextid%3DwwXIfr#",
  Instagram: "https://www.instagram.com/parqueespana_puebla",
  X: "https://x.com/parqueespanapue",
  YouTube: "https://www.youtube.com/@parqueespana/videos",
};

const SOCIAL_LINKS_PARQUE_2: Record<string, string> = {
  Facebook: "https://www.facebook.com/parque2/",
  Instagram: "https://www.instagram.com/parqueespana2/",
  X: "https://x.com/parque2",
 
};

// Mapa de iconos de redes sociales
const SOCIAL_ICONS: Record<string, string> = {
  Facebook,
  Instagram,
  X,
  YouTube,
};

export default function Footer() {
  const location = useLocation();
  const year = new Date().getFullYear();

  // Detección de parque según ruta actual
  const isParque2 = location.pathname.startsWith("/parque-espana-2");
  
  // Selección de datos (.ts) y enlaces de redes sociales correspondientes
  const config = isParque2 ? parque2 : parque1;
  const socialLinks = isParque2 ? SOCIAL_LINKS_PARQUE_2 : SOCIAL_LINKS_PARQUE_1;

  const {
    patronatoTitulo,
    patronatoSubtitulo,
    columnaIzquierda,
    columnaDerecha,
    direccion,
    telefono,
    redesSociales,
    botonParque,
  } = config;

  return (
    <footer className="bg-white">
      <div className="border-t-2 border-gray-100 shadow-lg mb-5"></div>

      <div className="mx-auto grid max-w-[1890px] grid-cols-1 gap-6 px-4 py-8 sm:gap-10 sm:px-6 sm:py-10 lg:grid-cols-4 lg:gap-8 lg:px-10 lg:py-12">
        {/* Columna 1: Patronato */}
        <div className="text-center lg:text-left">
          <h3 className="text-base font-bold text-slate-900 sm:text-lg">
            {patronatoTitulo}
          </h3>
          <p className="mt-3 text-sm text-gray-600 sm:text-base">
            {patronatoSubtitulo}
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
              {direccion.linea1}
              <br />
              {direccion.linea2}
            </p>
          </div>

          <div className="mt-3 flex items-center justify-center gap-2 text-sm text-gray-700 sm:text-base lg:justify-start">
            <img src={Phone} alt="Teléfono" loading="lazy" className="h-6 w-6 shrink-0 " />
            <a href={telefono.href} className="hover:text-[#0097b2]">
              {telefono.numero}
            </a>
          </div>

          {/* Redes Sociales con enlaces dinámicos según el parque activo */}
          <div className="mt-4 flex items-center justify-center gap-4 lg:justify-start">
            {redesSociales.map((red) => (
              <a
                key={red.label}
                href={socialLinks[red.label] || "#"}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={red.label}
                className="transition-opacity hover:opacity-80"
              >
                <img
                  src={SOCIAL_ICONS[red.label]}
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
              to={botonParque.to}
              className="rounded-full bg-[#0097b2] px-4 py-2 text-sm font-semibold text-white hover:bg-sky-700 sm:px-5 sm:text-base"
            >
              {botonParque.label}
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