import React from 'react';
import WhatsAppIcon from './WhatsAppIcon';
import logoImg from '../assets/logo/LOGO-1.png';

const Footer = () => {
  return (
    <footer style={{ background: 'var(--color-text)', color: 'white', padding: '3rem 0', textAlign: 'center' }}>
      <div className="container">
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginBottom: '1rem' }}>
          <img src={logoImg} alt="Happy Play Dogs" style={{ height: '60px' }} />
        </div>
        <p style={{ color: '#9CA3AF', marginBottom: '1.5rem' }}>
          O melhor Banho e Tosa para o seu melhor amigo.
        </p>

        <div style={{ display: 'flex', justifyContent: 'center', gap: '1.5rem', marginBottom: '2rem' }}>
          <a href="https://wa.me/5511991249837?text=Ol%C3%A1%21%20Estava%20no%20site%20da%20Happy%20Play%20Dogs%20e%20gostaria%20de%20tirar%20uma%20d%C3%BAvida." target="_blank" rel="noreferrer" style={{ color: 'white', transition: 'color 0.2s' }} onMouseOver={e => e.currentTarget.style.color='var(--color-primary)'} onMouseOut={e => e.currentTarget.style.color='white'} title="WhatsApp">
            <WhatsAppIcon size={32} />
          </a>
          <a href="https://www.instagram.com/happyplaydogs/" target="_blank" rel="noreferrer" style={{ color: 'white', transition: 'color 0.2s' }} onMouseOver={e => e.currentTarget.style.color='var(--color-primary)'} onMouseOut={e => e.currentTarget.style.color='white'} title="Instagram">
            <svg xmlns="http://www.3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
          </a>
        </div>

        <p style={{ color: '#6B7280', fontSize: '0.875rem' }}>
          &copy; {new Date().getFullYear()} Happy Play Dogs. Todos os direitos reservados.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
