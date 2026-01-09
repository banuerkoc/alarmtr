import React, { useState, useEffect } from 'react';
import { ShieldAlert, Zap, EyeOff, Activity, Lock, Server, CheckCircle2, ScanLine, Fingerprint, ChevronRight } from 'lucide-react';

interface Scenario {
  id: string;
  icon: React.ReactNode;
  title: string;
  question: string;
  threatLevel: string;
  protocolStep: string;
  solution: string;
}

const scenarios: Scenario[] = [
  {
    id: 'sabotage',
    icon: <Zap size={24} />,
    title: 'SABOTAJ GİRİŞİMİ',
    question: "Hırsızlar sistemi etkisiz hale getirmek için elektrik/internet kablolarını keserse ne olur?",
    threatLevel: "KRİTİK",
    protocolStep: "3. ve 5. PARMAK PROTOKOLÜ",
    solution: "Sıradan sistemler susar. Bizim endüstriyel panellerimiz, kablo kesildiği an 'Haberleşme Hatası' sinyalini GSM/GPRS üzerinden İzleme Merkezi'ne iletir. Ayrıca Health Check sistemimiz, cihazın sinyal vermediğini milisaniyeler içinde tespit edip operatörü uyarır. Hırsız daha içeri girmeden polis yola çıkar."
  },
  {
    id: 'blindspot',
    icon: <EyeOff size={24} />,
    title: 'KÖR NOKTA VE KARANLIK',
    question: "Zifiri karanlıkta veya kameranın görmediği bir açıdan sızma olursa?",
    threatLevel: "YÜKSEK",
    protocolStep: "1. ve 4. PARMAK PROTOKOLÜ",
    solution: "Mühendislik ekibimiz kurulum öncesi 'Hırsız Gözüyle' risk analizi yapar. Asla kör nokta bırakılmaz. Kullandığımız Axis ve Avigilon termal/IR kameralar, zifiri karanlıkta bile vücut ısısını algılar. Görüntü olmasa bile 'ısı hareketi' alarmı tetikler."
  },
  {
    id: 'signal',
    icon: <Activity size={24} />,
    title: 'YANLIŞ ALARM',
    question: "Kedi, köpek veya rüzgar yüzünden sürekli alarm çalarsa ne yapıyorsunuz?",
    threatLevel: "ORTA",
    protocolStep: "2. PARMAK PROTOKOLÜ",
    solution: "Eski tip PIR dedektörler her şeye öter. Biz 'Video Analiz' teknolojisi kullanıyoruz. Yapay zeka; insan, araç ve hayvan ayrımını yapar. Sistem sadece 'İnsan' algıladığında operatörün önüne görüntü düşürür. Operatör görüntüyü teyit etmeden kolluk kuvvetini boşuna meşgul etmez."
  },
  {
    id: 'jamming',
    icon: <ShieldAlert size={24} />,
    title: 'JAMMER (SİNYAL KESİCİ)',
    question: "Hırsızlar Jammer cihazı kullanarak sinyali bloke ederse?",
    threatLevel: "KRİTİK",
    protocolStep: "5. PARMAK PROTOKOLÜ",
    solution: "AlarmTR panelleri, frekans kirliliğini ve Jammer saldırısını algılayacak donanıma sahiptir. Sistem 'Jamming Detect' (Sinyal Boğma) uyarısı verir vermez sirenleri lokal olarak devreye sokar ve sabotaj alarmı oluşturur."
  }
];

export const SecurityProtocols: React.FC = () => {
  const [activeScenario, setActiveScenario] = useState<Scenario>(scenarios[0]);
  const [isScanning, setIsScanning] = useState(false);

  const handleScenarioChange = (scenario: Scenario) => {
    if (scenario.id === activeScenario.id) return;
    setIsScanning(true);
    setTimeout(() => {
        setActiveScenario(scenario);
        setIsScanning(false);
    }, 800); // 800ms scanning effect
  };

  return (
    <section id="teknolojiler" className="py-32 bg-black relative overflow-hidden">
      
      {/* Background Tech Elements */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(41,151,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(41,151,255,0.03)_1px,transparent_1px)] bg-[size:40px_40px]"></div>
      <div className="absolute top-0 left-0 w-full h-full bg-black/80 z-0"></div>

      <div className="max-w-[1200px] mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-neon-blue/10 border border-neon-blue/30 text-neon-blue text-xs font-bold mb-4">
            <Lock size={14} />
            <span>DESECURE TECHNOLOGY PROAKTİF GÜVENLİK SENARYOLARI</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-bold mb-6 text-white">Senaryo Bazlı <br/> <span className="text-zinc-500">Güvenlik Protokolleri.</span></h2>
          <p className="text-zinc-400 text-lg max-w-2xl mx-auto">
            Risk gerçekleşmeden önce senaryosunu yazdık, çözümünü ürettik. Aşağıdaki tehdit senaryolarını seçin ve AlarmTR'nin nasıl yanıt verdiğini görün.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* Left Column: Threat Matrix (Buttons) */}
            <div className="lg:col-span-4 space-y-4">
                <div className="flex items-center justify-between text-xs font-mono text-zinc-500 mb-2 uppercase tracking-widest px-1">
                    <span>Threat Matrix</span>
                    <span>Status: Active</span>
                </div>
                {scenarios.map((scenario) => (
                    <button
                        key={scenario.id}
                        onClick={() => handleScenarioChange(scenario)}
                        className={`w-full text-left p-5 rounded-xl border transition-all duration-300 group relative overflow-hidden ${
                            activeScenario.id === scenario.id 
                            ? 'bg-neon-blue/10 border-neon-blue text-white shadow-[0_0_20px_rgba(41,151,255,0.15)]' 
                            : 'bg-white/5 border-white/5 text-zinc-400 hover:bg-white/10 hover:border-white/10'
                        }`}
                    >
                        {activeScenario.id === scenario.id && (
                            <div className="absolute left-0 top-0 h-full w-1 bg-neon-blue"></div>
                        )}
                        <div className="flex items-center gap-4 relative z-10">
                            <div className={`p-2 rounded-lg ${activeScenario.id === scenario.id ? 'text-neon-blue' : 'text-zinc-500 group-hover:text-zinc-300'}`}>
                                {scenario.icon}
                            </div>
                            <div>
                                <h4 className="font-bold text-sm tracking-wide">{scenario.title}</h4>
                                <p className="text-[10px] opacity-60 font-mono mt-1">CODE: {scenario.id.toUpperCase()}_00{scenarios.indexOf(scenario)+1}</p>
                            </div>
                            {activeScenario.id === scenario.id && (
                                <ChevronRight className="ml-auto text-neon-blue animate-pulse" size={16} />
                            )}
                        </div>
                    </button>
                ))}
            </div>

            {/* Right Column: The Tactical Display */}
            <div className="lg:col-span-8">
                <div className="glass-panel rounded-2xl border border-white/10 bg-black/40 min-h-[500px] relative overflow-hidden flex flex-col shadow-2xl">
                    
                    {/* Screen Header */}
                    <div className="h-12 border-b border-white/10 bg-white/5 flex items-center justify-between px-6">
                        <div className="flex items-center gap-2">
                             <div className="w-2 h-2 rounded-full bg-red-500 animate-pulse"></div>
                             <span className="text-[10px] font-mono text-zinc-400 uppercase tracking-widest">Live Terminal // {activeScenario.id.toUpperCase()}</span>
                        </div>
                        <Fingerprint className="text-zinc-600 opacity-50" size={20} />
                    </div>

                    {/* Content Area */}
                    <div className="p-8 md:p-12 flex-1 relative">
                        {isScanning ? (
                            <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/60 backdrop-blur-sm z-20">
                                <div className="w-16 h-16 border-4 border-neon-blue/30 border-t-neon-blue rounded-full animate-spin mb-4"></div>
                                <div className="text-neon-blue font-mono text-sm tracking-widest animate-pulse">ANALYZING PROTOCOLS...</div>
                                <div className="mt-2 text-xs text-zinc-500 font-mono">Accessing Finger 1-5 Database</div>
                            </div>
                        ) : (
                            <div className="animate-fade-in-up">
                                <div className="mb-8">
                                    <span className="text-neon-blue text-xs font-bold tracking-widest border border-neon-blue/30 px-3 py-1 rounded-full mb-4 inline-block bg-neon-blue/5">
                                        SENARYO VE RİSK
                                    </span>
                                    <h3 className="text-2xl md:text-3xl font-bold text-white mb-4 leading-tight">
                                        "{activeScenario.question}"
                                    </h3>
                                    <div className="h-px w-full bg-gradient-to-r from-white/20 to-transparent my-6"></div>
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                    <div className="space-y-6">
                                        <div>
                                            <span className="text-xs text-zinc-500 font-mono uppercase tracking-widest block mb-2">Tehdit Seviyesi</span>
                                            <div className="text-red-500 font-black text-2xl tracking-tighter flex items-center gap-2">
                                                <ShieldAlert size={24} />
                                                {activeScenario.threatLevel}
                                            </div>
                                        </div>
                                        <div>
                                            <span className="text-xs text-zinc-500 font-mono uppercase tracking-widest block mb-2">Devreye Giren Protokol</span>
                                            <div className="text-white font-bold text-lg flex items-center gap-2">
                                                <Server size={20} className="text-neon-blue" />
                                                {activeScenario.protocolStep}
                                            </div>
                                        </div>
                                    </div>

                                    <div className="bg-white/5 rounded-xl p-6 border border-white/5 relative group">
                                        <div className="absolute -top-3 -right-3 bg-neon-blue/20 text-neon-blue p-2 rounded-lg border border-neon-blue/30">
                                            <CheckCircle2 size={20} />
                                        </div>
                                        <h4 className="text-white font-bold mb-3 text-sm uppercase tracking-wide">AlarmTR Çözümü</h4>
                                        <p className="text-zinc-300 text-sm leading-relaxed">
                                            {activeScenario.solution}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        )}
                        
                        {/* Decorative Scanlines */}
                        <div className="absolute bottom-0 left-0 w-full h-1 bg-neon-blue/50 opacity-20"></div>
                        <ScanLine className="absolute bottom-4 right-4 text-white/5 w-24 h-24" />
                    </div>
                </div>
            </div>
        </div>
      </div>
    </section>
  );
};