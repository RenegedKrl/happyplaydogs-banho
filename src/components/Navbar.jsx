import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import './Navbar.css';
import WhatsAppIcon from './WhatsAppIcon';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  return (
    <nav className="navbar glass">
      <div className="container">
        <div className="navbar-content">
          <div className="logo-container">
            <img src="/src/assets/logo/LOGO-1.png" alt="Happy Play Dogs Logo" className="logo-img" />
          </div>

          <button className="mobile-menu-btn" onClick={toggleMenu} aria-label="Toggle menu">
            {isOpen ? <X size={28} color="var(--color-primary)" /> : <Menu size={28} color="var(--color-primary)" />}
          </button>

          <ul className={`nav-links ${isOpen ? 'active' : ''}`}>
            <li><a href="#home" onClick={closeMenu}>Início</a></li>
            <li><a href="#evaluation" onClick={closeMenu}>Avaliação</a></li>
            <li><a href="#gallery" onClick={closeMenu}>Galeria</a></li>
            <li><a href="#testimonials" onClick={closeMenu}>Depoimentos</a></li>
            <li><a href="#faq" onClick={closeMenu}>FAQ</a></li>
            <li><a href="#location" onClick={closeMenu}>Contato</a></li>
            <li className="mobile-only">
              <a href="https://wa.me/5511991249837?text=Ol%C3%A1%21%20Gostaria%20de%20agendar%20um%20banho%20para%20meu%20pet." target="_blank" rel="noreferrer" className="btn btn-primary" style={{ display: 'flex', width: '100%', justifyContent: 'center', color: 'white' }}>
                <WhatsAppIcon size={18} /> Agendar Banho
              </a>
            </li>
          </ul>
          
          <a href="https://wa.me/5511991249837?text=Ol%C3%A1%21%20Gostaria%20de%20agendar%20um%20banho%20para%20meu%20pet." target="_blank" rel="noreferrer" className="btn btn-primary nav-btn desktop-only">
            <WhatsAppIcon size={18} /> Agendar Banho
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
