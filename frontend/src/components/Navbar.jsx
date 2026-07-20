import React from 'react';

const Navbar = () => {
  return (
    <nav className="sticky top-0 z-[2000] bg-cream/95 backdrop-blur-md border-b border-gold/25 px-10 flex items-center justify-between h-[66px]">
      <a href="#" className="flex items-center gap-2.5 no-underline">
        <div className="w-[42px] h-[42px] rounded-full bg-deep-green flex items-center justify-center text-[1.2rem]">
          <img src="/images/LOGO.png" alt="Emblem" className="w-full h-full object-contain" />
        </div>
        <div>
          <div className="font-serif text-[1rem] font-bold text-deep-green leading-[1.2]">SRI LANKA HERITAGE</div>
          <div className="text-[0.7rem] text-text-muted font-sans font-normal">DEPARTMENT OF ARCHAEOLOGY</div>
        </div>
      </a>
      <ul className="flex gap-[30px] list-none m-0 p-0">
        <li><a href="#home" className="no-underline text-text-mid text-[0.87rem] font-medium transition-colors duration-200 hover:text-deep-green">Home</a></li>
        <li><a href="#explore" className="no-underline text-text-mid text-[0.87rem] font-medium transition-colors duration-200 hover:text-deep-green">Explore Map</a></li>
        <li><a href="#sites" className="no-underline text-text-mid text-[0.87rem] font-medium transition-colors duration-200 hover:text-deep-green">Heritage Sites</a></li>
        <li><a href="#about" className="no-underline text-text-mid text-[0.87rem] font-medium transition-colors duration-200 hover:text-deep-green">About</a></li>
      </ul>
      <div className="flex items-center gap-3">
        <button className="bg-deep-green text-white border border-deep-green px-[13px] py-[5px] rounded-full text-[0.82rem] cursor-pointer transition-all duration-200 font-sans">EN</button>
        <button className="bg-transparent text-text-mid border border-deep-green/30 px-[13px] py-[5px] rounded-full text-[0.82rem] cursor-pointer transition-all duration-200 hover:bg-deep-green hover:text-white hover:border-deep-green font-sans">සිං</button>
        <a href="#explore" className="inline-block bg-deep-green text-white border-none px-[22px] py-[9px] rounded-full text-[0.85rem] font-semibold cursor-pointer transition-all duration-250 no-underline hover:bg-gold hover:text-deep-green hover:-translate-y-[1px]">Registry Map</a>
      </div>
    </nav>
  );
};

export default Navbar;
