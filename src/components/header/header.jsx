import React from 'react'
import './header.css'
import CTA from './CTA'
import Headersocial from './headersocial'
import ME from "../../assets/avatar.png"

const Header = () => {
  return (
    <header>
      <div className="container header__container">
      <h5>Hello</h5>
      <h1>I am Kartik Tanwar</h1>
      <h5 className="text-light">FullStack Developer</h5>
      <CTA/>
      <Headersocial/>
      <div className="me">
        <img src={ME} alt="" />
      </div>
      <a href="#contact" className='scroll__down'>scroll down</a>
      
      </div>
      
      
    </header>
  )
}

export default Header