import { useLocation } from "react-router-dom";
import { PrivacyNoticeContent as privacyParque1 } from "../constants/ParkSpain_1/PrivacyNotice";
import { PrivacyNoticeContent as privacyParque2 } from "../constants/ParkSpain_2/PrivacyNotice";

export default function PrivacyNotice() {
  const location = useLocation();
  const isParque2 = location.pathname.startsWith("/parque-espana-2");

  const content = isParque2 ? privacyParque2 : privacyParque1;

  return (
    <section className="bg-[#F2F4F7] py-12 lg:py-16">
      <div className="wrap-90 sm:wrap-80 lg:wrap-90">
        <div className="flex flex-col gap-4 text-left text-[15px] leading-relaxed text-[#3C3C3C] sm:text-[16px]">
          {content.sections.map((section, i) => (
            <div key={i} className="text-left">
              <p className="whitespace-pre-line text-left font-bold">
                {section.heading}
              </p>

              {section.paragraphs?.map((paragraph, j) => (
                <p key={`p-${j}`} className="mt-2 text-justify">
                  {paragraph}
                </p>
              ))}

              {section.list && (
                <ul className="mt-2 list-disc pl-5 text-justify">
                  {section.list.map((item, k) => (
                    <li key={`li-${k}`}>{item}</li>
                  ))}
                </ul>
              )}

              {section.paragraphsAfterList?.map((paragraph, j) => (
                <p key={`pal-${j}`} className="mt-2 text-justify">
                  {paragraph}
                </p>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}