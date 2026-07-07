import React from 'react';
import { Store, Scissors, Dog, Hotel, Stethoscope } from 'lucide-react';
import './About.css';

const About = () => {
  const services = [
    {
      id: 1,
      icon: <Store size={40} className="text-secondary" />,
      title: "Loja Pet",
      desc: "Diversos produtos para cães e gatos, sempre buscando oferecer qualidade e as melhores opções para os tutores."
    },
    {
      id: 2,
      icon: <Scissors size={40} className="text-primary" />,
      title: "Centro Estético",
      desc: "Banho, tosas específicas de cada raça, hidratações e cronogramas de revitalização da pelagem com produtos de alta qualidade."
    },
    {
      id: 3,
      icon: <Dog size={40} className="text-tertiary" style={{ color: 'var(--color-tertiary)' }} />,
      title: "Creche",
      desc: "Para cães de porte pequeno, com rotina diária de atividades, socialização e enriquecimento ambiental com acompanhamento de monitores."
    },
    {
      id: 4,
      icon: <Hotel size={40} className="text-accent" />,
      title: "Hotel para Cães",
      desc: "Hospedagem garantindo conforto, segurança e muito carinho durante toda a estadia do seu pet."
    },
    {
      id: 5,
      icon: <Stethoscope size={40} className="text-primary" />,
      title: "Atendimento Veterinário",
      desc: "Consultas, vacinação e acompanhamento da saúde dos pets, com atendimento particular e convênio."
    }
  ];

  return (
    <section id="about" className="section bg-surface">
      <div className="container">
        <div className="about-header animate-fade-in">
          <h2 className="section-title">O que é a <span className="text-primary">Happy Play Dogs</span>?</h2>
          <p className="about-intro">
            A Happy Play Dogs é um espaço completo voltado ao bem-estar e à qualidade de vida dos pets, oferecemos diversos serviços em um só lugar.
          </p>
        </div>

        <div className="services-grid">
          {services.map(service => (
            <div key={service.id} className="service-card glass">
              <div className="service-icon">
                {service.icon}
              </div>
              <h3 className="service-title">{service.title}</h3>
              <p className="service-desc">{service.desc}</p>
            </div>
          ))}
        </div>

        <div className="about-footer animate-fade-in">
          <div className="purpose-box">
            <h3 className="purpose-title text-tertiary" style={{ color: 'var(--color-tertiary)', fontSize: '1.5rem', marginBottom: '1rem' }}>Nosso Propósito</h3>
            <p className="purpose-text">
              Oferecer uma experiência completa para os tutores e seus pets, reunindo <strong>cuidado, saúde e diversão em um único lugar</strong>.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
