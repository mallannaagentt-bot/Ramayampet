import { HeartHandshake, ShieldCheck, Award, MapPin } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="py-16 sm:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          
          {/* Left Column Description */}
          <div className="space-y-6 sm:space-y-8">
            <div className="space-y-3">
              <span className="text-sky-600 font-bold tracking-wider text-xs uppercase block font-mono">ABOUT RAMAYAMPET HUB</span>
              <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-gray-900 tracking-tight">
                Our Service is Synonymous with <span className="text-sky-600">Trust</span>
              </h2>
            </div>

            <p className="text-gray-600 text-base leading-relaxed">
              For several years, residents in and around Ramayampet have depended on us for quick, high-quality, and reliable repairs. We are deeply committed to ensuring that your household continues to run smoothly. When a washing machine breaks, we understand it disrupts your daily schedule. That is why we provide rapid door-to-door repair services.
            </p>

            <blockquote className="border-l-4 border-sky-600 pl-4 py-1 italic text-gray-800 font-semibold bg-sky-50/50 rounded-r-xl pr-3">
              "Our service is synonymous with trust; we provide reliable service to our customers. We stand by our commitment to resolve your issues fast without compromising on safety."
            </blockquote>

            <p className="text-gray-600 text-base leading-relaxed">
              We service <strong className="text-gray-900 font-semibold">all washing machine makes and models</strong>, specifically focusing on troubleshooting advanced <strong className="text-gray-900 font-semibold">IFB Front Load</strong> and <strong className="text-gray-900 font-semibold">IFB Top Load</strong> systems. Our expertise ranges from replacing drum bearings, door rubber seals, water inlet valves, and drainage motors to advanced microprocessor PCB board repair.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-2">
              <div className="flex items-start gap-3 bg-slate-50 p-4 rounded-xl border border-slate-100">
                <MapPin className="w-6 h-6 text-sky-600 shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-bold text-gray-900 text-sm">Local Ramayampet Service</h4>
                  <p className="text-xs text-gray-500">We operate directly within Ramayampet town and neighboring villages.</p>
                </div>
              </div>

              <div className="flex items-start gap-3 bg-slate-50 p-4 rounded-xl border border-slate-100">
                <HeartHandshake className="w-6 h-6 text-sky-600 shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-bold text-gray-900 text-sm">Customer First Integrity</h4>
                  <p className="text-xs text-gray-500">No hidden premium expenses or unwanted parts replacements.</p>
                </div>
              </div>
            </div>

          </div>

          {/* Right Column: Key Pillars details with grid style */}
          <div className="bg-slate-50 rounded-3xl p-8 border border-slate-100 space-y-8">
            <h3 className="font-display font-bold text-xl text-gray-900">
              Why Ramayampet Chooses Our Service
            </h3>

            <div className="space-y-6">
              
              {/* Pillar 1 */}
              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-2xl bg-sky-100 text-sky-700 flex items-center justify-center font-bold shrink-0 shadow-sm">
                  <ShieldCheck className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 text-base">Verified & Licensed Expert</h4>
                  <p className="text-sm text-gray-600 mt-1">Our technician has extensive practical field experience in troubleshooting electronic washing machine modules and drum hardware.</p>
                </div>
              </div>

              {/* Pillar 2 */}
              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-2xl bg-sky-105 text-emerald-700 bg-emerald-50 flex items-center justify-center font-bold shrink-0 shadow-sm">
                  <Award className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 text-base">Warranty on Spares & Service</h4>
                  <p className="text-sm text-gray-600 mt-1">We replace damaged parts with 100% genuine, manufacturer-approved spares that ensure a long operational lifespan for your washing machines.</p>
                </div>
              </div>

              {/* Pillar 3 */}
              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-2xl bg-amber-50 text-amber-700 flex items-center justify-center font-bold shrink-0 shadow-sm">
                  <span className="font-mono text-sm">2hr</span>
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 text-base">Super Fast Response Time</h4>
                  <p className="text-sm text-gray-600 mt-1">We understand the urgency. Once you place a call or submit the WhatsApp form, our mechanic connects with you immediately to schedule a doorstep visit.</p>
                </div>
              </div>

            </div>

            {/* Quick Metrics display */}
            <div className="grid grid-cols-3 gap-4 pt-4 border-t border-slate-200 text-center">
              <div>
                <span className="block text-2xl font-extrabold text-sky-600 font-display">100%</span>
                <span className="text-[10px] uppercase font-bold text-gray-400 tracking-wider">Happy clients</span>
              </div>
              <div>
                <span className="block text-2xl font-extrabold text-sky-600 font-display">all</span>
                <span className="text-[10px] uppercase font-bold text-gray-400 tracking-wider">Models Serviced</span>
              </div>
              <div>
                <span className="block text-2xl font-extrabold text-sky-600 font-display">950+</span>
                <span className="text-[10px] uppercase font-bold text-gray-400 tracking-wider">Repairs Completed</span>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
