import React from 'react';
import { Link } from 'react-router-dom';
import { Compass, Facebook, Instagram, Mail, Phone, MapPin } from 'lucide-react';
import { COMPANY_INFO, NAV_ITEMS } from '../constants';

const Footer: React.FC = () => {
  return (
    <footer className="bg-dark text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          
          {/* Brand Column */}
          <div className="flex flex-col items-start gap-4">
            <div className="flex items-center gap-2">
              <Compass className="w-8 h-8 text-secondary" />
              <h2 className="text-2xl font-bold font-serif">Run To New Travel</h2>
            </div>
            <p className="text-dark-muted text-sm leading-relaxed max-w-xs">
              Your premium gateway to the wonders of Fethiye. Let us craft your perfect, stress-free holiday with our local expertise and passion for travel.
            </p>
            <div className="flex gap-4 mt-2">
              <a href="#" className="bg-white/10 p-2 rounded-full hover:bg-primary transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="bg-white/10 p-2 rounded-full hover:bg-primary transition-colors">
                <Instagram size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-6 border-b border-white/10 pb-2 inline-block">Explore</h3>
            <ul className="space-y-3">
              {NAV_ITEMS.map((item) => (
                <li key={item.path}>
                  <Link to={item.path} className="text-dark-muted hover:text-primary transition-colors text-sm">
                    {item.label}
                  </Link>
                </li>
              ))}
              <li><Link to="/terms" className="text-dark-muted hover:text-primary transition-colors text-sm">Terms of Service</Link></li>
              <li><Link to="/privacy" className="text-dark-muted hover:text-primary transition-colors text-sm">Privacy Policy</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-bold mb-6 border-b border-white/10 pb-2 inline-block">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-dark-muted">
                <Phone className="w-5 h-5 text-primary shrink-0" />
                <div>
                  <a href={`tel:${COMPANY_INFO.phone.replace(/\s/g, '')}`} className="hover:text-white block">
                    {COMPANY_INFO.phoneDisplay}
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3 text-dark-muted">
                <Mail className="w-5 h-5 text-primary shrink-0" />
                <a href={`mailto:${COMPANY_INFO.email}`} className="hover:text-white break-all">
                  {COMPANY_INFO.email}
                </a>
              </li>
              <li className="flex items-start gap-3 text-dark-muted">
                <MapPin className="w-5 h-5 text-primary shrink-0" />
                <span>{COMPANY_INFO.address}</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-white/10 pt-8 text-center">
          <p className="text-xs text-dark-muted">
            © {new Date().getFullYear()} {COMPANY_INFO.name}. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
