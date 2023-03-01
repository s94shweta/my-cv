import React from 'react';
import gtp3Logo from '../../assets/logo.svg';
import './footer.css'

const Footer = () => {
  return (
    <div className="mycv__footer section__padding">
<div className="mycv__footer-heading">
  <h1 className="gradient__text">
  Do you want to step in to the future before others
  </h1>
</div>
<div className="mycv__footer-btn">
  <p>Request Early Access</p>
</div>
<div  className="mycv__footer-links">
  <div className="mycv__footer-links_logo">
    <img src={gtp3Logo} alt="logo"/>
    <p>Crechterwoord K12 182 DK Alknjkcb, All Rights Reserved</p>
  
  </div>
  <div  className="mycv__footer-links_div">
    <h4>Links</h4>
    <p>Overons</p>
    <p>Social Media</p>
    <p>Countrie</p>
    <p>Contacts</p>

  </div>
  <div  className="mycv__footer-links_div">
    <h4>Company</h4>
    <p>Terms & Condition</p>
    <p>Privacy</p>
    <p>Contact</p>

  </div>
  <div  className="mycv__footer-links_div">
    <h4>Get i Touch</h4>
    <p>Crechterwoord K12 182 DK Alknjkcb</p>
    <p>0475-55-782</p>
    <p>Contacts</p>

  </div>
</div>
<div className="mycv__footer-copyright">
<p>© 2021 GPT-3. All rights reserved.</p>
</div>

    </div>
  )
}

export default Footer