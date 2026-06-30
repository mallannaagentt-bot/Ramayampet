import { Star, ShieldAlert, Quote } from 'lucide-react';
import { ReviewItem } from '../types';

export default function TrustTestimonials() {
  const reviews: ReviewItem[] = [
    {
      id: "r-1",
      name: "M. Srinivas Reddy",
      location: "Near Bus Stand, Siddipet",
      rating: 5,
      comment: "My IFB Senator Front Load was showing dE error and wouldn't start. Called this technician in the morning. He came directly to my home by 12:00 PM, diagnosed a door latch lock sensor problem, and resolved it. Very polite and prompt service!",
      date: "3 days ago"
    },
    {
      id: "r-2",
      name: "Sharada Anjaneyulu",
      location: "Subhash Road, Gajwel",
      rating: 5,
      comment: "Loud banging noise during spin cycles on our IFB Diva machine. I was worried it was a total loss, but the mechanic changed the drum bearings and shock absorber with original spares right in front of us. Highly recommended!",
      date: "1 week ago"
    },
    {
      id: "r-3",
      name: "K. Venkatesh",
      location: "Pragathi Nagar, Toopran",
      rating: 5,
      comment: "Excellent doorstep washing machine service. Water was leaking continuously from the bottom door and staying inside the tub. Quick response after filling the WhatsApp booking form. Honest pricing, highly reliable.",
      date: "2 weeks ago"
    }
  ];

  return (
    <section className="py-16 sm:py-24 bg-white relative overflow-hidden">
      
      {/* Decorative items */}
      <div className="absolute top-1/2 left-0 w-64 h-64 bg-sky-50/50 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <span className="text-sky-600 font-bold tracking-wider text-xs uppercase block font-mono">NEIGHBORHOOD FEEDBACK</span>
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-gray-900 tracking-tight">
            Loved & Trusted Regionally
          </h2>
          <p className="text-gray-500 font-medium text-sm sm:text-base">
            Read real feedback from neighbors in Gajwel, Toopran, Chegunta, Siddipet, and Ramayampet who experienced our expert washing machine doorstep service.
          </p>
        </div>

        {/* Testimonial Cards Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {reviews.map((rev) => (
            <div 
              key={rev.id} 
              className="bg-slate-50/80 rounded-2xl p-6 sm:p-8 border border-slate-250/30 flex flex-col justify-between hover:shadow-md transition-shadow relative"
            >
              <Quote className="absolute top-6 right-6 w-10 h-10 text-slate-200 pointer-events-none" />

              <div>
                {/* Stars */}
                <div className="flex gap-1.5 mb-4 text-amber-500">
                  {[...Array(rev.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-500" />
                  ))}
                </div>

                <p className="text-gray-650 text-sm leading-relaxed italic mb-6 relative z-10">
                  "{rev.comment}"
                </p>
              </div>

              <div className="border-t border-slate-200/60 pt-4 mt-auto">
                <h4 className="font-bold text-gray-900 text-sm">{rev.name}</h4>
                <div className="flex justify-between items-center text-xs text-gray-500 mt-1">
                  <span>{rev.location}</span>
                  <span className="font-mono text-[10px] font-semibold text-emerald-600">{rev.date}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Big Privacy Seal for user comfort */}
        <div className="mt-16 bg-gradient-to-br from-slate-900 to-slate-950 text-white rounded-3xl p-8 sm:p-12 relative overflow-hidden border border-slate-800 shadow-xl">
          
          {/* Subtle graphic accent */}
          <div className="absolute top-0 right-0 w-80 h-80 bg-sky-500/10 rounded-full blur-3xl pointer-events-none" />
          
          <div className="max-w-3xl relative z-10 space-y-6">
            <div className="inline-flex items-center gap-2 bg-sky-500/20 text-sky-300 px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wider">
              <ShieldAlert className="w-4 h-4 shrink-0" />
              <span>100% Privacy Guarantee</span>
            </div>

            <h3 className="font-display font-black text-2xl sm:text-3xl tracking-tight">
              Our Privacy Policy & Simple Commitment
            </h3>

            <p className="text-slate-350 text-sm sm:text-base leading-relaxed font-medium">
              We know security and peace of mind matter to you. That is why our servicing operates under a clear, strict regulation:
            </p>

            <blockquote className="border-l-4 border-emerald-500 pl-4 py-1 italic text-slate-250 text-md sm:text-lg font-black bg-emerald-500/10 rounded-r-xl pr-3">
              "Our service is synonymous with trust; we provide reliable service to our customers. We do not share the information collected via the WhatsApp form with anyone; the data we gather is used solely for washing machine repairs."
            </blockquote>

            <p className="text-slate-400 text-xs sm:text-sm">
              Any collection of names, phone contacts, or physical locations is immediately purged after the doorstep repair is completed. We store no active databases, meaning your privacy stays bulletproof.
            </p>
          </div>

        </div>

      </div>
    </section>
  );
}
