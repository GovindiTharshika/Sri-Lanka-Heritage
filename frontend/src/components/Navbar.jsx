import React from 'react';

const Navbar = () => {
  return (
    <nav className="sticky top-0 z-[2000] bg-cream/95 backdrop-blur-md border-b border-gold/25 px-10 flex items-center justify-between h-[80px]">
      {/* Left Side: Logo */}
      <a href="#" className="flex items-center no-underline">
        <img src="/images/LOGO.png" alt="Sri Lanka Heritage Logo" className="h-[44px] w-auto" />
      </a>
      
     
     
    </nav>
  );
};

export default Navbar;
