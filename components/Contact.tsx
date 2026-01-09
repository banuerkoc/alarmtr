import React from 'react';
import { Phone, Mail, MapPin, ArrowRight, ExternalLink, ShieldCheck } from 'lucide-react';

export const Contact: React.FC = () => {
  return (
    <section id="iletisim" className="py-32 relative overflow-hidden">
        {/* Background Video */}
        <div className="absolute inset-0 z-0">
            <div className="absolute inset-0 bg-gradient-to-r from-black via-black/90 to-black/60 z-10"></div>
             <video 
                autoPlay 
                loop 
                muted 
                playsInline
                className="w-full h-full object-cover opacity-50 grayscale"
            >
                {/* City Traffic / Data Flow Video */}
                <source src="https://videos.pexels.com/video-files/853889/853889-hd_1920_1080_25fps.mp4" type="video/mp4" />
            </video>
        </div>

      <div className="max-w-[1200px] mx-auto px-6 relative z-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            
            {/* Contact Info */}
            <div className="space-y-10">
                <div>
                     <div className="inline-block p-2 px-4 rounded-full bg-white/10 border border-white/20 text-white text-xs font-bold tracking-widest mb-6">
                        İLETİŞİME GEÇİN
                    </div>
                    <h2 className="text-5xl md:text-6xl font-bold mb-6 text-white leading-tight">
                        Güvenlik Açığı <br/> <span className="text-neon-blue">Maliyetlidir.</span>
                    </h2>
                    <p className="text-zinc-400 text-lg leading-relaxed">
                        İşletmenizi riske atmayın. Ücretsiz keşif ve risk analizi için uzman mühendislerimizle hemen görüşün.
                    </p>
                </div>

                <div className="grid gap-6">
                    <div className="glass-panel p-6 rounded-2xl flex items-center gap-5 hover:bg-white/5 transition-colors group cursor-pointer">
                        <div className="w-12 h-12 rounded-full bg-neon-blue/20 flex items-center justify-center text-neon-blue group-hover:scale-110 transition-transform flex-shrink-0">
                            <MapPin size={24} />
                        </div>
                        <div>
                            <p className="text-xs text-zinc-500 uppercase tracking-widest font-bold">Genel Merkez</p>
                            <p className="text-white text-base md:text-lg leading-snug">Sümer Mah. 2482/2 Sk. Skycity B Blok İş Merkezi No: 4/1 İç Kapı No: 9 Merkezefendi/Denizli</p>
                        </div>
                    </div>
                    
                    <div className="glass-panel p-6 rounded-2xl flex items-center gap-5 hover:bg-white/5 transition-colors group cursor-pointer">
                        <div className="w-12 h-12 rounded-full bg-neon-blue/20 flex items-center justify-center text-neon-blue group-hover:scale-110 transition-transform flex-shrink-0">
                            <Phone size={24} />
                        </div>
                        <div>
                            <p className="text-xs text-zinc-500 uppercase tracking-widest font-bold">Telefon</p>
                            <p className="text-white text-lg">444 76 33</p>
                        </div>
                    </div>
                    
                    <div className="glass-panel p-6 rounded-2xl flex items-center gap-5 hover:bg-white/5 transition-colors group cursor-pointer">
                         <div className="w-12 h-12 rounded-full bg-neon-blue/20 flex items-center justify-center text-neon-blue group-hover:scale-110 transition-transform flex-shrink-0">
                            <Mail size={24} />
                        </div>
                        <div>
                            <p className="text-xs text-zinc-500 uppercase tracking-widest font-bold">E-Posta</p>
                            <p className="text-white text-lg">info@alarmtr.com</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Direct Link CTA Card */}
            <div className="glass-panel p-8 md:p-12 rounded-3xl border-t border-white/20 shadow-[0_0_50px_rgba(41,151,255,0.1)] relative min-h-[400px] flex flex-col justify-center items-center text-center group overflow-hidden">
                
                {/* Background Effects */}
                <div className="absolute top-0 right-0 w-64 h-64 bg-neon-blue/10 blur-[80px] rounded-full pointer-events-none group-hover:bg-neon-blue/20 transition-all duration-700"></div>
                <div className="absolute inset-0 bg-gradient-to-b from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"></div>

                <div className="relative z-10 flex flex-col items-center">
                    <div className="w-24 h-24 bg-neon-blue/10 rounded-full flex items-center justify-center mb-8 border border-neon-blue/30 group-hover:scale-110 transition-transform duration-500 shadow-[0_0_30px_rgba(41,151,255,0.2)]">
                         <ShieldCheck className="text-neon-blue w-12 h-12" />
                    </div>

                    <h3 className="text-3xl font-bold text-white mb-4">
                        Keşif ve Teklif İste
                    </h3>
                    <p className="text-zinc-400 mb-10 max-w-sm leading-relaxed">
                        Detaylı projelendirme ve mühendislik hizmetlerimiz için kurumsal iletişim sayfamızı ziyaret edin.
                    </p>

                    <a 
                        href="https://desecuretechnology.com/iletisim/" 
                        target="_blank"
                        rel="noopener noreferrer"
                        className="relative inline-flex items-center justify-center gap-3 px-10 py-5 bg-white text-black font-bold text-lg rounded-full hover:bg-neon-blue hover:text-white transition-all duration-300 shadow-[0_0_20px_rgba(255,255,255,0.3)] hover:shadow-[0_0_40px_rgba(41,151,255,0.6)] group-hover:scale-105"
                    >
                        <span>İletişim Sayfasına Git</span>
                        <ExternalLink size={20} />
                    </a>
                </div>
            </div>
        </div>
      </div>
    </section>
  );
};