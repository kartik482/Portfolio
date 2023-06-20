import React from 'react'
import Header from './components/header/header'
import Nav from './components/nav/nav'
import Services from './components/services/services'
import Testimonials from './components/testimonials/testimonials'
import Portfolio from './components/portfolio/portfolio'
import Contacts from './components/contacts/contacts'
import Footer from './components/footer/footer'
import About from './components/about/about'
import Experience from './components/experience/experience'
const App = () => {
  return (
    <>
      <Header />
      <Nav />
      <About />
      <Experience />
      <Services />
      <Portfolio />
      <Testimonials />
      <Contacts />
      <Footer />
      
    </>
  )
}

export default App