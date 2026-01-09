import React from 'react';
import { Shield, Zap, Lock, Settings, Server, CheckCircle2, Hexagon, Eye, Ruler } from 'lucide-react';

export const Services: React.FC = () => {
  return (
    <section id="5-parmak-modeli" className="py-32 relative overflow-hidden bg-black">
      
      {/* Background Video Layer */}
      <div className="absolute inset-0 z-0 pointer-events-none">
         <div className="absolute inset-0 bg-black/90 z-10"></div> {/* Heavy overlay for readability */}
         <video 
            autoPlay 
            loop 
            muted 
            playsInline
            className="w-full h-full object-cover opacity-30"
         >
            <source src="https://videos.pexels.com/video-files/3129671/3129671-hd_1280_720_30fps.mp4" type="video/mp4" />
         </video>
         <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-black to-transparent z-20"></div>
         <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-black to-transparent z-20"></div>
      </div>

      <div className="relative z-20 max-w-[1400px] mx-auto px-6">
        <div className="mb-24 text-center md:text-left">
          <div className="flex items-center justify-center md:justify-start gap-2 mb-4 animate-pulse-slow">
            <Hexagon className="text-neon-blue w-5 h-5 fill-neon-blue/20" />
            <span className="text-neon-blue font-mono text-sm uppercase tracking-[0.2em]">AlarmTR Metodolojisi</span>
          </div>
          <h2 className="text-5xl md:text-7xl font-bold tracking-tighter text-white mb-6 drop-shadow-2xl">
            Gerçek Güvenliğin <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-blue to-white">5 Parmak Modeli.</span>
          </h2>
          <p className="text-xl text-zinc-300 max-w-3xl leading-relaxed drop-shadow-lg font-light">
            Sürdürülebilir güvenlik; doğru analiz, yasal altyapı, kaliteli donanım, kusursuz mühendislik ve proaktif bakımın birleşimidir. İşte AlarmTR farkını yaratan o 5 temel ilke.
          </p>
        </div>
        
        {/* Bento Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          {/* FINGER 1: Fiziki Güvenlik DNA'sı */}
          <div className="md:col-span-1 min-h-[400px] rounded-[32px] glass-card relative overflow-hidden group border border-white/5 hover:border-neon-blue/30 transition-all duration-500">
             <div className="absolute inset-0 z-0">
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-black/40 z-10 transition-opacity duration-500 group-hover:opacity-90"></div>
                <img 
                    src="https://desecuretechnology.com/wp-content/uploads/2026/01/Desecure-11.jpg" 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 grayscale group-hover:grayscale-0 opacity-60"
                    alt="Mekan Analizi"
                />
             </div>
             <div className="relative z-20 p-8 h-full flex flex-col">
                <div className="mb-auto">
                    <span className="text-zinc-400 font-mono text-xs tracking-widest border-l-2 border-zinc-500 pl-3 mb-4 block">1. PARMAK</span>
                    <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-neon-blue transition-colors">Fiziki Güvenlik DNA'sı ve Risk Analizi</h3>
                </div>
                <p className="text-zinc-300 text-sm leading-relaxed mb-6">
                    Her mekanın parmak izi gibi benzersiz bir güvenlik DNA'sı vardır. 18 yıllık saha tecrübesiyle, mekanınızın mimari yapısını, kör noktalarını ve potansiyel giriş risklerini "hırsız gözüyle" analiz ediyoruz. Kopyala-yapıştır paketler değil, mekana özel terzi işi projeler çiziyoruz.
                </p>
                <div className="flex items-center gap-2 text-xs text-neon-blue font-bold uppercase tracking-wide">
                    <Eye size={16} />
                    <span>Keşif & Analiz</span>
                </div>
             </div>
          </div>

          {/* FINGER 2: Yasal İzleme (Large Card) */}
          <div className="md:col-span-2 min-h-[400px] rounded-[32px] glass-card relative overflow-hidden group border border-white/5 hover:border-neon-blue/30 transition-all duration-500">
            <div className="absolute inset-0 z-0">
               <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-transparent z-10"></div>
               <img 
                 src="https://desecuretechnology.com/wp-content/uploads/2025/12/slde.jpg"
                 className="w-full h-full object-cover opacity-50 group-hover:scale-105 transition-transform duration-700"
                 alt="İzleme Merkezi"
               />
            </div>
            
            <div className="relative z-20 flex flex-col justify-center h-full p-10 md:p-12">
                <div className="w-16 h-16 bg-neon-blue/20 backdrop-blur-md border border-neon-blue/30 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-neon-blue group-hover:text-white transition-all duration-500 text-neon-blue shadow-[0_0_30px_rgba(41,151,255,0.3)]">
                    <Shield size={32} />
                </div>
                
                <span className="text-neon-blue font-mono text-xs tracking-widest mb-3 block border-l-2 border-neon-blue pl-3">2. PARMAK</span>
                <h3 className="text-3xl md:text-4xl font-bold text-white mb-6 max-w-xl">5188 Sayılı Yasa: Yasal ve Entegre İzleme Merkezi</h3>
                
                <p className="text-zinc-300 text-base md:text-lg leading-relaxed max-w-2xl mb-8">
                    Güvenlik, sadece alarmın çalması değil, doğru birimin en hızlı şekilde müdahale etmesidir. <strong>Bir ALARMTR markası olan Desecure Technology</strong>, <strong>5188 sayılı Özel Güvenlik Yasası</strong> kapsamında yetkilendirilmiş, İçişleri Bakanlığı onaylı bir <strong>Alarm İzleme Merkezi</strong>'dir. Pasif bildirim sistemlerinin aksine, <strong>Emniyet Genel Müdürlüğü (EGM)</strong> ile dijital entegrasyona sahip altyapımız, risk anında sinyalleri önceliklendirir ve saniyeler içinde en yakın Kolluk Kuvvetlerini (Polis/Jandarma) olay mahalline sevk eder.
                </p>
                
                <div className="flex flex-wrap gap-4">
                    <div className="px-4 py-2 rounded-full bg-neon-blue/10 border border-neon-blue/20 text-white text-sm font-semibold flex items-center gap-2">
                        <CheckCircle2 size={16} className="text-neon-blue" /> Kolluk Kuvveti Entegrasyonu
                    </div>
                    <div className="px-4 py-2 rounded-full bg-neon-blue/10 border border-neon-blue/20 text-white text-sm font-semibold flex items-center gap-2">
                         <CheckCircle2 size={16} className="text-neon-blue" /> 7/24 Canlı Operatör Desteği
                    </div>
                </div>
            </div>
          </div>

          {/* FINGER 3: Endüstriyel Donanım */}
          <div className="md:col-span-1 min-h-[450px] rounded-[32px] glass-card relative overflow-hidden group border border-white/5 hover:border-yellow-500/30 transition-all duration-500">
             <div className="absolute inset-0 z-0">
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-transparent z-10"></div>
                <img 
                    src="https://desecuretechnology.com/wp-content/uploads/2025/07/bulut-guvenligi.webp" 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-50 grayscale group-hover:grayscale-0"
                    alt="Elektronik Devre"
                />
             </div>
             <div className="relative z-20 p-8 h-full flex flex-col justify-end">
                <div className="mb-auto pt-4">
                    <div className="w-12 h-12 bg-yellow-500/10 backdrop-blur-md border border-yellow-500/20 rounded-xl flex items-center justify-center mb-6">
                        <Lock className="text-yellow-400 w-6 h-6" />
                    </div>
                </div>
                <span className="text-yellow-400 font-mono text-xs tracking-widest mb-2 block border-l-2 border-yellow-400 pl-3">3. PARMAK</span>
                <h3 className="text-2xl font-bold text-white mb-4">Endüstriyel Donanım & Global Markalar</h3>
                <p className="text-zinc-300 text-sm leading-relaxed mb-4">
                    Güvenliğiniz, ucuz plastik kameralara emanet edilemeyecek kadar değerlidir. Biz, Axis, Motorola Avigilon ve Bosch gibi dünya devi markaların endüstriyel serilerini kullanıyoruz. Zorlu hava koşullarına dayanıklı, yanlış alarm oranı minimize edilmiş ve görüntü kalitesi yıllarca bozulmayan donanımlarla çalışıyoruz.
                </p>
                <div className="w-full h-1 bg-zinc-800 rounded-full overflow-hidden">
                    <div className="w-full h-full bg-yellow-400/50"></div>
                </div>
            </div>
          </div>

          {/* FINGER 4: Uzman Mühendislik */}
          <div className="md:col-span-1 min-h-[450px] rounded-[32px] glass-card relative overflow-hidden group border border-white/5 hover:border-purple-500/30 transition-all duration-500">
             <div className="absolute inset-0 z-0">
                <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/80 to-black z-10"></div>
                 <img 
                    src="https://desecuretechnology.com/wp-content/uploads/2026/01/Google_AI_Studio_2025-07-30T06_36_52.723Z.png" 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-50 grayscale group-hover:grayscale-0"
                    alt="Mühendislik"
                />
             </div>
             <div className="relative z-20 p-8 h-full flex flex-col justify-end">
                <div className="mb-auto pt-4">
                    <div className="w-12 h-12 bg-purple-500/10 backdrop-blur-md border border-purple-500/20 rounded-xl flex items-center justify-center mb-6">
                        <Ruler className="text-purple-400 w-6 h-6" />
                    </div>
                </div>
                <span className="text-purple-400 font-mono text-xs tracking-widest mb-2 block border-l-2 border-purple-400 pl-3">4. PARMAK</span>
                <h3 className="text-2xl font-bold text-white mb-4">Uzman Mühendislik ve Altyapı</h3>
                <p className="text-zinc-300 text-sm leading-relaxed mb-4">
                    Desecure Technology’de bizler, güvenliği şansa bırakmayız. Mühendislerimiz; kablo kesitinden lens açısına, network bant genişliğinden enerji yedekliliğine kadar her parametreyi titizlikle hesaplar. Göz kararı montaj, bizim için kabul edilemez bir yaklaşımdır.
                    <br/><br/>
                    Biz, her kamerayı milimetrik mühendislik prensipleriyle, kör noktaları sıfıra indiren stratejik bir planın parçası olarak konumlandırırız. Her sahaya özel analiz, her detaya özel çözüm. Çünkü bizim için güvenlik, sadece izlemek değil; öngörmek, önlemek ve yönetmektir.
                </p>
                <div className="w-full h-1 bg-zinc-800 rounded-full overflow-hidden">
                    <div className="w-3/4 h-full bg-purple-400/50"></div>
                </div>
            </div>
          </div>

           {/* FINGER 5: Bakım ve Servis */}
           <div className="md:col-span-1 min-h-[450px] rounded-[32px] glass-card relative overflow-hidden group border border-white/5 hover:border-green-500/30 transition-all duration-500">
                <div className="absolute inset-0 z-0">
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-transparent z-10"></div>
                    <img 
                        src="https://desecuretechnology.com/wp-content/uploads/2025/06/AvigilonUnity-H5AIRPTZ-night-mount-image-1.webp" 
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-50 grayscale group-hover:grayscale-0"
                        alt="Server Room"
                    />
                </div>
                
                <div className="relative z-20 p-8 h-full flex flex-col justify-end">
                     <div className="mb-auto pt-4">
                        <div className="w-12 h-12 bg-green-500/10 backdrop-blur-md border border-green-500/20 rounded-xl flex items-center justify-center mb-6 animate-pulse">
                            <Server className="text-green-500 w-6 h-6" />
                        </div>
                    </div>
                    <span className="text-green-500 font-mono text-xs tracking-widest mb-3 block border-l-2 border-green-500 pl-3">5. PARMAK</span>
                    <h3 className="text-2xl font-bold text-white mb-4">Health Check & 7/24 Proaktif Servis</h3>
                    <p className="text-zinc-300 text-sm leading-relaxed mb-4">
                        Güvenlik sisteminiz şu an çalışıyor mu? Arıza olduğunda değil, olmadan önce bilmelisiniz. Geliştirdiğimiz "Health Check" teknolojisi ile cihazlarınızı saniye saniye tarıyoruz. Disk hatası, voltaj kaybı veya sinyal kesintisi anında teknik ekibimiz siz fark etmeden müdahale eder.
                    </p>
                    <div className="flex items-center gap-2 px-3 py-1 bg-green-500/20 rounded border border-green-500/30 w-fit">
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