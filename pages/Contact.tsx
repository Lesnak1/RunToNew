import React from 'react';
import { Phone, Mail, MapPin, MessageCircle, Send } from 'lucide-react';
import { COMPANY_INFO, IMAGES } from '../constants';

const Contact: React.FC = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Thank you for your message! We will get back to you shortly.");
  };

  return (
    <div className="pt-24 pb-20 bg-light dark:bg-dark min-h-screen">
      <div className="container mx-auto px-4">

        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold font-serif text-slate-900 dark:text-white mb-4">Get in Touch</h1>
          <p className="text-lg text-slate-600 dark:text-slate-400">We're here to help you plan the perfect Fethiye adventure.</p>
        </div>

        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold font-serif text-slate-900 dark:text-white mb-4">{t.contact.title}</h1>
          <p className="text-xl text-slate-600 dark:text-slate-400">{t.contact.subtitle}</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="space-y-8">
            <div className="bg-white dark:bg-dark-card p-8 rounded-2xl shadow-sm border border-slate-100 dark:border-slate-800">
              <h2 className="text-2xl font-bold font-serif text-slate-900 dark:text-white mb-6">{t.contact.supportTitle}</h2>
              <p className="text-slate-600 dark:text-slate-400 mb-8">
                {t.contact.supportDesc}
              </p>

              <div className="space-y-6">
                <a href={`tel:${COMPANY_INFO.phone.replace(/\s/g, '')}`} className="flex items-center gap-4 text-slate-700 dark:text-slate-300 hover:text-primary transition-colors group">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                    <Phone size={20} />
                  </div>
                  <div>
                    <p className="text-sm font-bold text-slate-400 uppercase tracking-wider">{t.contact.call}</p>
                    <p className="text-lg font-semibold">{COMPANY_INFO.phone}</p>
                  </div>
                </a>

                <a href={`mailto:${COMPANY_INFO.email}`} className="flex items-center gap-4 text-slate-700 dark:text-slate-300 hover:text-primary transition-colors group">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                    <Mail size={20} />
                  </div>
                  <div>
                    <p className="text-sm font-bold text-slate-400 uppercase tracking-wider">{t.contact.email}</p>
                    <p className="text-lg font-semibold">{COMPANY_INFO.email}</p>
                  </div>
                </a>

                <a href={`https://wa.me/${COMPANY_INFO.phone.replace(/\s/g, '').replace('+', '')}`} target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 text-slate-700 dark:text-slate-300 hover:text-green-500 transition-colors group">
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center text-green-600 group-hover:bg-green-500 group-hover:text-white transition-colors">
                    <MessageCircle size={20} />
                  </div>
                  <div>
                    <p className="text-sm font-bold text-slate-400 uppercase tracking-wider">{t.contact.whatsapp}</p>
                    <p className="text-lg font-semibold">{t.contact.chatWhatsapp}</p>
                  </div>
                </a>

                <div className="flex items-center gap-4 text-slate-700 dark:text-slate-300">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-primary">
                    <MapPin size={20} />
                  </div>
                  <div>
                    <p className="text-sm font-bold text-slate-400 uppercase tracking-wider">{t.contact.address}</p>
                    <p className="text-lg font-semibold">{COMPANY_INFO.address}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Map Embed */}
            <div className="h-64 bg-slate-200 rounded-2xl overflow-hidden shadow-sm">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d50946.79876665554!2d29.0866855!3d36.6213495!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14c042cc7a2a25bb%3A0x70361008323024d2!2sFethiye%2C%20Mu%C4%9Fla!5e0!3m2!1sen!2str!4v1645523456789!5m2!1sen!2str"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                title="Fethiye Map"
              ></iframe>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white dark:bg-dark-card p-8 rounded-2xl shadow-lg border border-slate-100 dark:border-slate-800">
            <h2 className="text-2xl font-bold font-serif text-slate-900 dark:text-white mb-2">{t.contact.formTitle}</h2>
            <p className="text-slate-600 dark:text-slate-400 mb-8">{t.contact.formDesc}</p>

            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-bold text-slate-700 dark:text-slate-300 mb-2">{t.contact.nameLabel}</label>
                  <input
                    type="text"
                    id="name"
                    className="w-full px-4 py-3 rounded-lg bg-slate-50 dark:bg-dark border border-slate-200 dark:border-slate-700 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                    placeholder="John Doe"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-bold text-slate-700 dark:text-slate-300 mb-2">{t.contact.emailLabel}</label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-4 py-3 rounded-lg bg-slate-50 dark:bg-dark border border-slate-200 dark:border-slate-700 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                    placeholder="john@example.com"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-bold text-slate-700 dark:text-slate-300 mb-2">{t.contact.subjectLabel}</label>
                <select
                  id="subject"
                  className="w-full px-4 py-3 rounded-lg bg-slate-50 dark:bg-dark border border-slate-200 dark:border-slate-700 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                >
                  <option value="booking">{t.contact.subjects.booking}</option>
                  <option value="custom">{t.contact.subjects.custom}</option>
                  <option value="transfer">{t.contact.subjects.transfer}</option>
                  <option value="general">{t.contact.subjects.general}</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-bold text-slate-700 dark:text-slate-300 mb-2">{t.contact.messageLabel}</label>
                <textarea
                  id="message"
                  rows={5}
                  className="w-full px-4 py-3 rounded-lg bg-slate-50 dark:bg-dark border border-slate-200 dark:border-slate-700 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all resize-none"
                  placeholder="How can we help you?"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-primary hover:bg-primary-dark text-white font-bold py-4 rounded-lg transition-all shadow-lg hover:shadow-xl flex items-center justify-center gap-2"
              >
                <span>{t.contact.sendButton}</span>
                <Send size={18} />
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;