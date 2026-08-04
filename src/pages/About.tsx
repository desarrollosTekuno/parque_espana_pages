import { useLocation } from "react-router-dom";

import Hero from '../components/About/1.Hero';
import Essence from "../components/About/2.DynamicEssence";
import Pillars from "../components/About/3.Pillars";
import OurHistory from "../components/About/4.DynamicOurHistory";
import MissionVision from "../components/About/5.MissionVision";
import GuideLines from "../components/About/5.GuideLines";
import JoinOurStory from "../components/About/6.DynamicJoinOurStory";

export default function About() {
  const location = useLocation();
  const isParque2 = location.pathname.startsWith("/parque-espana-2");

  return (
    <main className="space-y-16 md:space-y-24">
      <Hero />
      <Essence />
      <Pillars />
      <OurHistory />  
      {isParque2 ? <GuideLines /> : <MissionVision />}
      <JoinOurStory />
    </main>
  );
}