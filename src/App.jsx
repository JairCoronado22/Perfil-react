import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import { About } from './components/About'
import { Skills } from './components/Skills'
import { Projects } from './components/Projects'
import { Contact } from './components/Contact'
import { Footer } from './components/Footer'
import { useTheme } from './hooks/useTheme'

function App() {
  const { theme, toggleTheme } = useTheme()

  return (
    <>
      <a href="#contenido" className="fixed left-4 top-[-80px] z-[120] rounded-xl bg-slate-950 px-4 py-3 text-sm font-bold text-white transition focus:top-4 dark:bg-white dark:text-slate-950">
        Saltar al contenido
      </a>
      <Navbar theme={theme} onToggleTheme={toggleTheme} />
      <main id="contenido">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </>
  )
}

export default App
