import CardBadge from "../CardBadge";
import missionImg from "@/assets/images/About/mission.webp";
import visionImg from "@/assets/images/About/vision.webp";
import { AboutContent } from "../../constants/ParkSpain_1/About";

export default function MissionVision() {
    const { mission, vision } = AboutContent.missionVision;
    return (
        <section className="px-10 sm:px-10 lg:mt-85 lg:wrap-80">

            <div className="mx-auto  flex max-w-[1400px] flex-col items-start gap-8 sm:flex-row">
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