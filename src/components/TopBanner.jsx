import React, { useState } from 'react';
import { Gift, X } from 'lucide-react';

const TopBanner = () => {
  const [visible, setVisible] = useState(true);

  if (!visible) return null;

  return (
    <div style={{ background: 'var(--color-secondary)', color: 'var(--color-primary)', padding: '0.75rem', position: 'relative', zIndex: 101, textAlign: 'center', fontWeight: 'bold', display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '0.5rem', flexWrap: 'wrap' }}>
      <Gift size={20} />
      <span>OFERTA: Seu primeiro agendamento ganha uma Hidratação Premium gratuita!</span>
      <a href="https://wa.me/5511991249837?text=Ol%C3%A1%21%20Vi%20a%20promo%C3%A7%C3%A3o%20e%20quero%20agendar%20meu%20primeiro%20banho%20com%20hidrata%C3%A7%C3%A3o%20gr%C3%A1tis%21" target="_blank" rel="noreferrer" style={{ textDecoration: 'underline', marginLeft: '0.5rem', background: 'var(--color-primary)', color: 'white', padding: '0.2rem 0.75rem', borderRadius: '4px' }}>
        Resgatar agora
      </a>
      <button onClick={() => setVisible(false)} style={{ background: 'transparent', border: 'none', position: 'absolute', right: '1rem', top: '50%', transform: 'translateY(-50%)', cursor: 'pointer', color: 'var(--color-primary)' }}>
        <X size={20} />
      </button>
    </div>
  );
};

export default TopBanner;
