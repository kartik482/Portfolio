import React from 'react'
import "./services.css"
import {BsCheckLg} from 'react-icons/bs'

const services = () => {
  return (
    <section id='services'>
      <h5>What I Offer</h5>
      <h2>Services</h2>
      <div className="container services__container">
        <article className='services'>
          <div className="services__head">
            <h3>Basic Skills</h3>
          </div>
          <ul className='services__list'>
            <li>
            <BsCheckLg className='services__list-icon'/>
            <p>C++/C</p>
            </li>
            <li>
            <BsCheckLg className='services__list-icon'/>
            <p>Python</p>
            </li>
            <li>
            <BsCheckLg className='services__list-icon'/>
            <p>JavaScript</p>
            </li>
            {/* <li>
            <BsCheckLg className='services__list-icon'/>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. </p>
            </li> */}
            
          </ul>
        </article>

        
        <article className='services'>
          <div className="services__head">
            <h3>Web Development</h3>
          </div>
          <ul className='services__list'>
            <li>
            <BsCheckLg className='services__list-icon'/>
            <p>Backend With Dajngo</p>
            </li>
            <li>
            <BsCheckLg className='services__list-icon'/>
            <p>FrontEnd With HTML,CSS,JS </p>
            </li>
            <li>
            <BsCheckLg className='services__list-icon'/>
            <p>Django Rest API</p>
            </li>
            <li>
            <BsCheckLg className='services__list-icon'/>
            <p>React</p>
            </li>
          </ul>
        </article>


        <article className='services'>
          <div className="services__head">
            <h3>Data Analysis</h3>
          </div>
          <ul className='services__list'>
            <li>
            <BsCheckLg className='services__list-icon'/>
            <p>Pandas,MatplotLib,Numpy</p>
            </li>
            <li>
            <BsCheckLg className='services__list-icon'/>
            <p>Kaggle</p>
            </li>
            <li>
            <BsCheckLg className='services__list-icon'/>
            <p>Jupyter Notebook</p>
            </li>
            <li>
            <BsCheckLg className='services__list-icon'/>
            <p>Data Visualisation</p>
            </li>
            
          </ul>
        </article>
      </div>
    </section>
  )
}

export default services