import React from 'react';
import { ShieldCheck, Sparkles, Clock } from 'lucide-react';
import './Hero.css';
import WhatsAppIcon from './WhatsAppIcon';

const Hero = () => {
  return (
    <section id="home" className="hero">
      <div className="hero-video-bg">
        <video autoPlay loop muted playsInline>
          <source src="https://cdn.pixabay.com/vimeo/384761405/dog-31411.mp4?width=1280&hash=0e0b3c4f9fbdf4b79b9b5f54366fb8d80f8ab8d8" type="video/mp4" />
        </video>
        <div className="video-overlay"></div>
      </div>
      <div className="container grid md:grid-cols-2 gap-8 items-center h-full">
        <div className="hero-content animate-fade-in">
          <div className="badge text-primary bg-primary-light">
            <Sparkles size={16} /> Especialistas em Estética Pet
          </div>
          <h1 className="hero-title">
            O melhor <span className="text-primary">Banho e Tosa</span> para o seu melhor amigo.
          </h1>
          <p className="hero-subtitle">
            Ambiente higienizado, profissionais qualificados e muito amor para deixar seu pet limpo, cheiroso e feliz. Agende agora e surpreenda-se!
          </p>
          <div className="hero-actions flex gap-4">
            <a href="https://wa.me/5511991249837?text=Ol%C3%A1%21%20Gostaria%20de%20agendar%20um%20hor%C3%A1rio%20para%20o%20meu%20pet." target="_blank" rel="noreferrer" className="btn btn-primary">
              <WhatsAppIcon size={20} /> Agendar Horário
            </a>
            <a href="#gallery" className="btn btn-outline">Ver Estrutura</a>
          </div>
          
          <div className="hero-features flex gap-6">
            <div className="feature-item flex items-center gap-2">
              <ShieldCheck className="text-secondary" size={20} />
              <span>Segurança</span>
            </div>
            <div className="feature-item flex items-center gap-2">
              <Clock className="text-secondary" size={20} />
              <span>Agilidade</span>
            </div>
          </div>
        </div>
        <div className="hero-image-wrapper animate-fade-in" style={{ animationDelay: '0.2s' }}>
          <img src="/src/assets/hero/hero.png" alt="Cachorro feliz após o banho" className="hero-image" />
          <div className="floating-card glass">
            <span className="text-primary font-bold">4.9/5</span>
            <span className="text-sm">⭐ +500 Clientes Felizes</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
