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

export default function Contact() {
  const location = useLocation();

  const isParque2 = location.pathname.startsWith("/parque-espana-2");
  const content = isParque2 ? contactParque2 : contactParque1;

  const { title, description, phone, map, buttons } = content;

  // Casting explícito para indicarle a TS que cualquiera de las redes es opcional
  const social = content.social as {
    facebook?: string;
    instagram?: string;
    twitter?: string;
    youtube?: string;
  };

  return (
    <section className="bg-[#F2F4F7] py-16 lg:py-20">
      <div className="wrap-90 sm:wrap-80 lg:wrap-70">
        <AnimFadeUp>
          <h2 className="mb-2 font-extrabold text-[#3C3C3C] text-[24px] sm:text-[30px] lg:text-[36px]">
            {title}
          </h2>
          <p className="mb-10 text-[16px] text-[#3C3C3C] sm:text-[18px]">
            {description}
          </p>
        </AnimFadeUp>

        <div className="grid grid-cols-1 gap-10 lg:grid-cols-2 lg:gap-12">
          <AnimFadeUp>
            <ContactForm />
          </AnimFadeUp>

          <AnimSlideRight>
            <ContactMap embedUrl={map.embedUrl} title={map.title} />
          </AnimSlideRight>
        </div>

        <div className="mt-8 flex flex-col items-center justify-between gap-6 sm:flex-row">
          <div className="flex items-center gap-6">
            <a
              href={`tel:${phone}`}
              className="flex items-center gap-2 text-[#3C3C3C]"
            >
              <img
                src={Phone}
                alt="Teléfono"
                className="h-5 w-5 object-contain"
              />
              <span className="text-[15px] sm:text-[16px]">{phone}</span>
            </a>

            <div className="flex items-center gap-4">
              {social.facebook && (
                <a href={social.facebook} target="_blank" rel="noopener noreferrer">
                  <img src={Facebook} alt="Facebook" className="h-5 w-5 object-contain transition hover:opacity-60" />
                </a>
              )}
              {social.instagram && (
                <a href={social.instagram} target="_blank" rel="noopener noreferrer">
                  <img src={Instagram} alt="Instagram" className="h-5 w-5 object-contain transition hover:opacity-60" />
                </a>
              )}
              {social.twitter && (
                <a href={social.twitter} target="_blank" rel="noopener noreferrer">
                  <img src={Twitter} alt="Twitter" className="h-5 w-5 object-contain transition hover:opacity-60" />
                </a>
              )}
              {social.youtube && (
                <a href={social.youtube} target="_blank" rel="noopener noreferrer">
                  <img src={Youtube} alt="Youtube" className="h-5 w-5 object-contain transition hover:opacity-60" />
                </a>
              )}
            </div>
          </div>

          <div className="flex gap-3">
            <Link
              to={buttons.horariosLink}
              className="rounded-lg bg-[#2C4A6E] px-6 py-2.5 text-[14px] font-bold text-white transition hover:opacity-90"
            >
              {buttons.horariosLabel}
            </Link>
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