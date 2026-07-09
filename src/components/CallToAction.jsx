import React from 'react';
import WhatsAppIcon from './WhatsAppIcon';

const CallToAction = () => {
  return (
    <section className="section" style={{ background: 'var(--color-primary-light)', textAlign: 'center', position: 'relative', overflow: 'hidden' }}>
      <div className="container" style={{ position: 'relative', zIndex: 2 }}>
        <h2 className="section-title text-primary" style={{ marginBottom: '1.5rem', fontSize: '2.5rem' }}>Pronto para ver o seu pet ainda mais feliz?</h2>
        <p className="section-subtitle" style={{ color: 'var(--color-text)', maxWidth: '700px', margin: '0 auto 2.5rem auto', fontSize: '1.25rem' }}>
          Nossa agenda enche rápido! Garanta hoje mesmo um horário exclusivo para o seu melhor amigo receber todo o cuidado, carinho e higiene que ele merece.
        </p>
        <a 
          href="https://wa.me/5511991249837?text=Ol%C3%A1%21%20Quero%20ver%20meu%20pet%20ainda%20mais%20feliz%21%20Gostaria%20de%20agendar%20o%20Banho%20e%20Tosa." 
          target="_blank" 
          rel="noreferrer" 
          className="btn btn-primary"
          style={{ fontSize: '1.125rem', padding: '1rem 2.5rem', boxShadow: 'var(--shadow-float)' }}
        >
          <WhatsAppIcon size={24} /> Agendar Agora pelo WhatsApp
        </a>
      </div>
      
      {/* Background decoration */}
      <div style={{ position: 'absolute', top: '-10%', right: '-5%', width: '300px', height: '300px', background: 'var(--color-secondary)', borderRadius: '50%', opacity: 0.1, zIndex: 1 }}></div>
      <div style={{ position: 'absolute', bottom: '-20%', left: '-10%', width: '400px', height: '400px', background: 'var(--color-primary)', borderRadius: '50%', opacity: 0.05, zIndex: 1 }}></div>
    </section>
  );
};

export default CallToAction;
