import { useState, useEffect, ChangeEvent, FormEvent } from 'react';
import { BookingFormState } from '../types';
import { MessageSquare, ShieldAlert, CheckCircle2, User, Phone, MapPin, ClipboardList, PenTool } from 'lucide-react';

interface RepairFormProps {
  initialIssue: string;
}

export default function RepairForm({ initialIssue }: RepairFormProps) {
  const [formData, setFormData] = useState<BookingFormState>({
    name: '',
    phone: '',
    modelType: 'IFB Front Load (Premium)',
    issueType: '',
    address: '',
    notes: ''
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const techPhoneNumber = "919502362682"; // +91 prefix 

  const modelOptions = [
    "IFB Front Load (Premium)",
    "IFB Top Load (Smart)",
    "Top Load (Semi-Automatic)",
    "Front Load / Washer-Dryer",
    "Other Brand Front Load",
    "Other Brand Top Load"
  ];

  const issueOptions = [
    "Washing machine not spinning / drum stuck",
    "Water leakage or drain block issue",
    "PCB board or Touch panel failure",
    "Severe noise / high vibration",
    "Water inlet or heating problem",
    "Machine not turning on at all",
    "Frequent automatic power cuts / trips",
    "General servicing / Descaling / Installation"
  ];

  // Update form if user clicked on specific issue from other components
  useEffect(() => {
    if (initialIssue) {
      setFormData(prev => ({
        ...prev,
        issueType: initialIssue
      }));
    }
  }, [initialIssue]);

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    setErrorMessage('');
  };

  // Helper to compile the WhatsApp message
  const generateWhatsAppText = () => {
    const header = "🛠️ *IFB WASHING MACHINE BOOKING (RAMAYAMPET)* 🛠️\n\n";
    const body = `*Customer Name:* ${formData.name || 'Not provided'}
*Phone Number:* ${formData.phone || 'Not provided'}
*Washing Machine Model:* ${formData.modelType}
*Specific Issue:* ${formData.issueType || 'General Service required'}
*Ramayampet Landmark/Address:* ${formData.address || 'Address is pending callback'}
*Additional Notes:* ${formData.notes || 'None'}`;
    const footer = "\n\n_Please review active schedules for same-day doorstep service. Thank you!_";
    return header + body + footer;
  };

  const handleFormSubmit = (e: FormEvent) => {
    e.preventDefault();

    // Basic Validation
    if (!formData.name.trim()) {
      setErrorMessage("Please enter your name to complete the booking.");
      return;
    }
    if (!formData.phone.trim()) {
      setErrorMessage("Please enter your contact number.");
      return;
    }
    if (!formData.issueType) {
      setErrorMessage("Please pick or type the primary issue/problem.");
      return;
    }
    if (!formData.address.trim()) {
      setErrorMessage("Please mention your address or local landmark in Ramayampet.");
      return;
    }

    setIsSubmitted(true);
    setErrorMessage('');

    // Compile message and open WhatsApp
    const encodedText = encodeURIComponent(generateWhatsAppText());
    const whatsappUrl = `https://api.whatsapp.com/send?phone=${techPhoneNumber}&text=${encodedText}`;

    // Give a micro-timeout to show success state before launching
    setTimeout(() => {
      window.open(whatsappUrl, '_blank');
      setIsSubmitted(false);
    }, 1200);
  };

  return (
    <section id="booking" className="py-16 sm:py-24 bg-white relative">
      
      {/* Decorative circles */}
      <div className="absolute top-20 right-10 w-72 h-72 rounded-full bg-emerald-50/60 blur-3xl pointer-events-none" />
      <div className="absolute bottom-20 left-10 w-72 h-72 rounded-full bg-sky-50/60 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left info description column */}
          <div className="lg:col-span-5 space-y-6 sm:space-y-8">
            <div className="space-y-3">
              <span className="text-emerald-600 font-bold tracking-wider text-xs uppercase block font-mono">STEP-BY-STEP SECURE BOOKING</span>
              <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-gray-900 tracking-tight">
                Instantly Book Doorstep Repair on <span className="text-emerald-500">WhatsApp</span>
              </h2>
            </div>

            <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
              We have designed this booking tool to be incredibly straight-forward. Simply fill out your repair specifications on the right, and the system automatically compiles a clean message to launch directly into your WhatsApp.
            </p>

            {/* Step Guides */}
            <div className="space-y-4">
              <div className="flex gap-4 items-start">
                <div className="bg-sky-50 text-sky-600 rounded-lg w-8 h-8 flex items-center justify-center font-bold font-mono text-sm shrink-0">1</div>
                <p className="text-sm font-medium text-gray-700 pt-1">Fill out your direct name, machine model, and the issues you are facing.</p>
              </div>

              <div className="flex gap-4 items-start">
                <div className="bg-sky-50 text-sky-600 rounded-lg w-8 h-8 flex items-center justify-center font-bold font-mono text-sm shrink-0">2</div>
                <p className="text-sm font-medium text-gray-700 pt-1">Click the green button—the system opens WhatsApp on your phone or computer with a pre-written message.</p>
              </div>

              <div className="flex gap-4 items-start">
                <div className="bg-sky-50 text-sky-600 rounded-lg w-8 h-8 flex items-center justify-center font-bold font-mono text-sm shrink-0">3</div>
                <p className="text-sm font-medium text-gray-700 pt-1">Press "Send" inside WhatsApp. Our booking mechanic will respond back in under 15 minutes to confirm the timings.</p>
              </div>
            </div>

            {/* Critical Privacy Consent Statement Block */}
            <div className="bg-amber-50/50 p-6 rounded-2xl border border-amber-150/70 space-y-3">
              <div className="flex items-center gap-2 text-amber-700">
                <ShieldAlert className="w-5 h-5 shrink-0" />
                <span className="font-bold text-sm tracking-wide uppercase font-mono">Strict Privacy Commitment</span>
              </div>
              <p className="text-xs text-gray-600 leading-relaxed font-sans">
                Our service is synonymous with trust; we provide reliable service to our customers. We do not share the information collected via the WhatsApp form with anyone; the data we gather is used solely for washing machine repairs. We never engage in marketing spam or sell user data.
              </p>
            </div>
            
          </div>

          {/* Right Form Column */}
          <div className="lg:col-span-7">
            <div className="bg-slate-50/80 rounded-3xl p-6 sm:p-10 border border-slate-200/60 shadow-xl shadow-slate-100/50">
              
              <div className="flex items-center gap-3.5 border-b border-slate-200/60 pb-6 mb-8">
                <div className="p-2.5 bg-emerald-100 text-emerald-800 rounded-xl">
                  <MessageSquare className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-display font-extrabold text-xl text-gray-900">Doorstep Booking Form</h3>
                  <p className="text-xs text-gray-500 font-semibold font-mono uppercase mt-0.5">Send directly to +91 9502362682</p>
                </div>
              </div>

              <form onSubmit={handleFormSubmit} className="space-y-6">
                
                {/* Error Banner */}
                {errorMessage && (
                  <div className="bg-rose-50 text-rose-800 p-4 rounded-xl text-xs sm:text-sm font-semibold border border-rose-150 animate-shake">
                    ⚠️ {errorMessage}
                  </div>
                )}

                {/* Form Inputs Grid */}
                <div className="grid sm:grid-cols-2 gap-6">
                  
                  {/* Customer Name */}
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-gray-700 tracking-wider uppercase block" htmlFor="name">Your Full Name *</label>
                    <div className="relative">
                      <User className="w-4 h-4 text-gray-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                      <input 
                        type="text" 
                        id="name"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="e.g. Ramesh Kumar" 
                        className="w-full bg-white border border-slate-200/80 focus:border-sky-500 focus:ring-1 focus:ring-sky-500/30 rounded-xl pl-10 pr-4 py-3.5 text-sm font-medium transition-all"
                      />
                    </div>
                  </div>

                  {/* Phone Number */}
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-gray-700 tracking-wider uppercase block" htmlFor="phone">Phone Number *</label>
                    <div className="relative">
                      <Phone className="w-4 h-4 text-gray-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                      <input 
                        type="tel" 
                        id="phone"
                        name="phone"
                        required
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="e.g. 9502362682" 
                        className="w-full bg-white border border-slate-200/80 focus:border-sky-500 focus:ring-1 focus:ring-sky-500/30 rounded-xl pl-10 pr-4 py-3.5 text-sm font-medium transition-all"
                      />
                    </div>
                  </div>

                </div>

                <div className="grid sm:grid-cols-2 gap-6">
                  
                  {/* Machine Model Selection */}
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-gray-700 tracking-wider uppercase block" htmlFor="model_selection">Washing Machine Type</label>
                    <div className="relative">
                      <ClipboardList className="w-4 h-4 text-gray-400 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                      <select 
                        id="model_selection"
                        name="modelType"
                        value={formData.modelType}
                        onChange={handleChange}
                        className="w-full bg-white border border-slate-200/80 focus:border-sky-500 focus:ring-1 focus:ring-sky-500/30 rounded-xl pl-10 pr-4 py-3.5 text-sm font-semibold transition-all appearance-none cursor-pointer"
                      >
                        {modelOptions.map((opt, i) => (
                          <option key={i} value={opt}>{opt}</option>
                        ))}
                      </select>
                    </div>
                  </div>

                  {/* Fault Selection */}
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-gray-700 tracking-wider uppercase block" htmlFor="fault_selection">Select Issue / Fault *</label>
                    <div className="relative">
                      <PenTool className="w-4 h-4 text-gray-400 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                      <select 
                        id="fault_selection"
                        name="issueType"
                        required
                        value={formData.issueType}
                        onChange={handleChange}
                        className="w-full bg-white border border-slate-200/80 focus:border-sky-500 focus:ring-1 focus:ring-sky-500/30 rounded-xl pl-10 pr-4 py-3.5 text-sm font-semibold transition-all appearance-none cursor-pointer text-gray-900"
                      >
                        <option value="">-- Choose what's wrong --</option>
                        {issueOptions.map((opt, i) => (
                          <option key={i} value={opt}>{opt}</option>
                        ))}
                      </select>
                    </div>
                  </div>

                </div>

                {/* Ramayampet Address */}
                <div className="space-y-2">
                  <label className="text-xs font-bold text-gray-700 tracking-wider uppercase block" htmlFor="address">Service Address / Local Landmark in Ramayampet *</label>
                  <div className="relative">
                    <MapPin className="w-4 h-4 text-gray-400 absolute left-3.5 top-4" />
                    <textarea 
                      id="address"
                      name="address"
                      required
                      rows={2}
                      value={formData.address}
                      onChange={handleChange}
                      placeholder="e.g. Near Ramayampet Bus Stand, Ward No 4, House #12-3..." 
                      className="w-full bg-white border border-slate-200/80 focus:border-sky-500 focus:ring-1 focus:ring-sky-500/30 rounded-xl pl-10 pr-4 py-3.5 text-sm font-medium transition-all resize-none"
                    ></textarea>
                  </div>
                </div>

                {/* Additional notes */}
                <div className="space-y-2">
                  <label className="text-xs font-bold text-gray-700 tracking-wider uppercase block" htmlFor="notes">Additional notes / washing machine age (Optional)</label>
                  <textarea 
                    id="notes"
                    name="notes"
                    rows={2}
                    value={formData.notes}
                    onChange={handleChange}
                    placeholder="e.g. Purchased 3 years ago, error displays after drainage cycle begins" 
                    className="w-full bg-white border border-slate-200/80 focus:border-sky-500 focus:ring-1 focus:ring-sky-500/30 rounded-xl px-4 py-3.5 text-sm font-medium transition-all resize-none"
                  ></textarea>
                </div>

                {/* Interactive Realtime WhatsApp Message Preview Panel */}
                <div className="bg-slate-900 text-slate-100 rounded-xl p-4.5 font-mono text-xs space-y-2.5 shadow-inner border border-slate-950 mt-4">
                  <span className="text-[10px] text-emerald-400 uppercase tracking-widest block font-bold">✨ WhatsApp Message Live Preview</span>
                  <div className="text-slate-300 bg-slate-950/80 p-3 rounded-lg border border-slate-800/80 max-h-40 overflow-y-auto whitespace-pre-line text-[11px] leading-relaxed select-all">
                    {generateWhatsAppText()}
                  </div>
                  <span className="text-[9px] text-slate-400 block italic">The content above will be instantly transferred and autofilled in your WhatsApp client.</span>
                </div>

                {/* Submit Action Button */}
                <button
                  type="submit"
                  disabled={isSubmitted}
                  className={`w-full flex items-center justify-center gap-3 py-4 text-sm font-black uppercase tracking-wider text-white bg-emerald-600 rounded-xl cursor-pointer hover:bg-emerald-700 transition-all duration-200 shadow-md ${isSubmitted ? 'opacity-90' : 'hover:-translate-y-0.5'}`}
                  id="final_whatsapp_booking_submit"
                >
                  {isSubmitted ? (
                    <>
                      <CheckCircle2 className="w-5 h-5 text-white animate-bounce" />
                      <span>Opening WhatsApp Client...</span>
                    </>
                  ) : (
                    <>
                      <MessageSquare className="w-5 h-5 fill-white" />
                      <span>Confirm & Book on WhatsApp</span>
                    </>
                  )}
                </button>

              </form>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
