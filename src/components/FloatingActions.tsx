import { useState, useEffect } from 'react';
import { MessageSquare, Phone, MapPin, Sparkles } from 'lucide-react';

export default function FloatingActions() {
  const [visible, setVisible] = useState(false);
  const phoneNumber = "9502362682";
  const compiledCallNumber = `tel:+91${phoneNumber}`;
  
  // Custom pre-encoded quick chat text
  const quickChatText = encodeURIComponent("Hello! I am looking for IFB washing machine repair service in Ramayampet. Please check calendar and contact me.");
  const compiledWhatsAppUrl = `https://api.whatsapp.com/send?phone=91${phoneNumber}&text=${quickChatText}`;

  useEffect(() => {
    // Show buttons after scrolling 200px or tiny delay
    const handleScroll = () => {
      if (window.scrollY > 200) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    };
    
    // Fallback: Always keep visible on mobile screens for ease of use
    const checkIfMobile = () => {
      if (window.innerWidth < 768) {
        setVisible(true);
      } else {
        handleScroll();
      }
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', checkIfMobile);
    
    // Initial check
    checkIfMobile();

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', checkIfMobile);
    };
  }, []);

  if (!visible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 p-4 md:bottom-6 md:right-6 md:left-auto md:p-0 animate-slideUp">
      
      {/* Container display for layout options */}
      <div className="max-w-md mx-auto bg-white/90 backdrop-blur-md rounded-2xl p-3 shadow-2xl border border-slate-200/80 flex items-center justify-between gap-3 md:flex-col md:w-56 md:p-4">
        
        {/* Desktop Title inside panel */}
        <div className="hidden md:block text-center space-y-1 w-full pb-3 border-b border-gray-100">
          <div className="flex items-center justify-center gap-1.5 text-xs text-sky-600 font-bold uppercase tracking-wider font-mono">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Fast Booking</span>
          </div>
          <p className="text-[10px] text-gray-500 font-medium">Click to chat or call instantly</p>
        </div>

        {/* Call button trigger */}
        <a 
          href={compiledCallNumber}
          className="flex-1 md:w-full flex items-center justify-center gap-2.5 bg-slate-900 hover:bg-sky-600 text-white font-extrabold text-xs sm:text-sm py-3 px-4 rounded-xl transition-all duration-200 shadow-md hover:-translate-y-0.5 uppercase tracking-wider"
          id="sticky_phone_call_link"
        >
          <Phone className="w-4.5 h-4.5 fill-white animate-bounce" />
          <span>Call Expert</span>
        </a>

        {/* WhatsApp Chat trigger */}
        <a 
          href={compiledWhatsAppUrl}
          target="_blank" 
          rel="noopener noreferrer"
          className="flex-1 md:w-full flex items-center justify-center gap-2.5 bg-emerald-600 hover:bg-emerald-700 text-white font-extrabold text-xs sm:text-sm py-3 px-4 rounded-xl transition-all duration-200 shadow-md hover:-translate-y-0.5 uppercase tracking-wider"
          id="sticky_whatsapp_chat_link"
        >
          <MessageSquare className="w-4.5 h-4.5 fill-white" />
          <span>WhatsApp Chat</span>
        </a>

      </div>

      {/* Decorative localized badge exclusively on desktop view */}
      <div className="hidden md:flex items-center justify-center gap-1.5 bg-emerald-50 text-emerald-800 text-[9px] font-black tracking-wider uppercase px-2.5 py-1 rounded-full border border-emerald-250 absolute -top-3 left-1/2 -translate-x-1/2 shadow-xs">
        <MapPin className="w-3 h-3 text-emerald-600" />
        <span>Ramayampet Area</span>
      </div>

    </div>
  );
}
