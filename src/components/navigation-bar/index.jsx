import React from 'react'
import "./style.scss"
import logo from "../../images/PLogo.png"
import CallToAction from '../shared/CallToAction'
import { scrollToSection } from "../utils/helper";
import SocialIcon from "../footer/social-icon";
import {FaGithub} from "react-icons/fa";



const Navigation = () => {
  return (
    <div className='top-navigation-bar'>
      <div className="app-logo">
        <img src={logo} alt="logo" />
      </div>

      <div className='navigation'>
        <span className="social-icons"><SocialIcon color="#0D2636" icon={<FaGithub />} link="https://github.com/PrashantB307" /></span>          
        <span className='navigation-item' onClick={() => scrollToSection("skills")}>Skills</span>
        <span className='navigation-item' onClick={() => scrollToSection("portfolio")}>Projects</span>
        <span className='navigation-item' onClick={() => scrollToSection("blogs")}>Blogs & Articles</span>
        <CallToAction text="Contact Me"  action={() => scrollToSection("contact")}/>
      </div>
    </div>
  )
}

export default Navigation;