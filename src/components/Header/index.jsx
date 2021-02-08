import React from 'react';
import assets from '../../assets';

import './style.css'

const logo = assets.navbar.logo

const Header = () => {
  return (
    <header className="header">
      <nav className="navbar">
        <a href="#" className="logo">
          <img className="logo__img" src={logo.img} alt={logo.alt}/>
        </a>
        <ul className="main-menu">
          <li className="menu__item"><a href="#stack" className="menu__link">Stack</a></li>
          <li className="menu__item"><a href="#portfolio" className="menu__link">Portfolio</a></li>
          <li className="menu__item"><a href="#studies" className="menu__link">Studies</a></li>
          <li className="menu__item"><a href="#blog" className="menu__link">Blog</a></li>
          <li className="menu__item"><a href="#footer" className="menu__link">Contact</a></li>
        </ul>
        <a href="https://raw.githubusercontent.com/padronjosef/Portfolio-React/b20042a49ad9a43ea912c1f3e0d42ce2d512112b/src/HV-Jose-Padron.pdf" className="resume">Resume</a>
      </nav>
    </header>
  )
}

export default Header;