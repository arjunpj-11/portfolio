import { useCallback, useEffect, useState } from 'react'
import { fallbackPortfolio, getPortfolio, type PortfolioPayload } from './lib/api'
import Loader from './components/Loader'
import UIEffects from './components/UIEffects'
import Nav from './components/Nav'
import Footer from './components/Footer'
import HeroSection from './sections/HeroSection'
import SkillsSection from './sections/SkillsSection'
import ExperienceSection from './sections/ExperienceSection'
import ProjectsSection from './sections/ProjectsSection'
import ContactSection from './sections/ContactSection'

export default function App() {
  const [portfolio, setPortfolio] = useState<PortfolioPayload>(fallbackPortfolio)
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    let mounted = true
    getPortfolio().then((data) => {
      if (mounted) setPortfolio(data)
    })
    return () => {
      mounted = false
    }
  }, [])

  const handleLoaderDone = useCallback(() => {
    setIsLoaded(true)
  }, [])

  return (
    <>
      {!isLoaded && <Loader onDone={handleLoaderDone} />}
      <div id="site-wrap" className={isLoaded ? 'show' : ''}>
        <a href="#main-content" className="skip-link">
          Skip to main content
        </a>
        {isLoaded && <UIEffects />}
        <Nav name={portfolio.profile.name} />
        <main id="main-content">
          <HeroSection profile={portfolio.profile} />
          <SkillsSection skills={portfolio.skills as any} techTags={portfolio.techTags} />
          <ExperienceSection experiences={portfolio.experiences as any} />
          <ProjectsSection projects={portfolio.projects as any} />
          <ContactSection profile={portfolio.profile} />
        </main>
        <Footer />
      </div>
    </>
  )
}
