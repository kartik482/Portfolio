import React from 'react'
import './about.css'
import ME from "../../assets/he.jpg"
import {BsFillBuildingsFill} from 'react-icons/bs'
import {BsFillFolderFill} from 'react-icons/bs'
import {IoIosPeople} from 'react-icons/io'
import { useState, useEffect } from 'react'

const about = () => {
  return (
    <section id="about">
      <h5>Get To Know</h5>
      <h2>About Me</h2>
      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="about_image" />
          </div>

        </div>
        <div className="about__content">
          <div className="about__cards">
            <article className='about__card'>
              <BsFillBuildingsFill className='about__icon'/>
              <h5>Experience</h5>
              <small>0-1 yr Experience</small>
            </article>
            <article className='about__card'>
              <IoIosPeople className='about__icon'/>
              <h5>Qualification</h5>
              <small>B.tech</small><br />
              <small> Mechanical and Automation</small>
            </article>
            <article  className='about__card'>
              <BsFillFolderFill className='about__icon'/>
              <h5>Projects</h5>
              <small>4 completed projects</small>
            </article>
          </div>
          <p>I'm a passionate coding enthusiast who thrives on the challenges of problem-solving and project development. My expertise lies in utilizing technologies like Django, Python and React.js to build robust and efficient web applications. I find joy in exploring the possibilities of Python and Data Analysis.</p>
          <a href="#contact" className='btn btn-primary'> Let's Talk</a>
        </div>
      </div>
    </section>
  )
}

export default about