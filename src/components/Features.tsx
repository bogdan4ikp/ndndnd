import React from 'react';
import { Cpu, Zap, Activity, ShieldAlert, Sparkles, Orbit, Radio } from 'lucide-react';
import { Language, translations } from '../translations';

interface FeaturesProps {
  lang: Language;
}

export default function Features({ lang }: FeaturesProps) {
  const t = translations[lang];

  const features = [
    {
      icon: <Orbit className="w-6 h-6 text-indigo-400" />,
      title: t.feature_1_title,
      desc: t.feature_1_desc,
      accent: "from-indigo-500/20 to-indigo-500/5",
      border: "hover:border-indigo-500/50",
      badge: "Quantum Sync"
    },
    {
      icon: <Zap className="w-6 h-6 text-purple-400" />,
      title: t.feature_2_title,
      desc: t.feature_2_desc,
      accent: "from-purple-500/20 to-purple-500/5",
      border: "hover:border-purple-500/50",
      badge: "Hyper Shard"
    },
    {
      icon: <Radio className="w-6 h-6 text-cyan-400" />,
      title: t.feature_3_title,
      desc: t.feature_3_desc,
      accent: "from-cyan-500/20 to-cyan-500/5",
      border: "hover:border-cyan-500/50",
      badge: "3D Real-time"
    },
    {
      icon: <ShieldAlert className="w-6 h-6 text-rose-400" />,
      title: t.feature_4_title,
      desc: t.feature_4_desc,
      accent: "from-rose-500/20 to-rose-500/5",
      border: "hover:border-rose-500/50",
      badge: "Bio-Shield"
    }
  ];

  return (
    <section id="features" className="py-24 bg-gradient-to-b from-[#030712] via-[#090e1a] to-[#030712] relative">
      
      {/* Soft backlights */}
      <div className="absolute top-1/2 right-10 w-96 h-96 bg-purple-600/5 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="absolute bottom-10 left-10 w-96 h-96 bg-cyan-600/5 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Title elements */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center space-x-1.5 bg-gradient-to-r from-cyan-500/10 to-purple-500/10 border border-indigo-500/20 px-4 py-1.5 rounded-full text-xs font-bold tracking-widest text-cyan-400 uppercase font-display mb-4">
            <Sparkles className="w-3 h-3 text-cyan-400 animate-spin-slow" />
            <span>{t.features_subtitle}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-extrabold text-white tracking-tight mt-2">
            {t.features_title}
          </h2>
        </div>

        {/* Features interactive grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {features.map((feat, index) => (
            <div
              key={index}
              className={`group relative rounded-3xl bg-[#0b0f19]/70 border border-slate-800/80 p-8 hover:bg-[#0b0f19] transition-all duration-300 hover:-translate-y-1 overflow-hidden shadow-2xl ${feat.border}`}
            >
              {/* Accent backdrop gradient background */}
              <div className={`absolute -inset-px bg-gradient-to-br ${feat.accent} opacity-40 group-hover:opacity-100 transition duration-500 rounded-3xl`}></div>
              
              <div className="relative z-10 flex flex-col justify-between h-full">
                
                <div>
                  {/* Top row with icon & system tag */}
                  <div className="flex items-center justify-between mb-6">
                    <div className="bg-slate-900/90 p-3 rounded-2xl border border-slate-800 shadow-md group-hover:scale-110 transition-transform duration-300">
                      {feat.icon}
                    </div>
                    <span className="text-[10px] font-extrabold font-display tracking-widest text-slate-500 uppercase px-3 py-1 rounded-md bg-slate-950/80 border border-slate-900">
                      {feat.badge}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-bold text-white tracking-tight font-display mb-3 group-hover:text-cyan-300 transition-colors duration-200">
                    {feat.title}
                  </h3>

                  {/* Desc */}
                  <p className="text-slate-400 text-sm leading-relaxed font-light mb-6">
                    {feat.desc}
                  </p>
                </div>

                {/* Decorative circuit line and stats placeholder */}
                <div className="pt-4 border-t border-slate-900/60 flex items-center justify-between text-xs text-slate-500">
                  <span className="flex items-center space-x-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-ping"></span>
                    <span className="text-[10px] uppercase font-bold tracking-wider text-emerald-400">Mesh Synced</span>
                  </span>
                  <span className="font-mono">v4.2 // Node._{index + 1}</span>
                </div>

              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
