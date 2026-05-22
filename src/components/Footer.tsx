import React from 'react';
import { Cpu, Github, Twitter, Linkedin, Heart } from 'lucide-react';
import { Language, translations } from '../translations';

interface FooterProps {
  lang: Language;
}

export default function Footer({ lang }: FooterProps) {
  const t = translations[lang];

  return (
    <footer className="bg-slate-950 border-t border-slate-900 pt-16 pb-12 relative overflow-hidden">
      
      {/* Ambient footer flare */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-80 h-40 bg-indigo-500/5 rounded-full blur-[80px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 pb-12 border-b border-slate-900">
          
          {/* Column Brand info */}
          <div className="md:col-span-5">
            <div className="flex items-center space-x-3 cursor-pointer group mb-6">
              <div className="relative">
                <div className="absolute -inset-1 bg-gradient-to-r from-indigo-500 to-cyan-500 rounded-lg blur opacity-75 group-hover:opacity-100 transition duration-300"></div>
                <div className="relative bg-[#0b0f19] p-2 rounded-lg border border-indigo-500/30">
                  <Cpu className="w-5 h-5 text-cyan-400" />
                </div>
              </div>
              <span className="font-display font-extrabold text-xl tracking-wider text-white">
                {t.logo}
              </span>
            </div>
            <p className="text-xs text-slate-400 leading-relaxed font-light max-w-sm">
              {t.footer_desc}
            </p>
          </div>

          {/* Column navigation links fast access */}
          <div className="md:col-span-4 grid grid-cols-2 gap-8">
            <div>
              <h4 className="text-xs font-bold text-slate-300 uppercase tracking-widest font-display mb-4">
                Platform
              </h4>
              <ul className="space-y-2.5 text-xs text-slate-400">
                <li><a href="#features" className="hover:text-white transition-colors">{t.nav_features}</a></li>
                <li><a href="#sandbox" className="hover:text-white transition-colors">{t.nav_sandbox}</a></li>
                <li><a href="#pricing" className="hover:text-white transition-colors">{t.nav_pricing}</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-xs font-bold text-slate-300 uppercase tracking-widest font-display mb-4">
                Support
              </h4>
              <ul className="space-y-2.5 text-xs text-slate-400">
                <li><a href="#" className="hover:text-white transition-colors">Security Protocols</a></li>
                <li><a href="#" className="hover:text-white transition-colors">API Spec</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Core Nodes</a></li>
              </ul>
            </div>
          </div>

          {/* Column Social presence & Newsletter mock */}
          <div className="md:col-span-3">
            <h4 className="text-xs font-bold text-slate-300 uppercase tracking-widest font-display mb-4">
              Social Broadcast
            </h4>
            <div className="flex items-center space-x-4 mb-6">
              <a href="#" className="bg-slate-900 hover:bg-slate-800 p-2.5 rounded-xl border border-slate-800 text-slate-400 hover:text-white transition-all">
                <Github className="w-4 h-4" />
              </a>
              <a href="#" className="bg-slate-900 hover:bg-slate-800 p-2.5 rounded-xl border border-slate-800 text-slate-400 hover:text-white transition-all">
                <Twitter className="w-4 h-4" />
              </a>
              <a href="#" className="bg-slate-900 hover:bg-slate-800 p-2.5 rounded-xl border border-slate-800 text-slate-400 hover:text-white transition-all">
                <Linkedin className="w-4 h-4" />
              </a>
            </div>
            <div className="text-[10px] font-mono text-slate-500">
              SECURED BY DECENTRALIZED COMPUTE SHA-256
            </div>
          </div>

        </div>

        {/* Row Copy rights details */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-[11px] text-slate-500 font-mono gap-4">
          <div>
            &copy; {new Date().getFullYear()} {t.logo}. {t.footer_rights}
          </div>
          <div className="flex items-center space-x-1">
            <span>Crafted with</span>
            <Heart className="w-3.5 h-3.5 text-rose-500 fill-rose-500 animate-pulse" />
            <span>for cyber explorers</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
