import React from 'react';
import { ArrowUpRight, ShieldCheck, Zap, Layers, Sparkles } from 'lucide-react';
import { Language, translations } from '../translations';

interface HeroProps {
  lang: Language;
  onOpenRegister: () => void;
}

export default function Hero({ lang, onOpenRegister }: HeroProps) {
  const t = translations[lang];

  return (
    <section className="relative pt-32 pb-24 overflow-hidden">
      
      {/* Ambient background lights */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-indigo-600/10 rounded-full blur-[120px] pointer-events-none animate-pulse-slow"></div>
      <div className="absolute top-1/3 left-1/4 w-[350px] h-[350px] bg-cyan-500/10 rounded-full blur-[100px] pointer-events-none animate-float-slow"></div>
      <div className="absolute top-1/2 right-1/4 w-[400px] h-[400px] bg-purple-500/10 rounded-full blur-[110px] pointer-events-none animate-float-medium"></div>

      {/* Tech Grid Background */}
      <div className="absolute inset-0 cyber-grid pointer-events-none opacity-[0.12] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_40%,#000_70%,transparent_100%)]"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center">
          
          {/* Floating Release Badge */}
          <div className="inline-flex items-center space-x-2 bg-indigo-950/85 border border-indigo-500/40 px-4 py-2 rounded-full mb-8 shadow-[0_0_15px_rgba(99,102,241,0.25)] animate-bounce-slow">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-cyan-500"></span>
            </span>
            <span className="text-xs font-bold tracking-widest text-indigo-200 font-display">
              {t.hero_badge}
            </span>
          </div>

          {/* High Impact Headline */}
          <h1 className="font-display font-extrabold text-4xl sm:text-6xl lg:text-7xl tracking-tight leading-tight max-w-5xl mx-auto">
            <span className="text-white block sm:inline">{t.hero_title_1}</span>{' '}
            <span className="bg-gradient-to-r from-indigo-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent block sm:inline drop-shadow-[0_2px_15px_rgba(99,102,241,0.2)]">
              {t.hero_title_gradient}
            </span>{' '}
            <span className="text-slate-300 block text-3xl sm:text-5xl lg:text-6xl mt-2">
              {t.hero_title_2}
            </span>
          </h1>

          {/* Beautiful Sub-description */}
          <p className="mt-8 text-base sm:text-lg lg:text-xl text-slate-400 max-w-3xl mx-auto leading-relaxed font-light">
            {t.hero_desc}
          </p>

          {/* Responsive Action CTAs */}
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4 px-4">
            <button
              onClick={onOpenRegister}
              className="w-full sm:w-auto px-8 py-4 rounded-2xl bg-gradient-to-r from-indigo-600 via-purple-600 to-indigo-700 text-white font-bold text-sm tracking-wider shadow-[0_0_30px_rgba(79,70,229,0.4)] hover:shadow-[0_0_40px_rgba(168,85,247,0.5)] transition-all duration-300 hover:-translate-y-0.5 relative group overflow-hidden"
            >
              <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-cyan-400 to-indigo-600 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-0"></span>
              <span className="relative z-10 flex items-center justify-center space-x-2">
                <span>{t.hero_cta_start}</span>
                <Sparkles className="w-4 h-4 text-cyan-200 animate-spin-slow" />
              </span>
            </button>

            <a
              href="#sandbox"
              className="w-full sm:w-auto px-8 py-4 rounded-2xl bg-slate-900/90 hover:bg-slate-800/80 border border-slate-800 hover:border-indigo-500/50 text-slate-300 hover:text-white font-bold text-sm tracking-wider transition-all duration-300 flex items-center justify-center space-x-2"
            >
              <span>{t.hero_cta_demo}</span>
              <ArrowUpRight className="w-4 h-4 text-slate-500 group-hover:text-white" />
            </a>
          </div>

          {/* Dynamic Trust metrics / Stats widgets with glassmorphism */}
          <div className="mt-20 grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-4xl mx-auto px-4">
            
            <div className="relative group rounded-2xl bg-slate-950/40 p-6 border border-slate-800/80 backdrop-blur-md hover:border-indigo-500/40 transition-all duration-300">
              <div className="absolute -top-3 left-6 px-3 py-1 rounded-md bg-indigo-950/90 border border-indigo-500/30 text-[10px] text-indigo-300 font-bold tracking-widest uppercase">
                MESH NODES
              </div>
              <div className="text-3xl font-extrabold text-white font-display mt-2 tracking-tight group-hover:text-cyan-400 transition-colors duration-300">
                842,914 +
              </div>
              <div className="text-xs text-slate-400 mt-1 uppercase tracking-wider font-semibold">
                {t.stats_active}
              </div>
            </div>

            <div className="relative group rounded-2xl bg-slate-950/40 p-6 border border-slate-800/80 backdrop-blur-md hover:border-purple-500/40 transition-all duration-300">
              <div className="absolute -top-3 left-6 px-3 py-1 rounded-md bg-purple-950/90 border border-purple-500/30 text-[10px] text-purple-300 font-bold tracking-widest uppercase">
                COMPUTE
              </div>
              <div className="text-3xl font-extrabold text-white font-display mt-2 tracking-tight group-hover:text-purple-400 transition-colors duration-300">
                1.2ms avg
              </div>
              <div className="text-xs text-slate-400 mt-1 uppercase tracking-wider font-semibold">
                {t.stats_speed}
              </div>
            </div>

            <div className="relative group rounded-2xl bg-slate-950/40 p-6 border border-slate-800/80 backdrop-blur-md hover:border-cyan-500/40 transition-all duration-300">
              <div className="absolute -top-3 left-6 px-3 py-1 rounded-md bg-cyan-950/90 border border-cyan-500/30 text-[10px] text-cyan-300 font-bold tracking-widest uppercase">
                INTEGRITY
              </div>
              <div className="text-3xl font-extrabold text-white font-display mt-2 tracking-tight group-hover:text-cyan-400 transition-colors duration-300">
                99.9997%
              </div>
              <div className="text-xs text-slate-400 mt-1 uppercase tracking-wider font-semibold">
                {t.stats_uptime}
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
