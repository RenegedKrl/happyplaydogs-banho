import React from 'react';
import { Phone } from 'lucide-react';
import WhatsAppIcon from './WhatsAppIcon';
import './MobileBottomBar.css';

const MobileBottomBar = () => {
  return (
    <div className="mobile-bottom-bar">
      <a href="tel:+5511991249837" className="mbb-btn mbb-call">
        <Phone size={20} />
        <span>Ligar</span>
      </a>
      <a href="https://wa.me/5511991249837?text=Ol%C3%A1%21%20Gostaria%20de%20agendar%20um%20banho%20e%20tosa%20para%20o%20meu%20pet." target="_blank" rel="noreferrer" className="mbb-btn mbb-whatsapp">
        <WhatsAppIcon size={20} />
        <span>WhatsApp</span>
      </a>
    </div>
  );
};

export default MobileBottomBar;
