import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function HeroSection() {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Monument images data
  const monuments = [
    {
      name: 'Taj Mahal',
      location: 'Agra, Uttar Pradesh',
      image: 'https://images.unsplash.com/photo-1564507592333-c60657eea523?w=1920&q=80',
      description: 'A timeless symbol of love and architectural marvel'
    },
    {
      name: 'Red Fort',
      location: 'Delhi',
      image: 'https://images.unsplash.com/photo-1597076545399-91a5c1c8e6d0?w=1920&q=80',
      description: 'Historic fortress and UNESCO World Heritage Site'
    },
    {
      name: 'Gateway of India',
      location: 'Mumbai, Maharashtra',
      image: 'https://images.unsplash.com/photo-1570168007204-dfb528c6958f?w=1920&q=80',
      description: 'Iconic monument overlooking the Arabian Sea'
    },
    {
      name: 'Hawa Mahal',
      location: 'Jaipur, Rajasthan',
      image: 'https://images.unsplash.com/photo-1599661046289-e31897846e41?w=1920&q=80',
      description: 'Palace of Winds with stunning pink architecture'
    },
    {
      name: 'Golden Temple',
      location: 'Amritsar, Punjab',
      image: 'https://images.unsplash.com/photo-1588689578718-8bce697c1ce8?w=1920&q=80',
      description: 'Sacred Sikh shrine covered in gold'
    }
  ];

  // Auto-advance slides every 5 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % monuments.length);
    }, 5000);

    return () => clearInterval(timer);
  }, [monuments.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % monuments.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + monuments.length) % monuments.length);
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Background Image Slider */}
      <div className="absolute inset-0">
        {monuments.map((monument, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentSlide ? 'opacity-100' : 'opacity-0'
            }`}
          >
            {/* Background Image */}
            <div
              className="absolute inset-0 bg-cover bg-center bg-no-repeat"
              style={{
                backgroundImage: `url(${monument.image})`,
              }}
            />
            
            {/* Dark Overlay */}
            <div className="absolute inset-0 bg-black/60 backdrop-blur-[2px]" />
          </div>
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 h-full flex items-center justify-center">
        <div className="container-custom text-center px-4">
          {/* Main Heading */}
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 heading-gradient animate-fade-in">
            Explore India
          </h1>
          
          {/* Monument Info */}
          <div className="animate-slide-up">
            <h2 className="text-2xl md:text-4xl font-semibold text-white mb-3 text-shadow-lg">
              {monuments[currentSlide].name}
            </h2>
            <p className="text-lg md:text-xl text-gray-300 mb-2">
              {monuments[currentSlide].location}
            </p>
            <p className="text-base md:text-lg text-gray-400 mb-8 max-w-2xl mx-auto">
              {monuments[currentSlide].description}
            </p>
          </div>

          {/* Tagline */}
          <p className="text-xl md:text-2xl lg:text-3xl text-gray-200 mb-10 max-w-4xl mx-auto leading-relaxed text-shadow">
            Discover the incredible diversity, rich heritage, and breathtaking landscapes 
            of India's 28 states and 8 union territories
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Link to="/states" className="btn-primary text-lg px-8 py-4">
              Explore Destinations
            </Link>
            <Link to="/about" className="btn-outline text-lg px-8 py-4">
              Learn More
            </Link>
          </div>

          {/* Slide Indicators */}
          <div className="flex justify-center gap-3">
            {monuments.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`transition-all duration-300 rounded-full ${
                  index === currentSlide
                    ? 'bg-accent-orange w-12 h-3'
                    : 'bg-gray-500 hover:bg-gray-400 w-3 h-3'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 z-20 bg-black/50 hover:bg-black/70 text-white p-3 md:p-4 rounded-full transition-all duration-300 backdrop-blur-sm hover:scale-110"
        aria-label="Previous slide"
      >
        <svg className="w-6 h-6 md:w-8 md:h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </button>

      <button
        onClick={nextSlide}
        className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 z-20 bg-black/50 hover:bg-black/70 text-white p-3 md:p-4 rounded-full transition-all duration-300 backdrop-blur-sm hover:scale-110"
        aria-label="Next slide"
      >
        <svg className="w-6 h-6 md:w-8 md:h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </button>

      {/* Scroll Down Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 animate-bounce">
        <div className="flex flex-col items-center text-white">
          <span className="text-sm mb-2 text-gray-300">Scroll Down</span>
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;