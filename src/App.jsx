import Nav from './components/Nav.jsx'
import Hero from './components/Hero.jsx'
import Stats from './components/Stats.jsx'
import Features from './components/Features.jsx'
import Deploy from './components/Deploy.jsx'
import Contact from './components/Contact.jsx'
import Footer from './components/Footer.jsx'
import useRevealOnScroll from './hooks/useRevealOnScroll.js'

export default function App() {
  useRevealOnScroll()

  return (
    <>
      <div className="backdrop" aria-hidden="true">
        <div className="orb one"></div>
        <div className="orb two"></div>
        <div className="orb three"></div>
      </div>

      <Nav />

      <main className="container">
        <Hero />
        <Stats />
        <Features />
        <Deploy />
        <Contact />
      </main>

      <Footer />
    </>
  )
}
