import Hero from "../../components/Facilities/VirtualView/1.Hero";
import TourGallery from "../../components/Facilities/VirtualView/2.TourGallery ";
import LiveExperience from "../../components/Facilities/VirtualView/3.LiveExperience";


export default function VirtualView() {
  return (
    <main>
      <Hero />
      <TourGallery />
      <LiveExperience />
    </main>
  );
}