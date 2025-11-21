import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Calendar, Users, ArrowRight, Star, Shield, Award, Heart, Headphones, UserCheck, Clock } from 'lucide-react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import { IMAGES } from '../constants';
import { useLanguage } from '../context/LanguageContext';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

interface Tour {
  id: string;
  title: string;
  image: string;
  price: string;
  duration: string;
  location: string;
  rating: number;
}

interface Testimonial {
  id: string;
  name: string;
  quote: string;
  rating: number;
  avatar: string;
}

import TourCard from '../components/TourCard';


const FEATURED_TOURS: Tour[] = [
  {
    id: '1',
    title: "Butterfly Valley Boat Trip",
    image: IMAGES.butterflyValley,
    price: "€45",
    duration: "7 Hours",
    location: "Oludeniz",
    rating: 4.9
  },
  {
    id: '2',
    title: "Paragliding Experience",
    image: IMAGES.paragliding,
    price: "€120",
    duration: "2 Hours",
    location: "Babadag Mountain",
    rating: 5.0
  },
  {
    id: '3',
    title: "Private Dalyan Tour",
    image: IMAGES.dalyan,
    price: "€85",
    duration: "9 Hours",
    location: "Dalyan",
    rating: 4.8
  },
  {
    id: '4',
    title: "Saklikent Canyon Safari",
    image: IMAGES.canyon,
    price: "€55",
    duration: "8 Hours",
    location: "Saklikent",
    rating: 4.7
  }
];

const TESTIMONIALS: Testimonial[] = [
  {
    id: 't1',
    name: 'Sarah & Tom L.',
    quote: "An absolutely unforgettable experience! The private boat trip was the highlight of our vacation. Everything was perfectly organized by the team.",
    rating: 5,
    avatar: IMAGES.avatar1
  },
  {
    id: 't2',
    name: 'Mark D.',
    quote: "Run To New Travel made our trip completely stress-free. Their local knowledge is second to none. The paragliding transfer was smooth and professional.",
    rating: 5,
    avatar: IMAGES.avatar2
  },
  {
    id: 't3',
    name: 'Elena K.',
    quote: "We booked the Dalyan tour and it was magical. The guide was so knowledgeable and the lunch was delicious. Highly recommended!",
    rating: 5,
    avatar: IMAGES.avatar1
  },
  {
    id: 't4',
    name: 'James P.',
    quote: "Best travel agency in Fethiye. They handled all our transfers and tours. The VIP service is real!",
    rating: 5,
    avatar: IMAGES.avatar2
  },
  {
    id: 't5',
    name: 'Sophie M.',
    quote: "I was nervous about paragliding but they made me feel so safe. The photos are incredible. Thank you Run To New!",
    rating: 5,
    avatar: IMAGES.avatar1
  }
];

const Home: React.FC = () => {
  const { t } = useLanguage();

  return (
    <div className="flex flex-col gap-0">

      {/* Hero Section */}
      <section className="relative h-screen w-full overflow-hidden">
        {/* Video Background */}
        <div className="absolute inset-0 w-full h-full">
          <div className="absolute inset-0 bg-hero-overlay z-10"></div>
          <video
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover"
            poster={IMAGES.hero}
          >
            <source src="https://assets.mixkit.co/videos/preview/mixkit-aerial-view-of-waves-hitting-the-beach-2660-large.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>

        <div className="relative z-20 container mx-auto px-4 h-full flex flex-col justify-center items-center text-center text-white pt-20">
          <h1 className="text-5xl md:text-7xl font-bold font-serif mb-6 leading-tight animate-fade-in-up drop-shadow-lg">
            {t.hero.title}
          </h1>
          <p className="text-xl md:text-2xl font-light max-w-2xl mb-10 opacity-90 animate-fade-in-up delay-200 drop-shadow-md">
            {t.hero.subtitle}
          </p>
          <Link
            to="/tours"
            className="bg-secondary hover:bg-amber-600 text-white text-lg font-bold py-4 px-10 rounded-full transition-all transform hover:scale-105 hover:shadow-2xl animate-fade-in-up delay-300 flex items-center gap-2"
          >
            <span>{t.hero.cta}</span>
            <ArrowRight size={20} />
          </Link>
        </div>
      </section>

      {/* Features / Why Choose Us */}
      <section className="py-20 bg-light dark:bg-dark">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold font-serif text-slate-900 dark:text-white mb-4">{t.features.title}</h2>
            <p className="text-slate-600 dark:text-slate-400 text-lg">{t.features.subtitle}</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            <div className="bg-white dark:bg-dark-card p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow border border-slate-100 dark:border-slate-800 text-center group">
              <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-primary group-hover:text-white transition-colors text-primary">
                <MapPin size={32} />
              </div>
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">{t.features.localExpertise}</h3>
              <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                {t.features.localExpertiseDesc}
              </p>
            </div>

            <div className="bg-white dark:bg-dark-card p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow border border-slate-100 dark:border-slate-800 text-center group">
              <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-primary group-hover:text-white transition-colors text-primary">
                <Shield size={32} />
              </div>
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">{t.features.premiumService}</h3>
              <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                {t.features.premiumServiceDesc}
              </p>
            </div>

            <div className="bg-white dark:bg-dark-card p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow border border-slate-100 dark:border-slate-800 text-center group">
              <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-primary group-hover:text-white transition-colors text-primary">
                <Award size={32} />
              </div>
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">{t.features.unforgettable}</h3>
              <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                {t.features.unforgettableDesc}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Tours */}
      <section className="py-20 bg-white dark:bg-dark-card">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-end mb-12">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold font-serif text-slate-900 dark:text-white mb-2">{t.nav.tours}</h2>
              <p className="text-slate-600 dark:text-slate-400">Handpicked experiences just for you</p>
            </div>
            <Link to="/tours" className="hidden md:flex items-center gap-2 text-primary font-bold hover:text-primary-dark transition-colors">
              View All Tours <ArrowRight size={20} />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {FEATURED_TOURS.map((tour) => (
              <div key={tour.id} className="group rounded-2xl overflow-hidden bg-light dark:bg-dark border border-slate-100 dark:border-slate-800 shadow-sm hover:shadow-xl transition-all duration-300">
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={tour.image}
                    alt={tour.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-bold text-slate-900">
                    {tour.price}
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-2 text-secondary text-sm font-bold mb-2">
                    <MapPin size={14} /> {tour.location}
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-4 group-hover:text-primary transition-colors">{tour.title}</h3>
                  <div className="flex items-center justify-between text-slate-500 dark:text-slate-400 text-sm border-t border-slate-200 dark:border-slate-700 pt-4">
                    <div className="flex items-center gap-1">
                      <Calendar size={16} /> {tour.duration}
                    </div>
                    <div className="flex items-center gap-1 text-amber-500 font-bold">
                      <Star size={16} fill="currentColor" /> {tour.rating}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center md:hidden">
            <Link to="/tours" className="inline-flex items-center gap-2 text-primary font-bold hover:text-primary-dark transition-colors">
              View All Tours <ArrowRight size={20} />
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-primary relative overflow-hidden text-white">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                <path d="M 40 0 L 0 0 0 40" fill="none" stroke="white" strokeWidth="1" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid)" />
          </svg>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold font-serif mb-4">{t.testimonials.title}</h2>
            <p className="text-white/80 text-lg">{t.testimonials.subtitle}</p>
          </div>

          <Swiper
            modules={[Autoplay, Pagination, Navigation]}
            spaceBetween={30}
            slidesPerView={1}
            breakpoints={{
              640: { slidesPerView: 1 },
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
            autoplay={{ delay: 5000, disableOnInteraction: false }}
            loop={true}
            pagination={{ clickable: true, dynamicBullets: true }}
            className="pb-12"
          >
            {TESTIMONIALS.map((item) => (
              <SwiperSlide key={item.id}>
                <div className="bg-white/10 backdrop-blur-md p-8 rounded-3xl border border-white/20 hover:bg-white/15 transition-colors h-full flex flex-col">
                  <div className="flex items-center gap-4 mb-6">
                    <img
                      src={item.avatar}
                      alt={item.name}
                      className="w-14 h-14 rounded-full object-cover border-2 border-secondary shadow-lg"
                    />
                    <div>
                      <p className="font-bold text-lg">{item.name}</p>
                      <div className="flex text-secondary gap-1">
                        {[...Array(item.rating)].map((_, i) => (
                          <Star key={i} size={14} fill="currentColor" strokeWidth={0} />
                        ))}
                      </div>
                    </div>
                  </div>
                  <p className="text-base italic font-light opacity-90 leading-relaxed flex-grow">
                    "{item.quote}"
                  </p>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>

    </div>
  );
};

export default Home;