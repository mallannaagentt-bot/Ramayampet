import { useState } from 'react';
import { HelpCircle, ChevronDown, ChevronUp } from 'lucide-react';
import { FAQItem } from '../types';

export default function FAQ() {
  const [openId, setOpenId] = useState<string | null>("q-1");

  const faqs: FAQItem[] = [
    {
      id: "q-1",
      question: "Do you provide same-day doorstep repairs in Gajwel, Toopran, Chegunta, Siddipet, and Ramayampet?",
      answer: "Yes, absolutely! Once you fill out the booking form or call us directly at 9502362682, our expert technician arranges a mutual time. We complete almost 90% of repairs right at your home on the same day across Gajwel, Toopran, Chegunta, Siddipet, and Ramayampet."
    },
    {
      id: "q-2",
      question: "Do you repair washing machines other than IFB?",
      answer: "Yes. While we specialize in and carry precise internal replacement components for all IFB models, we also safely service LG, Samsung, Whirlpool, Bosch, Godrej, and Lloyd front-load or top-load washing machines."
    },
    {
      id: "q-3",
      question: "Are the replacement spare parts genuine?",
      answer: "We strictly install 100% genuine, authorized manufacturer spares (drain pumps, inlet filters, motor belts, drum bearings, shock absorbers). Genuine parts keep your washing machine functioning perfectly for several years."
    },
    {
      id: "q-4",
      question: "What are your service and inspection charges?",
      answer: "Our inspection and basic diagnosis fees are very budget-friendly and local. If you proceed with the repair work, your diagnosis fee is integrated into the final service charge so you only pay for the repairing action."
    },
    {
      id: "q-5",
      question: "Is the information I share on the WhatsApp booking form secure?",
      answer: "Absolutely! We do not share the information collected via the WhatsApp form with anyone; the data we gather is used solely for organizing washing machine repairs."
    }
  ];

  const toggleFAQ = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section id="faq" className="py-16 sm:py-24 bg-slate-50 border-t border-slate-100">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Title */}
        <div className="text-center space-y-4 mb-12 sm:mb-16">
          <HelpCircle className="w-10 h-10 text-sky-600 mx-auto" />
          <h2 className="font-display font-extrabold text-3xl text-gray-900 tracking-tight sm:text-4xl">
            Frequently Asked Questions
          </h2>
          <p className="text-gray-500 font-semibold text-xs sm:text-sm uppercase tracking-wider font-mono">
            Clear Answers regarding our regional doorstep services
          </p>
        </div>

        {/* Accordions */}
        <div className="space-y-4">
          {faqs.map((faq) => {
            const isOpen = openId === faq.id;
            return (
              <div 
                key={faq.id} 
                className="bg-white rounded-2xl border border-slate-200/80 overflow-hidden shadow-xs hover:border-slate-350 transition-colors"
              >
                <button
                  onClick={() => toggleFAQ(faq.id)}
                  className="w-full text-left px-6 py-5 sm:py-6 flex justify-between items-center bg-white hover:bg-slate-50/50 transition-colors cursor-pointer"
                  id={`faq_toggle_${faq.id}`}
                >
                  <span className="font-display font-bold text-base sm:text-lg text-gray-900 pr-4">
                    {faq.question}
                  </span>
                  <span className="text-gray-400 shrink-0">
                    {isOpen ? <ChevronUp className="w-5 h-5 text-sky-600" /> : <ChevronDown className="w-5 h-5" />}
                  </span>
                </button>

                {isOpen && (
                  <div className="px-6 pb-6 pt-1 text-slate-600 text-sm leading-relaxed border-t border-slate-150 bg-slate-50/30">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
