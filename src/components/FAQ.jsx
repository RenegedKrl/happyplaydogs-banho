import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import './FAQ.css';

const FAQ = () => {
  const [openId, setOpenId] = useState(null);

  const faqs = [
    {
      id: 1,
      question: "Vocês aceitam todas as raças e portes?",
      answer: "Sim! Nossa equipe é treinada para atender cães de todos os portes e raças. Temos estrutura adequada para receber desde os mais pequeninos até os grandalhões."
    },
    {
      id: 2,
      question: "Preciso agendar o banho com antecedência?",
      answer: "Recomendamos o agendamento prévio para garantir o melhor horário para você e seu pet. No entanto, também aceitamos encaixes dependendo da nossa disponibilidade no dia."
    },
    {
      id: 3,
      question: "Meu cachorro é muito agitado/medroso. Como vocês lidam?",
      answer: "Nossos profissionais são capacitados em comportamento animal. Trabalhamos com muita paciência e técnicas de reforço positivo para garantir que o momento do banho seja o menos estressante possível."
    },
    {
      id: 4,
      question: "Quais produtos vocês utilizam?",
      answer: "Utilizamos apenas produtos de linha premium, hipoalergênicos e específicos para uso veterinário. Eles limpam profundamente enquanto hidratam a pele e a pelagem do animal."
    }
  ];

  return (
    <section id="faq" className="section bg-surface">
      <div className="container">
        <h2 className="section-title">Perguntas Frequentes</h2>
        <p className="section-subtitle">
          Tire suas dúvidas sobre nossos serviços de Banho e Tosa.
        </p>
        
        <div className="faq-list">
          {faqs.map(faq => (
            <div 
              key={faq.id} 
              className={`faq-item ${openId === faq.id ? 'active' : ''}`}
              onClick={() => setOpenId(openId === faq.id ? null : faq.id)}
            >
              <div className="faq-question">
                <h3>{faq.question}</h3>
                {openId === faq.id ? (
                  <ChevronUp className="text-primary" size={24} />
                ) : (
                  <ChevronDown className="text-text-muted" size={24} />
                )}
              </div>
              <div className="faq-answer">
                <p>{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
