import React from 'react';

const HeroSection = () => {
  return (
    <section id="home" className="relative h-screen min-h-[600px] flex items-stretch overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/images/galle fort.png')" }}
      ></div>

      {/* Left Content Pane with linear gradient overlay */}
      <div 
        className="relative z-10 w-full flex flex-col justify-center px-[80px] py-[80px]"
        style={{ background: "linear-gradient(to right, rgba(245, 240, 232, 0.95) 0%, rgba(245, 240, 232, 0.8) 40%, rgba(245, 240, 232, 0) 80%)" }}
      >
        <h1 className="font-serif font-bold text-[75px] leading-[1.15] text-[#1a3a2a] mb-6">
          Discover the<br />
          Timeless <span className="text-gold">Heritage</span><br />
          Of Sri Lanka
        </h1>
        
        <p className="font-sans text-[18px] leading-[1.6] text-text-dark max-w-[700px] mb-8 opacity-90">
          Explore ancient kingdoms, sacred temples, archaeological wonders and 
          forgotten civilizations through an immersive digital joutney across Sri Lanka
        </p>
        
        <a 
          href="#contact-section" 
          className="inline-flex items-center gap-2 px-6 py-3 bg-[#1F5E4E] hover:bg-gold text-white hover:text-deep-green font-semibold text-[0.95rem] rounded-[6px] transition-all duration-200 w-fit no-underline shadow-md"
        >
          <span>📞</span> Contact Us
        </a>
      </div>

      {/* Floating Site Card - Bottom Right */}
      <div className="absolute bottom-[60px] right-[60px] z-10 bg-white rounded-[12px] py-4 px-6 flex items-center justify-between gap-10 shadow-[0_8px_32px_rgba(0,0,0,0.12)] min-w-[340px]">
        <div>
          <div className="font-bold text-[1.1rem] text-[#1a3a2a]">Galle Fort</div>
          <div className="text-[0.85rem] text-[#7a7a6a] mt-0.5">Southern Province</div>
        </div>
        <a href="#explore" className="text-[#1a3a2a] font-semibold text-[0.85rem] no-underline hover:text-gold flex items-center gap-1 transition-colors duration-200">
          View Details <span className="text-[1.1rem]">&rarr;</span>
        </a>
      </div>

      {/* Slide Dots - Centered under the Card */}
      <div className="absolute bottom-[35px] right-[215px] z-10 flex items-center gap-1.5">
        <div className="w-[32px] h-[5px] rounded-full bg-white"></div>
        <div className="w-1.5 h-1.5 rounded-full bg-white/60"></div>
        <div className="w-1.5 h-1.5 rounded-full bg-white/60"></div>
        <div className="w-1.5 h-1.5 rounded-full bg-white/60"></div>
        <div className="w-1.5 h-1.5 rounded-full bg-white/60"></div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10 text-[0.72rem] text-white/70 tracking-[2px] uppercase flex flex-col items-center gap-1">
        Scroll
      </div>
    </section>
  );
};

export default HeroSection;
