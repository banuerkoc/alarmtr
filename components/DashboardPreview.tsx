import React from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { Activity, CheckCircle, AlertTriangle, Shield, Wifi } from 'lucide-react';

const data = [
  { time: '00:00', health: 100, latency: 12 },
  { time: '04:00', health: 99, latency: 15 },
  { time: '08:00', health: 98, latency: 14 },
  { time: '12:00', health: 100, latency: 10 },
  { time: '16:00', health: 100, latency: 11 },
  { time: '20:00', health: 99, latency: 13 },
  { time: '24:00', health: 100, latency: 12 },
];

export const DashboardPreview: React.FC = () => {
  return (
    <section id="health-check" className="py-40 bg-black relative overflow-hidden perspective-2000">
      
      {/* Background Ambience */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,#111_0%,black_70%)]"></div>
      
      <div className="max-w-[1200px] mx-auto px-6 text-center mb-20 relative z-10">
        <div className="inline-block p-2 px-4 rounded-full bg-green-500/10 border border-green-500/20 text-green-400 text-xs font-bold tracking-widest mb-6">
            SYSTEM STATUS: ONLINE
        </div>
        <h2 className="text-5xl md:text-7xl font-bold text-white mb-6">Operasyonel Körlüğe Son.</h2>
        <p className="text-xl text-zinc-400 max-w-2xl mx-auto">
          Çünkü güvenlik, sadece sistem kurmak değil; onu doğru çalışır halde tutmaktır.
        </p>
      </div>

      {/* 3D Container */}
      <div className="relative flex justify-center perspective-[2000px] group px-4">
        <div className="w-full max-w-6xl transition-transform duration-1000 ease-out transform group-hover:rotate-x-2 rotate-x-12 scale-90 hover:scale-100 relative z-20">
            
            {/* The Dashboard Card */}
            <div className="bg-[#050505] border border-white/10 rounded-2xl shadow-[0_0_100px_rgba(41,151,255,0.1)] overflow-hidden relative">
                
                {/* Laser Scanner Effect */}
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-neon-blue to-transparent z-50 opacity-50 animate-scan"></div>
                <div className="absolute top-0 left-0 w-full h-20 bg-gradient-to-b from-neon-blue/10 to-transparent z-40 animate-scan pointer-events-none"></div>

                {/* Header */}
                <div className="bg-[#0f0f0f] border-b border-white/5 px-6 py-4 flex justify-between items-center">
                    <div className="flex items-center gap-4">
                        <div className="flex space-x-2">
                            <div className="w-3 h-3 rounded-full bg-red-500/50"></div>
                            <div className="w-3 h-3 rounded-full bg-yellow-500/50"></div>
                            <div className="w-3 h-3 rounded-full bg-green-500/50"></div>
                        </div>
                        <span className="text-zinc-400 text-xs font-mono uppercase tracking-widest">AlarmTR_Command_Center_v4.1</span>
                    </div>
                    <div className="flex items-center gap-3">
                         <Wifi size={14} className="text-green-500" />
                         <div className="px-3 py-1 bg-green-500/10 text-green-500 rounded text-xs font-mono font-bold border border-green-500/20">
                            CONNECTED
                        </div>
                    </div>
                </div>

                {/* Content */}
                <div className="p-8 grid grid-cols-1 md:grid-cols-4 gap-6 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')]">
                    
                    {/* Sidebar Stats */}
                    <div className="space-y-4 md:col-span-1">
                        <div className="p-5 bg-white/5 backdrop-blur-md rounded-xl border border-white/5 flex flex-col gap-2 hover:border-green-500/30 transition-colors cursor-default">
                            <div className="flex justify-between items-start">
                                <CheckCircle className="text-green-500" size={20} />
                                <span className="text-[10px] text-zinc-500 uppercase font-bold">Health Score</span>
                            </div>
                            <div className="text-3xl font-bold text-white">99.8%</div>
                            <div className="w-full bg-zinc-800 h-1 rounded-full overflow-hidden">
                                <div className="bg-green-500 h-full w-[99.8%]"></div>
                            </div>
                        </div>

                        <div className="p-5 bg-white/5 backdrop-blur-md rounded-xl border border-white/5 flex flex-col gap-2 hover:border-neon-blue/30 transition-colors">
                            <div className="flex justify-between items-start">
                                <Activity className="text-neon-blue" size={20} />
                                <span className="text-[10px] text-zinc-500 uppercase font-bold">Latency</span>
                            </div>
                            <div className="text-3xl font-bold text-white">12<span className="text-sm text-zinc-500 font-normal ml-1">ms</span></div>
                            <div className="text-xs text-green-500 font-mono">STABLE CONNECTION</div>
                        </div>
                        
                        <div className="p-5 bg-white/5 backdrop-blur-md rounded-xl border border-white/5 flex flex-col gap-2 hover:border-yellow-500/30 transition-colors">
                            <div className="flex justify-between items-start">
                                <AlertTriangle className="text-yellow-500" size={20} />
                                <span className="text-[10px] text-zinc-500 uppercase font-bold">Last Incident</span>
                            </div>
                            <div className="text-sm text-white font-medium">Power Loss Detected</div>
                            <div className="text-xs text-zinc-500">Zone 4 • 2 hours ago</div>
                        </div>
                    </div>

                    {/* Main Chart Area */}
                    <div className="md:col-span-3 bg-white/5 backdrop-blur-md rounded-xl border border-white/5 p-6 relative flex flex-col">
                        <div className="flex justify-between items-center mb-6">
                            <h3 className="text-white font-medium text-sm flex items-center gap-2">
                                <Shield size={16} className="text-neon-blue"/>
                                Sinyal Kararlılık Analizi (24s)
                            </h3>
                            <div className="flex gap-2">
                                <span className="w-2 h-2 rounded-full bg-neon-blue animate-pulse"></span>
                                <span className="text-xs text-neon-blue font-mono">LIVE FEED</span>
                            </div>
                        </div>
                        <div className="flex-grow w-full h-[250px]">
                            <ResponsiveContainer width="100%" height="100%">
                                <AreaChart data={data}>
                                    <defs>
                                        <linearGradient id="colorHealth" x1="0" y1="0" x2="0" y2="1">
                                            <stop offset="5%" stopColor="#22c55e" stopOpacity={0.4}/>
                                            <stop offset="95%" stopColor="#22c55e" stopOpacity={0}/>
                                        </linearGradient>
                                    </defs>
                                    <CartesianGrid strokeDasharray="3 3" stroke="#222" vertical={false} />
                                    <XAxis dataKey="time" stroke="#444" fontSize={10} axisLine={false} tickLine={false} />
                                    <YAxis domain={[90, 100]} stroke="#444" fontSize={10} axisLine={false} tickLine={false} />
                                    <Tooltip 
                                        contentStyle={{ backgroundColor: '#000', borderColor: '#333', color: '#fff', borderRadius: '8px' }}
                                    />
                                    <Area type="monotone" dataKey="health" stroke="#22c55e" strokeWidth={2} fillOpacity={1} fill="url(#colorHealth)" />
                                </AreaChart>
                            </ResponsiveContainer>
                        </div>
                    </div>
                </div>
            </div>

            {/* Reflection Effect */}
            <div className="absolute top-full left-0 w-full h-40 bg-gradient-to-b from-neon-blue/10 to-transparent transform scale-y-[-1] opacity-20 mask-image-linear-gradient blur-xl"></div>
        </div>
      </div>
    </section>
  );
};