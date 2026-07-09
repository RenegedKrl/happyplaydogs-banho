import React from 'react';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import './Location.css';
import WhatsAppIcon from './WhatsAppIcon';

const Location = () => {
  return (
    <section id="location" className="section bg-bg">
      <div className="container grid md:grid-cols-2 gap-8 items-center">
        <div className="location-content">
          <h2 className="section-title" style={{ textAlign: 'left', marginBottom: '1.5rem' }}>
            Localização e Contato
          </h2>
          <p className="location-subtitle">
            Venha nos visitar! Nossa estrutura está pronta para receber você e seu pet com todo o carinho e conforto.
          </p>
          
          <div className="contact-info">
            <div className="info-item">
              <div className="info-icon bg-primary-light text-primary">
                <MapPin size={24} />
              </div>
              <div>
                <h4>Endereço</h4>
                <p>R. Salete, 294 - Santana<br/>São Paulo - SP, 02016-001</p>
              </div>
            </div>
            
            <div className="info-item">
              <div className="info-icon bg-primary-light text-primary">
                <Clock size={24} />
              </div>
              <div>
                <h4>Horário de Funcionamento</h4>
                <p>Segunda a Sexta: 08:00 - 18:00<br/>Sábado: 08:00 - 14:00</p>
              </div>
            </div>
            
            <div className="info-item">
              <div className="info-icon bg-primary-light text-primary">
                <Phone size={24} />
              </div>
              <div>
                <h4>WhatsApp / Telefone</h4>
                <p>(11) 99124-9837</p>
              </div>
            </div>
          </div>
          
          <a href="https://wa.me/5511991249837?text=Ol%C3%A1%21%20Gostaria%20de%20agendar%20um%20hor%C3%A1rio.%20Como%20fa%C3%A7o%20para%20chegar%20%C3%A0%20Happy%20Play%20Dogs%3F" target="_blank" rel="noreferrer" className="btn btn-primary w-full" style={{ marginTop: '2rem' }}>
            <WhatsAppIcon size={20} /> Falar no WhatsApp
          </a>
        </div>
        
        <div className="map-wrapper">
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3658.8684703323984!2d-46.6269845!3d-23.501246599999995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94cef7fcdec6fab7%3A0xf64bdf4984788ee5!2sHappy%20Play%20Dogs!5e0!3m2!1spt-BR!2sbr!4v1783297960769!5m2!1spt-BR!2sbr" 
            width="100%" 
            height="100%" 
            style={{border: 0}} 
            allowFullScreen="" 
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade"
            title="Mapa de Localização"
          ></iframe>
        </div>
      </div>
    </section>
  );
};

export default Location;
