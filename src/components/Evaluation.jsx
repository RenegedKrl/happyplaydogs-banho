import React from 'react';
import { ClipboardCheck, ShowerHead, Scissors } from 'lucide-react';
import './Evaluation.css';
import WhatsAppIcon from './WhatsAppIcon';

const Evaluation = () => {
  const plans = [
    {
      id: 1,
      title: "Banho Premium",
      icon: <ShowerHead size={32} className="text-primary" />,
      features: ["Limpeza profunda", "Hidratação básica", "Corte de unhas", "Limpeza de ouvidos", "Perfume"],
      popular: false
    },
    {
      id: 2,
      title: "Banho & Tosa Completa",
      icon: <Scissors size={32} className="text-white" />,
      features: ["Banho Premium", "Tosa na máquina/tesoura", "Tosa higiênica", "Desembolo leve", "Laço ou Gravata"],
      popular: true
    },
    {
      id: 3,
      title: "Pacote Mensal",
      icon: <ClipboardCheck size={32} className="text-primary" />,
      features: ["4 Banhos Premium", "1 Tosa Higiênica", "Hidratação Profunda", "Prioridade de agendamento"],
      popular: false
    }
  ];

  const handleWhatsApp = (plan) => {
    const message = `Olá! Gostaria de saber mais sobre o plano ${plan}.`;
    const url = `https://wa.me/5511991249837?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  };

  return (
    <section id="evaluation" className="section bg-bg">
      <div className="container">
        <h2 className="section-title">SERVIÇOS</h2>
        <p className="section-subtitle">
          Oferecemos o cuidado perfeito para cada necessidade do seu pet. Escolha o serviço ideal!
        </p>
        
        <div className="grid md:grid-cols-3 gap-8">
          {plans.map(plan => (
            <div key={plan.id} className={`eval-card ${plan.popular ? 'popular' : ''}`}>
              {plan.popular && <div className="popular-badge bg-accent">Mais Escolhido</div>}
              <div className="eval-icon-wrapper">
                {plan.icon}
              </div>
              <h3>{plan.title}</h3>
              <ul className="eval-features">
                {plan.features.map((feature, index) => (
                  <li key={index}>
                    <ClipboardCheck size={16} className={plan.popular ? "text-white" : "text-primary"} />
                    {feature}
                  </li>
                ))}
              </ul>
              <button 
                onClick={() => handleWhatsApp(plan.title)}
                className={`btn w-full ${plan.popular ? 'bg-white text-primary' : 'btn-primary'}`}
                style={plan.popular ? {color: 'var(--color-primary)'} : {}}
              >
                <WhatsAppIcon size={18} /> Agendar
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Evaluation;
