import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const menuItems = [
    { label: '5 Parmak Modeli', id: '5-parmak-modeli' },
    { label: 'Teknolojiler', id: 'teknolojiler' },
    { label: 'Health Check', id: 'health-check' },
    { label: 'İletişim', id: 'iletisim' }
  ];

  const handleScrollTo = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    setIsMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      const offset = 80; // Navbar yüksekliği kadar boşluk bırak
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

  // Official AlarmTR Logo URL (Updated)
  const logoSrc = "https://desecuretechnology.com/wp-content/uploads/2026/01/AlarmTR-Logo-beyaz.png";

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-500 ${isScrolled ? 'bg-black/80 backdrop-blur-xl border-b border-white/5 shadow-lg' : 'bg-transparent pt-4'}`}>
      <div className="max-w-[1400px] mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center gap-3 group cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
            <img 
              src={logoSrc} 
              alt="AlarmTR Logo" 
              className="h-10 shadow-[0_0_15px_rgba(153,27,27,0.4)] group-hover:scale-105 transition-transform duration-300" 
            />
            {/* Logo görseli yeterince açıklayıcı olduğu için yanındaki yazıyı kaldırıyorum veya sadeleştiriyorum. Kullanıcı isteğine göre logo birebir kullanılıyor. */}
          </div>
          
          <div className="hidden md:block">
            <div className="flex items-center space-x-2">
              {menuItems.map((item) => (
                <a
                  key={item.label}
                  href={`#${item.id}`}
                  onClick={(e) => handleScrollTo(e, item.id)}
                  className="text-zinc-400 hover:text-white px-4 py-2 rounded-full text-sm font-medium transition-all hover:bg-white/5 border border-transparent hover:border-white/10"
                >
                  {item.label}
                </a>
              ))}
              <a 
                href="#iletisim"
                onClick={(e) => handleScrollTo(e, 'iletisim')}
                className="ml-4 bg-white text-black hover:bg-zinc-200 transition-colors px-6 py-2.5 rounded-full font-bold text-sm cursor-pointer shadow-[0_0_15px_rgba(255,255,255,0.2)] hover:shadow-[0_0_25px_rgba(255,255,255,0.4)]"
              >
                Keşif İste
              </a>
            </div>
          </div>

          <div className="md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-white p-2"
            >
              {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {isMobileMenuOpen && (
        <div className="md:hidden bg-black/95 backdrop-blur-2xl border-b border-white/10 h-screen absolute w-full z-40 top-0 left-0">
          <div className="flex justify-end p-6">
             <button onClick={() => setIsMobileMenuOpen(false)} className="text-white p-2">
                <X size={28} />
             </button>
          </div>
          <div className="px-8 pt-4 space-y-6 flex flex-col items-center">
             {menuItems.map((item) => (
                <a
                  key={item.label}
                  href={`#${item.id}`}
                  onClick={(e) => handleScrollTo(e, item.id)}
                  className="text-3xl font-bold text-white block py-2 hover:text-neon-blue transition-colors"
                >
                  {item.label}
                </a>
              ))}
              <a 
                href="#iletisim"
                onClick={(e) => handleScrollTo(e, 'iletisim')}
                className="mt-8 bg-neon-blue text-white px-8 py-4 rounded-full text-xl font-bold w-full text-center"
              >
                Keşif İste
              </a>
          </div>
        </div>
      )}
    </nav>
  );
};