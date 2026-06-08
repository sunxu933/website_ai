import { useTheme } from "./hooks/useTheme"
import Navbar from "./components/Navbar"
import HeroSection from "./components/HeroSection"
import NewsSection from "./components/NewsSection"
import ModelRanking from "./components/ModelRanking"
import ToolDirectory from "./components/ToolDirectory"
import TutorialSection from "./components/TutorialSection"
import Footer from "./components/Footer"

export default function App() {
  const { theme, toggleTheme } = useTheme()

  return (
    <div className="min-h-screen bg-white dark:bg-gray-950 text-gray-900 dark:text-gray-100">
      <Navbar theme={theme} toggleTheme={toggleTheme} />
      <main>
        <HeroSection />
        <NewsSection />
        <ModelRanking />
        <ToolDirectory />
        <TutorialSection />
      </main>
      <Footer />
    </div>
  )
}
