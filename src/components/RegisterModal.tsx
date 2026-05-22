import React, { useState } from 'react';
import { X, ArrowRight, ShieldCheck, Mail, Lock, User, Check, RefreshCw, Sparkles, Orbit } from 'lucide-react';
import { Language, translations } from '../translations';

interface RegisterModalProps {
  lang: Language;
  onClose: () => void;
  onSuccessRegister: (username: string) => void;
}

export default function RegisterModal({ lang, onClose, onSuccessRegister }: RegisterModalProps) {
  const t = translations[lang];
  const [step, setStep] = useState(1);
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({
    username: '',
    email: '',
    password: '',
    avatar: 'cyber-pilot-1',
    interest: 'ai-dev'
  });

  const [errors, setErrors] = useState({ username: '', email: '', password: '' });

  // Sci-fi inspired profile avatars
  const avatarBlueprints = [
    { id: 'cyber-pilot-1', url: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=150&auto=format&fit=crop', label: 'Neo-Scribe' },
    { id: 'cyber-pilot-2', url: 'https://images.unsplash.com/photo-1634017839464-5c339ebe3cb4?q=80&w=150&auto=format&fit=crop', label: 'Quantum Sentry' },
    { id: 'cyber-pilot-3', url: 'https://images.unsplash.com/photo-1620641788421-7a1c342ea42e?q=80&w=150&auto=format&fit=crop', label: 'Pulse Weaver' },
    { id: 'cyber-pilot-4', url: 'https://images.unsplash.com/photo-1607604276583-eef5d076aa5f?q=80&w=150&auto=format&fit=crop', label: 'Astral Hacker' }
  ];

  const validateStep1 = () => {
    const errs = { username: '', email: '', password: '' };
    let valid = true;

    if (form.username.trim().length < 3) {
      errs.username = lang === 'RU' ? 'Имя должно быть не менее 3 символов' : 'Name must be at least 3 characters';
      valid = false;
    }
    if (!form.email.includes('@')) {
      errs.email = lang === 'RU' ? 'Неверный формат почты' : 'Invalid email address';
      valid = false;
    }
    if (form.password.length < 8) {
      errs.password = lang === 'RU' ? 'Пароль должен содержать от 8 символов' : 'Password must be at least 8 characters';
      valid = false;
    }

    setErrors(errs);
    return valid;
  };

  const handleNext = () => {
    if (validateStep1()) {
      setStep(2);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    
    // Simulated sync over artificial secure network
    setTimeout(() => {
      setLoading(false);
      setStep(3);
    }, 1800);
  };

  const handleFinalize = () => {
    onSuccessRegister(form.username);
    onClose();
  };

  // Dynamic Password Complexity evaluation
  const getPasswordStrength = () => {
    if (!form.password) return { label: 'Empty', color: 'bg-slate-800', width: 'w-0' };
    if (form.password.length < 6) return { label: 'Vulnerable', color: 'bg-rose-500', width: 'w-1/3' };
    if (form.password.length < 10) return { label: 'Standard Sync', color: 'bg-amber-400', width: 'w-2/3' };
    return { label: 'Hyper-Secure Crypt', color: 'bg-emerald-400', width: 'w-full' };
  };

  const strength = getPasswordStrength();

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto flex items-center justify-center p-4 bg-[#030712]/90 backdrop-blur-md">
      
      {/* Glowing backdrop circle */}
      <div className="absolute w-96 h-96 bg-indigo-500/20 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="relative w-full max-w-lg bg-[#0b0f19] border border-indigo-500/30 rounded-3xl overflow-hidden shadow-2xl transition-all duration-300">
        
        {/* Header decoration band */}
        <div className="h-1.5 bg-gradient-to-r from-cyan-400 via-indigo-500 to-purple-500"></div>

        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 text-slate-400 hover:text-white bg-slate-900 hover:bg-slate-800 p-2 rounded-xl border border-slate-800 transition-all"
        >
          <X className="w-4 h-4" />
        </button>

        {/* Modal Inner Wrapper */}
        <div className="p-8">
          
          {/* Stepper Progress bar visual indicator */}
          <div className="flex items-center space-x-2 mb-8">
            <div className={`flex-1 h-1 rounded-full transition-all duration-300 ${step >= 1 ? 'bg-indigo-500' : 'bg-slate-800'}`}></div>
            <div className={`flex-1 h-1 rounded-full transition-all duration-300 ${step >= 2 ? 'bg-purple-500' : 'bg-slate-800'}`}></div>
            <div className={`flex-1 h-1 rounded-full transition-all duration-300 ${step >= 3 ? 'bg-cyan-500' : 'bg-slate-800'}`}></div>
          </div>

          {/* Step 1: System Identity Form */}
          {step === 1 && (
            <div>
              <div className="mb-6">
                <h3 className="text-2xl font-extrabold text-white font-display tracking-tight flex items-center gap-2">
                  <Orbit className="w-5 h-5 text-indigo-400 animate-spin-slow" />
                  <span>{t.register_modal_title}</span>
                </h3>
                <p className="text-xs text-slate-400 mt-1 font-light">
                  {t.register_modal_step_1} // Node Authentication Protocol
                </p>
              </div>

              <div className="space-y-4">
                {/* Username Input */}
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-400 mb-2 font-display">
                    {t.register_label_username}
                  </label>
                  <div className="relative">
                    <User className="absolute left-3 top-3.5 w-4 h-4 text-slate-500" />
                    <input
                      type="text"
                      value={form.username}
                      onChange={(e) => setForm({ ...form, username: e.target.value })}
                      placeholder="e.g., NEO_OPERATOR"
                      className="w-full bg-slate-950 border border-slate-800 focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 text-slate-200 text-sm px-10 py-3 rounded-xl focus:outline-none transition-all font-mono"
                    />
                  </div>
                  {errors.username && <p className="text-rose-400 text-[10px] mt-1 font-semibold">{errors.username}</p>}
                </div>

                {/* Email input */}
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-400 mb-2 font-display">
                    {t.register_label_email}
                  </label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-3.5 w-4 h-4 text-slate-500" />
                    <input
                      type="email"
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      placeholder="you@neuralcloud.com"
                      className="w-full bg-slate-950 border border-slate-800 focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 text-slate-200 text-sm px-10 py-3 rounded-xl focus:outline-none transition-all font-mono"
                    />
                  </div>
                  {errors.email && <p className="text-rose-400 text-[10px] mt-1 font-semibold">{errors.email}</p>}
                </div>

                {/* Password input */}
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-400 mb-2 font-display">
                    {t.register_label_password}
                  </label>
                  <div className="relative">
                    <Lock className="absolute left-3 top-3.5 w-4 h-4 text-slate-500" />
                    <input
                      type="password"
                      value={form.password}
                      onChange={(e) => setForm({ ...form, password: e.target.value })}
                      placeholder="••••••••••••••••"
                      className="w-full bg-slate-950 border border-slate-800 focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 text-slate-200 text-sm px-10 py-3 rounded-xl focus:outline-none transition-all font-mono"
                    />
                  </div>
                  
                  {/* Strength Bar visual */}
                  {form.password && (
                    <div className="mt-2.5 bg-slate-950 p-2.5 rounded-lg border border-slate-900">
                      <div className="flex justify-between items-center text-[9px] font-bold text-slate-400 uppercase tracking-widest mb-1.5">
                        <span>Complexity:</span>
                        <span className="text-cyan-400">{strength.label}</span>
                      </div>
                      <div className="w-full bg-slate-850 h-1.5 rounded-full overflow-hidden">
                        <div className={`h-full transition-all duration-500 ${strength.color} ${strength.width}`}></div>
                      </div>
                    </div>
                  )}
                  
                  <p className="text-[9px] text-slate-500 mt-1 font-light">
                    {t.register_label_pass_hint}
                  </p>
                  {errors.password && <p className="text-rose-400 text-[10px] mt-1 font-semibold">{errors.password}</p>}
                </div>
              </div>

              <button
                onClick={handleNext}
                className="w-full mt-8 py-3.5 px-4 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-bold text-xs tracking-widest uppercase transition-all duration-200 flex items-center justify-center space-x-2 font-display shadow-lg shadow-indigo-500/20"
              >
                <span>{t.register_btn_next}</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          )}

          {/* Step 2: Avatar Selection Customization */}
          {step === 2 && (
            <form onSubmit={handleSubmit}>
              <div className="mb-6">
                <h3 className="text-2xl font-extrabold text-white font-display tracking-tight flex items-center gap-2">
                  <Sparkles className="w-5 h-5 text-purple-400 animate-spin-slow" />
                  <span>{t.register_avatar_title}</span>
                </h3>
                <p className="text-xs text-slate-400 mt-1 font-light">
                  {t.register_avatar_desc}
                </p>
              </div>

              {/* Avatars Grid Layout selection */}
              <div className="grid grid-cols-2 gap-3 mb-6">
                {avatarBlueprints.map((item) => (
                  <button
                    type="button"
                    key={item.id}
                    onClick={() => setForm({ ...form, avatar: item.id })}
                    className={`relative rounded-2xl overflow-hidden border p-2 text-left group transition-all duration-300 ${form.avatar === item.id ? 'bg-indigo-950/40 border-indigo-500 shadow-md shadow-indigo-500/25' : 'bg-slate-900/40 border-slate-800 hover:border-slate-700'}`}
                  >
                    <img
                      src={item.url}
                      alt={item.label}
                      className="w-full h-24 object-cover rounded-xl mb-2 group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="flex items-center justify-between px-1">
                      <span className="text-[11px] font-bold text-slate-200 font-display truncate">{item.label}</span>
                      {form.avatar === item.id && <Check className="w-3.5 h-3.5 text-cyan-400 shrink-0" />}
                    </div>
                  </button>
                ))}
              </div>

              {/* Navigation button arrays */}
              <div className="flex items-center gap-4 mt-8">
                <button
                  type="button"
                  onClick={() => setStep(1)}
                  className="flex-1 py-3.5 px-4 rounded-xl bg-slate-900 hover:bg-slate-850 border border-slate-800 text-slate-300 font-bold text-xs tracking-wider uppercase transition-all duration-200"
                >
                  {t.register_btn_back}
                </button>
                
                <button
                  type="submit"
                  disabled={loading}
                  className="flex-1 py-3.5 px-4 rounded-xl bg-gradient-to-r from-indigo-600 via-purple-600 to-indigo-700 text-white font-bold text-xs tracking-wider uppercase transition-all duration-200 flex items-center justify-center space-x-2 font-display shadow-lg shadow-indigo-500/25"
                >
                  {loading ? (
                    <RefreshCw className="w-4 h-4 animate-spin text-white" />
                  ) : (
                    <>
                      <span>{t.register_btn_submit}</span>
                      <Check className="w-4 h-4" />
                    </>
                  )}
                </button>
              </div>
            </form>
          )}

          {/* Step 3: Registration Success confirmation screen */}
          {step === 3 && (
            <div className="text-center py-6">
              <div className="inline-flex items-center justify-center p-4 bg-emerald-500/15 border border-emerald-500/30 rounded-full mb-6 text-emerald-400 animate-bounce">
                <ShieldCheck className="w-12 h-12" />
              </div>

              <h3 className="text-2xl font-extrabold text-white font-display mb-3">
                {t.register_welcome}
              </h3>
              
              <div className="bg-slate-950 p-4 rounded-xl border border-slate-900 max-w-sm mx-auto mb-6 text-left">
                <div className="text-[10px] font-mono text-indigo-400 uppercase tracking-widest mb-1">SYNAPSE OPERATOR SIGNATURE:</div>
                <div className="text-xs text-white font-bold font-mono truncate">{form.username.toUpperCase()} // KEY_ID_{Math.floor(Math.random() * 900000 + 100000)}</div>
              </div>

              <p className="text-slate-400 text-sm leading-relaxed max-w-md mx-auto mb-8 font-light">
                {t.register_success_desc}
              </p>

              <button
                onClick={handleFinalize}
                className="w-full py-4 px-4 rounded-xl bg-gradient-to-r from-indigo-600 via-purple-600 to-cyan-500 text-white font-bold text-xs tracking-widest uppercase transition-all duration-300 hover:shadow-[0_0_30px_rgba(99,102,241,0.4)] font-display"
              >
                {t.register_btn_dashboard}
              </button>
            </div>
          )}

        </div>
      </div>
    </div>
  );
}
