import React from 'react';
import { ChevronDown, PlayCircle, ShieldCheck } from 'lucide-react';

export const Hero: React.FC = () => {
  const handleScrollTo = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className="relative h-screen w-full overflow-hidden bg-black flex flex-col items-center justify-center">
      {/* Background Image & Effects */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/40 to-black z-10"></div> 
        <img
          src="https://desecuretechnology.com/wp-content/uploads/2026/01/a1.png"
          alt="Security Technology Background"
          className="w-full h-full object-cover scale-105 opacity-60 animate-pulse-slow"
        />
        
        {/* Cinematic Vignette */}
        <div className="absolute inset-0 z-10 bg-[radial-gradient(circle_at_center,transparent_20%,#000000_100%)]"></div>
        
        {/* Radar Effect overlay */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] border border-white/5 rounded-full opacity-20 pointer-events-none"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] border border-white/5 rounded-full opacity-20 pointer-events-none"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] border border-white/5 rounded-full opacity-10 pointer-events-none border-dashed animate-spin-slow"></div>
      </div>

      <div className="relative z-20 max-w-[1400px] mx-auto px-6 text-center mt-20">
        <div className="animate-fade-in-up flex justify-center" style={{ animationDelay: '0.1s' }}>
            <div className="inline-flex items-center gap-2 py-1.5 px-4 rounded-full bg-white/5 border border-white/10 backdrop-blur-md text-xs font-semibold text-white mb-8 tracking-widest uppercase hover:bg-white/10 transition-colors cursor-default shadow-[0_0_20px_rgba(41,151,255,0.2)]">
                <ShieldCheck size={14} className="text-neon-blue" />
                <span className="text-neon-blue">AI Destekli</span>
                <span className="w-1 h-1 rounded-full bg-zinc-500"></span>
                <span>Güvenlik Labirentinin Çıkış Yolu</span>
            </div>
        </div>
        
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-white tracking-tighter mb-8 animate-fade-in-up leading-[1.1] drop-shadow-2xl">
          Güvenliğinizi <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-zinc-200 to-zinc-500 bg-[length:200%_auto] animate-text-shimmer">
            Şansa Bırakmayın.
          </span>
        </h1>
        
        <p className="mt-6 max-w-3xl mx-auto text-xl md:text-2xl text-zinc-300 font-light leading-relaxed animate-fade-in-up drop-shadow-lg" style={{ animationDelay: '0.3s' }}>
           Pazarın "modası geçmiş" radar çözümleriyle değil, <strong className="text-white font-medium border-b border-neon-blue/50 pb-0.5">5 Parmak Modeli</strong> ve <strong className="text-white font-medium border-b border-neon-blue/50 pb-0.5">Yasal İzleme Merkezi</strong> güvencesiyle riskleri sıfıra indirin.
        </p>

        <div className="mt-12 flex flex-col md:flex-row gap-6 justify-center items-center animate-fade-in-up" style={{ animationDelay: '0.5s' }}>
          <a 
            href="#5-parmak-modeli" 
            onClick={(e) => handleScrollTo(e, '5-parmak-modeli')}
            className="px-8 py-4 bg-white text-black font-semibold rounded-full hover:bg-zinc-200 transition-all text-lg min-w-[200px] shadow-[0_0_20px_rgba(255,255,255,0.3)] hover:shadow-[0_0_40px_rgba(255,255,255,0.6)] hover:scale-105 flex items-center justify-center cursor-pointer"
          >
            Çözümlerimizi İnceleyin
          </a>
          <a 
            href="#iletisim" 
            onClick={(e) => handleScrollTo(e, 'iletisim')}
            className="flex items-center justify-center gap-3 px-8 py-4 bg-black/40 border border-white/20 backdrop-blur-xl text-white font-medium rounded-full hover:bg-white/10 hover:border-white/40 transition-all text-lg min-w-[200px] group cursor-pointer hover:shadow-[0_0_20px_rgba(41,151,255,0.2)]"
          >
            <PlayCircle className="text-neon-blue group-hover:scale-110 transition-transform" />
            Ücretsiz Keşif
          </a>
        </div>
      </div>

      <a 
        href="#5-parmak-modeli" 
        onClick={(e) => handleScrollTo(e, '5-parmak-modeli')}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce text-zinc-400 z-20 cursor-pointer hover:text-white transition-colors flex flex-col items-center group opacity-70 hover:opacity-100"
      >
        <span className="text-[10px] font-bold tracking-[0.2em] uppercase mb-2 block text-center text-neon-blue drop-shadow-[0_0_10px_rgba(41,151,255,0.8)]">Sistemi Keşfet</span>
        <ChevronDown size={24} className="mx-auto group-hover:scale-110 transition-transform text-white" />
      </a>
    </div>
  );
};