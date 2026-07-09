import React, { useState } from 'react';
import { Gift, X } from 'lucide-react';

const TopBanner = () => {
  const [visible, setVisible] = useState(true);

  if (!visible) return null;

  return (
    <div style={{ background: 'var(--color-secondary)', color: 'var(--color-primary)', padding: '0.5rem 2rem 0.5rem 0.5rem', position: 'relative', zIndex: 101, textAlign: 'center', fontWeight: 'bold', display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '0.5rem', flexWrap: 'wrap', fontSize: '0.9rem' }}>
      <Gift size={18} />
      <span>OFERTA: Primeiro agendamento tem um brinde</span>
      <a href="https://wa.me/5511991249837?text=Ol%C3%A1%21%20Vi%20a%20promo%C3%A7%C3%A3o%20no%20site%20e%20quero%20agendar%20meu%20primeiro%20banho%20e%20resgatar%20meu%20brinde%21" target="_blank" rel="noreferrer" style={{ textDecoration: 'none', marginLeft: '0.25rem', background: 'var(--color-primary)', color: 'white', padding: '0.2rem 0.6rem', borderRadius: '4px', fontSize: '0.85rem' }}>
        Resgatar
      </a>
      <button onClick={() => setVisible(false)} style={{ background: 'transparent', border: 'none', position: 'absolute', right: '0.5rem', top: '50%', transform: 'translateY(-50%)', cursor: 'pointer', color: 'var(--color-primary)' }}>
        <X size={18} />
      </button>
    </div>
  );
};

export default TopBanner;
