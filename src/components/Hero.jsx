import React from 'react';
import { ShieldCheck, Sparkles, Clock } from 'lucide-react';
import './Hero.css';
import WhatsAppIcon from './WhatsAppIcon';
import heroImg from '../assets/hero/hero.jpeg';

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
          <h1 className="hero-title">
            <span className="text-primary">Banho e Tosa</span> com o padrão de cuidado Happy Play Dogs em Santana
          </h1>
          <p className="hero-subtitle">
            Cuidamos da higiene profunda, do corte ideal e do bem-estar do seu pet com a excelência que só a Happy Play Dogs oferece. Agende agora o seu horário!
          </p>
          <div className="hero-actions flex gap-4">
            <a href="https://wa.me/5511991249837?text=Ol%C3%A1%21%20Vi%20no%20site%20que%20a%20agenda%20est%C3%A1%20lotando%20e%20quero%20garantir%20o%20Banho%20e%20Tosa%20do%20meu%20pet%21" target="_blank" rel="noreferrer" className="btn btn-primary">
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
          <img src={heroImg} alt="Cachorro feliz após o banho" className="hero-image" />
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
