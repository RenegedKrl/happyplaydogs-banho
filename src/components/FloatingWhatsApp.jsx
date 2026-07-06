import React, { useState, useEffect } from 'react';
import WhatsAppIcon from './WhatsAppIcon';
import './FloatingWhatsApp.css';

const FloatingWhatsApp = () => {
  const [showMessage, setShowMessage] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowMessage(true);
    }, 10000); // 10 seconds

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="floating-whatsapp-container">
      {showMessage && (
        <div className="whatsapp-bubble animate-fade-in">
          <div className="whatsapp-bubble-close" onClick={() => setShowMessage(false)}>×</div>
          <p>Seu pet merece um dia de spa! 🐶🚿</p>
          <p style={{ fontWeight: 'bold', marginTop: '0.25rem' }}>Restam poucos horários essa semana. Agende agora!</p>
        </div>
      )}
      <a 
        href="https://wa.me/5511991249837?text=Ol%C3%A1%21%20Gostaria%20de%20saber%20se%20ainda%20tem%20hor%C3%A1rio%20para%20banho%20e%20tosa%20essa%20semana%21" 
        target="_blank" 
        rel="noreferrer" 
        className="floating-whatsapp"
        aria-label="Falar no WhatsApp"
      >
        <WhatsAppIcon size={32} />
      </a>
    </div>
  );
};

export default FloatingWhatsApp;
