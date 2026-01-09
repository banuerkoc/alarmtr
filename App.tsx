import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Services } from './components/Services';
import { SecurityProtocols } from './components/SecurityProtocols';
import { DashboardPreview } from './components/DashboardPreview';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-deep-space text-white selection:bg-neon-blue selection:text-black relative">
      
      {/* Ambient Background Elements - Global */}
      <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden bg-black">
         {/* Moving Cyber Grid */}
         <div className="absolute inset-0 bg-grid-animate opacity-40 animate-grid-flow transform scale-150"></div>
        
        {/* Blue Blob - Top Left */}
        <div className="absolute top-[-10%] left-[-10%] w-[600px] h-[600px] bg-neon-blue/20 rounded-full mix-blend-screen filter blur-[100px] opacity-30 animate-blob"></div>
        
        {/* Purple Blob - Top Right/Middle */}
        <div className="absolute top-[30%] right-[-10%] w-[500px] h-[500px] bg-purple-500/15 rounded-full mix-blend-screen filter blur-[100px] opacity-20 animate-blob animation-delay-2000"></div>
        
        {/* Dark Blue/Teal Blob - Bottom Left */}
        <div className="absolute bottom-[-10%] left-[20%] w-[700px] h-[700px] bg-blue-900/20 rounded-full mix-blend-screen filter blur-[120px] opacity-25 animate-blob animation-delay-4000"></div>
      </div>

      <div className="relative z-10">
        <Navbar />
        <Hero />
        <Services />
        {/* Security Protocols (Interactive UI) */}
        <SecurityProtocols />
        {/* Dashboard Simulation (Visual UI) */}
        <DashboardPreview />
        <Contact />
        <Footer />
      </div>
    </div>
  );
}

export default App;