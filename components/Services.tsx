import React, { useRef, useEffect } from 'react';
import { Shield, Server, Lock, Eye, Ruler, Hexagon, CheckCircle2 } from 'lucide-react';

export const Services: React.FC = () => {
  // Logic to track mouse position for hover effects
  const cardsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!cardsRef.current) return;
      const cards = cardsRef.current.getElementsByClassName('glass-card');
      
      for (const card of cards) {
        const rect = (card as HTMLElement).getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        (card as HTMLElement).style.setProperty('--mouse-x', `${x}px`);
        (card as HTMLElement).style.setProperty('--mouse-y', `${y}px`);
      }
    };

    const container = cardsRef.current;
    if (container) {
        container.addEventListener('mousemove', handleMouseMove);
    }
    return () => {
        if (container) container.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <section id="5-parmak-modeli" className="py-32 relative overflow-hidden bg-black">
      
      {/* Background Video Layer with strong blur */}
      <div className="absolute inset-0 z-0 pointer-events-none">
         <div className="absolute inset-0 bg-black/85 z-10 backdrop-blur-[2px]"></div> 
         <video 
            autoPlay 
            loop 
            muted 
            playsInline
            className="w-full h-full object-cover opacity-40 mix-blend-luminosity"
         >
            <source src="https://videos.pexels.com/video-files/3129671/3129671-hd_1280_720_30fps.mp4" type="video/mp4" />
         </video>
         <div className="absolute top-0 left-0 w-full h-40 bg-gradient-to-b from-black to-transparent z-20"></div>
         <div className="absolute bottom-0 left-0 w-full h-40 bg-gradient-to-t from-black to-transparent z-20"></div>
      </div>

      <div className="relative z-20 max-w-[1400px] mx-auto px-6">
        <div className="mb-24 text-center md:text-left">
          <div className="flex items-center justify-center md:justify-start gap-2 mb-4 animate-pulse-slow">
            <Hexagon className="text-neon-blue w-5 h-5 fill-neon-blue/20" />
            <span className="text-neon-blue font-mono text-sm uppercase tracking-[0.2em] shadow-[0_0_15px_rgba(41,151,255,0.4)]">AlarmTR Metodolojisi</span>
          </div>
          <h2 className="text-5xl md:text-7xl font-bold tracking-tighter text-white mb-6 drop-shadow-2xl">
            Gerçek Güvenliğin <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-blue via-blue-400 to-white animate-text-shimmer bg-[length:200%_auto]">5 Parmak Modeli.</span>
          </h2>
          <p className="text-xl text-zinc-300 max-w-3xl leading-relaxed drop-shadow-lg font-light">
            Sürdürülebilir güvenlik; doğru analiz, yasal altyapı, kaliteli donanım, kusursuz mühendislik ve proaktif bakımın birleşimidir. İşte AlarmTR farkını yaratan o 5 temel ilke.
          </p>
        </div>
        
        {/* Bento Grid Layout with Mouse Tracking */}
        <div ref={cardsRef} className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          {/* FINGER 1: Fiziki Güvenlik DNA'sı */}
          <div className="md:col-span-1 min-h-[400px] rounded-[32px] glass-card group flex flex-col">
             <div className="absolute inset-0 z-0 opacity-50 transition-opacity duration-700 group-hover:opacity-80">
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-transparent z-10"></div>
                <img 
                    src="https://desecuretechnology.com/wp-content/uploads/2026/01/Desecure-11.jpg" 
                    className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110 grayscale group-hover:grayscale-0"
                    alt="Mekan Analizi"
                />
             </div>
             <div className="relative z-20 p-8 h-full flex flex-col">
                <div className="mb-auto">
                    <span className="text-zinc-400 font-mono text-xs tracking-widest border-l-2 border-zinc-500 pl-3 mb-4 block group-hover:border-neon-blue group-hover:text-neon-blue transition-colors">1. PARMAK</span>
                    <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-neon-blue transition-colors drop-shadow-lg">Fiziki Güvenlik DNA'sı ve Risk Analizi</h3>
                </div>
                <p className="text-zinc-300 text-sm leading-relaxed mb-6 group-hover:text-white transition-colors">
                    Her mekanın parmak izi gibi benzersiz bir güvenlik DNA'sı vardır. 18 yıllık saha tecrübesiyle, mekanınızın mimari yapısını, kör noktalarını ve potansiyel giriş risklerini "hırsız gözüyle" analiz ediyoruz.
                </p>
                <div className="flex items-center gap-2 text-xs text-neon-blue font-bold uppercase tracking-wide mt-auto">
                    <Eye size={16} />
                    <span>Keşif & Analiz</span>
                </div>
             </div>
          </div>

          {/* FINGER 2: Yasal İzleme (Large Card) */}
          <div className="md:col-span-2 min-h-[400px] rounded-[32px] glass-card group flex flex-col justify-center">
            <div className="absolute inset-0 z-0 opacity-40 transition-opacity duration-700 group-hover:opacity-70">
               <div className="absolute inset-0 bg-gradient-to-r from-black via-black/90 to-transparent z-10"></div>
               <img 
                 src="https://desecuretechnology.com/wp-content/uploads/2025/12/slde.jpg"
                 className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000"
                 alt="İzleme Merkezi"
               />
            </div>
            
            <div className="relative z-20 flex flex-col justify-center h-full p-10 md:p-12">
                <div className="w-16 h-16 bg-neon-blue/10 backdrop-blur-xl border border-neon-blue/30 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-neon-blue group-hover:text-white transition-all duration-500 text-neon-blue shadow-[0_0_30px_rgba(41,151,255,0.2)] group-hover:shadow-[0_0_50px_rgba(41,151,255,0.6)]">
                    <Shield size={32} />
                </div>
                
                <span className="text-neon-blue font-mono text-xs tracking-widest mb-3 block border-l-2 border-neon-blue pl-3">2. PARMAK</span>
                <h3 className="text-3xl md:text-4xl font-bold text-white mb-6 max-w-xl leading-tight">
                    5188 Sayılı Yasa: <br/>
                    <span className="text-neon-blue">Yasal ve Entegre İzleme Merkezi</span>
                </h3>
                
                <p className="text-zinc-300 text-base md:text-lg leading-relaxed max-w-2xl mb-8 group-hover:text-white transition-colors">
                    Güvenlik, sadece alarmın çalması değil, doğru birimin en hızlı şekilde müdahale etmesidir. <strong>Bir ALARMTR markası olan Desecure Technology</strong>, İçişleri Bakanlığı onaylı bir <strong>Alarm İzleme Merkezi</strong>'dir. Emniyet Genel Müdürlüğü (EGM) ile dijital entegrasyona sahip altyapımız, risk anında sinyalleri önceliklendirir.
                </p>
                
                <div className="flex flex-wrap gap-4">
                    <div className="px-4 py-2 rounded-full bg-neon-blue/10 border border-neon-blue/20 text-white text-sm font-semibold flex items-center gap-2 group-hover:bg-neon-blue/20 transition-colors">
                        <CheckCircle2 size={16} className="text-neon-blue" /> Kolluk Kuvveti Entegrasyonu
                    </div>
                    <div className="px-4 py-2 rounded-full bg-neon-blue/10 border border-neon-blue/20 text-white text-sm font-semibold flex items-center gap-2 group-hover:bg-neon-blue/20 transition-colors">
                         <CheckCircle2 size={16} className="text-neon-blue" /> 7/24 Canlı Operatör
                    </div>
                </div>
            </div>
          </div>

          {/* FINGER 3: Endüstriyel Donanım */}
          <div className="md:col-span-1 min-h-[450px] rounded-[32px] glass-card group flex flex-col justify-end">
             <div className="absolute inset-0 z-0 opacity-40 transition-opacity duration-700 group-hover:opacity-80">
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-transparent z-10"></div>
                <img 
                    src="https://desecuretechnology.com/wp-content/uploads/2025/07/bulut-guvenligi.webp" 
                    className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110 grayscale group-hover:grayscale-0"
                    alt="Elektronik Devre"
                />
             </div>
             <div className="relative z-20 p-8 h-full flex flex-col justify-end">
                <div className="mb-auto pt-4">
                    <div className="w-12 h-12 bg-yellow-500/10 backdrop-blur-md border border-yellow-500/20 rounded-xl flex items-center justify-center mb-6 group-hover:shadow-[0_0_30px_rgba(234,179,8,0.4)] transition-shadow">
                        <Lock className="text-yellow-400 w-6 h-6" />
                    </div>
                </div>
                <span className="text-yellow-400 font-mono text-xs tracking-widest mb-2 block border-l-2 border-yellow-400 pl-3">3. PARMAK</span>
                <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-yellow-400 transition-colors">Endüstriyel Donanım</h3>
                <p className="text-zinc-300 text-sm leading-relaxed mb-4">
                    Güvenliğiniz, ucuz plastik kameralara emanet edilemeyecek kadar değerlidir. Biz, Axis, Motorola Avigilon ve Bosch gibi dünya devi markaların endüstriyel serilerini kullanıyoruz.
                </p>
                <div className="w-full h-1 bg-zinc-800 rounded-full overflow-hidden">
                    <div className="w-full h-full bg-yellow-400/50 shadow-[0_0_10px_rgba(234,179,8,0.6)]"></div>
                </div>
            </div>
          </div>

          {/* FINGER 4: Uzman Mühendislik */}
          <div className="md:col-span-1 min-h-[450px] rounded-[32px] glass-card group flex flex-col justify-end">
             <div className="absolute inset-0 z-0 opacity-40 transition-opacity duration-700 group-hover:opacity-80">
                <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/80 to-black z-10"></div>
                 <img 
                    src="https://desecuretechnology.com/wp-content/uploads/2026/01/Google_AI_Studio_2025-07-30T06_36_52.723Z.png" 
                    className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110 grayscale group-hover:grayscale-0"
                    alt="Mühendislik"
                />
             </div>
             <div className="relative z-20 p-8 h-full flex flex-col justify-end">
                <div className="mb-auto pt-4">
                    <div className="w-12 h-12 bg-purple-500/10 backdrop-blur-md border border-purple-500/20 rounded-xl flex items-center justify-center mb-6 group-hover:shadow-[0_0_30px_rgba(168,85,247,0.4)] transition-shadow">
                        <Ruler className="text-purple-400 w-6 h-6" />
                    </div>
                </div>
                <span className="text-purple-400 font-mono text-xs tracking-widest mb-2 block border-l-2 border-purple-400 pl-3">4. PARMAK</span>
                <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-purple-400 transition-colors">Uzman Mühendislik</h3>
                <p className="text-zinc-300 text-sm leading-relaxed mb-4">
                    Mühendislerimiz; kablo kesitinden lens açısına, network bant genişliğinden enerji yedekliliğine kadar her parametreyi titizlikle hesaplar.
                </p>
                <div className="w-full h-1 bg-zinc-800 rounded-full overflow-hidden">
                    <div className="w-3/4 h-full bg-purple-400/50 shadow-[0_0_10px_rgba(168,85,247,0.6)]"></div>
                </div>
            </div>
          </div>

           {/* FINGER 5: Bakım ve Servis */}
           <div className="md:col-span-1 min-h-[450px] rounded-[32px] glass-card group flex flex-col justify-end">
                <div className="absolute inset-0 z-0 opacity-40 transition-opacity duration-700 group-hover:opacity-80">
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-transparent z-10"></div>
                    <img 
                        src="https://desecuretechnology.com/wp-content/uploads/2025/06/AvigilonUnity-H5AIRPTZ-night-mount-image-1.webp" 
                        className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110 grayscale group-hover:grayscale-0"
                        alt="Server Room"
                    />
                </div>
                
                <div className="relative z-20 p-8 h-full flex flex-col justify-end">
                     <div className="mb-auto pt-4">
                        <div className="w-12 h-12 bg-green-500/10 backdrop-blur-md border border-green-500/20 rounded-xl flex items-center justify-center mb-6 animate-pulse group-hover:shadow-[0_0_30px_rgba(34,197,94,0.4)] transition-shadow">
                            <Server className="text-green-500 w-6 h-6" />
                        </div>
                    </div>
                    <span className="text-green-500 font-mono text-xs tracking-widest mb-3 block border-l-2 border-green-500 pl-3">5. PARMAK</span>
                    <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-green-400 transition-colors">Health Check</h3>
                    <p className="text-zinc-300 text-sm leading-relaxed mb-4">
                        Sisteminiz çalışıyor mu? Arıza olduğunda değil, olmadan önce bilmelisiniz. Cihazlarınızı saniye saniye tarıyoruz.
                    </p>
                    <div className="flex items-center gap-2 px-3 py-1 bg-green-500/20 rounded border border-green-500/30 w-fit shadow-[0_0_10px_rgba(34,197,94,0.3)]">
                        <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
                        <span className="text-[10px] font-bold text-green-400 uppercase">Sistem Online</span>
                    </div>
                </div>
           </div>

        </div>
      </div>
    </section>
  );
};