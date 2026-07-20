import React from 'react';

const PartnersSection = () => {
  return (
    <section className="bg-[#F8F6F1] py-[80px] px-[40px] relative overflow-hidden">
      <img src="/images/half.png" alt="Buddha Statue" className="absolute left-[10px] top-[20px] h-full max-h-[370px] object-contain object-left-bottom opacity-80 pointer-events-none z-0" />
      
      <div className="relative z-10 w-full text-center top-[60px] pb-[60px]">
        <div className="text-gold text-[0.72rem] font-bold tracking-[3px] uppercase mb-3">OUR NETWORK</div>
        <h2 className="font-serif text-[clamp(1.6rem,3vw,2.2rem)] font-bold text-text-dark mb-[20px]">
          Partners in Preservation
        </h2>
        <p className="text-[0.95rem] text-text-muted max-w-[680px] mx-auto mb-[50px] leading-[1.75]">
          Safeguarding Sri Lanka's heritage is a collaborative effort. 
          We work closely with global and local institutions to ensure our monuments 
          endure for generations to come.
        </p>

        <div className="flex justify-center gap-[28px] flex-wrap">
          <div className="bg-white rounded-2xl py-[28px] px-[30px] flex items-start gap-[18px] shadow-[0_4px_24px_rgba(0,0,0,0.07)] max-w-[356px] text-left transition-all duration-250 hover:-translate-y-1 hover:shadow-[0_12px_40px_rgba(0,0,0,0.12)]">
            <img src="/images/archelogicaldeptlogo.png" alt="Department of Archaeology" className="w-[64px] h-[64px] object-contain shrink-0 rounded-lg" />
            <div>
              <h4 className="font-serif text-[1rem] font-bold text-text-dark mb-2">Department of Archaeology</h4>
              <p className="text-[0.78rem] text-text-muted leading-[1.55]">The primary state institution entrusted with the protection of Sri Lanka's cultural heritage.</p>
            </div>
          </div>
          
          <div className="bg-white rounded-2xl py-[28px] px-[30px] flex items-start gap-[18px] shadow-[0_4px_24px_rgba(0,0,0,0.07)] max-w-[356px] text-left transition-all duration-250 hover:-translate-y-1 hover:shadow-[0_12px_40px_rgba(0,0,0,0.12)]">
            <img src="/images/image 2.png" alt="UNESCO" className="w-[64px] h-[64px] object-contain shrink-0 rounded-lg" />
            <div>
              <h4 className="font-serif text-[1rem] font-bold text-text-dark mb-2">UNESCO</h4>
              <p className="text-[0.78rem] text-text-muted leading-[1.55]">Recognizing and protecting Sri Lanka's World Heritage sites of outstanding universal value.</p>
            </div>
          </div>
          
          <div className="bg-white rounded-2xl py-[28px] px-[30px] flex items-start gap-[18px] shadow-[0_4px_24px_rgba(0,0,0,0.07)] max-w-[356px] text-left transition-all duration-250 hover:-translate-y-1 hover:shadow-[0_12px_40px_rgba(0,0,0,0.12)]">
            <img src="/images/image 35.png" alt="Central Cultural Fund" className="w-[64px] h-[64px] object-contain shrink-0 rounded-lg" />
            <div>
              <h4 className="font-serif text-[1rem] font-bold text-text-dark mb-2">Central Cultural Fund</h4>
              <p className="text-[0.78rem] text-text-muted leading-[1.55]">Managing the Cultural Triangle and leading extensive archaeological excavation and conservation.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PartnersSection;
