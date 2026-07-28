import Hero from '../components/Home/1.Hero'
import Stats from '../components/Home/2.Stats'
import Activities from '../components/Home/3.Activities'
import Experience from '../components/Home/4.Experiences'
import Installations from '../components/Home/5.Installations'
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