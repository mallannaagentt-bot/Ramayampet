import { useState } from 'react';
import { Wrench, Phone, Shield, Menu, X } from 'lucide-react';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const phoneNumber = "9502362682";

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-gray-100 shadow-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          
          {/* Logo and branding */}
          <a href="#" className="flex items-center gap-3 group">
            <div className="p-2.5 bg-sky-600 text-white rounded-xl shadow-md shadow-sky-100 group-hover:bg-sky-700 transition-colors">
              <Wrench className="w-6 h-6 animate-pulse" />
            </div>
            <div>
              <span className="font-display font-extrabold text-xl sm:text-2xl tracking-tight text-gray-900 group-hover:text-sky-600 transition-colors uppercase">
                IFB <span className="text-sky-600 font-medium lowercase font-sans text-lg">Repair</span>
              </span>
              <div className="flex items-center gap-1.5 mt-0.5">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-ping"></span>
                <span className="text-[10px] font-extrabold text-sky-700 tracking-wider uppercase font-mono">Gajwel | Toopran | Chegunta | Siddipet | Ramayampet</span>
              </div>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-600">
            <a href="#about" className="hover:text-sky-600 transition-colors py-2">About</a>
            <a href="#services" className="hover:text-sky-600 transition-colors py-2">Common Issues</a>
            <a href="#booking" className="hover:text-sky-600 transition-colors py-2">WhatsApp Booking</a>
            <a href="#faq" className="hover:text-sky-600 transition-colors py-2">FAQ</a>
            <span className="h-4 w-px bg-gray-200"></span>
            <div className="flex items-center gap-2 text-emerald-600 bg-emerald-50/80 px-3 py-1.5 rounded-full text-xs font-semibold">
              <Shield className="w-3.5 h-3.5" />
              Trusted Service
            </div>
          </nav>

          {/* Call CTA Button */}
          <div className="hidden sm:flex items-center gap-3">
            <a 
              href={`tel:+91${phoneNumber}`} 
              className="flex items-center gap-2.5 bg-gray-900 text-white hover:bg-sky-600 text-sm font-semibold px-5 py-3 rounded-xl transition-all shadow-sm hover:shadow-md hover:-translate-y-0.5 duration-200"
              id="header_call_button"
            >
              <Phone className="w-4 h-4 fill-white" />
              <span>Call 9502362682</span>
            </a>
          </div>

          {/* Mobile menu toggle */}
          <div className="flex md:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-gray-700 hover:text-sky-600 p-2.5 rounded-lg hover:bg-gray-50 transition-colors focus:outline-hidden"
              aria-label="Toggle Menu"
              id="mobile_menu_toggle_btn"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-b border-gray-100 animate-slideDown">
          <div className="px-4 pt-3 pb-6 space-y-3">
            <a 
              href="#about" 
              onClick={() => setMobileMenuOpen(false)}
              className="block px-4 py-3 text-base font-semibold text-gray-700 hover:text-sky-600 hover:bg-sky-50/50 rounded-xl transition-colors"
            >
              About Us
            </a>
            <a 
              href="#services" 
              onClick={() => setMobileMenuOpen(false)}
              className="block px-4 py-3 text-base font-semibold text-gray-700 hover:text-sky-600 hover:bg-sky-50/50 rounded-xl transition-colors"
            >
              Common Issues Serviced
            </a>
            <a 
              href="#booking" 
              onClick={() => setMobileMenuOpen(false)}
              className="block px-4 py-3 text-base font-semibold text-gray-700 hover:text-sky-600 hover:bg-sky-50/50 rounded-xl transition-colors"
            >
              WhatsApp Booking Form
            </a>
            <a 
              href="#faq" 
              onClick={() => setMobileMenuOpen(false)}
              className="block px-4 py-3 text-base font-semibold text-gray-700 hover:text-sky-600 hover:bg-sky-50/50 rounded-xl transition-colors"
            >
              Frequently Asked Questions
            </a>
            <div className="pt-4 border-t border-gray-100 flex flex-col gap-3">
              <a 
                href={`tel:+91${phoneNumber}`} 
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center justify-center gap-3 bg-sky-600 text-white font-bold py-3.5 px-4 rounded-xl shadow-md shadow-sky-100"
                id="mobile_call_now_nav_btn"
              >
                <Phone className="w-5 h-5 fill-white" />
                Call 9502362682
              </a>
              <div className="text-center text-xs text-gray-500 font-medium leading-relaxed">
                Professional doorstep repairing in Gajwel, Toopran, Chegunta, Siddipet & Ramayampet
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
