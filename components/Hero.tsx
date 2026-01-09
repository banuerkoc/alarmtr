import React from 'react';
import { ChevronDown, PlayCircle } from 'lucide-react';

export const Hero: React.FC = () => {
  // Navbar yüksekliğini (80px) hesaba katan yumuşak kaydırma fonksiyonu
  const handleScrollTo = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      const offset = 80; // Navbar yüksekliği kadar pay bırak
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
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-black/50 z-10"></div> {/* Darker overlay for text readability */}
        <img
          src="https://desecuretechnology.com/wp-content/uploads/2026/01/a1.png"
          alt="Security Technology Background"
          className="w-full h-full object-cover scale-105 opacity-80"
        />
        
        {/* Cinematic Gradient Edges */}
        <div className="absolute inset-0 z-10 bg-[radial-gradient(circle_at_center,transparent_0%,#000000_100%)] opacity-80"></div>
      </div>

      <div className="relative z-20 max-w-[1400px] mx-auto px-6 text-center mt-20">
        <div className="animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            <span className="inline-flex items-center gap-2 py-1 px-3 rounded-full bg-white/5 border border-white/10 backdrop-blur-md text-xs font-medium text-white mb-8 tracking-wide">
                <span className="w-2 h-2 rounded-full bg-neon-blue animate-pulse"></span>
                Güvenlik Labirentinin Çıkış Yolu
            </span>
        </div>
        
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-white tracking-tighter mb-8 animate-fade-in-up leading-[1.1] drop-shadow-2xl">
          Güvenliğinizi <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-b from-white via-white to-zinc-500">Şansa Bırakmayın.</span>
        </h1>
        
        <p className="mt-6 max-w-3xl mx-auto text-xl md:text-2xl text-zinc-300 font-light leading-relaxed animate-fade-in-up drop-shadow-lg" style={{ animationDelay: '0.4s' }}>
           Pazarın "modası geçmiş" radar çözümleriyle değil, <strong className="text-white font-medium">5 Parmak Modeli</strong> ve <strong className="text-white font-medium">Yasal İzleme Merkezi</strong> güvencesiyle riskleri sıfıra indirin.
        </p>

        <div className="mt-12 flex flex-col md:flex-row gap-6 justify-center items-center animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
          <a 
            href="#5-parmak-modeli" 
            onClick={(e) => handleScrollTo(e, '5-parmak-modeli')}
            className="px-8 py-4 bg-white text-black font-semibold rounded-full hover:bg-zinc-200 transition-all text-lg min-w-[200px] shadow-[0_0_20px_rgba(255,255,255,0.3)] flex items-center justify-center cursor-pointer"
          >
            Çözümlerimizi İnceleyin
          </a>
          <a 
            href="#iletisim" 
            onClick={(e) => handleScrollTo(e, 'iletisim')}
            className="flex items-center justify-center gap-3 px-8 py-4 bg-black/40 border border-white/20 backdrop-blur-xl text-white font-medium rounded-full hover:bg-white/10 transition-all text-lg min-w-[200px] group cursor-pointer"
          >
            <PlayCircle className="text-white group-hover:scale-110 transition-transform" />
            Ücretsiz Keşif
          </a>
        </div>
      </div>

      <a 
        href="#5-parmak-modeli" 
        onClick={(e) => handleScrollTo(e, '5-parmak-modeli')}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce text-zinc-400 z-20 cursor-pointer hover:text-white transition-colors flex flex-col items-center group"
      >
        <span className="text-[10px] font-bold tracking-[0.2em] uppercase mb-2 block text-center opacity-70 group-hover:opacity-100 transition-opacity">Modeli Keşfet</span>
        <ChevronDown size={24} className="mx-auto group-hover:scale-110 transition-transform" />
      </a>
    </div>
  );
};