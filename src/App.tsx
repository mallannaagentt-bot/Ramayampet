import { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import ServiceFeatures from './components/ServiceFeatures';
import RepairForm from './components/RepairForm';
import TrustTestimonials from './components/TrustTestimonials';
import FAQ from './components/FAQ';
import Footer from './components/Footer';
import FloatingActions from './components/FloatingActions';

export default function App() {
  const [selectedIssue, setSelectedIssue] = useState('');

  const handleSelectIssue = (issue: string) => {
    setSelectedIssue(issue);
  };

  return (
    <div className="min-h-screen bg-slate-50/20 text-gray-900 selection:bg-sky-500 selection:text-white">
      {/* 1. Header with direct phone actions */}
      <Header />

      {/* 2. Hero presentation with pure CSS interactive washing machine mockup */}
      <Hero />

      {/* 3. About section with reliability statement */}
      <About />

      {/* 4. Common Repair issues, with interactive binding to form */}
      <ServiceFeatures onSelectIssue={handleSelectIssue} />

      {/* 5. Direct WhatsApp Service Booking Form */}
      <RepairForm initialIssue={selectedIssue} />

      {/* 6. Local feedback testimonials and data privacy policies */}
      <TrustTestimonials />

      {/* 7. Quick FAQ accordions */}
      <FAQ />

      {/* 8. Local Hub contact footer */}
      <Footer />

      {/* 9. Sticky floating overlay actions (Call & Chat buttons) */}
      <FloatingActions />
    </div>
  );
}
