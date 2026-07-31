import Hero from '../components/DynamicHero'
import Stats from '../components/Home/2.Stats'
import Activities from '../components/DynamicActivities'
import Experience from '../components/Home/4.Experiences'
import Installations from '../components/DynamicInstallations'
import App from '../components/Home/6.App'
import ParkExperience from '../components/Home/7.ExperiencePark'



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