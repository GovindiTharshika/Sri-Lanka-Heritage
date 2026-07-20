import React from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import PartnersSection from './components/PartnersSection';
import MapSection from './components/MapSection';
import FeaturesSection from './components/FeaturesSection';
import ContactSection from './components/ContactSection';

function App() {
  return (
    <div className="font-sans antialiased text-text-dark bg-cream selection:bg-gold selection:text-deep-green">
      <Navbar />
      <main>
        <HeroSection />
        <PartnersSection />
        <MapSection />
        <FeaturesSection />
        <ContactSection />
      </main>
      
      <footer className="bg-deep-green text-[#e6e0d4] pt-20 pb-[30px] px-10 text-[0.9rem]">
        <div className="max-w-[1200px] mx-auto">
          <div className="flex flex-wrap justify-between gap-10 mb-16 pb-12 border-b border-[#2a4a3a]">
            <div className="max-w-[320px]">
              <div className="font-serif text-[1.4rem] font-bold text-gold mb-4">Sri Lanka Heritage</div>
              <p className="mb-6 leading-[1.6] opacity-80 text-[0.85rem]">The official national registry of protected archaeological monuments under the Department of Archaeology, Sri Lanka.</p>
            </div>
            
            <div className="min-w-[140px]">
              <h4 className="text-white text-[1.05rem] font-semibold mb-5 font-serif">Registry</h4>
              <ul className="list-none p-0 m-0 space-y-3">
                <li><a href="#" className="text-[#a8a89e] hover:text-gold no-underline transition-colors text-[0.85rem]">All Sites</a></li>
                <li><a href="#" className="text-[#a8a89e] hover:text-gold no-underline transition-colors text-[0.85rem]">By Province</a></li>
                <li><a href="#" className="text-[#a8a89e] hover:text-gold no-underline transition-colors text-[0.85rem]">By District</a></li>
                <li><a href="#" className="text-[#a8a89e] hover:text-gold no-underline transition-colors text-[0.85rem]">UNESCO Sites</a></li>
              </ul>
            </div>
          </div>
          
          <div className="flex flex-wrap justify-between items-center gap-5 text-[#86867a] text-[0.78rem]">
            <span>© 2025 Department of Archaeology, Sri Lanka. All rights reserved.</span>
            <span>Built for heritage preservation and public education.</span>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
