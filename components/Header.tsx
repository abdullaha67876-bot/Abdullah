'use client';

import { useState } from 'react';
import { Search, Heart, ShoppingBag, User, MapPin, Phone, Menu, X } from 'lucide-react';
import Link from 'next/link';
import { Logo } from './Logo';

export function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navLinks = [
    "Sandal", "Tarsal", "Loafer", "Half Loafer", "Formal Shoes", 
    "Casual Shoes", "Cycle Shoes", "Sacchi", "Boots", "Wallets", "Belt"
  ];

  return (
    <header className="w-full bg-white z-50 sticky top-0 shadow-sm">
      {/* Top Announcement Bar */}
      <div className="bg-primary text-secondary py-1.5 px-6 text-[10px] font-semibold tracking-wide uppercase hidden md:flex justify-between items-center max-w-7xl mx-auto">
        <span>Get Extra 10% OFF On Bkash Payment</span>
        <span>Free Shipping Above ৳3000</span>
        <span>Easy Return Policy</span>
      </div>
      
      {/* Mobile Top Bar */}
      <div className="bg-primary text-secondary py-1.5 px-6 text-[10px] font-semibold tracking-wide uppercase flex justify-center text-center md:hidden">
        <span>Get Extra 10% OFF On Bkash Payment</span>
      </div>

      {/* Main Header Container */}
      <div className="bg-white border-b border-border-main text-text-main">
        <div className="max-w-7xl mx-auto px-4 py-4 lg:py-6">
          <div className="flex items-center justify-between gap-4">
            
            {/* Desktop Left */}
            <div className="hidden lg:flex items-center gap-6 text-[11px] font-medium opacity-70 flex-1">
              <Link href="#" className="flex items-center gap-1 hover:text-secondary transition-colors">
                <MapPin className="w-4 h-4" />
                <span>Find Store</span>
              </Link>
              <div className="flex flex-col">
                <Link href="tel:+880123456789" className="flex items-center gap-1 hover:text-secondary transition-colors font-medium">
                  <Phone className="w-4 h-4" />
                  <span>Support: +880 1234 5678</span>
                </Link>
              </div>
              <Link href="#" className="font-bold text-accent tracking-wide hover:opacity-100 transition-colors">
                Offer Zone
              </Link>
            </div>

            {/* Mobile Left (Hamburger) */}
            <div className="lg:hidden flex-1 flex items-center">
              <button 
                onClick={() => setIsMobileMenuOpen(true)}
                className="text-primary hover:text-secondary p-1"
              >
                <Menu className="w-6 h-6" />
              </button>
            </div>

            {/* Center Logo */}
            <div className="flex-1 lg:flex-none flex flex-col items-center justify-center relative z-10 text-center">
              <Link href="/" className="flex flex-col items-center">
                <h1 className="text-primary text-4xl lg:text-5xl font-black tracking-tighter leading-none m-0">JEXON</h1>
                <p className="text-[8px] tracking-[0.4em] uppercase opacity-60 ml-1 text-text-main mt-1">Premium Footwear</p>
              </Link>
            </div>

            {/* Right Side */}
            <div className="flex-1 flex items-center justify-end gap-4 lg:gap-6">
              
              {/* Desktop Search */}
              <div className="hidden xl:flex relative w-64">
                <input 
                  type="text" 
                  placeholder="Search your style..." 
                  className="w-full bg-section border-none text-text-main placeholder-gray-400 rounded-full py-2.5 px-4 text-xs focus:outline-none focus:ring-1 focus:ring-secondary transition-all"
                />
                <button className="absolute right-3 top-1/2 -translate-y-1/2 text-primary hover:text-secondary">
                  <Search className="w-4 h-4" />
                </button>
              </div>

              {/* Mobile Search Icon */}
              <button className="xl:hidden text-primary hover:text-secondary transition-colors">
                <Search className="w-6 h-6 lg:w-5 lg:h-5" />
              </button>

              <div className="hidden lg:flex items-center gap-4 text-primary">
                <Link href="#" className="hover:text-secondary transition-colors relative">
                  <div className="w-5 h-5 flex flex-col justify-center border-b-2 border-secondary hover:border-primary transition-colors"><Heart className="w-4 h-4 absolute inset-0 m-auto opacity-0" /></div>
                </Link>
                <Link href="#" className="hover:text-secondary transition-colors relative">
                  <div className="w-5 h-5 border-2 border-primary rounded-full flex items-center justify-center"><User className="w-3 h-3" /></div>
                </Link>
                <Link href="#" className="hover:text-secondary transition-colors relative">
                  <div className="w-5 h-5 bg-primary rounded-full text-white text-[9px] flex items-center justify-center font-bold">3</div>
                </Link>
              </div>
            </div>
            
          </div>
        </div>
      </div>

      {/* Desktop Navigation Menu */}
      <nav className="hidden lg:block border-b border-border-main bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <ul className="flex items-center justify-center gap-6 xl:gap-8 py-3">
            {navLinks.map((link) => (
              <li key={link}>
                <Link href="#" className="text-primary text-[11px] font-bold hover:text-secondary border-b-2 border-transparent hover:border-secondary pb-1 transition-colors tracking-widest uppercase">
                  {link}
                </Link>
              </li>
            ))}
            <li>
              <Link href="#" className="text-accent text-[11px] font-bold hover:text-primary pb-1 transition-colors tracking-widest uppercase flex items-center gap-1">
                More
                <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
              </Link>
            </li>
          </ul>
        </div>
      </nav>

      {/* Mobile Slide Menu */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 bg-black/60 z-50 lg:hidden" onClick={() => setIsMobileMenuOpen(false)}>
          <div 
            className="absolute top-0 left-0 w-4/5 max-w-sm h-full bg-white shadow-2xl flex flex-col"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="p-4 bg-primary text-white flex justify-between items-center">
              <span className="font-bold tracking-wider text-xl">MENU</span>
              <button onClick={() => setIsMobileMenuOpen(false)}>
                <X className="w-6 h-6 text-white" />
              </button>
            </div>
            <div className="flex-1 overflow-y-auto">
              <ul className="py-2">
                {navLinks.map((link) => (
                  <li key={link}>
                    <Link href="#" className="block px-6 py-4 border-b border-gray-100 text-gray-800 font-medium text-sm hover:bg-gray-50 uppercase tracking-wide">
                      {link}
                    </Link>
                  </li>
                ))}
                <li>
                  <Link href="#" className="block px-6 py-4 text-accent font-bold text-sm uppercase tracking-wide">
                    OFFER ZONE
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      )}

      {/* Mobile Bottom Navigation Bar */}
      <div className="fixed bottom-0 left-0 w-full bg-white border-t border-border-main z-40 flex justify-between items-center px-6 py-3 lg:hidden shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.05)]">
        <Link href="#" className="flex flex-col items-center gap-1 text-primary">
          <Menu className="w-5 h-5" />
          <span className="text-[10px] font-medium">Categories</span>
        </Link>
        <Link href="#" className="flex flex-col items-center gap-1 text-gray-500 hover:text-primary">
          <Search className="w-5 h-5" />
          <span className="text-[10px] font-medium">Search</span>
        </Link>
        <Link href="#" className="flex flex-col items-center gap-1 text-gray-500 hover:text-primary -mt-6 bg-white p-3 rounded-full shadow-lg border border-gray-100">
          <Heart className="w-5 h-5 text-gray-500" />
        </Link>
        <Link href="#" className="flex flex-col items-center gap-1 text-gray-500 hover:text-primary relative">
          <ShoppingBag className="w-5 h-5" />
          <span className="text-[10px] font-medium">Cart</span>
          <span className="absolute -top-1 -right-1 bg-secondary text-primary-dark text-[10px] font-bold w-4 h-4 flex items-center justify-center rounded-full">2</span>
        </Link>
        <Link href="#" className="flex flex-col items-center gap-1 text-gray-500 hover:text-primary">
          <User className="w-5 h-5" />
          <span className="text-[10px] font-medium">Account</span>
        </Link>
      </div>
    </header>
  );
}
