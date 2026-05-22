import React, { useState, useEffect, useRef } from 'react';
import { Cpu, Play, Terminal, Sparkles, RefreshCw, Send, BrainCircuit } from 'lucide-react';
import { Language, translations } from '../translations';

interface SandboxProps {
  lang: Language;
}

export default function NeuralSandbox({ lang }: SandboxProps) {
  const t = translations[lang];
  const [preset, setPreset] = useState<'creative' | 'cyber' | 'quantum'>('creative');
  const [inputVal, setInputVal] = useState('');
  const [loading, setLoading] = useState(false);
  const [outputLines, setOutputLines] = useState<string[]>([]);
  const [metrics, setMetrics] = useState({ temp: 0.7, tokens: 0, nodes: 12 });
  const terminalEndRef = useRef<HTMLDivElement>(null);

  // Creative preloaded responses
  const responses = {
    creative: [
      ">> Accessing Creative Dreamweaver preset matrix...",
      ">> Initiating neural synapse cascade. Thinking parameters structured.",
      ">> [IDEA SYSTEM] Synthesis successful. Dynamic output stream:",
      "💡 CONCEPT: 'A floating gravity-defying bio-sphere observatory'.",
      "💡 PROJECTION: Cognitive weights shifted to 88% imaginative synthesis.",
      "💡 NEURAL LOG: 4,192 poetic patterns generated across global grid.",
      ">> Process completed successfully. Connection holding."
    ],
    cyber: [
      ">> Activating Cyber Security Sentinel defensive subroutines...",
      ">> [FIREWALL MATRIX] Analyzing potential threat pathways.",
      ">> WARNING: 2 automated trace ping requests intercepted from IP 192.x.x.x",
      ">> SYNAPSE REACTION: Automatically established polymorphic cipher defense.",
      ">> STATUS: All neural cores secured behind quantum biometric layers.",
      ">> Complete. Safe node operations resumed."
    ],
    quantum: [
      ">> Booting Quantum Physics Analyst matrix engine...",
      ">> Resolving Schrodinger wave vectors on distributed cloud arrays.",
      ">> [MATH MODEL] Probability amplitude at |psi⟩ localized.",
      ">> ENTANGLEMENT INDEX: 94.2% stability achieved across 12,000 sub-nodes.",
      ">> RESULT: Entangled telemetry confirmed with Zero Point Energy node.",
      ">> Data stream normalized."
    ]
  };

  useEffect(() => {
    // Load initial greeting
    setOutputLines([
      `>> ${t.logo} Cognitive Engine v4.2 fully operational.`,
      `>> System Profile: Creative Dreamweaver loaded by default.`,
      `>> Ready for input stream.`
    ]);
  }, [lang]);

  const handleSimulate = (e: React.FormEvent) => {
    e.preventDefault();
    if (loading) return;
    
    setLoading(true);
    setOutputLines(prev => [...prev, `\n[USER PROMPT]: "${inputVal || 'Generate standard sync code'}"`]);
    
    let currentStep = 0;
    const presetLines = responses[preset];

    // Simulate sequential writing to the futuristic terminal
    const interval = setInterval(() => {
      if (currentStep < presetLines.length) {
        setOutputLines(prev => [...prev, presetLines[currentStep]]);
        // Dynamic metrics changes
        setMetrics({
          temp: parseFloat((Math.random() * (0.95 - 0.4) + 0.4).toFixed(2)),
          tokens: Math.floor(Math.random() * 850) + 150,
          nodes: Math.floor(Math.random() * 24) + 8
        });
        currentStep++;
      } else {
        clearInterval(interval);
        setLoading(false);
        setInputVal('');
      }
    }, 400);
  };

  // Scroll to bottom of simulation console
  useEffect(() => {
    terminalEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [outputLines]);

  return (
    <section id="sandbox" className="py-24 relative overflow-hidden bg-slate-950">
      
      {/* Grid line accent */}
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-indigo-500/30 to-transparent"></div>
      <div className="absolute -left-32 top-1/3 w-96 h-96 bg-cyan-500/10 rounded-full blur-[130px] pointer-events-none animate-pulse-slow"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Text Information column */}
          <div className="lg:col-span-5">
            <div className="inline-flex items-center space-x-2 bg-indigo-950/85 border border-indigo-500/30 px-3 py-1.5 rounded-full text-xs font-bold tracking-widest text-indigo-300 uppercase font-display mb-4">
              <BrainCircuit className="w-3.5 h-3.5 text-cyan-400 animate-pulse" />
              <span>{t.sandbox_badge}</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-display font-extrabold text-white tracking-tight mt-2">
              {t.sandbox_title}
            </h2>
            <p className="mt-4 text-slate-400 leading-relaxed font-light text-base">
              {t.sandbox_desc}
            </p>

            {/* Switch Presets Group with beautiful glow effects */}
            <div className="mt-8 space-y-4">
              <label className="block text-xs font-bold tracking-widest text-slate-400 uppercase font-display">
                {t.sandbox_preset_label}
              </label>
              <div className="grid grid-cols-1 gap-2.5">
                <button
                  onClick={() => { setPreset('creative'); setOutputLines(prev => [...prev, ">> Preset switched to Creative Dreamweaver"]); }}
                  className={`flex items-center justify-between p-3.5 rounded-xl border text-left text-sm font-semibold transition-all duration-200 ${preset === 'creative' ? 'bg-indigo-950/60 border-indigo-500 text-white shadow-[0_0_15px_rgba(99,102,241,0.25)]' : 'bg-slate-900/40 border-slate-800 text-slate-400 hover:border-slate-700'}`}
                >
                  <span>{t.sandbox_preset_creative}</span>
                  <span className="text-[10px] text-indigo-400 font-mono">PROD_A</span>
                </button>
                
                <button
                  onClick={() => { setPreset('cyber'); setOutputLines(prev => [...prev, ">> Preset switched to Cyber Security Sentinel"]); }}
                  className={`flex items-center justify-between p-3.5 rounded-xl border text-left text-sm font-semibold transition-all duration-200 ${preset === 'cyber' ? 'bg-purple-950/60 border-purple-500 text-white shadow-[0_0_15px_rgba(168,85,247,0.25)]' : 'bg-slate-900/40 border-slate-800 text-slate-400 hover:border-slate-700'}`}
                >
                  <span>{t.sandbox_preset_cyber}</span>
                  <span className="text-[10px] text-purple-400 font-mono">SECURE_B</span>
                </button>

                <button
                  onClick={() => { setPreset('quantum'); setOutputLines(prev => [...prev, ">> Preset switched to Quantum Physics Analyst"]); }}
                  className={`flex items-center justify-between p-3.5 rounded-xl border text-left text-sm font-semibold transition-all duration-200 ${preset === 'quantum' ? 'bg-cyan-950/60 border-cyan-500 text-white shadow-[0_0_15px_rgba(6,182,212,0.25)]' : 'bg-slate-900/40 border-slate-800 text-slate-400 hover:border-slate-700'}`}
                >
                  <span>{t.sandbox_preset_quantum}</span>
                  <span className="text-[10px] text-cyan-400 font-mono">QUANTUM_X</span>
                </button>
              </div>
            </div>

          </div>

          {/* Glowing Terminal Column */}
          <div className="lg:col-span-7">
            <div className="relative rounded-2xl bg-slate-950 border border-slate-800 shadow-[0_0_40px_rgba(0,0,0,0.8)] overflow-hidden">
              
              {/* Terminal Top Window Bar */}
              <div className="bg-slate-900/90 px-4 py-3 border-b border-slate-800/80 flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <span className="w-3 h-3 rounded-full bg-rose-500/80"></span>
                  <span className="w-3 h-3 rounded-full bg-amber-500/80"></span>
                  <span className="w-3 h-3 rounded-full bg-emerald-500/80"></span>
                  <span className="pl-2 text-[10px] font-mono tracking-widest text-slate-500">NEURAL_PORT_SYNC.sh</span>
                </div>
                <Terminal className="w-4 h-4 text-slate-500" />
              </div>

              {/* Console logs output stream */}
              <div className="p-5 h-72 overflow-y-auto font-mono text-xs text-indigo-300 space-y-2 bg-[#050811]">
                {outputLines.map((line, idx) => (
                  <div key={idx} className="whitespace-pre-line leading-relaxed">
                    {line.startsWith('>>') ? (
                      <span className="text-cyan-400">{line}</span>
                    ) : line.startsWith('[USER PROMPT]') ? (
                      <span className="text-amber-300 font-semibold">{line}</span>
                    ) : line.startsWith('💡') ? (
                      <span className="text-emerald-300 pl-4 block">{line}</span>
                    ) : (
                      <span className="text-slate-300">{line}</span>
                    )}
                  </div>
                ))}
                {loading && (
                  <div className="flex items-center space-x-2 text-cyan-400 animate-pulse">
                    <RefreshCw className="w-3 h-3 animate-spin" />
                    <span>{t.sandbox_btn_generating}</span>
                  </div>
                )}
                <div ref={terminalEndRef} />
              </div>

              {/* Terminal Live Telemetry Dashboard Grid */}
              <div className="bg-[#090d19] border-t border-slate-800 p-4 grid grid-cols-3 gap-2 text-center text-[10px] font-mono">
                <div>
                  <div className="text-slate-400 uppercase tracking-widest mb-1">{t.sandbox_terminal_temp}</div>
                  <div className="text-sm font-bold text-rose-400">{metrics.temp} °C</div>
                </div>
                <div className="border-x border-slate-800">
                  <div className="text-slate-400 uppercase tracking-widest mb-1">{t.sandbox_terminal_tokens}</div>
                  <div className="text-sm font-bold text-cyan-300">{metrics.tokens} / s</div>
                </div>
                <div>
                  <div className="text-slate-400 uppercase tracking-widest mb-1">{t.sandbox_terminal_nodes}</div>
                  <div className="text-sm font-bold text-purple-400">{metrics.nodes} active</div>
                </div>
              </div>

              {/* Terminal Prompt Form Input */}
              <form onSubmit={handleSimulate} className="border-t border-slate-800 p-3 bg-slate-900 flex items-center gap-2">
                <input
                  type="text"
                  value={inputVal}
                  onChange={(e) => setInputVal(e.target.value)}
                  placeholder={t.sandbox_input_placeholder}
                  disabled={loading}
                  className="flex-1 bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-xs text-slate-200 placeholder-slate-500 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-all font-mono"
                />
                <button
                  type="submit"
                  disabled={loading}
                  className="bg-indigo-600 hover:bg-indigo-500 disabled:bg-slate-800 text-white p-3 rounded-xl transition-all duration-200 group flex items-center justify-center shrink-0"
                >
                  <Send className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </button>
              </form>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
