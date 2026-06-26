import type {Metadata} from 'next';
import { Poppins } from 'next/font/google';
import './globals.css';

const poppins = Poppins({
  weight: ['300', '400', '500', '600', '700'],
  subsets: ['latin'],
  variable: '--font-poppins',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'JEXON | Premium Footwear',
  description: 'Premium footwear and leather products',
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="en" className={poppins.variable}>
      <body className="antialiased font-sans flex flex-col min-h-screen">
        {children}
      </body>
    </html>
  );
}
