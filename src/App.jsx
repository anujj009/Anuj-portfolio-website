import { useState } from 'react'
import Header from './components/Header';
import './App.css'
import Banner from './components/Banner';
import About from './components/About';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Footer from './components/Footer';
import Contact from './components/Contact';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>

      <Header />
      <Banner />
      <About />
      <Projects/>
      <Skills />
      <Contact />
      <Footer />
     

    </>
  )
}

export default App
