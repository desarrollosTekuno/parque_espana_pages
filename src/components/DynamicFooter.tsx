
import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";

import United_Logo from "@/assets/images/Footer/United_Logos.webp";

import Facebook from "@/assets/icons/Footer/Facebook.webp";
import Instagram from "@/assets/icons/Footer/Instagram.webp";
import X from "@/assets/icons/Footer/X.webp";
import YouTube from "@/assets/icons/Footer/YouTube.webp";
import Phone from "@/assets/icons/Footer/Phone.webp";
import Pin from "@/assets/icons/Footer/Pin.webp";
import WhatsApp from "@/assets/icons/Footer/WhatsApp.webp";
import Threads from "@/assets/icons/Footer/Threads.webp";

import { footerConfig as parque1 } from "../constants/ParkSpain_1/Footer";
import { footerConfig as parque2 } from "../constants/ParkSpain_2/Footer";

import {
  getClubContactInfo,
  CLUB_IDS,
  type ClubContactInfo,
} from "../services/api";

const SOCIAL_ICONS: Record<string, string> = {
  WhatsApp,
  Facebook,
  Instagram,
  X,
  YouTube,
  Threads,
};

export default function Footer() {
  const location = useLocation();
  const year = new Date().getFullYear();

  const isParque2 = location.pathname.startsWith("/parque-espana-2");

  const clubId = isParque2
    ? CLUB_IDS.PARQUE_2
    : CLUB_IDS.PARQUE_1;

  const config = isParque2 ? parque2 : parque1;

  const {
    patronatoTitulo,
    patronatoSubtitulo,
    columnaIzquierda,
    columnaDerecha,
    redesSociales,
    botonParque,
    botonHorarios,
  } = config;

  const [contactInfo, setContactInfo] =
    useState<ClubContactInfo | null>(null);

  const [loadingContact, setLoadingContact] =
    useState(true);

  useEffect(() => {
    setLoadingContact(true);

    getClubContactInfo(clubId)
      .then((data) => {
        setContactInfo(data);
      })
      .catch((err) => {
        console.error(
          "Error cargando información de contacto:",
          err,
        );
        setContactInfo(null);
      })
      .finally(() => {
        setLoadingContact(false);
      });
  }, [clubId]);

  // WhatsApp
  // La API trae únicamente el número.
  // Se agrega automáticamente el código de país de México +52.
  const whatsappHref = contactInfo?.social_whatsapp
    ? `https://wa.me/52${contactInfo.social_whatsapp.replace(/\D/g, "")}`
    : null;

  // Redes sociales provenientes de la API
  const socialLinks: Record<string, string | null> = {
    WhatsApp: whatsappHref,
    Facebook: contactInfo?.social_facebook ?? null,
    Instagram: contactInfo?.social_instagram ?? null,
    X: contactInfo?.social_twitter ?? null,
    YouTube: contactInfo?.social_youtube ?? null,
    Threads: contactInfo?.social_threads ?? null,
  };

  // Dirección y teléfono provenientes de la API
  const addressText = contactInfo?.address ?? "";
  const phoneNumber = contactInfo?.phone ?? "";

  const phoneHref = contactInfo?.phone
    ? `tel:${contactInfo.phone}`
    : "#";

  return (
    <footer className="bg-white">
      {/* Línea superior */}
      <div className="mb-5 border-t-2 border-gray-100 shadow-lg" />

      {/* Contenido principal */}
      <div className="mx-auto grid max-w-[1890px] grid-cols-1 gap-6 px-4 py-8 sm:gap-10 sm:px-6 sm:py-10 lg:grid-cols-4 lg:gap-8 lg:px-10 lg:py-12">

        {/* =====================================================
            COLUMNA 1 - PATRONATO
        ====================================================== */}
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

        {/* =====================================================
            COLUMNA 2 - CONOCE MÁS
        ====================================================== */}
        <div className="text-center">
          <h3 className="text-sm font-bold text-slate-900 sm:text-base">
            Conoce más
          </h3>

          <div className="mt-4 flex flex-col items-center gap-3 text-sm text-gray-700 sm:text-base">
            {columnaIzquierda.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className="hover:text-[#0097b2]"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>

        {/* =====================================================
            COLUMNA 3 - CONOCE MÁS / CONTINUACIÓN
        ====================================================== */}
        <div className="text-center">
          <div className="flex flex-col items-center gap-3 text-sm text-gray-700 sm:text-base">
            {columnaDerecha.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className="hover:text-[#0097b2]"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>

        {/* =====================================================
            COLUMNA 4 - CONTACTO
        ====================================================== */}
        <div className="text-center lg:text-left">
          <h3 className="text-sm font-bold text-slate-900 sm:text-base">
            Contacto
          </h3>

          {/* Dirección */}
          {addressText && (
            <div className="mt-4 flex items-start justify-center gap-1 text-[14px] text-gray-700 sm:text-[15px] lg:justify-start">
              <img
                src={Pin}
                alt="Ubicación"
                loading="lazy"
                className="mt-0.5 h-6 w-4.5 shrink-0"
              />

              <p>{addressText}</p>
            </div>
          )}

          {/* Teléfono */}
          {phoneNumber && (
            <div className="mt-3 flex items-center justify-center gap-2 text-sm text-gray-700 sm:text-base lg:justify-start">
              <img
                src={Phone}
                alt="Teléfono"
                loading="lazy"
                className="h-6 w-6 shrink-0"
              />

              <a
                href={phoneHref}
                className="hover:text-[#0097b2]"
              >
                {phoneNumber}
              </a>
            </div>
          )}

          {/* =====================================================
              REDES SOCIALES
          ====================================================== */}
          <div className="mt-4 flex items-center justify-center gap-4 lg:justify-start">
            {loadingContact ? (
              <span className="text-[13px] text-gray-400">
                Cargando redes...
              </span>
            ) : (
              redesSociales.map((red) => {
                const href = socialLinks[red.label];

                // Si la API no tiene URL para esa red,
                // no mostramos el ícono.
                if (!href) {
                  return null;
                }

                return (
                  <a
                    key={red.label}
                    href={href}
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
                );
              })
            )}
          </div>

          {/* =====================================================
              BOTONES
          ====================================================== */}
          <div className="mt-6 flex flex-wrap justify-center gap-2 sm:gap-3 lg:justify-start">
            <Link
              to={botonHorarios.to}
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

      {/* =====================================================
          COPYRIGHT
      ====================================================== */}
      <div className="bg-slate-600 py-3 text-center text-sm text-white">
        Todos los Derechos Reservados Parque España {year}
      </div>
    </footer>
  );
}

