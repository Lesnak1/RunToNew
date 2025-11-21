import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone, Globe } from 'lucide-react';
import { NAV_ITEMS, COMPANY_INFO } from '../constants';
import { useLanguage } from '../context/LanguageContext';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const { language, setLanguage, t } = useLanguage();

  // Handle scroll effect for transparent to solid navbar
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  const isHome = location.pathname === '/';

  // Dynamic header styling
  const headerClass = `fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled || !isHome
    ? 'bg-white/95 backdrop-blur-md text-dark shadow-md py-4'
    : 'bg-transparent text-white py-6'
    }`;

  const linkClass = (path: string) => `
    text-sm font-bold uppercase tracking-wider hover:text-secondary transition-colors relative group
    ${location.pathname === path ? 'text-secondary' : ''}
  `;

  const toggleLanguage = () => {
    setLanguage(language === 'en' ? 'tr' : 'en');
  };

  return (
    <header className={headerClass}>
      <div className="container mx-auto px-4 flex items-center justify-between">
        {/* Logo - Mimicking the provided handwritten logo */}
        <Link to="/" className="flex flex-col items-start group">
          <span className={`font-handwriting text-3xl md:text-4xl -mb-2 ${scrolled || !isHome ? 'text-primary' : 'text-white'} transition-colors`}>
            Run To New
          </span>
          <span className={`text-[8px] md:text-[10px] uppercase tracking-[0.1em] font-sans font-semibold ${scrolled || !isHome ? 'text-dark-muted' : 'text-white/80'}`}>
            Tourism Travel & Transportation
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {NAV_ITEMS.map((item) => (
            <Link key={item.path} to={item.path} className={linkClass(item.path)}>
              {/* Map simple labels to translation keys if possible, or just use label for now. 
                  Ideally NAV_ITEMS should be dynamic or mapped. 
                  For now, we'll map manually based on path or label. */}
              {item.path === '/' ? t.nav.home :
                item.path === '/tours' ? t.nav.tours :
                  item.path === '/about' ? t.nav.about :
                    item.path === '/contact' ? t.nav.contact : item.label}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-secondary transition-all group-hover:w-full"></span>
            </Link>
          ))}

          {/* Language Switcher */}
          <button
            onClick={toggleLanguage}
            className={`flex items-center gap-1 font-bold uppercase text-sm hover:text-secondary transition-colors ${scrolled || !isHome ? 'text-dark' : 'text-white'}`}
          >
            <Globe size={16} />
            {language}
          </button>

          <a
            href={`tel:${COMPANY_INFO.phone.replace(/\s/g, '')}`}
            className="flex items-center gap-2 bg-primary hover:bg-primary-dark text-white px-5 py-2.5 rounded-full text-sm font-bold transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5"
          >
            <Phone size={16} />
            <span>{t.nav.bookNow}</span>
          </a>
        </nav>

        {/* Mobile Menu Toggle */}
        <div className="flex items-center gap-4 md:hidden">
          {/* Mobile Language Switcher */}
          <button
            onClick={toggleLanguage}
            className={`flex items-center gap-1 font-bold uppercase text-sm hover:text-secondary transition-colors ${scrolled || !isHome ? 'text-dark' : 'text-white'}`}
          >
            <Globe size={18} />
            {language}
          </button>

          <button
            className="p-2 cursor-pointer"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle Menu"
          >
            {isOpen ? <X size={24} className={scrolled || !isHome ? 'text-dark' : 'text-white'} /> : <Menu size={24} className={scrolled || !isHome ? 'text-dark' : 'text-white'} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <div className={`md:hidden fixed inset-0 bg-dark transition-transform duration-300 z-[9999] flex items-center justify-center ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        <button
          className="absolute top-6 right-6 text-white p-2"
          onClick={() => setIsOpen(false)}
          aria-label="Close Menu"
        >
          <X size={32} />
        </button>

        <nav className="flex flex-col items-center gap-8 text-white w-full px-4">
          <div className="font-handwriting text-4xl text-primary-light mb-4">Run To New</div>
          {NAV_ITEMS.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className="text-2xl font-serif font-bold hover:text-secondary transition-colors"
              onClick={() => setIsOpen(false)}
            >
              {item.path === '/' ? t.nav.home :
                item.path === '/tours' ? t.nav.tours :
                  item.path === '/about' ? t.nav.about :
                    item.path === '/contact' ? t.nav.contact : item.label}
            </Link>
          ))}
          <a
            href={`tel:${COMPANY_INFO.phone.replace(/\s/g, '')}`}
            className="mt-4 flex items-center gap-2 bg-primary text-white px-8 py-3 rounded-lg text-lg font-bold"
          >
            <Phone size={20} />
            <span>{t.nav.callUs}</span>
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;