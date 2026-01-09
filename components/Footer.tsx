import React from 'react';

export const Footer: React.FC = () => {
  // Official AlarmTR Logo URL (Updated)
  const logoSrc = "https://desecuretechnology.com/wp-content/uploads/2026/01/AlarmTR-Logo-beyaz.png";

  return (
    <footer className="bg-black border-t border-gray-800 py-12 text-center">
      <div className="max-w-7xl mx-auto px-4 flex flex-col items-center">
        <div className="flex items-center gap-3 mb-5">
            <img 
              src={logoSrc} 
              alt="AlarmTR Logo" 
              className="h-10" 
            />
        </div>
        <p className="text-gray-500 text-sm max-w-2xl mx-auto leading-relaxed mb-4">
          © {new Date().getFullYear()} AlarmTR Güvenlik Teknolojileri A.Ş. Tüm hakları saklıdır. <br/>
          5188 Sayılı Yasa kapsamında yetkilendirilmiş, EGM denetimli Alarm İzleme Merkezi.
        </p>
        <div className="inline-block px-4 py-2 bg-white/5 rounded-full border border-white/10">
          <p className="text-neon-blue font-medium text-sm tracking-wide">
            Desecure Technology bir ALARMTR kuruluşudur.
          </p>
        </div>
      </div>
    </footer>
  );
};