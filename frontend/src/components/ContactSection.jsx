import React from 'react';

const ContactSection = () => {
  return (
    <section className="bg-cream py-[90px] px-10 relative overflow-hidden" id="contact-section">
      <img src="/images/half.png" className="absolute left-[10px] top-[10%] h-[90%] opacity-80 z-0 pointer-events-none" alt="" />
      
      <div className="max-w-[1100px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-20 relative z-10">
        
        {/* Left Side */}
        <div className="contact-left">
          <p className="text-gold text-[0.72rem] font-bold tracking-[3px] uppercase mb-3">CONTACT US</p>
          <h2 className="font-serif text-[2.2rem] font-extrabold text-text-dark mb-4 leading-[1.2]">
            Let's Preserve Sri Lanka's Heritage Together
          </h2>
          <p className="text-text-mid text-[0.9rem] leading-[1.6] mb-10 max-w-[90%]">
            Have questions, research inquiries, partnership opportunities, or wish to
            contribute to documenting Sri Lanka's historical treasures? We'd love to hear from you.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-[15px] mb-[50px]">
            <div className="bg-white rounded-xl p-5 flex items-start gap-[15px] shadow-[0_4px_15px_rgba(0,0,0,0.03)]">
              <div className="w-8 h-8 rounded-full bg-gold/10 text-deep-green flex items-center justify-center shrink-0 text-[1rem]">📍</div>
              <div className="info-card-content">
                <h5 className="text-deep-green text-[0.85rem] mb-1 font-bold">Address</h5>
                <p className="text-text-mid text-[0.75rem] leading-[1.4]">Department of Archaeology, Colombo, Sri Lanka</p>
              </div>
            </div>

            <div className="bg-white rounded-xl p-5 flex items-start gap-[15px] shadow-[0_4px_15px_rgba(0,0,0,0.03)]">
              <div className="w-8 h-8 rounded-full bg-gold/10 text-deep-green flex items-center justify-center shrink-0 text-[1rem]">📞</div>
              <div className="info-card-content">
                <h5 className="text-deep-green text-[0.85rem] mb-1 font-bold">Phone</h5>
                <p className="text-text-mid text-[0.75rem] leading-[1.4]">+94 11 269 2816<br />+94 11 269 2817</p>
              </div>
            </div>

            <div className="bg-white rounded-xl p-5 flex items-start gap-[15px] shadow-[0_4px_15px_rgba(0,0,0,0.03)]">
              <div className="w-8 h-8 rounded-full bg-gold/10 text-deep-green flex items-center justify-center shrink-0 text-[1rem]">✉️</div>
              <div className="info-card-content">
                <h5 className="text-deep-green text-[0.85rem] mb-1 font-bold">Email</h5>
                <p className="text-text-mid text-[0.75rem] leading-[1.4]">info@archaeology.gov.lk</p>
              </div>
            </div>

            <div className="bg-white rounded-xl p-5 flex items-start gap-[15px] shadow-[0_4px_15px_rgba(0,0,0,0.03)]">
              <div className="w-8 h-8 rounded-full bg-gold/10 text-deep-green flex items-center justify-center shrink-0 text-[1rem]">🕒</div>
              <div className="info-card-content">
                <h5 className="text-deep-green text-[0.85rem] mb-1 font-bold">Office Hours</h5>
                <p className="text-text-mid text-[0.75rem] leading-[1.4]">Monday - Friday<br />8:30 AM - 4:15 PM</p>
              </div>
            </div>
          </div>

          <div className="partners-wrap">
            <h3 className="font-serif text-[1.5rem] text-text-dark mb-5">Our Partners</h3>
            <div className="flex items-center gap-[30px] flex-wrap">
              <img src="/images/archelogicaldeptlogo.png" className="h-[60px] object-contain transition-all duration-300 hover:opacity-100" alt="Department of Archaeology" />
              <img src="/images/image 2.png" className="h-[60px] object-contain transition-all duration-300 hover:opacity-100" alt="Royal College Colombo" />
              <img src="/images/WhatsApp_Image_2025-02-23_at_22.38.43-removebg-preview 2.png" className="h-[60px] object-contain transition-all duration-300 hover:opacity-100" alt="HejCeylon" />
            </div>
          </div>
        </div>

        {/* Right Side - Form */}
        <div className="bg-white rounded-[20px] p-10 shadow-[0_10px_40px_rgba(0,0,0,0.05)]">
          <h3 className="font-serif text-[1.8rem] text-text-dark mb-1.5">Send Us A Message</h3>
          <p className="text-[0.85rem] text-text-muted mb-[30px]">We'll get back to you as soon as possible.</p>
          <form onSubmit={(e) => e.preventDefault()}>
            <div className="mb-5">
              <label className="block text-[0.82rem] font-semibold text-text-dark mb-2">Full Name</label>
              <input type="text" placeholder="Enter your Name" className="w-full px-4 py-3 border border-[#e5e5e5] rounded-lg text-[0.9rem] font-sans text-text-dark bg-white outline-none transition-colors duration-200 focus:border-deep-green" />
            </div>
            
            <div className="mb-5">
              <label className="block text-[0.82rem] font-semibold text-text-dark mb-2">Email Address</label>
              <input type="email" placeholder="Enter Email" className="w-full px-4 py-3 border border-[#e5e5e5] rounded-lg text-[0.9rem] font-sans text-text-dark bg-white outline-none transition-colors duration-200 focus:border-deep-green" />
            </div>

            <div className="mb-5">
              <label className="block text-[0.82rem] font-semibold text-text-dark mb-2">Phone Number</label>
              <input type="text" placeholder="Enter Your Phone Number" className="w-full px-4 py-3 border border-[#e5e5e5] rounded-lg text-[0.9rem] font-sans text-text-dark bg-white outline-none transition-colors duration-200 focus:border-deep-green" />
            </div>

            <div className="mb-5">
              <label className="block text-[0.82rem] font-semibold text-text-dark mb-2">Message</label>
              <textarea placeholder="Enter Your Message" className="w-full px-4 py-3 border border-[#e5e5e5] rounded-lg text-[0.9rem] font-sans text-text-dark bg-white outline-none transition-colors duration-200 focus:border-deep-green resize-y h-[120px]"></textarea>
            </div>

            <button type="submit" className="w-full bg-deep-green text-white border-none p-3.5 rounded-lg text-[0.95rem] font-semibold cursor-pointer font-sans transition-all duration-250 flex items-center justify-center gap-2.5 hover:bg-gold hover:text-deep-green">
              <i>✈</i> Send Your Message
            </button>
          </form>
        </div>

      </div>
    </section>
  );
};

export default ContactSection;
