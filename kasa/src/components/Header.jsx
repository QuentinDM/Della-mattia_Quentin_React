import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../assets/LOGO.svg';
import '../style/Header.scss';

function Header() {
    // state (data)
    
    //comportements

    //RENDER 
    return (
      <header className="header">
        <img src={Logo} alt="Logo" className="logo" />
        <nav>
          <ul className="nav-list">
          <li><Link to="/">Accueil</Link></li>
          <li><Link to="/about">À Propos</Link></li>
          </ul>
        </nav>
      </header>
    );
  }

export default Header;