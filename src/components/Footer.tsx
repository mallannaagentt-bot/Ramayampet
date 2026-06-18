import { Phone, MapPin, Clock, ShieldCheck, Heart } from 'lucide-react';

export default function Footer() {
  const phoneNumber = "9502362682";

  return (
    <footer className="bg-slate-900 border-t border-slate-800 text-slate-400">
      
      {/* Top Footer Details Column */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12">
          
          {/* Brand Info */}
          <div className="md:col-span-5 space-y-4">
            <span className="font-display font-black text-2xl text-white uppercase tracking-tight">
              IFB <span className="text-sky-500 font-medium lowercase font-sans text-lg">Repair Ramayampet Hub</span>
            </span>
            <p className="text-slate-400 text-xs sm:text-sm leading-relaxed max-w-sm">
              We specialize in on-demand, doorstep washing machine repairs for all IFB variants and other world-class brands. Trust, transparency, and original spare-parts with local servicing.
            </p>
            <div className="flex items-center gap-2 text-xs text-slate-300 font-semibold bg-slate-800 px-3.5 py-1.5 rounded-lg border border-slate-700/50 w-fit">
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
              Trusted Local Business
            </div>
          </div>

          {/* Quick links */}
          <div className="md:col-span-3 space-y-4">
            <h4 className="text-white font-bold text-sm uppercase tracking-wider font-mono">Service Links</h4>
            <ul className="space-y-2.5 text-xs sm:text-sm font-medium">
              <li>
                <a href="#about" className="hover:text-white transition-colors">About our Hub</a>
              </li>
              <li>
                <a href="#services" className="hover:text-white transition-colors">Issues Serviced</a>
              </li>
              <li>
                <a href="#booking" className="hover:text-white transition-colors">WhatsApp Form</a>
              </li>
              <li>
                <a href="#faq" className="hover:text-white transition-colors">FAQ Support</a>
              </li>
            </ul>
          </div>

          {/* Core Contact Details */}
          <div className="md:col-span-4 space-y-4">
            <h4 className="text-white font-bold text-sm uppercase tracking-wider font-mono">Direct Contact info</h4>
            <ul className="space-y-3.5 text-xs sm:text-sm">
              <li className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-sky-400 shrink-0 mt-0.5" />
                <div>
                  <span className="block text-white font-black text-base">{phoneNumber}</span>
                  <span className="text-slate-500 text-[11px] font-semibold uppercase">Call Anytime (8 AM - 9 PM)</span>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-sky-400 shrink-0 mt-0.5" />
                <div>
                  <span className="block text-slate-100 font-bold">Ramayampet, Telangana 502159</span>
                  <span className="text-slate-500 text-[11px] font-semibold uppercase">All areas doorstep visit</span>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Clock className="w-5 h-5 text-sky-400 shrink-0 mt-0.5" />
                <div>
                  <span className="block text-slate-100 font-bold">Monday - Sunday</span>
                  <span className="text-slate-500 text-[11px] font-semibold uppercase">Prompt Doorstep Response</span>
                </div>
              </li>
            </ul>
          </div>

        </div>
      </div>

      {/* Bottom Footer legal bar */}
      <div className="bg-slate-950 py-6 text-center text-xs text-slate-500 border-t border-slate-900 px-4">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-4">
          <p>© {new Date().getFullYear()} IFB Washing Machine Repair Ramayampet. All Rights Reserved.</p>
          <div className="flex items-center gap-1">
            <span>Made with Integrity for Ramayampet</span>
            <Heart className="w-3.5 h-3.5 text-rose-500 fill-rose-500" />
          </div>
        </div>
      </div>

    </footer>
  );
}
