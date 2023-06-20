import React from 'react'
import './footer.css'
import {AiFillLinkedin} from 'react-icons/ai'
import {BsGithub} from 'react-icons/bs'
import {SiLeetcode} from 'react-icons/si'

const footer = () => {
  return (
    <footer>
      <a href="#" className='footer__logo'>Kartik Tanwar</a>
      <ul className='permalinks'>
        <li><a href="#">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#services">Services</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
        <li><a href="#testimonial">Testimonials</a></li>
        <li><a href="#contact">Contact</a></li>
        
      </ul>
      <div className="footer__socials">
        <a href="https://www.linkedin.com/in/kartik-tanwar-7bb727194" target='_blank'><AiFillLinkedin/></a>
        <a href="https://github.com/kartik482" target='_blank'><BsGithub/></a>
        <a href="https://leetcode.com/problemset/all/" target='_blank'><SiLeetcode/></a>
      </div>
      <div className="footer__message">
        <small>Made With React</small>
      </div>
    </footer>
  )
}

export default footer