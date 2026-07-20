import React, { useState } from 'react';

const HeroSection = () => {
  const [activeSlide, setActiveSlide] = useState(0);

  return (
    <section id="home" className="relative h-screen min-h-[600px] flex items-stretch overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/images/galle fort.png')" }}
      ></div>

      {/* Left Content Pane */}
      <div className="relative z-10 w-full flex flex-col justify-center px-[60px] py-[80px]"
           style={{ background: "linear-gradient(to right, rgba(230, 230, 225, 0.95) 0%, rgba(230, 230, 225, 0.85) 30%, rgba(230, 230, 225, 0) 70%)" }}>
        
        <h1 className="font-serif font-medium text-[70px] leading-[140%] tracking-[0.02em] text-[#1F5E4E] mb-[22px]">
          Discover Sri Lanka's<br />
          <span className="text-gold font-normal">Timeless Heritage</span>
        </h1>
        
        <p className="font-poppins font-light text-[20px] leading-[30px] text-[#222222] max-w-[794px] mb-[36px]">
          Explore the rich history, ancient ruins, and cultural wonders of a nation 
          where every stone tells a story spanning thousands of years.
        </p>
        
        <a href="#explore" className="inline-flex flex-row items-center pt-[7px] pb-[8px] pl-[26px] pr-[15px] gap-[20px] bg-[#1F5E4E] shadow-[0px_6px_16px_rgba(31,94,78,0.12)] text-white border-none rounded-lg text-[0.9rem] font-semibold cursor-pointer font-poppins no-underline transition-all duration-250 w-fit hover:bg-gold hover:text-deep-green hover:-translate-y-0.5">
          Start Exploring
          <div className="w-[22px] h-[22px] bg-white/20 rounded-full flex items-center justify-center text-[0.8rem]">
            →
          </div>
        </a>
      </div>

      {/* Floating Site Card - Bottom Right */}
      <div className="absolute bottom-10 right-10 z-10 bg-white rounded-xl py-4 px-5 flex items-center gap-5 shadow-[0_8px_32px_rgba(0,0,0,0.18)] min-w-[280px]">
        <img src="/images/image 18.png" alt="Galle Fort" className="w-[60px] h-[60px] rounded-lg object-cover" />
        <div className="flex-1">
          <div className="font-bold text-[0.95rem] text-text-dark">Galle Dutch Fort</div>
          <div className="text-[0.78rem] text-text-muted mt-0.5">Southern Province</div>
        </div>
        <a href="#" className="text-deep-green text-[0.82rem] font-semibold no-underline whitespace-nowrap flex items-center gap-1 transition-colors duration-200 hover:text-gold">
          View <span>→</span>
        </a>
      </div>

      {/* Slide Dots */}
      <div className="absolute bottom-[54px] left-1/2 -translate-x-1/2 z-10 flex items-center gap-1.5">
        {[0, 1, 2, 3].map((index) => (
          <button 
            key={index}
            onClick={() => setActiveSlide(index)}
            className={`h-2 rounded-full transition-all duration-300 ${activeSlide === index ? 'bg-white w-[22px] rounded-md' : 'bg-white/50 w-2'}`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10 text-[0.72rem] text-white/70 tracking-[2px] uppercase flex flex-col items-center gap-1">
        <div className="w-px h-5 bg-white/50 mb-1"></div>
        Scroll
      </div>
    </section>
  );
};

export default HeroSection;
