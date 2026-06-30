import { Flame, Phone, ShieldCheck, Sparkles, MessageSquare, Compass, CheckCircle } from 'lucide-react';

export default function Hero() {
  const phoneNumber = "9502362682";

  return (
    <section className="relative overflow-hidden bg-radial from-slate-50 via-white to-slate-100/50 py-12 lg:py-24 border-b border-gray-100">
      
      {/* Decorative Grid Background */}
      <div className="absolute inset-0 grid-bg opacity-30 pointer-events-none" />

      {/* Decorative colored glow spheres */}
      <div className="absolute -top-40 -left-40 w-96 h-96 rounded-full bg-sky-200/40 blur-3xl pointer-events-none" />
      <div className="absolute top-2/3 -right-40 w-96 h-96 rounded-full bg-emerald-100/40 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Text Column */}
          <div className="lg:col-span-7 text-center lg:text-left space-y-6 sm:space-y-8">
            
            {/* Promo Pill */}
            <div className="inline-flex items-center gap-2 bg-sky-50 border border-sky-100 text-sky-800 px-4 py-2 rounded-full text-xs font-semibold uppercase tracking-wider animate-bounce">
              <Sparkles className="w-4.5 h-4.5 text-sky-500 fill-sky-200" />
              <span>Doorstep Service in Gajwel, Toopran, Chegunta, Siddipet & Ramayampet</span>
            </div>

            {/* Main Display Heading */}
            <h1 className="font-display font-extrabold text-4xl sm:text-5xl lg:text-6xl tracking-tight text-gray-900 leading-tight">
              IFB Washing Machine <br className="hidden sm:inline" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-600 to-sky-800">
                Service Center
              </span>
            </h1>

            {/* Purpose & Subhead */}
            <p className="text-md sm:text-lg text-gray-600 max-w-2xl mx-auto lg:mx-0 leading-relaxed font-sans font-medium">
              Professional, on-demand repair and service for <strong className="text-gray-900 font-semibold">all washing machine models</strong>. Specializing in front load, top load, and semi-automatic systems. Proudly serving <strong className="text-sky-700 font-semibold">Gajwel, Toopran, Chegunta, Siddipet, and Ramayampet</strong> with safety, transparency, and trust.
            </p>

            {/* Key Service Highlights */}
            <div className="grid grid-cols-2 gap-4 max-w-md mx-auto lg:mx-0 text-left pt-2">
              <div className="flex items-center gap-2 text-sm text-gray-700 font-semibold">
                <CheckCircle className="w-5 h-5 text-emerald-500 shrink-0" />
                <span>Same-Day Repair Visit</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-gray-700 font-semibold">
                <CheckCircle className="w-5 h-5 text-emerald-500 shrink-0" />
                <span>Genuine Spares Only</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-gray-700 font-semibold">
                <CheckCircle className="w-5 h-5 text-emerald-500 shrink-0" />
                <span>Experienced Mechanics</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-gray-700 font-semibold">
                <CheckCircle className="w-5 h-5 text-emerald-500 shrink-0" />
                <span>No Hidden Charges</span>
              </div>
            </div>

            {/* Hero Interactive CTAs */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2">
              <a 
                href="#booking"
                className="w-full sm:w-auto flex items-center justify-center gap-2.5 bg-emerald-600 hover:bg-emerald-700 text-white font-bold px-8 py-4 rounded-xl shadow-lg shadow-emerald-100 transition-all duration-200 hover:-translate-y-0.5"
                id="hero_whatsapp_link"
              >
                <MessageSquare className="w-5 h-5 fill-white" />
                <span>Book via WhatsApp form</span>
              </a>
              <a 
                href={`tel:+91${phoneNumber}`}
                className="w-full sm:w-auto flex items-center justify-center gap-2.5 bg-gray-900 hover:bg-sky-600 text-white font-bold px-8 py-4 rounded-xl shadow-md transition-all duration-200 hover:-translate-y-0.5"
                id="hero_call_link"
              >
                <Phone className="w-5 h-5 fill-white animate-pulse" />
                <span>Call Expert: 9502362682</span>
              </a>
            </div>

            {/* Safe Promise Quote */}
            <div className="flex items-center justify-center lg:justify-start gap-3 text-xs text-gray-500 bg-slate-100/80 px-4 py-3 rounded-xl border border-slate-200/60 max-w-lg mx-auto lg:mx-0">
              <ShieldCheck className="w-5 h-5 text-sky-600 shrink-0" />
              <span><strong>Trust Guarantee:</strong> Standard local diagnostic procedures. 100% data privacy for all service requests.</span>
            </div>

          </div>

          {/* Right CSS Mockup Column: High quality visual washing machine */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <div className="relative w-full max-w-[340px] sm:max-w-[380px] bg-slate-100 rounded-3xl p-6 border-4 border-slate-300 shadow-xl overflow-hidden group">
              
              {/* Washing Machine Top Header */}
              <div className="bg-slate-800 text-slate-100 -mx-6 -mt-6 p-4 border-b-4 border-slate-900 rounded-t-2xl flex justify-between items-center">
                <div className="flex items-center gap-2">
                  <span className="w-3 h-3 rounded-full bg-red-500 animate-ping"></span>
                  <span className="font-mono text-xs tracking-widest text-[#00ffcc]">IFB SERVICE</span>
                </div>
                <div className="text-right">
                  <span className="font-mono text-xs font-semibold text-sky-400">9502362682</span>
                </div>
              </div>

              {/* Machine Control Dashboard Panel */}
              <div className="bg-slate-900 text-teal-400 p-4 rounded-xl mt-4 border border-slate-950 font-mono text-[11px] space-y-3 shadow-inner">
                <div className="flex justify-between items-center text-xs text-slate-400">
                  <span>ACTIVE PROGRAM</span>
                  <span className="text-amber-400 animate-pulse">FAULT DETECTED ⚠</span>
                </div>
                <div className="grid grid-cols-2 gap-2 text-slate-200">
                  <div className="bg-slate-950/80 p-2 rounded border border-slate-800">
                    <div className="text-slate-500 text-[9px] uppercase">Washing Model</div>
                    <div className="font-bold text-sky-400">All IFB / Multi</div>
                  </div>
                  <div className="bg-slate-950/80 p-2 rounded border border-slate-800">
                    <div className="text-slate-500 text-[9px] uppercase">Service Hub</div>
                    <div className="font-bold text-emerald-400">Ramayampet</div>
                  </div>
                </div>
                
                {/* Diagnostics Status monitor */}
                <div className="space-y-1.5 pt-1">
                  <span className="text-slate-500 text-[9px] block uppercase">Diagnostic Solutions:</span>
                  <div className="flex gap-1">
                    <span className="px-1.5 py-0.5 bg-emerald-950 text-emerald-400 rounded text-[9px] font-semibold border border-emerald-800">Water Leakage Fixed</span>
                    <span className="px-1.5 py-0.5 bg-sky-950 text-sky-400 rounded text-[9px] font-semibold border border-sky-800">Spin Fault Resolved</span>
                  </div>
                  <div className="flex gap-1">
                    <span className="px-1.5 py-0.5 bg-amber-950 text-amber-400 rounded text-[9px] font-semibold border border-amber-800">Noisy Bearings</span>
                    <span className="px-1.5 py-0.5 bg-rose-950 text-rose-400 rounded text-[9px] font-semibold border border-rose-800">Error Codes Clear</span>
                  </div>
                </div>
              </div>

              {/* Washing Machine Circular Window/Drum visualization */}
              <div className="my-8 flex justify-center">
                <div className="relative w-52 h-52 sm:w-56 sm:h-56 rounded-full bg-slate-800 border-[10px] border-slate-300 shadow-lg flex items-center justify-center overflow-hidden group-hover:border-sky-500 transition-colors duration-500">
                  
                  {/* Outer Door Ring */}
                  <div className="absolute inset-0 border-8 border-slate-400 rounded-full opacity-60"></div>
                  
                  {/* Inside Water Spinning effect */}
                  <div className="absolute inset-2 bg-gradient-to-br from-sky-400/30 to-blue-600/40 rounded-full flex items-center justify-center animate-spin" style={{ animationDuration: '6s' }}>
                    <div className="w-12 h-12 bg-white/20 rounded-full filter blur-sm"></div>
                    <div className="w-24 h-4 bg-sky-200/10 rounded-full transform rotate-45"></div>
                    <div className="w-32 h-6 bg-blue-300/10 rounded-full transform -rotate-45"></div>
                  </div>

                  {/* Trust Badge centered in the window */}
                  <div className="relative z-10 text-center bg-slate-900/95 py-2.5 px-4 rounded-xl border border-slate-700/80 shadow-md">
                    <p className="text-[10px] text-gray-400 uppercase tracking-widest font-mono">Service Code</p>
                    <p className="text-sm font-black text-amber-400 tracking-wider">TRUST-95</p>
                    <p className="text-[9px] text-emerald-400 font-semibold flex items-center gap-1 justify-center mt-1">
                      <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full inline-block"></span> Local mechanic
                    </p>
                  </div>
                </div>
              </div>

              {/* Bottom machine footer detailing */}
              <div className="flex justify-between items-center text-xs text-slate-500 px-2">
                <div className="flex gap-1.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-slate-400 inline-block"></span>
                  <span className="w-2.5 h-2.5 rounded-full bg-slate-400 inline-block"></span>
                </div>
                <div className="font-mono text-[9px] tracking-wider text-slate-600 uppercase">
                  Heavy-Duty Repair System
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
