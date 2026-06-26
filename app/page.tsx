import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { ProductCard } from '@/components/ProductCard';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, Star, ShieldCheck, Truck, RotateCcw } from 'lucide-react';

// Mock Data
const MOCK_PRODUCTS = [
  { id: '1', name: 'Comfort Genuine Leather Sacchi Shoe', code: 'S081B', currentPrice: 1250, originalPrice: 1450, discount: 14, imageUrl: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='800' height='800' viewBox='0 0 800 800'%3E%3Crect width='100%25' height='100%25' fill='%23f0f0f0'/%3E%3Ctext x='50%25' y='50%25' font-family='sans-serif' font-size='40' fill='%23a0a0a0' text-anchor='middle' dy='.3em'%3EImage%3C/text%3E%3C/svg%3E", colors: ['#000000', '#5c3a21'], sizes: [39, 40, 41, 42, 43, 44] },
  { id: '2', name: 'Classic Premium Black Casual', code: 'C002B', currentPrice: 2116, originalPrice: 2490, discount: 15, imageUrl: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='800' height='800' viewBox='0 0 800 800'%3E%3Crect width='100%25' height='100%25' fill='%23f0f0f0'/%3E%3Ctext x='50%25' y='50%25' font-family='sans-serif' font-size='40' fill='%23a0a0a0' text-anchor='middle' dy='.3em'%3EImage%3C/text%3E%3C/svg%3E", colors: ['#000000'], sizes: [40, 41, 42] },
  { id: '3', name: 'Refined Choice Sandal', code: 'S046M', currentPrice: 1606, originalPrice: 1890, discount: 15, imageUrl: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='800' height='800' viewBox='0 0 800 800'%3E%3Crect width='100%25' height='100%25' fill='%23f0f0f0'/%3E%3Ctext x='50%25' y='50%25' font-family='sans-serif' font-size='40' fill='%23a0a0a0' text-anchor='middle' dy='.3em'%3EImage%3C/text%3E%3C/svg%3E", colors: ['#5c3a21', '#8b5a2b'], sizes: [41, 42, 43, 44] },
  { id: '4', name: 'Best Sandal for Everyday Use', code: 'S097B', currentPrice: 1521, originalPrice: 1690, discount: 10, imageUrl: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='800' height='800' viewBox='0 0 800 800'%3E%3Crect width='100%25' height='100%25' fill='%23f0f0f0'/%3E%3Ctext x='50%25' y='50%25' font-family='sans-serif' font-size='40' fill='%23a0a0a0' text-anchor='middle' dy='.3em'%3EImage%3C/text%3E%3C/svg%3E", colors: ['#000000'], sizes: [40, 41, 42, 43] },
  { id: '5', name: 'Men\'s Genuine Leather Cycle Shoe', code: 'C031M', currentPrice: 1432, originalPrice: 1790, discount: 20, imageUrl: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='800' height='800' viewBox='0 0 800 800'%3E%3Crect width='100%25' height='100%25' fill='%23f0f0f0'/%3E%3Ctext x='50%25' y='50%25' font-family='sans-serif' font-size='40' fill='%23a0a0a0' text-anchor='middle' dy='.3em'%3EImage%3C/text%3E%3C/svg%3E", colors: ['#000000', '#333333'], sizes: [39, 40, 41, 42] },
];

const CATEGORIES = [
  { name: 'Sandal', image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='400' viewBox='0 0 400 400'%3E%3Crect width='100%25' height='100%25' fill='%23f0f0f0'/%3E%3Ctext x='50%25' y='50%25' font-family='sans-serif' font-size='20' fill='%23a0a0a0' text-anchor='middle' dy='.3em'%3ECategory%3C/text%3E%3C/svg%3E" },
  { name: 'Tarsal', image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='400' viewBox='0 0 400 400'%3E%3Crect width='100%25' height='100%25' fill='%23f0f0f0'/%3E%3Ctext x='50%25' y='50%25' font-family='sans-serif' font-size='20' fill='%23a0a0a0' text-anchor='middle' dy='.3em'%3ECategory%3C/text%3E%3C/svg%3E" },
  { name: 'Loafer', image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='400' viewBox='0 0 400 400'%3E%3Crect width='100%25' height='100%25' fill='%23f0f0f0'/%3E%3Ctext x='50%25' y='50%25' font-family='sans-serif' font-size='20' fill='%23a0a0a0' text-anchor='middle' dy='.3em'%3ECategory%3C/text%3E%3C/svg%3E" },
  { name: 'Half Loafer', image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='400' viewBox='0 0 400 400'%3E%3Crect width='100%25' height='100%25' fill='%23f0f0f0'/%3E%3Ctext x='50%25' y='50%25' font-family='sans-serif' font-size='20' fill='%23a0a0a0' text-anchor='middle' dy='.3em'%3ECategory%3C/text%3E%3C/svg%3E" },
  { name: 'Formal Shoes', image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='400' viewBox='0 0 400 400'%3E%3Crect width='100%25' height='100%25' fill='%23f0f0f0'/%3E%3Ctext x='50%25' y='50%25' font-family='sans-serif' font-size='20' fill='%23a0a0a0' text-anchor='middle' dy='.3em'%3ECategory%3C/text%3E%3C/svg%3E" },
];

export default function Home() {
  return (
    <>
      <Header />
      <main className="flex-1">
        
        {/* Hero Section */}
        <section className="relative bg-section overflow-hidden py-6">
          <div className="absolute inset-0 bg-transparent"></div>
          <div className="max-w-7xl mx-auto px-4 md:px-8 py-12 md:py-16 relative flex flex-col md:flex-row items-center bg-primary rounded-2xl shadow-xl overflow-hidden text-white mx-4 lg:mx-auto">
            <div className="absolute right-[-5%] bottom-[-20%] w-96 h-96 bg-white/5 rounded-full blur-3xl"></div>
            <div className="md:w-1/2 z-10 text-center md:text-left mb-10 md:mb-0 md:pl-8">
              <span className="text-secondary font-bold tracking-widest uppercase text-xs mb-2 block">New Collection 2026</span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight uppercase tracking-tight">
                Handcrafted <br/>Luxury For <br/>Your Feet
              </h1>
              <p className="text-gray-300 mb-8 max-w-md mx-auto md:mx-0 text-sm">
                Experience unparalleled comfort and premium craftsmanship with our latest range of genuine leather footwear.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                <Link href="#" className="bg-secondary text-primary font-bold px-8 py-3 rounded-md text-xs uppercase hover:bg-white transition-colors flex items-center justify-center gap-2">
                  Shop Now <ArrowRight className="w-4 h-4" />
                </Link>
                <Link href="#" className="bg-white/10 hover:bg-white/20 text-white border border-white/20 px-8 py-3 rounded-md font-bold text-xs uppercase tracking-wide transition-colors flex items-center justify-center">
                  Explore
                </Link>
              </div>
            </div>
            <div className="md:w-1/2 relative z-10 flex justify-center p-4">
              <div className="relative w-full max-w-lg aspect-square bg-gradient-to-br from-secondary/20 to-transparent border border-white/10 rounded-lg backdrop-blur-md flex items-center justify-center">
                <div className="absolute inset-0 bg-secondary/10 rounded-full blur-3xl hidden"></div>
                <Image 
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='1200' height='1200' viewBox='0 0 1200 1200'%3E%3Crect width='100%25' height='100%25' fill='%23f0f0f0'/%3E%3Ctext x='50%25' y='50%25' font-family='sans-serif' font-size='60' fill='%23a0a0a0' text-anchor='middle' dy='.3em'%3EHero%3C/text%3E%3C/svg%3E" 
                  alt="Premium Shoes" 
                  fill 
                  className="object-contain drop-shadow-2xl z-10 scale-110 -rotate-12 hover:rotate-0 transition-transform duration-700 p-8"
                  referrerPolicy="no-referrer"
                  priority
                />
              </div>
            </div>
          </div>
          
          {/* Trust Badges */}
          <div className="bg-white border-y border-border-main">
            <div className="max-w-7xl mx-auto px-4 py-6 grid grid-cols-1 md:grid-cols-3 gap-6 divide-y md:divide-y-0 md:divide-x divide-border-main">
              <div className="flex items-center justify-center gap-4 text-primary p-2">
                <ShieldCheck className="w-8 h-8 text-secondary" />
                <div>
                  <h4 className="font-bold text-sm uppercase">100% Genuine</h4>
                  <p className="text-xs text-gray-500">Premium Leather Quality</p>
                </div>
              </div>
              <div className="flex items-center justify-center gap-4 text-primary p-2">
                <Truck className="w-8 h-8 text-secondary" />
                <div>
                  <h4 className="font-bold text-sm uppercase">Free Shipping</h4>
                  <p className="text-xs text-gray-500">On Orders Above ৳3000</p>
                </div>
              </div>
              <div className="flex items-center justify-center gap-4 text-primary p-2">
                <RotateCcw className="w-8 h-8 text-secondary" />
                <div>
                  <h4 className="font-bold text-sm uppercase">Easy Returns</h4>
                  <p className="text-xs text-gray-500">7 Days Return Policy</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Featured Categories */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4">
            <div className="flex items-center justify-between mb-10">
              <h2 className="text-2xl font-bold text-primary relative inline-block">
                FEATURED CATEGORIES
                <div className="absolute -bottom-2 left-0 w-12 h-1 bg-secondary rounded-full"></div>
              </h2>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 lg:gap-6">
              {CATEGORIES.map((category) => (
                <Link href="#" key={category.name} className="group flex flex-col items-center">
                  <div className="w-full aspect-square bg-section rounded-xl flex items-center justify-center p-6 mb-4 relative overflow-hidden transition-all duration-300 group-hover:shadow-md border border-border-main">
                    <div className="absolute top-3 left-3 z-20">
                      <span className="text-[8px] font-black tracking-widest text-secondary uppercase bg-white/80 px-1 py-0.5 rounded-sm shadow-sm backdrop-blur-sm">JEXON</span>
                    </div>
                    <Image 
                      src={category.image} 
                      alt={category.name} 
                      fill 
                      className="object-contain p-4 mix-blend-multiply group-hover:scale-110 transition-transform duration-500 z-10"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                  <h3 className="text-sm font-bold text-primary uppercase tracking-wide group-hover:text-secondary transition-colors text-center">{category.name}</h3>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Top Selling Products */}
        <section className="py-16 bg-section">
          <div className="max-w-7xl mx-auto px-4">
            <div className="flex items-center justify-between mb-10">
              <h2 className="text-2xl font-bold text-primary relative inline-block">
                TOP SELLING
                <div className="absolute -bottom-2 left-0 w-12 h-1 bg-secondary rounded-full"></div>
              </h2>
              <Link href="#" className="hidden md:flex bg-primary text-white px-5 py-2 rounded-sm text-xs font-bold uppercase tracking-wider hover:bg-secondary hover:text-primary-dark transition-colors items-center gap-2">
                See More <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 lg:gap-6">
              {MOCK_PRODUCTS.map((product) => (
                <ProductCard key={product.id} {...product} />
              ))}
            </div>
            
            <div className="mt-8 flex justify-center md:hidden">
              <Link href="#" className="bg-primary text-white px-8 py-3 rounded-sm text-sm font-bold uppercase tracking-wider hover:bg-secondary hover:text-primary-dark transition-colors w-full text-center">
                View All
              </Link>
            </div>
          </div>
        </section>

        {/* Flash Sale Banner */}
        <section className="py-8 bg-white">
          <div className="max-w-7xl mx-auto px-4">
            <div className="bg-primary-dark rounded-2xl overflow-hidden relative shadow-2xl flex flex-col md:flex-row items-center">
              {/* Abstract Background Shapes */}
              <div className="absolute top-0 right-0 w-96 h-96 bg-secondary/20 rounded-full blur-3xl -mr-20 -mt-20"></div>
              <div className="absolute bottom-0 left-0 w-64 h-64 bg-accent/10 rounded-full blur-3xl -ml-10 -mb-10"></div>
              
              <div className="p-8 md:p-12 lg:p-16 z-10 flex-1 w-full text-center md:text-left">
                <span className="inline-block bg-accent text-white px-3 py-1 rounded-sm text-xs font-bold tracking-widest uppercase mb-4 shadow-[0_0_15px_rgba(27,201,91,0.5)] animate-pulse">
                  Flash Sale
                </span>
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                  Weekend Special <span className="text-secondary">Discount</span>
                </h2>
                <p className="text-gray-400 mb-8 max-w-md mx-auto md:mx-0">
                  Get up to 40% off on selected premium leather collections. Limited time offer!
                </p>
                <div className="flex gap-4 justify-center md:justify-start mb-8">
                  <div className="bg-white/10 backdrop-blur-md rounded-lg p-3 text-center border border-white/20 min-w-[70px]">
                    <span className="block text-2xl font-bold text-white">02</span>
                    <span className="text-[10px] text-gray-300 uppercase tracking-widest">Days</span>
                  </div>
                  <div className="bg-white/10 backdrop-blur-md rounded-lg p-3 text-center border border-white/20 min-w-[70px]">
                    <span className="block text-2xl font-bold text-white">14</span>
                    <span className="text-[10px] text-gray-300 uppercase tracking-widest">Hrs</span>
                  </div>
                  <div className="bg-white/10 backdrop-blur-md rounded-lg p-3 text-center border border-white/20 min-w-[70px]">
                    <span className="block text-2xl font-bold text-white">45</span>
                    <span className="text-[10px] text-gray-300 uppercase tracking-widest">Mins</span>
                  </div>
                </div>
                <Link href="#" className="bg-secondary text-primary-dark hover:bg-white px-8 py-3 rounded-sm font-bold uppercase tracking-wider transition-colors inline-block">
                  Shop Flash Sale
                </Link>
              </div>
              
              <div className="relative w-full md:w-1/2 h-64 md:h-auto min-h-[300px] z-10 flex items-center justify-center p-8 bg-gradient-to-l from-white/5 to-transparent">
                <div className="relative w-full h-full max-w-md">
                   <Image 
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='800' height='800' viewBox='0 0 800 800'%3E%3Crect width='100%25' height='100%25' fill='%23f0f0f0'/%3E%3Ctext x='50%25' y='50%25' font-family='sans-serif' font-size='40' fill='%23a0a0a0' text-anchor='middle' dy='.3em'%3EFlash%3C/text%3E%3C/svg%3E" 
                    alt="Flash Sale Shoe" 
                    fill 
                    className="object-contain drop-shadow-[0_20px_30px_rgba(0,0,0,0.5)] transform -rotate-12 hover:scale-110 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Latest Collection */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4">
            <div className="flex items-center justify-between mb-10">
              <h2 className="text-2xl font-bold text-primary relative inline-block uppercase tracking-wide">
                Latest Collections
                <div className="absolute -bottom-2 left-0 w-12 h-1 bg-secondary rounded-full"></div>
              </h2>
              <Link href="#" className="hidden md:flex bg-primary text-white px-5 py-2 rounded-sm text-xs font-bold uppercase tracking-wider hover:bg-secondary hover:text-primary-dark transition-colors items-center gap-2">
                See More <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 lg:gap-6">
              {[...MOCK_PRODUCTS].reverse().map((product) => (
                <ProductCard key={product.id + 'latest'} {...product} isNew={true} />
              ))}
            </div>
          </div>
        </section>

        {/* Sandal Collection */}
        <section className="py-16 bg-section">
          <div className="max-w-7xl mx-auto px-4">
            <div className="flex items-center justify-between mb-10">
              <h2 className="text-2xl font-bold text-primary relative inline-block uppercase tracking-wide">
                Sandal Collection
                <div className="absolute -bottom-2 left-0 w-12 h-1 bg-secondary rounded-full"></div>
              </h2>
              <Link href="#" className="hidden md:flex bg-primary text-white px-5 py-2 rounded-sm text-xs font-bold uppercase tracking-wider hover:bg-secondary hover:text-primary-dark transition-colors items-center gap-2">
                See More <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 lg:gap-6">
              {MOCK_PRODUCTS.slice(2, 5).map((product) => (
                <ProductCard key={product.id + 'sandal'} {...product} />
              ))}
              {MOCK_PRODUCTS.slice(0, 2).map((product) => (
                <ProductCard key={product.id + 'sandal2'} {...product} />
              ))}
            </div>
          </div>
        </section>

        {/* Tarsal Collection */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4">
            <div className="flex items-center justify-between mb-10">
              <h2 className="text-2xl font-bold text-primary relative inline-block uppercase tracking-wide">
                Tarsal Collection
                <div className="absolute -bottom-2 left-0 w-12 h-1 bg-secondary rounded-full"></div>
              </h2>
              <Link href="#" className="hidden md:flex bg-primary text-white px-5 py-2 rounded-sm text-xs font-bold uppercase tracking-wider hover:bg-secondary hover:text-primary-dark transition-colors items-center gap-2">
                See More <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 lg:gap-6">
              {MOCK_PRODUCTS.slice(0, 5).map((product) => (
                <ProductCard key={product.id + 'tarsal'} {...product} />
              ))}
            </div>
          </div>
        </section>

        {/* Loafer Collection */}
        <section className="py-16 bg-section">
          <div className="max-w-7xl mx-auto px-4">
            <div className="flex items-center justify-between mb-10">
              <h2 className="text-2xl font-bold text-primary relative inline-block uppercase tracking-wide">
                Loafer Collection
                <div className="absolute -bottom-2 left-0 w-12 h-1 bg-secondary rounded-full"></div>
              </h2>
              <Link href="#" className="hidden md:flex bg-primary text-white px-5 py-2 rounded-sm text-xs font-bold uppercase tracking-wider hover:bg-secondary hover:text-primary-dark transition-colors items-center gap-2">
                See More <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 lg:gap-6">
              {[...MOCK_PRODUCTS].reverse().slice(0, 5).map((product) => (
                <ProductCard key={product.id + 'loafer'} {...product} />
              ))}
            </div>
          </div>
        </section>

        {/* Customer Reviews */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 text-center">
            <h2 className="text-2xl font-bold text-primary relative inline-block mb-12 uppercase tracking-wide">
              What Our Customers Say
              <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-12 h-1 bg-secondary rounded-full"></div>
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[1, 2, 3].map((item) => (
                <div key={item} className="bg-section p-8 rounded-xl shadow-sm border border-border-main relative text-left transition-transform hover:-translate-y-1 duration-300">
                  <div className="flex mb-4 text-secondary">
                    <Star className="w-4 h-4 fill-current" />
                    <Star className="w-4 h-4 fill-current" />
                    <Star className="w-4 h-4 fill-current" />
                    <Star className="w-4 h-4 fill-current" />
                    <Star className="w-4 h-4 fill-current" />
                  </div>
                  <p className="text-gray-600 mb-6 italic text-sm leading-relaxed">
                    &quot;Absolutely love the quality of JEXON shoes. The leather is premium and extremely comfortable for daily wear. Highly recommended!&quot;
                  </p>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-primary text-white rounded-full flex items-center justify-center font-bold shadow-md">
                      J
                    </div>
                    <div>
                      <h4 className="font-bold text-sm text-primary tracking-wide">Jahid H.</h4>
                      <p className="text-[10px] text-accent uppercase font-bold tracking-wider">Verified Buyer</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Brand Story Section */}
        <section className="py-20 bg-primary text-white relative overflow-hidden">
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-secondary/10 rounded-full blur-[100px] -mt-[100px] -mr-[100px]"></div>
          <div className="max-w-7xl mx-auto px-4 relative z-10 flex flex-col md:flex-row items-center gap-12">
            <div className="md:w-1/2">
              <span className="text-secondary font-bold tracking-widest uppercase text-sm mb-4 block">The JEXON Legacy</span>
              <h2 className="text-3xl md:text-5xl font-bold mb-6">Crafting Excellence <br/>Since Day One</h2>
              <p className="text-gray-300 mb-6 text-lg leading-relaxed">
                At JEXON, we believe that true luxury lies in the details. Every pair of shoes is meticulously crafted using only the finest genuine leather, blending traditional techniques with modern design.
              </p>
              <p className="text-gray-400 mb-8 leading-relaxed">
                Our commitment to quality ensures that when you step into a JEXON shoe, you&apos;re stepping into unparalleled comfort, durability, and a style that makes a statement.
              </p>
              <Link href="#" className="inline-block bg-transparent border-2 border-secondary text-secondary hover:bg-secondary hover:text-primary-dark px-8 py-3 rounded-sm font-bold uppercase tracking-wider transition-colors">
                Discover Our Story
              </Link>
            </div>
            <div className="md:w-1/2 w-full grid grid-cols-2 gap-4">
              <div className="aspect-[4/5] relative rounded-lg overflow-hidden translate-y-8 shadow-2xl">
                <Image src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='600' height='800' viewBox='0 0 600 800'%3E%3Crect width='100%25' height='100%25' fill='%23f0f0f0'/%3E%3Ctext x='50%25' y='50%25' font-family='sans-serif' font-size='30' fill='%23a0a0a0' text-anchor='middle' dy='.3em'%3ECraft%3C/text%3E%3C/svg%3E" alt="Craftsmanship" fill className="object-cover" />
                <div className="absolute inset-0 bg-primary/20 mix-blend-multiply"></div>
              </div>
              <div className="aspect-[4/5] relative rounded-lg overflow-hidden shadow-2xl">
                <Image src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='600' height='800' viewBox='0 0 600 800'%3E%3Crect width='100%25' height='100%25' fill='%23f0f0f0'/%3E%3Ctext x='50%25' y='50%25' font-family='sans-serif' font-size='30' fill='%23a0a0a0' text-anchor='middle' dy='.3em'%3ELeather%3C/text%3E%3C/svg%3E" alt="Premium Leather" fill className="object-cover" />
                <div className="absolute inset-0 bg-primary/20 mix-blend-multiply"></div>
              </div>
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
