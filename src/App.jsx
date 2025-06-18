import './App.css'
import AboutMeMain from './components/aboutMeSection/AboutMeMain'
import ContactMeMain from './components/contactMeSection/ContactMeMain'
import ExperienceMain from './components/experienceSection/ExperienceMain'
import FooterMain from './components/footerSection/FooterMain'
import HeroGradient from './components/HeroSection/HeroGradient'
import HeroMain from './components/HeroSection/HeroMain'
import NavbarMain from './components/navbar/NavbarMain'
import ProjectMain from './components/projectsSection/ProjectMain'
import SkillsMain from './components/skillsSection/SkillsMain'

function App() {
  return ( 
    <main  className="font-body">
      <NavbarMain />
      <HeroMain />
      <HeroGradient />
      <AboutMeMain />
      <SkillsMain />
      <ExperienceMain />
      <ProjectMain />
      <ContactMeMain />
      <FooterMain />
    </main>
 )
}
export default App
