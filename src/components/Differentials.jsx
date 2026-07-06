import React from 'react';
import { Truck, ThermometerSun, Bath, Video } from 'lucide-react';

const Differentials = () => {
  const items = [
    {
      icon: <Bath size={40} />,
      title: "Toalhas Esterilizadas",
      desc: "Higiene máxima! Cada pet recebe uma toalha limpa, macia e esterilizada para uso individual."
    },
    {
      icon: <ThermometerSun size={40} />,
      title: "Água na Temperatura Ideal",
      desc: "Zero choque térmico. Controlamos a água para proporcionar o máximo de conforto."
    },
    {
      icon: <Truck size={40} />,
      title: "Táxi Dog",
      desc: "Sem tempo? Nós buscamos e levamos seu pet com total segurança e comodidade."
    },
    {
      icon: <Video size={40} />,
      title: "Câmeras de Segurança",
      desc: "Acompanhe tudo. Seu pet não fica fora da sua vista um segundo sequer."
    }
  ];

  return (
    <section className="section bg-primary text-white">
      <div className="container">
        <h2 className="section-title text-white" style={{ color: 'white' }}>Seu pet tratado como realeza 👑</h2>
        <p className="section-subtitle text-white" style={{ color: 'rgba(255,255,255,0.8)' }}>
          Entendemos os seus medos. Por isso, criamos um ambiente 100% focado no bem-estar animal.
        </p>
        
        <div className="grid md:grid-cols-4 gap-8" style={{ marginTop: '3rem' }}>
          {items.map((item, idx) => (
            <div key={idx} style={{ textAlign: 'center' }}>
              <div style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', width: '80px', height: '80px', borderRadius: '50%', background: 'rgba(255,255,255,0.1)', marginBottom: '1.5rem', color: 'var(--color-secondary)' }}>
                {item.icon}
              </div>
              <h3 style={{ fontSize: '1.25rem', marginBottom: '1rem', color: 'white' }}>{item.title}</h3>
              <p style={{ color: 'rgba(255,255,255,0.8)', fontSize: '0.95rem' }}>{item.desc}</p>
            </div>
          ))}
        </div>
        
        <div style={{ textAlign: 'center', marginTop: '4rem' }}>
          <a 
            href="https://wa.me/5511991249837?text=Ol%C3%A1%21%20Quero%20agendar%20um%20banho%20com%20total%20seguran%C3%A7a%20para%20o%20meu%20pet." 
            target="_blank" 
            rel="noreferrer" 
            className="btn btn-secondary" 
            style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', fontSize: '1.125rem', padding: '1rem 2.5rem', fontWeight: 'bold' }}
          >
            Garantir Vaga Agora
          </a>
        </div>
      </div>
    </section>
  );
};

export default Differentials;
