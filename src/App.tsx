import React, { useState } from 'react';
import { Language } from './translations';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import NeuralSandbox from './components/NeuralSandbox';
import Pricing from './components/Pricing';
import Reviews from './components/Reviews';
import Footer from './components/Footer';
import RegisterModal from './components/RegisterModal';
import DashboardSimulation from './components/DashboardSimulation';
import { Sparkles, BrainCircuit, Star, Compass } from 'lucide-react';

export default function App() {
  const [lang, setLang] = useState<Language>('RU');
  const [isRegisterOpen, setIsRegisterOpen] = useState(false);
  
  // Authorized simulated user state
  const [user, setUser] = useState<{
    loggedIn: boolean;
    username: string;
  }>({
    loggedIn: false,
    username: ''
  });
  
  // Active tab/view state: 'landing' or 'dashboard'
  const [view, setView] = useState<'landing' | 'dashboard'>('landing');

  const handleSuccessRegister = (username: string) => {
    setUser({
      loggedIn: true,
      username: username || 'Pilot_Anonymous'
    });
    // Automatically flip visual state to the simulated dashboard view
    setView('dashboard');
  };

  const handleLogout = () => {
    setUser({
      loggedIn: false,
      username: ''
    });
    setView('landing');
  }; 

  const handleSelectPlanFromLanding = (planName: string) => {
    // Open registration on plan selection
    if (user.loggedIn) {
      setView('dashboard');
    } else {
      setIsRegisterOpen(true);
    }
  };

  return (
    <div className="min-h-screen text-slate-100 flex flex-col justify-between selection:bg-indigo-500 selection:text-white">
      
      {/* Top Navbar Component shared globally */}
      <Navbar
        lang={lang}
        setLang={setLang}
        onOpenRegister={() => setIsRegisterOpen(true)}
        hasUser={user.loggedIn}
        userName={user.username}
        onOpenDashboard={() => setView('dashboard')}
        onLogout={handleLogout}
      />

      {/* Main Contents logic switch */}
      {view === 'dashboard' ? (
        <DashboardSimulation
          lang={lang}
          userName={user.username}
          onLogout={handleLogout}
        />
      ) : (
        <main className="flex-grow">
          
          {/* Visual Interactive Hero section with CTAs */}
          <Hero
            lang={lang}
            onOpenRegister={() => setIsRegisterOpen(true)}
          />

          {/* Features highlight modules and layout cards */}
          <Features lang={lang} />

          {/* Dynamic AI routing / Synaptic simulated playground sandbox */}
          <NeuralSandbox lang={lang} />

          {/* Dual Toggle pricing grid list with animated custom visualizer card */}
          <Pricing 
            lang={lang} 
            onSelectPlan={handleSelectPlanFromLanding} 
          />

          {/* User Reviews quotes and slider info */}
          <Reviews lang={lang} />

        </main>
      )}

      {/* Globally rendered layout footer */}
      <Footer lang={lang} />

      {/* Interactive registration form Multi-Step layout modal code */}
      {isRegisterOpen && (
        <RegisterModal
          lang={lang}
          onClose={() => setIsRegisterOpen(false)}
          onSuccessRegister={handleSuccessRegister}
        />
      )}

    </div>
  );
}
