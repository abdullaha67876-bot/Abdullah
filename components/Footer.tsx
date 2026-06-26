import Link from 'next/link';
import { Logo } from './Logo';
import { Facebook, Twitter, Instagram, Youtube, MapPin, Phone, Mail } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-white border-t border-border-main text-primary pt-16 pb-24 lg:pb-8">
      <div className="max-w-7xl mx-auto px-4">
        
        {/* Newsletter Section */}
        <div className="bg-section p-8 rounded-xl flex flex-col md:flex-row items-center justify-between gap-6 mb-16 border border-border-main relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-white rounded-full blur-3xl -mr-10 -mt-10 pointer-events-none"></div>
          
          <div className="relative z-10 md:w-1/2">
            <h3 className="text-2xl font-bold text-primary mb-2 tracking-tight">Subscribe to our Newsletter</h3>
            <p className="text-sm text-gray-500">Get the latest updates on new arrivals, exclusive offers, and more.</p>
          </div>
          <div className="relative z-10 w-full md:w-1/2 flex gap-2">
            <input 
              type="email" 
              placeholder="Enter your email address" 
              className="flex-1 bg-white border border-border-main rounded-md px-4 py-3 text-sm text-text-main placeholder-gray-400 focus:outline-none focus:border-secondary transition-colors"
            />
            <button className="bg-primary hover:bg-primary-dark text-secondary font-bold px-6 py-3 rounded-md transition-colors text-sm uppercase tracking-wider">
              Subscribe
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          
          {/* Brand Info */}
          <div>
            <div className="inline-block mb-6 text-primary">
              <Logo className="h-8" />
            </div>
            <p className="text-sm text-gray-500 mb-6 leading-relaxed">
              JEXON represents the pinnacle of premium footwear. We combine traditional craftsmanship with modern design to create shoes that define luxury and comfort.
            </p>
            <div className="flex gap-4">
              <Link href="#" className="bg-section border border-border-main p-2 rounded-full hover:bg-primary hover:text-white transition-all"><Facebook className="w-4 h-4" /></Link>
              <Link href="#" className="bg-section border border-border-main p-2 rounded-full hover:bg-primary hover:text-white transition-all"><Twitter className="w-4 h-4" /></Link>
              <Link href="#" className="bg-section border border-border-main p-2 rounded-full hover:bg-primary hover:text-white transition-all"><Instagram className="w-4 h-4" /></Link>
              <Link href="#" className="bg-section border border-border-main p-2 rounded-full hover:bg-primary hover:text-white transition-all"><Youtube className="w-4 h-4" /></Link>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-primary font-bold mb-6 tracking-wide uppercase">Quick Links</h4>
            <ul className="space-y-3 text-sm text-gray-500 font-medium">
              <li><Link href="#" className="hover:text-secondary transition-colors">About Us</Link></li>
              <li><Link href="#" className="hover:text-secondary transition-colors">Contact Us</Link></li>
              <li><Link href="#" className="hover:text-secondary transition-colors">Store Locator</Link></li>
              <li><Link href="#" className="hover:text-secondary transition-colors">Track Order</Link></li>
              <li><Link href="#" className="hover:text-secondary transition-colors">FAQs</Link></li>
              <li><Link href="#" className="hover:text-secondary transition-colors">Careers</Link></li>
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h4 className="text-primary font-bold mb-6 tracking-wide uppercase">Top Categories</h4>
            <ul className="space-y-3 text-sm text-gray-500 font-medium">
              <li><Link href="#" className="hover:text-secondary transition-colors">Premium Formal Shoes</Link></li>
              <li><Link href="#" className="hover:text-secondary transition-colors">Casual Loafers</Link></li>
              <li><Link href="#" className="hover:text-secondary transition-colors">Leather Sandals</Link></li>
              <li><Link href="#" className="hover:text-secondary transition-colors">Classic Boots</Link></li>
              <li><Link href="#" className="hover:text-secondary transition-colors">Leather Wallets</Link></li>
              <li><Link href="#" className="hover:text-secondary transition-colors">Accessories</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-primary font-bold mb-6 tracking-wide uppercase">Contact Us</h4>
            <ul className="space-y-4 text-sm text-gray-500 font-medium">
              <li className="flex gap-3">
                <MapPin className="w-5 h-5 text-secondary shrink-0" />
                <span>123 Premium Leather Ave, Fashion District, Dhaka 1200</span>
              </li>
              <li className="flex gap-3">
                <Phone className="w-5 h-5 text-secondary shrink-0" />
                <span>+880 1234 56789<br/><span className="text-[10px] text-gray-400">Sat to Thu (10am - 8pm)</span></span>
              </li>
              <li className="flex gap-3">
                <Mail className="w-5 h-5 text-secondary shrink-0" />
                <span>support@jexonfootwear.com</span>
              </li>
            </ul>
          </div>

        </div>

        {/* Copyright */}
        <div className="pt-8 border-t border-border-main text-[10px] font-medium flex flex-col md:flex-row justify-between items-center gap-4 text-primary">
          <p>&copy; 2026 JEXON Footwear. All Rights Reserved.</p>
          <div className="flex gap-4 uppercase opacity-50">
            <Link href="#" className="hover:text-secondary hover:opacity-100 transition-colors">Privacy Policy</Link>
            <Link href="#" className="hover:text-secondary hover:opacity-100 transition-colors">Terms of Service</Link>
            <Link href="#" className="hover:text-secondary hover:opacity-100 transition-colors">Refunds</Link>
          </div>
          <div className="hidden md:block text-secondary font-bold uppercase">
            Made with passion by JEXON Group
          </div>
        </div>
      </div>
    </footer>
  );
}
