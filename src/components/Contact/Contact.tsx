import { AnimFadeUp, AnimSlideRight } from "../Animations";
import { ContactContent } from "../../constants/ParkSpain_1/Contact";
import ContactForm from "../ContactForm";
import ContactMap from "../ContactMap";
import Facebook from "@/assets/icons/Contact/Facebook.webp";
import Instagram from "@/assets/icons/Contact/Instagram.webp";
import Twitter from "@/assets/icons/Contact/X.webp";
import Youtube from "@/assets/icons/Contact/Youtube.webp";
import Phone from "@/assets/icons/Contact/Phone.webp";

// TODO: reemplaza con los links reales de Parque España Puebla
const FACEBOOK_LINK = "https://www.facebook.com/";
const INSTAGRAM_LINK = "https://www.instagram.com/";
const TWITTER_LINK = "https://x.com/";
const YOUTUBE_LINK = "https://www.youtube.com/";

const MAP_EMBED_URL =
  "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3771.741456902316!2d-98.19913162410413!3d19.031111082164266!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85cfc0eb2037ade5%3A0x4e3bc4dfa693682a!2sAv.%2025%20Ote.%201001%2C%20Mirador%2C%2072530%20Heroica%20Puebla%20de%20Zaragoza%2C%20Pue.!5e0!3m2!1ses-419!2smx!4v1785360322378!5m2!1ses-419!2smx";

export default function Contact() {
  const { title, description, phone, buttons } = ContactContent;

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
            <ContactMap embedUrl={MAP_EMBED_URL} title="Ubicación Parque España" />
          </AnimSlideRight>
        </div>

        <div className="mt-8 flex flex-col items-center justify-between gap-6 sm:flex-row">
          <div className="flex items-center gap-6">
            <a href={`tel:${phone}`} className="flex items-center gap-2 text-[#3C3C3C]">
              <img src={Phone} alt="Teléfono" className="h-5 w-5 object-contain" />
              <span className="text-[15px] sm:text-[16px]">{phone}</span>
            </a>

            <div className="flex items-center gap-4">
              <a href={FACEBOOK_LINK} target="_blank" rel="noopener noreferrer">
                <img
                  src={Facebook}
                  alt="Facebook"
                  className="h-5 w-5 object-contain transition hover:opacity-60"
                />
              </a>
              <a href={INSTAGRAM_LINK} target="_blank" rel="noopener noreferrer">
                <img
                  src={Instagram}
                  alt="Instagram"
                  className="h-5 w-5 object-contain transition hover:opacity-60"
                />
              </a>
              <a href={TWITTER_LINK} target="_blank" rel="noopener noreferrer">
                <img
                  src={Twitter}
                  alt="Twitter"
                  className="h-5 w-5 object-contain transition hover:opacity-60"
                />
              </a>
              <a href={YOUTUBE_LINK} target="_blank" rel="noopener noreferrer">
                <img
                  src={Youtube}
                  alt="Youtube"
                  className="h-5 w-5 object-contain transition hover:opacity-60"
                />
              </a>
            </div>
          </div>

          <div className="flex gap-3">
            <a href={buttons.horariosLink} className="rounded-lg bg-[#2C4A6E] px-6 py-2.5 text-[14px] font-bold text-white transition hover:opacity-90">
              {buttons.horariosLabel}
            </a>
            <a href={buttons.parqueLink} className="rounded-lg bg-[#4A93A8] px-6 py-2.5 text-[14px] font-bold text-white transition hover:opacity-90">
              {buttons.parqueLabel}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}