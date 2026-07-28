import Hero from '../components/Memberships/1.Hero'
import Benefits from '../components/Memberships/2.Benefits'
import Plans from '../components/Memberships/3.Plans' 
import Steps from '../components/Memberships/4.Steps'
import JoinUs from '../components/Memberships/5.JoinUs'



export default function Home() {
  return (
    <main>
      <Hero />
      <Benefits />
      <Plans />
      <Steps />
      <JoinUs />
      
    </main>
  )
}