import CardBadge from "../CardBadge";
import missionImg from "@/assets/images/About/mission.webp";
import visionImg from "@/assets/images/About/vision.webp";
import { AboutContent } from "../../constants/About";

export default function MissionVision() {
    const { mission, vision } = AboutContent.missionVision;
    return (
        <section className="px-10 py-26 md:px-10 lg:wrap-80">

            <div className="mx-auto mt-40 flex max-w-[1400px] flex-col items-start gap-8 md:flex-row">
                <CardBadge
                  image={missionImg}
                  imagePosition="top-left"
                  title={mission.title}
                  text={mission.text}
                />
                <CardBadge
                  image={visionImg}
                  imagePosition="bottom-right"
                  title={vision.title}
                  text={vision.text}
                  backgroundColor="#FAFAFA"
                />
            </div>

        </section>
    );
}