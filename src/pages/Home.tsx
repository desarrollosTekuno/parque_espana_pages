import Hero from '../components/Home/1.DynamicHero'
import Stats from '../components/Home/2.Stats'
import Activities from '../components/Home/3.DynamicActivities'
import Experience from '../components/Home/4.Experiences'
import Installations from '../components/Home/5.DynamicInstallations'
import App from '../components/Home/6.App'
import ParkExperience from '../components/Home/7.DynamicExperiencePark'



export default function Home() {
  return (
    <main>
      <Hero />
      <Stats />
      <Activities />
      <Experience />
      <Installations />
      <App />
      <ParkExperience />

      
    </main>
  )
}