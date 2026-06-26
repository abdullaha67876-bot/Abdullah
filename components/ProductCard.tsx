'use client';

import { Heart, Eye, ShoppingCart } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

interface ProductCardProps {
  id: string;
  name: string;
  code: string;
  currentPrice: number;
  originalPrice: number;
  discount: number;
  imageUrl: string;
  colors: string[];
  sizes: number[];
  isNew?: boolean;
}

export function ProductCard({
  name,
  code,
  currentPrice,
  originalPrice,
  discount,
  imageUrl,
  colors,
  sizes,
  isNew
}: ProductCardProps) {
  return (
    <div className="group bg-white p-3 rounded-xl shadow-sm border border-border-main hover:shadow-md transition-all duration-300 relative flex flex-col h-full">
      {/* Image Container */}
      <div className="relative aspect-square bg-section rounded-lg mb-3 flex items-center justify-center overflow-hidden">
        {/* Badges */}
        <div className="absolute top-2 left-2 z-10 flex flex-col gap-1">
          {discount > 0 && (
            <span className="bg-accent text-white text-[8px] font-bold px-2 py-0.5 rounded shadow-sm">
              -{discount}%
            </span>
          )}
          {isNew && (
            <span className="bg-secondary text-primary-dark text-[8px] font-bold px-2 py-0.5 rounded shadow-sm">
              NEW
            </span>
          )}
        </div>

        <div className="absolute inset-0 bg-transparent flex items-center justify-center p-4">
          <div className="relative w-full h-full transform group-hover:scale-105 transition-transform duration-500">
            <Image
              src={imageUrl}
              alt={name}
              fill
              className="object-contain drop-shadow-[0_10px_10px_rgba(0,0,0,0.1)]"
              referrerPolicy="no-referrer"
            />
          </div>
        </div>

        {/* Hover Actions */}
        <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-2">
          <button className="w-8 h-8 bg-white rounded-full flex items-center justify-center text-primary hover:bg-secondary hover:text-white transition-colors shadow-sm translate-y-2 group-hover:translate-y-0 duration-300 delay-75">
            <Heart className="w-3 h-3" />
          </button>
          <button className="w-8 h-8 bg-white rounded-full flex items-center justify-center text-primary hover:bg-secondary hover:text-white transition-colors shadow-sm translate-y-2 group-hover:translate-y-0 duration-300 delay-100">
            <Eye className="w-3 h-3" />
          </button>
        </div>
      </div>

      {/* Content */}
      <div className="flex flex-col flex-1">
        <div className="flex justify-between items-start mb-1">
          <Link href="#" className="text-[10px] font-bold uppercase leading-tight text-text-main hover:text-primary transition-colors line-clamp-2 pr-2">
            {name}
          </Link>
          <div className="flex gap-0.5 shrink-0">
            {colors.slice(0, 2).map((color, idx) => (
              <div 
                key={idx} 
                className="w-2 h-2 rounded-full border border-gray-200" 
                style={{ backgroundColor: color }}
                title="Available Color"
              />
            ))}
          </div>
        </div>
        
        <p className="text-[9px] text-gray-500 mb-2">Code: {code}</p>

        <div className="mt-auto flex justify-between items-end">
          <div className="flex flex-col">
            <span className="text-primary font-bold text-sm leading-none mb-0.5">৳{currentPrice.toLocaleString('en-US')}</span>
            {discount > 0 ? (
              <span className="text-[9px] text-gray-400 line-through">৳{originalPrice.toLocaleString('en-US')}</span>
            ) : (
              <span className="text-[9px] text-gray-400">In Stock</span>
            )}
          </div>

          <button className="bg-primary text-white p-1.5 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity shadow-sm hover:bg-primary-dark">
            <ShoppingCart className="w-3 h-3" />
          </button>
        </div>
      </div>
    </div>
  );
}
