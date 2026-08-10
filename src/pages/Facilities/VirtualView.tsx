import Hero from "../../components/Facilities/VirtualView/1.Hero";
import TourGallery from "../../components/Facilities/VirtualView/2.DynamicTourGallery ";
import LiveExperience from "../../components/Facilities/VirtualView/3.DynamicLiveExperience";


export default function VirtualView() {
  return (
    <main>
      <Hero />
      <TourGallery />
      <LiveExperience />
    </main>
  );
}