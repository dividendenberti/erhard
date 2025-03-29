import React from 'react';
import { ChevronLeft, ChevronRight, Car, PenTool as Tool, ShieldCheck, Package } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-[#1a1a1a] text-white">
      {/* Navigation */}
      <nav className="bg-[#1a1a1a] border-b border-[#333] px-4 py-3">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="text-2xl font-bold text-white">
            WIDHALM <span className="text-orange-500">HANDEL</span>
          </div>
          <div className="flex space-x-6">
            {['Produkte', 'Katalog', 'Händler', 'Kontakt'].map((item) => (
              <a key={item} href="#" className="text-gray-300 hover:text-orange-500 transition-colors">
                {item}
              </a>
            ))}
            <div className="flex space-x-2">
              {['DE', 'EN', 'CZ'].map((lang) => (
                <a key={lang} href="#" className="text-sm text-gray-400 hover:text-orange-500">
                  {lang}
                </a>
              ))}
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="relative bg-black">
        <div className="max-w-7xl mx-auto px-4 py-24">
          <div className="relative z-10 flex justify-between items-center">
            <ChevronLeft className="w-10 h-10 text-orange-500 cursor-pointer" />
            <div className="text-center">
              <h1 className="text-5xl font-light mb-6">Autoersatzteile</h1>
              <div className="flex justify-center space-x-4 mb-8">
                <img 
                  src="https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?auto=format&fit=crop&w=600&h=400" 
                  alt="Auto parts" 
                  className="rounded-lg shadow-lg"
                />
              </div>
            </div>
            <ChevronRight className="w-10 h-10 text-orange-500 cursor-pointer" />
          </div>
        </div>
      </div>

      {/* Features */}
      <div className="bg-[#1a1a1a] py-16">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-light text-center mb-12">WIDHALM HANDEL. Die Qualität macht den Unterschied</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: Car, title: 'Große Auswahl', desc: 'Über 50.000 Ersatzteile auf Lager' },
              { icon: Tool, title: 'Top Qualität', desc: 'Nur geprüfte Markenprodukte' },
              { icon: ShieldCheck, title: 'Garantierte Sicherheit', desc: 'Nach EU-Standards geprüft' },
              { icon: Package, title: 'Schnelle Lieferung', desc: '24h Express-Versand möglich' }
            ].map(({ icon: Icon, title, desc }) => (
              <div key={title} className="bg-[#222] p-6 rounded-lg text-center">
                <Icon className="w-12 h-12 text-orange-500 mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">{title}</h3>
                <p className="text-gray-400">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Our Brands Section */}
      <div className="bg-[#1a1a1a] py-16">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-light text-center mb-12">Unsere Eigenmarken</h2>
          <div className="flex justify-center">
            <img 
              src="https://i.imgur.com/dqOK1Y1.png" 
              alt="Unsere Eigenmarken" 
              className="max-w-full h-auto"
            />
          </div>
        </div>
      </div>

      {/* Suppliers Section */}
      <div className="bg-[#222] py-16">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-light text-center mb-12">Unsere Lieferanten</h2>
          <div className="flex flex-col items-center gap-8 max-w-5xl mx-auto">
            <img 
              src="https://i.imgur.com/dMl5f8R.png" 
              alt="Supplier 1" 
              className="w-full max-w-3xl h-auto bg-white p-6 rounded-lg"
            />
            <img 
              src="https://i.imgur.com/ObeF93N.png" 
              alt="Supplier 2" 
              className="w-full max-w-3xl h-auto bg-white p-6 rounded-lg"
            />
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-[#1a1a1a] border-t border-[#333] py-8">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-between items-center">
            <div className="text-2xl font-bold">
              WIDHALM <span className="text-orange-500">HANDEL</span>
            </div>
            <div className="text-gray-400 text-sm">
              © 2024 WIDHALM HANDEL. Alle Rechte vorbehalten.
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;