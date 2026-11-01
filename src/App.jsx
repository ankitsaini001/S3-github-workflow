import Nav from './components/Nav.jsx'
import Hero from './components/Hero.jsx'
import Topics from './components/Topics.jsx'
import Videos from './components/Videos.jsx'
import Community from './components/Community.jsx'
import About from './components/About.jsx'
import Footer from './components/Footer.jsx'
import useRevealOnScroll from './hooks/useRevealOnScroll.js'

export default function App() {
  useRevealOnScroll()

  return (
    <>
      <div className="backdrop" aria-hidden="true">
        <div className="orb one"></div>
        <div className="orb two"></div>
      </div>

      <Nav />

      <main className="container">
        <Hero />
        <Topics />
        <Videos />
        <Community />
        <About />
      </main>

      <Footer />
    </>
  )
}
