import React from 'react'
import "./nav.css"
import {AiOutlineHome} from 'react-icons/ai'
import {ImInfo} from 'react-icons/im'
import {MdOutlineMiscellaneousServices} from 'react-icons/md'
import {IoMdContacts} from 'react-icons/io'
import {ImBooks} from 'react-icons/im'
import { useState,useEffect } from 'react'

const Nav = () => {
  const [activeNav, setActiveNav] = useState('#home');

  useEffect(() => {
    // Function to handle scroll event
    const handleScroll = () => {
      const sections = ['#home', '#about', '#experience', '#services', '#contact'];
      const sectionOffsets = sections.map((section) => {
        const element = document.querySelector(section);
        return element ? element.offsetTop : 0;
      });

      const scrollPosition = window.scrollY + window.innerHeight / 2;

      let activeSection = '#home';
      for (let i = sectionOffsets.length - 1; i >= 0; i--) {
        if (scrollPosition >= sectionOffsets[i]) {
          activeSection = sections[i];
          break;
        }
      }

      setActiveNav(activeSection);
    };

    window.addEventListener('scroll', handleScroll);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);


  
  return (
    <nav>
      <a href="#" onClick={()=>setActiveNav('#')} className={activeNav==='#' ? 'active':''}><AiOutlineHome/></a>
      <a href="#about" onClick={()=>setActiveNav('#about')} className={activeNav==='#about' ? 'active':''} ><ImInfo/></a>
      <a href="#experience" onClick={()=>setActiveNav('#experience')} className={activeNav==='#experience' ? 'active':''}><ImBooks/></a>
      <a href="#services" onClick={()=>setActiveNav('#services')} className={activeNav==='#services' ? 'active':''}><MdOutlineMiscellaneousServices/></a>
      <a href="#contact" onClick={()=>setActiveNav('#contact')} className={activeNav==='#contact' ? 'active':''}><IoMdContacts/></a>
    </nav>
  )
}

export default Nav