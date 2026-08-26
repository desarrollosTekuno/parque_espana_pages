
import { useEffect, useState } from "react";
import { useLocation, Link } from "react-router-dom";

import { AnimFadeUp, AnimSlideRight } from "../Animations";

import { ContactContent as contactParque1 } from "../../constants/ParkSpain_1/Contact";
import { ContactContent as contactParque2 } from "../../constants/ParkSpain_2/Contact";

import ContactForm from "../ContactForm";
import ContactMap from "../ContactMap";

import Facebook from "@/assets/icons/Contact/Facebook.webp";
import Instagram from "@/assets/icons/Contact/Instagram.webp";
import Twitter from "@/assets/icons/Contact/X.webp";
import Youtube from "@/assets/icons/Contact/Youtube.webp";
import Phone from "@/assets/icons/Contact/Phone.webp";

import {
  getClubContactInfo,
  CLUB_IDS,
  type ClubContactInfo,
} from "../../services/api";

// =====================================================
// ÍCONOS REMOTOS
// =====================================================

const WhatsApp = "https://cdn.simpleicons.org/whatsapp/25D366";
const Threads = "https://cdn.simpleicons.org/threads/000000";

// =====================================================
// ÍCONOS DE REDES SOCIALES
// =====================================================

const SOCIAL_ICONS: Record<string, string> = {
  whatsapp: WhatsApp,
  facebook: Facebook,
  instagram: Instagram,
  twitter: Twitter,
  youtube: Youtube,
  threads: Threads,
};

// =====================================================
// NOMBRES DE REDES SOCIALES
// =====================================================

const SOCIAL_LABELS: Record<string, string> = {
  whatsapp: "WhatsApp",
  facebook: "Facebook",
  instagram: "Instagram",
  twitter: "X",
  youtube: "Youtube",
  threads: "Threads",
};

export default function Contact() {
  const location = useLocation();

  // =====================================================
  // PARQUE ACTUAL
  // =====================================================

  const isParque2 = location.pathname.startsWith(
    "/parque-espana-2",
  );

  const clubId = isParque2
    ? CLUB_IDS.PARQUE_2
    : CLUB_IDS.PARQUE_1;

  const content = isParque2
    ? contactParque2
    : contactParque1;

  const {
    title,
    description,
    map,
    buttons,
  } = content;

  // =====================================================
  // INFORMACIÓN DE CONTACTO
  // =====================================================

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

  // =====================================================
  // TELÉFONO
  // =====================================================

  const phoneNumber = contactInfo?.phone ?? "";

  const phoneHref = contactInfo?.phone
    ? `tel:${contactInfo.phone}`
    : "#";

  // =====================================================
  // WHATSAPP
  // =====================================================

  const whatsappHref = contactInfo?.social_whatsapp
    ? `https://wa.me/52${contactInfo.social_whatsapp.replace(/\D/g, "")}`
    : null;

  // =====================================================
  // LINKS DE REDES SOCIALES
  // =====================================================

  const socialLinks: Record<string, string | null> = {
    whatsapp: whatsappHref,
    facebook: contactInfo?.social_facebook ?? null,
    instagram: contactInfo?.social_instagram ?? null,
    twitter: contactInfo?.social_twitter ?? null,
    youtube: contactInfo?.social_youtube ?? null,
    threads: contactInfo?.social_threads ?? null,
  };

  return (
    <section className="bg-[#F2F4F7] py-16 lg:py-20">
      <div className="wrap-90 sm:wrap-80 lg:wrap-70">

        {/* =====================================================
            TÍTULO Y DESCRIPCIÓN
        ====================================================== */}

        <AnimFadeUp>
          <h2 className="mb-2 text-[24px] font-extrabold text-[#3C3C3C] sm:text-[30px] lg:text-[36px]">
            {title}
          </h2>

          <p className="mb-10 text-[16px] text-[#3C3C3C] sm:text-[18px]">
            {description}
          </p>
        </AnimFadeUp>

        {/* =====================================================
            FORMULARIO + MAPA
        ====================================================== */}

        <div className="grid grid-cols-1 gap-10 lg:grid-cols-2 lg:gap-12">

          {/* FORMULARIO */}
          <AnimFadeUp>
            <ContactForm />
          </AnimFadeUp>

          {/* MAPA */}
          <AnimSlideRight>
            <ContactMap
              embedUrl={map.embedUrl}
              title={map.title}
            />
          </AnimSlideRight>
        </div>

        {/* =====================================================
            TELÉFONO + REDES + BOTONES
        ====================================================== */}

        <div className="mt-8 flex flex-col items-center justify-between gap-6 sm:flex-row">

          {/* =================================================
              TELÉFONO + REDES
          ================================================== */}

          <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6">

            {/* ===============================================
                TELÉFONO
            ================================================ */}

            {phoneNumber && (
              <a
                href={phoneHref}
                className="flex items-center gap-2 text-[#3C3C3C]"
              >
                <img
                  src={Phone}
                  alt="Teléfono"
                  loading="lazy"
                  className="h-5 w-5 object-contain sm:h-6 sm:w-6 lg:h-6 lg:w-6"
                />

                <span className="text-[15px] font-semibold sm:text-[16px] lg:text-[18px]">
                  {phoneNumber}
                </span>
              </a>
            )}

            {/* ===============================================
                REDES SOCIALES
            ================================================ */}

            <div className="flex items-center gap-4 sm:gap-5">
              {loadingContact ? (
                <span className="text-[13px] text-gray-400">
                  Cargando redes...
                </span>
              ) : (
                Object.keys(SOCIAL_LABELS).map((key) => {
                  const href = socialLinks[key];

                  // Si la API no devuelve URL,
                  // no mostramos el ícono.
                  if (!href) {
                    return null;
                  }

                  return (
                    <a
                      key={key}
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={SOCIAL_LABELS[key]}
                    >
                      <img
                        src={SOCIAL_ICONS[key]}
                        alt={SOCIAL_LABELS[key]}
                        loading="lazy"
                        className="h-5 w-5 object-contain transition hover:opacity-60 sm:h-6 sm:w-6 lg:h-6 lg:w-6"
                      />
                    </a>
                  );
                })
              )}
            </div>
          </div>

          {/* =================================================
              BOTONES
          ================================================== */}

          <div className="flex flex-wrap justify-center gap-3">

            {/* HORARIOS */}
            <Link
              to={buttons.horariosLink}
              className="rounded-lg bg-[#2C4A6E] px-6 py-2.5 text-[14px] font-bold text-white transition hover:opacity-90"
            >
              {buttons.horariosLabel}
            </Link>

            {/* PARQUE */}
            <Link
              to={buttons.parqueLink}
              className="rounded-lg bg-[#4A93A8] px-6 py-2.5 text-[14px] font-bold text-white transition hover:opacity-90"
            >
              {buttons.parqueLabel}
            </Link>

          </div>
        </div>
      </div>
    </section>
  );
}

