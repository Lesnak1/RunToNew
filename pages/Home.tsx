import React from 'react';
import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { ShieldCheck, Clock, Headphones, UserCheck, Star, MapPin, ArrowRight } from 'lucide-react';
import { IMAGES } from '../constants';
import { Tour, Testimonial } from '../types';
import TourCard from '../components/TourCard';

const FEATURES = [
  {
    icon: <ShieldCheck className="w-8 h-8 text-secondary" />,
    title: "Safe & Tailored",
    description: "Fully insured tours customized to your personal interests."
  },
  {
    icon: <Headphones className="w-8 h-8 text-secondary" />,
    title: "24/7 Local Support",
    description: "We are just a phone call away throughout your entire trip."
  },
  {
    icon: <UserCheck className="w-8 h-8 text-secondary" />,
    title: "Expert Local Guides",
    description: "Passionate locals who know Fethiye's best kept secrets."
  },
  {
    icon: <Clock className="w-8 h-8 text-secondary" />,
    title: "Punctuality First",
    description: "We value your time with reliable transfers and schedules."
  }
];

const FEATURED_TOURS: Tour[] = [
  {
    id: '1',
    title: 'Paragliding over Ölüdeniz',
    description: 'The world-famous flight. Soar above the Blue Lagoon with expert pilots.',
    image: IMAGES.paragliding,
    duration: '2 Hours',
    category: 'Adrenaline',
    isBestSeller: true
  },
  {
    id: '2',
    title: 'Private Gulet Boat Trip',
    description: 'Your own private boat for the day. Discover hidden bays and clear waters.',
    image: IMAGES.boat,
    duration: 'Full Day',
    category: 'Boat',
    isBestSeller: true
  },
  {
    id: '3',
    title: 'Saklıkent Canyon Safari',
    description: 'Adventure through the gorge, mud baths, and ancient Tlos ruins.',
    image: IMAGES.canyon,
    duration: '8 Hours',
    category: 'Nature'
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
    name: 'Emily R.',
    quote: "I was nervous about paragliding, but the pilots were so professional and reassuring. The view was breathtaking! Highly recommend.",
    rating: 5,
    avatar: IMAGES.avatar3
  },
  {
    id: 't4',
    name: 'James & Family',
    quote: "The Saklikent Canyon tour was perfect for our family. The guide was knowledgeable and great with the kids. A must-do activity.",
    rating: 5,
    avatar: IMAGES.avatar4
  },
  {
    id: 't5',
    name: 'Jessica M.',
    quote: "Booking with Run To New was the best decision. The sunset cruise was magical. Thank you for the amazing memories!",
    rating: 5,
    avatar: IMAGES.avatar5
  }
];

const Home: React.FC = () => {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative h-screen min-h-[600px] w-full flex items-center justify-center overflow-hidden">
        {/* Background Image with Zoom Effect */}
        <div className="absolute inset-0 overflow-hidden">
          <img
            src={IMAGES.hero}
            alt="Fethiye Oludeniz"
            className="w-full h-full object-cover animate-[pulse_30s_ease-in-out_infinite] scale-105"
          />
        </div>
        <div className="absolute inset-0 bg-hero-overlay" />

        <div className="relative z-10 container mx-auto px-4 text-center text-white flex flex-col items-center gap-8">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-sm font-medium animate-fade-in-up">
            <MapPin size={16} className="text-secondary" />
            <span>Fethiye, Turkey</span>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold font-serif leading-tight max-w-5xl drop-shadow-2xl">
            Discover the Magic of the <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-light to-secondary">Turquoise Coast</span>
          </h1>

          <p className="text-lg md:text-xl max-w-2xl font-light text-slate-100 drop-shadow-lg leading-relaxed">
            Premium tours, private transfers, and unforgettable memories tailored just for you.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 mt-6">
            <Link
              to="/tours"
              className="px-10 py-4 bg-primary hover:bg-primary-dark text-white rounded-full font-bold text-lg transition-all shadow-[0_0_20px_rgba(14,116,144,0.5)] hover:shadow-[0_0_30px_rgba(14,116,144,0.8)] hover:-translate-y-1 flex items-center gap-2"
            >
              Explore Tours <ArrowRight size={20} />
            </Link>
            <Link
              to="/contact"
              className="px-10 py-4 bg-white/10 hover:bg-white/20 backdrop-blur-md text-white border border-white/30 rounded-full font-bold text-lg transition-all hover:-translate-y-1"
            >
              Plan My Trip
            </Link>
          </div>
        </div>
      </section>

      {/* Signature Experiences */}
      <section className="py-24 bg-light dark:bg-dark relative">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-4">
            <div>
              <h2 className="text-4xl font-bold font-serif text-slate-900 dark:text-white mb-3">
                Signature Fethiye Experiences
              </h2>
              <p className="text-slate-600 dark:text-slate-400 text-lg max-w-xl">
                Handpicked adventures that showcase the very best of our region, from sky to sea.
              </p>
            </div>
            <Link to="/tours" className="hidden md:flex items-center gap-2 text-primary font-bold hover:text-primary-dark transition-colors group">
              View All Tours <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {FEATURED_TOURS.map(tour => (
              <TourCard key={tour.id} tour={tour} />
            ))}
          </div>

          <div className="mt-12 text-center md:hidden">
            <Link to="/tours" className="inline-flex items-center gap-2 px-6 py-3 bg-white dark:bg-dark-card border border-slate-200 dark:border-slate-700 rounded-full text-primary font-bold shadow-sm">
              View All Tours <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24 bg-white dark:bg-dark-card border-y border-slate-100 dark:border-slate-800">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-secondary font-bold uppercase tracking-widest text-sm mb-2 block">Why Choose Us</span>
            <h2 className="text-4xl font-bold font-serif text-slate-900 dark:text-white mb-6">
              The Art of Effortless Travel
            </h2>
            <p className="text-slate-600 dark:text-slate-400 text-lg leading-relaxed">
              We handle every detail so you can focus on making memories. Here's why travelers choose Run To New Travel.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {FEATURES.map((feature, idx) => (
              <div key={idx} className="group bg-light dark:bg-dark border border-slate-100 dark:border-slate-800 p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all hover:-translate-y-1">
                <div className="mb-6 bg-white dark:bg-dark-card w-16 h-16 rounded-2xl flex items-center justify-center shadow-sm group-hover:scale-110 transition-transform">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">
                  {feature.title}
                </h3>
                <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-primary dark:bg-primary-dark text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>
        <div className="container mx-auto px-4 relative z-10">
          <h2 className="text-4xl font-bold font-serif text-center mb-16">
            What Our Travelers Say
          </h2>

          <div className="w-full">
            <Swiper
              modules={[Autoplay, Pagination, Navigation]}
              spaceBetween={30}
              slidesPerView={1}
              loop={true}
              autoplay={{
                delay: 5000,
                disableOnInteraction: false,
              }}
              pagination={{ clickable: true }}
              breakpoints={{
                640: {
                  slidesPerView: 1,
                },
                768: {
                  slidesPerView: 2,
                },
                1024: {
                  slidesPerView: 3,
                },
              }}
              className="pb-12 !pb-16"
            >
              {TESTIMONIALS.map((item) => (
                <SwiperSlide key={item.id} className="h-auto">
                  <div className="bg-white/10 backdrop-blur-md p-8 rounded-3xl border border-white/20 hover:bg-white/15 transition-colors h-full flex flex-col">
                    <div className="flex items-center gap-4 mb-6">
                      <img
                        src={item.avatar}
                        alt={item.name}
                        className="w-16 h-16 rounded-full object-cover border-2 border-secondary shadow-lg shrink-0"
                      />
                      <div>
                        <p className="font-bold text-lg text-white">{item.name}</p>
                        <div className="flex text-secondary gap-1">
                          {[...Array(item.rating)].map((_, i) => (
                            <Star key={i} size={14} fill="currentColor" strokeWidth={0} />
                          ))}
                        </div>
                      </div>
                    </div>
                    <p className="text-base italic font-light text-slate-100 opacity-90 leading-relaxed flex-grow">
                      "{item.quote}"
                    </p>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;