
import Hero from '../components/About/1.Hero'
import StatsCounter from "../components/StatsCounter";
import Essence from "../components/About/3.Essence";
import Pillars from "../components/About/4.Pillars";
import OurHistory from "../components/About/5.OurHistory";
import MissionVision from "../components/About/6.MissionVision";
import JoinOurStory from "../components/About/7.JoinOurStory";

export default function About() {
    return (
        <main className="space-y-16 md:space-y-24">
            <Hero />
            <StatsCounter />
            <Essence />
            <Pillars />
            <OurHistory />  
            <MissionVision />
            <JoinOurStory />
        </main>
    )
}