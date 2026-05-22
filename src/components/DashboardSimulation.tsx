import React, { useState } from 'react';
import { Cpu, Layout, Radio, Shield, LogOut, Terminal, Activity, Bell, Sparkles, Send, CheckCircle } from 'lucide-react';
import { Language, translations } from '../translations';

interface DashboardSimulationProps {
  lang: Language;
  userName: string;
  onLogout: () => void;
}

export default function DashboardSimulation({ lang, userName, onLogout }: DashboardSimulationProps) {
  const t = translations[lang];
  const [notifications, setNotifications] = useState<string[]>([]);
  const [consoleInput, setConsoleInput] = useState('');
  const [networkLogs, setNetworkLogs] = useState<string[]>([
    t.dash_log_1,
    t.dash_log_2,
    t.dash_log_3
  ]);

  const pushNotification = (msg: string) => {
    setNotifications(prev => [msg, ...prev].slice(0, 4));
    setTimeout(() => {
      setNotifications(prev => prev.filter(n => n !== msg));
    }, 4000);
  };

  const handleAction = (actName: string) => {
    const response = `${lang === 'RU' ? '[ДЕЙСТВИЕ] Выполнено' : lang === 'ES' ? '[ACCIÓN] Realizada' : '[ACTION] Executed'}: ${actName}`;
    setNetworkLogs(prev => [response, ...prev]);
    pushNotification(t.dash_toast_action);
  };

  const handleConsoleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!consoleInput.trim()) return;

    const customLog = `[CMD] > ${consoleInput}`;
    const synthResult = `[NEURAL_AI] Synaptic confirmation node trace ID_${Math.floor(Math.random()*89999+10000)}: Done.`;
    
    setNetworkLogs(prev => [synthResult, customLog, ...prev]);
    setConsoleInput('');
    pushNotification(lang === 'RU' ? 'Команда успешно скомпилирована!' : lang === 'ES' ? '¡Comando compilado con éxito!' : 'Command compiled successfully!');
  };

  return (
    <div className="min-h-screen bg-[#030712] pt-24 pb-16 relative cyber-grid">
      
      {/* Ambient backgrounds */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-indigo-500/5 rounded-full blur-[140px] pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-cyan-500/5 rounded-full blur-[140px] pointer-events-none"></div>

      {/* Top Banner alert notification loop */}
      {notifications.length > 0 && (
        <div className="fixed bottom-5 right-5 z-50 space-y-2">
          {notifications.map((notif, i) => (
            <div
              key={i}
              className="bg-slate-900 border border-cyan-500/40 text-cyan-200 px-5 py-3 rounded-xl shadow-2xl flex items-center space-x-2.5 animate-bounce-slow text-xs font-mono font-bold max-w-sm"
            >
              <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0" />
              <span>{notif}</span>
            </div>
          ))}
        </div>
      )}

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Console banner */}
        <div className="rounded-3xl bg-[#0b0f19] border border-indigo-500/30 p-8 mb-8 shadow-2xl relative overflow-hidden">
          
          {/* absolute decorative sphere */}
          <div className="absolute top-0 right-0 w-64 h-full bg-gradient-to-l from-indigo-500/10 to-transparent pointer-events-none"></div>

          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 relative z-10">
            
            <div>
              <div className="inline-flex items-center space-x-1 bg-indigo-950/80 border border-indigo-500/30 px-3.5 py-1 rounded-full text-[10px] font-extrabold tracking-widest text-indigo-300 font-display mb-3 uppercase">
                🚀 SECURED HYPERION PORT
              </div>
              <h1 className="text-2xl sm:text-3xl font-display font-extrabold text-white tracking-tight">
                {t.dash_welcome}
              </h1>
              <p className="text-xs text-slate-400 mt-1 font-mono flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping"></span>
                {t.dash_active_user}: <span className="text-cyan-400 font-bold">{userName.toUpperCase()}</span>
              </p>
            </div>

            <div className="flex items-center space-x-3">
              <button
                onClick={() => handleAction('FORCED RESYNC')}
                className="bg-slate-900 hover:bg-slate-800 border border-slate-800 text-xs text-slate-300 font-bold py-2.5 px-4 rounded-xl transition-all duration-200"
              >
                {lang === 'RU' ? 'Синхронизировать ноды' : lang === 'ES' ? 'Sincronizar nodos' : 'Resync Node Mesh'}
              </button>
              
              <button
                onClick={onLogout}
                className="bg-rose-950/30 hover:bg-rose-950/60 border border-rose-900/50 text-xs text-rose-300 font-bold py-2.5 px-4 rounded-xl transition-all duration-200 flex items-center space-x-2"
              >
                <LogOut className="w-3.5 h-3.5" />
                <span>{t.dash_btn_logout}</span>
              </button>
            </div>

          </div>
        </div>

        {/* Dashboard Main Visual Widgets */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Interactive telemetry column */}
          <div className="lg:col-span-8 space-y-8">
            
            {/* Matrix Metrics Cards block */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              
              <div className="bg-[#0b0f19] border border-slate-800 p-6 rounded-2xl shadow-xl">
                <div className="flex items-center justify-between text-slate-500 mb-4">
                  <Cpu className="w-5 h-5 text-indigo-400" />
                  <span className="text-[10px] font-mono">STABLE</span>
                </div>
                <div className="text-2xl font-extrabold text-white font-display tracking-tight">99.98%</div>
                <div className="text-xs text-slate-400 mt-1 font-light">{t.dash_health}</div>
              </div>

              <div className="bg-[#0b0f19] border border-slate-800 p-6 rounded-2xl shadow-xl">
                <div className="flex items-center justify-between text-slate-500 mb-4">
                  <Activity className="w-5 h-5 text-cyan-400" />
                  <span className="text-[10px] font-mono">PEAKED</span>
                </div>
                <div className="text-2xl font-extrabold text-white font-display tracking-tight">1,492 /s</div>
                <div className="text-xs text-slate-400 mt-1 font-light">{t.dash_neural_flow}</div>
              </div>

              <div className="bg-[#0b0f19] border border-slate-800 p-6 rounded-2xl shadow-xl">
                <div className="flex items-center justify-between text-slate-500 mb-4">
                  <Shield className="w-5 h-5 text-purple-400" />
                  <span className="text-[10px] font-mono">MILITARY</span>
                </div>
                <div className="text-2xl font-extrabold text-white font-display tracking-tight">SECURE</div>
                <div className="text-xs text-slate-400 mt-1 font-light">{t.dash_security_status}</div>
              </div>

            </div>

            {/* High-fidelity interactive telemetry map simulator */}
            <div className="bg-[#0b0f19] border border-slate-800 p-6 rounded-2xl shadow-xl">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-sm font-bold uppercase tracking-widest text-slate-300 font-display flex items-center space-x-2">
                  <Radio className="w-4 h-4 text-cyan-400 animate-pulse" />
                  <span>{t.dash_metrics_title}</span>
                </h3>
                <div className="flex items-center space-x-2">
                  <span className="w-2 h-2 rounded-full bg-indigo-500"></span>
                  <span className="text-[10px] text-slate-500 font-mono">REAL-TIME TELEMETRY</span>
                </div>
              </div>

              {/* Simulated visual audio mesh bars */}
              <div className="h-44 bg-slate-950/60 rounded-xl border border-slate-900 flex items-end justify-between p-4 gap-1.5 overflow-hidden">
                {[35, 65, 45, 85, 95, 20, 45, 75, 55, 60, 40, 80, 90, 100, 30, 45, 65, 80, 95, 30, 50, 70, 85, 40, 60, 90, 30, 75, 80, 45].map((h, i) => (
                  <div
                    key={i}
                    style={{ height: `${h}%` }}
                    className="flex-1 bg-gradient-to-t from-indigo-600 via-purple-500 to-cyan-400 rounded-sm animate-pulse"
                  ></div>
                ))}
              </div>

              {/* Interactive buttons to mock actions */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-6">
                <button
                  onClick={() => handleAction('COGNITIVE BOOST')}
                  className="p-3 bg-slate-900 hover:bg-indigo-900/40 border border-slate-800 hover:border-indigo-500/50 rounded-xl text-xs text-slate-200 transition-all font-semibold"
                >
                  🔥 Cognitive Boost
                </button>
                <button
                  onClick={() => handleAction('SHIELD DEFLECTION')}
                  className="p-3 bg-slate-900 hover:bg-purple-900/40 border border-slate-800 hover:border-purple-500/50 rounded-xl text-xs text-slate-200 transition-all font-semibold"
                >
                  🛡️ Encrypt Shield
                </button>
                <button
                  onClick={() => handleAction('VECTOR CALCULUS')}
                  className="p-3 bg-slate-900 hover:bg-cyan-900/40 border border-slate-800 hover:border-cyan-500/50 rounded-xl text-xs text-slate-200 transition-all font-semibold"
                >
                  📐 Vector Calculus
                </button>
                <button
                  onClick={() => handleAction('SYSTEM TERMINAL FLUSH')}
                  className="p-3 bg-slate-900 hover:bg-rose-900/40 border border-slate-800 hover:border-rose-500/50 rounded-xl text-xs text-slate-200 transition-all font-semibold"
                >
                  ⚡ Flush Logs
                </button>
              </div>

            </div>

          </div>

          {/* Live System Logs Console Sidebar */}
          <div className="lg:col-span-4">
            <div className="bg-[#0b0f19] border border-slate-800 rounded-2xl p-6 shadow-xl h-full flex flex-col justify-between">
              
              <div>
                <h3 className="text-xs font-bold uppercase tracking-widest text-slate-400 font-display mb-4 flex items-center space-x-2">
                  <Terminal className="w-4 h-4 text-purple-400" />
                  <span>{t.dash_recent_logs}</span>
                </h3>

                <div className="space-y-3 max-h-80 overflow-y-auto pr-1">
                  {networkLogs.map((log, index) => (
                    <div
                      key={index}
                      className="p-2.5 rounded-lg bg-slate-950/80 border border-slate-900 text-[10px] font-mono text-slate-300 leading-relaxed"
                    >
                      {log}
                    </div>
                  ))}
                </div>
              </div>

              {/* Direct neural input trigger Console Form */}
              <form onSubmit={handleConsoleSubmit} className="mt-6 border-t border-slate-900 pt-4">
                <label className="block text-[10px] font-mono text-indigo-400 mb-2 uppercase tracking-widest">
                  Execute Crypt Command:
                </label>
                <div className="flex items-center gap-2">
                  <input
                    type="text"
                    value={consoleInput}
                    onChange={(e) => setConsoleInput(e.target.value)}
                    placeholder="type 'help' or commands..."
                    className="flex-1 bg-slate-950 border border-slate-800 focus:border-indigo-500 text-xs px-3 py-2.5 rounded-xl text-white font-mono placeholder-slate-600 focus:outline-none"
                  />
                  <button
                    type="submit"
                    className="bg-indigo-600 hover:bg-indigo-500 p-2.5 rounded-xl text-white transition-all"
                  >
                    <Send className="w-3.5 h-3.5" />
                  </button>
                </div>
              </form>

            </div>
          </div>

        </div>

      </div>
    </div>
  );
}
