import { useLocation } from "react-router-dom";
import Hero from "../components/Memberships/1.DynamicHero";
import Benefits from "../components/Memberships/2.Benefits";
import Plans from "../components/Memberships/3.DynamicPlans";
import Steps from "../components/Memberships/4.Steps";
import JoinUs from "../components/Memberships/5.JoinUs";

export default function Home() {
  const location = useLocation();


  const isParque2 = location.pathname.startsWith("/parque-espana-2");

  return (
    <main>
      <Hero />
      <Benefits />
      <Plans />

   
      {!isParque2 && (
        <>
          <Steps />
          <JoinUs />
        </>
      )}
    </main>
  );
}