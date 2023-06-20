import React from 'react'
import "./contacts.css"
import {IoMdMail} from 'react-icons/io'
import {FiLinkedin} from 'react-icons/fi'
import { useRef } from 'react';
import emailjs from 'emailjs-com'


const Contacts = () => {
  const form=useRef()
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_uk7qrle', 'template_pe2nbsz', form.current, '8pqVh0QTt_5uLxkms')
    e.target.reset()
  };



  return (
    <section id="contact">
      <h5>Get in Touch</h5>
      <h2>Contact me</h2>
      <div className="container contact__container">
        <div className="contact__options">
        <article className="contact__option">
          <IoMdMail className='contact__option-icon'/>
          <h4>Email</h4>
          <h5>kartiktanwar62@gmail.com</h5>
          <a href="mailto:kartiktanwar62@gmail.com">Send a Mail</a>
        </article>
        <article className="contact__option">
          <FiLinkedin className='contact__option-icon'/>
          <h4>Message</h4>
          <h5>LinkedIN</h5>
          <a href="https://www.linkedin.com/in/kartik-tanwar-7bb727194">Send a message</a>
        </article>
        </div>
        
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name='name' placeholder='Your Full Name' required/>
          <input type="email" name="email" placeholder='Your Email' />
          <textarea name="message"  rows="7" placeholder='Your Message'></textarea>
          <button type='submit' className='btn btn-primary'>Send Message</button>
        </form>
      </div>
    </section>
  )
}

export default Contacts