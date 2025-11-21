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

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          
          {/* Contact Info Column */}
          <div className="space-y-8">
            
            {/* 24/7 Support Card */}
            <div className="bg-white dark:bg-dark-card p-8 rounded-2xl shadow-lg border border-slate-100 dark:border-slate-800 relative overflow-hidden group h-40 flex items-center">
              {/* Abstract Background Image */}
              <div className="absolute inset-0">
                <img 
                    src={IMAGES.abstractWave}
                    alt="Support Background" 
                    className="w-full h-full object-cover opacity-20 group-hover:scale-105 transition-transform duration-700" 
                />
                <div className="absolute inset-0 bg-gradient-to-r from-white/90 to-transparent dark:from-dark-card/90"></div>
              </div>
              
              <div className="relative z-10">
                <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">24/7 Support & Bookings</h3>
                <p className="text-slate-600 dark:text-slate-300 font-medium">We are always available to assist you.</p>
              </div>
            </div>

            {/* Contact Methods List */}
            <div className="space-y-4">
              <a href={`tel:${COMPANY_INFO.phone.replace(/\s/g, '')}`} className="flex items-center gap-5 p-5 bg-white dark:bg-dark-card rounded-xl border border-slate-100 dark:border-slate-800 hover:border-primary hover:shadow-md transition-all group">
                <div className="bg-primary/10 p-4 rounded-full text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                  <Phone size={24} />
                </div>
                <div className="flex-1">
                  <p className="text-sm font-medium text-slate-500 dark:text-slate-400 uppercase tracking-wide">Call Us</p>
                  <p className="text-xl font-bold text-slate-900 dark:text-white">{COMPANY_INFO.phoneDisplay}</p>
                </div>
              </a>

              <a href={`mailto:${COMPANY_INFO.email}`} className="flex items-center gap-5 p-5 bg-white dark:bg-dark-card rounded-xl border border-slate-100 dark:border-slate-800 hover:border-primary hover:shadow-md transition-all group">
                <div className="bg-primary/10 p-4 rounded-full text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                  <Mail size={24} />
                </div>
                <div className="flex-1">
                  <p className="text-sm font-medium text-slate-500 dark:text-slate-400 uppercase tracking-wide">Email Us</p>
                  <p className="text-xl font-bold text-slate-900 dark:text-white break-all">{COMPANY_INFO.email}</p>
                </div>
              </a>

              <a href={COMPANY_INFO.whatsappLink} target="_blank" rel="noreferrer" className="flex items-center gap-5 p-5 bg-white dark:bg-dark-card rounded-xl border border-slate-100 dark:border-slate-800 hover:border-green-500 hover:shadow-md transition-all group">
                <div className="bg-green-100 dark:bg-green-900/20 p-4 rounded-full text-green-600 group-hover:bg-green-500 group-hover:text-white transition-colors">
                  <MessageCircle size={24} />
                </div>
                <div className="flex-1">
                  <p className="text-sm font-medium text-slate-500 dark:text-slate-400 uppercase tracking-wide">WhatsApp</p>
                  <p className="text-xl font-bold text-slate-900 dark:text-white">Chat on WhatsApp</p>
                </div>
              </a>
            </div>

            {/* Google Maps Embed */}
            <div className="rounded-2xl overflow-hidden border border-slate-100 dark:border-slate-800 shadow-lg h-[300px]">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d101883.66305371997!2d29.055163004916022!3d36.66074188741693!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14c0423155555555%3A0x3e536459151948c0!2sFethiye%2C%20Mugla!5e0!3m2!1sen!2str!4v1709827000000!5m2!1sen!2str" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen={true} 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                title="Fethiye Location Map"
              ></iframe>
            </div>
            <div className="flex items-center gap-2 text-slate-600 dark:text-slate-300 justify-center">
              <MapPin size={16} />
              <span className="text-sm">{COMPANY_INFO.address}</span>
            </div>
          </div>

          {/* Form Column */}
          <div className="bg-white dark:bg-dark-card p-8 md:p-10 rounded-3xl shadow-xl border border-slate-100 dark:border-slate-800">
            <h3 className="text-3xl font-bold font-serif text-slate-900 dark:text-white mb-2">Send us a Message</h3>
            <p className="text-slate-500 dark:text-slate-400 mb-8">Fill out the form below and we'll get back to you within 24 hours.</p>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-bold text-slate-700 dark:text-slate-300 mb-2">Full Name</label>
                <input 
                  type="text" 
                  id="name" 
                  required
                  className="w-full px-4 py-4 rounded-xl bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all text-slate-900 dark:text-white placeholder-slate-400"
                  placeholder="John Doe"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-bold text-slate-700 dark:text-slate-300 mb-2">Email Address</label>
                <input 
                  type="email" 
                  id="email" 
                  required
                  className="w-full px-4 py-4 rounded-xl bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all text-slate-900 dark:text-white placeholder-slate-400"
                  placeholder="john@example.com"
                />
              </div>
              <div>
                <label htmlFor="subject" className="block text-sm font-bold text-slate-700 dark:text-slate-300 mb-2">Subject</label>
                <select 
                  id="subject"
                  className="w-full px-4 py-4 rounded-xl bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all text-slate-900 dark:text-white"
                >
                  <option>Booking Inquiry</option>
                  <option>Custom Tour</option>
                  <option>Airport Transfer</option>
                  <option>General Question</option>
                </select>
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-bold text-slate-700 dark:text-slate-300 mb-2">Message</label>
                <textarea 
                  id="message" 
                  rows={5}
                  required
                  className="w-full px-4 py-4 rounded-xl bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all text-slate-900 dark:text-white placeholder-slate-400"
                  placeholder="Tell us about your travel plans..."
                ></textarea>
              </div>
              <button 
                type="submit" 
                className="w-full bg-primary hover:bg-primary-dark text-white font-bold py-4 rounded-xl transition-all flex items-center justify-center gap-2 shadow-lg hover:shadow-xl hover:-translate-y-1"
              >
                <Send size={20} />
                Send Message
              </button>
            </form>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Contact;