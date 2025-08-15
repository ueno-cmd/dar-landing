import Header from './components/Header'
import SkipLink from './components/SkipLink'
import Hero from './sections/Hero'
import Problem from './sections/Problem'
import ProgramIntro from './sections/ProgramIntro'
import ProgramComparison from './sections/ProgramComparison'
import Sessions from './sections/Sessions'
import CampSessions from './sections/CampSessions'
import Pricing from './sections/Pricing'
import ApplicationForm from './sections/ApplicationForm'

function App() {
  return (
    <div className="min-h-screen">
      <SkipLink />
      <Header />
      <main id="main-content" className="pt-20">
        <Hero />
        <Problem />
        <div id="program-intro">
          <ProgramIntro />
        </div>
        <div id="program-comparison">
          <ProgramComparison />
        </div>
        <div id="petit-dar-sessions">
          <Sessions />
        </div>
        <div id="camp-sessions">
          <CampSessions />
        </div>
        <div id="pricing">
          <Pricing />
        </div>
        <ApplicationForm />
      </main>
    </div>
  )
}

export default App