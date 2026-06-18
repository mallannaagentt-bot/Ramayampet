import { RotateCw, Waves, Cpu, VolumeX, ShieldAlert, Sparkles, Settings2 } from 'lucide-react';

interface ServiceFeaturesProps {
  onSelectIssue: (issue: string) => void;
}

export default function ServiceFeatures({ onSelectIssue }: ServiceFeaturesProps) {
  
  const services = [
    {
      id: "spin-issue",
      title: "Spin & Drum Rotation Faults",
      icon: <RotateCw className="w-6 h-6 text-sky-600" />,
      description: "Washing machine won't spin, rotates slowly, drum is stuck, or motor starts and halts abruptly. We diagnose belt, motor carbon brushes, and capacitor faults.",
      bookingLabel: "Washing machine not spinning / drum stuck"
    },
    {
      id: "leak-drain",
      title: "Drainage & Water Leakage",
      icon: <Waves className="w-6 h-6 text-emerald-600" />,
      description: "Water leaking from the bottom door seal, water staying inside and not draining, or error codes like 'drain error' showing up after cycles.",
      bookingLabel: "Water leakage or drain block issue"
    },
    {
      id: "pcb-board",
      title: "PCB Motherboard & Touch Panel",
      icon: <Cpu className="w-6 h-6 text-indigo-600" />,
      description: "Blank program displays, touch screen keys not working, machine won't power-on, or display flashing complex error codes like dE, dF, PE.",
      bookingLabel: "PCB board or Touch panel failure"
    },
    {
      id: "noise-vibration",
      title: "Excessive Noise & Heavy Shaking",
      icon: <VolumeX className="w-6 h-6 text-rose-600" />,
      description: "Loud banging noises, metallic grinding sounds during high spin cycles, or severe walking/jumping. Usually caused by worn drum bearings or broken suspension shock absorbers.",
      bookingLabel: "Severe noise / high vibration"
    },
    {
      id: "heating-water",
      title: "No Heating or Water Inlet Issues",
      icon: <Settings2 className="w-6 h-6 text-amber-600" />,
      description: "Machine takes too long to fill with water, doesn't take detergent, or the built-in water heater is failing to heat up during wash cycles.",
      bookingLabel: "Water inlet or heating problem"
    },
    {
      id: "descale-install",
      title: "Descaling & Clean Installation",
      icon: <Sparkles className="w-6 h-6 text-violet-600" />,
      description: "Special chemical descaling to remove hard water scaling from heating coil & drum, improving performance. Also professional installation/reinstallation services.",
      bookingLabel: "General servicing / Descaling / Installation"
    }
  ];

  const handleSelect = (bookingLabel: string) => {
    onSelectIssue(bookingLabel);
    // Smooth scroll to the booking section
    const bookingSection = document.getElementById('booking');
    if (bookingSection) {
      bookingSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="services" className="py-16 sm:py-24 bg-slate-50/50 border-y border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <span className="text-sky-600 font-bold tracking-wider text-xs uppercase block font-mono">Expert Solutions</span>
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-gray-900 tracking-tight">
            Washing Machine Issues We Fix Instantly
          </h2>
          <p className="text-gray-600 font-medium text-sm sm:text-base">
            No matter the model, our local expert technician in Ramayampet carries the tools and expertise to repair your washing machine fast. Click any service to book immediately.
          </p>
        </div>

        {/* Feature Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {services.map((service) => (
            <div 
              key={service.id} 
              className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200/60 shadow-xs hover:shadow-md transition-all duration-300 hover:-translate-y-1 flex flex-col justify-between group"
            >
              <div>
                <div className="w-12 h-12 rounded-xl bg-slate-50 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  {service.icon}
                </div>
                <h3 className="font-display font-bold text-lg sm:text-xl text-gray-900 mb-3 group-hover:text-sky-600 transition-colors">
                  {service.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-6">
                  {service.description}
                </p>
              </div>

              <button
                onClick={() => handleSelect(service.bookingLabel)}
                className="w-full text-center bg-slate-50 hover:bg-sky-600 text-gray-800 hover:text-white font-semibold text-xs py-3 px-4 rounded-xl transition-all duration-200 uppercase tracking-wider"
              >
                Select for Doorstep booking
              </button>
            </div>
          ))}
        </div>

        {/* Brand Focus Note */}
        <div className="mt-12 bg-white rounded-2xl p-6 border border-slate-200/60 max-w-4xl mx-auto flex flex-col sm:flex-row items-center gap-4 sm:gap-6 shadow-xs">
          <div className="p-3 bg-red-50 text-red-600 rounded-xl shrink-0">
            <span className="font-display font-black text-xl tracking-wider">IFB</span>
          </div>
          <div className="text-center sm:text-left space-y-1">
            <h4 className="font-bold text-gray-950 text-sm">Specialist in IFB washing machine systems</h4>
            <p className="text-xs text-gray-500 leading-relaxed font-medium">
              We service all ranges: IFB Elena, IFB Senorita, IFB Diva, IFB Executive, IFB Serena, and other front/top load variants. We also install reliable motor brushes, genuine drain-valves, and water-seal gaskets.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}
