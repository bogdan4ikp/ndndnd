import React from 'react';
import { Cpu, Globe, ArrowRight, UserCheck } from 'lucide-react';
import { Language, translations } from '../translations';

interface NavbarProps {
  lang: Language;
  setLang: (l: Language) => void;
  onOpenRegister: () => void;
  hasUser: boolean;
  userName: string;
  onOpenDashboard: () => void;
  onLogout: () => void;
}

export default function Navbar({
  lang,
  setLang,
  onOpenRegister,
  hasUser,
  userName,
  onOpenDashboard,
  onLogout
}: NavbarProps) {
  const t = translations[lang];
  const [dropdownOpen, setDropdownOpen] = React.useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#030712]/85 backdrop-blur-xl border-b border-gray-800/80 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Logo Brand */}
          <div className="flex items-center space-x-3 cursor-pointer group">
            <div className="relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-indigo-500 to-cyan-500 rounded-lg blur opacity-75 group-hover:opacity-100 transition duration-300"></div>
              <div className="relative bg-[#0b0f19] p-2 rounded-lg border border-indigo-500/30">
                <Cpu className="w-6 h-6 text-cyan-400 animate-pulse" />
              </div>
            </div>
            <span className="font-display font-extrabold text-2xl tracking-wider bg-gradient-to-r from-white via-slate-200 to-indigo-300 bg-clip-text text-transparent">
              {t.logo}
            </span>
          </div>

          {/* Navigation Links (Scroll targets) */}
          <div className="hidden md:flex items-center space-x-8 font-medium text-sm text-slate-300">
            <a href="#features" className="hover:text-cyan-400 transition-colors duration-200">{t.nav_features}</a>
            <a href="#sandbox" className="hover:text-indigo-400 transition-colors duration-200">{t.nav_sandbox}</a>
            <a href="#pricing" className="hover:text-purple-400 transition-colors duration-200">{t.nav_pricing}</a>
            <a href="#reviews" className="hover:text-cyan-400 transition-colors duration-200">{t.nav_reviews}</a>
          </div>

          {/* Right Controls: Lang Switcher, Portal Sign Up */}
          <div className="flex items-center space-x-4">
            
            {/* Language Dropdown Selector */}
            <div className="relative">
              <button
                onClick={() => setDropdownOpen(!dropdownOpen)}
                className="flex items-center space-x-2 bg-slate-900/90 border border-slate-800 hover:border-indigo-500 px-3 py-1.5 rounded-lg text-xs font-semibold text-slate-200 transition-all duration-200"
              >
                <Globe className="w-3.5 h-3.5 text-cyan-400" />
                <span>{lang}</span>
              </button>
              
              {dropdownOpen && (
                <div className="absolute right-0 mt-2 w-28 bg-[#0b0f19] border border-slate-800 rounded-xl shadow-2xl overflow-hidden py-1 z-50">
                  {(['EN', 'RU', 'ES'] as Language[]).map((l) => (
                    <button
                      key={l}
                      onClick={() => {
                        setLang(l);
                        setDropdownOpen(false);
                      }}
                      className={`w-full text-left px-4 py-2 text-xs font-semibold transition-colors duration-150 ${lang === l ? 'bg-indigo-600/35 text-cyan-300' : 'text-slate-400 hover:bg-slate-800/60 hover:text-white'}`}
                    >
                      {l === 'EN' ? '🇺🇸 English' : l === 'RU' ? '🇷🇺 Русский' : '🇪🇸 Español'}
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* User Access State button */}
            {hasUser ? (
              <div className="flex items-center space-x-2">
                <button 
                  onClick={onOpenDashboard}
                  className="relative group hidden sm:inline-flex items-center space-x-2 bg-gradient-to-r from-indigo-600 to-cyan-600 hover:from-indigo-500 hover:to-cyan-500 text-white font-bold text-xs py-2 px-4 rounded-xl shadow-lg transition-all duration-300 hover:shadow-cyan-500/20 hover:-translate-y-0.5"
                >
                  <UserCheck className="w-3.5 h-3.5 text-cyan-200" />
                  <span className="max-w-[100px] truncate">{userName}</span>
                </button>
                <button 
                  onClick={onLogout}
                  className="bg-red-950/40 hover:bg-red-950/80 border border-red-900/50 text-red-200 text-xs py-2 px-3 rounded-xl transition-all"
                >
                  {lang === 'RU' ? 'Выйти' : lang === 'ES' ? 'Salir' : 'Log Out'}
                </button>
              </div>
            ) : (
              <button
                onClick={onOpenRegister}
                className="relative group overflow-hidden px-5 py-2.5 rounded-xl bg-gradient-to-r from-indigo-600 via-purple-600 to-cyan-500 hover:opacity-95 transition-all duration-300 shadow-[0_0_20px_rgba(99,102,241,0.35)]"
              >
                <span className="relative z-10 font-bold text-xs tracking-wider text-white flex items-center space-x-1.5">
                  <span>{t.nav_register}</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform duration-200" />
                </span>
                <span className="absolute inset-0 bg-gradient-to-r from-cyan-500 via-purple-600 to-indigo-600 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></span>
              </button>
            )}

          </div>

        </div>
      </div>
    </nav>
  );
}
