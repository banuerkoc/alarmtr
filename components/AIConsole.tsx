import React, { useState, useRef, useEffect } from 'react';
import { Send, Terminal, Cpu, Loader2, Sparkles, AlertCircle } from 'lucide-react';
import { analyzeSecurityScenario } from '../services/geminiService';
import { AnalysisResult, ThreatLevel } from '../types';

export const AIConsole: React.FC = () => {
  const [input, setInput] = useState('');
  const [logs, setLogs] = useState<{type: 'user' | 'system', text: string}[]>([
    { type: 'system', text: 'AlarmTR Neural Engine v4.0.2 ready...' },
    { type: 'system', text: 'Çevre güvenlik sensörleri aktif.' },
    { type: 'system', text: 'Mavi ve Turuncu alanlar izleniyor. Bekleyen tehdit yok.' }
  ]);
  const [isLoading, setIsLoading] = useState(false);
  const [lastResult, setLastResult] = useState<AnalysisResult | null>(null);
  const logsEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    logsEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(scrollToBottom, [logs]);

  const handleAnalyze = async () => {
    if (!input.trim()) return;
    
    const userScenario = input;
    setInput('');
    setIsLoading(true);
    setLastResult(null);

    setLogs(prev => [...prev, { type: 'user', text: userScenario }]);

    try {
      const result = await analyzeSecurityScenario(userScenario);
      setLastResult(result);
    } catch (error) {
      setLogs(prev => [...prev, { type: 'system', text: 'Bağlantı hatası.' }]);
    } finally {
      setIsLoading(false);
    }
  };

  const getThreatColor = (level: ThreatLevel) => {
    switch(level) {
      case ThreatLevel.SAFE: return 'text-emerald-400 drop-shadow-[0_0_10px_rgba(52,211,153,0.5)]';
      case ThreatLevel.LOW: return 'text-blue-400 drop-shadow-[0_0_10px_rgba(96,165,250,0.5)]'; 
      case ThreatLevel.MEDIUM: return 'text-orange-400 drop-shadow-[0_0_10px_rgba(251,146,60,0.5)]'; 
      case ThreatLevel.HIGH: return 'text-red-500 drop-shadow-[0_0_15px_rgba(239,68,68,0.6)]'; 
      case ThreatLevel.CRITICAL: return 'text-red-600 animate-pulse drop-shadow-[0_0_20px_rgba(220,38,38,0.8)]';
      default: return 'text-zinc-400';
    }
  };

  return (
    <section id="teknolojiler" className="py-32 bg-black relative overflow-hidden">
      
      {/* Animated Cyber Grid Background */}
      <div className="absolute inset-0 bg-grid-animate opacity-20 pointer-events-none"></div>
      <div className="scanline"></div>

      <div className="max-w-[1200px] mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-neon-blue/10 border border-neon-blue/30 text-neon-blue text-xs font-bold mb-4 animate-glow">
            <Sparkles size={14} />
            <span>Desecure Technology</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-bold mb-4 text-white">Güvenlik Beyni.</h2>
          <p className="text-zinc-400 text-lg max-w-2xl mx-auto">
            Sadece kayıt tutan aptal kutular değil. Olayları analiz eden, tehdit seviyesini belirleyen ve operatörü yönlendiren yapay zeka.
          </p>
        </div>

        <div className="glass-panel rounded-3xl overflow-hidden flex flex-col md:flex-row min-h-[600px] shadow-[0_0_50px_rgba(0,0,0,0.8)]">
          
          {/* Left: Input & Logs */}
          <div className="flex-1 p-8 flex flex-col border-b md:border-b-0 md:border-r border-white/10 bg-black/40">
            <div className="flex items-center justify-between mb-6">
                 <div className="flex items-center gap-2 text-zinc-400">
                    <Terminal size={18} />
                    <span className="text-xs font-mono uppercase tracking-widest text-neon-blue">Desecure Technology Terminal</span>
                </div>
                <div className="flex gap-1">
                    <div className="w-3 h-3 rounded-full bg-red-500/20 border border-red-500/50"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-500/20 border border-yellow-500/50"></div>
                    <div className="w-3 h-3 rounded-full bg-green-500/20 border border-green-500/50"></div>
                </div>
            </div>
            
            <div className="flex-1 overflow-y-auto space-y-3 mb-6 font-mono text-sm max-h-[400px] scrollbar-thin">
              {logs.map((log, index) => (
                <div key={index} className={`flex gap-3 animate-fade-in-up ${log.type === 'user' ? 'text-white' : 'text-zinc-500'}`} style={{animationDelay: `${index * 0.1}s`}}>
                  <span className="opacity-50 select-none">{log.type === 'user' ? '>' : '#'}</span>
                  <span className={log.type === 'system' ? 'text-emerald-500/80' : ''}>{log.text}</span>
                </div>
              ))}
              {isLoading && (
                <div className="text-neon-blue flex items-center gap-2 text-sm animate-pulse">
                  <Loader2 className="animate-spin h-3 w-3" />
                  Görüntü işleniyor...
                </div>
              )}
              <div ref={logsEndRef} />
            </div>

            <div className="relative mt-auto">
                <input 
                    type="text" 
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    onKeyDown={(e) => e.key === 'Enter' && handleAnalyze()}
                    placeholder="Senaryo girin (Örn: Duvarın üzerinden atlayan biri var)"
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-4 text-white placeholder-zinc-600 focus:outline-none focus:border-neon-blue focus:bg-white/10 transition-all font-mono text-sm"
                />
                <button 
                    onClick={handleAnalyze}
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 p-2 bg-neon-blue rounded-lg hover:bg-white text-white hover:text-black transition-all shadow-[0_0_10px_rgba(41,151,255,0.4)]"
                >
                    <Send size={16} />
                </button>
            </div>
          </div>

          {/* Right: Visualization */}
          <div className="flex-1 p-10 bg-gradient-to-br from-zinc-900/50 to-black/80 flex flex-col justify-center relative overflow-hidden border-l border-white/5">
             {/* Background decorative glow */}
             <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-neon-blue/10 rounded-full blur-[80px] pointer-events-none animate-pulse-slow"></div>

             {lastResult ? (
                 <div className="relative z-10 animate-fade-in-up">
                    <div className="mb-10 text-center">
                        <span className="text-xs font-mono text-zinc-500 uppercase tracking-[0.2em] block mb-4">Tespit Edilen Tehdit Seviyesi</span>
                        <div className={`text-6xl font-black tracking-tighter ${getThreatColor(lastResult.threatLevel)}`}>
                            {lastResult.threatLevel}
                        </div>
                    </div>
                    
                    <div className="space-y-6">
                        <div className="glass-card rounded-2xl p-6 border-l-4 border-neon-blue">
                            <h4 className="text-white font-bold mb-3 flex items-center gap-2">
                                <Cpu size={18} className="text-neon-blue" />
                                Operatör Analizi
                            </h4>
                            <p className="text-zinc-300 text-sm leading-relaxed">
                                {lastResult.analysis}
                            </p>
                        </div>
                        
                        <div className="glass-card rounded-2xl p-6 border-l-4 border-white/20">
                            <h4 className="text-xs font-mono text-zinc-500 uppercase tracking-widest mb-4">Uygulama Protokolü</h4>
                            <div className="flex gap-4 items-start">
                                <div className="flex flex-col items-center">
                                    <div className="w-6 h-6 rounded-full bg-neon-blue/20 text-neon-blue flex items-center justify-center text-xs font-bold border border-neon-blue/50">1</div>
                                    <div className="w-px h-full bg-neon-blue/20 my-1"></div>
                                </div>
                                <p className="text-zinc-300 text-sm py-1">{lastResult.protocol}</p>
                            </div>
                        </div>
                    </div>
                 </div>
             ) : (
                 <div className="text-center text-zinc-600 relative z-10 flex flex-col items-center">
                    <div className="w-24 h-24 rounded-full border-2 border-dashed border-zinc-800 flex items-center justify-center animate-spin-slow mb-6">
                        <Cpu size={48} className="opacity-50" />
                    </div>
                    <p className="text-sm font-mono tracking-widest opacity-50">SİSTEM BEKLEMEDE</p>
                    <p className="text-xs text-zinc-700 mt-2">Veri akışı bekleniyor...</p>
                 </div>
             )}
          </div>

        </div>
      </div>
    </section>
  );
};