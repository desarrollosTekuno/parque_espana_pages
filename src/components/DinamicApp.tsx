import { AnimFadeUp, AnimSlideRight } from "./Animations";
import AppStore from "@/assets/images/Home/App_Store.webp";
import GooglePlay from "@/assets/images/Home/Google_Play.webp";
import Mobile from "@/assets/images/Home/Mobile.webp";

const APP_STORE_LINK = "https://apps.apple.com/mx/app/tekasist/id6749398865";
const GOOGLE_PLAY_LINK = "https://play.google.com/store/apps/details?id=com.tkadmin.tekuno_check&pcampaignid=web_share";

interface AppProps {
  content: {
    title: string;
    description: string;
  };
  topSpacing?: string;
}

export default function App({ content, topSpacing = "mt-20 lg:mt-40" }: AppProps) {
  const { title, description } = content;

  return (
    <section className={`bg-header-gradient ${topSpacing} sm:py-24 lg:py-32 overflow-hidden`}>
      <div className="wrap-90 sm:wrap-80 lg:wrap-80">
        <div className="grid grid-cols-1 sm:grid-cols-[55%_45%] gap-0 sm:gap-8 items-end">
          <AnimFadeUp className="w-full text-white mb-22">
            <h2 className="font-extrabold mt-10 text-[22px] sm:text-[24px] lg:text-[32px] lg:font-extrabold mb-8 leading-tight text-center sm:text-left">
              {title}
            </h2>

            <p className="text-[16px] text-justify sm:text-[20px] lg:text-[22px] mb-12 leading-relaxed font-light sm:text-left">
              {description}
            </p>

            <div className="flex gap-4 sm:gap-6 lg:gap-8 justify-center sm:justify-start">
              <a href={GOOGLE_PLAY_LINK} target="_blank" rel="noopener noreferrer">
                <img
                  src={GooglePlay}
                  alt="Disponible en Google Play"
                  loading="lazy"
                  className="h-10 sm:h-12 lg:h-16 object-contain transition hover:opacity-60"
                />
              </a>
              <a href={APP_STORE_LINK} target="_blank" rel="noopener noreferrer">
                <img
                  src={AppStore}
                  alt="Disponible en App Store"
                  loading="lazy"
                  className="h-10 sm:h-12 lg:h-16 object-contain transition hover:opacity-60"
                />
              </a>
            </div>
          </AnimFadeUp>

          <AnimSlideRight className="flex justify-center sm:justify-end sm:-mb-25 lg:-mb-32">
            <img
              src={Mobile}
              alt="App móvil"
              loading="lazy"
              className="w-72 sm:w-full lg:w-130 max-w-full object-contain"
            />
          </AnimSlideRight>
        </div>
      </div>
    </section>
  );
}